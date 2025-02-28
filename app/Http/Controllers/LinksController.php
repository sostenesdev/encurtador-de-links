<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Links;

class LinksController extends Controller
{
    public function index($slug)
    {
        $link = Links::where('slug', $slug)->first();

        if ($link) {
            $link->visits++;
            $link->save();
            return $link;
        }

        return response->json(['error' => 'Link not found'], 404);
    }

    public function store(Request $request)
    {

        $request->validate([
            'url' => 'required|url',
            'description' => 'required'
        ]);

        

        $slug = $request->slug != null ? $request->slug : generateSlug($description);

        $link = new Links();
        $link->url = $request->url;
        $link->slug = $slug;
        $link->description = $request->description;
        $link->save();

        return $link;
    }

    //update method
    public function update(Request $request, $id)
    {
        $request->validate([
            'url' => 'required|url',
            'description' => 'required'
        ]);

        $link = Links::find($id);

        $slug = $request->slug != null ? $request->slug : generateSlug($description);

        if ($link) {
            $link->url = $request->url;
            $link->description = $request->description;
            $link->slug = $slug;
            $link->save();

            return $link;
        }

        return response->json(['error' => 'Link not found'], 404);
    }

    public function show($slug)
    {
        $link = Link::where('slug', $slug)->first();

        if ($link) {
            $link->visits++;
            $link->save();
            return redirect($link->url);
        }

        return JSON::response(['error' => 'Link not found'], 404);
    }

    public function destroy($id)
    {
        $link = Links::find($id);

        if ($link) {
            $link->delete();
            return JSON::response(['message' => 'Link deleted']);
        }

        return JSON::response(['error' => 'Link not found'], 404);
    }

    //list links
    public function list()
    {
        return Links::all();
    }

    

    //crie um método para gerar um slug à partir da description considere remover os caracteres especiais  do português brasileiro
    public function generateSlug($description)
    {
        $slug = str_replace(' ', '-', $description);
        $slug = preg_replace('/[^\w\d\-\_]/', '', $slug);
        return $slug;
    }
    
}
