<template>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <button class="listItem add" v-on="on"> + </button>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">카테고리 추가</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <rowMoneyCom idx =-1  method='addCat' state='addCat'/>  
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="close">닫기</v-btn>
          <v-btn color="blue darken-1" text @click="save">저장</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>


<script>

import currency from "./currency";
import rowMoneyCom from "./rowMoneyCom";
import moment from "moment";
import _ from "lodash";

export default {
  name: 'addCategory',
  components : {
    currency,
    rowMoneyCom
  },
  beforeCreate : function (){
  },
  props: {
    target : 0,
    idx: 0,
  },
  data: () => ({
      dialog: false,
      money : 100,
    }),
  created : function () {

  },
  computed :  {

  },
  methods :{
    save(){
      let model = this.$store.state.bank[this.target];
      let addcost = this.$store.addCatMoney;
      console.log(model);
      // console.log(addcost);
      let new_cat = this.$store.state.newCat_money;
      console.log(this.$store.state.newCat_money);
      
      // this.$database.ref('moneylog').push({
      //   status: "카테고리 추가",
      //   title: this.title,
      //   cat : new_cat,
      //   totalcost : this.totalmoney,
      //   savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
      //   updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
      // }).then(()=>{
      //   this.$database.ref('bank/'+this.target).push({
      //     title: this.title,
      //     cat : new_cat,
      //     totalcost : this.totalmoney,
      //     savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
      //     updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
      //   }).then(()=>{
      //     this.$store.state.fetch_flag = true;
      //     // console.log(this.$store.state.fetch_flag);
      //     this.title = "";
      //     this.$store.state.newCat_money = { title : "", cost : 0};
      //     this.dialog = false;
      //   })
      // });             
    },
    close(){
      this.money = 0;
      this.$store.state.fetch_flag = true;
      this.dialog = false;
    }
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
  /* .btn{

  } */
</style>