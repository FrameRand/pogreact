(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={nav:"Navbar_nav__FVVxA",item:"Navbar_item__A5tom",activeLink:"Navbar_activeLink__3-z7f"}},,,function(e,a,t){e.exports={logo_des:"ProfileInfo_logo_des__3X7U5",logo:"ProfileInfo_logo__1uosl",descriptionH:"ProfileInfo_descriptionH__1x6tk",description:"ProfileInfo_description__2Zsa1"}},function(e,a,t){e.exports={NewPost:"MyPosts_NewPost__3bxXD",MyPost:"MyPosts_MyPost__1SJJ_"}},function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2UQod"}},,function(e,a,t){e.exports={app_wrapper:"App_app_wrapper__j-sKf",app_wrapper_content:"App_app_wrapper_content__1LixQ"}},function(e,a,t){e.exports={header:"Header_header__1M_MX",mainLogo:"Header_mainLogo__1UamB"}},,,function(e,a,t){e.exports={item:"Post_item__2lyht",postText:"Post_postText__wqW4R"}},function(e,a,t){e.exports={dialogs_items:"DialogItem_dialogs_items__20r2F",dialog:"DialogItem_dialog__3nrMU"}},,,,,function(e,a,t){e.exports={bg_i:"Profile_bg_i__32ve2",item:"Profile_item__2w1Sb",NPost:"Profile_NPost__2qHQ4",MPost:"Profile_MPost__2hYFT"}},function(e,a,t){e.exports={messages:"Message_messages__1rpmK",message:"Message_message__1lBzn"}},function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(22),o=t.n(s),l=(t(31),t(14)),r=t.n(l),m=t(15),c=t.n(m),u=function(){return i.a.createElement("header",{className:c.a.header},i.a.createElement("div",{className:c.a.mainLogo},i.a.createElement("img",{src:"http://pngimg.com/uploads/vkontakte/vkontakte_PNG25.png"})))},d=t(7),p=t.n(d),_=t(5),g=function(){return i.a.createElement("nav",{className:p.a.nav},i.a.createElement("div",{className:p.a.item},i.a.createElement(_.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),i.a.createElement("div",{className:p.a.item},i.a.createElement(_.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Message")),i.a.createElement("div",{className:p.a.item},i.a.createElement(_.b,{to:"/photo",activeClassName:p.a.activeLink},"Photo")),i.a.createElement("div",{className:p.a.item},i.a.createElement(_.b,{to:"/video",activeClassName:p.a.activeLink},"Video")),i.a.createElement("div",{className:p.a.item},i.a.createElement(_.b,{to:"/game",activeClassName:p.a.activeLink},"Game")))},v=t(24),E=t.n(v),f=t(11),N=t.n(f),h=t(18),w=t.n(h),P=function(e){return i.a.createElement("div",{className:w.a.item},i.a.createElement("img",{src:"https://i.pinimg.com/236x/a4/40/04/a4400453bad6d581ec203ad1455d0c8f--pretty-pics-pretty-pictures.jpg"}),i.a.createElement("div",{className:w.a.postText},e.message),i.a.createElement("div",null,i.a.createElement("span",null,"Like ",e.likesCount)))},x=function(){var e=[{id:1,message:"go geo",likesCount:1242352523},{id:2,message:"pog",likesCount:333},{id:3,message:"champ",likesCount:555},{id:4,message:"a to ya spat",likesCount:42}].map((function(e){return i.a.createElement(P,{message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:N.a.MyPost},"My posts",i.a.createElement("div",null,i.a.createElement("textarea",null),i.a.createElement("button",null,"Add post")),i.a.createElement("div",{className:N.a.NewPost},"New post"),i.a.createElement("div",{className:N.a.posts},e))},k=t(10),b=t.n(k),y=function(){return i.a.createElement("div",{className:b.a.logo_des},i.a.createElement("div",{className:b.a.logo},i.a.createElement("svg",{width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("rect",{width:"100",height:"100",rx:"15",fill:"#4D4AC6"}))),i.a.createElement("div",{className:b.a.description},i.a.createElement("div",{className:b.a.descriptionH},"Description"),i.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a fringilla massa. Maecenas aliquet, elit eget rutrum finibus, ligula risus mattis purus, ac venenatis nulla leo et tortor. Proin dignissim eu nulla in elementum. Donec consequat varius augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris porttitor in elit a commodo. Nam non sem metus. Proin non nisl quam. Cras maximus lorem vitae justo consectetur hendrerit.")))},M=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:E.a.bg_i},i.a.createElement("img",{src:"https://wallpaperaccess.com/full/346683.jpg"})),i.a.createElement(y,null),i.a.createElement(x,null))},C=t(12),L=t.n(C),I=t(25),A=t.n(I),D=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:A.a.message},e.text))},V=t(19),H=t.n(V),q=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:H.a.dialog+" "+H.a.active},i.a.createElement(_.b,{to:"/dialogs/"+e.id},e.userName)))},B=function(e){var a=[{id:1,name:"Arsenii"},{id:2,name:"Kolya"},{id:3,name:"Vitya"},{id:1,name:"Vitya"},{id:2,name:"Kolya"},{id:3,name:"Vitya"}].map((function(e){return i.a.createElement(q,{userName:e.name,id:e.id})})),t=[{id:1,message:"darova"},{id:2,message:"priver"},{id:3,message:"hello"},{id:1,message:"go dota"},{id:2,message:"go"},{id:3,message:"pognali"}].map((function(e){return i.a.createElement(D,{text:e.message})}));return i.a.createElement("div",{className:L.a.dialogs},i.a.createElement("div",{className:L.a.dialogs_items},a),i.a.createElement("div",{className:L.a.messages},t))},j=(t(37),function(e){return i.a.createElement("div",null,"Photo")}),J=(t(38),function(e){return i.a.createElement("div",null,"Video")}),K=(t(39),function(e){return i.a.createElement("div",null,"Game")}),S=t(1),T=function(e){return i.a.createElement(_.a,null,i.a.createElement("div",{className:r.a.app_wrapper},i.a.createElement(u,null),i.a.createElement(g,null),i.a.createElement("div",{className:r.a.app_wrapper_content},i.a.createElement(S.a,{path:"/dialogs",component:B}),i.a.createElement(S.a,{path:"/profile",component:M}),i.a.createElement(S.a,{path:"/photo",component:j}),i.a.createElement(S.a,{path:"/video",component:J}),i.a.createElement(S.a,{path:"/game",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.03757fcd.chunk.js.map