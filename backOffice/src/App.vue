<template>
  <v-app>
    <navi></navi>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
  </v-app>
</template>

<script>
import navi from './components/navi';

export default {
  name: 'App',
  components: {
    navi,
  },
  data: () => ({
    //
  }),
};
</script>


<style>
  .container{
    color: #333;
  }

/* Default Style */
*    	  	{margin:0; padding:0; }
html, body	{width:100%;height:100%;-webkit-font-smoothing:antialiased}
body		{
    background-color:#fff;
    font:normal 15px/23px "Apple SD Gothic Neo" , "Malgun Gothic" , "Dotum" , "Arial" , "verdana" , "Helvetica"; 
    color:#666; 
    -webkit-text-size-adjust:none; 
    width:100%;
    height:100%;
    -webkit-font-smoothing:antialiased
}

caption span, legend, .blind {overflow:hidden;position:absolute;top:-9999em;left:-9999em;width:0;height:0;padding:0;margin:0;text-indent: -9999em;visibility:hidden;outline:none;z-index:-1}

td *, div *, li *, span *, p *  {vertical-align:top;}
ul, ol, li						{list-style:none; margin:0px 0px 0px 0px;}

img, hr		{border:none;}
img			{vertical-align: top; border:0px ; /* for IE imge margin */}
strong		{font-weight:bold;}
b			{font-weight:bold;}
sup			{vertical-align:super;}

/* Link Style */
/* a:link		{text-decoration:none; color:#333;}
a:visited	{text-decoration:none; color:#333;}
a:hover		{text-decoration:none; color:#06939a;}
a:active	{text-decoration:none; color:#06939a;} */

a:link		{text-decoration:none;}
a:visited	{text-decoration:none;}
a:hover		{text-decoration:none;}
a:active	{text-decoration:none;}

td a:link		{text-decoration:none;}
td a:visited	{text-decoration:none;}
td a:hover		{text-decoration:none;}
td a:active	    {text-decoration:none;}


/* Table Style */
table  		{border-collapse:collapse;}

/* From Style */
textarea	{border:1px solid #d3d0c9; padding:10px;}
select		{width:100px; font-size:12px; height:20px; padding:2px 0 0 4px;}

/* Font Class Style */
.b		{font-weight:bold;}
.u		{text-decoration:underline}

.png            {_display:inline-block;}
.png img        {_filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);}

.png24			{mpt:expression(septng24(this))};

