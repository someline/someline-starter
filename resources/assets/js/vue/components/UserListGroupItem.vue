<template>
    <a href="#" class="list-group-item clearfix">
        <span class="pull-left thumb-sm avatar m-r">
            <img src="https://www.someline.com/en/user/profilephoto/origin/f4ccc4de78c03fe2c321490cf6f8157f825e4c4f.jpg"
                 alt="...">
        </span>
        <span class="clear">
            <span>{{ item.name }}</span>
            <!--<pre>{{ item | json }}</pre>-->
        </span>
    </a>
</template>

<style>
    /*body {*/
    /*background-color: #ff0000;*/
    /*}*/
</style>

<script>
    export default{
        props: ['item'],
        data(){
            return {
//                msg: 'hello vue'
            }
        },
        computed: {
        },
    }
</script>