(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},191:function(e,a,t){},192:function(e,a,t){},193:function(e,a,t){},194:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(17),c=t.n(l),s=t(26),i=t(11),o=(t(81),t(5)),u=t.n(o),m=t(8),d=t(21),p=t(13),f=t(6),v=t(9),E=t.n(v),b=t(30),h=t(31),g=t(36),y=t(35),N=function(e){return{type:"CREATE_NEW_GAME",difficulty:e}},O=t(19),S=(t(99),Object(i.b)((function(e){return{infoState:e.infoState,boardState:e.boardState}}))((function(e){var a=e.dispatch,t=e.infoState,r=e.boardState,l=Object(O.c)();return n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{className:"button new-game",onClick:function(e){a(N(t.difficulty))}},"New Game"),n.a.createElement("button",{className:"button solve",onClick:function(e){r.inPlay?(l.show("Using the solver invalidates your chance of a clean victory!"),a({type:"SHOW_SOLUTION"})):l.error("Please start a new game first")}},"Solution"))}))),w=(t(100),Object(i.b)((function(e){return{boardState:e.boardState,cellValues:e.boardState.cellValues,solvedCellValues:e.boardState.solvedCellValues,activeCells:e.boardState.activeCells,feedback:e.infoState.feedback}}))((function(e){var a=e.cellValues,t=e.solvedCellValues,r=e.rowIndex,l=e.activeCells,c=e.dispatch,s=e.feedback,i=Object(O.c)();return n.a.createElement("tr",null,[1,2,3,4,5,6,7,8,9].map((function(e){var o,u=e-1,m=(o=u,a[r][o]);0===m&&(m="");var d=function(e,a,t){var r=a===e[0]&&t===e[1];return a===e[0]&&!r||t===e[1]&&!r}(l,r,u)?"inPlay":"",p="";return 0===u&&(p+="grid-border-left "),function(e){return 2===e||5===e||8===e}(u)&&(p+="grid-border-right "),function(e){return 0===e}(r)&&(p+="grid-border-top "),function(e){return 2===e||5===e||8===e}(r)&&(p+="grid-border-bottom"),n.a.createElement("td",{key:e,className:"square-cell ".concat(p)},n.a.createElement("input",{className:"square-input ".concat(d),type:"text",value:m,maxLength:"1",onClick:function(e){return c(function(e,a){return{type:"SET_ACTIVE_CELLS",row:e,col:a}}(r,u))},onChange:function(e){if(function(e,r,n){if(0===a.length||0===t.length)return alert("Please start the game"),!1;var l=parseInt(e.target.value);return isNaN(l)?(i.error("You must enter a number between 0 and 9"),!1):t[r][n]===l||!s||(i.error("Invalid input, please try again"),!1)}(e,r,u)){var n=parseInt(e.target.value);c(function(e,a,t){return{type:"SET_CELL_VALUE",row:e,col:a,value:t}}(r,u,n))}}}))})))}))),j=(t(101),Object(i.b)((function(e){return{boardState:e.boardState}}))((function(e){var a=e.boardState,t=e.dispatch,l=a.inPlay,c=a.gameDifficulty,s=a.usedSolver,i=a.cellValues,o=a.solvedCellValues,d=Object(O.c)(),p=function(){var e=Object(m.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={difficulty:c},e.next=3,E.a.patch("/api/scores/update-score",a);case 3:return e.abrupt("return");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){l&&(function(){for(var e=!0,a=0;a<9;a++)for(var t=0;t<9;t++)if(i[a][t]!==o[a][t]){e=!1;break}return e}()&&!s&&(p(),d.success("Congratulations! You won! If you're logged in, we'll track your scores!"),setTimeout((function(){d.info("Creating a new game!"),t(N(c))}),2e3)))})),n.a.createElement("div",{className:"board-container"},n.a.createElement("table",{className:"board"},n.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9].map((function(e){return n.a.createElement(w,{key:e,rowIndex:e-1})})))))}))),_=function(e){return{type:"SET_FEEDBACK",value:e}},k=(t(38),t(102),Object(i.b)((function(e){return{difficulty:e.infoState.difficulty,feedback:e.infoState.feedback}}))((function(e){var a=e.difficulty,t=e.feedback,l=e.dispatch,c=function(e){return e?l(_(!0)):e||l(_(!1)),!0};return n.a.createElement("div",{className:"info-box"},n.a.createElement("div",{className:"app-container"},n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"info-item"},n.a.createElement("label",{className:"info-label"},"Select your difficulty level:"),n.a.createElement("div",{className:"drop-down"},n.a.createElement("button",{className:"drop-down-selection"},a),n.a.createElement("div",{className:"drop-down-content"},[1,2,3,4,5,6,7,8,9,10].map((function(e){return n.a.createElement("button",{className:"option",key:e,value:e,onClick:function(a){l({type:"SET_DIFFICULTY",value:e})}},e)}))))),n.a.createElement("div",{className:"info-item"},n.a.createElement("label",{className:"info-label"},"Would you like real-time feedback as you play?"),n.a.createElement("div",{className:"radio-toggle__container"},n.a.createElement("input",{type:"radio",value:!0,onClick:function(e){return console.log(e)}}),n.a.createElement("label",{className:t?"radio-selected":null,onClick:function(){return c(!0)}},"Yes"),n.a.createElement("input",{type:"radio",value:!1}),n.a.createElement("label",{className:t?null:"radio-selected",onClick:function(){return c(!1)}},"No"))))))}))),C=function(e){Object(g.a)(t,e);var a=Object(y.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"app-body"},n.a.createElement(S,null),n.a.createElement(j,null),n.a.createElement(k,null))}}]),t}(n.a.Component),L=(t(103),function(e){var a=e.loggedIn;return n.a.createElement("div",{className:"app-container"},n.a.createElement("div",{className:"navbar-container"},n.a.createElement("div",{className:"nav-list"},n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/",className:"nav-link",activeClassName:"selected",exact:!0},"Game")),!a&&n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/signup",className:"nav-link",activeClassName:"selected"},"Sign up")),!a&&n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/login",className:"nav-link",activeClassName:"selected"},"Login")),a&&n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/profile",className:"nav-link",activeClassName:"selected"},"Your profile")),n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/leaderboard",className:"nav-link",activeClassName:"selected"},"Leaderboard")),n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/how-to-play",className:"nav-link",activeClassName:"selected"},"How to play")),n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/donate",className:"nav-link",activeClassName:"selected"},"Donate!")),a&&n.a.createElement("div",{className:"list-item"},n.a.createElement(p.b,{to:"/logout",className:"nav-link",activeClassName:"selected"},"Logout")))))}),T=(t(105),function(e){var a=e.loggedIn;return n.a.createElement("header",null,n.a.createElement("div",{className:"app-container"},n.a.createElement("div",{className:"header__container"},n.a.createElement("h1",{className:"header-title"},"Classic Sudoku"),n.a.createElement("h2",{className:"header-subtitle"},"Start playing straight away!"))),n.a.createElement(L,{loggedIn:a}))}),I=(t(106),function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"app-container footer-text"},"\xa92020"))}),R=(t(107),function(e){return n.a.createElement("div",{className:"loader__container"},n.a.createElement("div",{className:"loader"}))}),A=function(e){return{type:"SET_ERROR_FIELD",payload:e}},F=function(e){return{type:"SET_EMAIL_ERROR_FIELD",payload:e}},x=(t(108),t(69)),D=t.n(x),P="Please use a valid email address",V="Your password cannot contain the word password",M=t(32),U=t(33),H=Object(i.b)((function(e){return{signupState:e.signupState}}))((function(e){var a=e.signupState,t=e.dispatch,r=a.error,l=a.email,c=a.password,s=a.username,i=a.isLoading,o=a.errorFields,d=o.emailError,p=o.passwordError,f=function(){var a=Object(m.a)(u.a.mark((function a(r){var n,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),n={email:l,username:s,password:c},a.prev=2,t({type:"IS_LOADING"}),a.next=6,E.a.post("/api/users/register",n);case 6:if(!a.sent.data.success){a.next=12;break}return t({type:"HAS_LOADED"}),t({type:"REMOVE_ERROR_FIELD"}),alert("Successfully registered! Taking you to the login page"),a.abrupt("return",e.history.push("/login"));case 12:a.next=19;break;case 14:a.prev=14,a.t0=a.catch(2),t({type:"HAS_LOADED"}),(i=a.t0.response.data).error.includes("email")?t(A("This email is already in use or not valid, please use a different email")):i.error.includes("username")?t(A("This username has already been taken. Please choose a different username")):t(A("Error registering. Make sure all fields are correct."));case 19:case"end":return a.stop()}}),a,null,[[2,14]])})));return function(e){return a.apply(this,arguments)}}();return n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"},n.a.createElement("div",{className:"signup-container"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",{className:"signup-header"},"Welcome, create a free account"),n.a.createElement("h2",{className:"signup-subtitle"},"Track your scores and more")),n.a.createElement("div",{className:"signup-form"},n.a.createElement("label",{className:"signup-label"},"Email address"),n.a.createElement("input",{className:"signup-field",value:a.email,onChange:function(e){var a=e.currentTarget.value.trim();return D.a.isEmail(a)?t(F("")):t(F(P)),t(function(e){return{type:"SET_EMAIL",email:e}}(a))}}),d&&n.a.createElement("div",{className:"error-field"},d),n.a.createElement("label",{className:"signup-label"},"Username"),n.a.createElement("input",{className:"signup-field",value:a.username,onChange:function(e){var a=e.currentTarget.value.trim();t(function(e){return{type:"SET_USERNAME",username:e}}(a))}}),n.a.createElement("label",{className:"signup-label"},"Password"),n.a.createElement("input",{type:"password",className:"signup-field",value:a.password,onChange:function(e){var a=e.currentTarget.value.trim();a.toLowerCase().includes("password")&&t({type:"SET_PASSWORD_ERROR_FIELD",payload:V}),t(function(e){return{type:"SET_PASSWORD",password:e}}(a))}}),p&&n.a.createElement("div",{className:"error-field"},p),r&&n.a.createElement("div",{className:"error-container"},n.a.createElement("label",null,r)),n.a.createElement("div",{className:"submit-button-container"},n.a.createElement("button",{type:"submit",className:"submit-button-signup",onClick:f},n.a.createElement("span",null,n.a.createElement(M.a,{icon:U.a}),n.a.createElement("span",{className:"signup-button-text"},"Create account!"))))),i&&n.a.createElement(R,null))))})),W=(t(186),Object(i.b)((function(e){return{signUpState:e.signupState}}))((function(e){var a=e.dispatch,t=e.signUpState.isLoading,l=Object(r.useState)(""),c=Object(d.a)(l,2),s=c[0],i=c[1],o=Object(r.useState)(""),f=Object(d.a)(o,2),v=f[0],b=f[1],h=Object(r.useState)(""),g=Object(d.a)(h,2),y=g[0],N=g[1],O=function(){var t=Object(m.a)(u.a.mark((function t(r){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n={email:s,password:v},t.prev=2,a({type:"IS_LOADING"}),t.next=6,E.a.post("/api/users/login",n);case 6:N(""),a({type:"HAS_LOADED"}),e.history.push("/"),window.location.reload(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(2),a({type:"HAS_LOADED"}),N(t.t0.response.data.error);case 16:return t.abrupt("return");case 17:case"end":return t.stop()}}),t,null,[[2,12]])})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"},n.a.createElement("div",{className:"login-container"},n.a.createElement("div",{className:"title-container"},n.a.createElement("h1",{className:"login-header"},"Sign in!"),n.a.createElement("h2",{className:"login-subheader"},"Sign in!")),n.a.createElement("div",{className:"login-form"},n.a.createElement("label",{className:"login-label"},"Email address"),n.a.createElement("input",{className:"login-field",name:"email",onChange:function(e){var a=e.currentTarget.value.trim();console.log(a.trim()),i(a)},value:s}),n.a.createElement("label",{className:"login-label"},"Password"),n.a.createElement("input",{className:"login-field",type:"password",name:"password",onChange:function(e){var a=e.currentTarget.value.trim();console.log(a),b(a)},value:v}),n.a.createElement("button",{type:"submit",className:"login-submit-button",onClick:O},n.a.createElement("span",null,n.a.createElement(M.a,{icon:U.a}),n.a.createElement("span",{className:"login-button-label"},"Login")))),y&&n.a.createElement("div",{className:"error_container"},n.a.createElement("label",null,"Could not find email/password combination. Please try again.")),n.a.createElement("p",{className:"login-display-signup"},"New here? ",n.a.createElement(p.b,{to:"/signup"},"create account"))),t&&n.a.createElement(R,null)))}))),Y=(t(187),function(e){Object(g.a)(t,e);var a=Object(y.a)(t);function t(){var e;Object(b.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={loaded:!0,error:void 0,email:void 0,username:void 0,description:void 0,avatarFile:void 0,avatarURL:void 0,scoreCard:void 0},e.setAvatarState=function(a){e.setState({avatarFile:a.target.files[0]})},e.handleAvatarUpload=Object(m.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(t=new FormData).append("avatar",e.state.avatarFile),a.prev=2,a.next=5,E.a.post("/api/users/me/avatar",t);case 5:a.sent.data.success&&e.setState({avatarFile:void 0,error:void 0}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),e.setState({avatarFile:void 0,error:a.t0.response.data.error});case 12:case"end":return a.stop()}}),a,null,[[2,9]])}))),e.componentDidMount=function(){e.fetchProfile()},e.componentDidUpdate=function(){e.state.avatarFile&&(e.handleAvatarUpload(),e.fetchProfile())},e.fetchProfile=Object(m.a)(u.a.mark((function a(){var t;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,E.a.get("api/scores/my-score");case 3:t=a.sent,"/api/users/me/avatar",t.data.success&&e.setState((function(e){return{loaded:!0,error:void 0,email:t.data.email,username:t.data.username,avatarFile:void 0,avatarURL:"/api/users/me/avatar",scoreCard:t.data.scoreCard}})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),e.setState((function(e){return{loaded:!1,avatarFile:void 0,email:void 0,username:void 0,error:a.t0.message}}));case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),e.renderLoader=function(){return n.a.createElement("div",null,"FETCHING YOUR PROFILE NOW")},e.renderProfile=function(){return n.a.createElement("div",{className:"profile-card"},n.a.createElement("div",{className:"top-card"}),n.a.createElement("div",{className:"image-container"},n.a.createElement("div",{className:"image-upload"},n.a.createElement("label",{htmlFor:"file-input"},n.a.createElement("img",{src:e.state.avatarURL})),n.a.createElement("input",{type:"file",id:"file-input",name:"file",onChange:e.setAvatarState}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("h1",null,e.state.username),n.a.createElement("h2",null,e.state.email),n.a.createElement("h3",null,e.state.description)),n.a.createElement("div",{className:"contact-details"},n.a.createElement("div",null,"test"),n.a.createElement("div",null,"test"),n.a.createElement("div",null,"test")),e.state.error&&n.a.createElement("div",null,e.state.error))},e}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,!this.state.loaded&&this.renderLoader(),this.state.loaded&&this.renderProfile())}}]),t}(n.a.Component)),G=function(e){var a=e.loggedIn;return n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"},a&&n.a.createElement(Y,null),!a&&n.a.createElement("div",null,"Please login to continue")))},q=(t(188),function(e){var a=e.title,t=e.description;return n.a.createElement("div",{className:"main__container"},n.a.createElement("div",{className:"card__container"},n.a.createElement("div",{className:"card__front"},n.a.createElement("div",{className:"text-content"},n.a.createElement("div",{className:"tile-title-content"},a))),n.a.createElement("div",{className:"card__back"},n.a.createElement("div",{className:"text-content"},t))))}),K=(t(189),{color:"#bf9949"}),B={tip1:{title:n.a.createElement("h1",{style:K},"Tip one"),tip:n.a.createElement("p",null,"All 3x3 mini squares, all rows and all columns must contain the numbers 1-9. ",n.a.createElement("br",null)," No duplicates allowed!")},tip2:{title:n.a.createElement("h1",{style:K},"Tip two"),tip:n.a.createElement("p",null,"Look for the most filled out columns/rows/mini-squares first")},tip3:{title:n.a.createElement("h1",{style:K},"Tip three"),tip:n.a.createElement("p",null,"Figure out the potential possibilities in each square. Eventually, you'll narrow each square down to only one possible number!")},tip4:{title:n.a.createElement("h1",{style:K},"Tip four"),tip:n.a.createElement("p",null,"Be patient and try and solve the puzzle yourself before looking at the solution. Thats the only way to get better!")}},J=function(){return n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"},n.a.createElement("div",{className:"how-to__container"},"Mouse over tips to reveal them"),n.a.createElement("div",{className:"tips__container"},Object.keys(B).map((function(e,a){var t=B[e];return n.a.createElement(q,{key:a,title:t.title,description:t.tip})})))))},z=t(20),X=(t(190),{style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}}),Z=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"donate-label"},"If you'd like to donate, you can do so with a debit or credit card below"),n.a.createElement(z.CardElement,{style:X}))},Q=(t(191),function(e){var a=Object(z.useStripe)(),t=Object(z.useElements)(),r=function(){var e=Object(m.a)(u.a.mark((function e(r){var n,l,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),a&&t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,E.a.get("/api/payments/secret");case 6:return n=e.sent,l=n.data.client_secret,e.next=10,a.confirmCardPayment("".concat(l),{payment_method:{card:t.getElement(z.CardElement),billing_details:{name:"paul"}}});case 10:(c=e.sent).error?alert("failed to pay"):"succeeded"===c.paymentIntent.status&&alert("success"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),alert("unable to pay");case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(a){return e.apply(this,arguments)}}();return n.a.createElement("form",{className:"checkout__form__container",onSubmit:r},n.a.createElement(Z,null),n.a.createElement("button",{type:"submit",className:"submit-button-stripe",disabled:!a},"Confirm payment"))}),$=function(e){return n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"},n.a.createElement(Q,null)))},ee=(t(192),function(e){var a=function(){var a=Object(m.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:try{E.a.post("/api/users/logout"),e.history.push("/"),window.location.reload()}catch(t){alert("Sorry, you're stuck logged in!")}case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"}),n.a.createElement("div",{className:"logout-label"},"Are you sure you wish to logout?"),n.a.createElement("div",{className:"logout-buttons__container"},n.a.createElement("button",{onClick:a},"Yes"),n.a.createElement("button",{onClick:function(){e.history.push("/")}},"No")))}),ae=t(18),te=t(3),re=(t(193),function(e){var a=e.rank,t=e.userName,r=e.wins;return n.a.createElement("tr",null,n.a.createElement("td",null,a),n.a.createElement("td",null,t),n.a.createElement("td",null,r))}),ne=Object(i.b)((function(e){var a,t,r=e.playerScoresState;return{playerScores:(a=r.userScores,t=r.nameFilter,t?a.filter((function(e){return e.userName.includes(t)})):a)}}))((function(e){var a=e.dispatch,t=e.playerScores,l=Object(r.useState)(!1),c=Object(d.a)(l,2),s=c[0],i=c[1],o=function(){var e=Object(m.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/scores/leaderboard");case 3:return t=e.sent,r=p(t.data.userData),n=r.map((function(e,a){return Object(te.a)(Object(te.a)({},e),{},{rank:a+1})})),a({type:"SET_PLAYER_SCORES",scores:Object(ae.a)(n)}),e.abrupt("return",i(!0));case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(e){return e.filter((function(e){return e.wins>0})).sort((function(e,a){return a.wins-e.wins}))};return Object(r.useEffect)((function(){o()}),[]),n.a.createElement("div",{className:"app-body"},n.a.createElement("div",{className:"app-container"},!s&&n.a.createElement("div",{className:"loader-placement"},n.a.createElement(R,null)),s&&n.a.createElement("section",{className:"leaderboard__container"},n.a.createElement("div",{className:"header__container"},n.a.createElement("h1",{className:"leaderboard-header"},"Leaderboard"),n.a.createElement("h3",{className:"leaderboard-subtitle"},"This is the leaderboard for most wins. Only difficulty levels of 10 are considered in the leaderboard.")),n.a.createElement("div",{className:"leaderboard-table__container"},n.a.createElement("nav",{className:"search"},n.a.createElement("div",{className:"search-title"},n.a.createElement("h1",null,"Current Standings")),n.a.createElement("div",{className:"search-bar"},n.a.createElement("input",{type:"search",placeholder:"Search player...",onChange:function(e){var t=e.target.value;a({type:"SET_PLAYER_FILTER",playerName:t})}}))),n.a.createElement("table",{className:"leaderboard-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Rank"),n.a.createElement("th",null,"Player"),n.a.createElement("th",null,"Wins"))),n.a.createElement("tbody",null,null===t||void 0===t?void 0:t.map((function(e,a){return n.a.createElement(re,{rank:e.rank,userName:e.userName,key:a,wins:e.wins})}))))))))})),le=function(){var e=Object(r.useState)(!1),a=Object(d.a)(e,2),t=a[0],l=a[1],c=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("/api/users/auth",{withCredentials:!0});case 3:e.sent.data.isAuth&&l(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),l(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()})),n.a.createElement(p.a,null,n.a.createElement("div",{className:"app"},n.a.createElement(T,{loggedIn:t}),n.a.createElement(f.c,null,n.a.createElement(f.a,{exact:!0,path:"/",component:C}),n.a.createElement(f.a,{path:"/signup",component:H}),n.a.createElement(f.a,{path:"/login",component:W}),n.a.createElement(f.a,{path:"/profile",render:function(e){return n.a.createElement(G,Object.assign({},e,{loggedIn:t}))}}),n.a.createElement(f.a,{path:"/how-to-play",component:J}),n.a.createElement(f.a,{path:"/donate",component:$}),n.a.createElement(f.a,{path:"/leaderboard",component:ne}),n.a.createElement(f.a,{path:"/logout",component:ee})),n.a.createElement(I,null)))},ce=t(34),se=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}},ie=function(e){for(var a=e.grid,t=e.col,r=e.number,n=0;n<9;n++)if(a[n][t]===r)return!0;return!1},oe=function(e){var a=e.grid,t=e.row,r=e.number;return!!a[t].includes(r)},ue=function(e){var a=e.grid,t=e.row,r=e.col,n=[];if(t<3)if(r<3)for(var l=0;l<3;l++)n.push([a[l][0],a[l][1],a[l][2]]);else if(r<6)for(var c=0;c<3;c++)n.push([a[c][3],a[c][4],a[c][5]]);else for(var s=0;s<3;s++)n.push([a[s][6],a[s][7],a[s][8]]);else if(t<6)if(r<3)for(var i=3;i<6;i++)n.push([a[i][0],a[i][1],a[i][2]]);else if(r<6)for(var o=3;o<6;o++)n.push([a[o][3],a[o][4],a[o][5]]);else for(var u=3;u<6;u++)n.push([a[u][6],a[u][7],a[u][8]]);else if(r<3)for(var m=6;m<9;m++)n.push([a[m][0],a[m][1],a[m][2]]);else if(r<6)for(var d=6;d<9;d++)n.push([a[d][3],a[d][4],a[d][5]]);else for(var p=6;p<9;p++)n.push([a[p][6],a[p][7],a[p][8]]);return n},me=function(e){var a=e.square,t=e.number;return[].concat(Object(ae.a)(a[0]),Object(ae.a)(a[1]),Object(ae.a)(a[2])).includes(t)},de=function(e){for(var a=0;a<9;a++)for(var t=0;t<9;t++)if(0===e[a][t])return!1;return!0};var pe=function e(a){for(var t=[1,2,3,4,5,6,7,8,9],r=0,n=0,l=0;l<81;l++)if(n=l%9,0===a[r=Math.floor(l/9)][n]){se(t);var c,s=Object(ce.a)(t);try{for(s.s();!(c=s.n()).done;){var i=c.value;if(!oe({grid:a,row:r,number:i})&&!ie({grid:a,col:n,number:i})){var o=ue({grid:a,row:r,col:n});if(!me({square:o,number:i})){if(a[r][n]=i,de(a))return!0;if(e(a))return!0}}}}catch(u){s.e(u)}finally{s.f()}break}a[r][n]=0};var fe=function(){var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];return pe(e),e};var ve=function(e){for(var a=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],t=0;t<9;t++)for(var r=0;r<9;r++)a[t][r]=e[t][r];return a},Ee={counter:0};var be=function(){return Math.floor(9*Math.random())};var he=function e(a){for(var t=[1,2,3,4,5,6,7,8,9],r=0,n=0,l=0;l<81;l++)if(n=l%9,0===a[r=Math.floor(l/9)][n]){var c,s=Object(ce.a)(t);try{for(s.s();!(c=s.n()).done;){var i=c.value;if(!oe({grid:a,row:r,number:i})&&!ie({grid:a,col:n,number:i})){var o=ue({grid:a,row:r,col:n});if(!me({square:o,number:i})){if(a[r][n]=i,de(a)){Ee.counter++;break}if(e(a))return!0}}}}catch(u){s.e(u)}finally{s.f()}break}};var ge=function(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;a>0;){for(var t=be(),r=be();0===e[t][r];)t=be(),r=be();var n=e[t][r];e[t][r]=0;var l=ve(e);Ee.counter=0,he(l),1!==Ee.counter&&(e[t][r]=n,a--)}return e},ye={cellValues:[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],solvedCellValues:[],activeCells:[],difficulty:5,inPlay:!1,gameOver:!1,usedSolver:!1,gameDifficulty:5},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CREATE_NEW_GAME":var t=fe(),r=ve(t),n=ge(r,a.difficulty);return Object(te.a)(Object(te.a)({},e),{},{inPlay:!0,cellValues:n,solvedCellValues:t,gameDifficulty:a.difficulty});case"SET_ACTIVE_CELLS":var l=[];return l.push(a.row,a.col),Object(te.a)(Object(te.a)({},e),{},{activeCells:l});case"SET_CELL_VALUE":var c=e.cellValues;return c[a.row][a.col]=a.value,Object(te.a)(Object(te.a)({},e),{},{cellValues:Object(ae.a)(c)});case"SHOW_SOLUTION":var s=e.solvedCellValues;return Object(te.a)(Object(te.a)({},e),{},{usedSolver:!0,gameOver:!0,cellValues:s});case"GAME_WON":return Object(te.a)(Object(te.a)({},e),{},{gameOver:!0});default:return e}},Oe={difficulty:5,feedback:!0},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_DIFFICULTY":return Object(te.a)(Object(te.a)({},e),{},{difficulty:a.value});case"SET_FEEDBACK":return Object(te.a)(Object(te.a)({},e),{},{feedback:a.value});default:return e}},we={email:"",username:"",password:"",errorFields:{emailError:"",passwordError:""},error:void 0,isLoading:!1},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_EMAIL":return Object(te.a)(Object(te.a)({},e),{},{email:a.email});case"SET_EMAIL_ERROR_FIELD":var t=Object(te.a)(Object(te.a)({},e.errorFields),{},{emailError:a.payload});return Object(te.a)(Object(te.a)({},e),{},{errorFields:t});case"SET_PASSWORD_ERROR_FIELD":var r=Object(te.a)(Object(te.a)({},e.errorFields),{},{passwordError:a.payload});return Object(te.a)(Object(te.a)({},e),{},{errorFields:r});case"SET_USERNAME":return Object(te.a)(Object(te.a)({},e),{},{username:a.username});case"SET_PASSWORD":return Object(te.a)(Object(te.a)({},e),{},{password:a.password});case"SET_ERROR_FIELD":return Object(te.a)(Object(te.a)({},e),{},{error:a.payload});case"REMOVE_ERROR_FIELD":return Object(te.a)(Object(te.a)({},e),{},{error:void 0});case"IS_LOADING":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!0});case"HAS_LOADED":return Object(te.a)(Object(te.a)({},e),{},{isLoading:!1});default:return e}},_e={userScores:[],nameFilter:void 0},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PLAYER_SCORES":return Object(te.a)(Object(te.a)({},e),{},{userScores:Object(ae.a)(a.scores)});case"SET_PLAYER_FILTER":return Object(te.a)(Object(te.a)({},e),{},{nameFilter:a.playerName});default:return e}},Ce=t(70),Le=t(71),Te=Object(Ce.a)("pk_test_51Gr46jKxZD07KMJhc9KCDdlfKT7u2KIlgGq9ASChEsJPldmd1IF9kvIHadV1rkoHLvdCwIXSAi28vK0EIURSWb7I00lHILJ1xz"),Ie={position:O.b.BOTTOM_CENTER,timeout:5e3},Re=Object(s.c)(Object(s.b)({boardState:Ne,infoState:Se,signupState:je,playerScoresState:ke}));window.store=Re,c.a.render(n.a.createElement(z.Elements,{stripe:Te},n.a.createElement(i.a,{store:Re},n.a.createElement(O.a,Object.assign({template:Le.a},Ie),n.a.createElement(le,null)))),document.getElementById("sudoku"))},38:function(e,a,t){},72:function(e,a,t){e.exports=t(194)},81:function(e,a,t){},99:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.4f4d224e.chunk.js.map