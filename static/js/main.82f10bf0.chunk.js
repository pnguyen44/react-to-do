(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){e.exports=n(223)},107:function(e,t,n){},108:function(e,t,n){},168:function(e,t,n){e.exports=n.p+"static/media/to-do-icon.a92de81b.png"},223:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(38),s=n.n(r),i=(n(107),n(17)),l=n(11),c=n(19),d=n(18),u=n(20),m=n(42),p=n(27),h=(n(108),n(83)),f=n.n(h),b=n(85),g=n.n(b),v=n(41),y=n.n(v),E={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},link:{float:"right",marginRight:30,color:"white"}},k=function(){return o.a.createElement("div",{style:E.root},o.a.createElement(f.a,{position:"static"},o.a.createElement(g.a,null,o.a.createElement("img",{src:n(168),alt:"app-logo",style:{width:"58px",marginLeft:"1vw",paddingRight:"14px"}}),o.a.createElement(y.a,{variant:"h6",color:"inherit",style:E.grow},"On Track"),o.a.createElement(m.b,{className:"material-icons",style:E.link,to:"/"},"home"),o.a.createElement(m.b,{style:E.link,to:"/Todos"},"Todos"))))},C=n(32),T=n(34),j="https://on-track-api.herokuapp.com",O="http://localhost:8000",w="localhost"===window.location.hostname?O:j,x=function(e,t){return fetch(w+"/todos/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:!t.completed})})},N=function(e){return fetch(w+"/todos/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,completed:!1})})},S=function(e,t){return fetch(w+"/todos/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})})},D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(T.a)({},a,o))},n.handleSubmit=function(e){e.preventDefault(),n.onCreateTodo(n.state.name),n.setState({name:""})},n.onCreateTodo=function(e){e&&N(e).then(function(e){return e.json()}).then(function(e){n.props.setTodos({todos:[].concat(Object(C.a)(n.state.todos),[e])})})},n.state={name:"",todos:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{style:P.form,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"name",required:!0,value:this.state.name,style:P.nameInput,placeholder:"Add item",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"add_circle",className:"btn material-icons",style:{flex:"1"}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.todos!==t.todos?{todos:e.todos}:null}}]),t}(a.Component),P={nameInput:{border:"1px solid black",flex:"36",padding:"10px"},form:{display:"flex",marginBottom:20}},A=D,B=n(43),R=n.n(B),M=n(63),W=n(87),_=n.n(W),F=n(28),G=n.n(F),J=n(88),L=n.n(J),q=n(89),H=n(9),I=n.n(H),U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).onUpdateCompleted=function(e,t){x(e,t).then(function(e){return e.json()}).then(function(t){n.setState({todos:n.state.todos.map(function(n){return n._id===e&&(n.completed=t.completed),n})})})},n.onRenameTodo=function(e,t){if(!t)return n.flash("Name Required","flash-error");S(e,t)},n.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},n.disableNewlines=function(e){13===(e.keyCode||e.which)&&(e.returnValue=!1,e.preventDefault&&e.preventDefault())},n.handleChange=function(e){var t,a=e.target.value;t=a?a.replace(/&nbsp;/g,"").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<br>/g,""):"",n.setState({name:t})},n.toggleEditable=function(){n.setState({editable:!n.state.editable})},n.handleDoneBtnClick=function(){var e=n.props.flash;if(!n.state.name)return e("Name Required","flash-error");n.toggleEditable(),n.onRenameTodo(n.id,n.state.name)},n.handleCancelClick=function(){var e=n.state.todo.name;n.setState({name:e}),n.toggleEditable()},n.state={editable:!1,name:e.item.name,todo:e.item,todos:[]},n.id=n.props.item._id,n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onDeleteTodo",value:function(e){var t=this,n=Object(C.a)(this.state.todos.filter(function(t){return t._id!==e}));(function(e){return fetch(w+"/todos/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}})})(e).then(function(){t.props.setTodos({todos:n})})}},{key:"render",value:function(){var e={backgroundColor:this.state.editable?"lightyellow":null,textDecoration:this.state.todo.completed?"line-through":"none",minWidth:10,display:"inline-block"},t={background:"rgba(0, 0, 0, 0)",border:"none",fontSize:25,cursor:"pointer",fontWeight:900,justifyContent:"flex-end"},n=this.props.item._id,a=this.state.editable,r=this.props.classes;return o.a.createElement(L.a,{className:I()(r.customTableStyle),hover:!0},o.a.createElement(G.a,{padding:"checkbox",align:"center",className:r.checkboxCol},o.a.createElement("input",{type:"checkbox",checked:this.props.item.completed,onChange:this.onUpdateCompleted.bind(this,n,this.props.item)})),o.a.createElement(G.a,{align:"left",padding:"none"},o.a.createElement(_.a,{html:this.state.name,disabled:!this.state.editable,onChange:this.handleChange,onPaste:this.pasteAsPlainText,onKeyPress:this.disableNewlines,tagName:"span",style:e})),a?o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,type:"submit",className:"material-icons",onClick:this.handleDoneBtnClick},"done")),o.a.createElement(G.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,className:"material-icons",onClick:this.handleCancelClick},"cancel"))):o.a.createElement(o.a.Fragment,null,o.a.createElement(G.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,className:"material-icons",onClick:this.toggleEditable},"edit")),o.a.createElement(G.a,{align:"center",padding:"none",className:r.btnCol},o.a.createElement("button",{style:t,className:"material-icons",onClick:this.onDeleteTodo.bind(this,this.id)}," delete"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.todos!==t.todos?{todos:e.todos}:null}}]),t}(a.Component),z=Object(q.a)({customTableStyle:{backgroundColor:"#d9e4f29e","&:nth-of-type(odd)":{backgroundColor:"#dae4f2"}},btnCol:{width:"1%"},checkboxCol:{width:"1%"}})(U),K=n(90),V=n.n(K),X=n(92),$=n.n(X),Q=n(91),Y=n.n(Q),Z=n(39),ee=n.n(Z),te=n(50),ne=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={todos:e.todos},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onGetTodos",value:function(){var e=Object(M.a)(R.a.mark(function e(){var t=this;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/todos",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({todos:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(M.a)(R.a.mark(function e(){return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetTodos();case 2:this.props.setTodos({todos:this.state.todos});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.todos!==e.todos&&this.setState({todos:this.props.todos})}},{key:"render",value:function(){var e=this.props,t=e.flash,n=e.setTodos,a=this.state.todos,r=this.props.classes,s=a.map(function(e){return o.a.createElement(z,{key:e._id,item:e,flash:t,todos:a,setTodos:n})});return o.a.createElement(ee.a,{className:r.root},o.a.createElement("div",{className:r.tableWrapper},o.a.createElement(V.a,{className:r.table},o.a.createElement(Y.a,null),o.a.createElement($.a,null,s))))}}]),t}(a.Component),ae=Object(te.withStyles)(function(e){return{root:{width:"100%"},table:{},tableWrapper:{overflowX:"auto"}}})(ne),oe=n(3),re=n.n(oe),se=n(94),ie=n.n(se),le=n(93),ce=n.n(le),de=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleclick=function(){n.props.history.push("/Todos")},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(ce.a,{item:!0,xs:12},o.a.createElement(ee.a,{className:e.root,elevation:1},o.a.createElement(y.a,{variant:"h2",component:"h3"},"On Track"),o.a.createElement("br",null),o.a.createElement(y.a,{component:"h2",variant:"headline",gutterBottom:!0},"A simple todo app."),o.a.createElement("br",null),o.a.createElement(ie.a,{variant:"contained",color:"primary",className:e.button,onClick:this.handleclick},"Get Started"))))}}]),t}(o.a.Component);de.contextTypes={router:re.a.object};var ue=Object(te.withStyles)(function(e){var t;return{root:(t={backgroundColor:"#d9e4f2",textAlign:"center"},Object(T.a)(t,e.breakpoints.up("lg"),{margin:"30px 250px",padding:50}),Object(T.a)(t,e.breakpoints.up("md"),{margin:"30px 250px",padding:50}),Object(T.a)(t,e.breakpoints.down("sm"),{paddingTop:4*e.spacing.unit,paddingBottom:4*e.spacing.unit}),t)}})(de),me=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).setTodos=function(e){n.setState(e)},n.flash=function(e,t){n.setState({flashMessage:e,flashType:t}),clearTimeout(n.messageTimeout),n.messageTimeout=setTimeout(function(){return n.setState({flashMessage:null})},2e3)},n.state={todos:[],flashMessage:"",flashType:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.flashMessage,a=t.flashType,r=t.todos;return o.a.createElement(m.a,null,o.a.createElement(k,null),o.a.createElement("div",{className:"container"},n&&o.a.createElement("h3",{className:a},n),o.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(ue,e)}}),o.a.createElement(p.a,{exact:!0,path:"/Todos",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{setTodos:e.setTodos,todos:r}),o.a.createElement("div",{className:"todo-list"},o.a.createElement(ae,{flash:e.flash,setTodos:e.setTodos,todos:r})))}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,1,2]]]);
//# sourceMappingURL=main.82f10bf0.chunk.js.map