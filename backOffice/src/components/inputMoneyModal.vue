<template>
  <v-row  class="flex-row-reverse">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on"> +개설 </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">개설</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
<!--                  
                    <v-select
                      label="자금출처"
                      required 
                      v-model=title
                    ></v-select> -->
              
                <v-text-field label="자금 출처
                
                " required v-model=title ></v-text-field>
              </v-col>
        
            </v-row>
            <rowMoneyCom idx =0 />
            <rowMoneyCom idx =1 />
            <v-row>
              <v-col cols="12" sm="6" md="6"  >
                <currency idx=-1  :value =totalmoney  languageCode="ko" prefix="total" />
              </v-col>
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
  </v-row>
</template>


<script>

import currency from "./currency";
import rowMoneyCom from "./rowMoneyCom";
import moment from "moment";
import _ from "lodash";

export default {
  name: 'inputMoneyModal',
  components : {
    currency,
    rowMoneyCom
  },
  beforeCreate : function (){
      // console.log(this.$database);
      // this.$database.ref('users/3').once('value',function(snapshot) {
      //   var rows = [];
      //   console.log(snapshot.val());
      //   console.dir(Array.isArray(snapshot.val()));


        // snapshot.forEach(function(childSnapshot) {
        //     var childData = childSnapshot.val();
            
        //     rows.push(childData);
        // });
        
    // });


    console.log(moment().format('YYYY-MM-DD HH:mm:ss'));


  },
  data: () => ({
      dialog: false,
      money : 100,
      title:"",
    }),
  created : function () {
    // console.log(this)
    // setInterval(() => {
    //   console.log(this.$store.state.money[0]);
    // }, 1000);
  },
  computed :  {
    totalmoney(){
      let total=0;
      for(let i = 0; i< this.$store.state.modal_money.length; i++){
        total += this.$store.state.modal_money[i].cost;
      }
      
      return total;
    }
  },
  methods :{
    save(){
      // console.log(this.title);
      // console.log(this.$store.state.modal_money);
      // console.log(this.totalmoney);
      let save_cat = this.$store.state.modal_money

      console.log(save_cat);

      _.remove(save_cat,(n)=>{
        return n.cost == 0;
      })

      console.log(save_cat);
      this.$database.ref('moneylog').push({
        status: "입금",
        title: this.title,
        cat : save_cat,
        totalcost : this.totalmoney,
        savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
        updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
      }).then(()=>{
        this.$database.ref('bank').push({
          title: this.title,
          cat : save_cat,
          totalcost : this.totalmoney,
          savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
          updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
        }).then(()=>{
          this.$store.state.fetch_flag = true;
          console.log(this.$store.state.fetch_flag);
          this.title = "";
          this.$store.state.modal_money = [
            { title : "", cost : 0},
            { title : "", cost : 0}
          ];
          this.dialog = false;
        })
      });

      


    },
    close(){
      this.title = "";
      this.$store.state.modal_money = [
        { title : "", cost : 0},
        { title : "", cost : 0}
      ];
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