(this.webpackJsonpimdb=this.webpackJsonpimdb||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){},61:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t(1),c=t.n(r),a=t(29),o=t.n(a),s=(t(38),t(8)),u=(t(39),t(2)),d=t(3);function l(){var e=Object(u.a)(["\n    width: 100%;\n    height: 7vh;\n    background-color: #000000;\n    position: sticky;\n    bottom: 0px;\n    \n   \n    \n"]);return l=function(){return e},e}var p=d.a.div(l()),b=function(){return Object(i.jsx)(p,{children:Object(i.jsx)("p",{children:"Footer"})})};function j(){var e=Object(u.a)(["\n    width: 100vw;\n    height: 7vh;\n    background-color: #000000;\n    display: flex;\n    flex-direction: row;\n    justify-content : space-between;\n    position: sticky;\n    top : 0px;\n    z-index:1;\n"]);return j=function(){return e},e}var x=d.a.div(j());function h(){var e=Object(u.a)(["\n  color: #000000;\n"]);return h=function(){return e},e}function f(){var e=Object(u.a)(["\n  color: red;\n  max-width: 30vw;\n  margin-right: 10px;\n"]);return f=function(){return e},e}function m(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: 'row';\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n"]);return m=function(){return e},e}var v=d.a.div(m()),O=d.a.input(f()),g=d.a.button(h()),w=function(e){var n=e.onChange,t=e.onClick;return Object(i.jsxs)(v,{children:[Object(i.jsx)(O,{onChange:n}),Object(i.jsx)(g,{onClick:t,children:"Search"})]})};function y(){var e=Object(u.a)(["\n    padding-right: 10px;\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n    list-style: none;\n    flex-direction: row;\n    display: flex;\n"]);return k=function(){return e},e}function q(){var e=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return q=function(){return e},e}var C=d.a.div(q()),S=d.a.ul(k()),E=d.a.li(y()),L=t(9),_=function(){return Object(i.jsx)(C,{children:Object(i.jsxs)(S,{children:[Object(i.jsx)(E,{children:Object(i.jsx)(L.b,{to:"/Home",children:"HOME"})}),Object(i.jsx)(E,{children:Object(i.jsx)(L.b,{to:"/About",children:"ABOUT"})}),Object(i.jsx)(E,{children:Object(i.jsx)(L.b,{to:"/Details/:id",children:"DETAILS"})})]})})},z=function(e){var n=e.onChange,t=e.onClick;return Object(i.jsxs)(x,{children:[Object(i.jsx)(_,{}),Object(i.jsx)(w,{onChange:n,onClick:t})]})},A=t(4);function I(){var e=Object(u.a)([""]);return I=function(){return e},e}function P(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 10px;\n"]);return P=function(){return e},e}function T(){var e=Object(u.a)(["\n  background-color: #87000090;\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  bottom: 0px;\n  width: 100%;\n"]);return T=function(){return e},e}function V(){var e=Object(u.a)(["\n  border-bottom-right-radius: 10px;\n  padding: 3px;\n  font-size: small;\n"]);return V=function(){return e},e}function D(){var e=Object(u.a)(["\n  border-bottom-left-radius: 10px;\n  padding: 3px;\n  font-size: small;\n"]);return D=function(){return e},e}function H(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background-color: #87000090;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  padding: 3px;\n  display: flex;\n  justify-content: center;\n"]);return H=function(){return e},e}function F(){var e=Object(u.a)(["\n  width: 150px;\n  height: 200px;\n\n  border: 1px solid black;\n  box-shadow: 10px 10px 10px #00000040;\n  border-radius: 10px;\n  margin: 5px;\n  background-color: #000000;\n  position: relative;\n  transition: 0.5s;\n  & :hover {\n    transform: scale(1.1);\n    border-radius: 15px;\n  }\n"]);return F=function(){return e},e}var N=d.a.div(F()),U=d.a.p(H()),M=d.a.p(D()),R=d.a.p(V()),B=d.a.div(T()),G=d.a.img(P()),J=(d.a.p(I()),function(e){var n=Object(A.f)();return Object(i.jsxs)(N,{onClick:function(){n.push("/Details/".concat(e.id))},children:[Object(i.jsx)(G,{src:e.imgSrc,alt:""}),Object(i.jsx)(U,{children:e.title}),Object(i.jsxs)(B,{children:[Object(i.jsxs)(M,{children:["Rate:",e.popularity]}),Object(i.jsxs)(R,{children:["Point:",e.point]})]})]})}),W=Object(r.createContext)(),Y=Object(r.createContext)();function Q(){var e=Object(u.a)(["\n  text-align: center;\n  position: sticky;\n  font-size: 3vw;\n  font-weight: bolder;\n  letter-spacing: 1vw;\n  margin: 10px;\n"]);return Q=function(){return e},e}function K(){var e=Object(u.a)(["\n  display: -webkit-box;\n  flex-wrap: nowrap;\n  overflow-y: hidden;\n"]);return K=function(){return e},e}var X=d.a.div(K()),Z=d.a.p(Q()),$=function(){var e=Object(r.useContext)(W),n=e.movieList,t=e.baseImgUrl;return Object(i.jsxs)("div",{children:[Object(i.jsx)(Z,{children:"MOVIES"}),Object(i.jsx)(X,{children:null===n||void 0===n?void 0:n.map((function(e,n){return Object(i.jsx)(J,{title:e.title,imgSrc:t+e.poster_path,popularity:e.popularity,point:e.vote_average,id:e.id,trailer:e.video},n)}))})]})};function ee(){var e=Object(u.a)(["\n  text-align: center;\n  position: sticky;\n  font-size: 3vw;\n  font-weight: bolder;\n  letter-spacing: 1vw;\n  margin: 10px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n  display: -webkit-box;\n  flex-wrap: nowrap;\n  overflow-y: hidden;\n"]);return ne=function(){return e},e}var te=d.a.div(ne()),ie=d.a.p(ee()),re=function(){var e=Object(r.useContext)(W),n=e.nowPlayingList,t=e.baseImgUrl;return Object(i.jsxs)("div",{children:[Object(i.jsx)(ie,{children:"NOW PLAYING"}),Object(i.jsx)(te,{children:null===n||void 0===n?void 0:n.map((function(e,n){return Object(i.jsx)(J,{title:e.title,imgSrc:t+e.poster_path,popularity:e.popularity,point:e.vote_average,id:e.id,trailer:e.video},n)}))})]})};function ce(){var e=Object(u.a)(["\n  text-align: center;\n  position: sticky;\n  font-size: 3vw;\n  font-weight: bolder;\n  letter-spacing: 1vw;\n  margin: 10px;\n"]);return ce=function(){return e},e}function ae(){var e=Object(u.a)(["\n    display : -webkit-box;\n    flex-wrap: nowrap;\n    overflow-y : hidden;\n"]);return ae=function(){return e},e}var oe=d.a.div(ae()),se=d.a.p(ce()),ue=function(){var e=Object(r.useContext)(W),n=e.tvList,t=e.baseImgUrl;return Object(i.jsxs)("div",{children:[Object(i.jsx)(se,{children:"TV SERIES"}),Object(i.jsxs)(oe,{children:[n.map((function(e,n){return Object(i.jsx)(J,{title:e.name,imgSrc:t+e.poster_path,popularity:e.popularity,point:e.vote_average,id:e.id,trailer:e.video},n)})),Object(i.jsx)(J,{})]})]})};function de(){var e=Object(u.a)(["\n  background-color: #000000;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  padding: 25px;\n  width: 95%;\n  border-radius: 30px;\n  background-image: url('https://picsum.photos/id/1067/600/400'),\n    url('https://picsum.photos/id/250/600/400');\n  background-blend-mode: lighten;\n  background-size: cover;\n  margin: auto;\n  box-shadow: 10px 10px 10px black;\n"]);return de=function(){return e},e}var le=d.a.div(de());function pe(){var e=Object(u.a)(["\nbackground-color: #000000;\ndisplay: flex;\nflex-direction: row;\nflex-wrap : wrap;\njustify-content: center;\n\npadding: 25px;\nwidth: 95%;\nborder-radius: 30px;\nbackground-image: url('https://picsum.photos/id/1067/600/400'),\n  url('https://picsum.photos/id/250/600/400');\nbackground-blend-mode: lighten;\nbackground-size: cover;\nmargin: auto;\nbox-shadow: 10px 10px 10px black;\n"]);return pe=function(){return e},e}var be=d.a.div(pe()),je=function(e){e.video;return Object(i.jsxs)(be,{children:[Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/yvGE7Cz9VDA",width:"320",height:"215",margin:"20px",frameborder:"0",allowfullscreen:!0}),Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/EBSjabRNztY",width:"320",height:"215",margin:"20px",frameborder:"0",allowfullscreen:!0}),Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/H-0RHqDWcJE",width:"320",height:"215",margin:"20px",frameborder:"0",allowfullscreen:!0})]})},xe=function(){return Object(i.jsx)(le,{children:Object(i.jsx)(je,{})})};function he(){var e=Object(u.a)(["\n  width: 70%;\n  height: 70%;\n  display: flex;\n  justify-content : center;\n  border: 1px solid black;\n  box-shadow: 10px 10px 10px #00000040;\n  border-radius: 10px;\n  margin: 5px;\n  background-color: #000000;\n  position: relative;\n  transition: 0.5s;\n  & :hover {\n    transform: scale(1.1);\n    border-radius: 15px;\n  }\n"]);return he=function(){return e},e}function fe(){var e=Object(u.a)(["\n  width: 45vw;\n  height : 70vh ;\n  margin: 10px;\n  background-color: #000000;\n  background-image: linear-gradient(#ffffff, #000000);\n  margin: 10px;\n  border-radius: 10px;\n  text-align: justify;\n  padding: 10px;\n  display: flex;\n  flex-direction : column;\n  align-items :center;\n  align-content : center;\n  justify-content : center;\n  overflow-x : hidden;\n"]);return fe=function(){return e},e}function me(){var e=Object(u.a)(["\n  display : flex;\n  justify-content : center;\n\n  margin: 10px;\n  background-color: #000000;\n  background-image: linear-gradient(#ffffff, #000000);\n  margin: 10px;\n  border-radius: 10px;\n  text-align: justify;\n  padding: 10px;\n  align-self: center;\n"]);return me=function(){return e},e}function ve(){var e=Object(u.a)(["\n  margin: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  border-radius: 5px;\n"]);return ve=function(){return e},e}function Oe(){var e=Object(u.a)(["\n  background-color: #000000;\n  display: flex;\n  flex-direction: column;\n  flex-wrap : wrap;\n  align-items: center;\n  \n  padding: 25px;\n  width: 90%;\n  height : 16vh;\n  border-radius: 30px;\n  background-image: url('https://picsum.photos/id/1067/600/400'),\n    url('https://picsum.photos/id/250/600/400');\n  background-blend-mode: lighten;\n  background-size: cover;\n  margin: auto;\n  box-shadow: 10px 10px 10px black;\n"]);return Oe=function(){return e},e}function ge(){var e=Object(u.a)(["\n  min-height: 86vh;\n\n  background-image: url('https://picsum.photos/id/250/600/400');\n\n  background-size: cover;\n"]);return ge=function(){return e},e}var we=d.a.div(ge()),ye=d.a.div(Oe()),ke=d.a.div(ve()),qe=d.a.div(me()),Ce=d.a.div(fe()),Se=d.a.div(he()),Ee=function(){return Object(i.jsxs)(we,{children:[Object(i.jsx)(xe,{}),Object(i.jsxs)(ye,{class:"title",children:[Object(i.jsx)("h2",{children:"Welcome."})," ",Object(i.jsx)("br",{})," ",Object(i.jsx)("hr",{}),Object(i.jsx)("h3",{children:"Millions of movies, TV shows and people to discover. Explore now."})]}),Object(i.jsxs)(ke,{children:[Object(i.jsxs)(Ce,{children:[Object(i.jsx)("h1",{children:"Lorem, ipsum dolor."}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa omnis saepe repellat nisi impedit optio vitae, consectetur accusamus dolore laboriosam dolor unde quidem praesentium explicabo accusantium aliquid veritatis rem ducimus inventore quibusdam at, beatae quam ad? Voluptatem deserunt id expedita illo odit neque pariatur dicta magnam asperiores voluptatum dolore quae molestiae magni repellendus ab saepe molestias animi iure hic temporibus, error, dolor exercitationem. Nam accusantium sunt officiis incidunt fugit odio sapiente saepe delectus a impedit esse sit cumque fugiat accusamus, vero molestias earum cum illo aliquam harum voluptate nisi quidem porro! Quam rem id itaque sequi autem praesentium omnis."})]}),Object(i.jsxs)(Ce,{children:[Object(i.jsx)("h2",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsa omnis saepe repellat nisi impedit optio vitae, consectetur accusamus dolore laboriosam dolor unde quidem praesentium explicabo accusantium aliquid veritatis rem ducimus inventore quibusdam at, beatae quam ad? Voluptatem deserunt id expedita illo odit neque pariatur dicta magnam asperiores voluptatum dolore quae molestiae magni repellendus ab saepe molestias animi iure hic temporibus, error, dolor exercitationem. Nam accusantium sunt officiis incidunt fugit odio sapiente saepe delectus a impedit esse sit cumque fugiat accusamus, vero molestias earum cum illo aliquam harum voluptate nisi quidem porro! Quam rem id itaque sequi autem praesentium omnis."})]})]})]})},Le=t(10),_e=t.n(Le),ze=function(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],a=t[1],o=Object(A.g)().id;return Object(r.useEffect)((function(){_e.a.get("https://api.themoviedb.org/3/movie/"+o,{params:{api_key:"64f9385d47c970d860ccd6c147841242"}}).then((function(e){return a(e.data)}))}),[]),Object(i.jsxs)(we,{children:[Object(i.jsx)(xe,{}),Object(i.jsxs)(ke,{children:[Object(i.jsx)(qe,{children:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(Se,{children:[Object(i.jsx)(G,{src:"https://image.tmdb.org/t/p/w500"+c.poster_path,alt:""}),Object(i.jsx)(U,{children:c.title}),Object(i.jsxs)(B,{children:[Object(i.jsxs)(M,{children:["Rate:",c.popularity]}),Object(i.jsxs)(R,{children:["Point:",c.point]})]})]})})}),Object(i.jsxs)(Ce,{children:[Object(i.jsx)("h1",{children:c.title})," ",Object(i.jsx)("hr",{})," ",Object(i.jsx)("hr",{}),Object(i.jsx)("p",{children:c.overview}),Object(i.jsx)("p",{children:c.overview}),Object(i.jsx)("p",{children:c.overview}),Object(i.jsx)("p",{children:c.overview})," ",Object(i.jsx)("hr",{})," ",Object(i.jsx)("hr",{}),Object(i.jsx)("p",{children:c.overview}),Object(i.jsx)("p",{children:c.overview}),Object(i.jsx)("p",{children:c.overview})," ",Object(i.jsx)("hr",{}),Object(i.jsx)("hr",{}),Object(i.jsx)("a",{href:c.homepage,children:"HOMEPAGE"}),Object(i.jsx)("p",{children:c.video&&"Trailer"})]})]})]})},Ae="64f9385d47c970d860ccd6c147841242",Ie=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)([]),o=Object(s.a)(a,2),u=o[0],d=o[1],l=Object(r.useState)([]),p=Object(s.a)(l,2),b=p[0],j=p[1],x=Object(r.useState)([]),h=Object(s.a)(x,2),f=h[0],m=h[1],v=Object(r.useContext)(Y),O=v.inputVal;v.query;return console.log("Home -> videoList",b),Object(r.useEffect)((function(){_e.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:Ae,query:O||"a",page:1}}).then((function(e){return c(e.data.results)})).catch((function(e){return console.log(e)})).finally()}),[O]),Object(r.useEffect)((function(){_e.a.get("https://api.themoviedb.org/3/search/tv",{params:{api_key:Ae,query:O||"a"}}).then((function(e){return d(e.data.results)}))}),[O]),Object(r.useEffect)((function(){_e.a.get("https://api.themoviedb.org/3/movie/now_playing",{params:{api_key:Ae,page:1}}).then((function(e){return m(e.data.results)}))}),[O]),Object(r.useEffect)((function(){_e.a.get("https://api.themoviedb.org/3/movie/200/videos",{params:{api_key:Ae}}).then((function(e){return j(e.data.results)})).catch().finally()}),[O]),Object(i.jsx)(we,{children:Object(i.jsxs)(W.Provider,{value:{movieList:t,baseImgUrl:"https://image.tmdb.org/t/p/w500",tvList:u,nowPlayingList:f,videoList:b,baseYouTubeUrl:"https://www.youtube.com/embed"},children:[Object(i.jsx)($,{}),Object(i.jsx)(ue,{}),Object(i.jsx)(re,{})]})})},Pe="";var Te=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(L.a,{children:[Object(i.jsx)(z,{onChange:function(e){c(e.target.value)},onClick:function(){Pe=t}}),Object(i.jsx)(Y.Provider,{value:{inputVal:t,query:Pe},children:Object(i.jsxs)(A.c,{children:[Object(i.jsx)(A.a,{path:"/About",component:Ee,exact:!0}),Object(i.jsx)(A.a,{path:"/Details/:id",component:ze,exact:!0}),Object(i.jsx)(A.a,{path:"/Home",component:Ie})]})}),Object(i.jsx)(b,{})]})})},Ve=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),i(e),r(e),c(e),a(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(Te,{})}),document.getElementById("root")),Ve()}},[[61,1,2]]]);
//# sourceMappingURL=main.4a02f028.chunk.js.map