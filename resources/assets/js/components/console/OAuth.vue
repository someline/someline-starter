<template>
    <div class="container">

        <h1>OAuth</h1>

        <passport-clients></passport-clients>

        <passport-authorized-clients></passport-authorized-clients>

        <passport-personal-access-tokens></passport-personal-access-tokens>

    </div>
</template>

<script>
    export default {
        ready() {
            console.log('Component ready.')
        }
    }
</script>
