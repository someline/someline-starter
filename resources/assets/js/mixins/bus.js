export default{
    methods: {
        eventEmit(name, data){
            window.bus.$emit(name, data);
        },
        eventOn(name, callback){
            window.bus.$on(name, callback);
        },
    }
}