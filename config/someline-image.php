<?php

use Someline\Image\ImageTemplate;

return array(

    /**
     * Default image store quality
     * default: 75
     */
    'default_quality' => 75,

    /**
     * Store quality for large images, which are 2000kb or larger,
     * default: 65
     */
    'large_image_quality' => 65,

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
