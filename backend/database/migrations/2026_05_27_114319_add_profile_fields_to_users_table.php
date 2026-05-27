<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * プロフィール用カラムを users テーブルに追加
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nickname')->nullable()->after('name');
            $table->enum('gender', ['male', 'female'])->nullable()->after('nickname');
            $table->integer('age')->nullable()->after('gender');
            $table->string('prefecture')->nullable()->after('age');
            $table->string('provider')->nullable()->after('prefecture');
            $table->string('provider_id')->nullable()->after('provider');
            $table->string('avatar')->nullable()->after('provider_id');
            $table->string('bio')->nullable()->after('avatar');
            $table->boolean('is_verified')->default(false)->after('bio');
        });
    }

    /**
     * ロールバック処理
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['nickname', 'gender', 'age', 'prefecture', 'provider', 'provider_id', 'avatar', 'bio', 'is_verified']);
        });
    }
};
