<template>
  <div class="about">
    <inputMoneyModal class="mb-5 mt-5"/>
    <div class="box d-flex">
      
      <v-card
        max-width="344"
        class="mx-auto justify-space-between"
      >
        <v-card-title>이름 <input type="text" v-model="save.title"></input></v-card-title>
        <v-card-text>자금<input type="number" v-model="save.money"></input></v-card-text>

      </v-card>
      <v-card
        max-width="344"
        class="mx-auto justify-space-between"
      >
        <v-card-title>이름 <input type="text" v-model="save.title"></input></v-card-title>
        <v-card-text>자금<input type="number" v-model="save.money"></input></v-card-text>
      </v-card>
      <v-card
        max-width="344"
        class="mx-auto justify-space-between"
      >
        <v-card-title>이름 <input type="text" v-model="save.title"></input></v-card-title>
        <v-card-text>자금<input type="number" v-model="save.money"></input></v-card-text>

      </v-card>

     


                   
    </div>

     <!-- <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"      
      ></v-data-table> -->
    
      <!-- <v-card
        v-for="j in justify"
        :key="j"
        :class="`d-flex justify-${j} mb-6`"
        color="grey lighten-2"
        flat 
        tile
      >
        <v-card
            v-for="n in 3"
            :key="n"
            class="pa-2"
            outlined
            tile
        > 
        Flex item
        </v-card>
      </v-card>   -->
    <!-- <h1>{{ title }}</h1> -->
    <!-- <span>자금 이름</span><input type="text" v-model="save.title"></input>
    <span>자금</span><input type="number" v-model="save.money"></input>
    <v-btn v-on:click="click">입금</v-btn>
    <inputMoneyModal/> -->
  </div>
</template>
<script>
import inputMoneyModal from '../components/inputMoneyModal';

export default {
    name: 'accounting',
    components: {
      inputMoneyModal,
    },
    data: () => ({
        save: {
            title: '',
            money : 0,
        },
        saves : [],
      justify: [
        'space-around',
      ],        
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
  .cf{
    content: '';

  }
</style>