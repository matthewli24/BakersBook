(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/default-thumbnail.342e478c.png"},103:function(e,t,a){e.exports=a(240)},126:function(e,t,a){},136:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){e.exports=a.p+"static/media/bread.f987c644.jpg"},226:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(97),r=a.n(c),l=a(9),i=a(32),o=a(3),u=a(4),m=a(6),d=a(5),h=a(7),p=a(10),g=a.n(p);a(126);var f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={recipes:[],search:""},a.handleSearch=function(e){a.setState({search:e.target.value},function(){console.log(a.state.search)})},a.getRecipes=function(){g()({method:"get",url:"/api/v1/recipe"}).then(function(e){a.setState({recipes:e.data},function(){console.log("The recipes are: ",a.state.recipes)})}).catch(function(e){console.log(e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scroll(0,0),this.getRecipes()}},{key:"render",value:function(){var e=this,t=this.state,a=t.recipes,n=t.search,c=this.props.location.state.category;return s.a.createElement("div",{className:"recipes_list"},s.a.createElement("h1",{className:"category_Title"},c),s.a.createElement("span",{className:"search_icon"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("input",{type:"text",value:n,placeholder:"Search for a Recipe",onChange:this.handleSearch}),s.a.createElement("div",{className:"listofRecipes"},a.filter(function(e){return function(t){return t.name.toLowerCase().includes(e.toLowerCase())||!e}}(n)).map(function(t){return a.length?t.category===e.props.location.state.category?s.a.createElement("div",{className:"recipe_Box",key:t.name},s.a.createElement(l.c,{to:"/viewRecipe/?ref="+t.rid},s.a.createElement("h2",{className:"recipe_title"},s.a.createElement("u",null,t.name)),s.a.createElement("img",{className:"recipe__box-img",src:t.imageUrl,alt:t.name}),s.a.createElement("h4",{className:"recipe_ingredients"},"Ingredients: "),t.ingredient.map(function(e,a){return t.ingredient.length?s.a.createElement("div",{key:a},s.a.createElement("ul",null,s.a.createElement("li",null,e.aIngredient))):null}))):void 0:s.a.createElement("h1",null,"No recipes are available.")})))}}]),t}(n.Component),b=a(72),E=a(15),v=a(100),y=a.n(v),k=(a(82),a(136),a(101)),N=a.n(k),O=a(74),C=a.n(O);C.a.initializeApp({apiKey:"AIzaSyCrbLgm-7pX_vR3OL09InOTq49oFUd_BbI",authDomain:"bakersbook-74fd9.firebaseapp.com",databaseURL:"https://bakersbook-74fd9.firebaseio.com",projectId:"bakersbook-74fd9",storageBucket:"bakersbook-74fd9.appspot.com",messagingSenderId:"104722015950"});var j=C.a,w=(a(216),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).handleCategory=function(e){e.preventDefault();var t=e.target.value;a.props.categoryChange(t)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"categories_section"},s.a.createElement("section",{className:"step2"},s.a.createElement("input",{className:"categoriesBtn",type:"button",value:"Cake",onClick:this.handleCategory}),s.a.createElement("input",{className:"categoriesBtn",type:"button",value:"Cookies",onClick:this.handleCategory}),s.a.createElement("input",{className:"categoriesBtn",type:"button",value:"Bread",onClick:this.handleCategory})))}}]),t}(n.Component)),I=j.storage().ref().child("images"),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleNameChange=function(e){a.setState({recipeName:e.target.value},function(){console.log("The recipe name is: ",a.state.recipeName)})},a.categoryChange=function(e){a.setState({category:e},function(){console.log("The category is: ",a.state.category)})},a.handleIngredientChange=function(e){return function(t){var n=a.state.ingredient.map(function(a,n){return e!==n?a:Object(b.a)({},a,{aIngredient:t.target.value})});a.setState({ingredient:n}),console.log("The ingredients: ",n)}},a.handleAddIngredient=function(e){"Enter"===e.key&&a.setState({ingredient:a.state.ingredient.concat([{aIngredient:""}])})},a.handleRemoveIngredient=function(e){return function(){console.log("the index",e);var t=a.state.ingredient.filter(function(t,a){return e!==a});a.setState({ingredient:t},function(){console.log(a.state.ingredient)})}},a.handleInstructionChange=function(e){return function(t){var n=a.state.recipe.map(function(a,n){return e!==n?a:Object(b.a)({},a,{instruction:t.target.value})});a.setState({recipe:n}),console.log("The recipe: ",n)}},a.handleAddInstruction=function(e){"Enter"===e.key&&a.setState({recipe:a.state.recipe.concat([{instruction:""}])})},a.handleRemoveInstruction=function(e){return function(){console.log("the index",e);var t=a.state.recipe.filter(function(t,a){return e!==a});a.setState({recipe:t},function(){console.log(a.state.recipe)})}},a.handleUpload=function(e){console.log(e.target.files[0]);var t=e.target.files[0],n=e.target.files[0].name,s=I.child(n);s.put(t).then(function(e){console.log(e),console.log("Uploaded a blob or file!"),s.getDownloadURL().then(function(e){console.log("URL: ".concat(e)),a.setState({imageUrl:e})}).catch(function(e){console.log("Error Downloading URL:",e)})}).catch(function(e){console.log("Error uploading file:",e)})},a.handleSubmit=function(e){e.preventDefault(),console.log("the access token",a.props.accessToken),console.log("Submiting form..."),g()({method:"post",url:"/api/v1/recipe",headers:{Authorization:"Bearer ".concat(a.props.accessToken)},data:{name:a.state.recipeName,ingredient:a.state.ingredient,category:a.state.category,recipe:a.state.recipe,imageUrl:a.state.imageUrl}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),a.resetForm()},a.resetForm=function(){a.setState(a.baseState),window.scrollTo(0,0)},a.state={recipeName:"",aIngredient:"",ingredient:[{aIngredient:""}],instruction:"",category:"",recipe:[{instruction:""}],rid:"",imageUrl:"",accessToken:""},a.baseState=a.state,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this;y.a.init();var t=""===this.state.imageUrl?s.a.createElement("img",{className:"thumbnailConstraints",src:N.a}):s.a.createElement("img",{className:"thumbnailConstraints",src:this.state.imageUrl});return s.a.createElement("div",{className:"recipeContainer"},s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("section",{className:"step1"},s.a.createElement("div",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600"},s.a.createElement("h2",null," To start, let's name your recipe!"),s.a.createElement("input",{required:!0,type:"text",name:"recipeName",value:this.state.recipeName,placeholder:"Enter recipe name",onChange:this.handleNameChange}),s.a.createElement("div",null,s.a.createElement("i",{className:"fas fa-chevron-down"})))),s.a.createElement("section",{className:"step2"},s.a.createElement("h2",null," Pick the Category "),s.a.createElement(w,{categoryChange:this.categoryChange})),s.a.createElement("section",{className:"step3"},s.a.createElement("div",{"data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600"},s.a.createElement("h2",null," What are your ingredients? "),this.state.ingredient.map(function(t,a){return s.a.createElement("div",{className:"Instructions",key:a},s.a.createElement("input",{autoFocus:!0,required:!0,type:"text",placeholder:"Add a Ingredient",value:t.aIngredient,onChange:e.handleIngredientChange(a),onKeyPress:e.handleAddIngredient}),s.a.createElement("button",{type:"button",onClick:e.handleRemoveIngredient(a),className:"deleteBtn"},s.a.createElement("i",{className:"far fa-trash-alt"})))}),s.a.createElement("div",null,s.a.createElement("i",{className:"fas fa-chevron-down"})))),s.a.createElement("section",{className:"step4"},s.a.createElement("div",{"data-aos":"fade-zoom-in","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600"},s.a.createElement("h2",null," What's your secret recipe? "),this.state.recipe.map(function(t,a){return s.a.createElement("div",{className:"Instructions",key:a},s.a.createElement("input",{autoFocus:!0,required:!0,type:"text",placeholder:"Add a instruction",value:t.instruction,onChange:e.handleInstructionChange(a),onKeyPress:e.handleAddInstruction}),s.a.createElement("button",{type:"button",onClick:e.handleRemoveInstruction(a),className:"deleteBtn"},s.a.createElement("i",{className:"far fa-trash-alt"})))}),s.a.createElement("div",null,s.a.createElement("i",{className:"fas fa-chevron-down"})))),s.a.createElement("section",{className:"step5"},s.a.createElement("div",{"data-aos":"fade-left","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"600"},s.a.createElement("h2",null," Set your thumbnail picture for your recipe. "),s.a.createElement("div",{className:"thumbnail"},t,s.a.createElement("br",null),s.a.createElement("input",{required:!0,type:"file",name:"pic",accept:"image/*",onChange:this.handleUpload})))),s.a.createElement("input",{type:"submit"})))}}]),t}(n.Component),T=Object(E.b)(function(e){return{accessToken:e.auth.accessToken}})(S),U=a(16),x=a(28),R=(a(217),function(e){return{type:"get_token",payload:{accessToken:e.accessToken,success:e.success}}}),D=function(){return{type:"del_token"}},_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={firstname:"",lastname:"",username:"",email:"",password:"",verify_password:"",success:!1,message:"",verify:"Password does not match",visible:!0,showError:!1},a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a.handleUserInput=a.handleUserInput.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleUserInput",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("Signing Up"),g.a.post("api/v1/register",{email:this.state.email,password:this.state.password,username:this.state.username,firstname:this.state.firstname,lastname:this.state.lastname}).then(function(e){console.log(e),e.data.success?(t.props.getToken(e.data),t.setState({success:e.data.success,accessToken:e.data.accessToken,message:e.data.message}),t.props.history.push("/")):t.setState({success:e.data.success,message:e.data.message})}).catch(function(e){console.log("Authorization failed: "+e.message)})}},{key:"verifyPassword",value:function(e){e.preventDefault(),this.state.password!==this.state.verify_password?this.setState({visible:!0,showError:!0}):this.setState({visible:!1,showError:!1})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"loginWrapper"},s.a.createElement("form",{className:"registerForm"},s.a.createElement("h1",null,"Register"),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"allLabels"},"First Name:"),s.a.createElement("input",{className:"allInputs",type:"text",name:"firstname",required:!0,onChange:this.handleUserInput})),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"allLabels"},"Last Name:"),s.a.createElement("input",{className:"allInputs",type:"text",name:"lastname",required:!0,onChange:this.handleUserInput})),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"allLabels"},"User Name:"),s.a.createElement("input",{className:"allInputs",type:"text",name:"username",required:!0,onChange:this.handleUserInput})),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"allLabels"},"Email:"),s.a.createElement("input",{className:"allInputs",type:"text",name:"email",required:!0,onChange:this.handleUserInput})),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"allLabels"},"Password:"),s.a.createElement("input",{className:"allInputs",type:"password",name:"password",required:!0,onChange:this.handleUserInput})),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"allLabels"},"Verify Password:"),s.a.createElement("input",{className:"allInputs",type:"password",name:"verify_password",required:!0,onChange:this.handleUserInput,onKeyUp:this.verifyPassword.bind(this)})),s.a.createElement("div",null,s.a.createElement("input",{className:"message-box",id:"message",disabled:!0,readOnly:!0,value:this.state.message,size:"30"})),this.state.showError&&s.a.createElement("input",{className:"message-box",id:"message",disabled:!0,readOnly:!0,value:this.state.verify,size:"30"}),s.a.createElement("br",null),s.a.createElement("button",{className:"submitButtonRegister",type:"submit",disabled:this.state.visible,onClick:this.handleSubmit.bind(this)},"Register"))))}}]),t}(n.Component),L=Object(E.b)(function(e){return{accessToken:e.auth.accessToken}},{getToken:R})(_),B=(a(218),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={email:"",password:"",success:!1,accessToken:"",message:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("Logging In"),g.a.post("api/v1/signin",{email:this.state.email,password:this.state.password}).then(function(e){console.log(e),e.data.success?(t.props.getToken(e.data),t.setState({success:e.data.success,accessToken:e.data.accessToken,message:e.data.message}),t.props.history.push({pathname:"/recipeform"})):t.setState({success:e.data.success,message:e.data.message})}).catch(function(e){console.log("Authorization failed: "+e.message)})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"Wrapper"},s.a.createElement("form",{className:"loginForm"},s.a.createElement("h1",null,"Login"),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"labelWrapper"},"Email:"),s.a.createElement("input",{required:!0,className:"inputsWrapper",type:"text",name:"email",onChange:this.handleChange.bind(this)})),s.a.createElement("div",{className:"eachDiv"},s.a.createElement("label",{className:"labelWrapper"},"Password:"),s.a.createElement("input",{required:!0,className:"inputsWrapper",type:"password",name:"password",onChange:this.handleChange.bind(this)})),s.a.createElement("div",null,s.a.createElement("input",{className:"messageBox",id:"message",disabled:!0,readOnly:!0,value:this.state.message,size:"30"})),s.a.createElement("input",{className:"submitButton",type:"submit",onClick:this.handleSubmit.bind(this)}))))}}]),t}(n.Component)),A=Object(E.b)(function(e){return{accessToken:e.auth.accessToken}},{getToken:R})(B),P=(a(219),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).categoryChange=function(e){a.setState({category:e},function(){console.log("The category is",a.state.category),a.props.history.push({pathname:"/recipes",state:{category:a.state.category}})})},a.handleClick=function(){a.CategorySection.current.scrollIntoView({behavior:"smooth"})},a.CategorySection=s.a.createRef(),a.state={category:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"landingCover"},s.a.createElement("button",{onClick:this.handleClick}," Check out our recipes")),s.a.createElement("div",{className:"categoriesLanding",ref:this.CategorySection},s.a.createElement("h3",null," Try out a new recipe today!"),s.a.createElement("hr",null),s.a.createElement(w,{categoryChange:this.categoryChange})))}}]),t}(n.Component)),q=(a(220),function(e){return s.a.createElement("button",{className:"toggle-button",onClick:e.click},s.a.createElement("div",{className:"toggle-button-line "}),s.a.createElement("div",{className:"toggle-button-line "}),s.a.createElement("div",{className:"toggle-button-line "}))}),z=(a(221),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){g.a.post("api/v1/signout",{}).then(function(e){console.log(e),a.setState({success:"false"}),a.props.delToken()}),console.log("success:",a.props.success)},a.state={success:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({success:this.props.success})}},{key:"componentWillReceiveProps",value:function(e){this.setState({success:e.success})}},{key:"renderContent",value:function(){switch(console.log("success in Navbar (props): ",this.props.success),console.log("success in Navbar (state): ",this.state.success),this.state.success){case!1:return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.b,{to:"/login"}," Login ")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/register"}," Register ")));case!0:return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.b,{to:"/Profile"},"Profile")),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/recipeform"},"Recipe Form")),s.a.createElement("li",{onClick:this.handleClick},s.a.createElement(l.b,{to:"/"},s.a.createElement("i",{className:"fas fa-sign-out-alt"}))))}}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("header",{id:"header"},s.a.createElement("nav",{className:"toolbar_navigation"},s.a.createElement("div",{className:"nav-toggleBtn"},s.a.createElement(q,{click:this.props.drawerClickHandler})),s.a.createElement("div",{className:"logo"},s.a.createElement("h1",null,s.a.createElement(l.b,{to:"/"}," ",s.a.createElement("i",{className:"fas fa-cookie-bite"}),"Baker's Book"))),s.a.createElement("div",{className:"spacer"}),s.a.createElement("div",{className:"nav-items"},this.renderContent()))))}}]),t}(n.Component)),W=Object(E.b)(function(e){return{success:e.auth.success}},{delToken:D})(z),M=(a(222),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleClick=function(){g.a.post("api/v1/signout",{}).then(function(e){console.log(e),a.setState({success:"false"}),a.props.delToken()}),console.log("success:",a.props.success)},a.state={success:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({success:this.props.success})}},{key:"componentWillReceiveProps",value:function(e){this.setState({success:e.success})}},{key:"renderContent",value:function(){switch(console.log("success in sideDrawer: ",this.props.success),this.props.success){case!0:return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.b,{to:"/profile"}," Profile ")," "),s.a.createElement("hr",null),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/recipeform"},"Recipe Form")),s.a.createElement("hr",null),s.a.createElement("li",{onClick:this.handleClick},s.a.createElement(l.b,{to:"/"}," Logout ")," "));default:return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(l.b,{to:"/login"}," Login ")," "),s.a.createElement("hr",null),s.a.createElement("li",null,s.a.createElement(l.b,{to:"/register"}," Register ")," "))}}},{key:"render",value:function(){var e="side-drawer";return this.props.show&&(e="side-drawer open"),s.a.createElement("nav",{className:e},this.renderContent())}}]),t}(n.Component)),F=Object(E.b)(function(e){return{success:e.auth.success}},{delToken:D})(M),H=(a(223),function(e){return s.a.createElement("div",{className:"backdrop",onClick:e.click})}),K=(a(224),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={sideDrawerOpen:!1},a.drawerToggleClickHandler=function(){a.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},a.backdropClickHandler=function(){a.setState({sideDrawerOpen:!1})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=s.a.createElement(H,{click:this.backdropClickHandler})),s.a.createElement("div",{style:{height:"100%"}},s.a.createElement(W,{drawerClickHandler:this.drawerToggleClickHandler}),s.a.createElement(F,{show:this.state.sideDrawerOpen}),e)}}]),t}(n.Component)),J=(a(225),a(226),a(102)),V=a.n(J),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={name:"",imageUrl:"",category:"",ingredient:[],recipe:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=V.a.parse(this.props.location.search);console.log("view Recipe",t),g.a.get("/api/v1/recipe/".concat(t.ref)).then(function(t){e.setState({name:t.data.name,imageUrl:t.data.imageUrl,category:t.data.category,ingredient:t.data.ingredient.map(function(e){return e.aIngredient}).join("\n"),recipe:t.data.recipe.map(function(e){return e.instruction}).join("\n")})})}},{key:"render",value:function(){var e,t,a;return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"wrappingRecipe"},s.a.createElement("img",{className:"recipeImage",src:this.state.imageUrl}),s.a.createElement("form",null,s.a.createElement("div",null,s.a.createElement("input",{className:"title",type:"text",readOnly:!0,value:this.state.name})),s.a.createElement("div",{className:"recipeCategory"},s.a.createElement("label",{className:"allLabel"},"Category:"),s.a.createElement("input",(e={className:"categoryInput",readOnly:!0,type:"text"},Object(U.a)(e,"readOnly",!0),Object(U.a)(e,"value",this.state.category),e))),s.a.createElement("div",{className:"recipeInstructions"},s.a.createElement("div",null,s.a.createElement("label",{className:"allLabel"},"Ingredients:")),s.a.createElement("textarea",(t={className:"instructionInput",readOnly:!0,type:"text"},Object(U.a)(t,"readOnly",!0),Object(U.a)(t,"value",this.state.ingredient),t))),s.a.createElement("div",{className:"recipeInstructions"},s.a.createElement("div",null,s.a.createElement("label",{className:"allLabel"},"Instruction:")),s.a.createElement("textarea",(a={className:"instructionInput",readOnly:!0,type:"text"},Object(U.a)(a,"readOnly",!0),Object(U.a)(a,"value",this.state.recipe),a))))))}}]),t}(n.Component),$=(a(238),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getRecipes=function(){console.log("access token",a.props.accessToken),g()({method:"get",url:"/api/v1/user/recipe",headers:{Authorization:"Bearer ".concat(a.props.accessToken)}}).then(function(e){console.log(e),a.setState({recipes:e.data},function(){console.log("The recipes are: ",a.state.recipes)})}).catch(function(e){console.log(e)})},a.handleDelete=function(e){return function(t){console.log("the rid is",e),g()({method:"delete",url:"/api/v1/recipe/"+e,headers:{Authorization:"Bearer ".concat(a.props.accessToken)}}).then(function(e){console.log(e),a.getRecipes()}).catch(function(e){console.log(e)})}},a.state={recipes:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){var e=this,t=this.state.recipes;return s.a.createElement("div",{className:"listofUserRecipes"},t.map(function(t){return s.a.createElement("div",{className:"recipe_Box",key:t.rid},s.a.createElement("button",{className:"deleteBtn",onClick:e.handleDelete(t.rid)},s.a.createElement("i",{className:"fas fa-trash-alt"})),s.a.createElement(l.c,{to:"/viewRecipe/?ref="+t.rid},s.a.createElement("h2",{className:"recipe_title"},s.a.createElement("u",null,t.name)),s.a.createElement("img",{className:"recipe__box-img",src:t.imageUrl,alt:t.name}),s.a.createElement("h4",{className:"recipe_ingredients"},"Ingredients: "),t.ingredient.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement("ul",null,s.a.createElement("li",null,e.aIngredient)))})))}))}}]),t}(n.Component)),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleMoveLeft=function(){window.scroll({top:0,left:0,behavior:"smooth"})},a.handleMoveRight=function(){window.scroll({top:0,left:1e4,behavior:"smooth"})},a.getUserInfo=function(){console.log("access token",a.props.accessToken),g()({method:"get",url:"/api/v1/userinfo",headers:{Authorization:"Bearer ".concat(a.props.accessToken)}}).then(function(e){console.log(e),a.setState({firstname:e.data.firstname,lastname:e.data.lastname,email:e.data.email,username:e.data.username},function(){console.log("The User info is: ",a.state)})}).catch(function(e){console.log(e)})},a.state={firstname:"",lastname:"",email:"",username:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUserInfo()}},{key:"render",value:function(){return s.a.createElement("div",{className:"User_dashboard"},s.a.createElement("h1",{className:"profile_banner"}," Hello, ",this.state.firstname," ",this.state.lastname,"! "),s.a.createElement("hr",null),s.a.createElement("div",{className:"recipe_banner"},s.a.createElement("button",{onClick:this.handleMoveLeft,className:"btn-left"},s.a.createElement("i",{class:"fas fa-chevron-left"})),"Here are your recipes.",s.a.createElement("button",{onClick:this.handleMoveRight,className:"btn-right"},s.a.createElement("i",{class:"fas fa-chevron-right"}))))}}]),t}(n.Component),Q=(a(239),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"profile"},s.a.createElement(G,{accessToken:this.props.accessToken}),s.a.createElement($,{accessToken:this.props.accessToken}))}}]),t}(n.Component)),Y=Object(E.b)(function(e){return{accessToken:e.auth.accessToken}})(Q),Z=function(){return s.a.createElement("div",null,s.a.createElement(l.a,null,s.a.createElement(K,null),s.a.createElement(i.c,null,s.a.createElement(i.a,{path:"/",component:P,exact:!0}),s.a.createElement(i.a,{exact:!0,path:"/register",component:L}),s.a.createElement(i.a,{exact:!0,path:"/login",component:A}),s.a.createElement(i.a,{exact:!0,path:"/recipeform",component:T}),s.a.createElement(i.a,{exact:!0,path:"/viewrecipe",component:X}),s.a.createElement(i.a,{exact:!0,path:"/recipes",component:f}),s.a.createElement(i.a,{exact:!0,path:"/profile",component:Y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(35),te={accessToken:"",success:!1},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"get_token":return t.payload||te;case"del_token":return{accessToken:"",success:!1};default:return e}},ne=Object(ee.b)({auth:ae}),se=Object(ee.c)(ne);r.a.render(s.a.createElement(E.a,{store:se},s.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.60a183a3.chunk.js.map