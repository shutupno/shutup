<template>
    <div class="home">
        <transition name="move" mode="out-in">
            <router-view></router-view>
        </transition>
        <!-- <keep-alive >
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created () {
        
    },
    mounted () {
        
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
    .home {
        width: 100%;
        height: 100%;
    }
</style>