<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Links extends Model
{
    use softDeletes;
    protected $fillable = [
        'url',
        'slug',
        'description',
        'visits'
    ];
}
