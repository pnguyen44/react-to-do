(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,n){e.exports=n.p+"static/media/to-do-icon.a92de81b.png"},153:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(55),r=n.n(s),i=(n(68),n(11)),l=n(12),c=n(14),d=n(13),u=n(15),m=n(24),h=n(16),p=(n(69),n(56)),f=n.n(p),b=n(58),g=n.n(b),y=n(59),v=n.n(y),E={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},link:{float:"right",marginRight:30,color:"white"}},k=function(){return o.a.createElement("div",{style:E.root},o.a.createElement(f.a,{position:"static"},o.a.createElement(g.a,null,o.a.createElement("img",{src:n(143),alt:"app-logo",style:{width:"58px",marginLeft:"1vw",paddingRight:"14px"}}),o.a.createElement(v.a,{variant:"h6",color:"inherit",style:E.grow},"On Track"),o.a.createElement(m.b,{className:"material-icons",style:E.link,to:"/"},"home"),o.a.createElement(m.b,{className:"material-icons",style:E.link,to:"/about"},"info"))))},T=n(33),j=n(61),C="https://on-track-api.herokuapp.com",O="http://localhost:8000",w="localhost"===window.location.hostname?O:C,x=function(e,t){return fetch(w+"/items/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:!t.completed})})},S=function(e){return fetch(w+"/items/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,completed:!1})})},N=function(e,t){return fetch(w+"/items/"+e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t})})},D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(j.a)({},a,o))},n.handleSubmit=function(e){e.preventDefault(),n.onCreateTodo(n.state.name),n.setState({name:""})},n.onCreateTodo=function(e){e&&S(e).then(function(e){return e.json()}).then(function(e){n.props.setTodos({todos:[].concat(Object(T.a)(n.state.todos),[e])})})},n.state={name:"",todos:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{style:{display:"flex"},onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"name",required:!0,value:this.state.name,style:{flex:"36",padding:"10px"},placeholder:"Add item",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"add_circle",className:"btn material-icons",style:{flex:"1"}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.todos!==t.todos?{todos:e.todos}:null}}]),t}(a.Component),P={textAlign:"center"};var B=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{style:P},"A to-do app built using react."))},A=n(25),F=n.n(A),R=n(40),M=n(23),_=n(62),J=n.n(_),G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).onUpdateCompleted=function(e,t){x(e,t).then(function(e){return e.json()}).then(function(t){n.setState({todos:n.state.todos.map(function(n){return n._id===e&&(n.completed=t.completed),n})})})},n.onRenameTodo=function(e,t){if(!t)return n.flash("Name Required","flash-error");N(e,t)},n.pasteAsPlainText=function(e){e.preventDefault();var t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},n.disableNewlines=function(e){13===(e.keyCode||e.which)&&(e.returnValue=!1,e.preventDefault&&e.preventDefault())},n.handleChange=function(e){var t,a=e.target.value;t=a?a.replace(/&nbsp;/g,"").replace(/&amp;/g,"&").replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/<br>/g,""):"",n.setState({name:t})},n.toggleEditable=function(){n.setState({editable:!n.state.editable})},n.handleDoneBtnClick=function(){var e=n.props.flash;if(!n.state.name)return e("Name Required","flash-error");n.toggleEditable(),n.onRenameTodo(n.id,n.state.name)},n.handleCancelClick=function(){var e=n.state.todo.name;n.setState({name:e}),n.toggleEditable()},n.getStyles=function(){return{background:"#3f51b530",padding:"10px",borderBottom:"1px white solid",textDecoration:n.props.item.completed?"line-through":"none"}},n.renderBtns=function(){return n.state.editable?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{style:q,className:"material-icons",onClick:n.handleCancelClick},"cancel"),o.a.createElement("button",{style:q,type:"submit",className:"material-icons",onClick:n.handleDoneBtnClick},"done")):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{style:q,className:"material-icons",onClick:n.onDeleteTodo.bind(Object(M.a)(Object(M.a)(n)),n.id)},"delete"),o.a.createElement("button",{style:q,className:"material-icons",onClick:n.toggleEditable},"edit"))},n.state={editable:!1,name:e.item.name,todo:e.item,todos:[]},n.id=n.props.item._id,n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onDeleteTodo",value:function(e){var t=this,n=Object(T.a)(this.state.todos.filter(function(t){return t._id!==e}));(function(e){return fetch(w+"/items/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}})})(e).then(function(){t.props.setTodos({todos:n})})}},{key:"render",value:function(){var e=this.props.item._id;return o.a.createElement("div",{style:this.getStyles()},o.a.createElement("input",{type:"checkbox",checked:this.props.item.completed,onChange:this.onUpdateCompleted.bind(this,e,this.props.item)}),"\xa0\xa0",o.a.createElement(J.a,{html:this.state.name,disabled:!this.state.editable,onChange:this.handleChange,onPaste:this.pasteAsPlainText,onKeyPress:this.disableNewlines,tagName:"span",className:"todo-item-name",style:this.state.editable?L.editable:null}),this.renderBtns())}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.todos!==t.todos?{todos:e.todos}:null}}]),t}(a.Component),L={editable:{backgroundColor:"lightyellow"}},q={background:"rgba(0, 0, 0, 0)",border:"none",fontSize:25,padding:"0px 1px",float:"right",cursor:"pointer",fontWeight:900,justifyContent:"flex-end"},H=G,U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={todos:e.todos},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onGetTodos",value:function(){var e=Object(R.a)(F.a.mark(function e(){var t=this;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(w+"/items",{headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){t.setState({todos:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(R.a)(F.a.mark(function e(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onGetTodos();case 2:this.props.setTodos({todos:this.state.todos});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.todos!==e.todos&&this.setState({todos:this.props.todos})}},{key:"render",value:function(){var e=this.props,t=e.flash,n=e.setTodos,a=this.state.todos,s=a.map(function(e){return o.a.createElement(H,{key:e._id,item:e,flash:t,todos:a,setTodos:n})});return o.a.createElement(o.a.Fragment,null,s)}}]),t}(a.Component),W=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).setTodos=function(e){n.setState(e)},n.flash=function(e,t){n.setState({flashMessage:e,flashType:t}),clearTimeout(n.messageTimeout),n.messageTimeout=setTimeout(function(){return n.setState({flashMessage:null})},2e3)},n.state={todos:[],flashMessage:"",flashType:null},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.flashMessage,a=t.flashType,s=t.todos;return o.a.createElement(m.a,{basename:"/on-track"},o.a.createElement(k,null),o.a.createElement("div",{className:"container"},n&&o.a.createElement("h3",{className:a},n),o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{setTodos:e.setTodos,todos:s}),o.a.createElement("div",{className:"todo-list"},o.a.createElement(U,{flash:e.flash,setTodos:e.setTodos,todos:s})))}}),o.a.createElement(h.a,{path:"/about",component:B})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},63:function(e,t,n){e.exports=n(153)},68:function(e,t,n){},69:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.c69172e9.chunk.js.map