(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=(n(14),n(15),n(4)),s=n(5),d=n(6),b=n(9),u=n(8),j=n(0);var l=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[t&&Object(j.jsx)("h2",{children:t}),n]})};var h=function(e){var t=e.message;return Object(j.jsx)("p",{children:t})};var p=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(j.jsx)(j.Fragment,{children:a?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",a]}),Object(j.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]}):Object(j.jsx)(h,{message:"No feedback given"})})},O=n(7),v=n.n(O);var f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)("button",{className:v.a.option,type:"button","data-option":e,onClick:n,children:e},e)}))})},g=["good","neutral","bad"],x=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())||0},e.onLeaveFeedback=function(t){var n=t.target.dataset.option;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(f,{options:g,onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(l,{title:"Statistics",children:Object(j.jsx)(p,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),k=x;o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={option:"FeedbackOptions_option__3pyOL"}}},[[17,1,2]]]);
//# sourceMappingURL=main.93886dba.chunk.js.map