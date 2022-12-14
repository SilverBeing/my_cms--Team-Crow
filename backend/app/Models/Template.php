<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    use HasFactory;

    protected $table = 'templates';


    protected $fillable = [
        'name',
        'content_html',
        'content_css',
        'preview_image',
        'author',
    ];
}
