<template>
  <div class="about">
    <inputMoneyModal class="mb-5 mt-5" justify-end/>
     <!-- <div
        class="d-flex justify mb-6"
      >
        <v-card
            v-for="n in 4"
            :key="n"
            class="mx-auto justify-space-between "
            max-width="344"
            min-width="200"
            outlined
            tile
        > 
        <v-card-title> 이름 </v-card-title>
        <v-card-text> 자금</v-card-text>

        </v-card>
      </div> -->
      <div class="display-1">total</div>
      <v-sheet
        class="mx-auto"
      >
        <v-slide-group
          v-model="model"
          class="pa-4"
          show-arrows
        >
          <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot:default="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : 'white '"
              class="ma-4"
              width="200"
              @click="toggle"

            >
              <v-card-title> 이름 </v-card-title>
              <v-card-text> 자금 </v-card-text>

              <!-- <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-scale-transition>
                  <v-icon
                    v-if="active"
                    color="white"
                    size="48"
                    v-text="'mdi-close-circle-outline'"
                  ></v-icon>
                </v-scale-transition>
              </v-row> -->
            </v-card>
          </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
          <v-sheet
            v-if="model != null"
            color="grey lighten-4"
            height="200"
            tile
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <h3 class="title">Selected {{ model }}</h3>
            </v-row>
          </v-sheet>
        </v-expand-transition>
      </v-sheet>   

      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class=" mt-10"      
      ></v-data-table>
    
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
      model: null,
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