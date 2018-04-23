<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Invoice;

class RebuildInvoices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'invoice:rebuild';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Rebuild Invoices and Payments and Receives base on trackers';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $invoices = Invoice::with(['payments', 'receives', 'trackers'])->get();
        $this->info("Load {$invoices->count()} invoices, prepare for processing.");
        foreach ($invoices as $invoice) {
            $this->info("Processing invoice id {$invoice->id}");
            $total_payments = 0;
            $dirty = false;
            foreach ($invoice->trackers as $tracker) {
                if ($tracker->vat === null) {
                    $dirty = true;
                    $this->info("Fixing Tracker id {$tracker->id}. Reason: null VAT");
                    $tracker->vat = 10;

                    $tracker->vat_sum = (floatval($tracker->unit) * floatval($tracker->cost) * (floatval($tracker->vat)/100));
                    $tracker->total = (floatval($tracker->unit) * floatval($tracker->cost) * (floatval($tracker->vat)/100 + 1));

                    $this->info("New vat_sum {$tracker->vat_sum} || New total {$tracker->total}");
                    $tracker->save();
                }
            }
            $invoice->total = $invoice->trackers->sum('total');
            $invoice->payment_total = $invoice->payments->sum('amount');
            $invoice->save();
            $this->info("-----------------------");
        }
    }
}
