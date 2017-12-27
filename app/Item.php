<?php

// Item.php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    /**
     * @var array
     */
    public static $rule = [
        'name' => 'required',
        'price' => 'required',
    ];
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'price'
    ];
    /**
     * @var bool
     */
    public $timestamps = false;
}