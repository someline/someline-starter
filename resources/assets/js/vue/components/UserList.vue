<template>

    <div class="list-group list-group-lg list-group-sp">
        <template v-for="item of items">
            <div class="col-md-4 m-b-sm">
                <lt-user-list-item :item="item"></lt-user-list-item>
            </div>
        </template>
    </div>

</template>

<style>
</style>

<script>
    import UserListGroupItem from './UserListGroupItem.vue'
    export default{
        data(){
            return {
//                msg: 'hello vue',
                items: [],
            }
        },
        components: {
            'lt-user-list-item': UserListGroupItem,
        },
        http: {
            root: '/api',
            headers: {
                Accept: 'application/x.someline.v1+json'
            }
        },
        ready() {
            console.log('Ready');

            var resource = this.$resource('users', {
//                include: ''
            });

            // get item
            resource.get({}).then(function (response) {
                console.log(response);
                console.log(response.data.data);
                this.$set('items', response.data.data)
            });
        }
    }
</script>