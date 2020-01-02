<template>
  <div class="about">
      <v-sheet
        class="mx-auto mt-4 mb-10"
      >
        <div class="toolbar">
          <h2>제목</h2>
          <inputMoneyModal/> 
        </div>
        <v-slide-group
          v-model="model"
          show-arrows          
        >
          <v-slide-item
            v-for="(v,idx) in this.bank"
            :key="idx"
            v-slot:default="{ active, toggle }"
          >
            <v-card class="slide-box">
              <!-- <button @click="deleteAccount(idx)">삭제</button> -->
              <div class="main-info"
              @click="onOff(idx)"
              >
                <v-card-title>{{ v.title }} </v-card-title>
                <v-card-text>{{ v.totalcost }} </v-card-text>
              </div>
              <div class="btn-part">
                <v-btn tile large outlined>조회</v-btn>  
              </div>
            </v-card>
          </v-slide-item>
          
        </v-slide-group>
        
        <v-expand-transition>
          <v-sheet
            v-if="model != null"
            color="lighten-4"
            height="200"
            tile
          >
          <div class="detailList">
            <div class="listItem" v-for="item in toggleModel.cat" :key="item.title">
              <div class="itemTitle">{{ item.title }}</div>
              <div class="itemCost">{{ item.cost }}</div>
              <div class="btn-group">
                <addMoneyModal/>
                <button @click='delCat(toggleModel, item)'> 삭제 </button> 
              </div>
            </div>
          </div>
            <!-- <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">제목</th>
                    <th class="text-left">돈</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in toggleModel.cat" :key="item.title">
                    <td>{{ item.title }}</td>
                    <td>{{ item.cost }} </td>
                    <td>
                      <addMoneyModal/>
                      <button @click='delCat(toggleModel, item)'> 삭제 </button> 
                    </td>
                    
                  </tr>
                </tbody>
              </template>
            </v-simple-table> -->

          </v-sheet>
        </v-expand-transition>
      </v-sheet>   
      <!-- <div class="blank">
         <createListModal/>
      </div> -->
      <!-- <v-data-table
        headers="headers"
        items="desserts"
        items-per-page="5"
        class=" mt-10"      
      ></v-data-table> -->
    
  </div>
  
</template>
<script>
import inputMoneyModal from '../components/inputMoneyModal';
import addMoneyModal from '../components/addMoneyModal';
// import createListModal from '../components/createListModal';
import { verify } from 'crypto';
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'accounting',
    components: {
      inputMoneyModal,
      addMoneyModal,
      
    },
    created : function(){
        this.fetchBank(true);
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
      toggleModel: null,
    }),
    computed : {
      bank (){
        return this.$store.state.bank; 
      },
      fetchFlag(){
        return this.fetchBank(this.$store.state.fetch_flag); 
      }
    },
    watch : {
      fetchFlag(newV, oldV){
        console.log("fetch");
      },
    },
    methods : {
        delCat : function (model, cat){
          if(confirm("정말 삭제하시겠습니까?")){
            model.totalcost = parseInt(model.totalcost) - parseInt(cat.cost);
            model.updatetime = moment().format('YYYY-MM-DD HH:mm:ss');
            _.remove(model.cat, function(n) {
              return n.title == cat.title;
            });
            this.$database.ref('bank/' + this.model).set(
              JSON.parse(JSON.stringify(model))
            ).then(()=>{
              this.$database.ref('moneylog').push({
                status: "삭제",
                title: model.title,
                cat : cat,
                totalcost : cat.cost,
                savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
              }).then(()=>{
                this.fetchBank(true);
                this.model = null;
              });
            });
            

           
          }
        },
        click : function (params) {
            let k = {...this.save};
            
            this.saves.push(k);
            console.log(this.saves);
        },
        fetchBank : function (flag){
          if(flag){
            let self = this;
            this.$database.ref('bank').once('value',function(snapshot) {
            var rows = [];
            console.log(snapshot.val());
            console.dir(Array.isArray(snapshot.val()));
            // if(Array.isArray(snapshot.val())){
            //   rows.push(snapshot.val());
            // }else{
            //   snapshot.forEach(function(childSnapshot) {
            //       var childData = childSnapshot.val();
                  
            //       rows.push(childData);
            //   });
            // }
            
            self.$store.state.bank = snapshot.val();
            console.log(self.$store.state.bank);
            self.$store.state.fetch_flag = false;
          })
          } 
        },
        onOff(idx){
          if(this.model != null && this.model == idx){
            this.model = null;  
          }else{
            this.model = idx;
            this.toggleModel = this.$store.state.bank[idx];
            console.log(this.toggleModel);
          }
          
        },
        deleteAccount(idx){
          console.log(this.$store.state.bank[idx]);
          const target = this.$store.state.bank[idx];
          if(confirm("정말 삭제하시겠습니까?")){
            this.$database.ref('bank/' + idx).remove()
            .then(()=>{
              this.$database.ref('moneylog').push({
                status: "삭제",
                title: target.title,
                cat : target.cat,
                totalcost : target.totalcost,
                savetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                updatetime: moment().format('YYYY-MM-DD HH:mm:ss')
              }).then(()=>{
                this.fetchBank(true);
                this.model = null;
              });
            });
          }
          event.stopPropagation();
        }
        
    }
  }
</script>
<style lang="stylus">
  .cf{
    content: '';

  }
  .slide-box{
    height 199px;
    width: 200px;
    padding-top: 30px;
    box-shadow: none;
    box-sizing: border-box;
    border-right:1px solid #e9e9e9 !important;
  }
  .v-application .white{
    border-right: 1px solid #e3e3e3 !important;
  }
  .v-card__title{
    font-size: 1rem;
  }
  .v-card__text{
    font-size: 1.3rem;
  }
  .toolbar{
    height: 50px;
    background: #ffffff;
    font-size: 1rem;
    border-bottom: 1px solid #e3e3e3;
    line-height 50px;
    padding-left :20px;
    display: flex;
    justify-content: space-between;
  }


  .btn-part{
    width : 100%;
    position: absolute;
    bottom: 0;
    padding: 4px;
  }
   .btn-part button{
     width: 100%;
     background : none;
   }
   .main-info{
     cursor: pointer;
   }
   .blank{
     width : 100%;
     height : 150px;
     border: 2px dotted #bdbcbd;
     background: #f3f3f3;
   }
  .detailList{
    width: 100%;
    background: #f1f1f1;
    padding: 10px;
    box-sizing: border-box;
  }
  .detailList .listItem{
    display: flex;
    justify-content : space-around;
    
    background: #fff;
    margin: 0 auto;
    height: 65px;
    line-height: 60px;
    padding: 5px;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    margin-bottom: 5px;
  }
  .detailList .listItem .itemTitle{
    float: left;
    width: 200px;
  }

</style>