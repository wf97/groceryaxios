(function(e){function t(t){for(var s,o,i=t[0],c=t[1],d=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},2350:function(e,t,a){"use strict";var s=a("6645"),n=a.n(s);n.a},2939:function(e,t,a){"use strict";var s=a("51d9"),n=a.n(s);n.a},"2e05":function(e,t,a){"use strict";var s=a("7756"),n=a.n(s);n.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},5129:function(e,t,a){},"51d9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("app-header",{attrs:{title:e.msg}}),a("router-view"),a("app-footer")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"headerStyle"},[a("nav",[a("h1",[e._v(e._s(e.title))]),a("ul",[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[e._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/add",exact:""}},[e._v("Add Item")])],1),a("li",[a("router-link",{attrs:{to:"/list",exact:""}},[e._v("List")])],1),a("li",[a("router-link",{attrs:{to:"/axios",exact:""}},[e._v("Axios")])],1)])])])},i=[],c={data:function(){return{msg:"Grocery List"}},props:{title:{type:String}}},d=c,u=(a("9366"),a("2877")),l=Object(u["a"])(d,o,i,!1,null,"0aa4614f",null),f=l.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"headerStyle"},[a("footer",[a("p",{domProps:{innerHTML:e._s(e.copyRtSymbol)}})])])},m=[],h={data:function(){return{copyRtSymbol:"&copy;BT3103"}}},p=h,j=(a("e18b"),Object(u["a"])(p,b,m,!1,null,"4df4aaed",null)),g=j.exports,v={name:"App",data:function(){return{itemsListInput:[{name:"Eggs",image:"./assets/eggs.jpg",show:!1},{name:"Bread",image:"/assets/bread.jfif",show:!1},{name:"Jam",image:"/assets/jam.jfif",show:!1},{name:"CornFlakes",image:"/assets/cornflakes.jfif",show:!1},{name:"Milk",image:"/assets/milk.jfif",show:!1},{name:"Juice",image:"/assets/juice.jfif",show:!1}],itemsListSecond:[{name:"Oranges",image:"./assets/orange.jpg",show:!1},{name:"Peanut Butter",image:"/assets/peanutbutter.jpeg",show:!1},{name:"Strawberries",image:"/assets/strawberries.jpg",show:!1}],msg:"Grocery"}},components:{"app-header":f,"app-footer":g}},y=v,k=(a("b010"),Object(u["a"])(y,n,r,!1,null,"65d53ff4",null)),_=k.exports,x=a("28dd"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",e._l(e.itemsList,(function(t,s){return a("li",{key:t.id},[a("h2",{on:{click:function(e){t.show=!t.show}}},[e._v(e._s(t.name))]),a("img",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],attrs:{src:t.image}}),a("buttonComponent"),a("button",{attrs:{name:"delete",id:t.id},on:{click:function(a){return e.deleteItem(s,t)}}},[e._v("Delete")])],1)})),0)])},z=[],I=(a("4160"),a("a434"),a("159b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{on:{click:function(t){return e.decrement()}}},[e._v("-")]),a("label",[e._v(" "+e._s(e.counter)+" ")]),a("button",{on:{click:function(t){return e.increment()}}},[e._v("+")])])}),S=[],C={data:function(){return{counter:0}},methods:{decrement:function(){return this.counter>0?this.counter--:this.counter},increment:function(){if(this.counter<10)return this.counter++;alert("You cannot buy more than 10 items")}}},O=C,A=(a("f556"),Object(u["a"])(O,I,S,!1,null,"31bff10a",null)),E=A.exports,P=a("8aa5"),D=a.n(P),L={apiKey:"AIzaSyCKU56Qo9AAp_7XUsZNRzJWsGE2JEAqTYU",authDomain:"countries-57f38.firebaseapp.com",databaseURL:"https://countries-57f38.firebaseio.com",projectId:"countries-57f38",storageBucket:"countries-57f38.appspot.com",messagingSenderId:"881357568189",appId:"1:881357568189:web:c3e3e5671745412fb39fd4",measurementId:"G-PD21TVRFMZ"};D.a.initializeApp(L);var M=D.a.firestore(),$=M,T={data:function(){return{itemsList:[]}},components:{buttonComponent:E},methods:{fetchItems:function(){var e=this,t={};$.collection("items").get().then((function(a){a.forEach((function(a){console.log(a.id+"==>"+a.data()),t=a.data(),t.show=!1,t.id=a.id,e.itemsList.push(t)}))}))},deleteItem:function(e,t){$.collection("items").doc(t.id).delete(),this.itemsList.splice(e,1),console.log("Item Deleted Successfully")}},created:function(){this.fetchItems()}},B=T,J=(a("2e05"),Object(u["a"])(B,w,z,!1,null,"dfea0b26",null)),N=J.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h1",[e._v("Add Item Page")]),a("form",{attrs:{id:"fm1"}},[a("label",[e._v("Item Name")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.item.name,expression:"item.name",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.item.name},on:{change:function(t){return e.$set(e.item,"name",t.target.value)}}}),a("label",[e._v("Item Category")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.item.category,expression:"item.category",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:e.item.category},on:{change:function(t){return e.$set(e.item,"category",t.target.value)}}}),a("button",{on:{click:function(t){return t.preventDefault(),e.addItem(t)}}},[e._v("Add Item")])])])},F=[],G=(a("b0c0"),{data:function(){return{msg:"Add Item",item:{name:"",category:"",addedBy:"Thangamani"}}},methods:{addItem:function(){$.collection("items").doc().set(this.item),this.item.name="",this.item.category="",alert("I am in the DB .... :-) Item saved successfully")}}}),R=G,U=(a("2350"),Object(u["a"])(R,q,F,!1,null,"2736b5eb",null)),W=U.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main"}},[a("div",{attrs:{id:"chart"}},[a("charts")],1),a("div",{attrs:{id:"chart"}},[a("doughnut")],1),a("div",{attrs:{id:"chart"}},[a("linechart")],1)])},K=[],Y=a("1fca"),Z={extends:Y["a"],data:function(){return{chartdata:{labels:["January","February","March","April"],datasets:[{label:"Sales1",data:[400,300,150,100],backgroundColor:"#AA6",borderWidth:1,borderColor:"#000"}]},options:{title:{display:!0,text:"Bar Chart BT3103",fontColor:"Black",fontSize:15},legend:{position:"top"},layout:{padding:{left:5,right:0,top:0,bottom:5}},scales:{yAxes:[{ticks:{min:0}}]}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},Q={extends:Y["b"],data:function(){return{chartdata:{labels:["January","February","March","April"],datasets:[{label:"Sales",data:[400,300,150,100],backgroundColor:["aqua","lightgreen","red","orange"],borderWidth:.5,borderColor:"#000"}]},options:{scales:{yAxes:[{ticks:{min:0}}]},layout:{padding:{left:5,right:0,top:0,bottom:10}}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},V={extends:Y["c"],data:function(){return{chartdata:{labels:["January","February","March","April"],datasets:[{label:"Sales",data:[400,300,150,100],backgroundColor:["aqua","lightgreen","red","orange"],borderWidth:.5,borderColor:"#000",fill:!1},{label:"Sales2",data:[40,30,10,15]}]},options:{scales:{yAxes:[{ticks:{min:0}}]}}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},X={components:{charts:Z,doughnut:Q,linechart:V}},ee=X,te=(a("2939"),Object(u["a"])(ee,H,K,!1,null,"13940a3e",null)),ae=te.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main"}},[a("div",{attrs:{id:"chart"}},[a("axiosExample")],1),a("div",{attrs:{id:"chart"}},[a("PSIIndex")],1)])},ne=[],re=a("bc3a"),oe=a.n(re),ie={extends:Y["a"],data:function(){return{results:[],chartdata:{labels:[],datasets:[{label:"Average ridership",data:[],borderWidth:.5,borderColor:"magenta",backgroundColor:"orange",fill:!1}]},options:{}}},methods:{fetchData:function(){var e=this;oe.a.get("https://data.gov.sg/api/action/datastore_search?resource_id=552b8662-3cbc-48c0-9fbb-abdc07fb377a").then((function(t){for(var a in e.results=t.data.result["records"],e.results)2016==e.results[a]["year"]&&(e.chartdata.datasets[0].data.push(e.results[a]["average_ridership"]),e.chartdata.labels.push(e.results[a]["type_of_public_transport"]+""));e.renderChart(e.chartdata,e.options)}))}},mounted:function(){this.fetchData()}},ce={extends:Y["c"],data:function(){return{results:[],chartdata:{labels:[],datasets:[{label:"PSI Readings-Singapore",data:[],borderWidth:.5,borderColor:"orange",backgroundColor:"orange",fill:!1}]},options:{scales:{yAxes:[{ticks:{min:0}}]}}}},methods:{fetchData:function(){var e=this;oe.a.get("https://api.data.gov.sg/v1/environment/psi").then((function(t){for(var a in e.results=t.data.items[0].readings.psi_twenty_four_hourly,e.results)e.chartdata.datasets[0].data.push(e.results[a]),e.chartdata.labels.push(a+"");e.renderChart(e.chartdata,e.options)}))}},mounted:function(){this.fetchData()}},de={components:{axiosExample:ie,PSIIndex:ce}},ue=de,le=(a("6e40"),Object(u["a"])(ue,se,ne,!1,null,"1ffe49a8",null)),fe=le.exports,be=[{path:"/",component:ae},{path:"/add",component:W},{path:"/list",component:N},{path:"/axios",component:fe}],me=a("8c4f");s["a"].use(me["a"]),s["a"].use(x["a"]),s["a"].config.productionTip=!1;var he=new me["a"]({routes:be,mode:"history"});new s["a"]({render:function(e){return e(_)},router:he}).$mount("#app")},6645:function(e,t,a){},"6e40":function(e,t,a){"use strict";var s=a("5129"),n=a.n(s);n.a},7756:function(e,t,a){},"8a79":function(e,t,a){},9366:function(e,t,a){"use strict";var s=a("e299"),n=a.n(s);n.a},"9a8a":function(e,t,a){},b010:function(e,t,a){"use strict";var s=a("9a8a"),n=a.n(s);n.a},b23e:function(e,t,a){},e18b:function(e,t,a){"use strict";var s=a("8a79"),n=a.n(s);n.a},e299:function(e,t,a){},f556:function(e,t,a){"use strict";var s=a("b23e"),n=a.n(s);n.a}});
//# sourceMappingURL=app.9949863f.js.map