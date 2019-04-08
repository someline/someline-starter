export default {
    routes: [
        {
            path: '/',
            component: require('./components/mobile/main/App.vue').default,
        },
        {
            path: '/user/:id',
            component: require('./components/mobile/user/UserDetail.vue').default,
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
                    component: require('./components/mobile/user/detail/Profile.vue').default,
                },
                {
                    path: 'posts',
                    component: require('./components/mobile/user/detail/Posts.vue').default,
                }
            ]
        }
    ],
}