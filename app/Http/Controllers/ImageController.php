<?php namespace Someline\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Someline\Http\Controllers\BaseController;
use Someline\Image\Controllers\SomelineImageController;
use Someline\Models\Image\SomelineImage;
use Someline\Image\SomelineImageService;

class ImageController extends BaseController
{

    public function postImage(Request $request)
    {
        $somelineImageService = new SomelineImageService();
        $file = $request->file('image');

        $somelineImage = null;
        try {
            /** @var SomelineImage $somelineImage */
            $somelineImage = $somelineImageService->handleUploadedFile($file);
        } catch (Exception $e) {
            return response('Failed to save: ' . $e->getMessage(), 422);
        }

        if (!$somelineImage) {
            return response('Failed to save uploaded image.', 422);
        }

        $somelineImageId = $somelineImage->getSomelineImageId();
        return response([
            'data' => [
                'someline_image_id' => $somelineImage->getSomelineImageId(),
                'someline_image_url' => $somelineImage->getImageUrl(),
                'thumbnail_image_url' => $somelineImage->getTypeImageUrl('thumbnail'),
            ]
        ]);
    }

    public function showOriginalImage($image_name)
    {
        return SomelineImageController::showImage('original', $image_name);
    }

    public function showTypeImage($type, $image_name)
    {
        return SomelineImageController::showImage($type, $image_name);
    }

}