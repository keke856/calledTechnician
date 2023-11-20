<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Called extends Model
{
    use HasFactory;

    protected $fillable = [
        'idCalled',
        'type',
        'description',
        'status',
        'create',
        'createTime',
        'end',
        'endTime'
    ];
    public $timestamps = false;


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
