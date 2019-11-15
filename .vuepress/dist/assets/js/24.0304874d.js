(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{172:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"vuetable-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuetable-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Vuetable Data")]),e._v(" "),a("h2",{attrs:{id:"eventprefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eventprefix","aria-hidden":"true"}},[e._v("#")]),e._v(" eventPrefix")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("String")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("vuetable:")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("The event prefix that Vuetable is going to use when emitting the event.")])])]),e._v(" "),a("h2",{attrs:{id:"tablefields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablefields","aria-hidden":"true"}},[e._v("#")]),e._v(" tableFields")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("Array")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("[]")]),e._v(" "),a("em",[e._v("(empty array)")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("The normalized version of fields definition. This is done during the "),a("code",[e._v("created")]),e._v(" hook.")])])]),e._v(" "),a("h2",{attrs:{id:"tabledata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabledata","aria-hidden":"true"}},[e._v("#")]),e._v(" tableData")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("Array")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("null")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("api-mode")]),e._v(", this stores the data that returned from the server after the sucessful AJAX request. Otherwise,\nit stores the data assigned to via "),a("code",[e._v("data")]),e._v(" prop or "),a("code",[e._v("setData")]),e._v(" method. Vuetable always use "),a("code",[e._v("tableData")]),e._v(" for table\nrendering.")])])]),e._v(" "),a("h2",{attrs:{id:"tablepagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tablepagination","aria-hidden":"true"}},[e._v("#")]),e._v(" tablePagination")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("Object")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("null")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("If the data returned from the server contains pagination information specified in the "),a("code",[e._v("pagination-path")]),e._v(", this is where it gets stored.")])])]),e._v(" "),a("h2",{attrs:{id:"currentpage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currentpage","aria-hidden":"true"}},[e._v("#")]),e._v(" currentPage")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("Number")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("1")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("Vuetable use this to keep track of the current page being diplayed.")])])]),e._v(" "),a("h2",{attrs:{id:"selectedto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selectedto","aria-hidden":"true"}},[e._v("#")]),e._v(" selectedTo")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("Array")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("[]")]),e._v(" "),a("em",[e._v("(empty array)")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("__checkbox")]),e._v(" field option is used and the user selected/unselected any checkbox, its row indentifier is either stored in or remove from here. The row identifier can be specified using "),a("code",[e._v("track-by")]),e._v(" option.")])])]),e._v(" "),a("h2",{attrs:{id:"visibledetailrows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visibledetailrows","aria-hidden":"true"}},[e._v("#")]),e._v(" visibleDetailRows")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("type:")]),e._v(" "),a("code",[e._v("Array")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("default:")]),e._v(" "),a("code",[e._v("[]")]),e._v(" "),a("em",[e._v("(empty array)")])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("usage:")])]),e._v(" "),a("p",[e._v("This stores the row identifier of any row where its detail row is visible.")])])])])}],!1,null,null,null);i.options.__file="data.md";t.default=i.exports}}]);