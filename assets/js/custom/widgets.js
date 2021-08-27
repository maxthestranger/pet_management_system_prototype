"use strict";var KTWidgets=function(){var e=function(e,t,a,s){var r=document.querySelector(t),i=parseInt(KTUtil.css(r,"height"));if(r){var o={series:[{name:"Profit",data:a}],chart:{fontFamily:"inherit",type:"bar",height:i,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["30%"],borderRadius:4}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{crosshairs:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:KTUtil.getCssVariableValue("--bs-gray-400"),fontSize:"12px"}}},yaxis:{crosshairs:{show:!1},labels:{style:{colors:KTUtil.getCssVariableValue("--bs-gray-400"),fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none"}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},fill:{opacity:1},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+"k"}}},colors:[KTUtil.getCssVariableValue("--bs-primary")],grid:{borderColor:KTUtil.getCssVariableValue("--bs-gray-300"),strokeDashArray:4,yaxis:{lines:{show:!0}}}},l=new ApexCharts(r,o),n=!1,c=document.querySelector(e);!0===s&&(l.render(),n=!0),c.addEventListener("shown.bs.tab",(function(e){0==n&&(l.render(),n=!0)}))}};return{init:function(){var t,a,s,r,i,o,l,n,c,d;(t=document.querySelector("#kt_user_menu_dark_mode_toggle"))&&t.addEventListener("click",(function(){window.location.href=this.getAttribute("data-kt-url")})),function(){var e=document.getElementById("kt_chart_widget_1_chart"),t=parseInt(KTUtil.css(e,"height"));if(e){var a={series:[{name:"Net Profit",data:[30,30,43,43,34,34,26,26,47,47]}],chart:{fontFamily:"inherit",type:"area",height:t,toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:.075},stroke:{curve:"smooth",show:!0,width:3,colors:[KTUtil.getCssVariableValue("--bs-primary")]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:KTUtil.getCssVariableValue("--bs-gray-500"),fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:KTUtil.getCssVariableValue("--bs-gray-200"),width:1,dashArray:3}},tooltip:{enabled:!0,formatter:void 0,offsetY:0,style:{fontSize:"12px"}}},yaxis:{min:0,max:60,labels:{show:!1,style:{colors:KTUtil.getCssVariableValue("--bs-gray-500"),fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" sales"}}},colors:[KTUtil.getCssVariableValue("--bs-primary")],markers:{colors:[KTUtil.getCssVariableValue("--bs-light-primary")],strokeColor:[KTUtil.getCssVariableValue("--bs-primary")],strokeWidth:3}};new ApexCharts(e,a).render()}}(),a=document.getElementById("kt_charts_widget_2_chart"),s=parseInt(KTUtil.css(a,"height")),r=KTUtil.getCssVariableValue("--bs-gray-500"),i=KTUtil.getCssVariableValue("--bs-gray-200"),o=KTUtil.getCssVariableValue("--bs-primary"),l=KTUtil.getCssVariableValue("--bs-gray-300"),a&&new ApexCharts(a,{series:[{name:"Net Profit",data:[30,60,80,60,30,60,80,100,80,60,60],margin:{left:5,right:5}},{name:"Revenue",data:[30,60,80,60,30,60,80,100,80,60,60]}],chart:{fontFamily:"inherit",type:"bar",height:s,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:["50%"],borderRadius:4}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:r,fontSize:"12px"}}},yaxis:{labels:{show:!1,style:{colors:r,fontSize:"12px"}}},fill:{type:"solid"},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(e){return"$"+e+" revenue"}}},colors:[o,l],grid:{borderColor:i,strokeDashArray:4,yaxis:{lines:{show:!0}},padding:{left:-10,right:5}}}).render(),e("#kt_charts_widget_3_tab_1","#kt_charts_widget_3_chart_1",[30,40,30,25,40,45,30,20,40,25,20,30],!0),e("#kt_charts_widget_3_tab_2","#kt_charts_widget_3_chart_2",[25,30,25,45,30,40,30,25,40,20,25,30],!1),function(){var e=document.getElementById("kt_chart_widget_4_chart"),t=parseInt(KTUtil.css(e,"height"));if(e){var a={series:[74],chart:{fontFamily:"inherit",height:t,type:"radialBar",offsetY:0},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{margin:0,size:"70%"},dataLabels:{showOn:"always",name:{show:!0,fontSize:"13px",fontWeight:"700",offsetY:-5,color:KTUtil.getCssVariableValue("--bs-gray-500")},value:{color:KTUtil.getCssVariableValue("--bs-gray-700"),fontSize:"30px",fontWeight:"700",offsetY:-40,show:!0}},track:{background:KTUtil.getCssVariableValue("--bs-light-primary"),strokeWidth:"100%"}}},colors:[KTUtil.getCssVariableValue("--bs-primary")],stroke:{lineCap:"round"},labels:["My Achievements"]};new ApexCharts(e,a).render()}}(),n=document.querySelector("#kt_widget_5_load_more_btn"),c=document.querySelector("#kt_widget_5"),n&&n.addEventListener("click",(function(e){e.preventDefault(),n.setAttribute("data-kt-indicator","on"),setTimeout((function(){n.removeAttribute("data-kt-indicator"),c.classList.remove("d-none"),n.classList.add("d-none"),KTUtil.scrollTo(c,200)}),2e3)})),(d=document.querySelector("#kt_user_follow_button"))&&d.addEventListener("click",(function(e){e.preventDefault(),d.setAttribute("data-kt-indicator","on"),d.disabled=!0,d.classList.contains("btn-success")?setTimeout((function(){d.removeAttribute("data-kt-indicator"),d.classList.remove("btn-success"),d.classList.add("btn-light"),d.querySelector(".svg-icon").classList.add("d-none"),d.querySelector(".indicator-label").innerHTML="Follow",d.disabled=!1}),1500):setTimeout((function(){d.removeAttribute("data-kt-indicator"),d.classList.add("btn-success"),d.classList.remove("btn-light"),d.querySelector(".svg-icon").classList.remove("d-none"),d.querySelector(".indicator-label").innerHTML="Following",d.disabled=!1}),1e3)}))}}}();KTUtil.onDOMContentLoaded((function(){KTWidgets.init()}));