<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">입금</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="자금 출처" required></v-text-field>
              </v-col>
        
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="항목" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <!-- <v-text-field type="number" class="inputPrice" label="금액" hint="example of helper text only on focus"></v-text-field> -->
                <currency idx=0  languageCode="ko" prefix="￦" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="항목" hint="example of helper text only on focus"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <!-- <v-text-field type="number" class="inputPrice" label="금액" hint="example of helper text only on focus"></v-text-field> -->
                <currency idx=1  languageCode="ko" prefix="￦" />
              </v-col>
            </v-row>
            <!-- <v-row>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row> -->
            <v-row>
              <v-col cols="12" sm="6" md="6"  >
                <currency :value = totalmoney  languageCode="ko" prefix="total" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>

import currency from "./currency";

export default {
  name: 'inputMoneyModal',
  components : {
    currency
  },
  beforeCreate : function (){
      console.log(this.$database);
      this.$database.ref('users/1').set({
        username: "name",
        email: "email",
        profile_picture : "imageUrl"
      });
  },
  data: () => ({
      dialog: false,
      money : 100
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
      for(let i = 0; i< this.$store.state.money.length; i++){
        total += this.$store.state.money[i];
      }
      return total;
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