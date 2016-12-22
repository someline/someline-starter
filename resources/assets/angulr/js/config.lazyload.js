// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   'vendors/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   'vendors/bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   'vendors/bower_components/flot/jquery.flot.js',
                          'vendors/bower_components/flot/jquery.flot.pie.js',
                          'vendors/bower_components/flot/jquery.flot.resize.js',
                          'vendors/bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
                          'vendors/bower_components/flot.orderbars/js/jquery.flot.orderBars.js',
                          'vendors/bower_components/flot-spline/js/jquery.flot.spline.js'],
      moment:         [   'vendors/bower_components/moment/moment.js'],
      screenfull:     [   'vendors/bower_components/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   'vendors/bower_components/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   'vendors/bower_components/html5sortable/jquery.sortable.js'],
      nestable:       [   'vendors/bower_components/nestable/jquery.nestable.js',
                          'vendors/bower_components/nestable/jquery.nestable.css'],
      filestyle:      [   'vendors/bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   'vendors/bower_components/bootstrap-slider/bootstrap-slider.js',
                          'vendors/bower_components/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   'vendors/bower_components/chosen/chosen.jquery.min.js',
                          'vendors/bower_components/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   'vendors/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          'vendors/bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   'vendors/bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          'vendors/bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   'vendors/bower_components/datatables/media/js/jquery.dataTables.min.js',
                          'vendors/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          'vendors/bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   'vendors/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
                          'vendors/bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          'vendors/bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          'vendors/bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   'vendors/bower_components/footable/dist/footable.all.min.js',
                          'vendors/bower_components/footable/css/footable.core.css'],
      fullcalendar:   [   'vendors/bower_components/moment/moment.js',
                          'vendors/bower_components/fullcalendar/dist/fullcalendar.min.js',
                          'vendors/bower_components/fullcalendar/dist/fullcalendar.css',
                          'vendors/bower_components/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   'vendors/bower_components/moment/moment.js',
                          'vendors/bower_components/bootstrap-daterangepicker/daterangepicker.js',
                          'vendors/bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   'vendors/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          'vendors/bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css'],
      dropzone:       [   'vendors/bower_components/dropzone/dist/min/dropzone.min.js',
                          'vendors/bower_components/dropzone/dist/min/basic.min.css',
                          'vendors/bower_components/dropzone/dist/min/dropzone.min.css']

    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      'vendors/bower_components/ng-grid/build/ng-grid.min.js',
                      'vendors/bower_components/ng-grid/ng-grid.min.css',
                      'vendors/bower_components/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      'vendors/bower_components/angular-ui-grid/ui-grid.min.js',
                      'vendors/bower_components/angular-ui-grid/ui-grid.min.css',
                      'vendors/bower_components/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      'vendors/bower_components/angular-ui-select/dist/select.min.js',
                      'vendors/bower_components/angular-ui-select/dist/select.min.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    'vendors/bower_components/angular-file-upload/angular-file-upload.min.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['vendors/bower_components/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      'vendors/bower_components/ngImgCrop/compile/minified/ng-img-crop.js',
                      'vendors/bower_components/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      'vendors/bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      'vendors/bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      'vendors/bower_components/angularjs-toaster/toaster.js',
                      'vendors/bower_components/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      'vendors/bower_components/textAngular/dist/textAngular-sanitize.min.js',
                      'vendors/bower_components/textAngular/dist/textAngular.min.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      'vendors/bower_components/venturocket-angular-slider/build/angular-slider.min.js',
                      'vendors/bower_components/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      'vendors/bower_components/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      'vendors/bower_components/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      'vendors/bower_components/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      'vendors/bower_components/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      'vendors/bower_components/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      'vendors/bower_components/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      'vendors/bower_components/angular-xeditable/dist/js/xeditable.min.js',
                      'vendors/bower_components/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      'vendors/bower_components/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;
