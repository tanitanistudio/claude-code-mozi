<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    /**
     * メール・パスワードで会員登録
     */
    public function register(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|min:8',
            'nickname'   => 'required|string|max:50',
            'gender'     => 'required|in:male,female',
            'age'        => 'required|integer|min:18|max:80',
            'prefecture' => 'required|string',
        ]);

        $user = User::create([
            'name'       => $validated['nickname'],
            'email'      => $validated['email'],
            'password'   => $validated['password'],
            'nickname'   => $validated['nickname'],
            'gender'     => $validated['gender'],
            'age'        => (int) $validated['age'],
            'prefecture' => $validated['prefecture'],
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token], 201);
    }

    /**
     * メール・パスワードでログイン
     */
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            throw ValidationException::withMessages([
                'email' => ['メールアドレスまたはパスワードが正しくありません。'],
            ]);
        }

        $user  = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $user, 'token' => $token]);
    }

    /**
     * ログアウト
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'ログアウトしました。']);
    }

    /**
     * ログイン中のユーザー情報取得
     */
    public function me(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }

    /**
     * Google OAuth リダイレクト
     */
    public function googleRedirect()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    /**
     * Google OAuth コールバック
     */
    public function googleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
        } catch (\Exception $e) {
            $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
            return redirect("{$frontendUrl}/login?error=oauth_failed");
        }

        $user = User::updateOrCreate(
            ['provider' => 'google', 'provider_id' => $googleUser->getId()],
            [
                'name'     => $googleUser->getName(),
                'email'    => $googleUser->getEmail(),
                'avatar'   => $googleUser->getAvatar(),
                'nickname' => $googleUser->getName(),
                'password' => bcrypt(\Illuminate\Support\Str::random(24)),
            ]
        );

        $token = $user->createToken('auth_token')->plainTextToken;
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
        return redirect("{$frontendUrl}/oauth/callback?token={$token}");
    }

    /**
     * X (Twitter) OAuth リダイレクト
     */
    public function twitterRedirect()
    {
        return Socialite::driver('twitter')->redirect();
    }

    /**
     * X (Twitter) OAuth コールバック
     */
    public function twitterCallback()
    {
        try {
            $twitterUser = Socialite::driver('twitter')->user();
        } catch (\Exception $e) {
            $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
            return redirect("{$frontendUrl}/login?error=oauth_failed");
        }

        $email = $twitterUser->getEmail() ?? "{$twitterUser->getId()}@x-placeholder.com";

        $user = User::updateOrCreate(
            ['provider' => 'twitter', 'provider_id' => $twitterUser->getId()],
            [
                'name'     => $twitterUser->getName(),
                'email'    => $email,
                'avatar'   => $twitterUser->getAvatar(),
                'nickname' => $twitterUser->getNickname(),
                'password' => bcrypt(\Illuminate\Support\Str::random(24)),
            ]
        );

        $token = $user->createToken('auth_token')->plainTextToken;
        $frontendUrl = env('FRONTEND_URL', 'http://localhost:5173');
        return redirect("{$frontendUrl}/oauth/callback?token={$token}");
    }
}
