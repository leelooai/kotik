(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){e.exports=n.p+"static/media/blue_white_gorizontal.2afeea96.svg"},113:function(e,t,n){e.exports=n(195)},118:function(e,t,n){},121:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(4),i=n.n(r),s=(n(118),n(38)),c=n(30),l=n(58),u=n(53),d=n(59),g=n(75),p=n.n(g),h=n(100),m=n(23),f=n.n(m),b=n(199),v=n(197),y=n(198),k=n(60),E=(n(121),n(101)),w=n.n(E),C=n(196),O="public_profile,email,pages_show_list,pages_messaging,manage_pages,ads_read,ads_management,pages_messaging_subscriptions",R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).statusChangeCallback=function(e){"connected"===e.status?window.FB.api("/".concat(e.authResponse.userID,"/permissions"),function(t){t&&!t.error&&n.checkPermissions(n.props.requiredPermissions,t.data)&&(n.props.onLogin&&n.props.onLogin(!0,e.authResponse.accessToken),n.props.loginFunction(e.authResponse.accessToken))}):(n.props.onLogin&&e.authResponse&&n.props.onLogin(!1,e.authResponse.accessToken),n.props.logoutFunction())},n.fbLoginButton=null,n.widthController=null,n.state={loggedIn:e.loggedIn},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fbLoginButton.style.width="".concat(this.widthController.offsetWidth+20,"px");var e=this;!function(e,t,n){var a,o=e.getElementsByTagName(t)[0];e.getElementById(n)||((a=e.createElement(t)).id=n,a.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(a,o))}(document,"script","facebook-jssdk"),window.fbAsyncInit=function(){window.FB.init({appId:window.SERVER_PARAMS.FACEBOOK_APP_ID,cookie:!0,xfbml:!0,version:"v3.1"}),window.FB.AppEvents.logPageView(),window.FB.getLoginStatus(function(t){e.statusChangeCallback(t)}),window.FB.Event.subscribe("auth.login",e.statusChangeCallback),window.FB.Event.subscribe("auth.logout",e.statusChangeCallback),e.fbLoginButton.onclick=function(){return window.FB.login(e.statusChangeCallback,{scope:O})}}}},{key:"componentDidUpdate",value:function(){this.fbLoginButton.style.width="".concat(this.widthController.offsetWidth+20,"px")}},{key:"checkPermissions",value:function(e,t){var n=e.split(",");if(t.length<n.length)return!1;for(var a=f.a.keyBy(t,"permission"),o=0;o<n.length;o++){var r=a[n[o]];if(!r||"granted"!==r.status)return!1}return!0}},{key:"render",value:function(){var e=this,t=this.props,n=t.additionalClassName,a=t.additionalWrapperClassName,r=this.props.loggedIn,i=r?"h-disabled":"";return o.a.createElement("div",{className:"fb-login-button-wrap ".concat(a||"")},o.a.createElement("div",{className:"my-fb-login-button ".concat(i," ").concat(n||""),ref:function(t){return e.fbLoginButton=t}},o.a.createElement("span",{ref:function(t){return e.widthController=t}},r?o.a.createElement("span",{className:"fb-button-text login"},"Connected with Facebook"):null===r?o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:"fb-button-text"},"Establishing connection with Facebook"),o.a.createElement(C.a,{size:"small",className:"h-padding-l-5"})):o.a.createElement("span",{className:"fb-button-text login"},"Connect Facebook account"))))}}]),t}(o.a.Component);R.defaultProps={requiredPermissions:O,logoutFunction:function(){}};var B=n(111),P=n(46),j=n(105),N=n.n(j),_=n(106),x=n.n(_),I=n(11),F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return{duration:e?null:t,icon:o.a.createElement(I.a,{type:"check-circle",style:{color:"green"}}),placement:"bottomRight"}},A=function(e,t,n,a){b.a.error(Object(P.a)({},F(n,a),{icon:o.a.createElement(I.a,{type:"close-circle",style:{color:"red"}}),message:e,description:t}))},L=["get","post","put","delete"];function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=String(e).toLowerCase(),r=N.a[o];if(!f.a.includes(L,o))return Promise.reject('Not valid method "'.concat(e,'"'));var i=function(e){if(!e.ok)throw e.body;return e.body};if("get"===o){var s=a?x.a.stringify(n):n;return r(t).query(s).then(i)}return"delete"===o?r(t).then(i):r(t).type("json").send(n).then(i)}var T=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.defaultErrorHandler,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(s.a)(this,e),this.errorHandler=t,this.handleError=n}return Object(c.a)(e,null,[{key:"defaultErrorHandler",value:function(e){A("Error",JSON.stringify(e))}}]),Object(c.a)(e,[{key:"fetch",value:function(t){var n=this;return S(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).catch(function(t){return n.handleError&&n.errorHandler(t),e.ERROR})}},{key:"get",value:function(e,t){return this.fetch("GET",e,t)}},{key:"put",value:function(e,t){return this.fetch("PUT",e,t)}},{key:"post",value:function(e,t){return this.fetch("POST",e,t)}},{key:"delete",value:function(e,t){return this.fetch("DELETE",e,t)}},{key:"multiple",value:function(){for(var t=this,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return Promise.all(a.map(function(e){return S.apply(void 0,Object(B.a)(e))})).catch(function(n){return t.errorHandler(n),e.ERROR})}}],[{key:"isError",value:function(t){return t===e.ERROR}}]),e}();T.ERROR="ERROR";var D=new T,H=function(){var e=Object(h.a)(p.a.mark(function e(t,n){var a,o,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loggedIn,a=t.token,o="".concat("https://graph.facebook.com/v3.2/","me/accounts?limit=200&access_token=").concat(a),e.next=4,D.get(o);case 4:r=e.sent,n(f.a.filter(r.data,function(e){return-1!==f.a.indexOf(e.tasks,"MANAGE")}));case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();function W(e,t){var n=document.createElement("textarea");n.style.position="fixed",n.style.top=0,n.style.left=0,n.style.width="2em",n.style.height="2em",n.style.padding=0,n.style.border="none",n.style.outline="none",n.style.boxShadow="none",n.style.background="transparent",n.value=e,document.body.appendChild(n),n.select();try{document.execCommand("copy"),b.a.info({message:"Copied",placement:"bottomRight",description:t||"Text successful copied: ".concat(e)})}catch(a){b.a.error({message:"Error",placement:"bottomRight",description:"Unable to copy text."})}document.body.removeChild(n)}var q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1,token:"",pages:[],selectedPage:null},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"}),o.a.createElement("div",{style:{minHeight:150}},o.a.createElement("div",{className:"App-link",style:{marginBottom:10}},o.a.createElement(R,{requiredPermissions:"pages_messaging_subscriptions",additionalWrapperClassName:"fb-button-margin-0 h-display-inline-block",additionalClassName:"h-margin-0",loggedIn:this.state.loggedIn,loginFunction:function(t){return e.setState({token:t,loggedIn:!0})},onLogin:function(t,n){H({loggedIn:t,token:n},function(t){return e.setState({pages:t})})}})),o.a.createElement("div",{style:{marginBottom:10}},this.state.loggedIn?o.a.createElement(v.a,{style:{width:300},value:f.a.get(this.state.selectedPage,"id",null),onChange:function(t){return e.setState({selectedPage:f.a.find(e.state.pages,{id:t})})}},this.state.pages.map(function(e){return o.a.createElement(v.a.Option,{key:e.id,value:e.id},e.name)})):null),o.a.createElement("div",null,this.state.selectedPage?o.a.createElement(y.a.Group,{compact:!0},o.a.createElement(k.a,{ghost:!0,onClick:function(){return W(e.state.selectedPage.id)}},"Copy bot ID"),o.a.createElement(k.a,{ghost:!0,onClick:function(){return W(e.state.selectedPage.name)}},"Copy bot Name"),o.a.createElement(k.a,{ghost:!0,onClick:function(){return W(e.state.selectedPage.access_token)}},"Copy bot Access Token")):null))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.4bcdcec2.chunk.js.map