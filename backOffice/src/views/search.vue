<template>
    <div class="history-search">
        <div class="option">
            <div class="table">
                <div class="tr">
                    <div class="th">조회계좌</div>
                    <div class="td">
                        <!-- <div class="account-select" > -->
                            <v-select
                                placeholder="계좌를 선택하세요"
                                dense
                                outlined
                                :items=list
                                hide-details
                                height=5
                            ></v-select>
                        <!-- </div> -->
                    </div>
                </div>
                <div class="tr">
                    <div class="th">조회기간</div>
                    <div class="td">
                         <div class="btn-snake mb-3">
                            <button class="">오늘</button>
                            <button class="">1주일</button>
                            <button class="">1개월</button>
                            <button class="">3개월</button>
                        </div>                             
                        <div class="calendar">
                            <calendar/>~<calendar/>
                        </div>                       
                    </div>

                </div>
                <div class="tr">
                    <div class="th">조회내용</div>
                    <div class="td search-box">
                        <input type="text" placeholder="단어를 입력하세요">
                    </div>
                </div>
            </div>
            <div class="search-btn">
                <button class="btn btn-blue">검색</button>
            </div>
        </div>
        <history/>

    </div>
    
</template>

<script>
import calendar from '../components/calendar';
import history from '../components/history';
    export default {
    name: 'search',
    components: {
      calendar,
      history
      
    },
    data: () => ({
      list: [1,2,3] 
    }),

    }


</script>

<style scoped>

    .option{
        background: #fff;
        color: #848792;
        margin-bottom: 20px;
        
    }
    .table{
        display: table;
        table-layout: fixed;
        border-collapse: collapse;
        width: 100%;   
            
    }
    .tr{
        display: table-row;
        height: 60px;
        border: 1px solid #cacaca;
        border-right: none;
        border-left: none;
        
    }

    .th{
        padding: 15px;
        display: table-cell;
        width: 20%;
        background: #f0f0f3;
        text-align: left;
        vertical-align: middle;
        font-weight: bold;
     }

    .td{
        display: table-cell;
        vertical-align: middle;
        padding: 15px;
        box-sizing: border-box;
        
    }
    .search-box input{
        width: 100%;
        padding: 10px;
        border: 1px solid #d9d9d9;
        border-radius: 3px;
        box-sizing: border-box;
        color: #383a42 ;
    }
    .search-btn{
        padding: 8px;
        text-align: center;
        background: #f0f0f3;
    }
    .search-btn button{
        width: 150px;
    }
    .calendar{
        width: 50%;
        display: flex;
    }
    .btn-snake{
        height: 40px;
        width: 50%;
        border-radius: 3px;
        border: 1px solid #c2c2c2;
        display: flex;
        justify-content: space-around;
    }
    .btn-snake button{
        color: #333;
        width: 25%;
        border-right: 1px solid #c2c2c2;
    }
    .btn-snake button:active{
        background: #efedff;
    }
    .btn-snake button:last-child{
        border-right: none;
    }

    
</style>