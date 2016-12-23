<li class="dropdown">
    <a href="#" data-toggle="dropdown" class="dropdown-toggle clear" data-toggle="dropdown">
              <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                <img src="https://www.someline.com/en/user/profilephoto/origin/f4ccc4de78c03fe2c321490cf6f8157f825e4c4f.jpg"
                     alt="...">
                  {{--<i class="on md b-white bottom"></i>--}}
              </span>
        <span class="">{{auth_user()->name}}</span> <b class="caret"></b>
    </a>
    <!-- dropdown -->
    <ul class="dropdown-menu animated fadeInRight w">
        <li class="wrapper b-b m-b-sm bg-light m-t-n-xs">
            <div>
                <p>300mb of 500mb used</p>
            </div>
            <div class="progress progress-xs m-b-none dker">
                <div class="progress-bar progress-bar-info" data-toggle="tooltip" data-original-title="50%"
                     style="width: 50%"></div>
            </div>
        </li>
        <li>
            <a href>
                <span class="badge bg-danger pull-right">30%</span>
                <span>Settings</span>
            </a>
        </li>
        <li>
            <a ui-sref="app.docs">
                <span class="label bg-info pull-right">new</span>
                Help
            </a>
        </li>
        <li class="divider"></li>
        <li>
            <a href="{{url('logout')}}"
               onclick="event.preventDefault();
               document.getElementById('logout-form').submit();">
                Logout
            </a>

            <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        </li>
    </ul>
    <!-- / dropdown -->
</li>
