export default{
    computed: {
        vuexStore(){
            return window.vuexStore;
        },
    },
    methods: {
        storeCommit(name, data){
            return this.vuexStore.commit(name, data);
        },
        storeDispatch(name, data){
            return this.vuexStore.dispatch(name, data);
        },
    }
}