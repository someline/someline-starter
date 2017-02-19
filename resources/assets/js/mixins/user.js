export default{
    computed: {
        baseUrl(){
            return window.Someline.baseUrl;
        },
        locale(){
            return window.Someline.locale;
        },
        currentUserId(){
            return window.Someline.state.user.user_id;
        },
        csrfToken(){
            return window.Laravel.csrfToken;
        },
    }
}