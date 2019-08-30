<template>
  <div class="about">
    <!-- <h1>{{ title }}</h1> -->
    <span>자금 이름</span><input type="text" v-model="save.title"></input>
    <span>자금</span><input type="number" v-model="save.money"></input>
    <v-btn v-on:click="click">입금</v-btn>
  </div>
</template>
<script>
export default {
    name: 'accounting',
    data: () => ({
        save: {
            title: '',
            money : 0,
        },
        saves : [],
    }),
    methods : {
        click : function (params) {
            let k = {...this.save};
            
            this.saves.push(k);
            console.log(this.saves);
        }
    }
  }
</script>
<style lang="stylus">

</style>