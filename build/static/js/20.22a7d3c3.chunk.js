(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[20],{108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,n);null!=t&&(r=t)}})),r}))};var a,r=n(117),o=(a=r)&&a.__esModule?a:{default:a};e.exports=t.default},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,a,r,o,i){var c=r||"<<anonymous>>",l=i||a;if(null==n[a])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+c+"`."):null;for(var u=arguments.length,s=Array(u>6?u-6:0),d=6;d<u;d++)s[d-6]=arguments[d];return e.apply(void 0,[n,a,c,o,l].concat(s))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a);function o(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}function i(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}},1241:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(0),i=n.n(o),c=(n(82),n(30)),l=n(347),u=n(160),s=n(165),d=n(215),f=n(216),v=n(217),b=n(121),m=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function O(e){var t=e.props,n=t.title,a=t.eventKey,r=t.disabled,o=t.tabClassName,c=t.id;return null==n?null:i.a.createElement(s.a,{as:u.a,eventKey:a,disabled:r,id:c,className:o},n)}var E=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,o=t.onSelect,u=t.transition,s=t.mountOnEnter,E=t.unmountOnExit,y=t.children,p=t.activeKey,j=void 0===p?function(e){var t;return Object(b.a)(e,(function(e){null==t&&(t=e.props.eventKey)})),t}(y):p,x=Object(r.a)(t,m);return i.a.createElement(d.a,{id:n,activeKey:j,onSelect:o,transition:u,mountOnEnter:s,unmountOnExit:E},i.a.createElement(l.a,Object(a.a)({},x,{role:"tablist",as:"nav"}),Object(b.b)(y,O)),i.a.createElement(f.a,null,Object(b.b)(y,(function(e){var t=Object(a.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.a.createElement(v.a,t)}))))};E.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},E.displayName="Tabs",t.a=E},127:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(8),s=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.as,f=void 0===c?"div":c,v=Object(r.a)(e,s),b=Object(u.a)(n,"col"),m=[],O=[];return d.forEach((function(e){var t,n,a,r=v[e];if(delete v[e],"object"===typeof r&&null!=r){var o=r.span;t=void 0===o||o,n=r.offset,a=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&m.push(!0===t?""+b+i:""+b+i+"-"+t),null!=a&&O.push("order"+i+"-"+a),null!=n&&O.push("offset"+i+"-"+n)})),m.length||m.push(b),l.a.createElement(f,Object(a.a)({},v,{ref:t,className:i.a.apply(void 0,[o].concat(m,O))}))}));f.displayName="Col",t.a=f},131:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);r.displayName="CardContext",t.a=r},142:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},143:function(e,t,n){"use strict";var a,r=n(4),o=n(6),i=n(7),c=n.n(i),l=n(0),u=n.n(l),s=n(24),d=n(48),f=n(47),v=["className","children"],b=((a={})[s.b]="show",a[s.a]="show",a),m=u.a.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(o.a)(e,v),m=Object(l.useCallback)((function(e){Object(f.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return u.a.createElement(s.e,Object(r.a)({ref:t,addEndListener:d.a},i,{onEnter:m}),(function(e,t){return u.a.cloneElement(a,Object(r.a)({},t,{className:c()("fade",n,a.props.className,b[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",t.a=m},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return a(e.querySelectorAll(t))}},160:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(31),s=n(11),d=(n(35),n(43)),f=n(20),v=["active","className","eventKey","onSelect","onClick","as"],b=l.a.forwardRef((function(e,t){var n=e.active,o=e.className,u=e.eventKey,b=e.onSelect,m=e.onClick,O=e.as,E=Object(r.a)(e,v),y=Object(f.b)(u,E.href),p=Object(c.useContext)(f.a),j=Object(c.useContext)(d.a),x=n;if(j){E.role||"tablist"!==j.role||(E.role="tab");var h=j.getControllerId(y),N=j.getControlledId(y);E["data-rb-event-key"]=y,E.id=h||E.id,E["aria-controls"]=N||E["aria-controls"],x=null==n&&null!=y?j.activeKey===y:n}"tab"===E.role&&(E.disabled&&(E.tabIndex=-1,E["aria-disabled"]=!0),E["aria-selected"]=x);var C=Object(s.a)((function(e){m&&m(e),null!=y&&(b&&b(y,e),p&&p(y,e))}));return l.a.createElement(O,Object(a.a)({},E,{ref:t,onClick:C,className:i()(o,x&&"active")}))}));b.defaultProps={disabled:!1};var m=b,O=n(8),E=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],y={disabled:!1,as:u.a},p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,c=e.className,u=e.href,s=e.eventKey,d=e.onSelect,f=e.as,v=Object(r.a)(e,E);return n=Object(O.a)(n,"nav-link"),l.a.createElement(m,Object(a.a)({},v,{href:u,ref:t,eventKey:s,as:f,disabled:o,onSelect:d,className:i()(c,n,o&&"disabled")}))}));p.displayName="NavLink",p.defaultProps=y;t.a=p},165:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(8),s=["bsPrefix","className","children","as"],d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.children,d=e.as,f=void 0===d?"div":d,v=Object(r.a)(e,s);return n=Object(u.a)(n,"nav-item"),l.a.createElement(f,Object(a.a)({},v,{ref:t,className:i()(o,n)}),c)}));d.displayName="NavItem",t.a=d},215:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(30),i=n(142),c=n(20);t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.generateChildId,u=t.onSelect,s=t.activeKey,d=t.transition,f=t.mountOnEnter,v=t.unmountOnExit,b=t.children,m=Object(a.useMemo)((function(){return l||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,l]),O=Object(a.useMemo)((function(){return{onSelect:u,activeKey:s,transition:d,mountOnEnter:f||!1,unmountOnExit:v||!1,getControlledId:function(e){return m(e,"tabpane")},getControllerId:function(e){return m(e,"tab")}}}),[u,s,d,f,v,m]);return r.a.createElement(i.a.Provider,{value:O},r.a.createElement(c.a.Provider,{value:u||null},b))}},216:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(8),s=["bsPrefix","as","className"],d=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,c=void 0===o?"div":o,d=e.className,f=Object(r.a)(e,s),v=Object(u.a)(n,"tab-content");return l.a.createElement(c,Object(a.a)({ref:t},f,{className:i()(d,v)}))}));t.a=d},217:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(8),s=n(142),d=n(20),f=n(143),v=["activeKey","getControlledId","getControllerId"],b=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var m=l.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(s.a);if(!t)return e;var n=t.activeKey,o=t.getControlledId,i=t.getControllerId,l=Object(r.a)(t,v),u=!1!==e.transition&&!1!==l.transition,b=Object(d.b)(e.eventKey);return Object(a.a)({},e,{active:null==e.active&&null!=b?Object(d.b)(n)===b:e.active,id:o(e.eventKey),"aria-labelledby":i(e.eventKey),transition:u&&(e.transition||l.transition||f.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),o=n.bsPrefix,m=n.className,O=n.active,E=n.onEnter,y=n.onEntering,p=n.onEntered,j=n.onExit,x=n.onExiting,h=n.onExited,N=n.mountOnEnter,C=n.unmountOnExit,K=n.transition,w=n.as,P=void 0===w?"div":w,g=(n.eventKey,Object(r.a)(n,b)),S=Object(u.a)(o,"tab-pane");if(!O&&!K&&C)return null;var I=l.a.createElement(P,Object(a.a)({},g,{ref:t,role:"tabpanel","aria-hidden":!O,className:i()(m,S,{active:O})}));return K&&(I=l.a.createElement(K,{in:O,onEnter:E,onEntering:y,onEntered:p,onExit:j,onExiting:x,onExited:h,mountOnEnter:N,unmountOnExit:C},I)),l.a.createElement(s.a.Provider,{value:null},l.a.createElement(d.a.Provider,{value:null},I))}));m.displayName="TabPane",t.a=m},347:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=(n(108),n(0)),l=n.n(c),u=n(30),s=n(8),d=n(44),f=n(131),v=n(153),b=n(51),m=n(21),O=n(43),E=n(20),y=n(142),p=["as","onSelect","activeKey","role","onKeyDown"],j=function(){},x=l.a.forwardRef((function(e,t){var n,o,i=e.as,u=void 0===i?"ul":i,s=e.onSelect,d=e.activeKey,f=e.role,x=e.onKeyDown,h=Object(r.a)(e,p),N=Object(b.a)(),C=Object(c.useRef)(!1),K=Object(c.useContext)(E.a),w=Object(c.useContext)(y.a);w&&(f=f||"tablist",d=w.activeKey,n=w.getControlledId,o=w.getControllerId);var P=Object(c.useRef)(null),g=function(e){var t=P.current;if(!t)return null;var n=Object(v.a)(t,"[data-rb-event-key]:not(.disabled)"),a=t.querySelector(".active");if(!a)return null;var r=n.indexOf(a);if(-1===r)return null;var o=r+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},S=function(e,t){null!=e&&(s&&s(e,t),K&&K(e,t))};Object(c.useEffect)((function(){if(P.current&&C.current){var e=P.current.querySelector("[data-rb-event-key].active");e&&e.focus()}C.current=!1}));var I=Object(m.a)(t,P);return l.a.createElement(E.a.Provider,{value:S},l.a.createElement(O.a.Provider,{value:{role:f,activeKey:Object(E.b)(d),getControlledId:n||j,getControllerId:o||j}},l.a.createElement(u,Object(a.a)({},h,{onKeyDown:function(e){var t;switch(x&&x(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),S(t.dataset.rbEventKey,e),C.current=!0,N())},ref:I,role:f}))))})),h=n(165),N=n(160),C=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"],K=l.a.forwardRef((function(e,t){var n,o,v,b=Object(u.a)(e,{activeKey:"onSelect"}),m=b.as,O=void 0===m?"div":m,E=b.bsPrefix,y=b.variant,p=b.fill,j=b.justify,h=b.navbar,N=b.navbarScroll,K=b.className,w=b.children,P=b.activeKey,g=Object(r.a)(b,C),S=Object(s.a)(E,"nav"),I=!1,R=Object(c.useContext)(d.a),k=Object(c.useContext)(f.a);return R?(o=R.bsPrefix,I=null==h||h):k&&(v=k.cardHeaderBsPrefix),l.a.createElement(x,Object(a.a)({as:O,ref:t,activeKey:P,className:i()(K,(n={},n[S]=!I,n[o+"-nav"]=I,n[o+"-nav-scroll"]=I&&N,n[v+"-"+y]=!!v,n[S+"-"+y]=!!y,n[S+"-fill"]=p,n[S+"-justified"]=j,n))},g),w)}));K.displayName="Nav",K.defaultProps={justify:!1,fill:!1},K.Item=h.a,K.Link=N.a;t.a=K},681:function(e,t,n){"use strict";var a=n(49),r=n(0),o=n.n(r),i=n(215),c=n(216),l=n(217),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);u.Container=i.a,u.Content=c.a,u.Pane=l.a,t.a=u},682:function(e,t,n){"use strict";var a=n(4),r=n(6),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(8),s=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],f=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.noGutters,f=e.as,v=void 0===f?"div":f,b=Object(r.a)(e,s),m=Object(u.a)(n,"row"),O=m+"-cols",E=[];return d.forEach((function(e){var t,n=b[e];delete b[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&E.push(""+O+a+"-"+t)})),l.a.createElement(v,Object(a.a)({ref:t},b,{className:i.a.apply(void 0,[o,m,c&&"no-gutters"].concat(E))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f}}]);
//# sourceMappingURL=20.22a7d3c3.chunk.js.map