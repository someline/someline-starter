<!-- navbar collapse -->
<div class="collapse pos-rlt navbar-collapse bg-primary">
    <!-- buttons -->
    <div class="nav navbar-nav hidden-xs">
        <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="app-aside-folded" target=".app">
            <i class="fa fa-dedent fa-fw text"></i>
            <i class="fa fa-indent fa-fw text-active"></i>
        </a>
        <a href="#" class="btn no-shadow navbar-btn" ui-toggle-class="show" target="#aside-user">
            <i class="icon-user fa-fw"></i>
        </a>
    </div>
    <!-- / buttons -->

    @include('app.layout.parts.navbar.navbar_links')

    {{--<!-- search form -->--}}
    {{--<form class="navbar-form navbar-form-sm navbar-left shift" ui-shift="prependTo" data-target=".navbar-collapse"--}}
          {{--role="search" ng-controller="TypeaheadDemoCtrl">--}}
        {{--<div class="form-group">--}}
            {{--<div class="input-group">--}}
                {{--<input type="text" ng-model="selected"--}}
                       {{--typeahead="state for state in states | filter:$viewValue | limitTo:8"--}}
                       {{--class="form-control input-sm bg-light no-border rounded padder"--}}
                       {{--placeholder="Search projects...">--}}
              {{--<span class="input-group-btn">--}}
                {{--<button type="submit" class="btn btn-sm bg-light rounded"><i class="fa fa-search"></i></button>--}}
              {{--</span>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</form>--}}
    {{--<!-- / search form -->--}}

    @include('app.layout.parts.navbar.navbar_right')
</div>
<!-- / navbar collapse -->