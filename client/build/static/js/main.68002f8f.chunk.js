(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},193:function(e,a,t){},194:function(e,a,t){},195:function(e,a,t){},196:function(e,a,t){},197:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=t(25),s=t(19),i=t(3),u=t(32),m=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}},d=function(e){for(var a=e.grid,t=e.col,n=e.number,r=0;r<9;r++)if(a[r][t]===n)return!0;return!1},p=function(e){var a=e.grid,t=e.row,n=e.number;return!!a[t].includes(n)},f=function(e){var a=e.grid,t=e.row,n=e.col,r=[];if(t<3)if(n<3)for(var c=0;c<3;c++)r.push([a[c][0],a[c][1],a[c][2]]);else if(n<6)for(var l=0;l<3;l++)r.push([a[l][3],a[l][4],a[l][5]]);else for(var o=0;o<3;o++)r.push([a[o][6],a[o][7],a[o][8]]);else if(t<6)if(n<3)for(var s=3;s<6;s++)r.push([a[s][0],a[s][1],a[s][2]]);else if(n<6)for(var i=3;i<6;i++)r.push([a[i][3],a[i][4],a[i][5]]);else for(var u=3;u<6;u++)r.push([a[u][6],a[u][7],a[u][8]]);else if(n<3)for(var m=6;m<9;m++)r.push([a[m][0],a[m][1],a[m][2]]);else if(n<6)for(var d=6;d<9;d++)r.push([a[d][3],a[d][4],a[d][5]]);else for(var p=6;p<9;p++)r.push([a[p][6],a[p][7],a[p][8]]);return r},E=function(e){var a=e.square,t=e.number;return[].concat(Object(s.a)(a[0]),Object(s.a)(a[1]),Object(s.a)(a[2])).includes(t)},v=function(e){for(var a=0;a<9;a++)for(var t=0;t<9;t++)if(0===e[a][t])return!1;return!0},b=function e(a){for(var t=[1,2,3,4,5,6,7,8,9],n=0,r=0,c=0;c<81;c++)if(r=c%9,0===a[n=Math.floor(c/9)][r]){m(t);var l,o=Object(u.a)(t);try{for(o.s();!(l=o.n()).done;){var s=l.value;if(!p({grid:a,row:n,number:s})&&!d({grid:a,col:r,number:s})){var i=f({grid:a,row:n,col:r});if(!E({square:i,number:s})){if(a[n][r]=s,v(a))return!0;if(e(a))return!0}}}}catch(b){o.e(b)}finally{o.f()}break}a[n][r]=0},h=function(){var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];return b(e),e},g=function(e){for(var a=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],t=0;t<9;t++)for(var n=0;n<9;n++)a[t][n]=e[t][n];return a},N={counter:!1},y=function(){return Math.floor(9*Math.random())},O=function e(a){for(var t=[1,2,3,4,5,6,7,8,9],n=0,r=0,c=0;c<81;c++)if(r=c%9,0===a[n=Math.floor(c/9)][r]){var l,o=Object(u.a)(t);try{for(o.s();!(l=o.n()).done;){var s=l.value;if(!p({grid:a,row:n,number:s})&&!d({grid:a,col:r,number:s})){var i=f({grid:a,row:n,col:r});if(!E({square:i,number:s})){if(a[n][r]=s,v(a)){N.counter=!0;break}if(e(a))return!0}}}}catch(m){o.e(m)}finally{o.f()}break}},S=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;a>0;){for(var t=y(),n=y();0===e[t][n];)t=y(),n=y();var r=e[t][n];e[t][n]=0;var c=g(e);N.counter=!1,O(c),N.counter||(e[t][n]=r,a--)}return e},w={cellValues:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],solvedCellValues:[],activeCells:[],difficulty:5,inPlay:!1,gameOver:!1,usedSolver:!1,gameDifficulty:5},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_NEW_GAME":var t=h(),n=g(t),r=S(n,a.difficulty);return Object(i.a)(Object(i.a)({},e),{},{inPlay:!0,cellValues:r,solvedCellValues:t,gameDifficulty:a.difficulty});case"SET_ACTIVE_CELLS":var c=[];return c.push(a.row,a.col),Object(i.a)(Object(i.a)({},e),{},{activeCells:c});case"SET_CELL_VALUE":var l=e.cellValues;return l[a.row][a.col]=a.value,Object(i.a)(Object(i.a)({},e),{},{cellValues:Object(s.a)(l)});case"SHOW_SOLUTION":var o=e.solvedCellValues;return Object(i.a)(Object(i.a)({},e),{},{usedSolver:!0,gameOver:!0,cellValues:o});case"GAME_WON":return Object(i.a)(Object(i.a)({},e),{},{gameOver:!0});default:return e}},k={difficulty:5,feedback:!0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_DIFFICULTY":return Object(i.a)(Object(i.a)({},e),{},{difficulty:a.value});case"SET_FEEDBACK":return Object(i.a)(Object(i.a)({},e),{},{feedback:a.value});default:return e}},C={email:"",username:"",password:"",errorFields:{emailError:"",passwordError:""},error:void 0,isLoading:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_EMAIL":return Object(i.a)(Object(i.a)({},e),{},{email:a.email});case"SET_EMAIL_ERROR_FIELD":var t=Object(i.a)(Object(i.a)({},e.errorFields),{},{emailError:a.payload});return Object(i.a)(Object(i.a)({},e),{},{errorFields:t});case"SET_PASSWORD_ERROR_FIELD":var n=Object(i.a)(Object(i.a)({},e.errorFields),{},{passwordError:a.payload});return Object(i.a)(Object(i.a)({},e),{},{errorFields:n});case"SET_USERNAME":return Object(i.a)(Object(i.a)({},e),{},{username:a.username});case"SET_PASSWORD":return Object(i.a)(Object(i.a)({},e),{},{password:a.password});case"SET_ERROR_FIELD":return Object(i.a)(Object(i.a)({},e),{},{error:a.payload});case"REMOVE_ERROR_FIELD":return Object(i.a)(Object(i.a)({},e),{},{error:void 0});case"IS_LOADING":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!0});case"HAS_LOADED":return Object(i.a)(Object(i.a)({},e),{},{isLoading:!1});default:return e}},T={userScores:[],nameFilter:void 0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PLAYER_SCORES":return Object(i.a)(Object(i.a)({},e),{},{userScores:Object(s.a)(a.scores)});case"SET_PLAYER_FILTER":return Object(i.a)(Object(i.a)({},e),{},{nameFilter:a.playerName});default:return e}},A=Object(o.c)(window.devToolsExtension?window.devToolsExtension():function(e){return e}),R=Object(o.d)(Object(o.b)({boardState:j,infoState:_,signupState:L,playerScoresState:I}),A),x=t(11),F=(t(87),t(5)),D=t.n(F),P=t(8),M=t(14),V=t(12),U=t(6),Y=t(9),H=t.n(Y),W=t(33),B=t(34),q=t(36),G=t(35),K=function(e,a,t){return{type:"SET_CELL_VALUE",row:e,col:a,value:t}},J=function(e){return{type:"CREATE_NEW_GAME",difficulty:e}},z=t(21),X=(t(105),Object(x.b)((function(e){return{infoState:e.infoState,boardState:e.boardState}}))((function(e){var a=e.dispatch,t=e.infoState,n=e.boardState,c=Object(z.c)();return r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"button new-game",onClick:function(e){a(J(t.difficulty))}},"New Game"),r.a.createElement("button",{className:"button solve",onClick:function(e){n.inPlay?(c.show("Using the solver invalidates your chance of a clean victory!"),a({type:"SHOW_SOLUTION"})):c.error("Please start a new game first")}},"Solution"))}))),Z=(t(106),Object(x.b)((function(e){return{boardState:e.boardState,cellValues:e.boardState.cellValues,solvedCellValues:e.boardState.solvedCellValues,activeCells:e.boardState.activeCells,feedback:e.infoState.feedback}}))((function(e){var a=e.cellValues,t=e.solvedCellValues,n=e.rowIndex,c=e.activeCells,l=e.dispatch,o=e.feedback,s=Object(z.c)(),i=function(e,n,r){if(0===a.length||0===t.length)return alert("Please start the game"),!1;var c=e.currentTarget.value,l=parseInt(c);return""!==c&&(isNaN(l)?(s.error("You must enter a number between 0 and 9"),!1):t[n][r]===l||!o||(s.error("Invalid input, please try again"),!1))};return r.a.createElement("tr",null,[1,2,3,4,5,6,7,8,9].map((function(e){var t,o=e-1,s=(t=o,a[n][t]);0===s&&(s="");var u=function(e,a,t){var n=a===e[0]&&t===e[1];return a===e[0]&&!n||t===e[1]&&!n}(c,n,o)?"inPlay":"",m="";return 0===o&&(m+="grid-border-left "),function(e){return 2===e||5===e||8===e}(o)&&(m+="grid-border-right "),function(e){return 0===e}(n)&&(m+="grid-border-top "),function(e){return 2===e||5===e||8===e}(n)&&(m+="grid-border-bottom"),r.a.createElement("td",{key:e,className:"square-cell ".concat(m)},r.a.createElement("input",{className:"square-input ".concat(u),type:"text",value:s,maxLength:"1",onClick:function(){return l(function(e,a){return{type:"SET_ACTIVE_CELLS",row:e,col:a}}(n,o))},onChange:function(e){return function(e,a,t){if(i(e,a,t)){var n=parseInt(e.target.value);return l(K(a,t,n))}}(e,n,o)},onKeyUp:function(e){return function(e,a,t){if("Backspace"===e.key)return l(K(a,t,""))}(e,n,o)}}))})))}))),$=(t(107),Object(x.b)((function(e){return{boardState:e.boardState}}))((function(e){var a=e.boardState,t=e.dispatch,c=a.inPlay,l=a.gameDifficulty,o=a.usedSolver,s=a.cellValues,i=a.solvedCellValues,u=Object(z.c)(),m=function(){var e=Object(P.a)(D.a.mark((function e(){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={difficulty:l},e.next=3,H.a.patch("/api/scores/update-score",a);case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c&&(function(){for(var e=!0,a=0;a<9;a++)for(var t=0;t<9;t++)if(s[a][t]!==i[a][t]){e=!1;break}return e}()&&!o&&(m(),u.success("Congratulations! You won! If you're logged in, we'll track your scores!"),setTimeout((function(){u.info("Creating a new game!"),t(J(l))}),5e3)))})),r.a.createElement("div",{className:"board-container"},r.a.createElement("table",{className:"board"},r.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9].map((function(e){return r.a.createElement(Z,{key:e,rowIndex:e-1})})))))}))),Q=function(e){return{type:"SET_FEEDBACK",value:e}},ee=(t(38),t(108),Object(x.b)((function(e){return{difficulty:e.infoState.difficulty,feedback:e.infoState.feedback}}))((function(e){var a=e.difficulty,t=e.feedback,c=e.dispatch,l=function(e){return e?c(Q(!0)):e||c(Q(!1)),!0};return r.a.createElement("div",{className:"info-box"},r.a.createElement("div",{className:"app-container"},r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"info-item"},r.a.createElement("label",{className:"info-label"},"Select your difficulty level:"),r.a.createElement("div",{className:"drop-down"},r.a.createElement("button",{className:"drop-down-selection"},a),r.a.createElement("div",{className:"drop-down-content"},[1,2,3,4,5,6,7,8,9,10].map((function(e){return r.a.createElement("button",{className:"option",key:e,value:e,onClick:function(a){c({type:"SET_DIFFICULTY",value:e})}},e)}))))),r.a.createElement("div",{className:"info-item"},r.a.createElement("label",{className:"info-label"},"Would you like real-time feedback as you play?"),r.a.createElement("div",{className:"radio-toggle__container"},r.a.createElement("input",{type:"radio",value:!0,onClick:function(e){return console.log(e)}}),r.a.createElement("label",{className:t?"radio-selected":null,onClick:function(){return l(!0)}},"Yes"),r.a.createElement("input",{type:"radio",value:!1}),r.a.createElement("label",{className:t?null:"radio-selected",onClick:function(){return l(!1)}},"No"))))))}))),ae=function(e){Object(q.a)(t,e);var a=Object(G.a)(t);function t(){return Object(W.a)(this,t),a.apply(this,arguments)}return Object(B.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"app-body"},r.a.createElement(X,null),r.a.createElement($,null),r.a.createElement(ee,null))}}]),t}(r.a.Component),te=(t(109),function(e){var a=e.loggedIn;return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"nav-list"},r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/",className:"nav-link",activeClassName:"selected",exact:!0},"Game")),!a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/signup",className:"nav-link",activeClassName:"selected"},"Sign up")),!a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/login",className:"nav-link",activeClassName:"selected"},"Login")),a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/profile",className:"nav-link",activeClassName:"selected"},"Your profile")),r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/leaderboard",className:"nav-link",activeClassName:"selected"},"Leaderboard")),r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/how-to-play",className:"nav-link",activeClassName:"selected"},"How to play")),r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/donate",className:"nav-link",activeClassName:"selected"},"Donate!")),a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(V.c,{to:"/logout",className:"nav-link",activeClassName:"selected"},"Logout")))))}),ne=(t(111),function(e){var a=e.loggedIn;return r.a.createElement("header",null,r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"header__container"},r.a.createElement("h1",{className:"header-title"},"Classic Sudoku"),r.a.createElement("h2",{className:"header-subtitle"},"Start playing straight away!"))),r.a.createElement(te,{loggedIn:a}))}),re=(t(112),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"app-container footer-text"},"\xa92020"))}),ce=(t(113),function(e){return r.a.createElement("div",{className:"loader__container"},r.a.createElement("div",{className:"loader"}))}),le=(t(114),function(e){var a=e.title,t=e.description,n=e.onButtonOneClick,c=e.buttonOneLabel,l=e.buttonTwoLabel,o=e.onButtonTwoClick,s=e.onCloseAction,i=e.children;return r.a.createElement("div",{className:"modal-container",onClick:s},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header-container"},r.a.createElement("h1",{className:"modal-title"},a)),r.a.createElement("hr",{style:{width:"80%"}}),r.a.createElement("div",{className:"modal-main-content"},i||t),n||o?r.a.createElement("div",{className:"modal-button-container"},n&&r.a.createElement("button",{className:"modal-button",onClick:n},c),o&&r.a.createElement("button",{className:"modal-button",onClick:o},l)):null))}),oe=function(e){return{type:"SET_ERROR_FIELD",payload:e}},se=function(e){return{type:"SET_EMAIL_ERROR_FIELD",payload:e}},ie="Please use a valid email address",ue="Your password cannot contain the word password",me="Taking you to the Login page",de=(t(115),t(69)),pe=t.n(de),fe=t(20),Ee=t(23),ve=Object(x.b)((function(e){return{signupState:e.signupState}}))((function(e){var a=e.signupState,t=e.dispatch,c=e.history,l=a.error,o=a.email,s=a.password,i=a.username,u=a.isLoading,m=a.errorFields,d=m.emailError,p=m.passwordError,f=Object(n.useState)(!1),E=Object(M.a)(f,2),v=E[0],b=E[1],h=function(){var e=Object(P.a)(D.a.mark((function e(a){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:o,username:i,password:s},e.prev=2,t({type:"IS_LOADING"}),e.next=6,H.a.post("/api/users/register",n);case 6:e.sent.data.success&&(t({type:"HAS_LOADED"}),t({type:"REMOVE_ERROR_FIELD"}),b(!v),setTimeout((function(){return c.push("/login")}),2e3)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),t({type:"HAS_LOADED"}),(r=e.t0.response.data).error.includes("email")?t(oe("This email is already in use or not valid, please use a different email")):r.error.includes("username")?t(oe("This username has already been taken. Please choose a different username")):t(oe("Error registering. Make sure all fields are correct."));case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,v&&r.a.createElement(le,{title:"Sucess!"},r.a.createElement("div",{className:"redirect-login-page"},me)),r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"signup-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"signup-header"},"Welcome, create a free account"),r.a.createElement("h2",{className:"signup-subtitle"},"Track your scores and more")),r.a.createElement("div",{className:"signup-form"},r.a.createElement("label",{className:"signup-label"},"Email address"),r.a.createElement("input",{className:"signup-field",value:a.email,onChange:function(e){var a=e.currentTarget.value.trim();return pe.a.isEmail(a)?t(se("")):t(se(ie)),t(function(e){return{type:"SET_EMAIL",email:e}}(a))}}),d&&r.a.createElement("div",{className:"error-field"},d),r.a.createElement("label",{className:"signup-label"},"Username"),r.a.createElement("input",{className:"signup-field",value:a.username,onChange:function(e){var a=e.currentTarget.value.trim();t(function(e){return{type:"SET_USERNAME",username:e}}(a))}}),r.a.createElement("label",{className:"signup-label"},"Password"),r.a.createElement("input",{type:"password",className:"signup-field",value:a.password,onChange:function(e){var a=e.currentTarget.value.trim();a.toLowerCase().includes("password")&&t({type:"SET_PASSWORD_ERROR_FIELD",payload:ue}),t(function(e){return{type:"SET_PASSWORD",password:e}}(a))}}),p&&r.a.createElement("div",{className:"error-field"},p),l&&r.a.createElement("div",{className:"error-container"},r.a.createElement("label",null,l)),r.a.createElement("div",{className:"submit-button-container"},r.a.createElement("button",{type:"submit",className:"submit-button-signup",onClick:h},r.a.createElement("span",null,r.a.createElement(fe.a,{icon:Ee.c}),r.a.createElement("span",{className:"signup-button-text"},"Create account!"))))),u&&r.a.createElement(ce,null)))))})),be=(t(193),Object(x.b)((function(e){return{signUpState:e.signupState}}))((function(e){var a=e.dispatch,t=e.signUpState.isLoading,c=Object(n.useState)(""),l=Object(M.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)(""),u=Object(M.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(""),f=Object(M.a)(p,2),E=f[0],v=f[1],b=function(){var t=Object(P.a)(D.a.mark((function t(n){var r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={email:o,password:m},t.prev=2,a({type:"IS_LOADING"}),t.next=6,H.a.post("/api/users/login",r);case 6:v(""),a({type:"HAS_LOADED"}),e.history.push("/"),window.location.reload(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:"HAS_LOADED"}),v(t.t0.response.data.error);case 16:return t.abrupt("return");case 17:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"login-header"},"Sign in!"),r.a.createElement("h2",{className:"login-subheader"},"Sign in!")),r.a.createElement("div",{className:"login-form"},r.a.createElement("label",{className:"login-label"},"Email address"),r.a.createElement("input",{className:"login-field",name:"email",onChange:function(e){var a=e.currentTarget.value.trim();console.log(a.trim()),s(a)},value:o}),r.a.createElement("label",{className:"login-label"},"Password"),r.a.createElement("input",{className:"login-field",type:"password",name:"password",onChange:function(e){var a=e.currentTarget.value.trim();console.log(a),d(a)},value:m}),r.a.createElement("button",{type:"submit",className:"login-submit-button",onClick:b},r.a.createElement("span",null,r.a.createElement(fe.a,{icon:Ee.c}),r.a.createElement("span",{className:"login-button-label"},"Login")))),E&&r.a.createElement("div",{className:"error_container"},r.a.createElement("label",null,"Could not find email/password combination. Please try again.")),r.a.createElement("p",{className:"login-display-signup"},"New here? ",r.a.createElement(V.c,{to:"/signup"},"create account"))),t&&r.a.createElement(ce,null)))}))),he=t(70),ge=t.n(he),Ne=t(71),ye=t.n(Ne),Oe=t(72),Se=t.n(Oe),we=t(73),je=t.n(we),ke=t(74),_e=t.n(ke),Ce=(t(194),[ge.a,ye.a,Se.a,je.a]),Le=function(e){Object(q.a)(t,e);var a=Object(G.a)(t);function t(){var e;Object(W.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={loaded:!0,error:void 0,email:void 0,username:void 0,description:void 0,avatarFile:void 0,avatarURL:void 0,scoreCard:void 0},e.selectRandomImage=function(){var e=Math.floor(4*Math.random());return Ce[e]},e.setAvatarState=function(a){if(!a.target.files[0])return!1;e.setState({avatarFile:a.target.files[0]})},e.handleAvatarUpload=Object(P.a)(D.a.mark((function a(){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(t=new FormData).append("avatar",e.state.avatarFile),a.prev=2,a.next=5,H.a.post("/api/users/me/avatar",t);case 5:if(!a.sent.data.success){a.next=9;break}return e.setState({avatarFile:void 0,error:void 0}),a.abrupt("return",window.location.reload());case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(2),e.setState({avatarFile:void 0,error:a.t0.response.data.error});case 14:case"end":return a.stop()}}),a,null,[[2,11]])}))),e.componentDidMount=function(){e.fetchProfile()},e.componentDidUpdate=function(){e.state.avatarFile&&(e.handleAvatarUpload(),e.fetchProfile())},e.renderPlayerScores=function(){},e.fetchProfile=Object(P.a)(D.a.mark((function a(){var t;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,H.a.get("api/scores/my-score");case 3:t=a.sent,"/api/users/me/avatar",t.data.success&&e.setState((function(e){return{loaded:!0,error:void 0,email:t.data.email,username:t.data.username,avatarFile:void 0,avatarURL:"/api/users/me/avatar",scoreCard:t.data.scoreCard}})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),e.setState((function(e){return{loaded:!1,avatarFile:void 0,email:void 0,username:void 0,error:a.t0.message}}));case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),e.renderLoader=function(){return r.a.createElement(ce,null)},e.renderProfile=function(){var a=e.selectRandomImage();return r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",{className:"profile-top-card"},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-upload"},r.a.createElement("label",{htmlFor:"file-input"},r.a.createElement("img",{src:e.state.avatarURL||_e.a,alt:""})),r.a.createElement("input",{type:"file",id:"file-input",name:"file",onChange:e.setAvatarState}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("h1",null,e.state.username),r.a.createElement("h2",null,e.state.email),r.a.createElement("h3",null,"Lifetime scores (difficulty - wins)"),r.a.createElement("div",{className:"card-scores"},e.state.scoreCard&&Object.keys(e.state.scoreCard).map((function(a){var t=e.state.scoreCard[a];return console.log(a,t),r.a.createElement("p",null,r.a.createElement("span",{className:"difficulty-level"},a)," : ",r.a.createElement("span",{className:"wins"},t))})))),e.state.error&&r.a.createElement("div",null,e.state.error),r.a.createElement("div",{className:"contact-details"},"Sudokuact"))},e}return Object(B.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,!this.state.loaded&&this.renderLoader(),this.state.loaded&&this.renderProfile())}}]),t}(r.a.Component),Te=function(e){var a=e.loggedIn;return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},a&&r.a.createElement(Le,null),!a&&r.a.createElement("div",null,"Please login to continue")))},Ie=(t(195),function(e){var a=e.title,t=e.description;return r.a.createElement("div",{className:"main__container"},r.a.createElement("div",{className:"card__container"},r.a.createElement("div",{className:"card__front"},r.a.createElement("div",{className:"text-content"},r.a.createElement("div",{className:"tile-title-content"},a,r.a.createElement(fe.a,{className:"tip-fa-pointer",icon:Ee.a})))),r.a.createElement("div",{className:"card__back"},r.a.createElement(fe.a,{className:"tip-fa-icon",icon:Ee.b}),r.a.createElement("div",{className:"card-text-content"},t))))}),Ae=(t(196),{color:"#bf9949"}),Re={tip1:{title:r.a.createElement("h1",{style:Ae},"Tip one"),tip:r.a.createElement("p",null,"All 3x3 mini squares, all rows and all columns must contain the numbers 1-9. ",r.a.createElement("br",null)," No duplicates allowed!")},tip2:{title:r.a.createElement("h1",{style:Ae},"Tip two"),tip:r.a.createElement("p",null,"Look for the most filled out columns/rows/mini-squares first")},tip3:{title:r.a.createElement("h1",{style:Ae},"Tip three"),tip:r.a.createElement("p",null,"Figure out the potential possibilities in each square. Eventually, you'll narrow each square down to only one possible number!")},tip4:{title:r.a.createElement("h1",{style:Ae},"Tip four"),tip:r.a.createElement("p",null,"Be patient and try and solve the puzzle yourself before looking at the solution. Thats the only way to get better!")}},xe=function(){return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"how-to__container"},"Mouse over tips to reveal them"),r.a.createElement("div",{className:"tips__container"},Object.keys(Re).map((function(e,a){var t=Re[e];return r.a.createElement(Ie,{key:a,title:t.title,description:t.tip})})))))},Fe=t(22),De=(t(197),{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),Pe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"donate-label"},"If you'd like to donate, you can do so with a debit or credit card below"),r.a.createElement(Fe.CardElement,{style:De}))},Me=(t(198),function(e){var a=Object(Fe.useStripe)(),t=Object(Fe.useElements)(),c=Object(n.useState)(!1),l=Object(M.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)(void 0),u=Object(M.a)(i,2),m=u[0],d=u[1],p=function(e){d(e)},f=function(){s(!o)},E=function(){var e=Object(P.a)(D.a.mark((function e(n){var r,c,l;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a&&t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,H.a.get("/api/payments/secret");case 6:return r=e.sent,c=r.data.client_secret,e.next=10,a.confirmCardPayment("".concat(c),{payment_method:{card:t.getElement(Fe.CardElement),billing_details:{name:"donator"}}});case 10:(l=e.sent).error?(p(!1),f()):"succeeded"===l.paymentIntent.status&&(p(!0),f()),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),alert("unable to pay");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,o&&(m?r.a.createElement(le,{title:"Success!",description:"Your payment was successful. Thank you.",onButtonOneClick:f,onCloseAction:f,buttonOneLabel:"Close"}):r.a.createElement(le,{title:"Payment failure!",description:"Your payment was unsuccessful. Please try again.",onButtonOneClick:f,onCloseAction:f,buttonOneLabel:"Close"})),r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("form",{className:"checkout__form__container",onSubmit:E},r.a.createElement(Pe,null),r.a.createElement("button",{type:"submit",className:"submit-button-stripe",disabled:!a},"Donate $5!")))))}),Ve=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(Me,null))},Ue=(t(199),function(e){var a=function(){var a=Object(P.a)(D.a.mark((function a(){return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{H.a.post("/api/users/logout"),e.history.push("/"),window.location.reload()}catch(t){alert("Sorry, you're stuck logged in!")}case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"}),r.a.createElement("div",{className:"logout-label"},"Are you sure you wish to logout?"),r.a.createElement("div",{className:"logout-buttons__container"},r.a.createElement("button",{onClick:a},"Yes"),r.a.createElement("button",{onClick:function(){e.history.push("/")}},"No")))}),Ye=(t(200),function(e){var a=e.rank,t=e.userName,n=e.wins;return r.a.createElement("tr",null,r.a.createElement("td",null,a),r.a.createElement("td",null,t),r.a.createElement("td",null,n))}),He=Object(x.b)((function(e){var a,t,n=e.playerScoresState;return{playerScores:(a=n.userScores,t=n.nameFilter,t?a.filter((function(e){return e.userName.includes(t)})):a)}}))((function(e){var a=e.dispatch,t=e.playerScores,c=Object(n.useState)(!1),l=Object(M.a)(c,2),o=l[0],u=l[1],m=function(){var e=Object(P.a)(D.a.mark((function e(){var t,n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("/api/scores/leaderboard");case 3:return t=e.sent,n=d(t.data.userData),r=n.map((function(e,a){return Object(i.a)(Object(i.a)({},e),{},{rank:a+1})})),a({type:"SET_PLAYER_SCORES",scores:Object(s.a)(r)}),e.abrupt("return",u(!0));case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),d=function(e){return e.filter((function(e){return e.wins>0})).sort((function(e,a){return a.wins-e.wins}))};return Object(n.useEffect)((function(){m()}),[]),r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},!o&&r.a.createElement("div",{className:"loader-placement"},r.a.createElement(ce,null)),o&&r.a.createElement("section",{className:"leaderboard__container"},r.a.createElement("div",{className:"header__container"},r.a.createElement("h1",{className:"leaderboard-header"},"Leaderboard"),r.a.createElement("h3",{className:"leaderboard-subtitle"},"This is the leaderboard for most wins. Only difficulty levels of 10 are considered in the leaderboard.")),r.a.createElement("div",{className:"leaderboard-table__container"},r.a.createElement("nav",{className:"search"},r.a.createElement("div",{className:"search-title"},r.a.createElement("h1",null,"Current Standings")),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"search",placeholder:"Search player...",onChange:function(e){var t=e.target.value;a({type:"SET_PLAYER_FILTER",playerName:t})}}))),r.a.createElement("table",{className:"leaderboard-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Player"),r.a.createElement("th",null,"Wins"))),r.a.createElement("tbody",null,null===t||void 0===t?void 0:t.map((function(e,a){return r.a.createElement(Ye,{rank:e.rank,userName:e.userName,key:a,wins:e.wins})}))))))))})),We=t(75),Be=(t(201),function(){return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"error-layout-container"},r.a.createElement("div",{className:"error-content"},r.a.createElement("div",{className:"sadface-icon"},r.a.createElement(fe.a,{icon:We.a})),r.a.createElement("div",{className:"error-redirects"},r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"Page not found"),r.a.createElement(V.b,{to:"/"},r.a.createElement("button",{className:"errorpage-button"},"Back to home"))))))}),qe=function(){var e=Object(n.useState)(!1),a=Object(M.a)(e,2),t=a[0],c=a[1],l=function(){var e=Object(P.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get("/api/users/auth",{withCredentials:!0});case 3:e.sent.data.isAuth&&c(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()})),r.a.createElement(V.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(ne,{loggedIn:t}),r.a.createElement(U.c,null,r.a.createElement(U.a,{exact:!0,path:"/",component:ae}),r.a.createElement(U.a,{path:"/signup",component:ve}),r.a.createElement(U.a,{path:"/login",component:be}),r.a.createElement(U.a,{path:"/profile",render:function(e){return r.a.createElement(Te,Object.assign({},e,{loggedIn:t}))}}),r.a.createElement(U.a,{path:"/how-to-play",component:xe}),r.a.createElement(U.a,{path:"/donate",component:Ve}),r.a.createElement(U.a,{path:"/leaderboard",component:He}),r.a.createElement(U.a,{path:"/logout",component:Ue}),r.a.createElement(U.a,{path:"*",component:Be})),r.a.createElement(re,null)))},Ge=t(76),Ke=t(77),Je=Object(Ge.a)("pk_test_51Gr46jKxZD07KMJhc9KCDdlfKT7u2KIlgGq9ASChEsJPldmd1IF9kvIHadV1rkoHLvdCwIXSAi28vK0EIURSWb7I00lHILJ1xz"),ze={position:z.b.BOTTOM_CENTER,timeout:5e3};window.store=R,l.a.render(r.a.createElement(Fe.Elements,{stripe:Je},r.a.createElement(x.a,{store:R},r.a.createElement(z.a,Object.assign({template:Ke.a},ze),r.a.createElement(qe,null)))),document.getElementById("sudoku"))},38:function(e,a,t){},70:function(e,a,t){e.exports=t.p+"static/media/sudoku-1.f44fb033.jpg"},71:function(e,a,t){e.exports=t.p+"static/media/sudoku-2.91619c5b.jpg"},72:function(e,a,t){e.exports=t.p+"static/media/sudoku-3.237bf981.jpg"},73:function(e,a,t){e.exports=t.p+"static/media/sudoku-4.7583d739.jpg"},74:function(e,a,t){e.exports=t.p+"static/media/placeholder-profile.000b4e42.jpg"},78:function(e,a,t){e.exports=t(202)},87:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.68002f8f.chunk.js.map