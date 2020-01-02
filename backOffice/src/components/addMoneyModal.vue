<template>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <button class="" v-on="on"> 추가 </button>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">추가입금</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <currency state="addMoney" value = "0"/>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
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
      this.money = 0;
      this.$store.state.fetch_flag = true;
      this.dialog = false;
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

</style>