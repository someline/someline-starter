export default{
    computed: {
        store(){
            return window.store;
        },
    },
    methods: {
        storeCommit(name, data){
            return this.store.commit(name, data);
        },
        storeDispatch(name, data){
            return this.store.dispatch(name, data);
        },
    }
}