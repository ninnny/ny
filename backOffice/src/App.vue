<template>
  <v-app>
    <navi></navi>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>
import navi from './components/navi';

export default {
  name: 'App',
  components: {
    navi,
  },
  data: () => ({
    //
  }),
};
</script>


<style>
  .container{
    color :red;
  }
</style>