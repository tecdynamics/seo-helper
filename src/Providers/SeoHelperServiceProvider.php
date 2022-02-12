<?php

namespace Tec\SeoHelper\Providers;

use Tec\Base\Traits\LoadAndPublishDataTrait;
use Tec\SeoHelper\Contracts\SeoHelperContract;
use Tec\SeoHelper\Contracts\SeoMetaContract;
use Tec\SeoHelper\Contracts\SeoOpenGraphContract;
use Tec\SeoHelper\Contracts\SeoTwitterContract;
use Tec\SeoHelper\SeoHelper;
use Tec\SeoHelper\SeoMeta;
use Tec\SeoHelper\SeoOpenGraph;
use Tec\SeoHelper\SeoTwitter;
use Illuminate\Support\ServiceProvider;

/**
 * @since 02/12/2015 14:09 PM
 */
class SeoHelperServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(SeoMetaContract::class, SeoMeta::class);
        $this->app->bind(SeoHelperContract::class, SeoHelper::class);
        $this->app->bind(SeoOpenGraphContract::class, SeoOpenGraph::class);
        $this->app->bind(SeoTwitterContract::class, SeoTwitter::class);

        $this->setNamespace('packages/seo-helper')
            ->loadHelpers();
    }

    public function boot()
    {
        $this
            ->loadAndPublishConfigurations(['general'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets();

        $this->app->register(EventServiceProvider::class);

        $this->app->booted(function () {
            $this->app->register(HookServiceProvider::class);
        });
    }
}
