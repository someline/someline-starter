<?php

use Someline\Image\ImageTemplate;

return array(

    /**
     * Storage Path for all images
     */
    'storage_path' => storage_path('app/images/original/'),

    /**
     * Templates that will be used when showing image
     */
    'image_templates' => [

        'original' => (new ImageTemplate(0, 0)),

        'avatar_small' => (new ImageTemplate(80, 80)),
        'avatar_large' => (new ImageTemplate(120, 120)),

        'product_list' => (new ImageTemplate(360, 300)),

//        'heighten' => (new ImageTemplate(0, 500)),
//        'widen' => (new ImageTemplate(500, 0)),

    ],

);
