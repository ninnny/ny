<template>
    <div class="history-table">
        <table>
            <thead>
                <tr>
                    <th width="10%">일자</th>
                    <th width="10%" >입/출금</th>
                    <th width="15%">항목</th>
                    <th width="15%">금액</th>
                    <th>내용</th>
                    <th width="15%">잔액</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2019.12.12</td>
                    <td class="deposit">입금</td>
                    <td>인건비</td>
                    <td>10,000</td>
                    <td>12월 인건비 </td>
                    <td>11,000</td>
                </tr>                
            </tbody>
        </table>
    </div>
</template>
<style scoped>
    table{
        width: 100%;
        background: #fff;
        color: #383a42 ;
        text-align: left;
        
    }

    thead{
        color: #848792;
    }
    th{
        padding-left: 12px;
    }
    tr{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #cacaca; 
        padding: 15px;
    }
   td{
       font-weight: bold;
       padding-left: 12px;
   }
   .deposit{
       color: #3c55a0;
   }
</style>