var we=Object.defineProperty;var $e=(t,e,n)=>e in t?we(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var K=(t,e,n)=>$e(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function $(){}function he(t){return t()}function te(){return Object.create(null)}function O(t){t.forEach(he)}function V(t){return typeof t=="function"}function pe(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ne(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function q(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function W(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function N(t){return document.createTextNode(t)}function g(){return N(" ")}function X(){return N("")}function D(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function Ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function be(t){return t===""?null:+t}function Se(t){return Array.from(t.childNodes)}function Y(t,e){e=""+e,t.data!==e&&(t.data=e)}function ne(t,e){t.value=e??""}let Z;function P(t){Z=t}const L=[],le=[];let A=[];const re=[],Le=Promise.resolve();let U=!1;function Ae(){U||(U=!0,Le.then(ge))}function z(t){A.push(t)}const R=new Set;let S=0;function ge(){if(S!==0)return;const t=Z;do{try{for(;S<L.length;){const e=L[S];S++,P(e),Me(e.$$)}}catch(e){throw L.length=0,S=0,e}for(P(null),L.length=0,S=0;le.length;)le.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];R.has(n)||(R.add(n),n())}A.length=0}while(L.length);for(;re.length;)re.pop()();U=!1,R.clear(),P(t)}function Me(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function Oe(t){const e=[],n=[];A.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),A=e}const B=new Set;let w;function Ce(){w={r:0,c:[],p:w}}function Te(){w.r||O(w.c),w=w.p}function F(t,e){t&&t.i&&(B.delete(t),t.i(e))}function J(t,e,n,l){if(t&&t.o){if(B.has(t))return;B.add(t),w.c.push(()=>{B.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function M(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function He(t){t&&t.c()}function ye(t,e,n){const{fragment:l,after_update:r}=t.$$;l&&l.m(e,n),z(()=>{const i=t.$$.on_mount.map(he).filter(V);t.$$.on_destroy?t.$$.on_destroy.push(...i):O(i),t.$$.on_mount=[]}),r.forEach(z)}function ve(t,e){const n=t.$$;n.fragment!==null&&(Oe(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(t,e){t.$$.dirty[0]===-1&&(L.push(t),Ae(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function qe(t,e,n,l,r,i,u=null,d=[-1]){const m=Z;P(t);const o=t.$$={fragment:null,ctx:[],props:i,update:$,not_equal:r,bound:te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:te(),dirty:d,skip_bound:!1,root:e.target||m.$$.root};u&&u(o.root);let s=!1;if(o.ctx=n?n(t,e.props||{},(f,p,...a)=>{const v=a.length?a[0]:p;return o.ctx&&r(o.ctx[f],o.ctx[f]=v)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](v),s&&Pe(t,f)),p}):[],o.update(),s=!0,O(o.before_update),o.fragment=l?l(o.ctx):!1,e.target){if(e.hydrate){const f=Se(e.target);o.fragment&&o.fragment.l(f),f.forEach(y)}else o.fragment&&o.fragment.c();e.intro&&F(t.$$.fragment),ye(t,e.target,e.anchor),ge()}P(m)}class ke{constructor(){K(this,"$$");K(this,"$$set")}$destroy(){ve(this,1),this.$destroy=$}$on(e,n){if(!V(n))return $;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(e){this.$$set&&!Ne(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const je="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(je);function ie(t){let e,n,l;return{c(){e=_("button"),e.textContent="Start",h(e,"type","button"),h(e,"class","svelte-73vyxq")},m(r,i){q(r,e,i),n||(l=D(e,"click",function(){V(t[2])&&t[2].apply(this,arguments)}),n=!0)},p(r,i){t=r},d(r){r&&y(e),n=!1,l()}}}function Ie(t){let e,n,l,r=t[1].length+"",i,u,d,m,o,s,f,p,a,v,k,E,C,j,T,x,G,ee,b=t[1].length>2&&ie(t);return{c(){e=_("form"),n=_("h2"),l=N("# of Questions: "),i=N(r),u=g(),d=_("fieldset"),d.innerHTML='<label for="question1">Number 1:</label> <input type="number" id="question1" name="question1" required=""/>',m=g(),o=_("fieldset"),o.innerHTML='<label for="question2">Number 2:</label> <input type="number" id="question2" name="question2" required=""/>',s=g(),f=_("hr"),p=g(),a=_("fieldset"),a.innerHTML='<label for="question3">Number 3:</label> <input type="number" id="question3" name="question3"/>',v=g(),k=_("fieldset"),k.innerHTML='<label for="question4">Number 4:</label> <input type="number" id="question4" name="question4"/>',E=g(),C=_("fieldset"),C.innerHTML='<label for="question5">Number 5:</label> <input type="number" id="question5" name="question5"/>',j=g(),T=_("button"),T.textContent="Submit",x=g(),b&&b.c(),h(d,"class","svelte-73vyxq"),h(o,"class","svelte-73vyxq"),h(a,"class","svelte-73vyxq"),h(k,"class","svelte-73vyxq"),h(C,"class","svelte-73vyxq"),h(T,"type","submit"),h(T,"class","svelte-73vyxq"),h(e,"class","svelte-73vyxq")},m(H,I){q(H,e,I),c(e,n),c(n,l),c(n,i),c(e,u),c(e,d),c(e,m),c(e,o),c(e,s),c(e,f),c(e,p),c(e,a),c(e,v),c(e,k),c(e,E),c(e,C),c(e,j),c(e,T),c(e,x),b&&b.m(e,null),G||(ee=D(e,"submit",Ee(function(){V(t[0])&&t[0].apply(this,arguments)})),G=!0)},p(H,[I]){t=H,I&2&&r!==(r=t[1].length+"")&&Y(i,r),t[1].length>2?b?b.p(t,I):(b=ie(t),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i:$,o:$,d(H){H&&y(e),b&&b.d(),G=!1,ee()}}}function Be(t,e,n){let{handleSubmit:l}=e,{questions:r}=e,{start:i}=e;return t.$$set=u=>{"handleSubmit"in u&&n(0,l=u.handleSubmit),"questions"in u&&n(1,r=u.questions),"start"in u&&n(2,i=u.start)},[l,r,i]}class De extends ke{constructor(e){super(),qe(this,e,Be,Ie,pe,{handleSubmit:0,questions:1,start:2})}}function ue(t,e,n){const l=t.slice();return l[13]=e[n],l}function oe(t,e,n){const l=t.slice();return l[10]=e[n],l[12]=n,l}function se(t,e,n){const l=t.slice();return l[13]=e[n],l}function Fe(t){let e,n;return e=new De({props:{questions:t[1],handleSubmit:t[6],start:t[9]}}),{c(){He(e.$$.fragment)},m(l,r){ye(e,l,r),n=!0},p(l,r){const i={};r&2&&(i.questions=l[1]),r&1&&(i.start=l[9]),e.$set(i)},i(l){n||(F(e.$$.fragment,l),n=!0)},o(l){J(e.$$.fragment,l),n=!1},d(l){ve(e,l)}}}function Qe(t){let e;function n(i,u){return i[5].length===i[1].length?Ge:Ve}let l=n(t),r=l(t);return{c(){r.c(),e=X()},m(i,u){r.m(i,u),q(i,e,u)},p(i,u){l===(l=n(i))&&r?r.p(i,u):(r.d(1),r=l(i),r&&(r.c(),r.m(e.parentNode,e)))},i:$,o:$,d(i){i&&y(e),r.d(i)}}}function Ve(t){let e,n,l,r,i,u,d,m,o=t[1][t[2]]&&fe(t);return{c(){e=_("div"),n=_("section"),l=_("div"),r=g(),o&&o.c(),i=g(),u=_("input"),h(l,"class","enemy animate__animated animate__bounce animate__infinite svelte-7t3soo"),h(l,"data-frame",t[4]),h(n,"class","svelte-7t3soo"),h(u,"type","number"),h(u,"placeholder","Answer..."),u.required=!0,h(e,"class","game")},m(s,f){q(s,e,f),c(e,n),c(n,l),c(n,r),o&&o.m(n,null),c(e,i),c(e,u),ne(u,t[3]),d||(m=[D(u,"input",t[8]),D(u,"keydown",t[7])],d=!0)},p(s,f){f&16&&h(l,"data-frame",s[4]),s[1][s[2]]?o?o.p(s,f):(o=fe(s),o.c(),o.m(n,null)):o&&(o.d(1),o=null),f&8&&be(u.value)!==s[3]&&ne(u,s[3])},d(s){s&&y(e),o&&o.d(),d=!1,O(m)}}}function Ge(t){let e,n=M(t[1]),l=[];for(let r=0;r<n.length;r+=1)l[r]=_e(oe(t,n,r));return{c(){e=_("footer");for(let r=0;r<l.length;r+=1)l[r].c();h(e,"class","svelte-7t3soo")},m(r,i){q(r,e,i);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null)},p(r,i){if(i&34){n=M(r[1]);let u;for(u=0;u<n.length;u+=1){const d=oe(r,n,u);l[u]?l[u].p(d,i):(l[u]=_e(d),l[u].c(),l[u].m(e,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=n.length}},d(r){r&&y(e),W(l,r)}}}function fe(t){let e,n=M(t[1][t[2]]),l=[];for(let r=0;r<n.length;r+=1)l[r]=ae(ue(t,n,r));return{c(){e=_("ul");for(let r=0;r<l.length;r+=1)l[r].c();h(e,"class","svelte-7t3soo")},m(r,i){q(r,e,i);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(e,null)},p(r,i){if(i&6){n=M(r[1][r[2]]);let u;for(u=0;u<n.length;u+=1){const d=ue(r,n,u);l[u]?l[u].p(d,i):(l[u]=ae(d),l[u].c(),l[u].m(e,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=n.length}},d(r){r&&y(e),W(l,r)}}}function ce(t){let e,n=Q(t[13])+"",l;return{c(){e=_("li"),l=N(n)},m(r,i){q(r,e,i),c(e,l)},p(r,i){i&6&&n!==(n=Q(r[13])+"")&&Y(l,n)},d(r){r&&y(e)}}}function ae(t){let e,n=t[13]&&ce(t);return{c(){n&&n.c(),e=X()},m(l,r){n&&n.m(l,r),q(l,e,r)},p(l,r){l[13]?n?n.p(l,r):(n=ce(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){l&&y(e),n&&n.d(l)}}}function de(t){let e,n=Q(t[13])+"",l;return{c(){e=_("li"),l=N(n)},m(r,i){q(r,e,i),c(e,l)},p(r,i){i&2&&n!==(n=Q(r[13])+"")&&Y(l,n)},d(r){r&&y(e)}}}function me(t){let e,n=t[13]&&de(t);return{c(){n&&n.c(),e=X()},m(l,r){n&&n.m(l,r),q(l,e,r)},p(l,r){l[13]?n?n.p(l,r):(n=de(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){l&&y(e),n&&n.d(l)}}}function _e(t){let e,n,l,r,i,u=t[5][t[12]].answer+"",d,m,o=M(t[1][t[12]]),s=[];for(let f=0;f<o.length;f+=1)s[f]=me(se(t,o,f));return{c(){e=_("ul");for(let f=0;f<s.length;f+=1)s[f].c();n=g(),l=_("li"),l.innerHTML="<hr/>",r=g(),i=_("li"),d=N(u),m=g(),h(i,"data-answer",""),h(i,"data-correct",t[5][t[12]].correct||null),h(e,"class","svelte-7t3soo")},m(f,p){q(f,e,p);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(e,null);c(e,n),c(e,l),c(e,r),c(e,i),c(i,d),c(e,m)},p(f,p){if(p&2){o=M(f[1][f[12]]);let a;for(a=0;a<o.length;a+=1){const v=se(f,o,a);s[a]?s[a].p(v,p):(s[a]=me(v),s[a].c(),s[a].m(e,n))}for(;a<s.length;a+=1)s[a].d(1);s.length=o.length}},d(f){f&&y(e),W(s,f)}}}function Ke(t){let e,n,l,r,i,u;const d=[Qe,Fe],m=[];function o(s,f){return s[0]?0:1}return r=o(t),i=m[r]=d[r](t),{c(){e=_("main"),n=_("h1"),n.textContent="Slay Abacus Monsters",l=g(),i.c()},m(s,f){q(s,e,f),c(e,n),c(e,l),m[r].m(e,null),u=!0},p(s,[f]){let p=r;r=o(s),r===p?m[r].p(s,f):(Ce(),J(m[p],1,1,()=>{m[p]=null}),Te(),i=m[r],i?i.p(s,f):(i=m[r]=d[r](s),i.c()),F(i,1),i.m(e,null))},i(s){u||(F(i),u=!0)},o(s){J(i),u=!1},d(s){s&&y(e),m[r].d()}}}function Q(t){return t>0?t<10?`0${t}`:t:t>-10?`-0${t*-1}`:t}function Re(t,e,n){let l=!1,r=[],i=[],u=0,d="",m=0;function o(a){const v=new FormData(a.target),E=Array.from(v.entries()).map(([C,j])=>Number(j));n(1,r=[...r,E]),a.target.reset()}function s(a){if(a.key==="Enter"){const v=r[u].reduce((k,E)=>k+E,0);i.push({correct:Number(d)===v,answer:d}),n(2,u++,u),n(3,d=""),n(4,m=Math.floor(Math.random()*4))}}function f(){d=be(this.value),n(3,d)}return[l,r,u,d,m,i,o,s,f,()=>{n(0,l=!0)}]}class Ue extends ke{constructor(e){super(),qe(this,e,Re,Ke,pe,{})}}new Ue({target:document.getElementById("app")});
