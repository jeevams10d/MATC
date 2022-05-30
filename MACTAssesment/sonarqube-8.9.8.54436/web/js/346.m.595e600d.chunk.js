(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1862:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(2),r=n(335),s=n(319),l=n.n(s),i=n(31),c=n(846),o=n(312),m=n(332),d=n.n(m),u=n(340),h=n.n(u),p=n(346),k=n.n(p);class b extends a.PureComponent{constructor(){super(...arguments),this.state={name:"",url:""},this.handleSubmit=()=>this.props.onSubmit(this.state.name,this.state.url).then(this.props.onClose),this.handleNameChange=e=>{this.setState({name:e.currentTarget.value})},this.handleUrlChange=e=>{this.setState({url:e.currentTarget.value})}}render(){const e=Object(i.translate)("project_links.create_new_project_link");return a.createElement(d.a,{header:e,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},({onCloseClick:t,onFormSubmit:n,submitting:r})=>a.createElement("form",{onSubmit:n},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,e)),a.createElement("div",{className:"modal-body"},a.createElement(k.a,{className:"modal-field"}),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"create-link-name"},Object(i.translate)("project_links.name"),a.createElement(h.a,null)),a.createElement("input",{autoFocus:!0,id:"create-link-name",maxLength:128,name:"name",onChange:this.handleNameChange,required:!0,type:"text",value:this.state.name})),a.createElement("div",{className:"modal-field"},a.createElement("label",{htmlFor:"create-link-url"},Object(i.translate)("project_links.url"),a.createElement(h.a,null)),a.createElement("input",{id:"create-link-url",maxLength:128,name:"url",onChange:this.handleUrlChange,required:!0,type:"text",value:this.state.url}))),a.createElement("footer",{className:"modal-foot"},a.createElement(l.a,{className:"spacer-right",loading:r}),a.createElement(o.SubmitButton,{disabled:r,id:"create-link-confirm"},Object(i.translate)("create")),a.createElement(o.ResetButtonLink,{disabled:r,onClick:t},Object(i.translate)("cancel")))))}}class E extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={creationModal:!1},this.handleCreateClick=()=>{this.setState({creationModal:!0})},this.handleCreationModalClose=()=>{this.mounted&&this.setState({creationModal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return a.createElement(a.Fragment,null,a.createElement("header",{className:"page-header"},a.createElement("h1",{className:"page-title"},Object(i.translate)("project_links.page")),a.createElement("div",{className:"page-actions"},a.createElement(o.Button,{id:"create-project-link",onClick:this.handleCreateClick},Object(i.translate)("create"))),a.createElement("div",{className:"page-description"},Object(i.translate)("project_links.page.description"))),this.state.creationModal&&a.createElement(b,{onClose:this.handleCreationModalClose,onSubmit:this.props.onCreate}))}}var j=n(597),f=n(394),N=n.n(f),g=n(706),C=n.n(g),O=n(711);class _ extends a.PureComponent{constructor(){super(...arguments),this.renderNameForProvided=e=>a.createElement("div",{className:"display-inline-block text-top"},a.createElement("div",null,a.createElement("span",{className:"js-name"},Object(j.a)(e))),a.createElement("div",{className:"note little-spacer-top"},a.createElement("span",{className:"js-type"},"sonar.links.".concat(e.type)))),this.renderName=e=>a.createElement("div",null,a.createElement(C.a,{className:"little-spacer-right",type:e.type}),Object(j.b)(e)?this.renderNameForProvided(e):a.createElement("div",{className:"display-inline-block text-top"},a.createElement("span",{className:"js-name"},e.name))),this.renderDeleteButton=e=>Object(j.b)(e)?null:a.createElement(N.a,{confirmButtonText:Object(i.translate)("delete"),confirmData:e.id,isDestructive:!0,modalBody:Object(i.translateWithParameters)("project_links.are_you_sure_to_delete_x_link",e.name),modalHeader:Object(i.translate)("project_links.delete_project_link"),onConfirm:this.props.onDelete},({onClick:e})=>a.createElement(o.Button,{className:"button-red js-delete-button",onClick:e},Object(i.translate)("delete")))}render(){const{link:e}=this.props;return a.createElement("tr",{"data-name":e.name},a.createElement("td",{className:"nowrap"},this.renderName(e)),a.createElement("td",{className:"nowrap js-url"},Object(O.a)(e.url)?a.createElement("a",{href:e.url,rel:"nofollow noreferrer noopener",target:"_blank"},e.url):e.url),a.createElement("td",{className:"thin nowrap"},this.renderDeleteButton(e)))}}class v extends a.PureComponent{renderHeader(){return a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:"nowrap"},Object(i.translate)("project_links.name")),a.createElement("th",{className:"nowrap width-100"},Object(i.translate)("project_links.url")),a.createElement("th",{className:"thin"}," ")))}render(){if(!this.props.links.length)return a.createElement("div",{className:"note"},Object(i.translate)("no_results"));const e=Object(j.c)(this.props.links).map(e=>a.createElement(_,{key:e.id,link:e,onDelete:this.props.onDelete}));return a.createElement("div",{className:"boxed-group boxed-group-inner"},a.createElement("table",{className:"data zebra",id:"project-links"},this.renderHeader(),a.createElement("tbody",null,e)))}}class y extends a.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.fetchLinks=()=>{this.setState({loading:!0}),Object(c.c)(this.props.component.key).then(e=>{this.mounted&&this.setState({links:e,loading:!1})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleCreateLink=(e,t)=>Object(c.a)({name:e,projectKey:this.props.component.key,url:t}).then(e=>{this.mounted&&this.setState(({links:t=[]})=>({links:[...t,e]}))}),this.handleDeleteLink=e=>Object(c.b)(e).then(()=>{this.mounted&&this.setState(({links:t=[]})=>({links:t.filter(t=>t.id!==e)}))})}componentDidMount(){this.mounted=!0,this.fetchLinks()}componentDidUpdate(e){e.component.key!==this.props.component.key&&this.fetchLinks()}componentWillUnmount(){this.mounted=!1}render(){return a.createElement("div",{className:"page page-limited"},a.createElement(r.a,{defer:!1,title:Object(i.translate)("project_links.page")}),a.createElement(E,{onCreate:this.handleCreateLink}),a.createElement(l.a,{loading:this.state.loading},this.state.links&&a.createElement(v,{links:this.state.links,onDelete:this.handleDeleteLink})))}}},597:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return d}));var a=n(330),r=n.n(a),s=n(502),l=n.n(s),i=n(31);const c=["homepage","ci","issue","scm","scm_dev"];function o(e){return c.includes(e.type)}function m(e){const[t,n]=l()(e,o);return[...r()(t,e=>c.indexOf(e.type)),...r()(n,e=>e.name&&e.name.toLowerCase())]}function d(e){return o(e)?Object(i.translate)("project_links",e.type):e.name}},711:function(e,t,n){"use strict";var a=n(425);t.a=function(e){return/^(\/|scm:)/.test(e)||!!Object(a.isWebUri)(e)}},846:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var a=n(9),r=n(324);function s(e){return Object(a.getJSON)("/api/project_links/search",{projectKey:e}).then(e=>e.links,r.a)}function l(e){return Object(a.post)("/api/project_links/delete",{id:e}).catch(r.a)}function i(e){return Object(a.postJSON)("/api/project_links/create",e).then(e=>e.link,r.a)}}}]);
//# sourceMappingURL=346.m.595e600d.chunk.js.map