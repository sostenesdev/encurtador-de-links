<?php

namespace App\Http\Controllers;

use App\Http\Services\UsuarioService;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        $page = $request->input('page', 0);
        $pageSize = $request->input('pageSize', 10);
        $search = $request->input('search', null);

        return UsuarioService::getUsuarios($page, $pageSize, $search);
    }
}
