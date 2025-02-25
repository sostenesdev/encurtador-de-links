<?php

namespace App\Http\Services;

use App\Models\User;

class UsuarioService
{
    /**
     * Retorna os registros do model User paginados.
     *
     * @param int $perPage
     * @return \Illuminate\Http\JsonResponse
     */
    public static function getUsuarios($page = 0,  $pageSize = 10, $search = null)
    {
        $data = [];
        if($search != null){
            $users = User::where('name', 'like', '%'.$search.'%')->skip($page * $pageSize)->take($pageSize)->get(); 
        }else{
            $users = User::skip($page * $pageSize)->take($pageSize)->get();
        }
        $data =[
            "rows" => $users,
            "total" => User::count(),
            "page" => $page,
            "pageSize" => $pageSize
        ];
        return response()->json($data);
    }
}