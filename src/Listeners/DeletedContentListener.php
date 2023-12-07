<?php

namespace Tec\SeoHelper\Listeners;

use Tec\Base\Events\DeletedContentEvent;
use Tec\Base\Facades\BaseHelper;
use Tec\SeoHelper\Facades\SeoHelper;
use Exception;

class DeletedContentListener
{
    public function handle(DeletedContentEvent $event): void
    {
        try {
            SeoHelper::deleteMetaData($event->screen, $event->data);
        } catch (Exception $exception) {
            BaseHelper::logError($exception);
        }
    }
}
