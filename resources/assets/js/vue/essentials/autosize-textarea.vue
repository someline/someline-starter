<template>

    <textarea></textarea>

</template>

<style>
</style>

<script>
    import autosize from 'autosize'
    export default{
        props: ['resized'],
        ready () {
            autosize(this.$el)
            if (this.resized) {
                this.$parent[this.resized](this.$el)
            }
        }
    }
</script>