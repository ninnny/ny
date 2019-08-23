<template>
  <v-app>
    <navi></navi>
     <v-content>
      
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
