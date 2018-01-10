<?php

namespace App\Http\Controllers\Api_v1;

use App\Models\Payment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $payment->created_by = $request->input('user_id');
        $payment->save();
        $payment->notes()->create([
            'content' => $request->reason,
            'action' => 'create',
            'actor_id' => $request->user()->id,
        ]);
        // Update invoice
        $invoice = $payment->invoice;
        $invoice->payment_total += $payment->amount;
        $invoice->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Payment  $payment
     * @return \Illuminate\Http\Response
     */
    public function show(Payment $payment)
    {
        $payment->loadMissing(['invoice', 'notes', 'notes.actor', 'creator']);
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
        return response()->json([
            "name" => $payment->name,
            "id" => $payment->id,
            "paid_on" => $payment->paid_on->format('d/m/Y'),
            "amount" => $payment->amount,
            "method" => $payment->method,
            "creator" => [
                "id" => $payment->creator->id,
                "name" => $payment->creator->name,
            ],
            "invoice" => [
                "id" => $payment->invoice->id,
                "name" => $payment->invoice->name,
            ],
            "content" => $payment->content,
            "notes" => $notes,
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
        //
    }
}
