export default{
    computed: {
        baseUrl(){
            return Someline.baseUrl;
        },
        locale(){
            return Someline.locale;
        },
        currentUserId(){
            return Someline.state.user.user_id;
        },
        csrfToken(){
            return window.Laravel.csrfToken;
        },
    }
}