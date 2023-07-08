<template>
    <div class="app-navigation">
        <h1>Movie App</h1>
        <div id="nav"><router-link to="/">Home</router-link></div>
    </div>
</template>

<script>
export default {
    name: "AppNavigation",
};
</script>

<style scoped>
.app-navigation {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

.app-navigation a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
}
</style>