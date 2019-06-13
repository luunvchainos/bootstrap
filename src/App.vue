<template>
    <div>
        <app-header></app-header>
        <router-view class="pl-xl-4 pr-xl-4"></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppHeader from "./components/common/Header";
    import AppFooter from "./components/common/Footer";

    export default {
        name: 'App',
        components: { AppHeader, AppFooter },
    }
</script>
