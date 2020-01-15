<template>
    <v-row>
        <v-col cols="12" sm="6" md="6">
        <v-text-field label="항목" v-model=title></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
        <!-- <v-text-field type="number" class="inputPrice" label="금액" hint="example of helper text only on focus"></v-text-field> -->
        <currency :idx=this.idx :method=this.method :state=this.state value=0 languageCode="ko" prefix="￦" />
        </v-col>
    </v-row>
</template>


<script>

import currency from "./currency";
import moment from "moment";

export default {
  name: 'rowMoneyCom',
  components : {
    currency
  },
  props: {
    idx : 0,
    method: 0, 
    state: null,
  },
  data: () => ({
      
    }),
  created : function () {

  },
  computed :  {
    title: {
        get () {
          if(this.method == 'addCat'){
            return this.$store.state.newCat_money.title;
          }else{
            return this.$store.state.modal_money[this.idx].title;
         }
        },
        set (value) {
          if(this.method == 'addCat'){
           this.$store.state.newCat_money.title = value;
          }else{
            this.$store.commit('setTitle', { idx:this.idx ,title : value});
          }
            
        }
    },
    // title(){
    //   return this.$store.state.modal_money[this.idx].title;
    // }
  },
  methods :{
    save(){

      
    }
  },
  watch :{
    //   title(v){
    //     console.log("Ttttt");
    //     this.$store.commit('setTitle', { idx:this.idx ,title : v});
    //   }
  }
}

</script>
<style scoped>
  .inputPrice input[type='number'] {
    -moz-appearance:textfield;
  }
  .inputPrice input::-webkit-outer-spin-button,
  .inputPrice input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

</style>