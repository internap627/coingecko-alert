(this["webpackJsonpcoingecko-alert"]=this["webpackJsonpcoingecko-alert"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(4),i=n.n(a),r=(n(10),n(2)),s=n.p+"static/media/logo.6ce24c58.svg",l=(n(11),n(5)),m=n.n(l),h=n(0);var u=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(),i=Object(r.a)(a,2),l=i[0],u=i[1],g=Object(c.useState)({}),f=Object(r.a)(g,2),p=(f[0],f[1]);Object(c.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/coins/list").then((function(t){return t.json()})).then((function(t){o(t),u(t.length)}))}),[]),Object(c.useEffect)((function(){var t=setInterval((function(){fetch("https://api.coingecko.com/api/v3/coins/list").then((function(t){return t.json()})).then((function(t){t.length>l&&t.forEach((function(e){-1===n.map((function(t){return t.id})).indexOf(e.id)&&(p(e),o(t),u(t.length),b(e),console.log(e))})),console.log(t.length)}))}),6e4);return function(){return clearInterval(t)}}),[n,l]);var b=function(t){fetch("https://api.coingecko.com/api/v3/coins/".concat(t.id)).then((function(t){return t.json()})).then((function(e){var n=e.asset_platform_id&&e.asset_platform_id,c="Name : ".concat(e.name," || Platform : ").concat(n," || Contract : ").concat(e.platforms[n]);t.str=c,t.ccList="internap627@gmail.com, Thebrightbrains1@gmail.com, Bob123bill1231@gmail.com, cryptoguru11@hotmail.com, Abdulhakeem15th@gmail.com, ishy_osman@hotmail.com, Moaweys1010@gmail.com, Abubakara1996@gmail.com, Jeilani90@gmail.com, zcrypto03@gmail.com, hrchub1@gmail.com, Cheekymarketuk@gmail.com, hillflos00@gmail.com, moonshooterz1988@gmail.com",m.a.send("service_pdhtum6","template_7k3gm5e",t,"user_wDbnaIvWCLYgVPps0l1dl").then((function(t){console.log(t.text)}),(function(t){console.log(t.text)}))}))};return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(h.jsxs)("p",{children:["Edit ",Object(h.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.677eae64.chunk.js.map