(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(151),l=o(147),s=o(179),i=o(163),c=o(180),m=o(148),u=o(161),d=o(149),p=o(155),g=o(300),f=o.n(g),y=Object(l.d)({sectionTitle:{id:"parts.SupportCta.sectionTitle",defaultMessage:"Questions? Problems? Existential dilemmas? We can help!"}}),h=function(){return a.a.createElement("div",{className:f.a.main},a.a.createElement("div",{className:f.a.contentWrapper},a.a.createElement(m.a,{appearance:{size:"large",theme:"primary",weight:"medium"},text:y.sectionTitle}),a.a.createElement("div",{className:f.a.iconRow},a.a.createElement(d.a,{className:f.a.iconItemLink,href:p.b},a.a.createElement(u.a,{name:"social_discourse_devPortal",title:"Discourse"})),a.a.createElement(d.a,{className:f.a.iconItemLink,href:p.d},a.a.createElement(u.a,{name:"social_github_devPortal",title:"GitHub"})),a.a.createElement(d.a,{className:f.a.iconItemLink,href:p.f},a.a.createElement(u.a,{name:"social_gitter_devPortal",title:"Gitter"})))))};h.displayName="parts.SupportCta";var v=h,E=(o(150),o(169),o(301)),w=o(154),k=o(164),T=o(302),b=o.n(T),x=Object(l.d)({docsLinkText:{id:"pages.Developers.CoreProductsItem.docsLinkText",defaultMessage:"Docs"}}),D=function(e){var t=e.project,o=t.description,r=t.entryPoint,n=t.logoSmall,l=t.name,s=t.repoUrl;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(d.a,{href:r},a.a.createElement("div",{className:b.a.imageContainer},a.a.createElement(k.a,{alt:l,className:b.a.image,project:l,src:n}))),a.a.createElement(m.a,{appearance:{theme:"invert",size:"medium",weight:"medium"},text:l}),a.a.createElement("p",{className:b.a.descriptionText},o)),a.a.createElement("p",null,a.a.createElement(d.a,{className:b.a.itemLink,href:r,text:x.docsLinkText}),a.a.createElement(d.a,{arrow:"right",className:b.a.itemLink,href:s,text:"GitHub"})))};D.displayName="pages.Developers.CoreProductsItem";var j=D,S=o(303),N=o.n(S),C=Object(l.d)({sectionTitle:{id:"pages.Developers.CoreProducts.sectionTitle",defaultMessage:"Colony Core"},sectionText:{id:"pages.Developers.CoreProducts.sectionText",defaultMessage:"Engage with Colony to manage work, shared funds, and reputation. Integrate directly with the smart contracts, use colonyJS to build Colony into your dapp, or fire up the colonyStarter for boilerplates and implementation examples."}}),O=function(e){var t=e.intl.locale,o=E.data.coreProjects.edges.map(function(e){return Object(w.e)(e,t)}).sort(function(e,t){var o=e.name,r=t.name,a=o.toLowerCase(),n=r.toLowerCase();return a===n?0:a<n?-1:1});return a.a.createElement("div",{className:N.a.main},a.a.createElement("div",{className:N.a.gradientWrapper},a.a.createElement("div",{className:N.a.sectionIntroContent},a.a.createElement(m.a,{appearance:{size:"large",theme:"invert",weight:"medium"},text:C.sectionTitle}),a.a.createElement("p",null,a.a.createElement(l.a,C.sectionText))),a.a.createElement("div",{className:N.a.coreProductsRow},o.map(function(e){return a.a.createElement("div",{className:N.a.coreProductsItem,key:e.name},a.a.createElement(j,{project:e}))}))))};O.displayName="pages.Developers.CoreProducts";var I=Object(l.e)(O),P=o(158),F=o(304),L=o.n(F),M=function(e){var t=e.contentText,o=e.headingText,r=e.linkText,n=e.linkUrl;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(m.a,{appearance:{margin:"none",size:"medium",theme:"invert",weight:"medium"},text:o})),a.a.createElement("div",{className:L.a.heroFeatureTextContainer},a.a.createElement("p",{className:L.a.heroFeatureText},a.a.createElement(l.a,t)))),a.a.createElement("div",null,a.a.createElement(d.a,{arrow:"right",className:L.a.heroFeatureLink,href:n,text:r})))};M.displayName="pages.Developers.HeroFeatureItem";var _=M,W=o(305),G=o.n(W),A=Object(l.d)({heroTitle:{id:"pages.Developers.heroTitle",defaultMessage:"Build with Colony"},heroFeatureGetStartedTitle:{id:"pages.Developers.heroFeatureGetStartedTitle",defaultMessage:"Get Started"},heroFeatureGetStartedText:{id:"pages.Developers.heroFeatureGetStartedText",defaultMessage:"Build incentives and reputation into your app, firm, or community."},heroFeatureGetStartedLinkText:{id:"pages.Developers.heroFeatureGetStartedLinkText",defaultMessage:"Build"},heroFeatureContributeTitle:{id:"pages.Developers.heroFeatureContributeTitle",defaultMessage:"Contribute"},heroFeatureContributeText:{id:"pages.Developers.heroFeatureContributeText",defaultMessage:"We believe in being open. All of our projects are open-source and accepting contributions."},heroFeatureForumTitle:{id:"pages.Developers.heroFeatureForumTitle",defaultMessage:"Discuss"},heroFeatureForumText:{id:"pages.Developers.heroFeatureForumText",defaultMessage:"Join in the discussion and collaborate with our community of builders."}}),J=function(){return a.a.createElement("div",{className:G.a.main},a.a.createElement("div",{className:G.a.heroBackgroundImage},a.a.createElement(k.a,{alt:A.heroTitle,src:Object(P.b)("img/devPortal_banner_bg.svg")})),a.a.createElement("div",{className:G.a.contentContainer},a.a.createElement("div",{className:G.a.heroTitle},a.a.createElement(m.a,{appearance:{size:"huge",theme:"invert",weight:"medium"},text:A.heroTitle})),a.a.createElement("div",{className:G.a.heroFeature},a.a.createElement("div",{className:G.a.heroFeatureItem},a.a.createElement(_,{contentText:A.heroFeatureGetStartedText,headingText:A.heroFeatureGetStartedTitle,linkText:A.heroFeatureGetStartedLinkText,linkUrl:p.j})),a.a.createElement("div",{className:G.a.heroFeatureItem},a.a.createElement(_,{contentText:A.heroFeatureContributeText,headingText:A.heroFeatureContributeTitle,linkText:"GitHub",linkUrl:p.d})),a.a.createElement("div",{className:G.a.heroFeatureItem},a.a.createElement(_,{contentText:A.heroFeatureForumText,headingText:A.heroFeatureForumTitle,linkText:"Discourse",linkUrl:p.b})))))};J.displayName="pages.Developers.Hero";var R=J,U=o(306),B=o(307),z=o.n(B),H=Object(l.d)({docsLinkText:{id:"pages.Developers.OpenSourceItem.docsLinkText",defaultMessage:"Docs"}}),V=function(e){var t=e.project,o=t.description,r=t.entryPoint,n=t.logoSmall,l=t.name,s=t.repoUrl;return a.a.createElement("div",{className:z.a.main},a.a.createElement(d.a,{href:r},a.a.createElement("div",{className:z.a.imageContainer},a.a.createElement(k.a,{alt:l,className:z.a.image,project:l,src:n}))),a.a.createElement("div",{className:z.a.contentContainer},a.a.createElement("div",null,a.a.createElement(m.a,{appearance:{margin:"none",size:"medium",theme:"invert",weight:"medium"},text:l}),a.a.createElement("div",{className:z.a.description},a.a.createElement("p",null,o))),a.a.createElement("div",{className:z.a.linkContainer},a.a.createElement("p",null,a.a.createElement(d.a,{className:z.a.itemLink,href:r,text:H.docsLinkText}),a.a.createElement(d.a,{arrow:"right",className:z.a.itemLink,href:s,text:"GitHub"})))))};V.displayName="pages.Developers.OpenSourceItem";var q=V,Q=o(308),Y=o.n(Q),K=Object(l.d)({sectionIntroTitle:{id:"pages.Developers.OpenSource.sectionIntroTitle",defaultMessage:"Open Source Tools"},sectionIntroText:{id:"pages.Developers.OpenSource.sectionIntroText",defaultMessage:"Standalone tools for Ethereum developers."}}),X=["budgetBox","tailor","pinion","trufflepig","purser","solcover"],Z=function(e){var t=e.intl.locale,o=U.data.openSourceProjects.edges.map(function(e){return Object(w.e)(e,t)}).sort(function(e,t){var o=e.name,r=t.name;return X.indexOf(o)-X.indexOf(r)});return a.a.createElement("div",{className:Y.a.main},a.a.createElement("div",{className:Y.a.introSection},a.a.createElement(m.a,{appearance:{margin:"double",size:"large",theme:"invert",weight:"medium"},text:K.sectionIntroTitle}),a.a.createElement("p",null,a.a.createElement(l.a,K.sectionIntroText))),a.a.createElement("div",{className:Y.a.openSourceProductGrid},o.map(function(e){return a.a.createElement("div",{className:Y.a.openSourceItem,key:e.name},a.a.createElement(q,{project:e}))})))};Z.displayName="pages.Developers.OpenSource";var $=Object(l.e)(Z),ee=o(309),te=o.n(ee),oe=Object(l.d)({pageDescription:{id:"pages.Developers.pageDescription",defaultMessage:"Just like the organizations that will run on Colony,\neach component in the colony stack is the product of collaboration and open\nengagement. Here, you'll find the up-to-date documentation for all of the\nColony projects."},pageTitle:{id:"pages.Developers.pageTitle",defaultMessage:"Developer Portal"}}),re=function(e){var t=(0,e.intl.formatMessage)(oe.pageTitle);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{description:oe.pageDescription,title:t}),a.a.createElement(i.Helmet,null,a.a.createElement("title",null,t)),a.a.createElement("main",{className:te.a.main},a.a.createElement(R,null),a.a.createElement(I,null),a.a.createElement($,null),a.a.createElement(v,{withBackground:!0})))};re.displayName="pages.Developers";var ae=re,ne=Object(n.a)(l.e),le=Object(n.d)(s.a,ne(ae));t.default=function(){return Object(r.createElement)(le)}},165:function(e,t,o){"use strict";var r=o(11),a=o(14),n=o(80),l="".startsWith;r(r.P+r.F*o(81)("startsWith"),"String",{startsWith:function(e){var t=n(this,e,"startsWith"),o=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return l?l.call(t,r,o):t.slice(o,o+r.length)===r}})},180:function(e,t,o){"use strict";o(165);var r=o(147),a=o(151),n=o(167),l=o(168),s=o(0),i=o.n(s),c=o(163),m=o.n(c),u=o(158),d=Object(r.d)({siteName:{id:"parts.SEO.siteName",defaultMessage:"Colony Open Source Docs"}}),p=function(e){var t=e.baseUrl,o=e.description,r=e.descriptionValues,a=e.getAbsoluteImagePath,n=e.intl.formatMessage,l=e.isDocPage,s=e.location,c=e.siteLogo,p=e.title,g=e.titleValues,f=e.images,y=void 0===f?[c]:f,h=s&&""+t+Object(u.b)(s.pathname),v=y.map(a);v.indexOf(c)<0&&v.push(c);var E=s&&"/"===s.pathname?"website":"article",w=n(d.siteName),k="string"==typeof p?p:n(p,g),T="string"==typeof o?o:n(o,r),b=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:w}];return l&&b.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":h,name:k,image:v[0]}}]},{"@context":"http://schema.org","@type":"BlogPosting",author:"Colony",url:h,name:k,headline:k,image:{"@type":"ImageObject",url:v[0]},description:T}),i.a.createElement(m.a,null,i.a.createElement("meta",{name:"description",content:T}),v.map(function(e){return i.a.createElement("meta",{name:"image",content:e,key:e})}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(b)),i.a.createElement("meta",{itemProp:"name",content:k}),i.a.createElement("meta",{itemProp:"description",content:T}),v.map(function(e){return i.a.createElement("meta",{itemProp:"image",content:e,key:e})}),i.a.createElement("meta",{property:"og:url",content:h}),i.a.createElement("meta",{property:"og:type",content:E}),i.a.createElement("meta",{property:"og:title",content:k}),i.a.createElement("meta",{property:"og:description",content:T}),i.a.createElement("meta",{property:"og:site_name",content:w}),v.map(function(e){return i.a.createElement("meta",{property:"og:image",content:e,key:e})}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:site",content:"@joincolony"}),i.a.createElement("meta",{name:"twitter:title",content:k}),i.a.createElement("meta",{name:"twitter:description",content:T}),v.map(function(e){return i.a.createElement("meta",{name:"twitter:image",content:e,key:e})}))};p.displayName="parts.SEO";var g=p,f=Object(a.a)(r.e,function(e){return Object(a.c)(n.a.Consumer,function(e){return{files:e}})(e)},Object(l.a)(),Object(a.b)({isDocPage:!1}),Object(a.f)(function(){return{baseUrl:"https://docs.colony.io"}}),Object(a.e)({getAbsoluteImagePath:function(e){var t=e.baseUrl,o=e.files,r=e.project;return function(e){return e.startsWith("http")?e:""+t+(o&&o[r+"/"+e]?o[r+"/"+e]:e)}}}),Object(a.f)(function(e){return{siteLogo:(0,e.getAbsoluteImagePath)("/img/colonyDocs_combomark.svg")}}))(g);o.d(t,"a",function(){return f})},301:function(e){e.exports={data:{coreProjects:{edges:[{node:{slug:"colonynetwork",name:"colonyNetwork",description:"Robust and secure smart contracts for managing work, permissions, and reputation.",logo:"img/colonyNetwork_color.svg",logoSmall:"img/logomark_colonyNetwork_blue.svg",repoUrl:"https://github.com/JoinColony/colonyNetwork",sectionOrder:["intro","docs","bug-bounty-program","whitepaper-tldr","api"],sectionTranslations:null,sections:[{name:"Docs",slug:"docs",docs:[{slug:"get-started",fields:{locale:"en",slug:"/colonynetwork/docs-get-started"},frontmatter:{title:"Get Started",order:4,section:"Docs"}},{slug:"overview",fields:{locale:"en",slug:"/colonynetwork/docs-overview"},frontmatter:{title:"Overview",order:1,section:"Docs"}},{slug:"releases",fields:{locale:"en",slug:"/colonynetwork/docs-releases"},frontmatter:{title:"Releases",order:3,section:"Docs"}},{slug:"the-delegate-proxy-pattern",fields:{locale:"en",slug:"/colonynetwork/docs-the-delegate-proxy-pattern"},frontmatter:{title:"The Delegate Proxy Pattern",order:2,section:"Docs"}}]},{name:"Intro",slug:"intro",docs:[{slug:"welcome",fields:{locale:"en",slug:"/colonynetwork/intro-welcome"},frontmatter:{title:"Welcome",order:0,section:"Intro"}}]},{name:"Whitepaper TL;DR",slug:"whitepaper-tldr",docs:[{slug:"colony",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-colony"},frontmatter:{title:"Colony",order:0,section:"Whitepaper TL;DR"}},{slug:"objections-and-disputes",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-objections-and-disputes"},frontmatter:{title:"Objections and Disputes",order:7,section:"Whitepaper TL;DR"}},{slug:"domains-and-skills",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-domains-and-skills"},frontmatter:{title:"Domains and Skills",order:5,section:"Whitepaper TL;DR"}},{slug:"glossary-of-terms",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-glossary-of-terms"},frontmatter:{title:"Glossary of Terms",order:11,section:"Whitepaper TL;DR"}},{slug:"the-meta-colony-and-clny",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-the-meta-colony-and-clny"},frontmatter:{title:"The Meta Colony and CLNY",order:8,section:"Whitepaper TL;DR"}},{slug:"pots-and-funding",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-pots-and-funding"},frontmatter:{title:"Pots and Funding",order:6,section:"Whitepaper TL;DR"}},{slug:"reputation",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-reputation"},frontmatter:{title:"Reputation",order:4,section:"Whitepaper TL;DR"}},{slug:"reputation-mining",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-reputation-mining"},frontmatter:{title:"Reputation Mining",order:9,section:"Whitepaper TL;DR"}},{slug:"tasks",fields:{locale:"en",slug:"/colonynetwork/whitepaper-tldr-tasks"},frontmatter:{title:"Tasks",order:3,section:"Whitepaper TL;DR"}}]},{name:"Bug Bounty Program",slug:"bug-bounty-program",docs:[{slug:"overview",fields:{locale:"en",slug:"/colonynetwork/bug-bounty-program-overview"},frontmatter:{title:"Overview",order:0,section:"Bug Bounty Program"}},{slug:"terms-and-conditions",fields:{locale:"en",slug:"/colonynetwork/bug-bounty-program-terms-and-conditions"},frontmatter:{title:"Terms and Conditions",order:1,section:"Bug Bounty Program"}}]}]}},{node:{slug:"colonyjs",name:"colonyJS",description:"A JavaScript library with a simple and predictable interface for application-layer integrations with the colonyNetwork smart contracts.",logo:"img/colonyJS_color.svg",logoSmall:"img/logomark_colonyJS_red.svg",repoUrl:"https://github.com/JoinColony/colonyJS",sectionOrder:["intro","topics","components","api"],sectionTranslations:null,sections:[{name:"API",slug:"api",docs:[{slug:"colonyclient",fields:{locale:"en",slug:"/colonyjs/api-colonyclient"},frontmatter:{title:"ColonyClient",order:1,section:"API"}},{slug:"colonynetworkclient",fields:{locale:"en",slug:"/colonyjs/api-colonynetworkclient"},frontmatter:{title:"ColonyNetworkClient",order:2,section:"API"}},{slug:"contractclient",fields:{locale:"en",slug:"/colonyjs/api-contractclient"},frontmatter:{title:"ContractClient",order:0,section:"API"}},{slug:"multisigoperation",fields:{locale:"en",slug:"/colonyjs/api-multisigoperation"},frontmatter:{title:"MultisigOperation",order:6,section:"API"}},{slug:"tokenclient",fields:{locale:"en",slug:"/colonyjs/api-tokenclient"},frontmatter:{title:"TokenClient",order:3,section:"API"}},{slug:"tokenlockingclient",fields:{locale:"en",slug:"/colonyjs/api-tokenlockingclient"},frontmatter:{title:"TokenLockingClient",order:4,section:"API"}}]},{name:"Components",slug:"components",docs:[{slug:"adapters",fields:{locale:"en",slug:"/colonyjs/components-adapters"},frontmatter:{title:"Adapters",order:3,section:"Components"}},{slug:"clients",fields:{locale:"en",slug:"/colonyjs/components-clients"},frontmatter:{title:"Clients",order:1,section:"Components"}},{slug:"loaders",fields:{locale:"en",slug:"/colonyjs/components-loaders"},frontmatter:{title:"Loaders",order:2,section:"Components"}}]},{name:"Intro",slug:"intro",docs:[{slug:"get-started",fields:{locale:"en",slug:"/colonyjs/intro-get-started"},frontmatter:{title:"Get Started",order:2,section:"Intro"}},{slug:"local-setup",fields:{locale:"en",slug:"/colonyjs/intro-local-setup"},frontmatter:{title:"Local Setup",order:3,section:"Intro"}},{slug:"welcome",fields:{locale:"en",slug:"/colonyjs/intro-welcome"},frontmatter:{title:"Welcome",order:1,section:"Intro"}}]},{name:"Topics",slug:"topics",docs:[{slug:"domains-and-skills",fields:{locale:"en",slug:"/colonyjs/topics-domains-and-skills"},frontmatter:{title:"Domains and Skills",order:5,section:"Topics"}},{slug:"managing-permissions",fields:{locale:"en",slug:"/colonyjs/topics-managing-permissions"},frontmatter:{title:"Managing Permissions",order:7,section:"Topics"}},{slug:"task-lifecycle",fields:{locale:"en",slug:"/colonyjs/topics-task-lifecycle"},frontmatter:{title:"Task Lifecycle",order:4,section:"Topics"}},{slug:"tokens-and-funding",fields:{locale:"en",slug:"/colonyjs/topics-tokens-and-funding"},frontmatter:{title:"Tokens and Funding",order:6,section:"Topics"}},{slug:"using-ipfs",fields:{locale:"en",slug:"/colonyjs/topics-using-ipfs"},frontmatter:{title:"Using IPFS",order:10,section:"Topics"}},{slug:"using-multisignature",fields:{locale:"en",slug:"/colonyjs/topics-using-multisignature"},frontmatter:{title:"Using Multisignature",order:9,section:"Topics"}},{slug:"viewing-reputation",fields:{locale:"en",slug:"/colonyjs/topics-viewing-reputation"},frontmatter:{title:"Viewing Reputation",order:8,section:"Topics"}}]}]}},{node:{slug:"colonystarter",name:"colonyStarter",description:"Boilerplates and examples to get started. Spin up an application in minutes or create an extension for the Colony Network smart contracts.",logo:"img/colonyStarter_color.svg",logoSmall:"img/logomark_colonyStarter_blue.svg",repoUrl:"https://github.com/JoinColony/colonyStarter",sectionOrder:["docs","cli","starters","examples"],sectionTranslations:null,sections:[{name:"CLI",slug:"cli",docs:[{slug:"colony-cli",fields:{locale:"en",slug:"/colonystarter/cli-colony-cli"},frontmatter:{title:"colony-cli",order:1,section:"CLI"}}]},{name:"Docs",slug:"docs",docs:[{slug:"linux-setup",fields:{locale:"en",slug:"/colonystarter/docs-linux-setup"},frontmatter:{title:"Linux Setup",order:2,section:"Docs"}},{slug:"overview",fields:{locale:"en",slug:"/colonystarter/docs-overview"},frontmatter:{title:"Overview",order:1,section:"Docs"}}]},{name:"Examples",slug:"examples",docs:[{slug:"colony-example",fields:{locale:"en",slug:"/colonystarter/examples-colony-example"},frontmatter:{title:"colony-example",order:1,section:"Examples"}},{slug:"colony-example-angular",fields:{locale:"en",slug:"/colonystarter/examples-colony-example-angular"},frontmatter:{title:"colony-example-angular",order:3,section:"Examples"}},{slug:"colony-example-react",fields:{locale:"en",slug:"/colonystarter/examples-colony-example-react"},frontmatter:{title:"colony-example-react",order:2,section:"Examples"}}]},{name:"Starters",slug:"starters",docs:[{slug:"colony-starter",fields:{locale:"en",slug:"/colonystarter/starters-colony-starter"},frontmatter:{title:"colony-starter",order:1,section:"Starters"}},{slug:"colony-starter-angular",fields:{locale:"en",slug:"/colonystarter/starters-colony-starter-angular"},frontmatter:{title:"colony-starter-angular",order:3,section:"Starters"}},{slug:"colony-starter-contract",fields:{locale:"en",slug:"/colonystarter/starters-colony-starter-contract"},frontmatter:{title:"colony-starter-contract",order:4,section:"Starters"}},{slug:"colony-starter-react",fields:{locale:"en",slug:"/colonystarter/starters-colony-starter-react"},frontmatter:{title:"colony-starter-react",order:2,section:"Starters"}}]}]}}]}}}},306:function(e){e.exports={data:{openSourceProjects:{edges:[{node:{slug:"purser",name:"purser",description:"A JavaScript library that simplifies interaction with Ethereum wallets.",logo:"img/purser_color.svg",logoSmall:"img/logomark_purser_green.svg",repoUrl:"https://github.com/JoinColony/purser",sectionOrder:["docs","interface","modules"],sectionTranslations:null,sections:[{name:"Docs",slug:"docs",docs:[{slug:"contribute",fields:{locale:"en",slug:"/purser/docs-contribute"},frontmatter:{title:"Contribute",order:1,section:"Docs"}},{slug:"development",fields:{locale:"en",slug:"/purser/docs-development"},frontmatter:{title:"Development",order:2,section:"Docs"}},{slug:"overview",fields:{locale:"en",slug:"/purser/docs-overview"},frontmatter:{title:"Overview",order:0,section:"Docs"}}]},{name:"Interface",slug:"interface",docs:[{slug:"common-wallet-interface",fields:{locale:"en",slug:"/purser/interface-common-wallet-interface"},frontmatter:{title:"Common Wallet Interface",order:0,section:"Interface"}}]},{name:"Modules",slug:"modules",docs:[{slug:"@colonypurser-core",fields:{locale:"en",slug:"/purser/modules-@colonypurser-core"},frontmatter:{title:"@colony/purser-core",order:0,section:"Modules"}},{slug:"@colonypurser-ledger",fields:{locale:"en",slug:"/purser/modules-@colonypurser-ledger"},frontmatter:{title:"@colony/purser-ledger",order:1,section:"Modules"}},{slug:"@colonypurser-metamask",fields:{locale:"en",slug:"/purser/modules-@colonypurser-metamask"},frontmatter:{title:"@colony/purser-metamask",order:2,section:"Modules"}},{slug:"@colonypurser-software",fields:{locale:"en",slug:"/purser/modules-@colonypurser-software"},frontmatter:{title:"@colony/purser-software",order:3,section:"Modules"}},{slug:"@colonypurser-trezor",fields:{locale:"en",slug:"/purser/modules-@colonypurser-trezor"},frontmatter:{title:"@colony/purser-trezor",order:4,section:"Modules"}}]}]}},{node:{slug:"tailor",name:"tailor",description:"A JavaScript library that provides an easy-to-use layer between lower-level libraries and your dApp.",logo:"img/tailor_color.svg",logoSmall:"img/logomark_tailor_yellow.svg",repoUrl:"https://github.com/JoinColony/tailor",sectionOrder:["docs"],sectionTranslations:null,sections:[{name:"Docs",slug:"docs",docs:[{slug:"adapters",fields:{locale:"en",slug:"/tailor/docs-adapters"},frontmatter:{title:"Adapters",order:2,section:"Docs"}},{slug:"events",fields:{locale:"en",slug:"/tailor/docs-events"},frontmatter:{title:"Events",order:6,section:"Docs"}},{slug:"faq",fields:{locale:"en",slug:"/tailor/docs-faq"},frontmatter:{title:"FAQ",order:8,section:"Docs"}},{slug:"hooks",fields:{locale:"en",slug:"/tailor/docs-hooks"},frontmatter:{title:"Hooks",order:7,section:"Docs"}},{slug:"loaders",fields:{locale:"en",slug:"/tailor/docs-loaders"},frontmatter:{title:"Loaders",order:1,section:"Docs"}},{slug:"overrides",fields:{locale:"en",slug:"/tailor/docs-overrides"},frontmatter:{title:"Overrides",order:4,section:"Docs"}},{slug:"overview",fields:{locale:"en",slug:"/tailor/docs-overview"},frontmatter:{title:"Overview",order:0,section:"Docs"}},{slug:"transactions",fields:{locale:"en",slug:"/tailor/docs-transactions"},frontmatter:{title:"Transactions",order:5,section:"Docs"}},{slug:"wallets",fields:{locale:"en",slug:"/tailor/docs-wallets"},frontmatter:{title:"Wallets",order:3,section:"Docs"}}]}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-700a1e48e9a86ed37343.js.map