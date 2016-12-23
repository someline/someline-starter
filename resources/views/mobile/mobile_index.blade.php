@extends('mobile.layout.frame_mobile')

@section('content')
    <div class="app-content-body app-content-full fade-in ng-scope" ng-class="{'h-full': app.hideFooter }" ui-view=""><div class="hbox hbox-auto-xs ng-scope" ng-init="
  app.settings.asideFixed = true;
  app.settings.asideDock = false;
  app.settings.container = false;
  app.hideAside = false;
  app.hideFooter = false;
  ">
            <div class="col w-md w-auto-xs bg-light lter b-r">
                <div class="wrapper">
                    Left
                </div>
            </div>
            <div class="col">
                <div class="wrapper">
                    Main
                </div>
            </div>
        </div></div>
@endsection