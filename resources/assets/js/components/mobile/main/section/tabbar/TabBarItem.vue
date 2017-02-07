<style scoped>
</style>

<template>

    <div class="btn-group">
        <a :href="link" class="wrapper-xs block" :class="linkClass" @click="onClickLink">
            <slot></slot>
        </a>
    </div>

</template>

<script>
    export default{
        props: [
            'itemId', 'link', 'linkClass', 'linkClick'
        ],
        data(){
            return {
//                msg: 'hello vue',
                items: [],
            }
        },
        computed: {},
        components: {},
        mounted(){
            console.log('Component Ready.');

        },
        watch: {},
        events: {},
        methods: {
            onClickLink(){
                console.log('onClickLink');
                if (this.linkClick) {
                    this.linkClick(this.itemId);
                }
            },
        },
    }
</script>