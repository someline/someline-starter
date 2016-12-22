<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">Editable</h1>
</div>
<div class="wrapper-md">
  <h4>Editable row</h4>
  <table class="table table-bordered table-hover table-condensed bg-white-only">
    <tr style="font-weight: bold">
      <td style="width:35%">Name</td>
      <td style="width:20%">Status</td>
      <td style="width:20%">Group</td>
      <td style="width:25%">Edit</td>
    </tr>
    <tr ng-repeat="user in users">
      <td class="v-middle">
        <!-- editable username (text with validation) -->
        <span editable-text="user.name" e-name="name" e-form="rowform" onbeforesave="checkName($data, user.id)" e-required>
          {{ user.name || 'empty' }}
        </span>
      </td>
      <td class="v-middle">
        <!-- editable status (select-local) -->
        <span editable-select="user.status" e-name="status" e-form="rowform" e-ng-options="s.value as s.text for s in statuses">
          {{ showStatus(user) }}
        </span>
      </td>
      <td class="v-middle">
        <!-- editable group (select-remote) -->
        <span editable-select="user.group" e-name="group" onshow="loadGroups()" e-form="rowform" e-ng-options="g.id as g.text for g in groups">
          {{ showGroup(user) }}
        </span>
      </td>
      <td style="white-space: nowrap">
        <!-- form -->
        <form editable-form name="rowform" onbeforesave="saveUser($data, user.id)" ng-show="rowform.$visible" class="form-buttons form-inline" shown="inserted == user">
          <button type="submit" ng-disabled="rowform.$waiting" class="btn btn-sm btn-info">
            save
          </button>
          <button type="button" ng-disabled="rowform.$waiting" ng-click="rowform.$cancel()" class="btn btn-sm btn-default">
            cancel
          </button>
        </form>
        <div class="buttons" ng-show="!rowform.$visible">
          <button class="btn btn-sm btn-info" ng-click="rowform.$show()">edit</button>
          <button class="btn btn-sm btn-danger" ng-click="removeUser($index)">del</button>
        </div>  
      </td>
    </tr>
  </table>

  <button class="btn btn-default m-b-lg" ng-click="addUser()">Add row</button>

  <h4>Editable column</h4>
  <table class="table table-bordered table-hover table-condensed bg-white-only">
    <tr style="font-weight: bold; white-space: nowrap">

      <!-- username header -->
      <td style="width:40%"  class="v-middle">
        Name
        <form editable-form name="nameform" onaftersave="saveColumn('name')" ng-show="nameform.$visible">
          <button type="submit" ng-disabled="nameform.$waiting" class="btn btn-sm btn-info">
            save
          </button>
          <button type="button" ng-disabled="nameform.$waiting" ng-click="nameform.$cancel()" class="btn btn-sm btn-default">
            cancel
          </button>
        </form>  
        <button class="btn btn-sm btn-default" ng-show="!nameform.$visible" ng-click="nameform.$show()">
          edit
        </button>
      </td>

      <!-- status header -->
      <td style="width:30%" class="v-middle">
        Status
        <form editable-form name="statusform" onaftersave="saveColumn('status')" ng-show="statusform.$visible">
          <button type="submit" ng-disabled="statusform.$waiting" class="btn btn-sm btn-info">
            save
          </button>
          <button type="button" ng-disabled="statusform.$waiting" ng-click="statusform.$cancel()" class="btn btn-sm btn-default">
            cancel
          </button>
        </form>  
        <button class="btn btn-sm btn-default" ng-show="!statusform.$visible" ng-click="statusform.$show()">
          edit
        </button>
      </td>

      <!-- group header -->
      <td style="width:30%" class="v-middle">
        Group
        <form editable-form name="groupform" onaftersave="saveColumn('group')" ng-show="groupform.$visible">
          <button type="submit" ng-disabled="groupform.$waiting" class="btn btn-sm btn-info">
            save
          </button>
          <button type="button" ng-disabled="groupform.$waiting" ng-click="groupform.$cancel()" class="btn btn-sm btn-default">
            cancel
          </button>
        </form>  
        <button class="btn btn-sm btn-default" ng-show="!groupform.$visible" ng-click="groupform.$show()">
          edit
        </button>
      </td>
    </tr>

    <tr ng-repeat="user in users">
      <td class="v-middle">
        <!-- editable username (text with validation) -->
        <span editable-text="user.name" e-name="name" e-form="nameform" onbeforesave="checkName($data)">
          {{ user.name || 'empty' }}
        </span>
      </td>

      <td class="v-middle">
        <!-- editable status (select-local) -->
        <span editable-select="user.status" e-name="status" e-form="statusform" e-ng-options="s.value as s.text for s in statuses">
          {{ showStatus(user) }}
        </span>
      </td>

      <td class="v-middle">
        <!-- editable group (select-remote) -->
        <span editable-select="user.group" e-name="group" onshow="loadGroups()" e-form="groupform" e-ng-options="g.id as g.text for g in groups">
          {{ showGroup(user) }}
        </span>
      </td>
    </tr>
  </table>

  <h4>Editable table</h4>
  <form editable-form name="tableform" onaftersave="saveTable()" oncancel="cancel()">

    <!-- table -->
    <table class="table table-bordered table-hover table-condensed bg-white-only">
      <tr style="font-weight: bold">
        <td style="width:40%">Name</td>
        <td style="width:30%">Status</td>
        <td style="width:30%">Group</td>
        <td style="width:30%"><span ng-show="tableform.$visible">Action</span></td>
      </tr>
      <tr ng-repeat="user in users | filter:filterUser">
        <td>
          <!-- editable username (text with validation) -->
          <span editable-text="user.name" e-form="tableform" onbeforesave="checkName($data, user.id)">
            {{ user.name || 'empty' }}
          </span>
        </td>
        <td>
          <!-- editable status (select-local) -->
          <span editable-select="user.status" e-form="tableform" e-ng-options="s.value as s.text for s in statuses">
            {{ showStatus(user) }}
          </span>
        </td>
        <td>
          <!-- editable group (select-remote) -->
          <span editable-select="user.group" e-form="tableform" onshow="loadGroups()" e-ng-options="g.id as g.text for g in groups">
            {{ showGroup(user) }}
          </span>
        </td>
        <td><button type="button" ng-show="tableform.$visible" ng-click="removeUser(user.id)" class="btn btn-sm btn-danger pull-right">Del</button></td>
      </tr>
    </table>

    <!-- buttons -->
    <div class="btn-edit">
      <button type="button" class="btn btn-default" ng-show="!tableform.$visible" ng-click="tableform.$show()">
        edit
      </button>
    </div>
    <div class="btn-form" ng-show="tableform.$visible">
      <button type="button" ng-disabled="tableform.$waiting" ng-click="addUser()" class="btn btn-default pull-right">add row</button>
      <button type="submit" ng-disabled="tableform.$waiting" class="btn btn-primary">save</button>
      <button type="button" ng-disabled="tableform.$waiting" ng-click="tableform.$cancel()" class="btn btn-default">cancel</button>
    </div> 
    
  </form>
</div>