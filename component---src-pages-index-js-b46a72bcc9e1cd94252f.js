"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,l){var n=l(7294),a=l(1597);t.Z=function(){var e,t,l=(0,a.useStaticQuery)("3257411868"),r=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=l.site.siteMetadata)||void 0===t||t.social;return n.createElement("div",{className:"bio"},(null==r?void 0:r.name)&&n.createElement("p",null,"Written by ",n.createElement("strong",null,r.name),(null==r?void 0:r.summary)||null))}},6558:function(e,t,l){l.r(t);var n=l(7294),a=l(1597),r=l(8771),i=l(8678),o=l(262);t.default=function(e){var t,l=e.data,s=e.location,c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?n.createElement(i.Z,{location:s,title:c},n.createElement(o.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(i.Z,{location:s,title:c},n.createElement(o.Z,{title:"All posts"}),n.createElement(r.Z,null),n.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"}," >> ",t))),n.createElement("small",null," - ",e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b46a72bcc9e1cd94252f.js.map