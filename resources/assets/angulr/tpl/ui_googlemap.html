<div class="wrapper-md">
  <div class="panel b-a" ng-controller="MapCtrl">
    <div class="panel-heading">Google Map</div>
    <div id="map_canvas" style="min-height:400px" ui-map="myMap"
         ui-event="{'map-click': 'addMarker($event, $params)', 'map-zoom_changed': 'setZoomMessage(myMap.getZoom())' }"
         ui-options="mapOptions">
    </div>
    <div class="panel-body">
        <h4 class="m-t-none">Click to add a marker!</h4>
        <p>{{zoomMessage}}</p>
        <ul class="list-unstyled list-inline">
          <li ng-repeat="marker in myMarkers">
            <a class="btn btn-default m-b-sm" ng-click="myMap.panTo(marker.getPosition())">
              Pan to Marker {{$index}}
            </a>
          </li>
        </ul>

        <!-- this is the confusing part. we have to point the map marker directive
            at an existing google.maps.Marker object, so it can hook up events -->
        <div ng-repeat="marker in myMarkers" ui-map-marker="myMarkers[$index]"
             ui-event="{'map-click': 'openMarkerInfo(marker)'}">
        </div>

        <div ui-map-info-window="myInfoWindow">
          <div class="m-b-sm">Marker</div>
          <div class="m-b-sm">
            <div class="pull-left m-t-xs">Lat: </div>
            <input ng-model="currentMarkerLat" class="form-control input-sm w-sm m-l-lg">
          </div>
          <div class="m-b-sm">
            <div class="pull-left m-t-xs">Lng: </div>
            <input ng-model="currentMarkerLng" class="form-control input-sm w-sm m-l-lg">
          </div>
          <a class="btn btn-default btn-sm m-l-lg m-b-sm" ng-click="setMarkerPosition(currentMarker, currentMarkerLat, currentMarkerLng)">Set Position</a>
        </div>
    </div>
  </div>
</div>