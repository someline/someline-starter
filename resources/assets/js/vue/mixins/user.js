export default{
    computed: {
        currentUserId(){
            console.log(Someline.state);
            return Someline.state.user.user_id;
        }
    }
}