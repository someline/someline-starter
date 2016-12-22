<template>

    <textarea></textarea>

</template>

<style scoped>
</style>

<script>
    import autosize from 'autosize'
    export default{
        props: ['resized'],
        mounted () {
            autosize(this.$el)
            if (this.resized) {
                this.$parent[this.resized](this.$el)
            }
        }
    }
</script>