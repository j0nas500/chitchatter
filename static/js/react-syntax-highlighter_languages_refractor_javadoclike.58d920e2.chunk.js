"use strict";(self.webpackChunkchitchatter=self.webpackChunkchitchatter||[]).push([[902],{39285:function(a){function e(a){!function(a){var e=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(e,t){"string"===typeof e&&(e=[e]),e.forEach((function(e){!function(e,t){var n="doc-comment",i=a.languages[e];if(i){var r=i[n];if(!r){var o={};o[n]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},r=(i=a.languages.insertBefore(e,"comment",o))[n]}if(r instanceof RegExp&&(r=i[n]={pattern:r}),Array.isArray(r))for(var s=0,c=r.length;s<c;s++)r[s]instanceof RegExp&&(r[s]={pattern:r[s]}),t(r[s]);else t(r)}}(e,(function(a){a.inside||(a.inside={}),a.inside.rest=t}))}))}}),e.addSupport(["java","javascript","php"],e)}(a)}a.exports=e,e.displayName="javadoclike",e.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_javadoclike.58d920e2.chunk.js.map