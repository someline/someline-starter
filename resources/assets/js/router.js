/**
 * Created by libern on 2016/12/23.
 */
export default {
    routes: [
        {
            path: '/foo',
            component: {template: '<div>foo</div>'}
        },
        {
            path: '/bar',
            component: {template: '<div>bar</div>'}
        },
        {
            path: '/user/:id',
            component: require('./components/user/UserDetail.vue'),
            children: [
                {
                    // default path will redirect to list
                    path: '',
                    redirect: to => {
                        window.location.href = '/users';
                    }
                },
                {
                    path: 'profile',
                    component: require('./components/user/detail/Profile.vue'),
                },
                {
                    path: 'posts',
                    component: require('./components/user/detail/Posts.vue'),
                }
            ]
        }
    ],
}