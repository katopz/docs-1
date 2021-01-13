(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{674:function(e,t,o){"use strict";o.r(t);var a=o(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("p",[e._v("In this section, we will gear up your workhorse for developing, deploying and, enjoying smart\ncontracts on Cosmos SDK.")]),e._v(" "),o("h2",{attrs:{id:"go"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#go"}},[e._v("#")]),e._v(" Go")]),e._v(" "),o("p",[e._v("You can setup golang following "),o("a",{attrs:{href:"https://github.com/golang/go/wiki#working-with-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("official\ndocumentation"),o("OutboundLink")],1),e._v(". The latest versions of "),o("code",[e._v("wasmd")]),e._v("\nrequire go version "),o("code",[e._v("v1.15")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"rust"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rust"}},[e._v("#")]),e._v(" Rust")]),e._v(" "),o("p",[e._v("Assuming you have never worked with rust, you will first need to install some tooling. The standard\napproach is to use "),o("code",[e._v("rustup")]),e._v(" to maintain dependencies and handle updating multiple versions of\n"),o("code",[e._v("cargo")]),e._v(" and "),o("code",[e._v("rustc")]),e._v(", which you will be using.")]),e._v(" "),o("h3",{attrs:{id:"installing-rust-in-linux-and-mac"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-rust-in-linux-and-mac"}},[e._v("#")]),e._v(" Installing Rust in Linux and Mac")]),e._v(" "),o("p",[e._v("First, "),o("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("install rustup"),o("OutboundLink")],1),e._v(". Once installed, make sure you have the wasm32 target:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cnVzdHVwIGRlZmF1bHQgc3RhYmxlCmNhcmdvIHZlcnNpb24KIyBJZiB0aGlzIGlzIGxvd2VyIHRoYW4gMS40Ny4wKywgdXBkYXRlCnJ1c3R1cCB1cGRhdGUgc3RhYmxlCgpydXN0dXAgdGFyZ2V0IGxpc3QgLS1pbnN0YWxsZWQKcnVzdHVwIHRhcmdldCBhZGQgd2FzbTMyLXVua25vd24tdW5rbm93bgo="}}),e._v(" "),o("h3",{attrs:{id:"installing-rust-in-windows-10"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-rust-in-windows-10"}},[e._v("#")]),e._v(" Installing Rust in Windows 10")]),e._v(" "),o("p",[e._v("First, download and execute "),o("code",[e._v("rustup-init.exe")]),e._v(" from "),o("a",{attrs:{href:"https://rustup.rs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("rustup.rs"),o("OutboundLink")],1),e._v("\nor "),o("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("rust-lang.org"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v('If requested, manually download and install Visual C++ Build Tools 2019,\nfrom https://visualstudio.microsoft.com/visual-cpp-build-tools/ .\nMake sure "Windows 10 SDK" and "English language pack" are selected.')]),e._v(" "),o("p",[e._v("Continue running "),o("code",[e._v("rustup-init.exe")]),e._v(", and proceed with the installation.")]),e._v(" "),o("p",[e._v("Optionally:")]),e._v(" "),o("ul",[o("li",[e._v("Download and install "),o("a",{attrs:{href:"https://www.vim.org/download.php#pc",target:"_blank",rel:"noopener noreferrer"}},[e._v("gvim"),o("OutboundLink")],1),e._v(", and modify the Env vars to add <gvim folder>\nto the PATH.")]),e._v(" "),o("li",[e._v("Download and install "),o("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[e._v("git for windows"),o("OutboundLink")],1),e._v(". Modify the Env vars to add <git folder>\\bin\nto PATH.")]),e._v(" "),o("li",[e._v("Turn on Developer Mode (Settings -> Update and Security: For Developers) and enable Device Discovery, to be able to\naccess the Windows 10 server through ssh (https://www.ctrl.blog/entry/how-to-win10-ssh-service.html#section-mssshserv-enable).")])]),e._v(" "),o("p",[e._v("Install the wasm32 target:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cnVzdHVwIGRlZmF1bHQgc3RhYmxlCmNhcmdvIHZlcnNpb24KIyBJZiB0aGlzIGlzIGxvd2VyIHRoYW4gMS40Ny4wLCB1cGRhdGUKcnVzdHVwIHVwZGF0ZSBzdGFibGUKCnJ1c3R1cCB0YXJnZXQgbGlzdCAtLWluc3RhbGxlZApydXN0dXAgdGFyZ2V0IGFkZCB3YXNtMzItdW5rbm93bi11bmtub3duCg=="}}),e._v(" "),o("p",[e._v("For those new to rust, the "),o("code",[e._v("stable")]),e._v(" channel comes out every 6 weeks with a stable release (as of\n2020-08-03 it is 1.45.2 - we support 1.44.1+). The "),o("code",[e._v("nightly")]),e._v(" channel is the bleeding edge and not\nonly is it a version or two ahead (for testing), but it allows some extra unstable features, whose\nAPIs may change. For compiling "),o("code",[e._v("wasm")]),e._v(", you will want to use "),o("code",[e._v("stable")]),e._v(". We use "),o("code",[e._v("nightly")]),e._v(" to compile\nthe runtime for "),o("code",[e._v("wasmd")]),e._v(", which needs it for the singlepass compiler with gas metering and more.")]),e._v(" "),o("h2",{attrs:{id:"wasmd"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wasmd"}},[e._v("#")]),e._v(" wasmd")]),e._v(" "),o("p",[o("code",[e._v("wasmd")]),e._v(" is the backbone of CosmWasm platform. It is the implementation of a Cosmoszone with wasm\nsmart contracts enabled.")]),e._v(" "),o("p",[e._v("This code was forked from the "),o("code",[e._v("cosmos/gaia")]),e._v(" repository as a basis and then added x/wasm and cleaned\nup many gaia-specific files. However, the wasmd binary should function just like gaiad except for\nthe addition of the x/wasm module.")]),e._v(" "),o("p",[e._v("If you intend to develop or edit a contract, you need wasmd.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9Db3NtV2FzbS93YXNtZC5naXQKY2Qgd2FzbWQKIyByZXBsYWNlIHRoZSB2MC4xNC4wIHdpdGggdGhlIG1vc3Qgc3RhYmxlIHZlcnNpb24gb24gaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3dhc21kL3JlbGVhc2VzCmdpdCBjaGVja291dCB2MC4xNC4wCm1ha2UgaW5zdGFsbAoKIyB2ZXJpZnkgdGhlIGluc3RhbGxhdGlvbgp3YXNtZCB2ZXJzaW9uCg=="}}),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",[e._v("If you have any problems here, check your "),o("code",[e._v("PATH")]),e._v(". "),o("code",[e._v("make install")]),e._v(" will copy "),o("code",[e._v("wasmd")]),e._v(" to\n"),o("code",[e._v("$HOME/go/bin")]),e._v(" by default, please make sure that is set up in your "),o("code",[e._v("PATH")]),e._v(" as well, which should be\nthe case in general for building Go code from source.")])]),e._v(" "),o("h2",{attrs:{id:"using-testnets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-testnets"}},[e._v("#")]),e._v(" Using Testnets")]),e._v(" "),o("p",[e._v("Testing network "),o("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/musselnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Musselnet"),o("OutboundLink")],1),e._v(" is launched to\nsave you of the hassle of running a local network and speed up your development.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",[e._v("Use go 1.15 for compiling "),o("code",[e._v("wasmd")]),e._v(" executable")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"IyBjbG9uZSB3YXNtZCByZXBvCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vQ29zbVdhc20vd2FzbWQuZ2l0ICZhbXA7JmFtcDsgY2Qgd2FzbWQKCiMgd2FzbWQgcnVucyBvbiB3YXNtZCB2MC4xNC4wCmdpdCBjaGVja291dCB2MC4xNC4wCgojIGJ1aWxkIHdhc21kIGV4ZWN1dGFibGUKbWFrZSBpbnN0YWxsCg=="}}),e._v(" "),o("h2",{attrs:{id:"further-information-on-the-cosmos-sdk"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-information-on-the-cosmos-sdk"}},[e._v("#")]),e._v(" Further Information on the Cosmos SDK")]),e._v(" "),o("p",[e._v("These represent an instance of a blockchain that\nutilizes all of the stable features of the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),o("OutboundLink")],1),e._v(". As\nsuch, "),o("code",[e._v("wasmd")]),e._v(" have all the same features (plus WASM smart contracts obviously). If\nyou'd like to learn more about accessing those features take a look at the "),o("a",{attrs:{href:"https://github.com/cosmos/gaia/tree/main/docs/gaia-tutorials",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gaia\ndocs"),o("OutboundLink")],1),e._v(". If you'd like to learn more about\ngetting started with the Cosmos SDK in general, take a look at the series of\n"),o("a",{attrs:{href:"https://tutorials.cosmos.network/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tutorials"),o("OutboundLink")],1),e._v(" that show how to build custom modules for\napplication-specific blockchains.")]),e._v(" "),o("h2",{attrs:{id:"setting-up-your-ide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-ide"}},[e._v("#")]),e._v(" Setting up your IDE")]),e._v(" "),o("p",[e._v("We will need a good editor to guide us through the experience. We highly recommend plugins that help\nyou learn syntax, especially when just starting rust. There are two free editor environments we\nrecommend, choose the one that is more familiar to you.")]),e._v(" "),o("p",[e._v("If you use VSCode ("),o("a",{attrs:{href:"https://code.visualstudio.com/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download link"),o("OutboundLink")],1),e._v(") you just need to add the\nrust plugin. This is the best supported environment for RLS (Rust Language Server) and uses the rust\ncompiler to type-check all your code on save. This gives the same error messages as the actual\ncompiler would and highlights along the line of the code, but it can be a bit slow to respond\nsometime (as it runs the compiler). It is quite good, and if you are used to VSCode, I highly\nrecommend it:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust",target:"_blank",rel:"noopener noreferrer"}},[e._v("RLS for VSCode"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("The other option I can recommend it Intellij IDEA Community Edition ("),o("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download\nlink"),o("OutboundLink")],1),e._v("), along with the Rust Plugin. This has very nice and\nquick support for many language features directly inline. In particular, it shows the inferred types\nalong variables, which can be very helpful, especially when working with (nested) generics. It\ncatches most syntax errors very quickly, but not all of them. Which means sometimes you have to look\nat the compile failures to find the errors. If you are coming from another Intellij product (eg.\nGoland), I recommend this approach:")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://intellij-rust.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RUST for Intellij"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("There are many more editors out there and some have varying degrees of rust support, at least syntax\nhighlighting, but I would recommend trying one of the two above, especially if you are new to rust.\nOnce you are confident in the language, you can always use another editor and customize it to your\nliking.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);