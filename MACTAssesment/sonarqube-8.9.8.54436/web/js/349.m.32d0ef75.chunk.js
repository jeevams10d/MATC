(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{1819:function(e,t,n){"use strict";n.r(t),n.d(t,"WorkspaceComponentViewer",(function(){return d}));var o=n(382),s=n.n(o),i=n(2),r=n(325),a=n(435),c=n(375),l=n(328),p=n(513),h=n(607),m=n(968),u=n(971);class d extends i.PureComponent{constructor(e){super(e),this.handleClose=()=>{this.props.onClose(this.props.component.key)},this.handleIssueChange=e=>{this.refreshBranchStatus()},this.handleLoaded=e=>{if(this.props.onLoad({key:this.props.component.key,name:e.path,qualifier:e.q}),this.container&&this.props.component.line){const e=this.container.querySelector('.source-line[data-line-number="'.concat(this.props.component.line,'"]'));e&&Object(a.scrollToElement)(e,{smooth:!1,parent:this.container,topOffset:50,bottomOffset:50})}},this.refreshBranchStatus=()=>{const{component:e}=this.props,{branchLike:t}=e;t&&Object(l.h)(t)&&Object(c.t)(e.key).then(e=>{e&&e.length>0&&this.props.fetchBranchStatus(t,e.pop().key)},()=>{})},this.refreshBranchStatus=s()(this.refreshBranchStatus,1e3)}componentDidMount(){document.documentElement&&document.documentElement.classList.add("with-workspace")}componentWillUnmount(){document.documentElement&&document.documentElement.classList.remove("with-workspace")}render(){const{component:e}=this.props;return i.createElement("div",{className:"workspace-viewer"},i.createElement(u.a,{maximized:this.props.maximized,onClose:this.handleClose,onCollapse:this.props.onCollapse,onMaximize:this.props.onMaximize,onMinimize:this.props.onMinimize,onResize:this.props.onResize},i.createElement(m.a,{component:e})),i.createElement("div",{className:"workspace-viewer-container",ref:e=>this.container=e,style:{height:this.props.height}},i.createElement(h.a,{aroundLine:e.line,branchLike:e.branchLike,component:e.key,highlightedLine:e.line,onIssueChange:this.handleIssueChange,onLoaded:this.handleLoaded})))}}const f={fetchBranchStatus:p.c};t.default=Object(r.b)(null,f)(d)},607:function(e,t,n){"use strict";var o=n(333);const s=Object(o.lazyLoadComponent)(()=>Promise.all([n.e(1),n.e(2),n.e(3),n.e(277),n.e(278)]).then(n.bind(null,817)),"SourceViewer");t.a=s},968:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(2),s=n(345),i=n.n(s),r=n(406);function a({component:e,limited:t}){const{name:n="—"}=e;return o.createElement(o.Fragment,null,e.qualifier&&o.createElement(i.a,{className:"little-spacer-right",qualifier:e.qualifier}),t?Object(r.collapsePath)(n,15):n)}},971:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(2),s=n(760),i=n(312),r=n(773),a=n.n(r),c=n(972),l=n.n(c),p=n(973),h=n.n(p),m=n(974),u=n.n(m),d=n(31);class f extends o.PureComponent{constructor(){super(...arguments),this.handleDrag=(e,t)=>{this.props.onResize(t.deltaY)}}render(){return o.createElement("header",{className:"workspace-viewer-header"},o.createElement("h6",{className:"workspace-viewer-name"},this.props.children),o.createElement(s.DraggableCore,{offsetParent:document.body,onDrag:this.handleDrag},o.createElement("div",{className:"workspace-viewer-resize js-resize"})),o.createElement("div",{className:"workspace-viewer-actions"},o.createElement(k,{icon:u.a,onClick:this.props.onCollapse,tooltip:"workspace.minimize"}),this.props.maximized?o.createElement(k,{icon:l.a,onClick:this.props.onMinimize,tooltip:"workspace.normal_size"}):o.createElement(k,{icon:h.a,onClick:this.props.onMaximize,tooltip:"workspace.full_window"}),o.createElement(k,{icon:a.a,onClick:this.props.onClose,tooltip:"workspace.close"})))}}function k({icon:e,onClick:t,tooltip:n}){return o.createElement(i.ButtonIcon,{className:"workspace-header-icon",color:"#fff",onClick:t,tooltip:Object(d.translate)(n)},o.createElement(e,{fill:void 0}))}}},0,[1,2,3,277,278]]);
//# sourceMappingURL=349.m.32d0ef75.chunk.js.map