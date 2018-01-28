webpackJsonp([1],{"0Ho4":function(t,e){},CdHA:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),s=r("NYxO"),n=r("ajw3"),i=r("bqTm"),o=r.n(i),c=r("Dd8w"),l=r.n(c),u=r("O4Lo"),d=r.n(u),h=r("ViqS"),p=r.n(h),m=function(t,e){return p()(t).format(e)},v=function(t){return t+"%"},f=function(t){return t.toUpperCase()},_={name:"Header",props:["inputChange","marketInfo"],data:function(){return{navBarCollapsed:!0}},methods:{subIsActive:function(t){var e=this;return(Array.isArray(t)?t:[t]).some(function(t){return 0===e.$route.path.indexOf(t)})},debounceInput:d()(function(t){this.inputChange(t.target.value)},500),toggleNavbar:function(){this.navBarCollapsed=!this.navBarCollapsed}},filters:{format:m,percentage:v}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/tickers/coin-list"}},[r("b",{staticClass:"text-warning"},[t._v("Crypto-Vue")])]),t._v(" "),r("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:t.toggleNavbar}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("div",{staticClass:"navbar-collapse",class:{collapse:t.navBarCollapsed},attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"},[r("li",{staticClass:"nav-item",class:{active:t.subIsActive("/tickers/coin-list")}},[r("router-link",{staticClass:"nav-link",attrs:{to:"/tickers/coin-list"}},[t._v("Coin list")])],1),t._v(" "),r("li",{staticClass:"nav-item",class:{active:t.subIsActive("/tickers/maps")}},[r("router-link",{staticClass:"nav-link",attrs:{to:"/tickers/maps"}},[t._v("Market Cap Maps")])],1),t._v(" "),r("li",{staticClass:"nav-item",class:{active:t.subIsActive("/about")}},[r("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),r("span",{staticClass:"d-none d-xl-block"},[r("span",{staticClass:"text-light mr-2"},[t._v("Total Market:")]),t._v(" "),r("span",{staticClass:"text-success mr-2"},[t._v(t._s(t._f("format")(t.marketInfo.total_market_cap_usd,"$0a")))]),t._v(" "),r("span",{staticClass:"text-light mr-2"},[t._v("24h Vol:")]),t._v(" "),r("span",{staticClass:"text-success mr-2"},[t._v(t._s(t._f("format")(t.marketInfo.total_24h_volume_usd,"$0a")))]),t._v(" "),r("span",{staticClass:"text-light mr-2"},[t._v("BTC dominance:")]),t._v(" "),r("span",{staticClass:"text-success mr-5"},[t._v(t._s(t._f("percentage")(t.marketInfo.bitcoin_percentage_of_market_cap)))])]),t._v(" "),t.subIsActive("/tickers/coin-list")?r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("input",{staticClass:"form-control mr-sm-2 text-light bg-dark",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},on:{input:t.debounceInput}})]):t._e()])],1)},staticRenderFns:[]},g=r("VU/8")(_,b,!1,null,null,null).exports,k=r("U0v6"),C={name:"Loader",props:["isLoading"],components:{FontAwesomeIcon:r.n(k).a}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isLoading?e("div",{staticClass:"loader-wrapper"},[e("div",{staticClass:"loader"},[e("i",[e("font-awesome-icon",{staticStyle:{color:"#FFF"},attrs:{icon:"sync",size:"2x",spin:""}})],1)])]):this._e()},staticRenderFns:[]};var x=r("VU/8")(C,y,!1,function(t){r("VsTr")},"data-v-7a70589b",null).exports,T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-dismissible fade show text-light",class:"alert-"+t.type+" bg-"+t.type,attrs:{role:"alert"}},[r("strong",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "+t._s(t.errorMessage)+"\n  "),r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.dismiss}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},staticRenderFns:[]};var E=r("VU/8")({name:"Alert",props:["title","error","type","dismiss"],computed:{errorMessage:function(){return this.error&&this.error.message?this.error.message:"An error has occurred. Please try again or contact support"}}},T,!1,function(t){r("ofk1")},"data-v-78d7da6f",null).exports,A={name:"app",computed:l()({},Object(s.b)({isLoading:"isLoading",error:"getError",marketInfo:"getMarketInfo"})),created:function(){this.$store.dispatch("getGlobalMarketInfo")},methods:{search:function(t){this.$store.dispatch("searchTickers",t)},dismiss:function(){this.$store.dispatch("setError",null)}},components:{Header:g,Loader:x,Alert:E}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{"input-change":this.search,"market-info":this.marketInfo}}),this._v(" "),this.error?e("alert",{attrs:{title:"Oooops!!",error:this.error,dismiss:this.dismiss,type:"danger"}}):this._e(),this._v(" "),e("div",{attrs:{id:"page"}},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1),this._v(" "),e("Loader",{attrs:{"is-loading":this.isLoading}})],1)},staticRenderFns:[]};var I,w,F,B,D=r("VU/8")(A,S,!1,function(t){r("vz8U")},null,null).exports,R=r("bOdI"),$=r.n(R),L=r("Xxa5"),O=r.n(L),U=r("exGp"),V=r.n(U),G=r("hiCB"),H=r.n(G),N=r("fZjL"),M=r.n(N),P="GET_TICKERS_SUCCESS",z="GET_TICKERS_FAILED",K="GET_HISTO_DATA",j="GET_HISTO_DATA_SUCCESS",W="GET_HISTO_DATA_FAILED",q="GET_GLOBAL_MARKET_DATA",Y="GET_GLOBAL_MARKET_DATA_SUCCESS",X="GET_GLOBAL_MARKET_DATA_FAILED",J=r("EXR2"),Q=r.n(J),Z="https://api.coinmarketcap.com/v1",tt="https://min-api.cryptocompare.com",et={MINUTE:"minute",HOUR:"hour",DAY:"day"},rt=this,at=(I=V()(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(Z+"/ticker/?limit=0",{ttl:300});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,rt)})),function(){return I.apply(this,arguments)}),st=(w=V()(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(Z+"/global/",{ttl:300});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,rt)})),function(){return w.apply(this,arguments)}),nt=(F=V()(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(tt+"/data/all/coinlist",{ttl:300});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,rt)})),function(){return F.apply(this,arguments)}),it=(B=V()(O.a.mark(function t(e,r){var a;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(ot(e,r),{ttl:300});case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}},t,rt)})),function(t,e){return B.apply(this,arguments)});function ot(t,e){switch(e){case et.MINUTE:return tt+"/data/histominute?fsym="+t+"&tsym=USD&e=CCCAGG";case et.HOUR:return tt+"/data/histohour?fsym="+t+"&tsym=USD&e=CCCAGG";default:return tt+"/data/histoday?fsym="+t+"&tsym=USD&e=CCCAGG&allData=true"}}var ct,lt,ut=r("2247"),dt=r.n(ut),ht=r("g7Do"),pt=r.n(ht),mt=r("Ba3q"),vt=r.n(mt),ft=r("LqN4"),_t=r.n(ft),bt=r("RyI1"),gt=r.n(bt),kt={byId:{},global:null,sortKey:{rank:"Number"},sortOrder:"asc",searchValue:""},Ct={getTickersSortBy:function(){var t=M()(kt.sortKey)[0];return"Number"===kt.sortKey[t]?vt()(gt()(dt()(kt.byId,function(t){return t}),function(t){return kt.searchValue&&t.name.toLowerCase().includes(kt.searchValue.toLowerCase())||!kt.searchValue}),function(e){return e[t]?parseFloat(e[t]):0},[kt.sortOrder]):vt()(gt()(dt()(kt.byId,function(t){return t}),function(t){return kt.searchValue&&t.name.toLowerCase().includes(kt.searchValue.toLowerCase())||!kt.searchValue}),[t],[kt.sortOrder])},getTickerById:function(t){return function(e){return t.byId[e]}},getTickers:function(t){return t.byId},getTreemapData:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H.a;return gt()(t.byId,function(t){var a=parseInt(t.market_cap_usd);return _t()(a,e,r)}).map(function(t,e){return{id:e,name:t.name,value:parseInt(t.market_cap_usd)}})}}},yt={getTickers:function(t){var e=this,r=t.commit;return V()(O.a.mark(function t(){var a,s,n,i;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r("GET_TICKERS"),a=at(),s=nt(),t.next=6,a;case 6:return n=t.sent,t.next=9,s;case 9:if("Error"!==(i=t.sent).data.Response){t.next=12;break}throw new Error(i.data.ErrorsSummary);case 12:n.data&&i.data&&i.data.Data&&n.data.forEach(function(t){t.meta=i.data.Data[t.symbol],"MIOTA"===t.symbol&&(t.meta=i.data.Data.IOT)}),r(P,n.data),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),r(z,t.t0);case 19:case"end":return t.stop()}},t,e,[[0,16]])}))()},getGlobalMarketData:function(t){var e=this;t.commit;return V()(O.a.mark(function t(){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,e)}))()},sortBy:function(t,e){(0,t.commit)("SORT_TICKERS",{key:e.key,type:e.type})},searchTickers:function(t,e){(0,t.commit)("SET_SEARCH",e)}},xt=(ct={},$()(ct,P,function(t,e){t.byId=pt()(e,function(t){return t.id})}),$()(ct,"SORT_TICKERS",function(t,e){var r=e.key,a=e.type;t.sortKey[r]?t.sortOrder="asc"===t.sortOrder?"desc":"asc":(t.sortKey=$()({},r,a),t.sortOrder="asc")}),$()(ct,"SET_SEARCH",function(t,e){t.searchValue=e}),ct),Tt={state:kt,getters:Ct,actions:yt,mutations:xt},Et={state:{bySymbol:{}},getters:{getOhlcAndVolumes:function(t){return function(e){var r=[],a=[],s=t.bySymbol[e]&&t.bySymbol[e].Data;return s&&s.map(function(t){var e=1e3*t.time;r.push([e,t.open,t.close,t.low,t.close]),a.push([e,t.volumeto])}),{ohlc:r,volume:a}}}},actions:{getHistoData:function(t,e){var r=this,a=t.commit,s=t.dispatch,n=(t.state,t.rootState),i=e.id,o=e.interval;return V()(O.a.mark(function t(){var e,c,l;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.tickers.byId[i]){t.next=4;break}return t.next=4,s("getTickers");case 4:return e=n.tickers.byId[i].symbol,a(K),t.next=8,it(e,o);case 8:if(c=t.sent,"Error"!==(l=c.data).Response){t.next=12;break}throw new Error(l.ErrorsSummary);case 12:a(j,{data:l,symbol:e}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),a(W,t.t0);case 18:case"end":return t.stop()}},t,r,[[0,15]])}))()}},mutations:$()({},j,function(t,e){var r=e.data,a=e.symbol;t.bySymbol=l()({},t.bySymbol,$()({},a,r))})},At={state:{loading:!1,error:null},getters:{isLoading:function(t){return t.loading},getError:function(t){return t.error}},actions:{setLoading:function(t,e){(0,t.commit)("SET_LOADING",e)},setError:function(t,e){(0,t.commit)("SET_ERROR",e)}},mutations:(lt={},$()(lt,"SET_LOADING",function(t,e){t.loading=e}),$()(lt,"SET_ERROR",function(t,e){t.error=e}),$()(lt,"GET_TICKERS",function(t){t.loading=!0,t.error=null}),$()(lt,P,function(t){t.loading=!1,t.error=null}),$()(lt,z,function(t,e){t.loading=!1,t.error=e}),$()(lt,K,function(t){t.loading=!0,t.error=null}),$()(lt,j,function(t,e){e.data,e.symbol;t.loading=!1,t.error=null}),$()(lt,W,function(t,e){t.loading=!1,t.error=e}),$()(lt,q,function(t){t.loading=!0,t.error=null}),$()(lt,Y,function(t,e){e.data,e.symbol;t.loading=!1,t.error=null}),$()(lt,X,function(t,e){t.loading=!1,t.error=e}),lt)},St={state:{marketInfo:{}},getters:{getMarketInfo:function(t){return t.marketInfo}},actions:{getGlobalMarketInfo:function(t){var e=this,r=t.commit;t.dispatch;return V()(O.a.mark(function t(){var a,s;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(q),t.next=4,st();case 4:a=t.sent,s=a.data,r(Y,s),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r(X,t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()}},mutations:$()({},Y,function(t,e){t.marketInfo=e})};r("pFYg");a.a.use(s.a);var It=new s.a.Store({modules:{tickers:Tt,histodata:Et,common:At,global:St},strict:!1,plugins:[]}),wt=r("/ocq"),Ft={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]},Bt=r("VU/8")({name:"Tickers",created:function(){this.$store.dispatch("getTickers")}},Ft,!1,null,null,null).exports,Dt={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("th",{staticClass:"pointer d-none d-xl-table-cell",attrs:{scope:"col"}}),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"name",type:"String"})}}},[r("b",{staticClass:"d-lg-none"},[t._v("Coin")]),t._v(" "),r("b",{staticClass:"d-none d-lg-block"},[t._v("Coin name")])]),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"symbol",type:"String"})}}},[r("b",[t._v("Symbol")])]),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"price_usd",type:"Number"})}}},[r("b",[t._v("Price")])]),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"market_cap_usd",type:"Number"})}}},[r("b",{staticClass:"d-lg-none"},[t._v("M.Cap")]),t._v(" "),r("b",{staticClass:"d-none d-lg-block"},[t._v("Market Cap")])]),t._v(" "),r("th",{staticClass:"pointer d-none d-xl-table-cell",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"available_supply",type:"Number"})}}},[r("b",[t._v("Available Supply")])]),t._v(" "),r("th",{staticClass:"pointer d-none d-xl-table-cell",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"total_supply",type:"Number"})}}},[r("b",[t._v("Total supply")])]),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"percent_change_1h",type:"Number"})}}},[r("b",{staticClass:"d-lg-none"},[t._v("1h")]),t._v(" "),r("b",{staticClass:"d-none d-lg-block"},[t._v("Change (1h)")])]),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"percent_change_24h",type:"Number"})}}},[r("b",{staticClass:"d-lg-none"},[t._v("24h")]),t._v(" "),r("b",{staticClass:"d-none d-lg-block"},[t._v("Change (24h)")])]),t._v(" "),r("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"percent_change_7d",type:"Number"})}}},[r("b",{staticClass:"d-lg-none"},[t._v("7d")]),t._v(" "),r("b",{staticClass:"d-none d-lg-block"},[t._v("Change (7d)")])])])},staticRenderFns:[]},Rt=r("VU/8")({props:["sortBy"]},Dt,!1,null,null,null).exports,$t=function(t){return t>0?"text-success":"text-danger"},Lt=function(t){return t.meta&&"http://cryptocompare.com"+t.meta.ImageUrl},Ot={name:"TickerTableRow",props:["ticker","selectTicker"],methods:{colorizePercentChange:$t,getImageUrl:Lt},filters:{format:m,percentage:v,uppercase:f}},Ut={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"pointer",on:{click:function(e){t.selectTicker(t.ticker)}}},[r("th",{staticClass:"d-none d-xl-table-cell",attrs:{scope:"row"}},[r("img",{staticClass:"img-fluid",attrs:{src:t.getImageUrl(t.ticker)}})]),t._v(" "),r("td",[r("b",[t._v("\n      "+t._s(t._f("uppercase")(t.ticker.name))+"\n    ")])]),t._v(" "),r("td",[r("b",{staticClass:"text-warning"},[t._v("\n      "+t._s(t.ticker.symbol)+"\n    ")])]),t._v(" "),r("td",[t._v(t._s(t._f("format")(t.ticker.price_usd,"$0.[00]")))]),t._v(" "),r("td",[t._v(t._s(t._f("format")(t.ticker.market_cap_usd,"$0.[00]a")))]),t._v(" "),r("td",{staticClass:"d-none d-xl-table-cell"},[t._v(t._s(t._f("format")(t.ticker.available_supply,"$0.[00]a")))]),t._v(" "),r("td",{staticClass:"d-none d-xl-table-cell"},[t._v(t._s(t._f("format")(t.ticker.total_supply,"0.[00]a")))]),t._v(" "),r("td",[r("span",{class:t.colorizePercentChange(t.ticker.percent_change_1h)},[t._v("\n      "+t._s(t._f("percentage")(t.ticker.percent_change_1h))+"\n    ")])]),t._v(" "),r("td",[r("span",{class:t.colorizePercentChange(t.ticker.percent_change_24h)},[t._v("\n      "+t._s(t._f("percentage")(t.ticker.percent_change_24h))+"\n    ")])]),t._v(" "),r("td",[r("span",{class:t.colorizePercentChange(t.ticker.percent_change_7d)},[t._v("\n      "+t._s(t._f("percentage")(t.ticker.percent_change_7d))+"\n    ")])])])},staticRenderFns:[]};var Vt=r("VU/8")(Ot,Ut,!1,function(t){r("0Ho4")},"data-v-1fe0e28e",null).exports,Gt={data:function(){return{counter:0}},computed:l()({},Object(s.b)({tickers:"getTickersSortBy"})),methods:{selectTicker:function(t){this.$router.push({name:"TickerDetail",params:{id:t.id}})},addCoins:function(){this.counter<=this.tickers.length&&(this.counter+=100)},sortBy:function(t){var e=t.key,r=t.type;this.counter=100,this.$store.dispatch("sortBy",{key:e,type:r})}},components:{TickerTableHead:Rt,TickerTableRow:Vt}},Ht={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.addCoins,expression:"addCoins"}],staticClass:"container-fluid pl-0 pr-0",attrs:{id:"ticker-table","infinite-scroll-distance":"600","infinite-scroll-throttle-delay":"50"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-hover table-dark"},[r("thead",{staticClass:"thead-dark"},[r("ticker-table-head",{attrs:{"sort-by":t.sortBy}})],1),t._v(" "),r("tbody",t._l(t.tickers.slice(0,t.counter),function(e){return r("ticker-table-row",{key:e.id,attrs:{ticker:e,"select-ticker":t.selectTicker}})}))])])])])])},staticRenderFns:[]};var Nt=r("VU/8")(Gt,Ht,!1,function(t){r("tb5W")},null,null).exports,Mt=r("504h"),Pt=r.n(Mt),zt={series:[{type:"treemap",layoutAlgorithm:"squarified",allowDrillToNode:!0,layoutStartingDirection:"horizontal",turboThreshold:2e3,colorByPoint:!0,cursor:"pointer",levelIsConstant:!1,point:{events:{click:function(t){return console.log(t)}}},tooltip:{valueDecimals:0,valuePrefix:"$"},levels:[{level:1,dataLabels:{enabled:!0,color:"#FFF",font:'bold 26px "Open Sans", sans-serif'},borderWidth:3}],data:[]}],title:{text:""},chart:{height:900}},Kt={rangeSelector:{selected:1},title:{text:""},yAxis:[{labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2}],tooltip:{split:!0},chart:{height:700},plotOptions:{candlestick:{color:"#dc3545",upColor:"#28a745"}},series:[{type:"candlestick",name:"",data:[],tooltip:{valueDecimals:2,valuePrefix:"$"}},{type:"column",name:"Volume",data:[],yAxis:1}]},jt={props:["tickers","height"],data:function(){return{options:zt}},watch:{tickers:function(t){this.updateTree(t)}},methods:{updateTree:function(t){this.$refs.highcharts.chart.update({series:[{animationLimit:this.tickers.length,data:this.tickers}],chart:{height:this.height}},!0)}},mounted:function(){this.updateTree(this.tickers)}},Wt={render:function(){var t=this.$createElement;return(this._self._c||t)("highcharts",{ref:"highcharts",attrs:{options:this.options}})},staticRenderFns:[]},qt=r("VU/8")(jt,Wt,!1,null,null,null).exports,Yt={name:"TickerTreemap",data:function(){return{selectedTreemap:0,min:1e9,max:void 0,height:900}},computed:l()({},Object(s.b)({treemapData:"getTreemapData"})),methods:{update:function(t){switch(this.selectedTreemap=t,t){case 0:this.min=1e9,this.max=void 0,this.height=900;break;case 1:this.min=1e8,this.max=1e9,this.height=1200;break;case 2:this.min=1e6,this.max=1e8,this.height=2e3;break;case 3:this.min=void 0,this.max=1e6,this.height=2e3}}},created:function(){this.update(0)},components:{Treemap:qt}},Xt={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row mb-2 mt-5"},[r("div",{staticClass:"col text-center"},[r("div",{staticClass:"btn-group",attrs:{role:"group"}},[r("button",{staticClass:"btn btn-dark",class:{active:0===t.selectedTreemap},attrs:{type:"button"},on:{click:function(e){t.update(0)}}},[t._v("\n          Above the billion\n        ")]),t._v(" "),r("button",{staticClass:"btn btn-dark",class:{active:1===t.selectedTreemap},attrs:{type:"button"},on:{click:function(e){t.update(1)}}},[t._v("\n          100 million to 1 billion\n        ")]),t._v(" "),r("button",{staticClass:"btn btn-dark",class:{active:2===t.selectedTreemap},attrs:{type:"button"},on:{click:function(e){t.update(2)}}},[t._v("\n          1 million to 100 million\n        ")]),t._v(" "),r("button",{staticClass:"btn btn-dark",class:{active:3===t.selectedTreemap},attrs:{type:"button"},on:{click:function(e){t.update(3)}}},[t._v("\n          Under 1 million\n        ")])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col pl-0 pr-0"},[r("treemap",{attrs:{tickers:t.treemapData(t.min,t.max),height:t.height}})],1)])])},staticRenderFns:[]},Jt=r("VU/8")(Yt,Xt,!1,null,null,null).exports,Qt={props:["ticker","ohlcData"],data:function(){return{options:Kt}},watch:{ohlcData:function(t){this.updateCandlestick(t)}},methods:{updateCandlestick:function(t){this.$refs.highstocks.chart.update({series:[{name:this.ticker.symbol,data:t.ohlc},{type:"column",name:"Volume",data:t.volume,yAxis:1}]},!0)}},mounted:function(){this.updateCandlestick(this.ohlcData)}},Zt={render:function(){var t=this.$createElement;return(this._self._c||t)("highstock",{ref:"highstocks",attrs:{options:this.options}})},staticRenderFns:[]},te=r("VU/8")(Qt,Zt,!1,null,null,null).exports,ee={name:"CoinInfo",props:["ticker"],methods:{colorizePercentChange:$t,getImageUrl:Lt},filters:{format:m,percentage:v,uppercase:f}},re={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-dark"},[e("tbody",[e("tr",{staticClass:"pointer"},[e("td",{staticClass:"d-none d-xl-table-cell"},[e("img",{staticClass:"img-fluid",attrs:{src:this.getImageUrl(this.ticker)}})]),this._v(" "),e("td",[e("b",[this._v("\n            "+this._s(this._f("uppercase")(this.ticker.name))+"\n          ")])]),this._v(" "),e("td",[e("b",{staticClass:"text-warning"},[this._v("\n            "+this._s(this.ticker.symbol)+"\n          ")])]),this._v(" "),e("td",{staticClass:"text-center"},[this._m(0),this._v("\n          "+this._s(this._f("format")(this.ticker.price_usd,"$0.[00]"))+"\n        ")]),this._v(" "),e("td",{staticClass:"text-center d-none d-lg-inline"},[this._m(1),this._v(" "),e("span",{class:this.colorizePercentChange(this.ticker.percent_change_1h)},[this._v("\n            "+this._s(this._f("percentage")(this.ticker.percent_change_1h))+"\n          ")])]),this._v(" "),e("td",{staticClass:"text-center"},[this._m(2),this._v(" "),e("span",{class:this.colorizePercentChange(this.ticker.percent_change_24h)},[this._v("\n            "+this._s(this._f("percentage")(this.ticker.percent_change_24h))+"\n          ")])]),this._v(" "),e("td",{staticClass:"text-center"},[this._m(3),this._v(" "),e("span",{class:this.colorizePercentChange(this.ticker.percent_change_7d)},[this._v("\n            "+this._s(this._f("percentage")(this.ticker.percent_change_7d))+"\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("CURRENT")]),this._v(" PRICE: ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("% CHANGE")]),this._v(" 1h: ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("% CHANGE")]),this._v(" 24h: ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("% CHANGE")]),this._v(" 7d: ")])}]};var ae=r("VU/8")(ee,re,!1,function(t){r("pL14")},"data-v-4f68287d",null).exports,se={name:"TickerDetail",computed:l()({},Object(s.b)({tickers:"tickers"}),{ticker:function(){return this.$store.getters.getTickerById(this.$route.params.id)},ohlcAndVolume:function(){var t=this.$store.getters.getTickerById(this.$route.params.id);return t?this.$store.getters.getOhlcAndVolumes(t.symbol):{ohlc:[],volume:[]}}}),created:function(){var t=this.$route.query.interval||et.DAY;this.$store.dispatch("getHistoData",{id:this.$route.params.id,interval:t})},components:{Candlestick:te,CoinInfo:ae}},ne={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid",attrs:{id:"ticker-detail"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col pl-0 pr-0"},[this.ticker?e("coin-info",{attrs:{ticker:this.ticker}}):this._e()],1)]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col pl-0 pr-0"},[this.ohlcAndVolume.ohlc.length?e("div",[e("candlestick",{attrs:{ticker:this.ticker,ohlcData:this.ohlcAndVolume}})],1):this._e()])])])},staticRenderFns:[]},ie=r("VU/8")(se,ne,!1,null,null,null).exports,oe={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron jumbotron-fluid"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-2"},[this._v("Crypto Vue")]),this._v(" "),e("p",{staticClass:"lead"},[this._v("Get all the data you need about your favourite cryptocurrency.")])])])}]};var ce=r("VU/8")({name:"About"},oe,!1,function(t){r("CdHA")},"data-v-336180a4",null).exports,le={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron jumbotron-fluid"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-2"},[this._v("404")]),this._v(" "),e("p",{staticClass:"display-4"},[this._v("Page not found.")]),this._v(" "),e("p",{staticClass:"lead mt-5"},[this._v("The resource you are trying to access does not exist.")])])])}]},ue=r("VU/8")({name:"NotFound"},le,!1,null,null,null).exports;a.a.use(wt.a);var de=new wt.a({routes:[{path:"/",redirect:"/tickers"},{path:"/tickers",name:"Tickers",component:Bt,children:[{path:"",redirect:"coin-list"},{path:"coin-list",component:Nt,meta:{title:"Coin List"}},{path:"maps",component:Jt,meta:{title:"Market Capitalization Maps"}}]},{path:"/ticker/:id",name:"TickerDetail",component:ie,meta:{title:"Ticker Detail"}},{path:"/about",name:"About",component:ce,meta:{title:"About"}},{path:"*",name:"NotFound",component:ue,meta:{title:"Page not found"}}]});de.beforeEach(function(t,e,r){document.title=t.meta.title,r()});var he=de,pe=r("U5Gd"),me=r.n(pe),ve=r("7mh/"),fe=r.n(ve),_e=r("WOHC"),be=r.n(_e),ge=r("QxPg"),ke=r("1P+R");be()(Pt.a),me()(Pt.a),fe()(Pt.a),Pt.a.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#343a40"],[1,"#343a40"]]},style:{Family:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",dataLabelsColor:"#B0B0B3",textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",maskColor:"rgba(255,255,255,0.3)"},Pt.a.setOptions(Pt.a.theme),ge.default.library.add(ke.b,ke.a,ke.c),a.a.config.productionTip=!1,a.a.use(s.a),a.a.use(n.a,{Highcharts:Pt.a}),a.a.use(o.a),new a.a({el:"#app",router:he,store:It,template:"<App/>",components:{App:D}})},VsTr:function(t,e){},ofk1:function(t,e){},pL14:function(t,e){},tb5W:function(t,e){},vz8U:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eb48eff0315035630476.js.map