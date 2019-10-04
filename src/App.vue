<template>
  <v-app style="height: 100vh">
    <!-- <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        
      </v-toolbar-title>
    </v-app-bar> -->

    <v-content style="height: 100vh">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
