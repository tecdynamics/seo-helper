<?php

namespace Tec\SeoHelper\Providers;

use Tec\Base\Contracts\BaseModel;
use Tec\Base\Facades\Assets;
use Tec\Base\Facades\BaseHelper;
use Tec\Base\Facades\MetaBox;
use Tec\Base\Supports\ServiceProvider;
use Tec\Page\Models\Page;
use Tec\SeoHelper\Facades\SeoHelper;
use Illuminate\Database\Eloquent\Model;

class HookServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->app->booted(function () {
            add_action(BASE_ACTION_META_BOXES, [$this, 'addMetaBox'], 12, 2);
            add_action(BASE_ACTION_PUBLIC_RENDER_SINGLE, [$this, 'setSeoMeta'], 56, 2);
        });
    }

    public function addMetaBox(string $priority, BaseModel|null $data): void
    {
        if ($priority == 'advanced' && ! empty($data) && in_array($data::class, config('packages.seo-helper.general.supported', []))) {
            if ($data instanceof Page && BaseHelper::isHomepage($data->getKey())) {
                return;
            }

            Assets::addScriptsDirectly('vendor/core/packages/seo-helper/js/seo-helper.js')
                ->addStylesDirectly('vendor/core/packages/seo-helper/css/seo-helper.css');

            MetaBox::addMetaBox(
                'seo_wrap',
                trans('packages/seo-helper::seo-helper.meta_box_header'),
                [$this, 'seoMetaBox'],
                get_class($data),
                'advanced',
                'low'
            );
        }
    }

    public function seoMetaBox(): string
    {
        $meta = [
            'seo_title' => null,
            'seo_description' => null,
        ];

        $args = func_get_args();
        if (! empty($args[0]) && $args[0]->id) {
            $metadata = MetaBox::getMetaData($args[0], 'seo_meta', true);
        }

        if (! empty($metadata) && is_array($metadata)) {
            $meta = array_merge($meta, $metadata);
        }

        $object = $args[0];

        return view('packages/seo-helper::meta-box', compact('meta', 'object'));
    }

    public function setSeoMeta(string $screen, BaseModel|Model|null $object): bool
    {
        if ($object instanceof Page && BaseHelper::isHomepage($object->getKey())) {
            return false;
        }

        $object->loadMissing('metadata');

        $meta = $object->getMetaData('seo_meta', true);

        if (! empty($meta)) {
            if (! empty($meta['seo_title'])) {
                SeoHelper::setTitle($meta['seo_title']);
            }

            if (! empty($meta['seo_description'])) {
                SeoHelper::setDescription($meta['seo_description']);
            }
        }

        return true;
    }
}