.black			{color:#000}
.orange			{color:#c25900}
.brown 			{color:#634028}
.white {color : #fff;}

.inline-block { display : inline-block; }


/* align */
.l		{text-align:left;}
.c		{text-align:center;}
.r		{text-align:right;}
.t		{vertical-align:top;}
.bb		{vertical-align:bottom;}
.m		{vertical-align:middle}


/* cursor */
.pointer {cursor: pointer;}


/* float */
.overflow		{overflow:hidden;}
.f_l		{float:left;}
.f_r	{float:right;}
.clear_both		{clear:both;}

 /* Margin Set */

.ml5	{margin-left:5px;}
:root .ml5	{margin-left:3px;}
.ml8	{margin-left:8px;}
.ml10	{margin-left:10px;}
.ml15	{margin-left:15px;}
.ml20	{margin-left:20px;}
.ml25	{margin-left:25px;}
.ml30	{margin-left:30px;}
.ml35	{margin-left:35px;}
.ml40	{margin-left:40px;}
.ml45	{margin-left:45px;}
.ml50	{margin-left:50px;}
.ml53	{margin-left:53px;}
.ml55	{margin-left:55px;}
.ml60	{margin-left:60px;}
.ml65	{margin-left:65px;}
.ml75	{margin-left:75px;}
.ml87	{margin-left:87px;}
.ml90	{margin-left:90px;}
.ml100	{margin-left:100px;}
.ml103	{margin-left:103px;}
.ml144	{margin-left:144px;}


.mr2	{margin-right:2px;}
.mr5	{margin-right:5px;}
.mr10	{margin-right:10px;}
.mr15	{margin-right:15px;}
.mr20	{margin-right:20px;}
.mr25	{margin-right:25px;}
.mr30	{margin-right:30px;}
.mr35	{margin-right:35px;}
.mr40	{margin-right:40px;}
.mr45	{margin-right:45px;}
.mr50	{margin-right:50px;}
.mr5p   {margin-right:5%;}
.mr10p   {margin-right:10%;}
.mr20p   {margin-right:20%;}
.mr40p   {margin-right:40%;}

.mb0    {margin-bottom:0px;}
.mb2	{margin-bottom:2px;}
.mb3	{margin-bottom:3px;}
.mb4	{margin-bottom:4px;}
.mb5	{margin-bottom:5px;}
.mb10	{margin-bottom:10px;}
.mb15	{margin-bottom:15px;}
.mb20	{margin-bottom:20px;}
.mb25	{margin-bottom:25px;}
.mb30	{margin-bottom:30px;}
.mb35	{margin-bottom:35px;}
.mb40	{margin-bottom:40px;}
.mb45	{margin-bottom:45px;}
.mb50	{margin-bottom:50px;}
.mb55	{margin-bottom:55px;}
.mb60	{margin-bottom:60px;}
.mb80	{margin-bottom:80px;}
.mb90   {margin-bottom:90px;}

.mt1	{margin-top:1px;}
.mt2	{margin-top:2px;}
.mt3	{margin-top:2px;}
.mt5	{margin-top:5px;}
.mt7	{margin-top:7px;}
.mt8	{margin-top:8px;}
.mt10	{margin-top:10px;}
.mt15	{margin-top:15px;}
.mt20	{margin-top:20px;}
.mt25	{margin-top:25px;}
.mt27	{margin-top:27px;}
.mt30	{margin-top:30px;}
.mt35	{margin-top:35px;}
.mt40	{margin-top:40px;}
.mt45	{margin-top:45px;}
.mt50	{margin-top:50px;}
.mt55	{margin-top:55px;}
.mt80   {margin-top:80px;}
.mt150  {margin-top:150px;}


/* Padding Set */
.pl1	{padding-left:1px;}
.pl3	{padding-left:3px;}
.pl5	{padding-left:5px;}
.pl10	{padding-left:10px;}
.pl15	{padding-left:15px;}
.pl20	{padding-left:20px;}
.pl25	{padding-left:25px;}
.pl30	{padding-left:30px;}
.pl35	{padding-left:35px;}
.pl40	{padding-left:40px;}
.pl45	{padding-left:45px;}
.pl50	{padding-left:50px;}
.pl60	{padding-left:60px;}
.pl90	{padding-left:90px;}
.pl120	{padding-left:120px;}
.pl150	{padding-left:150px;}

.pr3	{padding-right:3px;}
.pr5	{padding-right:5px;}
.pr10	{padding-right:10px;}
.pr15	{padding-right:15px;}
.pr20	{padding-right:20px;}
.pr25	{padding-right:25px;}
.pr30	{padding-right:30px;}
.pr35	{padding-right:35px;}
.pr40	{padding-right:40px;}
.pr45	{padding-right:45px;}
.pr50	{padding-right:50px;}

.pb3	{padding-bottom:3px;}
.pb5	{padding-bottom:5px;}
.pb10	{padding-bottom:10px;}
.pb15	{padding-bottom:15px;}
.pb20	{padding-bottom:20px;}
.pb25	{padding-bottom:25px;}
.pb30	{padding-bottom:30px;}
.pb35	{padding-bottom:35px;}
.pb40	{padding-bottom:40px;}
.pb45	{padding-bottom:45px;}
.pb50	{padding-bottom:50px;}

.pt2	{padding-top:2px;}
.pt3	{padding-top:3px;}
.pt4	{padding-top:4px;}
.pt5	{padding-top:5px;}
.pt7	{padding-top:7px;}
.pt10	{padding-top:10px;}
.pt12	{padding-top:12px;}
.pt15	{padding-top:15px;}
.pt20	{padding-top:20px;}
.pt22	{padding-top:22px;}
.pt25	{padding-top:25px;}
.pt30	{padding-top:30px;}
.pt35	{padding-top:35px;}
.pt40	{padding-top:40px;}
.pt45	{padding-top:45px;}
.pt50	{padding-top:50px;}
.pt60	{padding-top:60px;}
.pt80   {padding-top:80px;}

.pt3p   {padding-top:3%;}
.pt4p   {padding-top:4%;}
.pt5p   {padding-top:5%;}


.ht360  {height:360px;}
.ht340  {height:340px;}
.ht310  {height:310px;}
.ht300  {height:300px;}
.ht250  {height:250px;}
.ht200  {height:200px;}
.ht180  {height:180px;}
.ht150  {height:150px;}
.ht120  {height:120px;}
.ht14   {height:14px;}
.ht18   {height:18px;}
.ht25   {height:25px;}
.ht35   {height:35px;}
.ht38   {height:38px;}
.ht40   {height:40px;}
.ht42   {height:42px;}
.ht45   {height:45px;}
.ht50   {height:50px;}
.ht70   {height:70px;}

.w100p   {width:100%;}
.h100p   {height:100%;} 

</style>