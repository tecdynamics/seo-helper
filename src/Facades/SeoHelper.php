<?php

namespace Tec\SeoHelper\Facades;

use Tec\SeoHelper\SeoHelper as BaseSeoHelper;
use Illuminate\Support\Facades\Facade;

/**
 * @method static \Tec\SeoHelper\SeoHelper setSeoMeta(\Tec\SeoHelper\Contracts\SeoMetaContract $seoMeta)
 * @method static \Tec\SeoHelper\SeoHelper setSeoOpenGraph(\Tec\SeoHelper\Contracts\SeoOpenGraphContract $seoOpenGraph)
 * @method static \Tec\SeoHelper\SeoHelper setSeoTwitter(\Tec\SeoHelper\Contracts\SeoTwitterContract $seoTwitter)
 * @method static \Tec\SeoHelper\Contracts\SeoOpenGraphContract openGraph()
 * @method static \Tec\SeoHelper\SeoHelper setTitle(string|null $title, string|null $siteName = null, string|null $separator = null)
 * @method static \Tec\SeoHelper\Contracts\SeoMetaContract meta()
 * @method static \Tec\SeoHelper\Contracts\SeoTwitterContract twitter()
 * @method static string|null getTitle()
 * @method static string|null getDescription()
 * @method static \Tec\SeoHelper\SeoHelper setDescription($description)
 * @method static mixed render()
 * @method static bool saveMetaData(string $screen, \Illuminate\Http\Request $request, \Illuminate\Database\Eloquent\Model $object)
 * @method static bool deleteMetaData(string $screen, \Illuminate\Database\Eloquent\Model $object)
 * @method static \Tec\SeoHelper\SeoHelper registerModule(array|string $model)
 *
 * @see \Tec\SeoHelper\SeoHelper
 */
class SeoHelper extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return BaseSeoHelper::class;
    }
}
