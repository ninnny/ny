<template>
    <div class="history-search">
        <div class="option">
            <div class="table">
                <div class="tr">
                    <div class="th">조회계좌</div>
                    <div class="td">
                        <v-select
                            label="계좌를 선택하세요"
                            dense
                            outlined
                            
                        ></v-select>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">조회기간</div>
                    <div class="td calendar">
                        <calendar/>~<calendar/> 넓이조절 =ㅅ=
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
                <button>검색</button>
                <button>초기화</button>
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
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: #f0f0f3;
    }
    .td.calendar .v-input{
        width: 30%;
    }
</style>