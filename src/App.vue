<template>
  <v-app>

    <app-toolbar class="app--toolbar">
    </app-toolbar>      

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
    import AppToolbar from '@/components/AppToolbar'

    export default {
    name: 'App',
    data: () => ({
        //
    }),
    methods: {
        showRoute(){
            return this.$route.meta.show
        },
    }
    };
    </script>

<style>

</style>