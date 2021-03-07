(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(19),n=a.n(r),s=a(5),o=a(7),i=a(13),l=a(29),d=(a(38),a(4)),j=(a(39),a(0)),u=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("ul",{className:"header__list",children:[Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/character",exact:!0,className:"header__link",activeClassName:"header__link--active",children:"All Characters"})}),Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/location",exact:!0,className:"header__link",activeClassName:"header__link--active",children:"All Locations"})}),Object(j.jsx)("li",{className:"header__item",children:Object(j.jsx)(s.c,{to:"/episode",exact:!0,className:"header__link",activeClassName:"header__link--active",children:"All Episodes"})})]})})},h=(a(42),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("a",{href:"https://github.com/FaychakA/New-app",className:"footer__link",children:"github"}),Object(j.jsx)("div",{className:"footer__text",children:"\xa92021"})]})}),p=a(1),O="START_LOAD_CHARACTERS",b="LOADED_CHARACTERS",_="ERROR_CHARACTERS",m="START_LOAD_CHARACTERS_NEXT_PAGE",f="LOADED_CHARACTERS_NEXT_PAGE",x="ERROR_CHARACTERS_NEXT_PAGE",g="START_LOAD_CHARACTERS_BY_SEARCH_PARAMS",N="LOADED_CHARACTERS_BY_SEARCH_PARAMS",y="ERROR_CHARACTERS_BY_SEARCH_PARAMS",v=function(){return{type:O}},E=function(e){return{type:b,payload:Object(p.a)({},e)}},A=function(e){return{type:_,payload:{error:e}}},S=function(){return{type:m}},R=function(e){return{type:f,payload:Object(p.a)({},e)}},L=function(e){return{type:x,payload:{error:e}}},P=function(){return{type:g}},C=function(e){return{type:N,payload:Object(p.a)({},e)}},T=function(e){return{type:y,payload:{error:e}}},D=(a(43),function(e){var t=e.character;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:t.image,className:"card__img",alt:"photo"}),Object(j.jsxs)("div",{className:"card__wrapper",children:["Name: \xa0",Object(j.jsx)(s.b,{to:"/character/".concat(t.id),className:"card__link",children:t.name}),Object(j.jsxs)("div",{className:"card__item",children:["Gender: \xa0 ",t.gender]}),Object(j.jsxs)("div",{className:"card__item",children:["Species: \xa0 ",t.species]}),Object(j.jsxs)("div",{className:"card__item",children:["Status: \xa0 ",t.status]}),Object(j.jsxs)("div",{className:"card__item",children:["Type: \xa0 ",t.type]})]})]})}),k=a(15),w=a(12),B=a(16),I=function(e){var t=e.getCharacterBySearchParams,a=Object(c.useState)({}),r=Object(B.a)(a,2),n=r[0],s=r[1],o=function(e,t){if("Select gender"==t||"Select status"==t)return delete n[e],void s(Object(p.a)({},n));t&&s(Object(p.a)(Object(p.a)({},n),{},Object(w.a)({},e,t)))};return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"characters__form",children:[Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by name:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("name",e.target.value)},placeholder:"Please enter a name",className:"characters__input",maxLength:"30"})]}),Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by species:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("species",e.target.value)},placeholder:"Please enter a species",className:"characters__input",maxLength:"30"})]}),Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by type:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("type",e.target.value)},placeholder:"Please enter a type",className:"characters__input",maxLength:"30"})]}),Object(j.jsxs)("select",{onBlur:function(e){return o("status",e.target.value)},name:"status select",className:"characters__select",children:[Object(j.jsx)("option",{children:"Select status"}),Object(j.jsx)("option",{children:"alive"}),Object(j.jsx)("option",{children:"dead"}),Object(j.jsx)("option",{children:"unknown"})]}),Object(j.jsxs)("select",{onBlur:function(e){return o("gender",e.target.value)},name:"gender select",className:"characters__select",children:[Object(j.jsx)("option",{children:"Select gender"}),Object(j.jsx)("option",{children:"female"}),Object(j.jsx)("option",{children:"male"}),Object(j.jsx)("option",{children:"genderless"}),Object(j.jsx)("option",{children:"unknown"})]}),Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e="";for(var a in n)e=e+a+"="+n[a]+"&";e=e.slice(0,-1),t(e)}()},className:"characters__button",children:"Search"})]})})},H=(a(44),Object(o.b)((function(e){return{loading:e.characters.loading,loaded:e.characters.loaded,info:e.characters.info,searched:e.characters.serched,charactersList:e.characters.charactersList,error:e.characters.error}}),(function(e){return{getCharacters:function(){e((function(e){e(v()),fetch("https://rickandmortyapi.com/api/character").then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(t){e(E(t))})).catch((function(t){e(A(t.message))}))}))},getNextCharactersPage:function(t){e(function(e){return function(t){t(S()),fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(R(e))})).catch((function(e){t(L(e.message))}))}}(t))},getCharacterBySearchParams:function(t){e(function(e){return function(t){t(P()),fetch("https://rickandmortyapi.com/api/character/?".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(C(e))})).catch((function(e){t(T(e.message))}))}}(t))}}}))((function(e){var t=e.getCharacters,a=e.getNextCharactersPage,r=e.getCharacterBySearchParams,n=(e.loading,e.loaded),s=e.searched,o=e.charactersList,i=e.info;e.error;Object(c.useEffect)((function(){n&&s||t()}),[]);return o?Object(j.jsxs)("div",{className:"characters",children:[Object(j.jsx)(I,{getCharacterBySearchParams:r}),Object(j.jsx)("ul",{className:"characters__list",children:Object(j.jsx)(k.a,{dataLength:o.length,next:function(){a(i.next)},hasMore:!!i.next,className:"characters__scroll",children:o.map((function(e,t){return Object(j.jsx)("li",{className:"characters__item",children:Object(j.jsx)(D,{character:e})},t)}))})})]}):null}))),M="START_LOAD_LOCATIONS",G="LOADED_LOCATIONS",X="ERROR_LOCATIONS",Y="START_LOAD_LOCATIONS_NEXT_PAGE",J="LOADED_LOCATIONS_NEXT_PAGE",F="ERROR_LOCATIONS_NEXT_PAGE",q="START_LOAD_LOCATIONS_BY_SEARCH_PARAMS",z="LOADED_LOCATIONS_BY_SEARCH_PARAMS",K="ERROR_LOCATIONS_BY_SEARCH_PARAMS",Q=function(){return{type:M}},U=function(e){return{type:G,payload:Object(p.a)({},e)}},V=function(e){return{type:X,payload:{error:e}}},W=function(){return{type:Y}},Z=function(e){return{type:J,payload:Object(p.a)({},e)}},$=function(e){return{type:F,payload:{error:e}}},ee=function(){return{type:q}},te=function(e){return{type:z,payload:Object(p.a)({},e)}},ae=function(e){return{type:K,payload:{error:e}}},ce=(a(45),function(e){var t=e.location;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:t.image,className:"card__img",alt:"photo"}),Object(j.jsxs)("div",{className:"card__wrapper",children:["Name: \xa0",Object(j.jsx)(s.b,{to:"/location/".concat(t.id),className:"card__link",children:t.name}),Object(j.jsxs)("div",{className:"card__item",children:["Type: \xa0 ",t.type]}),Object(j.jsxs)("div",{className:"card__item",children:["Dimension: \xa0 ",t.dimension]})]})]})}),re=function(e){var t=e.getLocationsBySearchParams,a=Object(c.useState)({}),r=Object(B.a)(a,2),n=r[0],s=r[1],o=function(e,t){t&&s(Object(p.a)(Object(p.a)({},n),{},Object(w.a)({},e,t)))};return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"characters__form",children:[Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by name:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("name",e.target.value)},placeholder:"Please enter a name",className:"characters__input",maxLength:"30"})]}),Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by species:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("dimension",e.target.value)},placeholder:"Please enter a dimension",className:"characters__input",maxLength:"30"})]}),Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by type:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("type",e.target.value)},placeholder:"Please enter a type",className:"characters__input",maxLength:"30"})]}),Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e="";for(var a in n)e=e+a+"="+n[a]+"&";e=e.slice(0,-1),t(e)}()},className:"characters__button",children:"Search"})]})})},ne=(a(46),Object(o.b)((function(e){return{loading:e.locations.loading,loaded:e.locations.loaded,info:e.locations.info,earched:e.locations.serched,locationsList:e.locations.locationsList,error:e.locations.error}}),(function(e){return{getLocations:function(){e((function(e){e(Q()),fetch("https://rickandmortyapi.com/api/location").then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(t){e(U(t))})).catch((function(t){e(V(t.message))}))}))},getNextLocationsPage:function(t){e(function(e){return function(t){t(W()),fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(Z(e))})).catch((function(e){t($(e.message))}))}}(t))},getLocationsBySearchParams:function(t){e(function(e){return function(t){t(ee()),fetch("https://rickandmortyapi.com/api/location/?".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(te(e))})).catch((function(e){t(ae(e.message))}))}}(t))}}}))((function(e){var t=e.getLocations,a=e.getNextLocationsPage,r=e.getLocationsBySearchParams,n=(e.loading,e.loaded),s=e.info,o=e.searched,i=e.locationsList;e.error;Object(c.useEffect)((function(){n&&o||t()}),[]);return i?Object(j.jsxs)("div",{className:"locations",children:[Object(j.jsx)(re,{getLocationsBySearchParams:r}),Object(j.jsx)("ul",{className:"locations__list",children:Object(j.jsx)(k.a,{dataLength:i.length,next:function(){a(s.next)},hasMore:!!s.next,className:"locations__scroll",children:i.map((function(e){return Object(j.jsx)("li",{className:"locations__item",children:Object(j.jsx)(ce,{location:e})},e.id)}))})})]}):null}))),se="START_LOAD_EPISODES",oe="LOADED_EPISODES",ie="ERROR_EPISODES",le="START_LOAD_EPISODES_NEXT_PAGE",de="LOADED_EPISODES_NEXT_PAGE",je="ERROR_EPISODES_NEXT_PAGE",ue="START_LOAD_EPISODES_BY_SEARCH_PARAMS",he="LOADED_EPISODES_BY_SEARCH_PARAMS",pe="ERROR_EPISODES_BY_SEARCH_PARAMS",Oe=function(){return{type:se}},be=function(e){return{type:oe,payload:Object(p.a)({},e)}},_e=function(e){return{type:ie,payload:{error:e}}},me=function(){return{type:le}},fe=function(e){return{type:de,payload:Object(p.a)({},e)}},xe=function(e){return{type:je,payload:{error:e}}},ge=function(){return{type:ue}},Ne=function(e){return{type:he,payload:Object(p.a)({},e)}},ye=function(e){return{type:pe,payload:{error:e}}},ve=(a(47),function(e){var t=e.ep;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:t.image,className:"card__img",alt:"photo"}),Object(j.jsxs)("div",{className:"card__wrapper",children:[Object(j.jsxs)("div",{className:"card__item",children:["Name: \xa0 ",t.name]}),"Episode: \xa0",Object(j.jsx)(s.b,{to:"/episode/".concat(t.id),className:"card__link",children:t.episode})]})]})}),Ee=function(e){var t=e.getEpisodesBySearchParams,a=Object(c.useState)({}),r=Object(B.a)(a,2),n=r[0],s=r[1],o=function(e,t){t&&s(Object(p.a)(Object(p.a)({},n),{},Object(w.a)({},e,t)))};return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"characters__form",children:[Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by name:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("name",e.target.value)},placeholder:"Please enter a name",className:"characters__input",maxLength:"30"})]}),Object(j.jsxs)("label",{className:"characters__label",children:[Object(j.jsx)("div",{className:"characters__text",children:"Search by species:"}),Object(j.jsx)("input",{type:"text",onBlur:function(e){return o("episode",e.target.value)},placeholder:"Please enter a episode code",className:"characters__input",maxLength:"30"})]}),Object(j.jsx)("button",{type:"button",onClick:function(){return function(){var e="";for(var a in n)e=e+a+"="+n[a]+"&";e=e.slice(0,-1),t(e)}()},className:"characters__button",children:"Search"})]})})},Ae=(a(48),Object(o.b)((function(e){return{loading:e.episodes.loading,loaded:e.episodes.loaded,info:e.episodes.info,searched:e.episodes.serched,episodesList:e.episodes.episodesList,error:e.episodes.error}}),(function(e){return{getEpisodes:function(){e((function(e){e(Oe()),fetch("https://rickandmortyapi.com/api/episode").then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(t){e(be(t))})).catch((function(t){e(_e(t.message))}))}))},getNextEpisodesPage:function(t){e(function(e){return function(t){t(me()),fetch(e).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(fe(e))})).catch((function(e){t(xe(e.message))}))}}(t))},getEpisodesBySearchParams:function(t){e(function(e){return function(t){t(ge()),fetch("https://rickandmortyapi.com/api/episode/?".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(Ne(e))})).catch((function(e){t(ye(e.message))}))}}(t))}}}))((function(e){var t=e.getEpisodes,a=e.getNextEpisodesPage,r=e.getEpisodesBySearchParams,n=(e.loading,e.loaded),s=e.info,o=e.searched,i=e.episodesList;e.error;Object(c.useEffect)((function(){n&&o||t()}),[]);return i?Object(j.jsxs)("div",{className:"episodes",children:[Object(j.jsx)(Ee,{getEpisodesBySearchParams:r}),Object(j.jsx)("ul",{className:"episodes__list",children:Object(j.jsx)(k.a,{dataLength:i.length,next:function(){a(s.next)},hasMore:!!s.next,className:"episodes__scroll",children:i.map((function(e){return Object(j.jsx)("li",{className:"episodes__item",children:Object(j.jsx)(ve,{ep:e})},e.id)}))})})]}):null}))),Se="START_LOAD_CHARACTER",Re="LOADED_CHARACTER",Le="ERROR_CHARACTER",Pe=function(){return{type:Se}},Ce=function(e){return{type:Re,payload:Object(p.a)({},e)}},Te=function(e){return{type:Le,payload:{error:e}}},De=(a(49),Object(o.b)((function(e){return{loading:e.character.loading,characterParams:e.character.characterParams,error:e.character.error}}),(function(e){return{getCharacter:function(t){e(function(e){return function(t){t(Pe()),fetch("https://rickandmortyapi.com/api/character/".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(Ce(e))})).catch((function(e){t(Te(e.message))}))}}(t))}}}))((function(e){var t=e.match,a=e.getCharacter,r=e.loading,n=e.characterParams;e.error;return Object(c.useEffect)((function(){r||a(t.params.characterId)}),[]),r||!n?null:Object(j.jsx)("div",{className:"character",children:Object(j.jsxs)("div",{className:"character__wrapper",children:[Object(j.jsx)("img",{src:n.image,className:"character__img",alt:"photo"}),Object(j.jsxs)("div",{className:"character__params",children:[Object(j.jsxs)("div",{className:"character__params--text",children:["Name: \xa0 ",n.name]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Gender: \xa0 ",n.gender]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Species: \xa0 ",n.species]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Status: \xa0 ",n.status]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Type: \xa0 ",n.type]}),Object(j.jsxs)("div",{className:"character__params--text",children:["Origin: \xa0",Object(j.jsx)(s.b,{to:"/location/".concat(n.origin.url.split("/").reverse()[0]),className:"character__link",children:n.origin.name})]}),Object(j.jsxs)("div",{className:"character__episode",children:[Object(j.jsx)("div",{children:"Episodes:"}),Object(j.jsxs)("ul",{className:"character__episode--list",children:["\xa0",n&&n.episode&&n.episode.map((function(e,t){return Object(j.jsx)("li",{className:"character__episode--item",children:Object(j.jsx)(s.b,{to:"/episode/".concat(e.split("/").reverse()[0]),className:"character__link",children:e.split("/").reverse()[0]})},t)}))]})]}),Object(j.jsxs)("div",{className:"character__location",children:["Location: \xa0",Object(j.jsx)(s.b,{to:"/location/".concat(n.location.url.split("/").reverse()[0]),className:"character__link",children:n.location.url.split("/").reverse()[0]})]})]})]})})}))),ke="START_LOAD_LOCATION",we="LOADED_LOCATION",Be="ERROR_LOCATION",Ie=function(){return{type:ke}},He=function(e){return{type:we,payload:Object(p.a)({},e)}},Me=function(e){return{type:Be,payload:{error:e}}},Ge=(a(50),Object(o.b)((function(e){return{loading:e.location.loading,locationParams:e.location.locationParams,error:e.location.error}}),(function(e){return{getLocation:function(t){e(function(e){return function(t){t(Ie()),fetch("https://rickandmortyapi.com/api/location/".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(He(e))})).catch((function(e){t(Me(e.message))}))}}(t))}}}))((function(e){var t=e.match,a=e.getLocation,r=e.loading,n=e.locationParams;e.error;return Object(c.useEffect)((function(){r||a(t.params.locationId)}),[]),r||!n?null:Object(j.jsx)("div",{className:"location",children:Object(j.jsxs)("div",{className:"location__wrapper",children:[Object(j.jsx)("img",{src:n.image,className:"location__img",alt:"photo"}),Object(j.jsxs)("div",{className:"location__params",children:[Object(j.jsxs)("div",{className:"location__params--text",children:["Name: \xa0 ",n.name]}),Object(j.jsxs)("div",{className:"location__params--text",children:["Type: \xa0 ",n.type]}),Object(j.jsxs)("div",{className:"location__params--text",children:["Dimension: \xa0 ",n.dimension]}),Object(j.jsxs)("div",{className:"location__characters",children:[Object(j.jsx)("div",{children:"Residents:"}),Object(j.jsxs)("ul",{className:"location__characters--list",children:["\xa0",n&&n.residents&&n.residents.map((function(e,t){return Object(j.jsx)("li",{className:"location__characters--item",children:Object(j.jsx)(s.b,{to:"/character/".concat(e.split("/").reverse()[0]),className:"location__link",children:e.split("/").reverse()[0]})},t)}))]})]})]})]})})}))),Xe="START_LOAD_EPISODE",Ye="LOADED_EPISODE",Je="ERROR_EPISODE",Fe=function(){return{type:Xe}},qe=function(e){return{type:Ye,payload:Object(p.a)({},e)}},ze=function(e){return{type:Je,payload:{error:e}}},Ke=(a(51),Object(o.b)((function(e){return{loading:e.episode.loading,episodeParams:e.episode.episodeParams,error:e.episode.error}}),(function(e){return{getEpisode:function(t){e(function(e){return function(t){t(Fe()),fetch("https://rickandmortyapi.com/api/episode/".concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error")})).then((function(e){t(qe(e))})).catch((function(e){t(ze(e.message))}))}}(t))}}}))((function(e){var t=e.match,a=e.getEpisode,r=e.loading,n=e.episodeParams;e.error;return Object(c.useEffect)((function(){r||a(t.params.episodeId)}),[]),r||!n?null:Object(j.jsx)("div",{className:"episode",children:Object(j.jsxs)("div",{className:"episode__wrapper",children:[Object(j.jsx)("img",{src:n.image,className:"episode__img",alt:"photo"}),Object(j.jsxs)("div",{className:"episode__params",children:[Object(j.jsxs)("div",{className:"episode__params--text",children:["Name: \xa0 ",n.name]}),Object(j.jsxs)("div",{className:"episode__params--text",children:["Episode: \xa0 ",n.episode]}),Object(j.jsxs)("div",{className:"episode__characters",children:[Object(j.jsx)("div",{children:"Characters:"}),Object(j.jsxs)("ul",{className:"episode__characters--list",children:["\xa0",n&&n.characters&&n.characters.map((function(e,t){return Object(j.jsx)("li",{className:"episode__characters--item",children:Object(j.jsx)(s.b,{to:"/character/".concat(e.split("/").reverse()[0]),className:"episode__link",children:e.split("/").reverse()[0]})},t)}))]})]})]})]})})})));a(52);var Qe=function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("div",{className:"app__header",children:Object(j.jsx)(u,{})}),Object(j.jsx)("main",{className:"app__main",children:Object(j.jsxs)(d.d,{children:[Object(j.jsx)(d.b,{path:"/",exact:!0,children:Object(j.jsx)(d.a,{to:"/character"})}),Object(j.jsx)(d.b,{path:"/character",exact:!0,component:H}),Object(j.jsx)(d.b,{path:"/location",exact:!0,component:ne}),Object(j.jsx)(d.b,{path:"/episode",exact:!0,component:Ae}),Object(j.jsx)(d.b,{path:"/character/:characterId",exact:!0,component:De}),Object(j.jsx)(d.b,{path:"/location/:locationId",exact:!0,component:Ge}),Object(j.jsx)(d.b,{path:"/episode/:episodeId",exact:!0,component:Ke})]})}),Object(j.jsx)("div",{className:"app__footer",children:Object(j.jsx)(h,{})})]})},Ue=a(6),Ve={loading:!1,loaded:!1,searched:!1,info:{},charactersList:[],error:null};var We={loading:!1,characterParams:null,error:null};var Ze={loading:!1,loaded:!1,searched:!1,info:{},locationsList:[],error:null};var $e={loading:!1,locationParams:null,error:null};var et={loading:!1,loaded:!1,searched:!1,info:{},episodesList:[],error:null};var tt={loading:!1,episodeParams:null,error:null};var at=Object(i.c)({characters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:case m:case g:return Object(p.a)(Object(p.a)({},e),{},{loading:!0,loaded:!1});case b:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,searched:!1,info:Object(p.a)({},t.payload.info),charactersList:Object(Ue.a)(t.payload.results)});case f:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,info:Object(p.a)({},t.payload.info),charactersList:[].concat(Object(Ue.a)(e.charactersList),Object(Ue.a)(t.payload.results))});case N:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,searched:!0,info:Object(p.a)({},t.payload.info),charactersList:Object(Ue.a)(t.payload.results)});case _:case x:case y:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},character:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case Re:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,characterParams:Object(p.a)({},t.payload)});case Le:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},locations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:case Y:case q:return Object(p.a)(Object(p.a)({},e),{},{loading:!0,loaded:!1});case G:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,searched:!1,info:Object(p.a)({},t.payload.info),locationsList:Object(Ue.a)(t.payload.results)});case J:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,info:Object(p.a)({},t.payload.info),locationsList:[].concat(Object(Ue.a)(e.locationsList),Object(Ue.a)(t.payload.results))});case z:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,searched:!0,info:Object(p.a)({},t.payload.info),locationsList:Object(Ue.a)(t.payload.results)});case X:case F:case K:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ke:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case we:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,locationParams:Object(p.a)({},t.payload)});case Be:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},episodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:case le:case ue:return Object(p.a)(Object(p.a)({},e),{},{loading:!0,loaded:!1});case oe:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,searched:!1,info:Object(p.a)({},t.payload.info),episodesList:Object(Ue.a)(t.payload.results)});case de:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,info:Object(p.a)({},t.payload.info),episodesList:[].concat(Object(Ue.a)(e.episodesList),Object(Ue.a)(t.payload.results))});case he:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,loaded:!0,searched:!0,info:Object(p.a)({},t.payload.info),episodesList:Object(Ue.a)(t.payload.results)});case ie:case je:case pe:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}},episode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case Ye:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,episodeParams:Object(p.a)({},t.payload)});case Je:return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload.error});default:return e}}}),ct=Object(i.d)(at,Object(i.a)(l.a));n.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(o.a,{store:ct,children:Object(j.jsx)(Qe,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.0cd7be8d.chunk.js.map