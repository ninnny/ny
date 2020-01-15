<template>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <button class="btn btn-block btn-blue" v-on="on"> 추가입금 </button>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">추가입금</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <currency state="addMoney" value = "0" languageCode="ko" prefix="￦"/>
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
import moment from "moment";
import _ from "lodash";

export default {
  name: 'addMoneyModal',
  components : {
    currency
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
      // console.log(this.target);
      // console.log(this.idx);
      // console.log(this.$store.addCatMoney);
      let addcost = this.$store.addCatMoney;
      let model = this.$store.state.bank[this.target];
      // console.log(model);
      // this.money = 0;

      model.totalcost = parseInt(model.totalcost) + parseInt(addcost);
      model.updatetime = moment().format('YYYY-MM-DD HH:mm:ss');

      model.cat[this.idx].cost += addcost;

      this.$database.ref('bank/' + this.target).set(
        JSON.parse(JSON.stringify(model))
      ).then(()=>{
        this.$database.ref('moneylog').push({
          status: "추가입금",
          title: model.title,
          cat : {
            title: model.cat[this.idx].title,
            cost: addcost,
          },
          totalcost : model.cat[this.idx].cost,
          savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
          updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }).then(()=>{
          this.$store.state.fetch_flag = true;
          this.dialog = false;
        });
      });
     
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