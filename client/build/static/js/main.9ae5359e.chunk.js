(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(53),r=n.n(o),s=(n(172),n(10)),c=(n(173),n(296)),i=n(295),l=n(298),u=n(300),d=n(303),j=n(299),p=n(146),m=n.n(p),h=n(16),b=n.n(h),O=n(19),f=n.n(O),g=n(15),x=n(301),v=n(302),w=n(286),y=n(1),C=function(e){var t=Object(g.f)(),n=function(e){e.preventDefault(),t.push("/")};return Object(y.jsx)(i.a,{sx:{flexGrow:1},children:Object(y.jsx)(c.a,{position:"static",children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(j.a,{onClick:function(t){return function(t){t.preventDefault(),e.setOpen(!e.open),b.a.get("http://localhost:8000/api/user/name/"+f.a.get("userName"),{withCredentials:!0}).then((function(t){e.setUserRooms(t.data.user.rooms)})).catch((function(e){return console.log(e)}))}(t)},size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(y.jsx)(m.a,{})}),Object(y.jsx)(u.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:e.pageHeader}),Object(y.jsx)(x.a,{children:Object(y.jsx)(v.a,{style:{fontFamily:"Open Sans",paddingTop:"1px",marginRight:"30px"},control:Object(y.jsx)(w.a,{color:"secondary",defaultChecked:!1,checked:e.darkMode,onChange:function(t){e.darkMode?e.setDarkMode(!1):e.setDarkMode(!0)}}),label:"DARKMODE"})}),e.isLoggedIn?Object(y.jsxs)(y.Fragment,{children:[e.dashboard?"":Object(y.jsx)(d.a,{color:"inherit",onClick:function(e){return n(e)},style:{marginRight:"30px"},children:"Home"}),Object(y.jsx)(d.a,{color:"inherit",onClick:function(n){return function(n){n.preventDefault(),b.a.get("http://localhost:8000/api/user/logout",{withCredentials:!0}).then((function(){e.setLoggedIn(!1),t.push("/")})).catch((function(e){return console.log(e.response)}))}(n)},children:"Logout"})]}):Object(y.jsxs)(y.Fragment,{children:[e.dashboard?"":Object(y.jsx)(d.a,{color:"inherit",onClick:function(e){return n(e)},children:"Home"}),Object(y.jsx)(d.a,{color:"inherit",onClick:function(t){return function(t){t.preventDefault(),e.setRegisterOpen(!e.registerOpen)}(t)},children:"Register"}),Object(y.jsx)(d.a,{color:"inherit",onClick:function(t){return function(t){t.preventDefault(),e.setLoginOpen(!e.loginOpen)}(t)},style:{marginLeft:"50px"},children:"Login"})]})]})})})},k=n(289),N=n(276),R=n(304),D=n(284),S=n(305),L=n(147),I=n.n(L),M=function(e){var t=Object(g.f)(),n=function(){e.setOpen(!1)},a=function(e,a){e.preventDefault(),n(),t.push("/chatroom/"+a)};return Object(y.jsxs)(k.a,{anchor:"left",elevation:20,open:e.open,onClose:n,children:[Object(y.jsxs)("h1",{style:{margin:"30px 80px"},children:["Your Rooms",e.isLoggedIn?Object(y.jsx)(j.a,{size:"large",variant:"contained",color:"primary",onClick:function(t){return function(t){t.preventDefault(),e.setNewRoomOpen(!0)}(t)},children:Object(y.jsx)(I.a,{})}):null]}),Object(y.jsx)(N.a,{}),Object(y.jsxs)(R.a,{children:[Object(y.jsx)("h4",{style:{margin:"10px"},children:"Direct Messages"}),e.userRooms.map((function(e,t){return null===e?void 0:e.isDm?"Looks lonely!"===e.roomName?Object(y.jsx)(D.a,{children:Object(y.jsx)("small",{children:"Looks lonely!"})},t):Object(y.jsx)(D.a,{children:Object(y.jsx)(S.a,{underline:"hover",component:"button",variant:"h6",onClick:function(t){return a(t,e._id)},children:e.host===f.a.get("userName")?e.users[1]:e.host})},t):""}))]}),Object(y.jsx)(N.a,{}),Object(y.jsxs)(R.a,{children:[Object(y.jsx)("h4",{style:{margin:"10px"},children:"Chat Rooms"}),e.userRooms.map((function(e,t){return null===e?void 0:e.isDm?"":"No friends?"===e.roomName?Object(y.jsx)(D.a,{children:Object(y.jsx)("small",{children:"No friends?"})},t):Object(y.jsx)(D.a,{children:Object(y.jsx)(S.a,{underline:"hover",component:"button",variant:"h6",onClick:function(t){return a(t,e._id)},children:e.roomName})},t)}))]})]})},F=n(22),P=n(280),E=n(306),T=n(312),_=n(307),A=n(309),B=n(308),V=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1],j=function(){r({email:"",password:""}),e.setLoginOpen(!1)};return Object(y.jsxs)(E.a,{open:e.loginOpen,onClose:j,children:[Object(y.jsxs)(_.a,{children:[Object(y.jsx)(B.a,{children:"Login"}),Object(y.jsxs)(A.a,{children:["Login with your email and password to begin.",Object(y.jsx)("br",{}),Object(y.jsx)("small",{style:{color:"red"},children:l})]}),Object(y.jsx)(P.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",variant:"standard",value:o.email,onChange:function(e){return r(Object(F.a)(Object(F.a)({},o),{},{email:e.target.value}))}}),Object(y.jsx)(P.a,{margin:"dense",id:"password",label:"Password",type:"password",variant:"standard",value:o.password,onChange:function(e){return r(Object(F.a)(Object(F.a)({},o),{},{password:e.target.value}))},style:{marginLeft:"10px"}})]}),Object(y.jsxs)(T.a,{children:[Object(y.jsx)(d.a,{onClick:j,children:"Cancel"}),Object(y.jsx)(d.a,{onClick:function(t){return function(t){t.preventDefault(),b.a.post("http://localhost:8000/api/user/login",o,{withCredentials:!0}).then((function(t){e.setCount(e.count+1),e.setLoginOpen(!1)})).catch((function(e){u(e.response.data)}))}(t)},variant:"contained",children:"Submit"})]})]})},H=n(297),U=n(285),W=function(){return Object(y.jsx)(u.a,{variant:"h1",style:{height:"150px",margin:"50px 0"},children:"Hi! Welcome to viddychat!"})},Y=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),l=i[0],u=i[1],j=Object(a.useState)(""),p=Object(s.a)(j,2),m=p[0],h=p[1],O=Object(g.f)(),x=function(){h(""),u(!1)};return Object(y.jsxs)(H.a,{elevation:4,style:{margin:"50px",padding:"100px 0"},children:[Object(y.jsx)(W,{}),Object(y.jsx)(P.a,{style:{minWidth:"400px",backgroundColor:"rgba(166, 212, 250, 0.2)",borderRadius:"4px"},type:"text",value:o,onChange:function(e){return r(e.target.value)},disabled:!e.isLoggedIn,placeholder:e.isLoggedIn?"Enter a Room Name":"Login or Signup!"}),Object(y.jsx)(d.a,{onClick:function(e){return function(e){e.preventDefault(),console.log(o),b.a.get("http://localhost:8000/room/name/"+o,{withCredentials:!0}).then((function(e){var t={room:e=e.data.room,userName:f.a.get("userName")};console.log(t),b.a.put("http://localhost:8000/api/user/addroom",t,{withCredentials:!0}).then((function(){return O.push("/chatroom/"+e._id)})).catch((function(e){void 0===e.response.data.error?h("You have to be logged in to do that!"):h(e.response.data.error),r(""),u(!0)}))})).catch((function(e){return console.log(e)}))}(e)},variant:"contained",style:{marginLeft:"15px",height:"53px",marginTop:"1px"},disabled:!e.isLoggedIn,children:"Enter"}),Object(y.jsx)(U.a,{message:"You are already in this room!",open:l,onClose:x}),Object(y.jsx)(U.a,{message:m,open:l,onClose:x})]})},z=function(e){var t=Object(a.useState)({userName:"",email:"",password:"",confirmPassword:"",rooms:[]}),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)({email:"",password:"",userName:"",confirmPassword:""}),i=Object(s.a)(c,2),l=i[0],u=i[1],j=function(){e.setRegisterOpen(!1),r({userName:"",email:"",password:"",confirmPassword:""})};return Object(y.jsxs)(E.a,{open:e.registerOpen,onClose:j,children:[Object(y.jsxs)(_.a,{children:[Object(y.jsx)(B.a,{children:"Get Registered"}),Object(y.jsx)(A.a,{children:"Register below to get started and create your own rooms!"}),Object(y.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-evenly"},children:[Object(y.jsx)(P.a,{error:""!==l.userName,helperText:""===l.userName?"":l.userName,autoFocus:!0,margin:"dense",id:"userName",label:"User Name",type:"text",variant:"standard",value:o.userName,onChange:function(e){return r(Object(F.a)(Object(F.a)({},o),{},{userName:e.target.value}))}}),Object(y.jsx)(P.a,{error:""!==l.email,helperText:""===l.email?"":l.email,margin:"dense",id:"email",label:"Email",type:"email",variant:"standard",value:o.email,onChange:function(e){return r(Object(F.a)(Object(F.a)({},o),{},{email:e.target.value}))}})]}),Object(y.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-evenly"},children:[Object(y.jsx)(P.a,{error:""!==l.password,helperText:""===l.password?"":l.password,margin:"dense",id:"password",label:"Password",type:"password",variant:"standard",value:o.password,onChange:function(e){return r(Object(F.a)(Object(F.a)({},o),{},{password:e.target.value}))},style:{maxWidth:"200px"}}),Object(y.jsx)(P.a,{error:""!==l.confirmPassword,helperText:""===l.confirmPassword?"":l.confirmPassword,margin:"dense",id:"confirmPassword",label:"Confirm Password",type:"password",variant:"standard",value:o.confirmPassword,onChange:function(e){return r(Object(F.a)(Object(F.a)({},o),{},{confirmPassword:e.target.value}))}})]})]}),Object(y.jsxs)(T.a,{children:[Object(y.jsx)(d.a,{onClick:function(t){return function(t){t.preventDefault(),e.setRegisterOpen(!1)}(t)},children:"Cancel"}),Object(y.jsx)(d.a,{variant:"contained",onClick:function(t){return function(t){t.preventDefault(),b.a.post("http://localhost:8000/api/user/register",o,{withCredentials:!0}).then((function(t){e.setCount(e.count+1),j()})).catch((function(e){for(var t={},n=0,a=Object.entries(e.response.data.error.errors);n<a.length;n++){var o=Object(s.a)(a[n],2),r=o[0],c=o[1];t[r]=c.message}u(Object(F.a)(Object(F.a)({},{email:"",password:"",userName:"",confirmPassword:""}),t))}))}(t)},children:"Register"})]})]})},G=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1],j=Object(g.f)(),p=function(){e.setNewRoomOpen(!1)};return Object(y.jsxs)(E.a,{open:e.newRoomOpen,onClose:p,children:[Object(y.jsxs)(_.a,{children:[Object(y.jsx)(B.a,{children:"Create a Room"}),Object(y.jsxs)(A.a,{children:["Create a new chatroom to talk with your pals!",Object(y.jsx)("br",{}),Object(y.jsx)("small",{style:{color:"red"}})]}),Object(y.jsx)(P.a,{error:""!==l,helperText:""===l?"":l.data,fullWidth:!0,autoFocus:!0,margin:"dense",id:"roomName",label:"Room Name",type:"text",variant:"standard",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(y.jsxs)(T.a,{children:[Object(y.jsx)(d.a,{onClick:p,children:"Cancel"}),Object(y.jsx)(d.a,{variant:"contained",onClick:function(t){return function(t){t.preventDefault(),b.a.get("http://localhost:8000/api/user/name/"+f.a.get("userName")).then((function(t){b.a.post("http://localhost:8000/room/create",{roomName:o,users:[t.data.user._id],isDm:!1,host:t.data.user},{withCredentials:!0}).then((function(t){b.a.put("http://localhost:8000/api/user/addroom",{room:t.data.room,userName:f.a.get("userName")},{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)})),j.push("/chatroom/"+t.data.room._id),p(),r(""),e.setOpen(!1)})).catch((function(e){return u(e.response)}))})).catch((function(e){return console.log(e)}))}(t)},children:"Submit"})]})]})},J=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),l=i[0],u=i[1],d=Object(a.useState)(!1),j=Object(s.a)(d,2),p=j[0],m=j[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),f=O[0],g=O[1],x=Object(a.useState)(0),v=Object(s.a)(x,2),w=v[0],k=v[1],N=Object(a.useState)([{roomName:"Looks lonely!",isDm:!0,host:"Looks lonely!"},{roomName:"No friends?",isDm:!1,host:"NaN"}]),R=Object(s.a)(N,2),D=R[0],S=R[1];return Object(a.useEffect)((function(){b.a.get("http://localhost:8000/api/user/isloggedin",{withCredentials:!0}).then((function(){g(!0)})).catch(g(!1))}),[w]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{pageHeader:"",setOpen:r,open:o,setLoginOpen:u,loginOpen:l,registerOpen:p,setRegisterOpen:m,isLoggedIn:f,count:w,setCount:k,userRooms:D,setUserRooms:S,setLoggedIn:g,dashboard:!0,darkMode:e.darkMode,setDarkMode:e.setDarkMode}),Object(y.jsx)(M,{open:o,setOpen:r,isLoggedIn:f,newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen,userRooms:D,setUserRooms:S}),Object(y.jsx)(G,{newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen}),Object(y.jsx)(V,{loginOpen:l,setLoginOpen:u,count:w,setCount:k,setUserName:e.setUserName}),Object(y.jsx)(z,{registerOpen:p,setRegisterOpen:m,count:w,setCount:k}),Object(y.jsx)(Y,{isLoggedIn:f})]})},K=n(149),Q=n(17),Z=n(313),q=n(293),X=n(278),$=n(5),ee=n(314),te=n(84),ne=n.n(te),ae=n(292),oe=n(151),re=n(287),se=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),l=i[0],u=i[1],d=Boolean(o),j=Object(g.f)(),p=function(){r(null)},m=function(t){b.a.get("http://localhost:8000/room/dmroom/"+f.a.get("userName")+"/"+t).then((function(n){0===n.data.room.length?(b.a.post("http://localhost:8000/room/create",{roomName:Math.random().toString(36).slice(2),users:[f.a.get("userName"),t],isDm:!0,host:f.a.get("userName")}).then((function(e){console.log(),b.a.put("http://localhost:8000/api/user/addroom/",{room:e.data.room,userName:f.a.get("userName")},{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)})),b.a.put("http://localhost:8000/api/user/addroom/",{room:e.data.room,userName:t},{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)})),j.push("/chatroom/"+e.data.room._id)})).catch((function(e){return console.log(e.response)})),e.socket.emit("sendDm",t)):(u(!0),p(),j.push("/chatroom/"+n.data.room[0]._id))})).catch((function(e){return console.log(e)}))};return Object(y.jsxs)("div",{children:[Object(y.jsx)(ae.a,{label:e.userName,component:"a","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":d?"true":void 0,clickable:!0,onClick:function(e){r(e.currentTarget)}}),Object(y.jsxs)(oe.a,{id:"basic-menu",anchorEl:o,open:d,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(y.jsx)(re.a,{onClick:function(){return m(e.userName)},children:"Direct message"}),Object(y.jsx)(re.a,{onClick:function(){return t=e.userName,m(t),void b.a.get("http://localhost:8000/api/user/name/"+t,{withCredentials:!0}).then((function(t){var n=t.data.user;e.socket.emit("start_call",{userInfo:n,caller:f.a.get("userName")})})).catch((function(e){return console.log(e)}));var t},children:"Call"})]}),Object(y.jsx)(U.a,{message:"You already have a DM with this person!",open:l,onClose:function(){u(!1)}})]})},ce=n(34),ie=n.n(ce),le=n(57),ue=n(283),de=function(e){var t={video:{width:480,height:320},audio:!0},n={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:turn.bistri.com:80",credential:"homeo",username:"homeo"},{url:"turn:turn.anyfirewall.com:443?transport=tcp",credential:"webrtc",username:"webrtc"}]},o=Object(a.useState)(e.roomInfo._id),r=Object(s.a)(o,2),c=r[0],i=r[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),j=u[0],p=u[1],m=Object(a.useState)(1),h=Object(s.a)(m,2),b=h[0],O=h[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),x=g[0],v=g[1],w=Object(a.useState)(1),C=Object(s.a)(w,2),k=C[0],N=C[1],R=function(){var n=Object(le.a)(ie.a.mark((function n(a){var o,r;return ie.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),o=document.getElementById("localVid"),n.prev=2,n.next=5,navigator.mediaDevices.getUserMedia(t);case 5:r=n.sent,o.srcObject=r,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log("Error getting local media.",n.t0);case 12:e.socket.emit("call",c);case 14:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){var a,o=new RTCPeerConnection(n),r=document.getElementById("remoteVid");function s(e){return l.apply(this,arguments)}function l(){return l=Object(le.a)(ie.a.mark((function e(t){var n,r;return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("localVid"),e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:n=e.sent,a=n,r.srcObject=n,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error getting local media.",e.t0);case 12:u(o),r.srcObject=n;case 15:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function u(e){console.log(a),a.getTracks().forEach((function(t){e.addTrack(t,a)}))}function d(e){return j.apply(this,arguments)}function j(){return j=Object(le.a)(ie.a.mark((function t(n){var a;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.createOffer();case 3:a=t.sent,n.setLocalDescription(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:e.socket.emit("offer",{type:"offer",sdp:a,roomId:c});case 12:case"end":return t.stop()}}),t,null,[[0,7]])}))),j.apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return m=Object(le.a)(ie.a.mark((function t(n){var a;return ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.createAnswer();case 3:a=t.sent,n.setLocalDescription(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:e.socket.emit("answer",{type:"answer",sdp:a,roomId:c});case 12:case"end":return t.stop()}}),t,null,[[0,7]])}))),m.apply(this,arguments)}function h(e){r.srcObject=e.streams[0],console.log(e)}function b(t){t.candidate&&e.socket.emit("ice_candidate",{roomId:c,label:t.candidate.sdpMLineIndex,candidate:t.candidate.candidate})}i(e.roomInfo._id),e.socket.on("call",Object(le.a)(ie.a.mark((function e(){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return console.log("client call"),o.ontrack=h,o.onicecandidate=b,e.next=7,d(o);case 7:console.log("Client call event end.");case 8:case"end":return e.stop()}}),e)})))),e.socket.on("offer",function(){var e=Object(le.a)(ie.a.mark((function e(n){return ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Client offer event start."),e.next=3,s(t);case 3:return o.ontrack=h,e.next=6,o.setRemoteDescription(new RTCSessionDescription(n));case 6:return o.onicecandidate=b,e.next=9,p(o);case 9:console.log("Client offer event end.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.socket.on("answer",(function(e){console.log("Client answer event start."),o.setRemoteDescription(new RTCSessionDescription(e)),console.log("Client answer event end.")})),e.socket.on("ice_candidate",(function(e){console.log("Client ice candidate event start.");var t=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});console.log(t),o.addIceCandidate(t)})),e.socket.on("effectChange",(function(e){v(e),N(1)})),e.socket.on("effectValueChange",(function(e){N(e)}))}),[]),Object(y.jsxs)(H.a,{style:{minHeight:"65vh",minWidth:"300px",maxHeight:"600px",marginTop:"40px",overflowY:"none",alignItems:"space-around",borderRadius:"10px",padding:"30px",display:"flex",justifyContent:"space-around",flexDirection:"column"},children:[Object(y.jsx)("video",{id:"remoteVid",autoPlay:!0,preload:"auto",style:{margin:"10px 0",borderRadius:"15px",WebkitFilter:"blur"===x?"blur("+k+"px)":"grayscale"===x?"grayscale("+k+")":"saturate"===x?"saturate("+k+")":"negative"===x?"invert("+k+")":"sepia"===x?"sepia("+k+")":"contrast"===x?"contrast("+k+")":""}}),Object(y.jsx)("video",{id:"localVid",autoPlay:!0,preload:"auto",muted:!0,style:{margin:"10px 0",borderRadius:"15px",WebkitFilter:"blur"===j?"blur("+b+"px)":"grayscale"===j?"grayscale("+b+")":"saturate"===j?"saturate("+b+")":"negative"===j?"invert("+b+")":"sepia"===j?"sepia("+b+")":"contrast"===j?"contrast("+b+")":""}}),Object(y.jsxs)(q.a,{container:!0,spacing:3,children:[Object(y.jsx)(q.a,{item:!0,xs:9,children:Object(y.jsxs)(ue.a,{style:{width:"100%"},value:j,onChange:function(t){O(1),p(t.target.value),e.socket.emit("effectChange",{roomId:c,effect:t.target.value})},label:"Effects",id:"select-effects",variant:"filled",children:[Object(y.jsx)(re.a,{value:"",defaultChecked:!0,children:"None"}),Object(y.jsx)(re.a,{value:"blur",children:"Blur"}),Object(y.jsx)(re.a,{value:"grayscale",children:"Black & White"}),Object(y.jsx)(re.a,{value:"saturate",children:"Saturate"}),Object(y.jsx)(re.a,{value:"negative",children:"Negative"}),Object(y.jsx)(re.a,{value:"contrast",children:"Contrast"})]})}),Object(y.jsx)(q.a,{item:!0,xs:3,children:Object(y.jsx)(P.a,{id:"standard-number",value:b,onChange:function(t){O(t.target.value),e.socket.emit("effectValueChange",{roomId:c,effectValue:b})},label:"Value",type:"number",inputProps:{min:"0",max:"50",step:"0.1"},InputLabelProps:{shrink:!0},style:{width:"90%"},variant:"filled"})})]}),Object(y.jsx)(d.a,{onClick:function(e){return R(e)},variant:"contained",color:"secondary",children:"Call"})]})},je=function(e){var t=Object(g.f)(),n=Object(a.useState)((function(){return ne()(":8000")})),o=Object(s.a)(n,1)[0],r=function(t){t.preventDefault(),e.setCallOpen(!1)};return Object(y.jsxs)(E.a,{open:e.open,onClose:function(e){return r(e)},children:[Object(y.jsxs)(B.a,{children:["You're recieving a call from ",e.caller,"!"]}),Object(y.jsx)(_.a,{children:Object(y.jsx)(A.a,{children:"Answer it or decline it, the choice is yours."})}),Object(y.jsxs)(T.a,{style:{margin:"0 auto"},children:[Object(y.jsx)(d.a,{onClick:function(e){return r(e)},style:{marginRight:"15px"},children:"Decline"}),Object(y.jsx)(d.a,{variant:"contained",onClick:function(n){return function(n){n.preventDefault(),b.a.get("http://localhost:8000/room/dmroom/"+e.caller+"/"+f.a.get("userName"),{withCredentials:!0}).then((function(e){t.push("/chatroom/"+e.data.room[0]._id),setTimeout((function(){o.emit("call",e.data.room[0]._id)}),1e3)})).catch((function(e){return console.log(e)})),e.setCallOpen(!1)}(n)},children:"Accept"})]})]})},pe=function(e){var t=Object($.a)(H.a)((function(e){var t=e.theme;return Object(F.a)(Object(F.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"left",color:t.palette.text.secondary})})),n=Object(a.useState)((function(){return ne()("http://localhost:8000")})),o=Object(s.a)(n,1)[0],r=Object(a.useState)([]),c=Object(s.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),p=j[0],m=j[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),x=O[0],v=O[1],w=Object(a.useState)(!1),k=Object(s.a)(w,2),N=k[0],R=k[1],D=Object(a.useState)(!0),S=Object(s.a)(D,2),L=S[0],I=S[1],E=Object(a.useState)(0),T=Object(s.a)(E,2),_=T[0],A=T[1],B=Object(a.useState)([]),V=Object(s.a)(B,2),U=V[0],W=V[1],Y=Object(a.useState)(""),z=Object(s.a)(Y,2),J=z[0],K=z[1],te=Object(a.useState)(""),ae=Object(s.a)(te,2),oe=ae[0],re=ae[1],ce=Object(a.useState)(!1),ie=Object(s.a)(ce,2),le=ie[0],ue=ie[1],pe=Object(g.g)().id,me=function(e){var t=document.getElementById("messageBox");if(""!==t.value){var n={userName:f.a.get("userName"),message:t.value,roomId:pe};e.preventDefault(),l([n].concat(Object(Q.a)(i))),t.value="",b.a.post("http://localhost:8000/message/create",n,{withCredentials:!0}).then((function(e){return o.emit("sendMessage",n)})).catch((function(e){return console.log(e.response)}))}else e.preventDefault()};return Object(a.useEffect)((function(){return o.disconnect(!0),o.connect(),b.a.get("http://localhost:8000/room/"+pe,{withCredentials:!0}).then((function(e){K(e.data.room)})).catch((function(e){return console.log(e)})),b.a.post("http://localhost:8000/message/getmessages/"+pe,{withCredentials:!0}).then((function(e){l(e.data.messages.reverse())})).catch((function(e){return console.log(e.response)})),o.on("connect",(function(){console.log(o.id),b.a.put("http://localhost:8000/api/user/updatesocket",{userName:f.a.get("userName"),socket:o.id},{withCredentials:!0}).then((function(e){return e})).catch((function(e){return console.log(e)}))})),o.on("recieveMessage",(function(e){b.a.post("http://localhost:8000/message/getmessages/"+e,{withCredentials:!0}).then((function(e){return l(Object(Q.a)(e.data.messages.reverse()))})).catch((function(e){return console.log(e.response)}))})),o.on("recieving_call",(function(e){re(e),ue(!0)})),o.emit("join",pe),function(){return o.disconnect(!0)}}),[pe,o]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(C,{setOpen:m,open:p,setLoginOpen:v,loginOpen:x,registerOpen:N,setRegisterOpen:R,isLoggedIn:L,count:_,setCount:A,userRooms:U,setUserRooms:W,setLoggedIn:I,pageHeader:J.isDm?J.host===f.a.get("userName")?J.users[1]:J.host:J.roomName,darkMode:e.darkMode,setDarkMode:e.setDarkMode}),Object(y.jsx)(G,{newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen,setOpen:m}),Object(y.jsx)(M,{open:p,setOpen:m,userRooms:U,setUserRooms:W,isLoggedIn:L,newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen}),Object(y.jsx)(Z.a,{maxWidth:"xlg",children:Object(y.jsxs)(q.a,{container:!0,spacing:3,alignItems:"stretch",children:[J.isDm?Object(y.jsx)(q.a,{item:!0,xlg:2,lg:4,md:6,sm:12,xs:12,children:Object(y.jsx)(de,{socket:o,style:{marginRight:"30px"},roomInfo:J})}):"",Object(y.jsxs)(q.a,{item:!0,xlg:J.isDm?12:10,lg:J.isDm?8:12,md:J.isDm?6:12,sm:(J.isDm,12),xs:(J.isDm,12),children:[Object(y.jsx)(H.a,{style:{maxHeight:"500px",marginTop:"40px",overflowY:"auto",minHeight:"60vh",borderRadius:"10px",padding:"30px",display:"flex",flexDirection:"column-reverse"},children:Object(y.jsx)(X.a,{direction:"column-reverse",justifyContent:"space-evenly",alignItems:"stretch",spacing:2,children:i.slice(0,40).map((function(e,n){return Object(y.jsxs)(t,{style:{backgroundColor:e.userName===f.a.get("userName")?"rgba(166, 212, 250, 0.5)":"rgba(255, 214, 153, 0.5)"},children:[Object(y.jsxs)("h4",{style:{marginLeft:"5px",display:"flex",flexFlow:"row nowrap",alignItems:"center"},children:[Object(y.jsx)(se,{userName:e.userName,socket:o}),Object(y.jsxs)("small",{children:[" - ",e.createdAt?new Date(e.createdAt).toLocaleString():(new Date).toLocaleString()]})]}),Object(y.jsx)("p",{style:{marginLeft:"15px",color:"black"},children:e.message})]},n)}))})}),Object(y.jsx)(P.a,{focused:!0,fullWidth:!0,multiline:!0,variant:"outlined",id:"messageBox",onKeyPress:function(e){return"Enter"===e.key?me(e):null},maxRows:4,InputProps:{endAdornment:Object(y.jsx)(ee.a,{position:"end",children:Object(y.jsx)(d.a,{variant:"contained",onClick:function(e){return me(e)},children:"Submit"})})},style:{marginBottom:"40px",width:"99%",marginTop:"5px",backgroundColor:"rgba(166, 212, 250, 0.2)",borderRadius:"4px"}})]})]})}),Object(y.jsx)(je,{open:le,caller:oe,setCallOpen:ue})]})},me=n(150),he=n(294),be=n(279);var Oe=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],l=c[1],u=Object(me.a)({palette:{type:"light",primary:{main:"#607d8b"},secondary:{main:"#fafafa"},background:{default:"#cfd8dc",paper:"#f5f5f5"},error:{main:"#d50000"},warning:{main:"#ffcc80"},info:{main:"#90caf9"}},typography:{h6:{fontFamily:"Open Sans"},fontFamily:"Roboto",h1:{fontFamily:"Oswald"},button:{fontFamily:"Open Sans"},fontSize:16}}),d=Object(me.a)({palette:{type:"dark",primary:{main:"#90a4ae"},secondary:{main:"#eceff1"},background:{default:"#15171a",paper:"#424242"},error:{main:"#b71c1c"},warning:{main:"#e65100"},info:{main:"#1976d2"},text:{primary:"#f1f8e9"},success:{main:"#2e7d32"}},typography:{h6:{fontFamily:"Open Sans"},fontFamily:"Roboto",h1:{fontFamily:"Oswald"},button:{fontFamily:"Open Sans"},fontSize:16}});return Object(y.jsx)(he.a,{theme:i?d:u,children:Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(be.a,{}),Object(y.jsx)(K.a,{children:Object(y.jsxs)(g.c,{children:[Object(y.jsx)(g.a,{path:"/chatroom/:id",children:Object(y.jsx)(pe,{newRoomOpen:n,setNewRoomOpen:o,darkMode:i,setDarkMode:l})}),Object(y.jsx)(g.a,{path:"/",children:Object(y.jsx)(J,{newRoomOpen:n,setNewRoomOpen:o,darkMode:i,setDarkMode:l})})]})})]})})},fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,315)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};r.a.render(Object(y.jsx)(Oe,{}),document.getElementById("root")),fe()}},[[228,1,2]]]);
//# sourceMappingURL=main.9ae5359e.chunk.js.map