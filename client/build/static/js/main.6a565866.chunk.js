(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},181:function(e,a,t){},182:function(e,a,t){},183:function(e,a,t){},184:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),s=t(25),o=t(11),i=t(22),u=t(9),m=t(29),d=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}},p=function(e){for(var a=e.grid,t=e.col,n=e.number,r=0;r<9;r++)if(a[r][t]===n)return!0;return!1},f=function(e){var a=e.grid,t=e.row,n=e.number;return!!a[t].includes(n)},v=function(e){var a=e.grid,t=e.row,n=e.col,r=[];if(t<3)if(n<3)for(var l=0;l<3;l++)r.push([a[l][0],a[l][1],a[l][2]]);else if(n<6)for(var c=0;c<3;c++)r.push([a[c][3],a[c][4],a[c][5]]);else for(var s=0;s<3;s++)r.push([a[s][6],a[s][7],a[s][8]]);else if(t<6)if(n<3)for(var o=3;o<6;o++)r.push([a[o][0],a[o][1],a[o][2]]);else if(n<6)for(var i=3;i<6;i++)r.push([a[i][3],a[i][4],a[i][5]]);else for(var u=3;u<6;u++)r.push([a[u][6],a[u][7],a[u][8]]);else if(n<3)for(var m=6;m<9;m++)r.push([a[m][0],a[m][1],a[m][2]]);else if(n<6)for(var d=6;d<9;d++)r.push([a[d][3],a[d][4],a[d][5]]);else for(var p=6;p<9;p++)r.push([a[p][6],a[p][7],a[p][8]]);return r},E=function(e){var a=e.square,t=e.number;return[].concat(Object(i.a)(a[0]),Object(i.a)(a[1]),Object(i.a)(a[2])).includes(t)},b=function(e){for(var a=0;a<9;a++)for(var t=0;t<9;t++)if(0===e[a][t])return!1;return!0};var h=function e(a){for(var t=[1,2,3,4,5,6,7,8,9],n=0,r=0,l=0;l<81;l++)if(r=l%9,0===a[n=Math.floor(l/9)][r]){d(t);var c,s=Object(m.a)(t);try{for(s.s();!(c=s.n()).done;){var o=c.value;if(!f({grid:a,row:n,number:o})&&!p({grid:a,col:r,number:o})){var i=v({grid:a,row:n,col:r});if(!E({square:i,number:o})){if(a[n][r]=o,b(a))return!0;if(e(a))return!0}}}}catch(u){s.e(u)}finally{s.f()}break}a[n][r]=0};var g=function(){var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];return h(e),e};var y=function(e){for(var a=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],t=0;t<9;t++)for(var n=0;n<9;n++)a[t][n]=e[t][n];return a},N={counter:0};var O=function(){return Math.floor(9*Math.random())};var S=function e(a){for(var t=[1,2,3,4,5,6,7,8,9],n=0,r=0,l=0;l<81;l++)if(r=l%9,0===a[n=Math.floor(l/9)][r]){var c,s=Object(m.a)(t);try{for(s.s();!(c=s.n()).done;){var o=c.value;if(!f({grid:a,row:n,number:o})&&!p({grid:a,col:r,number:o})){var i=v({grid:a,row:n,col:r});if(!E({square:i,number:o})){if(a[n][r]=o,b(a)){N.counter++;break}if(e(a))return!0}}}}catch(u){s.e(u)}finally{s.f()}break}};var w=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;a>0;){for(var t=O(),n=O();0===e[t][n];)t=O(),n=O();var r=e[t][n];e[t][n]=0;var l=y(e);N.counter=0,S(l),1!==N.counter&&(e[t][n]=r,a--)}return e},k={cellValues:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],solvedCellValues:[],activeCells:[],difficulty:5,inPlay:!1,gameOver:!1,usedSolver:!1,gameDifficulty:5},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_NEW_GAME":var t=g(),n=y(t),r=w(n,a.difficulty);return Object(u.a)({},e,{inPlay:!0,cellValues:r,solvedCellValues:t,gameDifficulty:a.difficulty});case"SET_ACTIVE_CELLS":var l=[];return l.push(a.row,a.col),Object(u.a)({},e,{activeCells:l});case"SET_CELL_VALUE":var c=e.cellValues;return c[a.row][a.col]=a.value,Object(u.a)({},e,{cellValues:Object(i.a)(c)});case"SHOW_SOLUTION":var s=e.solvedCellValues;return Object(u.a)({},e,{usedSolver:!0,gameOver:!0,cellValues:s});case"GAME_WON":return Object(u.a)({},e,{gameOver:!0});default:return e}},C=(t(77),t(3)),j=t.n(C),L=t(7),I=t(20),x=t(13),A=t(5),T=t(10),D=t.n(T),F=t(30),R=t(31),P=t(32),V=t(33),M=t(18),U=(t(96),Object(o.b)((function(e){return{infoState:e.infoState,boardState:e.boardState}}))((function(e){var a=e.dispatch,t=e.infoState,n=e.boardState,l=Object(M.c)();return r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"button new-game",onClick:function(e){a({type:"CREATE_NEW_GAME",difficulty:t.difficulty})}},"New Game"),r.a.createElement("button",{className:"button solve",onClick:function(e){l.show("Using the solver invalidates your chance of a clean victory!"),n.inPlay?a({type:"SHOW_SOLUTION"}):l.error("Please start a new game first")}},"Solution"))}))),H=(t(97),Object(o.b)((function(e){return{boardState:e.boardState,cellValues:e.boardState.cellValues,solvedCellValues:e.boardState.solvedCellValues,activeCells:e.boardState.activeCells,feedback:e.infoState.feedback}}))((function(e){var a=e.cellValues,t=e.solvedCellValues,n=e.rowIndex,l=e.activeCells,c=e.dispatch,s=e.feedback,o=Object(M.c)();return r.a.createElement("tr",null,[1,2,3,4,5,6,7,8,9].map((function(e){var i,u=e-1,m=(i=u,a[n][i]);0===m&&(m="");var d=function(e,a,t){var n=a===e[0]&&t===e[1];return a===e[0]&&!n||t===e[1]&&!n}(l,n,u)?"inPlay":"",p="";return 0===u&&(p+="grid-border-left "),function(e){return 2===e||5===e||8===e}(u)&&(p+="grid-border-right "),function(e){return 0===e}(n)&&(p+="grid-border-top "),function(e){return 2===e||5===e||8===e}(n)&&(p+="grid-border-bottom"),r.a.createElement("td",{key:e,className:"square-cell ".concat(p)},r.a.createElement("input",{className:"square-input ".concat(d),type:"text",value:m,maxLength:"1",onClick:function(e){return c(function(e,a){return{type:"SET_ACTIVE_CELLS",row:e,col:a}}(n,u))},onChange:function(e){if(function(e,n,r){if(0===a.length||0===t.length)return alert("Please start the game"),!1;var l=parseInt(e.target.value);return isNaN(l)?(o.error("You must enter a number between 0 and 9"),!1):t[n][r]===l||!s||(o.error("Invalid input, please try again"),!1)}(e,n,u)){var r=parseInt(e.target.value);c(function(e,a,t){return{type:"SET_CELL_VALUE",row:e,col:a,value:t}}(n,u,r))}}}))})))}))),W=(t(98),Object(o.b)((function(e){return{boardState:e.boardState}}))((function(e){var a=e.boardState,t=a.inPlay,l=a.gameDifficulty,c=a.usedSolver,s=a.cellValues,o=a.solvedCellValues;console.log(t,l,c);console.log(a);var i=Object(M.c)(),u=function(){var e=Object(L.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={difficulty:l},e.next=3,D.a.patch("/api/scores/update-score",a);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(t&&(function(){for(var e=!0,a=0;a<9;a++)for(var t=0;t<9;t++)if(s[a][t]!==o[a][t]){e=!1;break}return e}()&&!c)){var e=u();console.log(e),i.success("Congratulations! You won! If you're logged in, we'll track your scores!")}})),r.a.createElement("div",{className:"board-container"},r.a.createElement("table",{className:"board"},r.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9].map((function(e){return r.a.createElement(H,{key:e,rowIndex:e-1})})))))}))),G=function(e){return{type:"SET_FEEDBACK",value:e}},q=(t(35),t(99),Object(o.b)((function(e){return{difficulty:e.infoState.difficulty,feedback:e.infoState.feedback}}))((function(e){var a=e.difficulty,t=e.feedback,n=e.dispatch;return r.a.createElement("div",{className:"info-box"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",null,r.a.createElement("div",{className:"info-item"},r.a.createElement("label",{className:"label"},"Select your difficulty level:"),r.a.createElement("div",{className:"drop-down"},r.a.createElement("button",{className:"drop-down-selection"},a),r.a.createElement("div",{className:"drop-down-content"},[1,2,3,4,5,6,7,8,9,10].map((function(e){return r.a.createElement("button",{className:"option",key:e,value:e,onClick:function(a){n({type:"SET_DIFFICULTY",value:e})}},e)}))))),r.a.createElement("div",{className:"info-item"},r.a.createElement("label",{className:"label"},"Would you like real-time feedback as you play?"),r.a.createElement("div",{className:"toggle"},"Yes",r.a.createElement("input",{className:"radio-button",type:"radio",name:"feedback",id:"yes",checked:t,onChange:function(e){"yes"===e.target.value&&n(G(!0))},value:"yes"})),r.a.createElement("div",{className:"toggle"},"No",r.a.createElement("input",{className:"radio-button",type:"radio",name:"feedback",value:"no",id:"no",checked:!t,onChange:function(e){"no"===e.target.value&&n(G(!1))}}))))))}))),Y=function(e){Object(V.a)(t,e);var a=Object(P.a)(t);function t(){return Object(F.a)(this,t),a.apply(this,arguments)}return Object(R.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"app-body"},r.a.createElement(U,null),r.a.createElement(W,null),r.a.createElement(q,null))}}]),t}(r.a.Component),K=(t(100),function(e){var a=e.loggedIn;return r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"nav-list"},r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/",className:"nav-link",activeClassName:"selected",exact:!0},"Game")),!a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/signup",className:"nav-link",activeClassName:"selected"},"Sign up")),!a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/login",className:"nav-link",activeClassName:"selected"},"Login")),a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/profile",className:"nav-link",activeClassName:"selected"},"Your profile")),r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/leaderboard",className:"nav-link",activeClassName:"selected"},"Leaderboard")),r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/how-to-play",className:"nav-link",activeClassName:"selected"},"How to play")),r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/donate",className:"nav-link",activeClassName:"selected"},"Donate!")),a&&r.a.createElement("div",{className:"list-item"},r.a.createElement(x.b,{to:"/logout",className:"nav-link",activeClassName:"selected"},"Logout")))))}),B=(t(102),function(e){var a=e.loggedIn;return r.a.createElement("header",null,r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"header__container"},r.a.createElement("h1",{className:"header-title"},"Classic Sudoku"),r.a.createElement("h2",{className:"header-subtitle"},"Start playing straight away!"))),r.a.createElement(K,{loggedIn:a}))}),J=(t(103),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"app-container footer-text"},"\xa92020"))}),z=(t(104),function(e){return r.a.createElement("div",{className:"loader__container"},r.a.createElement("div",{className:"loader"}))}),X=function(e){return{type:"SET_ERROR_FIELD",payload:e}},Z=(t(105),t(65)),Q=t.n(Z),$=Object(o.b)((function(e){return{signupState:e.signupState}}))((function(e){var a=e.signupState,t=e.dispatch,n=a.error,l=a.email,c=a.password,s=a.username,o=a.isLoading,i=function(){var a=Object(L.a)(j.a.mark((function a(n){var r,o;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),Q.a.isEmail(l)){a.next=5;break}return a.abrupt("return",t(X("Please use a valid email address")));case 5:if(!(c.length<6)){a.next=9;break}return a.abrupt("return",t(X("Please use a password longer than 6 characters")));case 9:if(!c.toLowerCase().includes("password")){a.next=11;break}return a.abrupt("return",t(X('Your password cannot contain the "password"')));case 11:return r={email:l,username:s,password:c},a.prev=12,t({type:"IS_LOADING"}),a.next=16,D.a.post("/api/users/register",r);case 16:a.sent.data.success&&(t({type:"HAS_LOADED"}),t({type:"REMOVE_ERROR_FIELD"}),alert("Successfully registered! Taking you to the login page"),e.history.push("/login")),a.next=26;break;case 20:a.prev=20,a.t0=a.catch(12),t({type:"HAS_LOADED"}),o=a.t0.response.data,console.log(o),o.error.includes("email")?t(X("This email is already in use or not valid, please use a different email")):o.error.includes("username")?t(X("This username has already been taken. Please choose a different username")):t(X("Error registering. Please try again."));case 26:case"end":return a.stop()}}),a,null,[[12,20]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"signup-header"},"Welcome - It's good to see you!"),r.a.createElement("h2",{className:"signup-subtitle"},"Let's get you registered!"),r.a.createElement("h3",{className:"signup-subtitle-second"},"this way we can track your wins, best times and more!")),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:i},r.a.createElement("label",{className:"label"},"Email address"),r.a.createElement("input",{className:"field",placeholder:"e.g abc@hotmail.com",value:a.email,onChange:function(e){t({type:"SET_EMAIL",email:e.target.value})}}),r.a.createElement("label",{className:"label"},"Username"),r.a.createElement("input",{className:"field",placeholder:"Choose your user id. e.g sudokumeister1337",value:a.username,onChange:function(e){t({type:"SET_USERNAME",username:e.target.value})}}),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("input",{type:"password",className:"field",placeholder:"Must be minimum 8 characters length",value:a.password,onChange:function(e){t({type:"SET_PASSWORD",password:e.target.value})}}),n&&r.a.createElement("div",{className:"error-container"},r.a.createElement("label",null,n)),r.a.createElement("div",{className:"submit-button-container"},r.a.createElement("button",{type:"submit",className:"submit-button"},"Sign up!")))),o&&r.a.createElement(z,null)))})),ee=(t(181),Object(o.b)((function(e){return{signUpState:e.signupState}}))((function(e){var a=e.dispatch,t=e.signUpState.isLoading,l=Object(n.useState)(""),c=Object(I.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),u=Object(I.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(""),f=Object(I.a)(p,2),v=f[0],E=f[1],b=function(){var t=Object(L.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={email:s,password:m},t.prev=2,a({type:"IS_LOADING"}),t.next=6,D.a.post("/api/users/login",r);case 6:E(""),a({type:"HAS_LOADED"}),e.history.push("/"),window.location.reload(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:"HAS_LOADED"}),E(t.t0.response.data.error),alert("Could not find email/password combination. Please try again");case 17:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"title-container"},r.a.createElement("h1",{className:"login-header"},"Login page"),r.a.createElement("h2",{className:"login-subheader"},"Sign in!")),r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{onSubmit:b},r.a.createElement("label",{className:"label"},"Email"),r.a.createElement("input",{className:"field",onChange:function(e){o(e.target.value)}}),r.a.createElement("label",{className:"label"},"Password"),r.a.createElement("input",{className:"field",type:"password",onChange:function(e){d(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"submit-button"},"Login")),v&&r.a.createElement("div",{className:"error_container"},r.a.createElement("label",null,"Could not find email/password combination. Please try again."))),r.a.createElement("p",{className:"display-signup"},"Need to sign up first? click ",r.a.createElement(x.b,{to:"/signup"},"here")," to take you to the sign up page"),t&&r.a.createElement(z,null)))}))),ae=(t(182),function(e){Object(V.a)(t,e);var a=Object(P.a)(t);function t(){var e;Object(F.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={loaded:!0,error:void 0,email:void 0,username:void 0,description:void 0,avatarFile:void 0,avatarURL:void 0,scoreCard:void 0},e.setAvatarState=function(a){e.setState({avatarFile:a.target.files[0]})},e.handleAvatarUpload=Object(L.a)(j.a.mark((function a(){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(t=new FormData).append("avatar",e.state.avatarFile),a.prev=2,a.next=5,D.a.post("/api/users/me/avatar",t);case 5:a.sent.data.success&&e.setState({avatarFile:void 0,error:void 0}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(2),console.log(a.t0.response.data),e.setState({avatarFile:void 0,error:a.t0.response.data.error});case 13:case"end":return a.stop()}}),a,null,[[2,9]])}))),e.componentDidMount=function(){e.fetchProfile()},e.componentDidUpdate=function(){e.state.avatarFile&&(e.handleAvatarUpload(),e.fetchProfile())},e.fetchProfile=Object(L.a)(j.a.mark((function a(){var t;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,D.a.get("api/scores/my-score");case 3:t=a.sent,"/api/users/me/avatar",t.data.success&&e.setState((function(e){return{loaded:!0,error:void 0,email:t.data.email,username:t.data.username,avatarFile:void 0,avatarURL:"/api/users/me/avatar",scoreCard:t.data.scoreCard}})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),e.setState((function(e){return{loaded:!1,avatarFile:void 0,email:void 0,username:void 0,error:a.t0.message}}));case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),e.renderLoader=function(){return r.a.createElement("div",null,"FETCHING YOUR PROFILE NOW")},e.renderProfile=function(){return r.a.createElement("div",{className:"profile-card"},r.a.createElement("div",{className:"top-card"}),r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"image-upload"},r.a.createElement("label",{htmlFor:"file-input"},r.a.createElement("img",{src:e.state.avatarURL})),r.a.createElement("input",{type:"file",id:"file-input",name:"file",onChange:e.setAvatarState}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("h1",null,e.state.username),r.a.createElement("h2",null,e.state.email),r.a.createElement("h3",null,e.state.description)),r.a.createElement("div",{className:"contact-details"},r.a.createElement("div",null,"test"),r.a.createElement("div",null,"test"),r.a.createElement("div",null,"test")),e.state.error&&r.a.createElement("div",null,e.state.error))},e}return Object(R.a)(t,[{key:"render",value:function(){return console.log(this.state),r.a.createElement(r.a.Fragment,null,!this.state.loaded&&this.renderLoader(),this.state.loaded&&this.renderProfile())}}]),t}(r.a.Component)),te=function(e){var a=e.loggedIn;return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},a&&r.a.createElement(ae,null),!a&&r.a.createElement("div",null,"Please login to continue")))},ne=(t(183),function(e){var a=e.title,t=e.description;return r.a.createElement("div",{className:"main__container"},r.a.createElement("div",{className:"card__container"},r.a.createElement("div",{className:"card__front"},r.a.createElement("div",{className:"text-content"},r.a.createElement("div",{className:"title-content"},a))),r.a.createElement("div",{className:"card__back"},r.a.createElement("div",{className:"text-content"},t))))}),re=(t(184),{color:"#E85A4F"}),le={tip1:{title:r.a.createElement("h1",{style:re},"Tip one"),tip:r.a.createElement("p",null,"All 3x3 mini squares, all rows and all columns must contain the numbers 1-9. ",r.a.createElement("br",null)," No duplicates allowed!")},tip2:{title:r.a.createElement("h1",{style:re},"Tip two"),tip:r.a.createElement("p",null,"Look for the most filled out columns/rows/mini-squares first")},tip3:{title:r.a.createElement("h1",{style:re},"Tip three"),tip:r.a.createElement("p",null,"Figure out the potential possibilities in each square. Eventually, you'll narrow each square down to only one possible number!")},tip4:{title:r.a.createElement("h1",{style:re},"Tip four"),tip:r.a.createElement("p",null,"Be patient and try and solve the puzzle yourself before looking at the solution. Thats the only way to get better!")}},ce=function(){return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement("div",{className:"how-to__container"},"Mouse over tips to reveal them"),r.a.createElement("div",{className:"tips__container"},Object.keys(le).map((function(e,a){var t=le[e];return r.a.createElement(ne,{key:a,title:t.title,description:t.tip})})))))},se=t(19),oe=(t(185),{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),ie=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"donate-label"},"If you'd like to donate, you can do so with a debit or credit card below"),r.a.createElement(se.CardElement,{style:oe}))},ue=(t(186),function(e){var a=Object(se.useStripe)(),t=Object(se.useElements)(),n=function(){var e=Object(L.a)(j.a.mark((function e(n){var r,l,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a&&t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,D.a.get("/api/payments/secret");case 6:return r=e.sent,l=r.data.client_secret,e.next=10,a.confirmCardPayment("".concat(l),{payment_method:{card:t.getElement(se.CardElement),billing_details:{name:"paul"}}});case 10:(c=e.sent).error?alert("failed to pay"):"succeeded"===c.paymentIntent.status&&alert("success"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),alert("unable to pay");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"checkout__form__container",onSubmit:n},r.a.createElement(ie,null),r.a.createElement("button",{type:"submit",className:"submit-button-stripe",disabled:!a},"Confirm payment"))}),me=function(e){return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},r.a.createElement(ue,null)))},de=(t(187),function(e){var a=function(){var a=Object(L.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{D.a.post("/api/users/logout"),e.history.push("/"),window.location.reload()}catch(t){alert("Sorry, you're stuck logged in!")}case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"}),r.a.createElement("div",{className:"logout-label"},"Are you sure you wish to logout?"),r.a.createElement("div",{className:"logout-buttons__container"},r.a.createElement("button",{onClick:a},"Yes"),r.a.createElement("button",{onClick:function(){e.history.push("/")}},"No")))}),pe=(t(188),function(){var e=Object(n.useState)(!1),a=Object(I.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){l(!0)}));return r.a.createElement("div",{className:"app-body"},r.a.createElement("div",{className:"app-container"},!t&&r.a.createElement("div",{className:"loader-placement"},r.a.createElement(z,null)),t&&r.a.createElement("section",{className:"leaderboard__container"},r.a.createElement("div",{className:"header__container"},r.a.createElement("h1",{className:"leaderboard-header"},"Leaderboard"),r.a.createElement("h3",{className:"leaderboard-subtitle"},"This is the leaderboard for most wins. Only difficulty levels of 10 are considered in the leaderboard.")),r.a.createElement("div",{className:"leaderboard-table"},r.a.createElement("nav",{className:"search"},r.a.createElement("div",{className:"search-title"},r.a.createElement("h1",null,"Current Standings")),r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"search",placeholder:"Search player..."}))),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("th",null,"Rank"),r.a.createElement("th",null,"Player"),r.a.createElement("th",null,"Wins")),r.a.createElement("tbody",null))))))}),fe=function(){var e=Object(n.useState)(!1),a=Object(I.a)(e,2),t=a[0],l=a[1],c=function(){var e=Object(L.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("/api/users/auth",{withCredentials:!0});case 3:e.sent.data.isAuth&&l(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()})),r.a.createElement(x.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(B,{loggedIn:t}),r.a.createElement(A.c,null,r.a.createElement(A.a,{exact:!0,path:"/",component:Y}),r.a.createElement(A.a,{path:"/signup",component:$}),r.a.createElement(A.a,{path:"/login",component:ee}),r.a.createElement(A.a,{path:"/profile",render:function(e){return r.a.createElement(te,Object.assign({},e,{loggedIn:t}))}}),r.a.createElement(A.a,{path:"/how-to-play",component:ce}),r.a.createElement(A.a,{path:"/donate",component:me}),r.a.createElement(A.a,{path:"/leaderboard",component:pe}),r.a.createElement(A.a,{path:"/logout",component:de})),r.a.createElement(J,null)))},ve={difficulty:5,feedback:!0},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_DIFFICULTY":return Object(u.a)({},e,{difficulty:a.value});case"SET_FEEDBACK":return Object(u.a)({},e,{feedback:a.value});default:return e}},be={email:"",username:"",password:"",error:void 0,isLoading:!1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_EMAIL":return Object(u.a)({},e,{email:a.email});case"SET_USERNAME":return Object(u.a)({},e,{username:a.username});case"SET_PASSWORD":return Object(u.a)({},e,{password:a.password});case"SET_ERROR_FIELD":return Object(u.a)({},e,{error:a.payload});case"REMOVE_ERROR_FIELD":return Object(u.a)({},e,{error:void 0});case"IS_LOADING":return Object(u.a)({},e,{isLoading:!0});case"HAS_LOADED":return Object(u.a)({},e,{isLoading:!1});default:return e}},ge=t(66),ye=t(67),Ne=Object(ge.a)("pk_test_51Gr46jKxZD07KMJhc9KCDdlfKT7u2KIlgGq9ASChEsJPldmd1IF9kvIHadV1rkoHLvdCwIXSAi28vK0EIURSWb7I00lHILJ1xz"),Oe={position:M.b.BOTTOM_CENTER,timeout:5e3},Se=Object(s.c)(Object(s.b)({boardState:_,infoState:Ee,signupState:he}));window.store=Se,c.a.render(r.a.createElement(se.Elements,{stripe:Ne},r.a.createElement(o.a,{store:Se},r.a.createElement(M.a,Object.assign({template:ye.a},Oe),r.a.createElement(fe,null)))),document.getElementById("sudoku"))},35:function(e,a,t){},68:function(e,a,t){e.exports=t(189)},77:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.6a565866.chunk.js.map