<template>

    <div class="wrapper-md">

        <h1>{{ $t('user.users') }}</h1>
        <hr>

        <div class="row">

            <div class="list-group list-group-lg list-group-sp">
                <template v-for="item of items">
                    <div class="col-md-4 m-b-sm">
                        <sl-user-list-item :item="item"></sl-user-list-item>
                    </div>
                </template>
            </div>

        </div>

    </div>

</template>

<style>
</style>

<script>
    export default{
        data(){
            return {
//                msg: 'hello vue',
                items: [],
            }
        },
        components: {
            'sl-user-list-item': require('./UserListGroupItem.vue'),
        },
        http: {
            root: '/api',
            headers: {
                Accept: 'application/x.someline.v1+json'
            }
        },
        ready() {
            console.log('User List Ready.');

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