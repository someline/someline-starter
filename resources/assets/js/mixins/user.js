export default {
    computed: {
        baseUrl() {
            return window.Someline.baseUrl;
        },
        locale() {
            return window.Someline.locale;
        },
        csrfToken() {
            return window.Laravel.csrfToken;
        },
        currentUserId() {
            return window.Someline.state.user.user_id;
        },
        currentUserName() {
            return window.Someline.state.user.name;
        },
        isAuth() {
            return this.authUserId != null;
        },
        authUser() {
            return window.Someline.state.user;
        },
        authUserId() {
            return window.Someline.state.user.user_id;
        },
        authUserName() {
            return window.Someline.state.user.name;
        },
    },
    methods: {
        isAuthUser(user_id) {
            return this.authUserId == user_id;
        },
        isCurrentUser(user_id) {
            return this.currentUserId == user_id;
        },
    },
}