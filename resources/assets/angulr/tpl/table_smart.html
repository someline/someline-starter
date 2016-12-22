<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">Smart Table</h1>
</div>
<div class="wrapper-md" ng-controller="TableCtrl">
  <div class="panel panel-default">
    <div class="panel-heading">The basics</div>  
    <table st-table="rowCollectionBasic" class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>birth date</th>
        <th>balance</th>
        <th>email</th>
      </tr>
      </thead>
      <tbody>
      <tr ng-repeat="row in rowCollectionBasic" st-select-row="row">
        <td>{{row.firstName}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.birthDate}}</td>
        <td>{{row.balance}}</td>
        <td>{{row.email}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  
  <div class="panel panel-default">
    <div class="panel-heading">
      stSafeSrc attribute
    </div>
    <div class="panel-body">
      <button type="button" ng-click="addRandomItem(row)" class="btn btn-sm btn-success">
        <i class="glyphicon glyphicon-plus">
        </i> Add random item
      </button>
    </div>
    <table st-table="displayedCollection" st-safe-src="rowCollection" class="table table-striped">
      <thead>
      <tr>
        <th st-sort="firstName">first name</th>
        <th st-sort="lastName">last name</th>
        <th st-sort="birthDate">birth date</th>
        <th st-sort="balance">balance</th>
        <th width="50"></th>
      </tr>
      <tr>
        <th colspan="5"><input st-search="" class="form-control" placeholder="global search ..." type="text"/></th>
      </tr>
      </thead>
      <tbody>
      <tr ng-repeat="row in displayedCollection">
        <td>{{row.firstName}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.birthDate}}</td>
        <td>{{row.balance}}</td>
        <td>
          <button type="button" ng-click="removeItem(row)" class="btn btn-xs btn-default">
            <i class="fa fa-times"></i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">Format data & cell templating</div>  
    <table st-table="rowCollectionBasic" class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>first name</th>
        <th>last name</th>
        <th>birth date</th>
        <th>balance</th>
        <th>email</th>
        <th width="50"></th>
      </tr>
      </thead>
      <tbody>
      <tr ng-repeat="row in rowCollectionBasic">
        <td>{{row.firstName | uppercase}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.birthDate | date}}</td>
        <td>{{row.balance | currency}}</td>
        <td>
          <button class="btn btn-xs" data-placement="top" data-content="{{row.email}}" bs-popover type="button">
            <i class="fa fa-eye"></i>
          </button>
          <a ng-href="mailto:{{row.email}}">email</a></td>
        <td>
          <button type="button" ng-click="removeRow(row)" class="btn btn-xs btn-default">
            <i class="fa fa-times">
            </i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">Search/filter data</div>
    <div class="panel-body">
      <form>
        <label for="predicate">selected predicate:</label>
        <select class="form-control" id="predicate" ng-model="selectedPredicate" ng-options="predicate for predicate in predicates"></select>
      </form>
    </div>
    <table st-table="rowCollectionBasic" class="table table-striped">
      <thead>
      <tr>
        <th st-sort="firstName">first name</th>
        <th st-sort="lastName">last name</th>
        <th st-sort="birthDate">birth date</th>
        <th st-sort="balance">balance</th>
        <th>email</th>
      </tr>
      <tr>
        <th>
          <input st-search="'firstName'" placeholder="search for firstname" class="input-sm form-control" type="search"/>
        </th>
        <th colspan="3">
          <input st-search placeholder="global search" class="input-sm form-control" type="search"/>
        </th>
        <th>
          <input st-search="selectedPredicate" placeholder="bound predicate" class="input-sm form-control" type="search"/>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr ng-repeat="row in rowCollectionBasic">
        <td>{{row.firstName | uppercase}}</td>
        <td>{{row.lastName}}</td>
        <td>{{row.birthDate | date}}</td>
        <td>{{row.balance | currency}}</td>
        <td><a ng-href="mailto:{{row.email}}">email</a></td>
      </tr>
      </tbody>
    </table>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">Client side Pagination</div>
    <div class="panel-body">
      <form>
        <label>items by page</label>
        <input class="input-sm form-control" name="items" id="items" type="number" ng-model="itemsByPage" >
      </form>
    </div>
    <table st-table="rowCollectionPage" class="table table-striped">
      <thead>
        <tr>
          <th st-sort="firstName">first name</th>
          <th st-sort="lastName">last name</th>
          <th st-sort="birthDate">birth date</th>
          <th st-sort="balance">balance</th>
          <th>email</th>
        </tr>
        <tr>
          <th>
            <input st-search="'firstName'" placeholder="search for firstname" class="input-sm form-control" type="search"/>
          </th>
          <th colspan="4">
            <input st-search placeholder="global search" class="input-sm form-control" type="search"/>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="row in rowCollectionPage">
          <td>{{row.firstName | uppercase}}</td>
          <td>{{row.lastName}}</td>
          <td>{{row.birthDate | date}}</td>
          <td>{{row.balance | currency}}</td>
          <td><a ng-href="mailto:{{row.email}}">email</a></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-center">
            <div st-pagination="" st-items-by-page="itemsByPage" st-displayed-pages="7" class="no-margin"></div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">pipe/ajax plugin</div>
    <table st-table="rowCollectionPip"  st-pipe="callServer" class="table table-striped">
      <thead>
      <tr>
        <th st-sort="firstName">first name</th>
        <th st-sort="lastName">last name</th>
        <th st-sort="birthDate">birth date</th>
        <th st-sort="balance">balance</th>
        <th>email</th>
      </tr>
      <tr>
        <th>
          <input st-search="firstName" placeholder="search for firstname" class="input-sm form-control" type="search"/>
        </th>
        <th colspan="4">
          <input st-search placeholder="global search" class="input-sm form-control" type="search"/>
        </th>
      </tr>
      </thead>
      <tbody ng-hide="isLoading">
        <tr ng-repeat="row in rowCollectionPip">
          <td>{{row.firstName | uppercase}}</td>
          <td>{{row.lastName}}</td>
          <td>{{row.birthDate | date}}</td>
          <td>{{row.balance | currency}}</td>
          <td><a ng-href="mailto:{{row.email}}">email</a></td>
        </tr>
      </tbody>
      <tbody ng-show="isLoading">
          <tr>
            <td colspan="5" class="text-center"><i class="fa fa-spin fa-refresh"></i></td>
          </tr>
      </tbody>
    </table>
  </div>
</div>
