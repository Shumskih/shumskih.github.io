webpackJsonp([1],{"1QwG":function(e,t){},"46/G":function(e,t){},F5tv:function(e,t){},JVyh:function(e,t,a){e.exports=a.p+"static/img/placeholder.192b16e.png"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r=a("trBP"),s=(a("1QwG"),a("fZjL")),i=a.n(s),o=(a("724k"),a("8wyc")),c={name:"YearFilter",components:{DatePicker:r.default},data:function(){return{year:"empty"}},watch:{year:function(){this.$emit("year",this.year),this.year&&(localStorage.setItem("year",this.year),this.setUrlParameters()),this.year||this.resetFilter()}},created:function(){localStorage.getItem("year")&&(this.year=localStorage.getItem("year"),this.setFilterValue()),this.$emit("year",this.year)},methods:{resetFilter:function(){window.history.pushState(null,"",document.location.href.replace(document.location.search,"")),localStorage.removeItem("year")},setUrlParameters:function(){window.history.pushState(null,"","?season="+this.year)},setFilterValue:function(){if(0!==i()(this.$route.query).length)return!!this.$route.query.season&&(this.year=Object(o.a)(new Date(this.$route.query.season.toString()),"yyyy"),!0)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("date-picker",{staticClass:"mx-2",attrs:{type:"year",placeholder:"Сезон","value-type":"YYYY",format:"YYYY"},model:{value:e.year,callback:function(t){e.year=t},expression:"year"}})],1)},staticRenderFns:[]};var u=a("VU/8")(c,l,!1,function(e){a("46/G")},"data-v-9c554428",null).exports,m={name:"MyHeader",data:function(){return{dateRange:null,search:null,rangeEvent:null}},components:{DatePicker:r.default,YearFilter:u},watch:{search:function(){this.$emit("runSearch",this.search)}},methods:{emitYear:function(e){this.$emit("year",e)}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"p-3 mb-3 border-bottom"},[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex flex-wrap align-items-center justify-content-center"},[a("ul",{staticClass:"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"},[a("li",[a("router-link",{staticClass:"nav-link px-2 link-secondary",attrs:{to:{name:"LeaguesList"}}},[e._v("Список лиг")])],1),e._v(" "),a("li",[a("router-link",{staticClass:"nav-link px-2 link-secondary",attrs:{to:{name:"TeamsList"}}},[e._v("Список команд")])],1)]),e._v(" "),a("div",{staticClass:"d-flex"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Поиск...","aria-label":"Поиск"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),a("div",[a("YearFilter",{on:{year:function(t){return e.emitYear(t)}}})],1)])])])])},staticRenderFns:[]},h={name:"App",components:{MyHeader:a("VU/8")(m,d,!1,null,null,null).exports},data:function(){return{search:"",year:""}},methods:{runSearch:function(e){this.search=e},emitYear:function(e){this.year=e}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("MyHeader",{on:{runSearch:function(t){return e.runSearch(t)},year:function(t){return e.emitYear(t)}}}),e._v(" "),a("div",{staticClass:"container"},[a("router-view",{attrs:{search:e.search,year:e.year}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(h,f,!1,function(e){a("OB1g")},null,null).exports,g=a("mtWM"),v=a.n(g),_=a("/ocq"),y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("img",{attrs:{src:a("x4IX"),alt:"Loading..."}})])}]},b=a("VU/8")({name:"Loader"},y,!1,null,null,null).exports,w={name:"Card",props:{name:String,areaName:String,img:String,url:String}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"mb-5",attrs:{href:e.url}},[n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e.img?n("img",{staticClass:"card-img-top league-logo",attrs:{src:e.img,alt:"..."}}):n("img",{staticClass:"card-img-top league-logo",attrs:{src:a("JVyh"),alt:"..."}}),e._v(" "),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-text"},[e._v(e._s(e.name))]),e._v(" "),n("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v("\n        "+e._s(e.areaName)+"\n      ")])])])])},staticRenderFns:[]};var x=a("VU/8")(w,C,!1,function(e){a("Y4c8")},"data-v-36243216",null).exports,F="d510ed103a7b46b4ac8392d3ea75bb39";function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return v.a.get(function(e,t,a){var n=void 0;n=a?"https://api.football-data.org/v2/teams/"+t.params.id+"/matches":"https://api.football-data.org/v2/competitions/"+t.params.id+"/matches";e&&(n+="?season="+e);return n}(e,t,a),{headers:{"X-Auth-Token":F}}).then(function(e){return e.data})}function L(e,t){return v.a.get(function(e,t){var a="https://api.football-data.org/v2/teams/"+e.params.id+"/matches";t&&null!==t[0]&&null!==t[1]&&(a+="?dateFrom="+t[0]+"&dateTo="+t[1]);return a}(e,t),{headers:{"X-Auth-Token":F}}).then(function(e){return e.data})}var k={name:"TeamsList",components:{Loader:b,Card:x},props:{search:String},data:function(){return{teams:null,loading:!0}},computed:{filteredList:function(){var e=this.search;return this.teams.filter(function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},created:function(){var e=this;this.loading=!0,v.a.get("https://api.football-data.org/v2/teams?plan=TIER_ONE",{headers:{"X-Auth-Token":F}}).then(function(e){return e.data.teams}).then(function(t){e.teams=t,e.loading=!1})}},S={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),e.loading?a("Loader"):e._e(),e._v(" "),e.teams?a("div",{staticClass:"d-flex flex-row justify-content-between flex-wrap"},e._l(e.filteredList,function(e){return a("Card",{key:e.id,attrs:{name:e.name,"area-name":e.area.name,img:e.crestUrl,url:"/calendar/teams/"+e.id}})}),1):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"mb-5"},[t("u",[this._v("Список команд")])])}]};var V=a("VU/8")(k,S,!1,function(e){a("V4Ml")},"data-v-b4d83ee2",null).exports;let E={2001:"https://pbs.twimg.com/media/EkolIV-XUAU-rty.jpg",2017:"https://i.ytimg.com/vi/rBHznc3fbbM/maxresdefault.jpg",2021:"https://www.aravot.am/wp-content/uploads/2020/04/Karantin-1-e1587908045366.jpg",2003:"https://www.fifplay.com/img/public/fifa-17-team-of-the-season-eredivisie.jpg",2002:"https://1.bp.blogspot.com/-H9SOuYdvKI4/XVNDxpvQ6_I/AAAAAAAAAuo/WodE8F0xzUY_jN-0T3iTujYlP_TyqfBeQCPcBGAYYCw/s640/thumb2-bundesliga-4k-logo-silk-texture-german-football-league.jpg",2015:"https://pbs.twimg.com/media/B4CLSXmCcAEQp34.jpg",2019:"https://telegra.ph/file/aac84d6102f866c6196b6.jpg",2014:"https://pbs.twimg.com/media/Eev6iUFVAAM8QaL.jpg",2016:"https://terrikon.com/i/l/1200/eng/cefl.jpg",2013:"https://i.ytimg.com/vi/0Vz5HyLadb8/maxresdefault.jpg",2018:"https://10wallpaper.com/wallpaper/1920x1200/1910/2020_UEFA_European_Football_Cup_2019_Featured_Desktop_1920x1200.jpg",2000:"https://media.metrolatam.com/2019/09/03/capturadepantall-ecf4a20cd4262b5c3db97744e2aa384d-1200x800.jpg"};var N={name:"LeaguesList",components:{Loader:b,Card:x},props:{search:String},data:function(){return{leagues:null,loading:!0}},computed:{filteredList:function(){var e=this.search;return this.leagues.filter(function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},created:function(){var e=this;this.loading=!0,v.a.get("https://api.football-data.org/v2/competitions?plan=TIER_ONE",{headers:{"X-Auth-Token":F}}).then(function(e){return e.data.competitions}).then(function(t){e.leagues=t,e.loading=!1})},methods:{getImage:function(e,t){return null===t?E[e]:t}}},Y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),e.loading?a("Loader"):e._e(),e._v(" "),e.leagues?a("div",{staticClass:"d-flex flex-row justify-content-between flex-wrap"},e._l(e.filteredList,function(t){return a("Card",{key:t.id,attrs:{name:t.name,"area-name":t.areaName,img:e.getImage(t.id,t.emblemUrl),url:"/calendar/leagues/"+t.id}})}),1):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"mb-5"},[t("u",[this._v("Список лиг")])])}]};var D=a("VU/8")(N,Y,!1,function(e){a("pkxu")},"data-v-05fdf719",null).exports,$=a("gRE1"),j=a.n($),A=a("Gu7T"),U=a.n(A),M={name:"RangeFilter",data:function(){return{range:null,lang:{formatLocale:{firstDayOfWeek:1}}}},components:{DatePicker:r.default},watch:{range:function(){this.range[0]||this.range[1]?this.$emit("range",this.range):this.$emit("range","empty"),this.range[0]&&this.range[1]?this.setUrlParameters():this.resetFilter()}},created:function(){this.setFilterValue()||this.$emit("range","empty")},methods:{resetFilter:function(){window.history.pushState(null,"",document.location.href.replace(document.location.search,""))},setUrlParameters:function(){window.history.pushState(null,"","?dateFrom="+this.range[0]+"&dateTo="+this.range[1])},setFilterValue:function(){if(0!==i()(this.$route.query).length&&this.$route.query.dateFrom&&this.$route.query.dateTo){var e=this.$route.query.dateFrom.split("-"),t=this.$route.query.dateTo.split("-");return this.range=[Object(o.a)(new Date(e.toString()),"yyyy-MM-dd"),Object(o.a)(new Date(t.toString()),"yyyy-MM-dd")],!0}return!1}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex justify-content-end align-items-center"},[a("date-picker",{staticClass:"mx-2",attrs:{type:"date",range:"",placeholder:"Диапазон дат",lang:e.lang,"value-type":"YYYY-MM-DD",format:"DD-MM-YYYY"},model:{value:e.range,callback:function(t){e.range=t},expression:"range"}})],1)},staticRenderFns:[]};var O=a("VU/8")(M,R,!1,function(e){a("orAX")},"data-v-42e8cd04",null).exports,I={name:"TeamCard",props:{homeTeamName:String,awayTeamName:String,areaName:String,competitionName:String,matchStatus:String,gameDate:String}},H={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card mb-5",staticStyle:{width:"18rem"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex flex-column px-1 w-100 mb-3"},[a("div",{staticClass:"d-flex justify-content-center align-items-center"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.homeTeamName))])]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"d-flex justify-content-center align-items-center"},[a("h5",{staticClass:"card-title"},[e._v(e._s(e.awayTeamName))])])]),e._v(" "),a("p",[e._v("Лига: "),a("span",{staticClass:"text-muted"},[e._v(e._s(e.competitionName))])]),e._v(" "),e.areaName?a("p",[e._v("Страна: "),a("span",{staticClass:"text-muted"},[e._v(e._s(e.areaName))])]):e._e(),e._v(" "),a("p",[e._v("Дата игры: "),a("span",{staticClass:"text-muted"},[e._v(e._s(e.gameDate))])]),e._v(" "),a("p",[e._v("Статус: "),a("span",{staticClass:"text-success"},[e._v(e._s(e.matchStatus))])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-flex justify-content-center"},[t("h6",{staticClass:"card-title text-muted"},[this._v("vs")])])}]};var P=a("VU/8")(I,H,!1,function(e){a("F5tv")},"data-v-1ed4ec82",null).exports,X={name:"TeamCalendar",components:{Loader:b,RangeFilter:O,TeamCard:P},props:{search:String},data:function(){return{matches:null,teamName:null,loading:!0,noData:!1,forbidden:!1,filterError:!1,notFound:!1}},computed:{filteredList:function(){var e=this.search;return this.matches.filter(function(t){if(t.awayTeam.name&&t.homeTeam.name)return t.awayTeam.name.toLowerCase().indexOf(e.toLowerCase())>-1||t.homeTeam.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},methods:{getDateRange:function(e){var t=this;this.resetVariables(),this.loading=!0,"empty"===e?L(this.$route,null).then(function(e){t.setVariables(e)}).catch(function(e){t.resetVariables(),t.errorHandler(e)}):L(this.$route,e).then(function(e){t.setVariables(e)}).catch(function(e){t.resetVariables(),t.errorHandler(e)})},setVariables:function(e){0===e.count?(this.loading=!1,this.noData=!0):(this.matches=e.matches,this.getTeamName(this.matches),this.loading=!1)},errorHandler:function(e){switch(e.response.status){case 403:this.forbidden=!0;break;case 400:this.filterError=!0;break;case 404:this.notFound=!0;break;default:this.noData=!0}},resetVariables:function(){this.matches=[],this.loading=!1,this.forbidden=!1,this.filterError=!1,this.notFound=!1,this.noData=!1},dateFormatted:function(e){var t=new Date(e);return("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()},getTeamName:function(e){for(var t=[],a=0;a<=e.length-1;a++)t.push(e[a].homeTeam.name),t.push(e[a].awayTeam.name);var n=t.reduce(function(e,t){return void 0===e[t]?e[t]=1:e[t]=e[t]+1,e},{}),r=Math.max.apply(Math,U()(j()(n))),s=[];for(var i in n)n.hasOwnProperty(i)&&n[i]===r&&s.push(i);this.teamName=s[0]}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"mb-5"},[a("u",[e._v(e._s(e.teamName))])]),e._v(" "),a("div",{staticClass:"mb-5"},[a("RangeFilter",{on:{range:function(t){return e.getDateRange(t)}}})],1),e._v(" "),e.loading?a("Loader"):e.notFound?a("div",[e._v("404 - нет данных")]):e.forbidden?a("div",[e._v("Просмотр запрещён")]):e.noData?a("div",[e._v("Нет информации")]):e.filterError?a("div",[e._v("Ошибка фильтрации. Измените параметры фильтра.")]):e.matches?a("div",[a("div",{staticClass:"d-flex flex-row justify-content-between flex-wrap"},e._l(e.filteredList,function(t){return a("TeamCard",{key:t.id,attrs:{homeTeamName:t.homeTeam.name,awayTeamName:t.awayTeam.name,competitionName:e.teamName,matchStatus:t.status,gameDate:e.dateFormatted(t.utcDate)}})}),1)]):e._e()],1)},staticRenderFns:[]};var B=a("VU/8")(X,q,!1,function(e){a("kYa0")},"data-v-4a84048e",null).exports,G={name:"LeagueCalendar",components:{Loader:b,RangeFilter:O,TeamCard:P},props:{search:String,year:String},data:function(){return{matches:null,leagueName:null,loading:!0,noData:!1,forbidden:!1,filterError:!1,notFound:!1}},watch:{year:function(e,t){var a=this;this.resetVariables(),this.loading=!0,"empty"===e?T(null,this.$route).then(function(e){a.leagueName=e.competition.name,a.matches=e.matches,e.matches&&(a.loading=!1)}).catch(function(e){a.resetVariables(),a.errorHandler(e)}):T(e,this.$route).then(function(e){a.leagueName=e.competition.name,a.matches=e.matches,e.matches&&(a.loading=!1)}).catch(function(e){a.resetVariables(),a.errorHandler(e)})}},computed:{filteredList:function(){var e=this.search;return this.matches.filter(function(t){if(t.awayTeam.name&&t.homeTeam.name)return t.awayTeam.name.toLowerCase().indexOf(e.toLowerCase())>-1||t.homeTeam.name.toLowerCase().indexOf(e.toLowerCase())>-1})}},methods:{errorHandler:function(e){switch(e.response.status){case 403:this.forbidden=!0;break;case 400:this.filterError=!0;break;case 404:this.notFound=!0;break;default:this.noData=!0}},resetVariables:function(){this.matches=[],this.loading=!1,this.forbidden=!1,this.filterError=!1,this.notFound=!1,this.noData=!1},dateFormatted:function(e){var t=new Date(e);return("0"+t.getDate()).slice(-2)+"."+("0"+(t.getMonth()+1)).slice(-2)+"."+t.getFullYear()}}},Q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"mb-5"},[a("u",[e._v(e._s(e.leagueName))])]),e._v(" "),e.loading?a("Loader"):e.notFound?a("div",[e._v("404 - нет данных")]):e.forbidden?a("div",[e._v("Просмотр запрещён")]):e.noData?a("div",[e._v("Нет информации")]):e.filterError?a("div",[e._v("Ошибка фильтрации. Измените параметры фильтра.")]):e.matches?a("div",[a("div",{staticClass:"d-flex flex-row justify-content-between flex-wrap"},e._l(e.filteredList,function(t){return a("TeamCard",{key:t.id,attrs:{homeTeamName:t.homeTeam.name,awayTeamName:t.awayTeam.name,competitionName:e.leagueName,matchStatus:t.status,gameDate:e.dateFormatted(t.utcDate)}})}),1)]):e._e()],1)},staticRenderFns:[]};var W=a("VU/8")(G,Q,!1,function(e){a("VFIY")},"data-v-1c0776be",null).exports;n.a.use(_.a);var z=new _.a({mode:"history",linkExactActiveClass:"link-dark",routes:[{path:"/",name:"LeaguesList",component:D},{path:"/calendar/leagues/:id",name:"LeagueCalendar",component:W},{path:"/teams",name:"TeamsList",component:V},{path:"/calendar/teams/:id",name:"TeamCalendar",component:B}]});a("sVpc"),n.a.prototype.axios=v.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:z,components:{App:p},template:"<App/>"})},OB1g:function(e,t){},V4Ml:function(e,t){},VFIY:function(e,t){},Y4c8:function(e,t){},kYa0:function(e,t){},orAX:function(e,t){},pkxu:function(e,t){},sVpc:function(e,t){},x4IX:function(e,t,a){e.exports=a.p+"static/img/loader.0f34d3d.gif"}},["NHnr"]);
//# sourceMappingURL=app.d26c84fb4787665399fb.js.map