export default{
    computed: {
        baseUrl(){
            return Someline.baseUrl;
        },
        locale(){
            return Someline.locale;
        },
        currentUserId(){
            console.log(Someline.state);
            return Someline.state.user.user_id;
        },
    }
}