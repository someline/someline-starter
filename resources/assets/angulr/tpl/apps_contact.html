<!-- hbox layout -->
<div class="hbox hbox-auto-xs hbox-auto-sm bg-light " ng-init="
  app.settings.asideFixed = true;
  app.settings.asideDock = false;
  app.settings.container = false;
  app.hideAside = false;
  app.hideFooter = true;
  " ng-controller="ContactCtrl">

  <!-- column -->
  <div class="col w b-r">
    <div class="vbox">
      <div class="row-row">
        <div class="cell scrollable hover">
          <div class="cell-inner">
            <div class="list-group no-radius no-border no-bg m-b-none">
              <a class="list-group-item b-b" ng-class="{'focus': (filter == '')}" ng-click="selectGroup({name:''})">ALL Contacts</a>
              <a ng-repeat="item in groups" ng-dblclick="editItem(item)" class="list-group-item m-l hover-anchor b-a no-select" ng-class="{'focus m-l-none': item.selected}" ng-click="selectGroup(item)">
                <span ng-click='deleteGroup(item)' class="pull-right text-muted hover-action"><i class="fa fa-times"></i></span>
                <span class="block m-l-n" ng-class="{'m-n': item.selected }">{{ item.name ? item.name : 'Untitled' }}</span>
                <input type="text" class="form-control pos-abt" ng-show="item.editing" ng-blur="doneEditing(item)" ng-model="item.name" style="top:3px;left:2px;width:98%" ui-focus="item.editing">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper b-t">
        <span tooltip="Double click to Edit" class="pull-right text-muted inline wrapper-xs m-r-sm"><i class="fa fa-question"></i></span>
        <a href class="btn btn-sm btn-default" ng-click="createGroup()"><i class="fa fa-plus fa-fw m-r-xs"></i> New Group</a>
      </div>
    </div>
  </div>
  <!-- /column -->
  <!-- column -->
  <div class="col w-lg lter b-r">
    <div class="vbox">
      <div class="wrapper-xs b-b">
        <div class="input-group m-b-xxs">
          <span class="input-group-addon input-sm no-border no-bg"><i class="icon-magnifier text-md m-t-xxs"></i></span>
          <input type="text" class="form-control input-sm no-border no-bg text-md" placeholder="Search {{group.name ? group.name : 'All Contacts'}}" ng-model="query">
        </div>
      </div>
      <div class="row-row">
        <div class="cell scrollable hover">
          <div class="cell-inner">
            <div class="m-t-n-xxs">
              <div class="list-group list-group-lg no-radius no-border no-bg m-b-none">
                <a ng-repeat="item in items | filter:{group:filter} | filter:query | orderBy:'first'" class="list-group-item m-l" ng-class="{'select m-l-none': item.selected }" ng-click="selectItem(item)">
                  <span class="block text-ellipsis m-l-n text-md" ng-class="{'m-l-none': item.selected }">
                    {{ item.first }} <strong>{{ item.last }}</strong>
                    <span ng-hide="item.first || item.last">No Name</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="text-center pos-abt w-full" style="top:50%;" ng-hide="(items | filter:{group:filter} | filter:query).length">No Contacts</div>
          </div>
        </div>
      </div>
      <div class="wrapper b-t text-center">
        <a href class="btn btn-sm btn-default btn-addon" ng-click="createItem()"><i class="fa fa-plus fa-fw m-r-xs"></i> New Contact</a>
      </div>
    </div>
  </div>
  <!-- /column -->

  <!-- column -->
  <div class="col bg-white-only">
    <div class="vbox">
      <div class="wrapper-sm b-b">
        <div class="m-t-n-xxs m-b-n-xxs m-l-xs">
          <a class="btn btn-xs btn-default pull-right" ng-hide="!item" ng-click="deleteItem(item)"><i class="fa fa-times"></i></a>
          <a class="btn btn-xs btn-default" ng-hide="item.editing" ng-click="editItem(item)">Edit</a>
          <a class="btn btn-xs btn-default" ng-show="item.editing" ng-click="doneEditing(item)">Done</a>
        </div>
      </div>
      <div class="row-row">
        <div class="cell">
          <div class="cell-inner">
            <div class="wrapper-lg">
              <div class="hbox h-auto m-b-lg">
                <div class="col text-center w-sm">
                  <div class="thumb-lg avatar inline">
                    <img ng-src="{{item.avatar}}" ng-show="item.avatar">
                  </div>
                </div>
                <div class="col v-middle h1 font-thin">
                  <div ng-hide="item.editing">{{item.first}} {{item.last}}</div>
                  <div ng-show="item.editing">
                    <input type="text" placeholder="First" class="form-control w-auto input-lg m-b-n-xxs font-bold" ng-model="item.first" >
                    <input type="text" placeholder="Last" class="form-control w-auto input-lg font-bold" ng-model="item.last" >
                  </div>
                </div>
              </div>
              <!-- fields -->
              <div class="form-horizontal">
                <div class="form-group m-b-sm" ng-hide="!item.mobile && !item.editing">
                  <label class="col-sm-3 control-label">Mobile</label>
                  <div class="col-sm-9">
                    <p class="form-control-static" ng-hide="item.editing">{{item.mobile}}</p>
                    <input type="text" class="form-control" ng-show="item.editing" ng-model="item.mobile" >
                  </div>
                </div>
                <div class="form-group m-b-sm" ng-hide="!item.home && !item.editing">
                  <label class="col-sm-3 control-label">Home</label>
                  <div class="col-sm-9">
                    <p class="form-control-static" ng-hide="item.editing">{{item.home}}</p>
                    <input type="text" class="form-control" ng-show="item.editing" ng-model="item.home" >
                  </div>
                </div>
                <div class="form-group m-b-sm" ng-hide="!item.work && !item.editing">
                  <label class="col-sm-3 control-label">Work</label>
                  <div class="col-sm-9">
                    <p class="form-control-static" ng-hide="item.editing">{{item.work}}</p>
                    <input type="text" class="form-control" ng-show="item.editing" ng-model="item.work" >
                  </div>
                </div>
                <div class="form-group m-b-sm" ng-hide="!item.company && !item.editing">
                  <label class="col-sm-3 control-label">Company</label>
                  <div class="col-sm-9">
                    <p class="form-control-static" ng-hide="item.editing">{{item.company}}</p>
                    <input type="text" class="form-control" ng-show="item.editing" ng-model="item.company" >
                  </div>
                </div>
                <div class="form-group m-b-sm" ng-hide="!item.note && !item.editing">
                  <label class="col-sm-3 control-label">Note</label>
                  <div class="col-sm-9">
                    <p class="form-control-static" ng-hide="item.editing">{{item.note}}</p>
                    <textarea class="form-control" ng-show="item.editing" ng-model="item.note" rows="5"></textarea>
                  </div>
                </div>
              </div>
              <!-- / fields -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /column -->
</div>
<!-- /hbox layout -->