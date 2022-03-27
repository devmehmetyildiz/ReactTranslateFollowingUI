(window["webpackJsonpcorona-react"]=window["webpackJsonpcorona-react"]||[]).push([[41],{104:function(e,a,t){"use strict";var r=t(0),l=t.n(r).a.createContext({controlId:void 0});a.a=l},108:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,s.default)((function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}))};var r,l=t(117),s=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},110:function(e,a,t){"use strict";var r=t(4),l=t(6),s=t(7),o=t.n(s),n=t(0),c=t.n(n),i=t(3),m=t.n(i),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},p=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,n=e.className,i=e.type,m=void 0===i?"valid":i,u=e.tooltip,p=void 0!==u&&u,f=Object(l.a)(e,d);return c.a.createElement(s,Object(r.a)({},f,{ref:a,className:o()(n,m+"-"+(p?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=u,a.a=p},117:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,s,o){var n=l||"<<anonymous>>",c=o||r;if(null==t[r])return a?new Error("Required "+s+" `"+c+"` was not specified in `"+n+"`."):null;for(var i=arguments.length,m=Array(i>6?i-6:0),d=6;d<i;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,r,n,s,c].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},127:function(e,a,t){"use strict";var r=t(4),l=t(6),s=t(7),o=t.n(s),n=t(0),c=t.n(n),i=t(8),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,u=void 0===n?"div":n,p=Object(l.a)(e,m),f=Object(i.a)(t,"col"),b=[],v=[];return d.forEach((function(e){var a,t,r,l=p[e];if(delete p[e],"object"===typeof l&&null!=l){var s=l.span;a=void 0===s||s,t=l.offset,r=l.order}else a=l;var o="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+f+o:""+f+o+"-"+a),null!=r&&v.push("order"+o+"-"+r),null!=t&&v.push("offset"+o+"-"+t)})),b.length||b.push(f),c.a.createElement(u,Object(r.a)({},p,{ref:a,className:o.a.apply(void 0,[s].concat(b,v))}))}));u.displayName="Col",a.a=u},1289:function(e,a,t){"use strict";t.r(a),t.d(a,"SearchResults",(function(){return u}));var r=t(13),l=t(14),s=t(16),o=t(15),n=t(17),c=t(0),i=t.n(c),m=t(201),d=t(72),u=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(n.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Search results"),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"General pages")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Search results")))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("form",{action:"#"},i.a.createElement(m.a.Group,{className:"d-flex"},i.a.createElement(m.a.Control,{type:"text",placeholder:"Search Here",className:"h-auto",defaultValue:"Bootstrapdash"}),i.a.createElement(d.a,{variant:"primary",type:"submit",className:"ml-3"}," Search ")))),i.a.createElement("div",{className:"col-12 mb-5"},i.a.createElement("h2",null,"Search Result For",i.a.createElement("u",{className:"ml-2"},'"Bootstrapdash"')),i.a.createElement("p",{className:"text-muted"},"About 12,100 results (0.52 seconds)")),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://www.bootstrapdash.com/"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Bootstrapdash gives you the most beautiful, free and premium bootstrap admin dashboard templates and control panel themes based on Bootstrap 3 and 4."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash Team \u2013 Medium"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://medium.com/@bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Read writing from Bootstrapdash Team on Medium. We design and develop awesome admin dashboard templates with Bootstrap, so you can kick-start and speed up your development. www.bootstrapdash.com."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash \xb7 GitHub"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://github.com/bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Bootstrapdash has 1 repository available. Follow their code on GitHub."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"bootstrapdash.com - Home | Facebook"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://www.facebook.com/bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Bootstrapdash.com. 9 likes \xb7 4 talking about this. Clean, customisable admin dashboard template themes / UI WebApp Kits with a huge collection of..."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash Team \u2013 Hacker Noon"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://hackernoon.com/@bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Oct 9, 2017 - Read writing from Bootstrapdash Team in Hacker Noon. We design and develop awesome admin dashboard templates with Bootstrap, so you can kick-start and speed up your development. www.bootstrapdash.com."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash | Crunchbase"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://www.crunchbase.com/organization/bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Bootstrapdash creates quality admin templates that are based on Bootstrap, the most popular front end development framework."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash.com (@bootstrapdash) | Twitter"),i.a.createElement("a",{className:"page-url text-primary",href:"!#",onClick:function(e){return e.preventDefault()}},"https://twitter.com/@bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"The latest Tweets from bootstrapdash.com (@bootstrapdash). Clean, customisable admin dashboard template themes / UI WebApp Kits with a huge collection of pre-built widgets and plugins."))),i.a.createElement("div",{className:"col-12 results"},i.a.createElement("div",{className:"pt-4 border-bottom"},i.a.createElement("a",{className:"d-block h4",href:"!#",onClick:function(e){return e.preventDefault()}},"Bootstrapdash on Behance"),i.a.createElement("a",{className:"page-url text-primary",href:"!#"},"https://www.behance.net/bootstrapdash"),i.a.createElement("p",{className:"page-description mt-1 w-75 text-muted"},"Awesome Bootstrap Admin Dashboard Templates. For Faster, Easier Web Applications Development. Clean, customizable admin dashboard template theme / UI WebApp Kit with a huge collection of pre-built widgets and plugins. Design and build modern, robust, user-friendly web applications real fast!"))),i.a.createElement("nav",{className:"col-12","aria-label":"Page navigation"},i.a.createElement("ul",{className:"pagination mt-5"},i.a.createElement("li",{className:"page-item"},i.a.createElement("a",{className:"page-link",href:"!#",onClick:function(e){return e.preventDefault()}},"Previous")),i.a.createElement("li",{className:"page-item  active"},i.a.createElement("a",{className:"page-link",href:"!#",onClick:function(e){return e.preventDefault()}},"1")),i.a.createElement("li",{className:"page-item"},i.a.createElement("a",{className:"page-link",href:"!#",onClick:function(e){return e.preventDefault()}},"2")),i.a.createElement("li",{className:"page-item"},i.a.createElement("a",{className:"page-link",href:"!#",onClick:function(e){return e.preventDefault()}},"3")),i.a.createElement("li",{className:"page-item"},i.a.createElement("a",{className:"page-link",href:"!#",onClick:function(e){return e.preventDefault()}},"Next"))))))))))}}]),a}(c.Component);a.default=u},130:function(e,a,t){"use strict";var r=t(4),l=t(6),s=t(7),o=t.n(s),n=(t(108),t(0)),c=t.n(n),i=(t(35),t(110)),m=t(104),d=t(8),u=["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"],p=c.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,p=e.bsCustomPrefix,f=e.type,b=e.size,v=e.htmlSize,h=e.id,N=e.className,E=e.isValid,x=void 0!==E&&E,w=e.isInvalid,y=void 0!==w&&w,g=e.plaintext,k=e.readOnly,O=e.custom,j=e.as,C=void 0===j?"input":j,P=Object(l.a)(e,u),F=Object(n.useContext)(m.a).controlId,I=O?[p,"custom"]:[i,"form-control"],D=I[0],B=I[1];if(i=Object(d.a)(D,B),g)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===f){var R;(R={})[i+"-file"]=!0,t=R}else if("range"===f){var T;(T={})[i+"-range"]=!0,t=T}else if("select"===C&&O){var S;(S={})[i+"-select"]=!0,S[i+"-select-"+b]=b,t=S}else{var V;(V={})[i]=!0,V[i+"-"+b]=b,t=V}return c.a.createElement(C,Object(r.a)({},P,{type:f,size:v,ref:a,readOnly:k,id:h||F,className:o()(N,t,x&&"is-valid",y&&"is-invalid")}))}));p.displayName="FormControl",a.a=Object.assign(p,{Feedback:i.a})},201:function(e,a,t){"use strict";var r=t(4),l=t(6),s=t(7),o=t.n(s),n=t(0),c=t.n(n),i=(t(108),t(110)),m=t(104),d=t(8),u=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],p=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,p=e.className,f=e.type,b=void 0===f?"checkbox":f,v=e.isValid,h=void 0!==v&&v,N=e.isInvalid,E=void 0!==N&&N,x=e.isStatic,w=e.as,y=void 0===w?"input":w,g=Object(l.a)(e,u),k=Object(n.useContext)(m.a),O=k.controlId,j=k.custom?[i,"custom-control-input"]:[s,"form-check-input"],C=j[0],P=j[1];return s=Object(d.a)(C,P),c.a.createElement(y,Object(r.a)({},g,{ref:a,type:b,id:t||O,className:o()(p,s,h&&"is-valid",E&&"is-invalid",x&&"position-static")}))}));p.displayName="FormCheckInput";var f=p,b=["bsPrefix","bsCustomPrefix","className","htmlFor"],v=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,u=e.htmlFor,p=Object(l.a)(e,b),f=Object(n.useContext)(m.a),v=f.controlId,h=f.custom?[s,"custom-control-label"]:[t,"form-check-label"],N=h[0],E=h[1];return t=Object(d.a)(N,E),c.a.createElement("label",Object(r.a)({},p,{ref:a,htmlFor:u||v,className:o()(i,t)}))}));v.displayName="FormCheckLabel";var h=v,N=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],E=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,u=e.bsCustomPrefix,p=e.inline,b=void 0!==p&&p,v=e.disabled,E=void 0!==v&&v,x=e.isValid,w=void 0!==x&&x,y=e.isInvalid,g=void 0!==y&&y,k=e.feedbackTooltip,O=void 0!==k&&k,j=e.feedback,C=e.className,P=e.style,F=e.title,I=void 0===F?"":F,D=e.type,B=void 0===D?"checkbox":D,R=e.label,T=e.children,S=e.custom,V=e.as,A=void 0===V?"input":V,L=Object(l.a)(e,N),M="switch"===B||S,z=M?[u,"custom-control"]:[s,"form-check"],G=z[0],H=z[1];s=Object(d.a)(G,H);var W=Object(n.useContext)(m.a).controlId,_=Object(n.useMemo)((function(){return{controlId:t||W,custom:M}}),[W,M,t]),q=M||null!=R&&!1!==R&&!T,K=c.a.createElement(f,Object(r.a)({},L,{type:"switch"===B?"checkbox":B,ref:a,isValid:w,isInvalid:g,isStatic:!q,disabled:E,as:A}));return c.a.createElement(m.a.Provider,{value:_},c.a.createElement("div",{style:P,className:o()(C,s,M&&"custom-"+B,b&&s+"-inline")},T||c.a.createElement(c.a.Fragment,null,K,q&&c.a.createElement(h,{title:I},R),(w||g)&&c.a.createElement(i.a,{type:w?"valid":"invalid",tooltip:O},j))))}));E.displayName="FormCheck",E.Input=f,E.Label=h;var x=E,w=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],y=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,u=e.className,p=e.isValid,f=e.isInvalid,b=e.lang,v=e.as,h=void 0===v?"input":v,N=Object(l.a)(e,w),E=Object(n.useContext)(m.a),x=E.controlId,y=E.custom?[i,"custom-file-input"]:[s,"form-control-file"],g=y[0],k=y[1];return s=Object(d.a)(g,k),c.a.createElement(h,Object(r.a)({},N,{ref:a,id:t||x,type:"file",lang:b,className:o()(u,s,p&&"is-valid",f&&"is-invalid")}))}));y.displayName="FormFileInput";var g=y,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,u=e.htmlFor,p=Object(l.a)(e,k),f=Object(n.useContext)(m.a),b=f.controlId,v=f.custom?[s,"custom-file-label"]:[t,"form-file-label"],h=v[0],N=v[1];return t=Object(d.a)(h,N),c.a.createElement("label",Object(r.a)({},p,{ref:a,htmlFor:u||b,className:o()(i,t),"data-browse":p["data-browse"]}))}));O.displayName="FormFileLabel";var j=O,C=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],P=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,u=e.bsCustomPrefix,p=e.disabled,f=void 0!==p&&p,b=e.isValid,v=void 0!==b&&b,h=e.isInvalid,N=void 0!==h&&h,E=e.feedbackTooltip,x=void 0!==E&&E,w=e.feedback,y=e.className,k=e.style,O=e.label,P=e.children,F=e.custom,I=e.lang,D=e["data-browse"],B=e.as,R=void 0===B?"div":B,T=e.inputAs,S=void 0===T?"input":T,V=Object(l.a)(e,C),A=F?[u,"custom"]:[s,"form-file"],L=A[0],M=A[1];s=Object(d.a)(L,M);var z=Object(n.useContext)(m.a).controlId,G=Object(n.useMemo)((function(){return{controlId:t||z,custom:F}}),[z,F,t]),H=null!=O&&!1!==O&&!P,W=c.a.createElement(g,Object(r.a)({},V,{ref:a,isValid:v,isInvalid:N,disabled:f,as:S,lang:I}));return c.a.createElement(m.a.Provider,{value:G},c.a.createElement(R,{style:k,className:o()(y,s,F&&"custom-file")},P||c.a.createElement(c.a.Fragment,null,F?c.a.createElement(c.a.Fragment,null,W,H&&c.a.createElement(j,{"data-browse":D},O)):c.a.createElement(c.a.Fragment,null,H&&c.a.createElement(j,null,O),W),(v||N)&&c.a.createElement(i.a,{type:v?"valid":"invalid",tooltip:x},w))))}));P.displayName="FormFile",P.Input=g,P.Label=j;var F=P,I=t(130),D=["bsPrefix","className","children","controlId","as"],B=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,u=e.controlId,p=e.as,f=void 0===p?"div":p,b=Object(l.a)(e,D);t=Object(d.a)(t,"form-group");var v=Object(n.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(m.a.Provider,{value:v},c.a.createElement(f,Object(r.a)({},b,{ref:a,className:o()(s,t)}),i))}));B.displayName="FormGroup";var R=B,T=(t(35),t(127)),S=["as","bsPrefix","column","srOnly","className","htmlFor"],V=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,u=e.column,p=e.srOnly,f=e.className,b=e.htmlFor,v=Object(l.a)(e,S),h=Object(n.useContext)(m.a).controlId;i=Object(d.a)(i,"form-label");var N="col-form-label";"string"===typeof u&&(N=N+" "+N+"-"+u);var E=o()(f,i,p&&"sr-only",u&&N);return b=b||h,u?c.a.createElement(T.a,Object(r.a)({ref:a,as:"label",className:E,htmlFor:b},v)):c.a.createElement(s,Object(r.a)({ref:a,className:E,htmlFor:b},v))}));V.displayName="FormLabel",V.defaultProps={column:!1,srOnly:!1};var A=V,L=["bsPrefix","className","as","muted"],M=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,i=void 0===n?"small":n,m=e.muted,u=Object(l.a)(e,L);return t=Object(d.a)(t,"form-text"),c.a.createElement(i,Object(r.a)({},u,{ref:a,className:o()(s,t,m&&"text-muted")}))}));M.displayName="FormText";var z=M,G=c.a.forwardRef((function(e,a){return c.a.createElement(x,Object(r.a)({},e,{ref:a,type:"switch"}))}));G.displayName="Switch",G.Input=x.Input,G.Label=x.Label;var H=G,W=t(29),_=["bsPrefix","inline","className","validated","as"],q=Object(W.a)("form-row"),K=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,n=e.className,i=e.validated,m=e.as,u=void 0===m?"form":m,p=Object(l.a)(e,_);return t=Object(d.a)(t,"form"),c.a.createElement(u,Object(r.a)({},p,{ref:a,className:o()(n,i&&"was-validated",s&&t+"-inline")}))}));K.displayName="Form",K.defaultProps={inline:!1},K.Row=q,K.Group=R,K.Control=I.a,K.Check=x,K.File=F,K.Switch=H,K.Label=A,K.Text=z;a.a=K}}]);
//# sourceMappingURL=41.0f08b2ce.chunk.js.map