<?php

namespace Tec\SeoHelper\Listeners;

use Tec\Base\Events\UpdatedContentEvent;
use Tec\Base\Facades\BaseHelper;
use Tec\SeoHelper\Facades\SeoHelper;
use Exception;

class UpdatedContentListener
{
    public function handle(UpdatedContentEvent $event): void
    {
        try {
            SeoHelper::saveMetaData($event->screen, $event->request, $event->data);
        } catch (Exception $exception) {
            BaseHelper::logError($exception);
        }
    }
}
