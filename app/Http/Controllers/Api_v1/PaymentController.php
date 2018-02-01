<?php

namespace App\Http\Controllers\Api_v1;

use App\Models\Payment;

use App\Http\Resources\PaymentResource;
use App\Http\Resources\InvoiceResource;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $payments = Payment::when($request->filled('not_in'), function($query) use ($request) {
            $not_in_array = explode(",", $request->query('not_in'));
            return $query->whereNotIn('id', $not_in_array);
        })->when($request->filled('invoice_id'), function($query) use ($request) {
            return $query->where('invoice_id', $request->query('invoice_id'));
        })->get();
        return PaymentResource::collection($payments);
    }
    public function archive(Request $request)
    {

        if ($request->input('from')) 
        {
            $date = explode("-", $request->input('from'));
            $payments = Payment::whereMonth('paid_on', $date[1])
                                ->whereYear('paid_on', $date[0])
                                ->with(['invoice', 'invoice.work'])
                                ->get();
            $invoices = $payments->pluck('invoice')->unique();
            $works = $invoices->pluck('work')->unique();
            return PaymentResource::collection($payments)->additional([
                'related' => [
                    'invoices' => $invoices->toArray(),
                    'works' => $works->toArray(),
                ],
            ]);
        } else {
            return response()->json(['message' => "no_date"], 400);
        }
        
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $payment = new Payment;
        $payment->name = $request->input('name');
        $payment->paid_on = $request->input('paid_on');
        $payment->content = $request->input('content');
        $payment->amount = $request->input('amount');
        $payment->method = $request->input('method');
        $payment->invoice_id = $request->input('invoice_id');
        $payment->created_by = $request->user()->id;
        $payment->save();
        $payment->notes()->create([
            'content' => "Tạo thanh toán",
            'action' => 'create',
            'actor_id' => $request->user()->id,
        ]);
        // Update invoice
        $invoice = $payment->invoice;
        $invoice->payment_total += $payment->amount;
        $invoice->save();

        return response()->json([
            'message' => 'Success',
            'created' => new PaymentResource($payment),
            'affected' => [
                'invoice' => new InvoiceResource($invoice),
            ],
        ]);

    }
    public function fromInvoice(int $invoice_id, Request $request)
    {
        $payments = Payment::where('invoice_id', $invoice_id)
            ->when($request->filled('disclude'), function ($query) use ($request) {
                $not_in = explode(",", $request->query('disclude'));
                return $query->whereNotIn('id', $not_in);
            })->get();
        return PaymentResource::collection($payments);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        $payment->loadMissing(['notes', 'notes.actor', 'creator']);
        $notes = [];
        foreach ($payment->notes as $note) {
            $notes[] = [
                'id' => $note->id,
                'title' => $note->title,
                'content' => $note->content,
                'actor_id' => $note->actor_id,
                'actor_name' => $note->actor->name,
                'action' => $note->action,
                'created_at' => $note->created_at->format('d/m/Y'),
            ];
        }
        return (new PaymentResource($payment))->additional([
            'extra' => [
                'creator' => $payment->creator,
                'notes' => $notes,
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function edit(Payment $payment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Payment $payment)
    {
        if ($request->name !== $payment->name) {
            $payment->name = $request->name;
            
        }
        if ($request->amount !== $payment->amount) {
            $payment->load('invoice');
            $payment->invoice->payment_total = $payment->invoice->payment_total - $payment->amount + $request->amount;
            $payment->amount = $request->amount;
            $payment->invoice->save();
        }
        if ($request->paid_on !== $payment->paid_on) {
            $payment->paid_on = $request->paid_on;
            
        }
        if ($request->content !== $payment->content) {
            $payment->content = $request->content;
            
        }
        if ($request->method !== $payment->method) {
            $payment->method = $request->method;
        }
        $payment->save();
        
        $payment->notes()->create([
            'content' => $request->reason,
            'action' => 'edit',
            'actor_id' => $request->user()->id,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Payment $payment)
    {
        $invoice = $payment->invoice;
        $invoice->decrement('payment_total', $payment->amount);

        $payment->delete();
        return response()->json([
            'message' => 'success',
            'affected' => [
                'invoice' => new InvoiceResource($invoice),
            ],
        ]);
    }
}
