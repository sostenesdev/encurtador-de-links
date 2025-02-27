<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function index($slug)
    {
        $link = Link::where('slug', $slug)->first();

        if ($link) {
            $link->visits++;
            $link->save();
            return redirect($link->url);
        }

        return JSON::response(['error' => 'Link not found'], 404);
    }

    public function store(Request $request)
    {
        $request->validate([
            'url' => 'required|url',
            'description' => 'required'
        ]);

        $slug = $request->slug != null ? $request->slug : base_convert($id, 10, 36);

        $link = new Link();
        $link->url = $request->url;
        $link->slug = $slug;
        $link->description = $request->description;
        $link->save();

        return JSON::response($link);
    }

    //update method
    public function update(Request $request, $id)
    {
        $request->validate([
            'url' => 'required|url',
            'description' => 'required'
        ]);

        $link = Link::find($id);

        $slug = $request->slug != null ? $request->slug : base_convert($id, 10, 36);

        if ($link) {
            $link->url = $request->url;
            $link->description = $request->description;
            $link->slug = $slug;
            $link->save();

            return JSON::response($link);
        }

        return JSON::response(['error' => 'Link not found'], 404);
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
        $link = Link::find($id);

        if ($link) {
            $link->delete();
            return JSON::response(['message' => 'Link deleted']);
        }

        return JSON::response(['error' => 'Link not found'], 404);
    }
}
