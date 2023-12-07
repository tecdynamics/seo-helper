<?php

namespace Tec\SeoHelper\Listeners;

use Tec\Base\Events\CreatedContentEvent;
use Tec\Base\Facades\BaseHelper;
use Tec\SeoHelper\Facades\SeoHelper;
use Exception;

class CreatedContentListener
{
    public function handle(CreatedContentEvent $event): void
    {
        try {
            SeoHelper::saveMetaData($event->screen, $event->request, $event->data);
        } catch (Exception $exception) {
            BaseHelper::logError($exception);
        }
    }
}
