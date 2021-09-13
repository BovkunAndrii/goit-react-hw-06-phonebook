(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__1z8Xk",contact:"contactListItem_contact__2Fk1N",buttonDelete:"contactListItem_buttonDelete__2smZc"}},13:function(t,e,n){t.exports={container:"App_container__CAuKx",title:"App_title__2f9kC",subtitle:"App_subtitle__2teZn"}},16:function(t,e,n){t.exports={filterLabel:"filter_filterLabel__7L-HY",filterInput:"filter_filterInput__mLc0-"}},21:function(t,e,n){t.exports={contactList:"contactList_contactList__x6ANo"}},48:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),s=n(3),i=n(19),l=n(17),u=n(20),b=n.n(u),m=n(4),j={addContact:Object(m.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:b.a.generate(),name:e,number:n}}})),deleteContact:Object(m.b)("contacts/delete"),changeFilter:Object(m.b)("contacts/changeFilter")},d=function(t){return t.contacts.items},f=function(t){return t.contacts.filter},O=function(t){var e=d(t),n=f(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},p=n(6),_=n.n(p),h=n(1);function x(){var t=Object(s.c)(d),e=Object(s.b)(),n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),b=u[0],m=u[1],f=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a);break;default:return}};return Object(h.jsxs)("form",{onSubmit:function(n){var a;(n.preventDefault(),a=r,t.some((function(t){return t.name===a})))?alert("".concat(r," is already in contacts!")):(e(j.addContact({name:r,number:b})),o(""),m(""))},className:_.a.form,children:[Object(h.jsxs)("label",{className:_.a.formLabel,children:["Name",Object(h.jsx)("input",{className:_.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f})]}),Object(h.jsxs)("label",{className:_.a.formLabel,children:["Number",Object(h.jsx)("input",{className:_.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:b,onChange:f})]}),Object(h.jsx)("button",{type:"submit",className:_.a.buttonSubmit,children:"Add contact"})]})}var C,v=n(12),L=n.n(v),N=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeletContact;return Object(h.jsxs)("li",{className:L.a.contactListItem,children:[Object(h.jsxs)("p",{className:L.a.contact,children:[" ",e,": ",n]}),Object(h.jsx)("button",{className:L.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},g=n(21),k=n.n(g),I=function(){var t=Object(s.c)(O),e=Object(s.b)();return Object(h.jsx)("ul",{className:k.a.contactList,children:t.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(h.jsx)(N,{id:n,name:a,number:c,onDeletContact:function(){return function(t){return e(j.deleteContact(t))}(n)}},n)}))})},y=n(16),A=n.n(y),F=function(){var t=Object(s.c)(f),e=Object(s.b)();return Object(h.jsxs)("label",{className:A.a.filterLabel,children:["Find contacts by name",Object(h.jsx)("input",{className:A.a.filterInput,type:"text",name:"filter",value:t,onChange:function(t){return e(j.changeFilter(t.target.value))}})]})},w=n(13),S=n.n(w),D=function(){return Object(h.jsxs)("div",{className:S.a.container,children:[Object(h.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(h.jsx)(x,{}),Object(h.jsx)("h2",{className:S.a.subtitle,children:"Contacts"}),Object(h.jsx)(F,{}),Object(h.jsx)(I,{})]})},z=n(22),Z=n.n(z),B=n(5),J=n(23),M=n.n(J),q=n(7),Y=n(24),E=n(2),H=Object(m.c)([],(C={},Object(q.a)(C,j.addContact,(function(t,e){var n=e.payload;return[].concat(Object(Y.a)(t),[n])})),Object(q.a)(C,j.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),K=Object(m.c)("",Object(q.a)({},j.changeFilter,(function(t,e){return e.payload}))),P=Object(E.b)({items:H,filter:K}),Q={key:"contacts",storage:M.a,blacklist:["filter"]},T=Object(m.a)({reducer:{contacts:Object(B.g)(Q,P)},middleware:function(t){return t({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}}).concat(Z.a)},devTools:!1}),X={store:T,persistor:Object(B.h)(T)};n(47);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:X.store,children:Object(h.jsx)(i.a,{loading:null,persistor:X.persistor,children:Object(h.jsx)(D,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__3bS95",formLabel:"ContactForm_formLabel__1-ite",formInput:"ContactForm_formInput__QMC0Y",buttonSubmit:"ContactForm_buttonSubmit__22BOu"}}},[[48,1,2]]]);
//# sourceMappingURL=main.a65eef0c.chunk.js.map