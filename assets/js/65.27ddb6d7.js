(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{650:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spec-proxy-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spec-proxy-contracts"}},[t._v("#")]),t._v(" Spec: Proxy Contracts")]),t._v(" "),a("p",[t._v("CW1 is a specification for proxy contracts based on CosmWasm.\nIt is a very simple, but flexible interface designed for the case\nwhere one contract is meant to hold assets (or rights) on behalf of\nother contracts.")]),t._v(" "),a("p",[t._v("The simplest example is a contract that will accept messages from\nthe creator and resend them from it's address. Simply by making this\ntransferable, you can then begin to transfer non-transferable assets\n(eg. staked tokens, voting power, etc).")]),t._v(" "),a("p",[t._v('You can imagine more complex examples, such as a "1 of N" multisig,\nor conditional approval, where "sub-accounts" have the right to spend\na limited amount of funds from this account, with a "admin account"\nretaining full control.')]),t._v(" "),a("p",[t._v("The common denominator is that they allow you to immediately\nexecute arbitrary "),a("code",[t._v("CosmosMsg")]),t._v(" in the same transaction.")])])}),[],!1,null,null,null);e.default=o.exports}}]);