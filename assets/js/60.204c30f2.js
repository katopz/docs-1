(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{635:function(e,t,o){"use strict";o.r(t);var r=o(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"rust-basics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rust-basics"}},[e._v("#")]),e._v(" Rust Basics")]),e._v(" "),o("h2",{attrs:{id:"installing-rust"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-rust"}},[e._v("#")]),e._v(" Installing Rust")]),e._v(" "),o("p",[e._v("Assuming you have never worked with rust, you will first need to install some tooling. The standard approach is to use "),o("code",[e._v("rustup")]),e._v(" to maintain dependencies and handle updating multiple version of "),o("code",[e._v("cargo")]),e._v(" and "),o("code",[e._v("rustc")]),e._v(", which you will be using.")]),e._v(" "),o("p",[e._v("First "),o("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install rustup"),o("OutboundLink")],1),e._v(". Once installed, make sure you have the wasm32 target:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cnVzdHVwIGRlZmF1bHQgc3RhYmxlCmNhcmdvIHZlcnNpb24KIyBJZiB0aGlzIGlzIGxvd2VyIHRoYW4gMS40MSwgdXBkYXRlCnJ1c3R1cCB1cGRhdGUgc3RhYmxlCgpydXN0dXAgdGFyZ2V0IGxpc3QgLS1pbnN0YWxsZWQKcnVzdHVwIHRhcmdldCBhZGQgd2FzbTMyLXVua25vd24tdW5rbm93bgo="}}),e._v(" "),o("p",[e._v("For those new to rust, the "),o("code",[e._v("stable")]),e._v(" channel comes out every 6 weeks with a stable release (as of 7. May 2020 it is 1.43.1 - we support 1.41+). The "),o("code",[e._v("nightly")]),e._v(" channel is the bleeding edge and not only is it a version or two ahead (for testing), but it allows some extra unstable features, whose APIs may change. For compiling "),o("code",[e._v("wasm")]),e._v(", you will want to use "),o("code",[e._v("stable")]),e._v(". We use\n"),o("code",[e._v("nightly")]),e._v(" to compile the runtime for "),o("code",[e._v("wasmd")]),e._v(", which needs it for the singlepass compiler with gas metering and more.")]),e._v(" "),o("h2",{attrs:{id:"compiling-and-testing-an-existing-contract"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#compiling-and-testing-an-existing-contract"}},[e._v("#")]),e._v(" Compiling and Testing an Existing Contract")]),e._v(" "),o("p",[e._v("To make sure all the tooling is working properly, let's start with the "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cosmwasm-examples")]),o("OutboundLink")],1),e._v(" repo and try out an existing simple escrow contract. First clone the repo and try to build the wasm bundle:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBnZXQgdGhlIGNvZGUKZ2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9Db3NtV2FzbS9jb3Ntd2FzbS1leGFtcGxlcwpjZCBjb3Ntd2FzbS1leGFtcGxlcy9lc2Nyb3cKZ2l0IGNoZWNrb3V0IGVzY3Jvdy0wLjUuMgoKIyBjb21waWxlIHRoZSB3YXNtIGNvbnRyYWN0IHdpdGggc3RhYmxlIHRvb2xjaGFpbgpydXN0dXAgZGVmYXVsdCBzdGFibGUKY2FyZ28gd2FzbQo="}}),e._v(" "),o("p",[e._v("After this compiles, it should produce a file in "),o("code",[e._v("target/wasm32-unknown-unknown/release/cw_escrow.wasm")]),e._v(". A quick "),o("code",[e._v("ls -l")]),e._v(" should show around 2MB. This is a release build, but not stripped of all unneeded code. To produce a much smaller\nversion, you can run this which tells the compiler to strip all unused code out:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"UlVTVEZMQUdTPSctQyBsaW5rLWFyZz0tcycgY2FyZ28gd2FzbQo="}}),e._v(" "),o("p",[e._v("This produces a file about 174kB. We use this and another optimizer to produce the final product uploaded to the blockchain.\nYou don't need to worry about running this yourself (unless you are curious), but you should have an idea of the final\nsize of your contract this way.")]),e._v(" "),o("h3",{attrs:{id:"unit-tests"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit Tests")]),e._v(" "),o("p",[e._v("Let's try running the unit tests:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"UlVTVF9CQUNLVFJBQ0U9MSBjYXJnbyB1bml0LXRlc3QK"}}),e._v(" "),o("p",[e._v("After some compilation steps, you should see:")]),e._v(" "),o("code-block",{staticClass:"codeblock",attrs:{language:"text",base64:"cnVubmluZyA1IHRlc3RzCnRlc3QgY29udHJhY3Q6OnRlc3RzOjpjYW5ub3RfaW5pdGlhbGl6ZV9leHBpcmVkIC4uLiBvawp0ZXN0IGNvbnRyYWN0Ojp0ZXN0czo6cHJvcGVyX2luaXRpYWxpemF0aW9uIC4uLiBvawp0ZXN0IGNvbnRyYWN0Ojp0ZXN0czo6aW5pdF9hbmRfcXVlcnkgLi4uIG9rCnRlc3QgY29udHJhY3Q6OnRlc3RzOjpoYW5kbGVfcmVmdW5kIC4uLiBvawp0ZXN0IGNvbnRyYWN0Ojp0ZXN0czo6aGFuZGxlX2FwcHJvdmUgLi4uIG9rCgp0ZXN0IHJlc3VsdDogb2suIDUgcGFzc2VkOyAwIGZhaWxlZDsgMCBpZ25vcmVkOyAwIG1lYXN1cmVkOyAwIGZpbHRlcmVkIG91dAo="}}),e._v(" "),o("p",[o("code",[e._v("RUST_BACKTRACE=1")]),e._v(" will provide you with full stack traces on any error, which is super useful. This only works for unit tests (which test native rust code, not the compiled wasm). Also, if you want to know where "),o("code",[e._v("cargo wasm")]),e._v(" and "),o("code",[e._v("cargo unit-test")]),e._v(" come from, they are just aliases defined in "),o("code",[e._v(".cargo/config")]),e._v(". Take a look there to understand the cargo flags more.")]),e._v(" "),o("h2",{attrs:{id:"setting-up-your-ide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-ide"}},[e._v("#")]),e._v(" Setting up your IDE")]),e._v(" "),o("p",[e._v("Now that you can compile and test the code, it is time to edit it. But before that, we will need a good editor to make those changes. I highly recommend plugins that help you learn syntax, especially when just starting rust. There are two free editor environments I can recommend, choose the one that is more familiar to you.")]),e._v(" "),o("p",[e._v("If you use VSCode ("),o("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download link"),o("OutboundLink")],1),e._v(") you just need to add the rust plugin. This is the best supported environment for RLS (Rust Language Server) and uses the rust compiler to type-check all your code on save. This gives the same error messages as the actual compiler would and highlights along the line of the code, but it can be a bit slow to respond sometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I highly recommend it:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust",target:"_blank",rel:"noopener noreferrer"}},[e._v("RLS for VSCode"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The other option I can recommend it Intellij IDEA Community Edition ("),o("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download link"),o("OutboundLink")],1),e._v("), along with the Rust Plugin. This has very nice and quick support for many language features directly inline. In particular, it shows the inferred types along variables, which can be very helpful, especially when working with (nested) generics. It catches most syntax errors very quickly, but not all of them. Which means sometimes you have to look at the compile failures to find the errors. If you are coming from another Intellij product (eg. Goland), I recommend this approach:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://intellij-rust.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RUST for Intellij"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("There are many more editors out there and some have varying degrees of rust support, at least syntax highlighting, but I would recommend trying one of the two above, especially if you are new to rust. Once you are confident in the language, you can always use another editor and customize it to your liking.")]),e._v(" "),o("h3",{attrs:{id:"setting-root-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-root-directory"}},[e._v("#")]),e._v(" Setting Root Directory")]),e._v(" "),o("p",[e._v("Both of the above extensions look for a Cargo.toml file in the root directory of your workspace, and only parse rust code referenced by this Cargo.toml file (listed as a workspace, or imported by "),o("code",[e._v("src/lib.rs")]),e._v("). The "),o("a",{attrs:{href:"https://github.com/CosmWasm/cosmwasm-examples",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cosmwasm-examples")]),o("OutboundLink")],1),e._v(" repo does not have a "),o("code",[e._v("Cargo.toml")]),e._v(" file, but rather one in each example sub-directory. To ensure proper IDE support when working on this example, you should open only the "),o("code",[e._v("escrow")]),e._v(" directory. And in general, have one window open for one rust projects, rooted in the same directory as it's "),o("code",[e._v("Cargo.toml")]),e._v(" file.")]),e._v(" "),o("h2",{attrs:{id:"learn-more-rust"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#learn-more-rust"}},[e._v("#")]),e._v(" Learn More Rust")]),e._v(" "),o("p",[e._v("There are a number of standard references that most rust developers use. It is good to get acquainted with them, to get detailed explanations on language topics and the library APIs:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://doc.rust-lang.org/book/",target:"_blank",rel:"noopener noreferrer"}},[e._v('"The Book"'),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://doc.rust-lang.org/cargo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cargo Documentation"),o("OutboundLink")],1),e._v(" - make "),o("code",[e._v("cargo")]),e._v(" your friend")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://doc.rust-lang.org/std/vec/struct.Vec.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Standard Library Documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust Docs"),o("OutboundLink")],1),e._v(" - api docs for all external packages")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://crates.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crates.io"),o("OutboundLink")],1),e._v(" - package registry, look for libraries you want to import")])]),e._v(" "),o("p",[e._v("If you want a directed training, you can start one of these paths:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://doc.rust-lang.org/stable/rust-by-example/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust by Example"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/rust-lang/rustlings/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rustlings - small exercises"),o("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);