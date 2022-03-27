(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[35],{104:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},108:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,i.default)((function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}))};var r,l=t(117),i=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},110:function(e,a,t){"use strict";var r=t(4),l=t(6),i=t(7),n=t.n(i),s=t(0),c=t.n(s),o=t(3),d=t.n(o),u=["as","className","type","tooltip"],f={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},m=c.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"div":t,s=e.className,o=e.type,d=void 0===o?"valid":o,f=e.tooltip,m=void 0!==f&&f,b=Object(l.a)(e,u);return c.a.createElement(i,Object(r.a)({},b,{ref:a,className:n()(s,d+"-"+(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=f,a.a=m},117:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,i,n){var s=l||"<<anonymous>>",c=n||r;if(null==t[r])return a?new Error("Required "+i+" `"+c+"` was not specified in `"+s+"`."):null;for(var o=arguments.length,d=Array(o>6?o-6:0),u=6;u<o;u++)d[u-6]=arguments[u];return e.apply(void 0,[t,r,s,i,c].concat(d))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},127:function(e,a,t){"use strict";var r=t(4),l=t(6),i=t(7),n=t.n(i),s=t(0),c=t.n(s),o=t(8),d=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.as,f=void 0===s?"div":s,m=Object(l.a)(e,d),b=Object(o.a)(t,"col"),v=[],p=[];return u.forEach((function(e){var a,t,r,l=m[e];if(delete m[e],"object"===typeof l&&null!=l){var i=l.span;a=void 0===i||i,t=l.offset,r=l.order}else a=l;var n="xs"!==e?"-"+e:"";a&&v.push(!0===a?""+b+n:""+b+n+"-"+a),null!=r&&p.push("order"+n+"-"+r),null!=t&&p.push("offset"+n+"-"+t)})),v.length||v.push(b),c.a.createElement(f,Object(r.a)({},m,{ref:a,className:n.a.apply(void 0,[i].concat(v,p))}))}));f.displayName="Col",a.a=f},130:function(e,a,t){"use strict";var r=t(4),l=t(6),i=t(7),n=t.n(i),s=(t(108),t(0)),c=t.n(s),o=(t(35),t(110)),d=t(104),u=t(8),f=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],m=c.a.forwardRef((function(e,a){var t,i,o=e.bsPrefix,m=e.bsCustomPrefix,b=e.type,v=e.size,p=e.htmlSize,O=e.id,j=e.className,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,P=void 0!==N&&N,h=e.plaintext,C=e.readOnly,E=e.custom,w=e.as,I=void 0===w?"input":w,g=Object(l.a)(e,f),F=Object(s.useContext)(d.a).controlId,k=E?[m,"custom"]:[o,"form-control"],R=k[0],V=k[1];if(o=Object(u.a)(R,V),h)(i={})[o+"-plaintext"]=!0,t=i;else if("file"===b){var S;(S={})[o+"-file"]=!0,t=S}else if("range"===b){var T;(T={})[o+"-range"]=!0,t=T}else if("select"===I&&E){var L;(L={})[o+"-select"]=!0,L[o+"-select-"+v]=v,t=L}else{var A;(A={})[o]=!0,A[o+"-"+v]=v,t=A}return c.a.createElement(I,Object(r.a)({},g,{type:b,size:p,ref:a,readOnly:C,id:O||F,className:n()(j,t,y&&"is-valid",P&&"is-invalid")}))}));m.displayName="FormControl",a.a=Object.assign(m,{Feedback:o.a})},131:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext(null);l.displayName="CardContext",a.a=l},144:function(e,a,t){"use strict";var r=t(4),l=t(0),i=t.n(l),n=t(7),s=t.n(n);a.a=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(r.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},201:function(e,a,t){"use strict";var r=t(4),l=t(6),i=t(7),n=t.n(i),s=t(0),c=t.n(s),o=(t(108),t(110)),d=t(104),u=t(8),f=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],m=c.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,b=e.type,v=void 0===b?"checkbox":b,p=e.isValid,O=void 0!==p&&p,j=e.isInvalid,x=void 0!==j&&j,y=e.isStatic,N=e.as,P=void 0===N?"input":N,h=Object(l.a)(e,f),C=Object(s.useContext)(d.a),E=C.controlId,w=C.custom?[o,"custom-control-input"]:[i,"form-check-input"],I=w[0],g=w[1];return i=Object(u.a)(I,g),c.a.createElement(P,Object(r.a)({},h,{ref:a,type:v,id:t||E,className:n()(m,i,O&&"is-valid",x&&"is-invalid",y&&"position-static")}))}));m.displayName="FormCheckInput";var b=m,v=["bsPrefix","bsCustomPrefix","className","htmlFor"],p=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,o=e.className,f=e.htmlFor,m=Object(l.a)(e,v),b=Object(s.useContext)(d.a),p=b.controlId,O=b.custom?[i,"custom-control-label"]:[t,"form-check-label"],j=O[0],x=O[1];return t=Object(u.a)(j,x),c.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:f||p,className:n()(o,t)}))}));p.displayName="FormCheckLabel";var O=p,j=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],x=c.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,f=e.bsCustomPrefix,m=e.inline,v=void 0!==m&&m,p=e.disabled,x=void 0!==p&&p,y=e.isValid,N=void 0!==y&&y,P=e.isInvalid,h=void 0!==P&&P,C=e.feedbackTooltip,E=void 0!==C&&C,w=e.feedback,I=e.className,g=e.style,F=e.title,k=void 0===F?"":F,R=e.type,V=void 0===R?"checkbox":R,S=e.label,T=e.children,L=e.custom,A=e.as,K=void 0===A?"input":A,M=Object(l.a)(e,j),_="switch"===V||L,z=_?[f,"custom-control"]:[i,"form-check"],q=z[0],B=z[1];i=Object(u.a)(q,B);var G=Object(s.useContext)(d.a).controlId,H=Object(s.useMemo)((function(){return{controlId:t||G,custom:_}}),[G,_,t]),J=_||null!=S&&!1!==S&&!T,D=c.a.createElement(b,Object(r.a)({},M,{type:"switch"===V?"checkbox":V,ref:a,isValid:N,isInvalid:h,isStatic:!J,disabled:x,as:K}));return c.a.createElement(d.a.Provider,{value:H},c.a.createElement("div",{style:g,className:n()(I,i,_&&"custom-"+V,v&&i+"-inline")},T||c.a.createElement(c.a.Fragment,null,D,J&&c.a.createElement(O,{title:k},S),(N||h)&&c.a.createElement(o.a,{type:N?"valid":"invalid",tooltip:E},w))))}));x.displayName="FormCheck",x.Input=b,x.Label=O;var y=x,N=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],P=c.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,o=e.bsCustomPrefix,f=e.className,m=e.isValid,b=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(l.a)(e,N),x=Object(s.useContext)(d.a),y=x.controlId,P=x.custom?[o,"custom-file-input"]:[i,"form-control-file"],h=P[0],C=P[1];return i=Object(u.a)(h,C),c.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,type:"file",lang:v,className:n()(f,i,m&&"is-valid",b&&"is-invalid")}))}));P.displayName="FormFileInput";var h=P,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],E=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,o=e.className,f=e.htmlFor,m=Object(l.a)(e,C),b=Object(s.useContext)(d.a),v=b.controlId,p=b.custom?[i,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(u.a)(O,j),c.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:f||v,className:n()(o,t),"data-browse":m["data-browse"]}))}));E.displayName="FormFileLabel";var w=E,I=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],g=c.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,f=e.bsCustomPrefix,m=e.disabled,b=void 0!==m&&m,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,x=e.feedbackTooltip,y=void 0!==x&&x,N=e.feedback,P=e.className,C=e.style,E=e.label,g=e.children,F=e.custom,k=e.lang,R=e["data-browse"],V=e.as,S=void 0===V?"div":V,T=e.inputAs,L=void 0===T?"input":T,A=Object(l.a)(e,I),K=F?[f,"custom"]:[i,"form-file"],M=K[0],_=K[1];i=Object(u.a)(M,_);var z=Object(s.useContext)(d.a).controlId,q=Object(s.useMemo)((function(){return{controlId:t||z,custom:F}}),[z,F,t]),B=null!=E&&!1!==E&&!g,G=c.a.createElement(h,Object(r.a)({},A,{ref:a,isValid:p,isInvalid:j,disabled:b,as:L,lang:k}));return c.a.createElement(d.a.Provider,{value:q},c.a.createElement(S,{style:C,className:n()(P,i,F&&"custom-file")},g||c.a.createElement(c.a.Fragment,null,F?c.a.createElement(c.a.Fragment,null,G,B&&c.a.createElement(w,{"data-browse":R},E)):c.a.createElement(c.a.Fragment,null,B&&c.a.createElement(w,null,E),G),(p||j)&&c.a.createElement(o.a,{type:p?"valid":"invalid",tooltip:y},N))))}));g.displayName="FormFile",g.Input=h,g.Label=w;var F=g,k=t(130),R=["bsPrefix","className","children","controlId","as"],V=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,o=e.children,f=e.controlId,m=e.as,b=void 0===m?"div":m,v=Object(l.a)(e,R);t=Object(u.a)(t,"form-group");var p=Object(s.useMemo)((function(){return{controlId:f}}),[f]);return c.a.createElement(d.a.Provider,{value:p},c.a.createElement(b,Object(r.a)({},v,{ref:a,className:n()(i,t)}),o))}));V.displayName="FormGroup";var S=V,T=(t(35),t(127)),L=["as","bsPrefix","column","srOnly","className","htmlFor"],A=c.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,o=e.bsPrefix,f=e.column,m=e.srOnly,b=e.className,v=e.htmlFor,p=Object(l.a)(e,L),O=Object(s.useContext)(d.a).controlId;o=Object(u.a)(o,"form-label");var j="col-form-label";"string"===typeof f&&(j=j+" "+j+"-"+f);var x=n()(b,o,m&&"sr-only",f&&j);return v=v||O,f?c.a.createElement(T.a,Object(r.a)({ref:a,as:"label",className:x,htmlFor:v},p)):c.a.createElement(i,Object(r.a)({ref:a,className:x,htmlFor:v},p))}));A.displayName="FormLabel",A.defaultProps={column:!1,srOnly:!1};var K=A,M=["bsPrefix","className","as","muted"],_=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.as,o=void 0===s?"small":s,d=e.muted,f=Object(l.a)(e,M);return t=Object(u.a)(t,"form-text"),c.a.createElement(o,Object(r.a)({},f,{ref:a,className:n()(i,t,d&&"text-muted")}))}));_.displayName="FormText";var z=_,q=c.a.forwardRef((function(e,a){return c.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=y.Input,q.Label=y.Label;var B=q,G=t(29),H=["bsPrefix","inline","className","validated","as"],J=Object(G.a)("form-row"),D=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.inline,s=e.className,o=e.validated,d=e.as,f=void 0===d?"form":d,m=Object(l.a)(e,H);return t=Object(u.a)(t,"form"),c.a.createElement(f,Object(r.a)({},m,{ref:a,className:n()(s,o&&"was-validated",i&&t+"-inline")}))}));D.displayName="Form",D.defaultProps={inline:!1},D.Row=J,D.Group=S,D.Control=k.a,D.Check=y,D.File=F,D.Switch=B,D.Label=K,D.Text=z;a.a=D},511:function(e,a,t){"use strict";var r=t(4),l=t(6),i=t(7),n=t.n(i),s=t(0),c=t.n(s),o=t(30),d=t(8),u=t(20),f=c.a.createContext(null);f.displayName="AccordionContext";var m=f,b=["as","children","eventKey","onClick"];var v=c.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"button":t,n=e.children,o=e.eventKey,d=e.onClick,f=Object(l.a)(e,b),v=function(e,a){var t=Object(s.useContext)(m),r=Object(s.useContext)(u.a);return function(l){r&&r(e===t?null:e,l),a&&a(l)}}(o,d);return"button"===i&&(f.type="button"),c.a.createElement(i,Object(r.a)({ref:a,onClick:v},f),n)})),p=t(95),O=["children","eventKey"],j=c.a.forwardRef((function(e,a){var t=e.children,i=e.eventKey,n=Object(l.a)(e,O),o=Object(s.useContext)(m);return c.a.createElement(u.a.Provider,{value:null},c.a.createElement(p.a,Object(r.a)({ref:a,in:o===i},n),c.a.createElement("div",null,c.a.Children.only(t))))}));j.displayName="AccordionCollapse";var x=j,y=["as","activeKey","bsPrefix","children","className","onSelect"],N=c.a.forwardRef((function(e,a){var t=Object(o.a)(e,{activeKey:"onSelect"}),i=t.as,s=void 0===i?"div":i,f=t.activeKey,b=t.bsPrefix,v=t.children,p=t.className,O=t.onSelect,j=Object(l.a)(t,y),x=n()(p,Object(d.a)(b,"accordion"));return c.a.createElement(m.Provider,{value:f||null},c.a.createElement(u.a.Provider,{value:O||null},c.a.createElement(s,Object(r.a)({ref:a},j,{className:x}),v)))}));N.displayName="Accordion",N.Toggle=v,N.Collapse=x;a.a=N},513:function(e,a,t){"use strict";var r=t(4),l=t(6),i=t(7),n=t.n(i),s=t(0),c=t.n(s),o=t(8),d=t(29),u=t(144),f=t(131),m=["bsPrefix","className","variant","as"],b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.variant,d=e.as,u=void 0===d?"img":d,f=Object(l.a)(e,m),b=Object(o.a)(t,"card-img");return c.a.createElement(u,Object(r.a)({ref:a,className:n()(s?b+"-"+s:b,i)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,p=["bsPrefix","className","bg","text","border","body","children","as"],O=Object(u.a)("h5"),j=Object(u.a)("h6"),x=Object(d.a)("card-body"),y=Object(d.a)("card-title",{Component:O}),N=Object(d.a)("card-subtitle",{Component:j}),P=Object(d.a)("card-link",{Component:"a"}),h=Object(d.a)("card-text",{Component:"p"}),C=Object(d.a)("card-header"),E=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),I=c.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,d=e.bg,u=e.text,m=e.border,b=e.body,v=e.children,O=e.as,j=void 0===O?"div":O,y=Object(l.a)(e,p),N=Object(o.a)(t,"card"),P=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return c.a.createElement(f.a.Provider,{value:P},c.a.createElement(j,Object(r.a)({ref:a},y,{className:n()(i,N,d&&"bg-"+d,u&&"text-"+u,m&&"border-"+m)}),b?c.a.createElement(x,null,v):v))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=v,I.Title=y,I.Subtitle=N,I.Body=x,I.Link=P,I.Text=h,I.Header=C,I.Footer=E,I.ImgOverlay=w;a.a=I}}]);
//# sourceMappingURL=35.d8a37e5e.chunk.js.map