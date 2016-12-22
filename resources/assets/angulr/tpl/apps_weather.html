<div class="hbox hbox-auto-xs hbox-auto-sm" ng-controller="WeatherCtrl">
  <div class="col w-lg bg-light dk b-r bg-auto">
    <div class="wrapper-md dker b-b">
      <div class="input-group">
         <input type="text" class="form-control" ng-model="userSearchText" placeholder="Town State Country...">
         <div class="input-group-btn">
            <button type="button" class="btn btn-default" ng-click="getLocations()">Search</button>
         </div>
      </div>
    </div>
    <!-- show search results for user input -->
    <div class="wrapper-md">
      <ul class="list-group list-group-sp" ng-show="search.query.count > 1">
        <li class="list-group-item" ng-repeat="loc in search.query.results.place">
          <a class="clear text-ellipsis" ng-click="getWeather(loc.woeid, loc.name, loc.country.content)">{{loc.name}}, {{loc.admin1.content}}, {{loc.country.content}}</a>
        </li>
      </ul>
      <ul class="list-group list-group-sp">
        <li class="list-group-item">
          <a href ng-click="getWeather(2459115,'New York','United States')">New York</a>
        </li>
        <li class="list-group-item">
          <a href ng-click="getWeather(615702,'Paris','France')">Paris</a>
        </li>
        <li class="list-group-item">
          <a href ng-click="getWeather(44418,'London','United Kingdom')">London</a>
        </li>
        <li class="list-group-item">
          <a href ng-click="getWeather(1105779,'Sydney','Australia')">Sydney</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="col">
    <div class="wrapper-lg clearfix bg-info dker" ng-show="data.query.results">
      <h4 class="m-t-none m-b-lg"><span class="text-xs text-muted m-l pull-right">{{ data.query.results.channel.item.condition.date }}</span>{{place.city}}, {{place.country}}</h4>
      <div class="hbox">
        <div class="col v-middle w-sm">
          <skycon icon="data.query.results.channel.item.condition.icon" color="#fff" size="128" id=""></skycon>
        </div>
        <div class="col v-middle">
          <div class="h1">
            <span class="text-2x text-white">{{ data.query.results.channel.item.condition.temp }}&deg;</span>            
          </div>
          <span class="text-muted">{{ data.query.results.channel.item.condition.text }} - Feels like {{ data.query.results.channel.item.condition.temp }}&deg;</span>
        </div>
      </div>
    </div>
    
    <!-- display weather forecast -->
    <div class="list-group no-border no-radius">
      <div class="list-group-item" ng-show="data.query.results.channel.item.forecast.length" ng-repeat="forecast in data.query.results.channel.item.forecast">
        <div class="hbox">
          <div class="col v-middle w-xxs">
            <span class="h4">{{forecast.day}}</span>           
          </div>
          <div class="col v-middle w-xxs">
            <skycon icon="forecast.icon" color="app.color.dark" size="32"></skycon>
          </div>
          <div class="col v-middle">
            {{forecast.text}} <span class="text-white">{{forecast.code}}</span>
          </div>
          <div class="col v-middle">
            {{forecast.high}}&deg; -  {{forecast.low}}&deg;
          </div>
          <div class="col v-middle text-right hidden-xs">                
            <small class="text-muted">{{forecast.date}}</small>
          </div>           
        </div>
      </div>
    </div>
  </div>
</div>