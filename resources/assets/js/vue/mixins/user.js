export default{
    computed: {
        currentUserId(){
            console.log(Looptime.state);
            return Looptime.state.user.user_id;
        }
    }
}