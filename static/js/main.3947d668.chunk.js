(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),o=n.n(r),s=(n(14),n(15),n(4)),i=n(5),b=n(6),u=n(9),d=n(8),l=n(0);var j=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[t&&Object(l.jsx)("h2",{children:t}),n]})};var h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("p",{children:["Good: ",t]}),Object(l.jsxs)("p",{children:["Neutral: ",n]}),Object(l.jsxs)("p",{children:["Bad: ",c]}),Object(l.jsxs)("p",{children:["Total: ",a]}),Object(l.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})},O=n(7),v=n.n(O);var f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:t.map((function(e){return Object(l.jsx)("button",{className:v.a.label,type:"button",onClick:function(){return n(e)},children:e},e)}))})};var p=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})},k=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())||0},e.onLeaveFeedback=function(t){return e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{title:"Please leave feedback",children:Object(l.jsx)(f,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(l.jsx)(j,{title:"Statistics",children:this.countTotalFeedback()?Object(l.jsx)(h,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(l.jsx)(p,{message:"No feedback given"})})]})}}]),n}(c.Component),x=k;o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={label:"FeedbackOptions_label__1qGXW"}}},[[17,1,2]]]);
//# sourceMappingURL=main.3947d668.chunk.js.map