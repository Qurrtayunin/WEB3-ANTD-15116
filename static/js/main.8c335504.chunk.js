(this.webpackJsonpweb2react=this.webpackJsonpweb2react||[]).push([[0],{108:function(e,t,a){},135:function(e,t,a){e.exports=a(230)},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},217:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),c=a.n(i),r=(a(140),a(8)),s=a(9),o=a(11),m=a(10),u=a(12),h=(a(141),a(234)),p=(a(142),a(38)),d=(h.a.SubMenu,function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={current:"mail"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"menuBar"},l.a.createElement(h.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},l.a.createElement(h.a.Item,{key:"mail"},l.a.createElement(p.b,{to:"/"},"Home")),l.a.createElement(h.a.Item,{key:"app"},l.a.createElement(p.b,{to:"/card"},"Card Member"))))}}]),t}(n.Component)),f=a(34),k=(a(108),a(232)),g=a(53),E=a(19),b=[{title:"Qurrota A'yunin",desc:"Mobile Dev"},{title:"Cintya Agusti A",desc:"UI/UX Designer"},{title:"Afida Rindy",desc:"Web Dev"}],v=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={like:20,unlike:3},a.handleCounterChange=function(e){a.props.onCounterChange(e)},a.handleLike=function(){a.setState({like:a.state.like+1},(function(){a.props.onCounterChange(a.state.like)}))},a.handleUnlike=function(){a.setState({unlike:a.state.unlike+1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"set-card"},l.a.createElement(k.a,{bordered:!1},l.a.createElement(g.a,null,l.a.createElement(E.a,{xs:{span:5,offset:1},lg:{span:6,offset:2}},b.map((function(t){return l.a.createElement(k.a,{style:{width:230},cover:l.a.createElement("img",{className:"padding-img",alt:"example",src:"https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"}),actions:[l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/633/633759.svg",width:"15px",height:"15px",onClick:e.handleLike}),l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/633/633758.svg",width:"15px",height:"15px",onClick:e.handleUnlike})]},l.a.createElement("p",{className:"title"},l.a.createElement("b",null,t.title)),l.a.createElement("p",{className:"desc"},t.desc),l.a.createElement("p",{className:"ket"}," ",e.state.like," menyukai,  ",e.state.unlike," tidak menyukai"))}))),l.a.createElement(E.a,{xs:{span:11,offset:1},lg:{span:6,offset:2}},b.map((function(t){return l.a.createElement(k.a,{style:{width:230},cover:l.a.createElement("img",{className:"padding-img",alt:"example",src:"https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"}),actions:[l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/633/633759.svg",width:"15px",height:"15px",onClick:e.handleLike}),l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/633/633758.svg",width:"15px",height:"15px",onClick:e.handleUnlike})]},l.a.createElement("p",{className:"title"},l.a.createElement("b",null,t.title)),l.a.createElement("p",{className:"desc"},t.desc),l.a.createElement("p",{className:"ket"}," ",e.state.like," menyukai,  ",e.state.unlike," tidak menyukai"))}))),l.a.createElement(E.a,{xs:{span:5,offset:1},lg:{span:6,offset:2}},b.map((function(t){return l.a.createElement(k.a,{style:{width:230},cover:l.a.createElement("img",{className:"padding-img",alt:"example",src:"https://image.freepik.com/free-vector/fashion-illustration-with-female-model_23-2148223276.jpg"}),actions:[l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/633/633759.svg",width:"15px",height:"15px",onClick:e.handleLike}),l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/633/633758.svg",width:"15px",height:"15px",onClick:e.handleUnlike})]},l.a.createElement("p",{className:"title"},l.a.createElement("b",null,t.title)),l.a.createElement("p",{className:"desc"},t.desc),l.a.createElement("p",{className:"ket"}," ",e.state.like," menyukai,  ",e.state.unlike," tidak menyukai"))})))),",")))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={like:20,unlike:3},a.handleCounterChange=function(e){a.setState({like:e})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"set-card"},l.a.createElement(k.a,null,l.a.createElement("p",null,l.a.createElement("b",null,"Total Penilaian :")),l.a.createElement("p",{className:"nomargin"},"Qurrota A'yunin  ",l.a.createElement("i",null,l.a.createElement("b",null," ",this.state.like," Vote Suka"))),l.a.createElement("p",{className:"nomargin"},"Cintya Agusti A  ",l.a.createElement("i",null,l.a.createElement("b",null," ",this.state.like," Vote Suka"))),l.a.createElement("p",{className:"nomargin"},"Afida Rindy      ",l.a.createElement("i",null,l.a.createElement("b",null," ",this.state.like," Vote Suka"))))),l.a.createElement(v,{onCounterChange:function(t){return e.handleCounterChange(t)}}))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(y,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),t}(n.Component),j=(a(217),a(231)),C=a(233),w=(j.a.Header,j.a.Content),N=(j.a.Footer,C.a.Title),x=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,{className:"layout"},l.a.createElement(w,{className:"content"},l.a.createElement("div",{className:"site-layout-content"},l.a.createElement(g.a,null,l.a.createElement(E.a,{span:12,className:"padding"},l.a.createElement(N,{level:1},"Hi ! "),l.a.createElement("p",null,"Saya Qurrota A'yunin mahasiswa D3 Komputer dan Sistem Infromasi, Website ini merupakan tugas dari Praktikum Website 3 yaitu membuat tampilan website menggunakan komponen komponen Ant Design, menerapkan update parent oleh child komponen, dan yang terakhir menerapkan routing dan deploy."),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("p",null,"Qurrota A'yunin",l.a.createElement("br",null),"18/425974/SV/15116")),l.a.createElement(E.a,{span:12},l.a.createElement("img",{src:"https://image.freepik.com/free-vector/usability-testing-concept-illustration_114360-1571.jpg",width:"350px",height:"350px"})))))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement(x,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/",component:A}),l.a.createElement(f.a,{path:"/card",component:O}))}}]),t}(n.Component),M=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(S,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p.a,{basename:"/WEB3-ANTD-15116"},l.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[135,1,2]]]);
//# sourceMappingURL=main.8c335504.chunk.js.map