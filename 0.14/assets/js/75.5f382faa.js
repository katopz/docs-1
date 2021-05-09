(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{674:function(t,e,o){"use strict";o.r(e);var n=o(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"downloading-and-compiling-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#downloading-and-compiling-contract"}},[t._v("#")]),t._v(" Downloading and Compiling Contract")]),t._v(" "),o("p",[t._v("In this section, we will download a sample contract, compile to it to wasm binary executable.")]),t._v(" "),o("p",[t._v("Please first review the "),o("RouterLink",{attrs:{to:"/getting-started/setting-env.html"}},[t._v("client setup instructions")]),t._v(", and configure and verify a\nclient, either Go CLI or Node.js console.")],1),t._v(" "),o("h2",{attrs:{id:"compiling-and-testing-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling-and-testing-contract"}},[t._v("#")]),t._v(" Compiling and Testing Contract")]),t._v(" "),o("p",[t._v("Let's download the repo in which we collect\n"),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("cosmwasm-examples")]),o("OutboundLink")],1),t._v(" and try out an existing simple\nescrow contract that can hold some native tokens and gives the power to an arbiter to release them\nto a pre-defined beneficiary. First, clone the repo and try to build the wasm bundle:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBnZXQgdGhlIGNvZGUKZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9Db3NtV2FzbS9jb3Ntd2FzbS1leGFtcGxlcwpnaXQgZmV0Y2ggLS10YWdzCmdpdCBjaGVja291dCBlc2Nyb3ctMC43LjAKY2QgY29zbXdhc20tZXhhbXBsZXMvZXNjcm93CgojIGNvbXBpbGUgdGhlIHdhc20gY29udHJhY3Qgd2l0aCBzdGFibGUgdG9vbGNoYWluCnJ1c3R1cCBkZWZhdWx0IHN0YWJsZQpjYXJnbyB3YXNtCg=="}}),t._v(" "),o("p",[t._v("After this compiles, it should produce a file in\n"),o("code",[t._v("target/wasm32-unknown-unknown/release/cw_escrow.wasm")]),t._v(". A quick "),o("code",[t._v("ls -l")]),t._v(" should show around 2MB. This\nis a release build, but not stripped of all unneeded code. To produce a much smaller version, you\ncan run this which tells the compiler to strip all unused code out:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"UlVTVEZMQUdTPSctQyBsaW5rLWFyZz0tcycgY2FyZ28gd2FzbQo="}}),t._v(" "),o("p",[t._v("This produces a file about 174kB. We use this and another optimizer to produce the final product\nuploaded to the blockchain. You don't need to worry about running this yourself (unless you are\ncurious), but you should have an idea of the final size of your contract this way.")]),t._v(" "),o("h2",{attrs:{id:"compiling-contract-for-production-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling-contract-for-production-environment"}},[t._v("#")]),t._v(" Compiling Contract for Production Environment")]),t._v(" "),o("p",[t._v("For production deployment, please use\n"),o("a",{attrs:{href:"https://github.com/CosmWasm/rust-optimizer",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosmwasm/rust-optimizer"),o("OutboundLink")],1),t._v(". "),o("strong",[t._v("rust-optimizer")]),t._v(" produces\nreproducible builds of cosmwasm smart contracts. It also does heavy optimization on the build size,\nusing binary stripping and wasm-opt.")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"ZG9ja2VyIHJ1biAtLXJtIC12ICZxdW90OyQocHdkKSZxdW90OzovY29kZSBcCiAgLS1tb3VudCB0eXBlPXZvbHVtZSxzb3VyY2U9JnF1b3Q7JChiYXNlbmFtZSAmcXVvdDskKHB3ZCkmcXVvdDspX2NhY2hlJnF1b3Q7LHRhcmdldD0vY29kZS90YXJnZXQgXAogIC0tbW91bnQgdHlwZT12b2x1bWUsc291cmNlPXJlZ2lzdHJ5X2NhY2hlLHRhcmdldD0vdXNyL2xvY2FsL2NhcmdvL3JlZ2lzdHJ5IFwKICBjb3Ntd2FzbS9ydXN0LW9wdGltaXplcjowLjEwLjcK"}}),t._v(" "),o("h2",{attrs:{id:"unit-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[t._v("#")]),t._v(" Unit Tests")]),t._v(" "),o("p",[t._v("Let's try running the unit tests:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"UlVTVF9CQUNLVFJBQ0U9MSBjYXJnbyB1bml0LXRlc3QK"}}),t._v(" "),o("p",[t._v("After some compilation steps, you should see:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"cnVubmluZyA1IHRlc3RzCnRlc3QgY29udHJhY3Q6OnRlc3RzOjpjYW5ub3RfaW5pdGlhbGl6ZV9leHBpcmVkIC4uLiBvawp0ZXN0IGNvbnRyYWN0Ojp0ZXN0czo6cHJvcGVyX2luaXRpYWxpemF0aW9uIC4uLiBvawp0ZXN0IGNvbnRyYWN0Ojp0ZXN0czo6aW5pdF9hbmRfcXVlcnkgLi4uIG9rCnRlc3QgY29udHJhY3Q6OnRlc3RzOjpoYW5kbGVfcmVmdW5kIC4uLiBvawp0ZXN0IGNvbnRyYWN0Ojp0ZXN0czo6aGFuZGxlX2FwcHJvdmUgLi4uIG9rCgp0ZXN0IHJlc3VsdDogb2suIDUgcGFzc2VkOyAwIGZhaWxlZDsgMCBpZ25vcmVkOyAwIG1lYXN1cmVkOyAwIGZpbHRlcmVkIG91dAo="}}),t._v(" "),o("p",[o("code",[t._v("RUST_BACKTRACE=1")]),t._v(" will provide you with full stack traces on any error, which is super useful. This\nonly works for unit tests (which test native rust code, not the compiled wasm). Also, if you want to\nknow where "),o("code",[t._v("cargo wasm")]),t._v(" and "),o("code",[t._v("cargo unit-test")]),t._v(" come from, they are just aliases defined in\n"),o("code",[t._v(".cargo/config")]),t._v(". Take a look there to understand the cargo flags more.")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);