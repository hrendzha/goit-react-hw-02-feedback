(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),i=(n(14),n(15),n(4)),s=n(5),b=n(6),d=n(9),u=n(8),l=n(0);var j=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[t&&Object(l.jsx)("h2",{children:t}),n]})};var h=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})};var O=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsx)(l.Fragment,{children:a?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]}):Object(l.jsx)(h,{message:"No feedback given"})})},v=n(7),f=n.n(v);var p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)("button",{className:f.a.label,type:"button",onClick:function(){return n(e)},children:e},e)}))})},g=["good","neutral","bad"],x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())||0},e.onLeaveFeedback=function(t){return e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(p,{options:g,onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsx)(j,{title:"Statistics",children:Object(l.jsx)(O,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.Component),k=x;o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={label:"FeedbackOptions_label__1qGXW"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d0b1b714.chunk.js.map