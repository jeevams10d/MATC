(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{1206:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(660),o=n(13),a=n(899),i=n.n(a),l=n(176),c=n(727);function s(e){var t=e.error,n=e.help,a=e.label,s=e.placeholder,u=e.projectKey,p=e.touched,d=e.validating,m=p&&void 0!==t,f=p&&!d&&void 0===t;return o.createElement(i.a,{className:"form-field",description:Object(l.translate)("onboarding.create_project.project_key.description"),error:t,help:n,id:"project-key",isInvalid:m,isValid:f,label:a,required:void 0!==a},o.createElement("input",{autoFocus:!0,className:r("input-super-large",{"is-invalid":m,"is-valid":f}),id:"project-key",maxLength:c.d,minLength:1,onChange:e.onProjectKeyChange,placeholder:s,type:"text",value:u}))}},1207:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(686),o=n(727);function a(e){return 0===e.length?r.b.Empty:e.length>o.d?r.b.TooLong:/^[\w\-.:]*[a-z\-_.:]+[\w\-.:]*$/i.test(e)?r.b.Valid:/^[0-9]+$/.test(e)?r.b.OnlyDigits:r.b.InvalidChar}},2228:function(e,t,n){"use strict";n.r(t),n.d(t,"Key",(function(){return O}));var r=n(13),o=n(684),a=n(667),i=n(176),l=n(724),c=n(1119),s=n(661),u=n(742),p=n.n(u),d=n(695),m=n.n(d),f=n(1206),h=n(1207),y=n(686);function b(e){var t=e.component,n=r.useState(void 0),o=n[0],a=n[1],l=void 0!==o?o:t.key,c=l!==t.key,u=Object(h.a)(l),d=u===y.b.Valid?void 0:Object(i.translate)("onboarding.create_project.project_key.error",u);return r.createElement(p.a,{confirmButtonText:Object(i.translate)("update_verb"),confirmData:o,modalBody:r.createElement(r.Fragment,null,Object(i.translateWithParameters)("update_key.are_you_sure_to_change_key",t.name),r.createElement("div",{className:"spacer-top"},Object(i.translate)("update_key.old_key"),": ",r.createElement("strong",null,t.key)),r.createElement("div",{className:"spacer-top"},Object(i.translate)("update_key.new_key"),": ",r.createElement("strong",null,o))),modalHeader:Object(i.translate)("update_key.page"),onConfirm:e.onKeyChange},(function(e){var t=e.onFormSubmit;return r.createElement("form",{onSubmit:t},r.createElement(m.a,{className:"spacer-bottom"}),r.createElement(f.a,{error:d,label:Object(i.translate)("update_key.new_key"),onProjectKeyChange:function(e){a(e.currentTarget.value)},touched:c,placeholder:Object(i.translate)("update_key.new_key"),projectKey:l}),r.createElement("div",{className:"spacer-top"},r.createElement(s.SubmitButton,{disabled:!c||void 0!==d,id:"update-key-submit"},Object(i.translate)("update_verb")),r.createElement(s.Button,{className:"spacer-left",disabled:!c,id:"update-key-reset",onClick:function(){a(void 0)},type:"reset"},Object(i.translate)("reset_verb"))))}))}var v,_=(v=function(e,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleChangeKey=function(e){return Object(l.b)({from:t.props.component.key,to:e}).then((function(){c.a.remove(t.props.component.key),t.props.router.replace({pathname:"/project/key",query:{id:e}})}))},t}return _(t,e),t.prototype.render=function(){var e=this.props.component;return r.createElement("div",{className:"page page-limited",id:"project-key"},r.createElement(o.a,{defer:!1,title:Object(i.translate)("update_key.page")}),r.createElement("header",{className:"page-header"},r.createElement("h1",{className:"page-title"},Object(i.translate)("update_key.page")),r.createElement("div",{className:"page-description"},Object(i.translate)("update_key.page.description"))),r.createElement(b,{component:e,onKeyChange:this.handleChangeKey}))},t}(r.PureComponent);t.default=Object(a.g)(O)},672:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var a=n(660),i=n(13),l=n(729),c=n(691);n(692);var s=n(666);function u(e){var t=e.size,n=void 0===t?12:t,r=o(e,["size"]);return i.createElement("div",{className:a("help-tooltip",r.className)},i.createElement(s.default,{mouseLeaveDelay:.25,onShow:r.onShow,overlay:r.overlay,placement:r.placement},i.createElement("span",{className:"display-inline-flex-center"},r.children||i.createElement(c.ThemeConsumer,null,(function(e){return i.createElement(l.default,{fill:e.colors.gray71,size:n})})))))}t.default=u,t.DarkHelpTooltip=function(e){var t=e.size,n=void 0===t?12:t,a=o(e,["size"]);return i.createElement(u,r({},a),i.createElement(c.ThemeConsumer,null,(function(e){var t=e.colors;return i.createElement(l.default,{fill:t.transparentBlack,fillInner:t.white,size:n})})))}},681:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),c=n(680),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,o=(e.onSubmit,i(e,["children","header","onClose","onSubmit"]));return l.createElement(c.default,a({contentLabel:n,onRequestClose:r},o),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(l.Component);t.default=s},688:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660),o=n(13),a=n(176);t.default=function(e){var t=e.className;return o.createElement("em",{"aria-label":a.translate("field_required"),className:r("mandatory little-spacer-left",t)},"*")}},692:function(e,t,n){var r=n(662),o=n(693);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},693:function(e,t,n){(t=n(663)(!1)).push([e.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),e.exports=t},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(660),o=n(13),a=n(665),i=n(176);t.default=function(e){var t=e.className;return o.createElement("div",{"aria-hidden":!0,className:r("text-muted",t)},o.createElement(a.FormattedMessage,{id:"fields_marked_with_x_required",defaultMessage:i.translate("fields_marked_with_x_required"),values:{star:o.createElement("em",{className:"mandatory"},"*")}}))}},706:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),l=n(176),c=n(668),s=n(661),u=n(790),p=n(681),d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,(function(){})):void t.props.onClose()},t.renderModalContent=function(e){var n=e.onCloseClick,r=e.onFormSubmit,o=e.submitting,a=t.props,p=a.children,d=a.confirmButtonText,m=a.confirmDisable,f=a.header,h=a.headerDescription,y=a.isDestructive,b=a.cancelButtonText,v=void 0===b?l.translate("cancel"):b;return i.createElement(u.default,null,i.createElement("form",{onSubmit:r},i.createElement("header",{className:"modal-head"},i.createElement("h2",null,f),h),i.createElement("div",{className:"modal-body"},p),i.createElement("footer",{className:"modal-foot"},i.createElement(c.default,{className:"spacer-right",loading:o}),i.createElement(s.SubmitButton,{autoFocus:!0,className:y?"button-red":void 0,disabled:o||m},d),i.createElement(s.ResetButtonLink,{disabled:o,onClick:n},v))))},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return i.createElement(p.default,a({onSubmit:this.handleSubmit},t),this.renderModalContent)},t}(i.PureComponent);t.default=d},742:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(13),c=n(706),s=n(743),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderConfirmModal=function(e){var n=e.onClose,r=t.props,o=(r.children,r.modalBody),s=r.modalHeader,u=r.modalHeaderDescription,p=i(r,["children","modalBody","modalHeader","modalHeaderDescription"]);return l.createElement(c.default,a({header:s,headerDescription:u,onClose:n},p),o)},t}return o(t,e),t.prototype.render=function(){return l.createElement(s.default,{modal:this.renderConfirmModal},this.props.children)},t}(l.PureComponent);t.default=u},743:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={modal:!1},t.handleButtonClick=function(){t.setState({modal:!0})},t.handleFormSubmit=function(e){e&&e.preventDefault(),t.setState({modal:!0})},t.handleCloseModal=function(){t.mounted&&t.setState({modal:!1})},t}return o(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){return a.createElement(a.Fragment,null,this.props.children({onClick:this.handleButtonClick,onFormSubmit:this.handleFormSubmit}),this.state.modal&&this.props.modal({onClose:this.handleCloseModal}))},t}(a.PureComponent);t.default=i},899:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),o=n(825),a=n(804),i=n(688),l=n(672);t.default=function(e){var t=e.isInvalid&&void 0!==e.error;return r.createElement("div",{className:e.className},r.createElement("label",{htmlFor:e.id},r.createElement("span",{className:"text-middle"},r.createElement("strong",null,e.label),e.required&&r.createElement(i.default,null)),e.help&&r.createElement(l.default,{className:"spacer-left",overlay:e.help})),r.createElement("div",{className:"little-spacer-top spacer-bottom"},e.children,e.isInvalid&&r.createElement(o.default,{className:"spacer-left text-middle"}),t&&r.createElement("span",{className:"little-spacer-left text-danger text-middle"},e.error),e.isValid&&r.createElement(a.default,{className:"spacer-left text-middle"})),e.description&&r.createElement("div",{className:"note abs-width-400"},e.description))}}}]);
//# sourceMappingURL=311.1648830816893.chunk.js.map