(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{104:function(e,t,a){},15:function(e,t,a){e.exports={container:"styled_container__1OS7d",headline:"styled_headline__2Q93Y",question:"styled_question__3K-eP",topic:"styled_topic__3FRjW",answer:"styled_answer__3L1jd"}},20:function(e,t,a){e.exports={container:"styled_container__24DsA",disclaimer:"styled_disclaimer__1NS2i",bold:"styled_bold__11u7c",button:"styled_button__21FkY"}},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(89),l=a.n(c),s=(a(103),a(104),a(90)),o=a.n(s),i=function(e){return r.a.createElement("div",{className:o.a.container},e.children)},u=a(97),m=a(91),d=a(45),f=a.n(d),p=a(92),_=a(6),h=a(93),E=a.n(h),y=a(15),v=a.n(y),b=function(e){var t=e.q,a=e.a,n=e.t;return r.a.createElement("li",{className:v.a.container},r.a.createElement("div",{className:v.a.headline},r.a.createElement("h3",{className:v.a.question},"Q: ",t),r.a.createElement("span",{className:v.a.topic},n)),r.a.createElement("div",{className:v.a.answer},a))},g=a(46),q=a.n(g),N=function(e){var t=e.text;return r.a.createElement("div",{className:q.a.container},r.a.createElement("h2",{className:q.a.text},t||"Loading..."))},O=a(94),j=a.n(O),x=a(95),w=a.n(x),S=function(e){return r.a.createElement("div",null,r.a.createElement(j.a,Object.assign({plugins:[w.a]},e,{allowDangerousHtml:!0})))},k=a(7),A=a.n(k),D=a(96),F=a.n(D),I={dev:{questionAPI:{baseURL:"http://localhost:1337",paths:{topic:"/question-types",qna:"/qnas"}}},prod:{questionAPI:{baseURL:"https://webdev-qa.herokuapp.com",paths:{qna:"/qnas",topic:"/question-types"}}}},T="_self"in r.a.createElement("div")?I.dev:I.prod,C=function(e){return F.a.get("".concat(T.questionAPI.baseURL).concat(e)).catch((function(e){e.response&&(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers))}))},G=a(47),R=a.n(G),L=function(e){return r.a.createElement("option",{className:R.a.option},e.children)},P=function(e){return r.a.createElement("select",{value:e.value,onChange:e.onChange,className:R.a.container},e.choices?e.choices.map((function(e,t){return r.a.createElement(L,{key:t},e)})):"")},U=function(e){return r.a.createElement("ul",{className:A.a.list},e.map((function(e,t){return r.a.createElement(b,{key:t,q:e.question,a:r.a.createElement(S,{source:e.answer}),t:e.topic})})))},J=function(e){return e.map((function(e){var t=e.question_type&&e.question_type.Type?e.question_type.Type:"General";return{question:e.question,topic:t,answer:e.answer}}))},X=function(){var e=localStorage.getItem("filter"),t=Object(n.useState)(),a=Object(_.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(),o=Object(_.a)(s,2),i=o[0],d=o[1],h=Object(n.useState)(e||"All"),y=Object(_.a)(h,2),v=y[0],b=y[1],g=Object(n.useState)(""),q=Object(_.a)(g,2),O=q[0],j=q[1],x=Object(n.useState)(c),w=Object(_.a)(x,2),S=w[0],k=w[1],D=Object(n.useState)("selected"),F=Object(_.a)(D,2),I=F[0],T=F[1];Object(n.useEffect)((function(){if(function(){var e=Object(p.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c||i){e.next=9;break}return e.next=3,C("/qnas");case 3:return t=e.sent,e.next=6,C("/question-types");case 6:a=e.sent,t&&l(J(t.data)),a&&d(a.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),v||O){var e=setTimeout((function(){G()}),"selected"===I?0:500);return function(){clearTimeout(e)}}}),[c,i,v,O,I]);var G=function(){var e,t=[],a=[];if(e=function(e,t){return e?"All"===t?e:e.filter((function(e){return e.topic===t})):e}(c,v),""!==O){(a=function(e,t){var a=E()(e);return a(t)}(function(e){return e.map((function(e){return e.question}))}(e),O)).sort((function(e,t){return t.score-e.score}));var n,r=Object(m.a)(a);try{for(r.s();!(n=r.n()).done;){var l=n.value;t.push(e[l.index])}}catch(s){r.e(s)}finally{r.f()}k(t)}else k(e)};return r.a.createElement("div",{className:A.a.container},r.a.createElement("form",{className:A.a.form,onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:A.a.formGroup},r.a.createElement("label",{className:A.a.label,htmlFor:"search"},"Find Anything"),r.a.createElement("input",{onChange:function(e){T("searched"),j(e.target.value)},id:"search",className:A.a.search,type:"text",placeholder:"Search..",name:"search"})),r.a.createElement("div",{className:A.a.formGroup},r.a.createElement("label",{className:A.a.label,htmlFor:"dropdown"},"Topic"),r.a.createElement(P,{value:v,id:"dropdown",onChange:function(e){localStorage.setItem("filter",e.target.value),T("selected"),b(e.target.value)},choices:i?["All"].concat(Object(u.a)(i.map((function(e){return e.Type})))):["All"]}))),void 0!==c?c?U(S||c):r.a.createElement(N,{text:"Could not load questions"}):r.a.createElement(N,null))},H=a(20),Q=a.n(H),Y=function(e){var t=localStorage.getItem("disclaimer"),a=Object(n.useState)("false"!==t),c=Object(_.a)(a,2),l=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,l?function(e){return r.a.createElement("div",{className:Q.a.container},r.a.createElement("p",{className:Q.a.disclaimer},r.a.createElement("span",{className:Q.a.bold},"Disclaimer: "),"This website is for reference only. If you have any specific concerns, email Anthony at: ",r.a.createElement("a",{href:"mailto:george.a.giannoumis@oslomet.no"},"george.a.giannoumis@oslomet.no")),r.a.createElement("button",{className:Q.a.button,onClick:e},"X"))}((function(){localStorage.setItem("disclaimer","false"),s(!1)})):"")},K=a(29),M=a.n(K),V=function(){return r.a.createElement("div",null,r.a.createElement(i,null,r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("div",{className:M.a.centered},r.a.createElement("h1",{className:M.a.headline},"Frequently asked questions"),r.a.createElement("h2",{className:M.a.tagline},"Universal webdesing and development - OsloMet. Updated every week. ")))),r.a.createElement("main",null,r.a.createElement(X,null))),r.a.createElement(Y,null))};l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null)),document.querySelector("#root"))},29:function(e,t,a){e.exports={centered:"styled_centered__2kGDu",headline:"styled_headline__2DoDO",tagline:"styled_tagline__34X_v"}},46:function(e,t,a){e.exports={container:"styled_container__1FTV1",text:"styled_text__y2Oiw"}},47:function(e,t,a){e.exports={container:"styled_container__3DfJR"}},7:function(e,t,a){e.exports={container:"styled_container__2kOD8",form:"styled_form__bE6xl",search:"styled_search__3Gn8b",label:"styled_label__JR9eh",filterHeadline:"styled_filterHeadline__ASXfX",list:"styled_list__3iOcG"}},90:function(e,t,a){e.exports={container:"styled_container__2eIiP"}},98:function(e,t,a){e.exports=a(276)}},[[98,1,2]]]);
//# sourceMappingURL=main.f8feb26d.chunk.js.map