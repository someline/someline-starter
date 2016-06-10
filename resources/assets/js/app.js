import UserList from './vue/components/UserList.vue'

export default {
    data: {
        msg: "hello",
    },
    components: {
        'lt-user-list': UserList,
    },
    methods: {
    },
    events: {
    },
    created(){
        console.log('Bootstrap.');
    }
}