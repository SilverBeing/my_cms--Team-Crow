<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserTemplateController;
use App\Http\Controllers\TemplateController;
use Illuminate\Support\Facades\Auth;
use App\Models\Template;
use App\Models\UserTemplate;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::post('/login', [login::class, 'loginUser']);

// Route::post('/registeruser', [login::class, 'registerUser']);

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);




Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/home', function () {
    if(Auth::user()->type == 1):
        return redirect()->route('original.template.index');
    endif;
    return redirect()->route('user.template.index');
})->name('home');


// Route::apiResource('posts', PostController::class)->middleware('auth:sanctum');

Route::get('/template', [TemplateController::class, 'publicIndex'])->name('public.template.index');
Route::get('/template/{originalTemplate}/preview', [TemplateController::class, 'show'])->name('public.template.preview');
Route::get('/template/{originalTemplate}/iframe', [TemplateController::class, 'iframe'])->name('public.template.iframe');

Route::group(['middleware' => 'auth'], function () {
    // Admin routes //
    //
    // view templates
    Route::get('/admin/template', [TemplateController::class, 'index'])->name('original.template.index');
    // create template
    Route::get('/admin/template/create', [TemplateController::class, 'create'])->name('original.template.create');
    // save template
    Route::post('/admin/template/store', [TemplateController::class, 'store'])->name('original.template.store');
    // edit template
    Route::get('/admin/template/{originalTemplate}/edit', [TemplateController::class, 'edit'])->name('original.template.edit');
    // update template
    Route::put('/admin/template/{originalTemplate}/update', [TemplateController::class, 'update'])->name('original.template.update');
    // preview template
    Route::get('/admin/template/{originalTemplate}/preview', [TemplateController::class, 'show'])->name('original.template.preview');
    Route::get('/admin/template/{originalTemplate}/iframe', [TemplateController::class, 'iframe'])->name('original.template.iframe');
    // delete template
    Route::delete('/admin/template/{originalTemplate}/destroy', [TemplateController::class, 'destroy'])->name('original.template.destroy');


    // User routes //
    //
    // my-templates
    Route::get('/user/templates', [UserTemplateController::class, 'index'])->name('user.template.index');
    // modify template
    Route::get('/template/{originalTemplate}/modify', [TemplateController::class, 'modify'])->name('public.template.modify');
    // save template
    Route::post('/user/template/store', [UserTemplateController::class, 'store'])->name('user.template.store');
    // edit template
    Route::get('/user/template/{userTemplate}/edit', [UserTemplateController::class, 'edit'])->name('user.template.edit');
    // update template
    Route::put('/user/template/{userTemplate}/update', [UserTemplateController::class, 'update'])->name('user.template.update');
    // preview saved template
    Route::get('/user/template/{userTemplate}/preview', [UserTemplateController::class, 'show'])->name('user.template.preview');
    Route::get('/user/template/{userTemplate}/iframe', [UserTemplateController::class, 'iframe'])->name('user.template.iframe');
    // delete template
    Route::delete('/user/template/{userTemplate}/delete', [UserTemplateController::class, 'destroy'])->name('user.template.destroy');

   
    //
    // view-templates
    // add-templates
    // edit-templates
    // delete-templates
});