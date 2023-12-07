<?php

namespace Tec\SeoHelper\Entities\OpenGraph;

use Tec\SeoHelper\Bases\MetaCollection as BaseMetaCollection;

class MetaCollection extends BaseMetaCollection
{
    protected $prefix = 'og:';

    protected $nameProperty = 'property';
}
