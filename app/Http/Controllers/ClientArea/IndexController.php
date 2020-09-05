<?php

namespace App\Http\Controllers\ClientArea;

use Illuminate\Http\Request;
use Dimension\Http\Controllers\Controller;
use KgBot\LaravelLocalization\Facades\ExportLocalizations as ExportLocalization;

class IndexController extends Controller
{
    public function index()
    {
        return view('clientarea.index', ['localization' => ExportLocalization::export()->toArray()]);
    }
}
