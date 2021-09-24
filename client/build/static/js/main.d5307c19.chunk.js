(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n(53),r=n.n(o),s=(n(170),n(10)),c=(n(171),n(291)),i=n(268),l=n(293),u=n(295),d=n(296),j=n(294),p=n(146),m=n.n(p),h=n(16),b=n.n(h),O=n(19),f=n.n(O),g=n(15),x=n(1),v=function(e){var t=Object(g.f)(),n=function(e){e.preventDefault(),t.push("/")};return Object(x.jsx)(i.a,{sx:{flexGrow:1},children:Object(x.jsx)(c.a,{position:"static",children:Object(x.jsxs)(l.a,{children:[Object(x.jsx)(j.a,{onClick:function(t){return function(t){t.preventDefault(),e.setOpen(!e.open),b.a.get("http://localhost:8000/api/user/name/"+f.a.get("userName"),{withCredentials:!0}).then((function(t){e.setUserRooms(t.data.user.rooms)})).catch((function(e){return console.log(e)}))}(t)},size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(x.jsx)(m.a,{})}),Object(x.jsx)(u.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:e.pageHeader}),e.isLoggedIn?Object(x.jsxs)(x.Fragment,{children:[e.dashboard?"":Object(x.jsx)(d.a,{color:"inherit",onClick:function(e){return n(e)},children:"Home"}),Object(x.jsx)(d.a,{color:"inherit",onClick:function(n){return function(n){n.preventDefault(),b.a.get("http://localhost:8000/api/user/logout",{withCredentials:!0}).then((function(){e.setLoggedIn(!1),t.push("/")})).catch((function(e){return console.log(e.response)}))}(n)},children:"Logout"})]}):Object(x.jsxs)(x.Fragment,{children:[e.dashboard?"":Object(x.jsx)(d.a,{color:"inherit",onClick:function(e){return n(e)},children:"Home"}),Object(x.jsx)(d.a,{color:"inherit",onClick:function(t){return function(t){t.preventDefault(),e.setRegisterOpen(!e.registerOpen)}(t)},children:"Register"}),Object(x.jsx)(d.a,{color:"inherit",onClick:function(t){return function(t){t.preventDefault(),e.setLoginOpen(!e.loginOpen)}(t)},style:{marginLeft:"50px"},children:"Login"})]})]})})})},w=n(286),C=n(273),y=n(297),k=n(282),N=n(298),R=n(147),D=n.n(R),S=function(e){var t=Object(g.f)(),n=function(e,n){e.preventDefault(),t.push("/chatroom/"+n)};return Object(x.jsxs)(w.a,{anchor:"left",elevation:20,open:e.open,onClose:function(){e.setOpen(!1)},children:[Object(x.jsxs)("h1",{style:{margin:"30px 80px"},children:["Your Rooms",e.isLoggedIn?Object(x.jsx)(j.a,{size:"large",variant:"contained",color:"primary",onClick:function(t){return function(t){t.preventDefault(),e.setNewRoomOpen(!0)}(t)},children:Object(x.jsx)(D.a,{})}):null]}),Object(x.jsx)(C.a,{}),Object(x.jsxs)(y.a,{children:[Object(x.jsx)("h4",{style:{margin:"10px"},children:"Direct Messages"}),e.userRooms.map((function(e,t){return null===e?void 0:e.isDm?"Looks lonely!"===e.roomName?Object(x.jsx)(k.a,{children:Object(x.jsx)("small",{children:"Looks lonely!"})},t):Object(x.jsx)(k.a,{children:Object(x.jsx)(N.a,{underline:"hover",component:"button",variant:"h6",onClick:function(t){return n(t,e._id)},children:e.host===f.a.get("userName")?e.users[1]:e.host})},t):""}))]}),Object(x.jsx)(C.a,{}),Object(x.jsxs)(y.a,{children:[Object(x.jsx)("h4",{style:{margin:"10px"},children:"Chat Rooms"}),e.userRooms.map((function(e,t){return null===e?void 0:e.isDm?"":"No friends?"===e.roomName?Object(x.jsx)(k.a,{children:Object(x.jsx)("small",{children:"No friends?"})},t):Object(x.jsx)(k.a,{children:Object(x.jsx)(N.a,{underline:"hover",component:"button",variant:"h6",onClick:function(t){return n(t,e._id)},children:e.roomName})},t)}))]})]})},L=n(22),I=n(278),P=n(299),E=n(305),T=n(300),F=n(302),_=n(301),A=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1],j=function(){r({email:"",password:""}),e.setLoginOpen(!1)};return Object(x.jsxs)(P.a,{open:e.loginOpen,onClose:j,children:[Object(x.jsxs)(T.a,{children:[Object(x.jsx)(_.a,{children:"Login"}),Object(x.jsxs)(F.a,{children:["Login with your email and password to begin.",Object(x.jsx)("br",{}),Object(x.jsx)("small",{style:{color:"red"},children:l})]}),Object(x.jsx)(I.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",variant:"standard",value:o.email,onChange:function(e){return r(Object(L.a)(Object(L.a)({},o),{},{email:e.target.value}))}}),Object(x.jsx)(I.a,{margin:"dense",id:"password",label:"Password",type:"password",variant:"standard",value:o.password,onChange:function(e){return r(Object(L.a)(Object(L.a)({},o),{},{password:e.target.value}))},style:{marginLeft:"10px"}})]}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(d.a,{onClick:j,children:"Cancel"}),Object(x.jsx)(d.a,{onClick:function(t){return function(t){t.preventDefault(),b.a.post("http://localhost:8000/api/user/login",o,{withCredentials:!0}).then((function(t){e.setCount(e.count+1),e.setLoginOpen(!1)})).catch((function(e){u(e.response.data)}))}(t)},variant:"contained",children:"Submit"})]})]})},B=n(283),U=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(""),j=Object(s.a)(u,2),p=j[0],m=j[1],h=Object(g.f)(),O=function(){m(""),l(!1)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:{marginTop:"150px"},children:"Sign Up Then Enter a Room Code to Get Started"}),Object(x.jsx)(I.a,{style:{minWidth:"400px"},type:"text",value:n,onChange:function(e){return o(e.target.value)}}),Object(x.jsx)(d.a,{onClick:function(e){return function(e){e.preventDefault(),console.log(n),b.a.get("http://localhost:8000/room/name/"+n,{withCredentials:!0}).then((function(e){var t={room:e=e.data.room,userName:f.a.get("userName")};console.log(t),b.a.put("http://localhost:8000/api/user/addroom",t,{withCredentials:!0}).then((function(){return h.push("/chatroom/"+e._id)})).catch((function(e){void 0===e.response.data.error?m("You have to be logged in to do that!"):console.log(e.response),o(""),l(!0)}))})).catch((function(e){return console.log(e)}))}(e)},variant:"contained",style:{marginLeft:"15px",height:"53px",marginTop:"1px"},children:"Enter"}),Object(x.jsx)(B.a,{message:"You are already in this room!",open:i,onClose:O}),Object(x.jsx)(B.a,{message:p,open:i,onClose:O})]})},V=function(e){var t=Object(a.useState)({userName:"",email:"",password:"",confirmPassword:"",rooms:[]}),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)({email:"",password:"",userName:"",confirmPassword:""}),i=Object(s.a)(c,2),l=i[0],u=i[1],j=function(){e.setRegisterOpen(!1),r({userName:"",email:"",password:"",confirmPassword:""})};return Object(x.jsxs)(P.a,{open:e.registerOpen,onClose:j,children:[Object(x.jsxs)(T.a,{children:[Object(x.jsx)(_.a,{children:"Get Registered"}),Object(x.jsx)(F.a,{children:"Register below to get started and create your own rooms!"}),Object(x.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-evenly"},children:[Object(x.jsx)(I.a,{error:""!==l.userName,helperText:""===l.userName?"":l.userName,autoFocus:!0,margin:"dense",id:"userName",label:"User Name",type:"text",variant:"standard",value:o.userName,onChange:function(e){return r(Object(L.a)(Object(L.a)({},o),{},{userName:e.target.value}))}}),Object(x.jsx)(I.a,{error:""!==l.email,helperText:""===l.email?"":l.email,margin:"dense",id:"email",label:"Email",type:"email",variant:"standard",value:o.email,onChange:function(e){return r(Object(L.a)(Object(L.a)({},o),{},{email:e.target.value}))}})]}),Object(x.jsxs)("div",{style:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-evenly"},children:[Object(x.jsx)(I.a,{error:""!==l.password,helperText:""===l.password?"":l.password,margin:"dense",id:"password",label:"Password",type:"password",variant:"standard",value:o.password,onChange:function(e){return r(Object(L.a)(Object(L.a)({},o),{},{password:e.target.value}))},style:{maxWidth:"200px"}}),Object(x.jsx)(I.a,{error:""!==l.confirmPassword,helperText:""===l.confirmPassword?"":l.confirmPassword,margin:"dense",id:"confirmPassword",label:"Confirm Password",type:"password",variant:"standard",value:o.confirmPassword,onChange:function(e){return r(Object(L.a)(Object(L.a)({},o),{},{confirmPassword:e.target.value}))}})]})]}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(d.a,{onClick:function(t){return function(t){t.preventDefault(),e.setRegisterOpen(!1)}(t)},children:"Cancel"}),Object(x.jsx)(d.a,{variant:"contained",onClick:function(t){return function(t){t.preventDefault(),b.a.post("http://localhost:8000/api/user/register",o,{withCredentials:!0}).then((function(t){e.setCount(e.count+1),j()})).catch((function(e){for(var t={},n=0,a=Object.entries(e.response.data.error.errors);n<a.length;n++){var o=Object(s.a)(a[n],2),r=o[0],c=o[1];t[r]=c.message}u(Object(L.a)(Object(L.a)({},{email:"",password:"",userName:"",confirmPassword:""}),t))}))}(t)},children:"Register"})]})]})},M=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),l=i[0],u=i[1],j=Object(g.f)(),p=function(){e.setNewRoomOpen(!1)};return Object(x.jsxs)(P.a,{open:e.newRoomOpen,onClose:p,children:[Object(x.jsxs)(T.a,{children:[Object(x.jsx)(_.a,{children:"Create a Room"}),Object(x.jsxs)(F.a,{children:["Create a new chatroom to talk with your pals!",Object(x.jsx)("br",{}),Object(x.jsx)("small",{style:{color:"red"}})]}),Object(x.jsx)(I.a,{error:""!==l,helperText:""===l?"":l.data,fullWidth:!0,autoFocus:!0,margin:"dense",id:"roomName",label:"Room Name",type:"text",variant:"standard",value:o,onChange:function(e){return r(e.target.value)}})]}),Object(x.jsxs)(E.a,{children:[Object(x.jsx)(d.a,{onClick:p,children:"Cancel"}),Object(x.jsx)(d.a,{variant:"contained",onClick:function(t){return function(t){t.preventDefault(),b.a.get("http://localhost:8000/api/user/name/"+f.a.get("userName")).then((function(t){b.a.post("http://localhost:8000/room/create",{roomName:o,users:[t.data.user],isDm:!1,host:t.data.user},{withCredentials:!0}).then((function(t){b.a.put("http://localhost:8000/api/user/addroom",{room:t.data.room,userName:f.a.get("userName")},{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)})),j.push("/chatroom/"+t.data.room._id),p(),r(""),e.setOpen(!1)})).catch((function(e){return u(e.response)}))})).catch((function(e){return console.log(e)}))}(t)},children:"Submit"})]})]})},H=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),l=i[0],u=i[1],d=Object(a.useState)(!1),j=Object(s.a)(d,2),p=j[0],m=j[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),f=O[0],g=O[1],w=Object(a.useState)(0),C=Object(s.a)(w,2),y=C[0],k=C[1],N=Object(a.useState)([{roomName:"Looks lonely!",isDm:!0,host:"Looks lonely!"},{roomName:"No friends?",isDm:!1,host:"NaN"}]),R=Object(s.a)(N,2),D=R[0],L=R[1];return Object(a.useEffect)((function(){b.a.get("http://localhost:8000/api/user/isloggedin",{withCredentials:!0}).then((function(){g(!0)})).catch(g(!1))}),[y]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{pageHeader:"",setOpen:r,open:o,setLoginOpen:u,loginOpen:l,registerOpen:p,setRegisterOpen:m,isLoggedIn:f,count:y,setCount:k,userRooms:D,setUserRooms:L,setLoggedIn:g,dashboard:!0}),Object(x.jsx)(S,{open:o,setOpen:r,isLoggedIn:f,newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen,userRooms:D,setUserRooms:L}),Object(x.jsx)(M,{newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen}),Object(x.jsx)(A,{loginOpen:l,setLoginOpen:u,count:y,setCount:k,setUserName:e.setUserName}),Object(x.jsx)(V,{registerOpen:p,setRegisterOpen:m,count:y,setCount:k}),Object(x.jsx)(U,{})]})},W=n(149),Y=n(17),G=n(306),J=n(290),z=n(277),Q=n(276),Z=n(292),K=n(5),q=n(307),X=n(82),$=n.n(X),ee=n(289),te=n(150),ne=n(285),ae=function(e){var t=Object(a.useState)(null),n=Object(s.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),l=i[0],u=i[1],d=Boolean(o),j=Object(g.f)(),p=function(){r(null)},m=function(t){b.a.get("http://localhost:8000/room/dmroom/"+f.a.get("userName")+"/"+t).then((function(n){0===n.data.room.length?(b.a.post("http://localhost:8000/room/create",{roomName:Math.random().toString(36).slice(2),users:[f.a.get("userName"),t],isDm:!0,host:f.a.get("userName")}).then((function(e){console.log(),b.a.put("http://localhost:8000/api/user/addroom/",{room:e.data.room,userName:f.a.get("userName")},{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)})),b.a.put("http://localhost:8000/api/user/addroom/",{room:e.data.room,userName:t},{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e.response)})),j.push("/chatroom/"+e.data.room._id)})).catch((function(e){return console.log(e.response)})),e.socket.emit("sendDm",t)):(u(!0),p(),j.push("/chatroom/"+n.data.room[0]._id))})).catch((function(e){return console.log(e)}))};return Object(x.jsxs)("div",{children:[Object(x.jsx)(ee.a,{label:e.userName,component:"a","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":d?"true":void 0,clickable:!0,onClick:function(e){r(e.currentTarget)}}),Object(x.jsxs)(te.a,{id:"basic-menu",anchorEl:o,open:d,onClose:p,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(x.jsx)(ne.a,{onClick:function(){return m(e.userName)},children:"Direct message"}),Object(x.jsx)(ne.a,{onClick:function(){return t=e.userName,m(t),void b.a.get("http://localhost:8000/api/user/name/"+t,{withCredentials:!0}).then((function(t){var n=t.data.user;e.socket.emit("start_call",{userInfo:n,caller:f.a.get("userName")})})).catch((function(e){return console.log(e)}));var t},children:"Call"})]}),Object(x.jsx)(B.a,{message:"You already have a DM with this person!",open:l,onClose:function(){u(!1)}})]})},oe=n(32),re=n.n(oe),se=n(56),ce=n(281),ie=function(e){var t={video:{width:480,height:320},audio:!0},n={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:turn.bistri.com:80",credential:"homeo",username:"homeo"},{url:"turn:turn.anyfirewall.com:443?transport=tcp",credential:"webrtc",username:"webrtc"}]},o=Object(a.useState)(e.roomInfo._id),r=Object(s.a)(o,2),c=r[0],i=r[1],l=Object(a.useState)(""),u=Object(s.a)(l,2),j=u[0],p=u[1],m=Object(a.useState)(1),h=Object(s.a)(m,2),b=h[0],O=h[1],f=Object(a.useState)(""),g=Object(s.a)(f,2),v=g[0],w=g[1],C=Object(a.useState)(1),y=Object(s.a)(C,2),k=y[0],N=y[1],R=function(){var n=Object(se.a)(re.a.mark((function n(a){var o,r;return re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),o=document.getElementById("localVid"),n.prev=2,n.next=5,navigator.mediaDevices.getUserMedia(t);case 5:r=n.sent,o.srcObject=r,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),console.log("Error getting local media.",n.t0);case 12:e.socket.emit("call",c);case 14:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(a.useEffect)((function(){var a,o=new RTCPeerConnection(n),r=document.getElementById("remoteVid");function s(e){return l.apply(this,arguments)}function l(){return l=Object(se.a)(re.a.mark((function e(t){var n,r;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("localVid"),e.prev=1,e.next=4,navigator.mediaDevices.getUserMedia(t);case 4:n=e.sent,a=n,r.srcObject=n,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error getting local media.",e.t0);case 12:u(o),r.srcObject=n;case 15:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function u(e){console.log(a),a.getTracks().forEach((function(t){e.addTrack(t,a)}))}function d(e){return j.apply(this,arguments)}function j(){return j=Object(se.a)(re.a.mark((function t(n){var a;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.createOffer();case 3:a=t.sent,n.setLocalDescription(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:e.socket.emit("offer",{type:"offer",sdp:a,roomId:c});case 12:case"end":return t.stop()}}),t,null,[[0,7]])}))),j.apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return m=Object(se.a)(re.a.mark((function t(n){var a;return re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.createAnswer();case 3:a=t.sent,n.setLocalDescription(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:e.socket.emit("answer",{type:"answer",sdp:a,roomId:c});case 12:case"end":return t.stop()}}),t,null,[[0,7]])}))),m.apply(this,arguments)}function h(e){r.srcObject=e.streams[0],console.log(e)}function b(t){t.candidate&&e.socket.emit("ice_candidate",{roomId:c,label:t.candidate.sdpMLineIndex,candidate:t.candidate.candidate})}i(e.roomInfo._id),e.socket.on("call",Object(se.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return console.log("client call"),o.ontrack=h,o.onicecandidate=b,e.next=7,d(o);case 7:console.log("Client call event end.");case 8:case"end":return e.stop()}}),e)})))),e.socket.on("offer",function(){var e=Object(se.a)(re.a.mark((function e(n){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Client offer event start."),e.next=3,s(t);case 3:return o.ontrack=h,e.next=6,o.setRemoteDescription(new RTCSessionDescription(n));case 6:return o.onicecandidate=b,e.next=9,p(o);case 9:console.log("Client offer event end.");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.socket.on("answer",(function(e){console.log("Client answer event start."),o.setRemoteDescription(new RTCSessionDescription(e)),console.log("Client answer event end.")})),e.socket.on("ice_candidate",(function(e){console.log("Client ice candidate event start.");var t=new RTCIceCandidate({sdpMLineIndex:e.label,candidate:e.candidate});console.log(t),o.addIceCandidate(t)})),e.socket.on("effectChange",(function(e){w(e),N(1)})),e.socket.on("effectValueChange",(function(e){N(e)}))}),[]),Object(x.jsxs)(Q.a,{style:{minHeight:"65vh",minWidth:"300px",backgroundColor:"#dce7e8",maxHeight:"600px",marginTop:"40px",overflowY:"none",alignItems:"space-evenly",borderRadius:"10px",padding:"30px",display:"flex",justifyContent:"space-evenly",flexDirection:"column"},children:[Object(x.jsx)("video",{id:"remoteVid",autoPlay:!0,preload:"auto",controls:!0,style:{margin:"10px 0",borderRadius:"15px",WebkitFilter:"blur"===v?"blur("+k+"px)":"grayscale"===v?"grayscale("+k+")":"saturate"===v?"saturate("+k+")":"negative"===v?"invert("+k+")":"sepia"===v?"sepia("+k+")":"contrast"===v?"contrast("+k+")":""}}),Object(x.jsx)("video",{id:"localVid",autoPlay:!0,preload:"auto",controls:!0,style:{margin:"10px 0",borderRadius:"15px",WebkitFilter:"blur"===j?"blur("+b+"px)":"grayscale"===j?"grayscale("+b+")":"saturate"===j?"saturate("+b+")":"negative"===j?"invert("+b+")":"sepia"===j?"sepia("+b+")":"contrast"===j?"contrast("+b+")":""}}),Object(x.jsxs)(J.a,{container:!0,spacing:1,children:[Object(x.jsx)(J.a,{item:!0,xs:9,children:Object(x.jsxs)(ce.a,{style:{width:"100%"},value:j,onChange:function(t){O(1),p(t.target.value),e.socket.emit("effectChange",{roomId:c,effect:t.target.value})},label:"Effects",id:"select-effects",variant:"filled",children:[Object(x.jsx)(ne.a,{value:"",defaultChecked:!0,children:"None"}),Object(x.jsx)(ne.a,{value:"blur",children:"Blur"}),Object(x.jsx)(ne.a,{value:"grayscale",children:"Black & White"}),Object(x.jsx)(ne.a,{value:"saturate",children:"Saturate"}),Object(x.jsx)(ne.a,{value:"negative",children:"Negative"}),Object(x.jsx)(ne.a,{value:"contrast",children:"Contrast"})]})}),Object(x.jsx)(J.a,{item:!0,xs:3,children:Object(x.jsx)(I.a,{id:"standard-number",value:b,onChange:function(t){O(t.target.value),e.socket.emit("effectValueChange",{roomId:c,effectValue:b})},label:"Value",type:"number",inputProps:{min:"0",max:"50",step:"0.1"},InputLabelProps:{shrink:!0},style:{width:"90%"},variant:"filled"})})]}),Object(x.jsx)(d.a,{onClick:function(e){return R(e)},variant:"contained",color:"secondary",children:"Call"})]})},le=function(e){var t=Object(g.f)(),n=Object(a.useState)((function(){return $()(":8000")})),o=Object(s.a)(n,1)[0],r=function(t){t.preventDefault(),e.setCallOpen(!1)};return Object(x.jsxs)(P.a,{open:e.open,onClose:function(e){return r(e)},children:[Object(x.jsxs)(_.a,{children:["You're recieving a call from ",e.caller,"!"]}),Object(x.jsx)(T.a,{children:Object(x.jsx)(F.a,{children:"Answer it or decline it, the choice is yours."})}),Object(x.jsxs)(E.a,{style:{margin:"0 auto"},children:[Object(x.jsx)(d.a,{onClick:function(e){return r(e)},style:{marginRight:"15px"},children:"Decline"}),Object(x.jsx)(d.a,{variant:"contained",onClick:function(n){return function(n){n.preventDefault(),b.a.get("http://localhost:8000/room/dmroom/"+e.caller+"/"+f.a.get("userName"),{withCredentials:!0}).then((function(e){t.push("/chatroom/"+e.data.room[0]._id),console.log("hello"),o.emit("call",e.data.room[0]._id)})).catch((function(e){return console.log(e)})),e.setCallOpen(!1)}(n)},children:"Accept"})]})]})},ue=function(e){var t=Object(K.a)(Z.a)((function(e){var t=e.theme;return Object(L.a)(Object(L.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"left",color:t.palette.text.secondary})})),n=Object(a.useState)((function(){return $()("http://localhost:8000")})),o=Object(s.a)(n,1)[0],r=Object(a.useState)([]),c=Object(s.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(!1),j=Object(s.a)(u,2),p=j[0],m=j[1],h=Object(a.useState)(!1),O=Object(s.a)(h,2),w=O[0],C=O[1],y=Object(a.useState)(!1),k=Object(s.a)(y,2),N=k[0],R=k[1],D=Object(a.useState)(!0),P=Object(s.a)(D,2),E=P[0],T=P[1],F=Object(a.useState)(0),_=Object(s.a)(F,2),A=_[0],B=_[1],U=Object(a.useState)([]),V=Object(s.a)(U,2),H=V[0],W=V[1],X=Object(a.useState)(""),ee=Object(s.a)(X,2),te=ee[0],ne=ee[1],oe=Object(a.useState)(""),re=Object(s.a)(oe,2),se=re[0],ce=re[1],ue=Object(a.useState)(!1),de=Object(s.a)(ue,2),je=de[0],pe=de[1],me=Object(g.g)().id,he=function(e){var t=document.getElementById("messageBox");if(""!==t.value){var n={userName:f.a.get("userName"),message:t.value,roomId:me};e.preventDefault(),o.emit("sendMessage",n),l([n].concat(Object(Y.a)(i))),t.value="",b.a.post("http://localhost:8000/message/create",n,{withCredentials:!0}).then((function(e){return e})).catch((function(e){return console.log(e.response)}))}else e.preventDefault()};return Object(a.useEffect)((function(){return o.disconnect(!0),o.connect(),b.a.get("http://localhost:8000/room/"+me,{withCredentials:!0}).then((function(e){ne(e.data.room)})).catch((function(e){return console.log(e)})),b.a.get("http://localhost:8000/message/getmessages/"+me,{withCredentials:!0}).then((function(e){l(e.data.messages.reverse())})).catch((function(e){return console.log(e.response)})),o.on("connect",(function(){console.log(o.id),b.a.put("http://localhost:8000/api/user/updatesocket",{userName:f.a.get("userName"),socket:o.id},{withCredentials:!0}).then((function(e){return e})).catch((function(e){return console.log(e)}))})),o.on("recieveMessage",(function(e){b.a.get("http://localhost:8000/message/getmessages/"+e,{withCredentials:!0}).then((function(e){l(Object(Y.a)(e.data.messages.reverse()))})).catch((function(e){return console.log(e.response)}))})),o.on("recieving_call",(function(e){ce(e),pe(!0)})),o.emit("join",me),function(){return o.disconnect(!0)}}),[me,o]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{setOpen:m,open:p,setLoginOpen:C,loginOpen:w,registerOpen:N,setRegisterOpen:R,isLoggedIn:E,count:A,setCount:B,userRooms:H,setUserRooms:W,setLoggedIn:T,pageHeader:te.isDm?te.host===f.a.get("userName")?te.users[1]:te.host:te.roomName}),Object(x.jsx)(M,{newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen,setOpen:m}),Object(x.jsx)(S,{open:p,setOpen:m,userRooms:H,setUserRooms:W,isLoggedIn:E,newRoomOpen:e.newRoomOpen,setNewRoomOpen:e.setNewRoomOpen}),Object(x.jsx)(G.a,{maxWidth:"xlg",children:Object(x.jsxs)(J.a,{container:!0,spacing:3,alignItems:"stretch",children:[te.isDm?Object(x.jsx)(J.a,{item:!0,xlg:2,lg:4,md:6,sm:12,xs:12,children:Object(x.jsx)(ie,{socket:o,style:{marginRight:"30px"},roomInfo:te})}):"",Object(x.jsxs)(J.a,{item:!0,xlg:te.isDm?12:10,lg:te.isDm?8:12,md:te.isDm?6:12,sm:(te.isDm,12),xs:(te.isDm,12),children:[Object(x.jsx)(Q.a,{style:{backgroundColor:"#dce7e8",maxHeight:"500px",marginTop:"40px",overflowY:"auto",minHeight:"60vh",borderRadius:"10px",padding:"30px",display:"flex",flexDirection:"column-reverse"},children:Object(x.jsx)(z.a,{direction:"column-reverse",justifyContent:"space-evenly",alignItems:"stretch",spacing:2,children:i.slice(0,40).map((function(e,n){return Object(x.jsxs)(t,{children:[Object(x.jsxs)("h4",{style:{marginLeft:"5px",display:"flex",flexFlow:"row nowrap",alignItems:"center"},children:[Object(x.jsx)(ae,{userName:e.userName,socket:o}),Object(x.jsxs)("small",{children:[" - ",e.createdAt?new Date(e.createdAt).toLocaleString():(new Date).toLocaleString()]})]}),Object(x.jsx)("p",{style:{marginLeft:"15px",color:"black"},children:e.message})]},n)}))})}),Object(x.jsx)(I.a,{focused:!0,fullWidth:!0,multiline:!0,id:"messageBox",onKeyPress:function(e){return"Enter"===e.key?he(e):null},maxRows:4,InputProps:{endAdornment:Object(x.jsx)(q.a,{position:"end",children:Object(x.jsx)(d.a,{variant:"contained",onClick:function(e){return he(e)},children:"Submit"})})},style:{marginBottom:"40px"}})]})]})}),Object(x.jsx)(le,{open:je,caller:se,setCallOpen:pe})]})};var de=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(W.a,{children:Object(x.jsxs)(g.c,{children:[Object(x.jsx)(g.a,{path:"/chatroom/:id",children:Object(x.jsx)(ue,{newRoomOpen:n,setNewRoomOpen:o})}),Object(x.jsx)(g.a,{path:"/",children:Object(x.jsx)(H,{newRoomOpen:n,setNewRoomOpen:o})})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,308)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};r.a.render(Object(x.jsx)(de,{}),document.getElementById("root")),je()}},[[226,1,2]]]);
//# sourceMappingURL=main.d5307c19.chunk.js.map