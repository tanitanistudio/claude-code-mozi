<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * 一括代入可能なカラム
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'nickname',
        'gender',
        'age',
        'prefecture',
        'provider',
        'provider_id',
        'avatar',
        'bio',
        'is_verified',
    ];

    /**
     * レスポンスから除外するカラム
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * 型キャスト
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password'          => 'hashed',
            'is_verified'       => 'boolean',
        ];
    }
}
