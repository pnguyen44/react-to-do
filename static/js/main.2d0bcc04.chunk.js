(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,t,n){e.exports=n(284)},128:function(e,t,n){},129:function(e,t,n){},242:function(e,t,n){e.exports=n.p+"static/media/to-do-icon.a92de81b.png"},284:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),s=n.n(r),l=(n(128),n(18)),i=n(16),c=n(21),d=n(19),u=n(22),m=n(28),p=n(32),h=(n(129),n(27)),b=n(39),f=n(104),g=n.n(f),E=n(105),v=n.n(E),y=n(45),k=n.n(y),C=n(69),j=n.n(C),O=n(101),T=n.n(O),w=n(107),x=n.n(w),N=n(68),S=n.n(N),M=n(106),D=n.n(M),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={mobileAnchorEl:null},n.handleMobileMenuOpen=function(e){n.setState({mobileAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileAnchorEl:null})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.mobileAnchorEl,t=this.props.classes,a=o.a.createElement(T.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleMobileMenuClose},o.a.createElement(m.b,{to:"/"},o.a.createElement(S.a,{onClick:this.handleMobileMenuClose},"Home")),o.a.createElement(m.b,{to:"/todos"},o.a.createElement(S.a,{onClick:this.handleMobileMenuClose},"Todos")));return o.a.createElement("div",{className:t.root},o.a.createElement(g.a,{position:"static"},o.a.createElement(v.a,null,o.a.createElement("img",{src:n(242),alt:"app-logo",style:{width:"58px",marginLeft:"1vw",paddingRight:"14px"}}),o.a.createElement(k.a,{variant:"h6",color:"inherit",className:t.grow},"On Track"),o.a.createElement("div",{className:t.desktopMenu},o.a.createElement(j.a,{color:"inherit",className:t.link,component:m.b,to:"/"},o.a.createElement(D.a,null)),o.a.createElement(m.b,{className:t.link,to:"/todos"},"Todos")),o.a.createElement("div",{className:t.mobileMenu},o.a.createElement(j.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(x.a,null)),a))))}}]),t}(o.a.Component),P=Object(b.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},link:{marginRight:15,color:"white"},mobileMenu:Object(h.a)({},e.breakpoints.between("md","lg"),{display:"none"}),desktopMenu:Object(h.a)({},e.breakpoints.between("xs","sm"),{display:"none"})}})(A),B=n(40),R="https://on-track-api.herokuapp.com",W="http://localhost:8000",_="localhost"===window.location.hostname?W:R,F=function(e,t){return fetch(_+"/todos/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:!t.completed})})},G=function(e){return fetch(_+"/todos/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,completed:!1})})},J=function(e,t){return fetch(_+"/todos/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})})},H=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(h.a)({},a,o))},n.handleSubmit=function(e){e.preventDefault(),n.onCreateTodo(n.state.name),n.setState({name:""})},n.onCreateTodo=function(e){e&&G(e).then(function(e){return e.json()}).then(function(e){n.props.setTodos({todos:[].concat(Object(B.a)(n.state.todos),[e])})})},n.state={name:"",todos:[]},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{style:q.form,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"name",required:!0,value:this.state.name,style:q.nameInput,placeholder:"Add item",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"add_circle",className:"btn material-icons",style:{flex:"1"}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.todos!==t.todos?{todos:e.todos}:null}}]),t}(a.Component),q={nameInput:{border:"1px solid black",flex:"36",padding:"10px"},form:{display:"flex",marginBottom:20}},I=H,L=n(46),U=n.n(L),z=n(70),K=n(108),V=n.n(K),X=n(33),$=n.n(X),Q=n(109),Y=n.n(Q),Z=n(110),ee=n(7),te=n.n(ee),ne=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).onUpdateCompleted=function(e,t){F(e,t).then(function(e){return e.json()}).then(function(t){n.setState({todos:n.state.todos.map(function(n){return n._id===e&&(n.completed=t.completed),n})})})},n.onRenameTodo=function(e,t){if(!t)return n.flash("Name Required","flash-error");J(e,t)},n.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},n.disableNewlines=function(e){13===(e.keyCode||e.which)&&(e.returnValue=!1,e.preventDefault&&e.preventDefault())},n.handleChange=function(e){var t,a=e.target.value;t=a?a.replace(/&nbsp;/g,"").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<br>/g,""):"",n.setState({name:t})},n.toggleEditable=function(){n.setState({editable:!n.state.editable})},n.handleDoneBtnClick=function(){var e=n.props.flash;if(!n.state.name)return e("Name Required","flash-error");n.toggleEditable(),n.onRenameTodo(n.id,n.state.name)},n.handleCancelClick=function(){var e=n.state.todo.name;n.setState({name:e}),n.toggleEditable()},n.state={editable:!1,name:e.item.name,todo:e.item,todos:[]},n.id=n.props.item._id,n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onDeleteTodo",value:function(e){var t=this,n=Object(B.a)(this.state.todos.filter(function(t){return t._id!==e}));(function(e){return fetch(_+"/todos/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}})})(e).then(function(){t.props.setTodos({todos:n})})}},{key:"render",value:function(){var e={backgroundColor:this.state.editable?"lightyellow":null,textDecoration:this.state.todo.completed?"line-through":"none",minWidth:10,display:"inline-block"},t={background:"rgba(0, 0, 0, 0)",border:"none",fontSize:25,cursor:"pointer",fontWeight:900,justifyContent:"flex-end"},n=this.props.item._id,a=this.state.editable,r=this.props.classes;return o.a.createElement(Y.a,{className:te()(r.customTableStyle),hover:!0},o.a.createElement($.a,{padding:"checkbox",align:"center",className:r.checkboxCol},o.a.createElement("input",{type:"checkbox",checked:this.props.item.completed,onChange:this.onUpdateCompleted.bind(this,n,this.props.item)})),o.a.createElement($.a,{align:"left",padding:"none"},o.a.createElement(V.a,{html:this.state.name,disabled:!this.state.editable,onChange:this.handleChange,onPaste:this.pasteAsPlainText,onKeyPress:this.disableNewlines,tagName:"span",style:e})),a?o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,type:"submit",className:"material-icons",onClick:this.handleDoneBtnClick},"done")),o.a.createElement($.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,className:"material-icons",onClick:this.handleCancelClick},"cancel"))):o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,className:"material-icons",onClick:this.toggleEditable},"edit")),o.a.createElement($.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,className:"material-icons",onClick:this.onDeleteTodo.bind(this,this.id)}," delete"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.todos!==t.todos?{todos:e.todos}:null}}]),t}(a.Component),ae=Object(Z.a)({customTableStyle:{backgroundColor:"#d9e4f29e","&:nth-of-type(odd)":{backgroundColor:"#dae4f2"}},btnCol:{width:"1%"},checkboxCol:{width:"1%"}})(ne),oe=n(111),re=n.n(oe),se=n(113),le=n.n(se),ie=n(112),ce=n.n(ie),de=n(38),ue=n.n(de),me=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={todos:e.todos},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"onGetTodos",value:function(){var e=Object(z.a)(U.a.mark(function e(){var t=this;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(_+"/todos",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({todos:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(z.a)(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetTodos();case 2:this.props.setTodos({todos:this.state.todos});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.todos!==e.todos&&this.setState({todos:this.props.todos})}},{key:"render",value:function(){var e=this.props,t=e.flash,n=e.setTodos,a=this.state.todos,r=this.props.classes,s=a.map(function(e){return o.a.createElement(ae,{key:e._id,item:e,flash:t,todos:a,setTodos:n})});return o.a.createElement(ue.a,{className:r.root},o.a.createElement("div",{className:r.tableWrapper},o.a.createElement(re.a,{className:r.table},o.a.createElement(ce.a,null),o.a.createElement(le.a,null,s))))}}]),t}(a.Component),pe=Object(b.withStyles)(function(e){return{root:{width:"100%"},table:{},tableWrapper:{overflowX:"auto"}}})(me),he=n(2),be=n.n(he),fe=n(115),ge=n.n(fe),Ee=n(114),ve=n.n(Ee),ye=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(ve.a,{item:!0,xs:12},o.a.createElement(ue.a,{className:e.root,elevation:1},o.a.createElement(k.a,{variant:"h2",component:"h3"},"On Track"),o.a.createElement("br",null),o.a.createElement(k.a,{component:"h2",variant:"headline",gutterBottom:!0},"A simple todo app."),o.a.createElement("br",null),o.a.createElement(ge.a,{variant:"contained",color:"primary",component:m.b,to:"/todos"},"Get Started"))))}}]),t}(o.a.Component);ye.contextTypes={router:be.a.object};var ke=Object(b.withStyles)(function(e){var t;return{root:(t={backgroundColor:"#d9e4f2",textAlign:"center"},Object(h.a)(t,e.breakpoints.up("lg"),{margin:"30px 250px",padding:50}),Object(h.a)(t,e.breakpoints.up("md"),{margin:"30px 250px",padding:50}),Object(h.a)(t,e.breakpoints.down("sm"),{paddingTop:4*e.spacing.unit,paddingBottom:4*e.spacing.unit}),t)}})(ye),Ce=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).setTodos=function(e){n.setState(e)},n.flash=function(e,t){n.setState({flashMessage:e,flashType:t}),clearTimeout(n.messageTimeout),n.messageTimeout=setTimeout(function(){return n.setState({flashMessage:null})},2e3)},n.state={todos:[],flashMessage:"",flashType:null},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.flashMessage,a=t.flashType,r=t.todos;return o.a.createElement(m.a,{basename:"on-track"},o.a.createElement(P,null),o.a.createElement("div",{className:"container"},n&&o.a.createElement("h3",{className:a},n),o.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(ke,e)}}),o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/todos",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{setTodos:e.setTodos,todos:r}),o.a.createElement("div",{className:"todo-list"},o.a.createElement(pe,{flash:e.flash,setTodos:e.setTodos,todos:r})))}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,1,2]]]);
//# sourceMappingURL=main.2d0bcc04.chunk.js.map