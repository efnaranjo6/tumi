<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Factories\personaFactory;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->singleton(personaFactory::class, function ($app) {
            return new personaFactory();
        });

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
