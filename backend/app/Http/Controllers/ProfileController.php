<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ProfileController extends Controller
{
    /**
     * ログイン中ユーザーのプロフィール取得
     */
    public function show(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }

    /**
     * プロフィール更新
     */
    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nickname'   => 'sometimes|string|max:50',
            'gender'     => 'sometimes|in:male,female',
            'age'        => 'sometimes|integer|min:18|max:80',
            'prefecture' => 'sometimes|string',
            'bio'        => 'sometimes|string|max:500|nullable',
        ]);

        $request->user()->update($validated);

        return response()->json($request->user()->fresh());
    }
}
