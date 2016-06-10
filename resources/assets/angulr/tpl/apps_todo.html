<div class="bg-light lter b-b wrapper-md">
  <h1 class="m-n font-thin h3">Todos</h1>
</div>
<div class="wrapper-md" ng-controller="TodoCtrl">
  <div>
    <form id="todo-form" ng-submit="addTodo()">
      <input placeholder="What needs to be done?" ng-model="newTodo" autofocus class="form-control input-lg">
    </form>
  </div>
  <div ng-show="todos.length">
    <ul class="nav nav-xs nav-pills m-t m-b">
      <li ui-sref-active="active">
        <a ui-sref="app.todo.list({fold:''})">All</a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.todo.list({fold:'active'})">Active</a>
      </li>
      <li ui-sref-active="active">
        <a ui-sref="app.todo.list({fold:'completed'})">Completed</a>
      </li>
    </ul>
    <ul class="list-group">
      <li ng-repeat="todo in todos | filter:statusFilter track by $index" ng-class="{completed: todo.completed, editing: todo == editedTodo}" class="list-group-item">
        <div class="hover-anchor" ng-dblclick="editTodo(todo)" ng-hide="todo.editedTodo">
          <a ng-click="removeTodo(todo)" class="text-muted hover-action"><i class="icon-close text-md m-t-xs pull-right"></i></a>
          <label class="i-checks i-checks-sm">
            <input type="checkbox" ng-model="todo.completed" ng-change="todoCompleted(todo)"><i></i>
          </label>
          <span ng-dblclick="editTodo(todo)">{{todo.title}}</span>
        </div>
        <form ng-submit="doneEditing(todo)" ng-show="todo.editedTodo">
          <input class="form-control" ng-trim="false" ng-model="todo.title" ng-blur="doneEditing(todo)" ui-focus="todo.editedTodo">
        </form>
      </li>
    </ul>
  </div>
  <div ng-show="todos.length" class="row">
    <div class="col-sm-6">
      <label class="i-checks i-checks-sm">
        <input type="checkbox" ng-model="allChecked" ng-click="markAll(allChecked)"><i></i>
        Mark all as complete
      </label>
    </div>
    <div class="col-sm-6 text-right">
        <button class="btn btn-default btn-xs" ng-click="clearCompletedTodos()" ng-show="remainingCount < todos.length">Clear completed ({{todos.length - remainingCount}})</button>
      <strong>{{remainingCount}}</strong>
      <ng-pluralize count="remainingCount" when="{ one: 'item left', other: 'items left' }"></ng-pluralize>
    </div>
  </div>
</div>
