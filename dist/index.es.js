function t(){return(t=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var r=Object.prototype.hasOwnProperty,e=Array.isArray,n=function(){for(var t=[],r=0;r<256;++r)t.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return t}(),i=function(t,r){for(var e=r&&r.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(e[n]=t[n]);return e},o={arrayToObject:i,assign:function(t,r){return Object.keys(r).reduce(function(t,e){return t[e]=r[e],t},t)},combine:function(t,r){return[].concat(t,r)},compact:function(t){for(var r=[{obj:{o:t},prop:"o"}],n=[],i=0;i<r.length;++i)for(var o=r[i],u=o.obj[o.prop],f=Object.keys(u),a=0;a<f.length;++a){var s=f[a],c=u[s];"object"==typeof c&&null!==c&&-1===n.indexOf(c)&&(r.push({obj:u,prop:s}),n.push(c))}return function(t){for(;t.length>1;){var r=t.pop(),n=r.obj[r.prop];if(e(n)){for(var i=[],o=0;o<n.length;++o)void 0!==n[o]&&i.push(n[o]);r.obj[r.prop]=i}}}(r),t},decode:function(t,r,e){var n=t.replace(/\+/g," ");if("iso-8859-1"===e)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,r,e){if(0===t.length)return t;var i=t;if("symbol"==typeof t?i=Symbol.prototype.toString.call(t):"string"!=typeof t&&(i=String(t)),"iso-8859-1"===e)return escape(i).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",u=0;u<i.length;++u){var f=i.charCodeAt(u);45===f||46===f||95===f||126===f||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122?o+=i.charAt(u):f<128?o+=n[f]:f<2048?o+=n[192|f>>6]+n[128|63&f]:f<55296||f>=57344?o+=n[224|f>>12]+n[128|f>>6&63]+n[128|63&f]:(f=65536+((1023&f)<<10|1023&i.charCodeAt(u+=1)),o+=n[240|f>>18]+n[128|f>>12&63]+n[128|f>>6&63]+n[128|63&f])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,r){if(e(t)){for(var n=[],i=0;i<t.length;i+=1)n.push(r(t[i]));return n}return r(t)},merge:function t(n,o,u){if(!o)return n;if("object"!=typeof o){if(e(n))n.push(o);else{if(!n||"object"!=typeof n)return[n,o];(u&&(u.plainObjects||u.allowPrototypes)||!r.call(Object.prototype,o))&&(n[o]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(o);var f=n;return e(n)&&!e(o)&&(f=i(n,u)),e(n)&&e(o)?(o.forEach(function(e,i){if(r.call(n,i)){var o=n[i];o&&"object"==typeof o&&e&&"object"==typeof e?n[i]=t(o,e,u):n.push(e)}else n[i]=e}),n):Object.keys(o).reduce(function(e,n){var i=o[n];return e[n]=r.call(e,n)?t(e[n],i,u):i,e},f)}},u=String.prototype.replace,f=/%20/g,a={RFC1738:"RFC1738",RFC3986:"RFC3986"},s=o.assign({default:a.RFC3986,formatters:{RFC1738:function(t){return u.call(t,f,"+")},RFC3986:function(t){return String(t)}}},a),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,r){return t+"["+r+"]"},repeat:function(t){return t}},h=Array.isArray,p=Array.prototype.push,d=function(t,r){p.apply(t,h(r)?r:[r])},y=Date.prototype.toISOString,v=s.default,b={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:v,formatter:s.formatters[v],indices:!1,serializeDate:function(t){return y.call(t)},skipNulls:!1,strictNullHandling:!1},g=function t(r,e,n,i,u,f,a,s,c,l,p,y,v){var g,m=r;if("function"==typeof a?m=a(e,m):m instanceof Date?m=l(m):"comma"===n&&h(m)&&(m=o.maybeMap(m,function(t){return t instanceof Date?l(t):t}).join(",")),null===m){if(i)return f&&!y?f(e,b.encoder,v,"key"):e;m=""}if("string"==typeof(g=m)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||o.isBuffer(m))return f?[p(y?e:f(e,b.encoder,v,"key"))+"="+p(f(m,b.encoder,v,"value"))]:[p(e)+"="+p(String(m))];var j,w=[];if(void 0===m)return w;if(h(a))j=a;else{var O=Object.keys(m);j=s?O.sort(s):O}for(var $=0;$<j.length;++$){var E=j[$],S=m[E];if(!u||null!==S){var R=h(m)?"function"==typeof n?n(e,E):e:e+(c?"."+E:"["+E+"]");d(w,t(S,R,n,i,u,f,a,s,c,l,p,y,v))}}return w},m=Object.prototype.hasOwnProperty,j=Array.isArray,w={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},O=function(t){return t.replace(/&#(\d+);/g,function(t,r){return String.fromCharCode(parseInt(r,10))})},$=function(t,r){return t&&"string"==typeof t&&r.comma&&t.indexOf(",")>-1?t.split(","):t},E=function(t,r,e,n){if(t){var i=e.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=e.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,a=[];if(f){if(!e.plainObjects&&m.call(Object.prototype,f)&&!e.allowPrototypes)return;a.push(f)}for(var s=0;e.depth>0&&null!==(u=o.exec(i))&&s<e.depth;){if(s+=1,!e.plainObjects&&m.call(Object.prototype,u[1].slice(1,-1))&&!e.allowPrototypes)return;a.push(u[1])}return u&&a.push("["+i.slice(u.index)+"]"),function(t,r,e,n){for(var i=n?r:$(r,e),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&e.parseArrays)u=[].concat(i);else{u=e.plainObjects?Object.create(null):{};var a="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,s=parseInt(a,10);e.parseArrays||""!==a?!isNaN(s)&&f!==a&&String(s)===a&&s>=0&&e.parseArrays&&s<=e.arrayLimit?(u=[])[s]=i:u[a]=i:u={0:i}}i=u}return i}(a,r,e,n)}};class S{constructor(r,e,n){var i;this.name=r,this.definition=e,this.bindings=null!=(i=e.bindings)?i:{},this.config=t({absolute:!0},n)}get template(){return`${this.config.absolute?this.definition.domain?`${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port?":"+this.config.port:""}`:this.config.url:""}/${this.definition.uri}`}get parameterSegments(){var t,r;return null!=(t=null===(r=this.template.match(/{[^}?]+\??}/g))||void 0===r?void 0:r.map(t=>({name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)})))?t:[]}matchesUrl(t){if(!this.definition.methods.includes("GET"))return!1;const r=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp(`^${r}$`).test(t.replace(/\/+$/,"").split("?").shift())}compile(t){return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,(r,e)=>{var n;if([null,void 0].includes(t[e])&&this.parameterSegments.find(({name:t})=>t===e).required)throw new Error(`Ziggy error: '${e}' parameter is required for route '${this.name}'.`);return encodeURIComponent(null!=(n=t[e])?n:"")}).replace(/\/+$/,""):this.template.replace(/\/+$/,"")}}class R extends String{constructor(r,e,n=!0,i){var o;if(super(),this.t=null!=(o=null!=i?i:Ziggy)?o:null===globalThis||void 0===globalThis?void 0:globalThis.Ziggy,r){if(!this.t.routes[r])throw new Error(`Ziggy error: route '${r}' is not in the route list.`);this.i=new S(r,this.t.routes[r],t({},this.t,{absolute:n})),this.u=this.s(e)}}toString(){const r=Object.keys(this.u).filter(t=>!this.i.parameterSegments.some(({name:r})=>r===t)).filter(t=>"_query"!==t).reduce((r,e)=>t({},r,{[e]:this.u[e]}),{});return this.i.compile(this.u)+function(t,r){var e,n=t,i=function(t){if(!t)return b;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var r=t.charset||b.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=s.default;if(void 0!==t.format){if(!c.call(s.formatters,t.format))throw new TypeError("Unknown format option provided.");e=t.format}var n=s.formatters[e],i=b.filter;return("function"==typeof t.filter||h(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:b.addQueryPrefix,allowDots:void 0===t.allowDots?b.allowDots:!!t.allowDots,charset:r,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:b.charsetSentinel,delimiter:void 0===t.delimiter?b.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:b.encode,encoder:"function"==typeof t.encoder?t.encoder:b.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:b.encodeValuesOnly,filter:i,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:b.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:b.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:b.strictNullHandling}}(r);"function"==typeof i.filter?n=(0,i.filter)("",n):h(i.filter)&&(e=i.filter);var o=[];if("object"!=typeof n||null===n)return"";var u=l[r&&r.arrayFormat in l?r.arrayFormat:r&&"indices"in r?r.indices?"indices":"repeat":"indices"];e||(e=Object.keys(n)),i.sort&&e.sort(i.sort);for(var f=0;f<e.length;++f){var a=e[f];i.skipNulls&&null===n[a]||d(o,g(n[a],a,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var p=o.join(i.delimiter),y=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(y+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),p.length>0?y+p:""}(t({},r,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0})}current(t,r){const e=window.location.host+window.location.pathname,[n,i]=Object.entries(this.t.routes).find(([r,n])=>new S(t,n,this.t).matchesUrl(e));if(!t)return n;const o=new RegExp(`^${t.replace(".","\\.").replace("*",".*")}$`).test(n);return r?(r=this.s(r,new S(n,i,this.t)),Object.entries(this.l(i)).filter(([t])=>r.hasOwnProperty(t)).every(([t,e])=>r[t]==e)):o}get params(){return this.l(this.t.routes[this.current()])}has(t){return Object.keys(this.t.routes).includes(t)}s(r={},e=this.i){r=["string","number"].includes(typeof r)?[r]:r;const n=e.parameterSegments.filter(({name:t})=>!this.t.defaults[t]);return Array.isArray(r)?r=r.reduce((r,e,i)=>t({},r,{[n[i].name]:e}),{}):1!==n.length||r[n[0].name]||!r.hasOwnProperty(Object.values(e.bindings)[0])&&!r.hasOwnProperty("id")||(r={[n[0].name]:r}),t({},this.h(e),this.p(r,e.bindings))}h(r){return r.parameterSegments.filter(({name:t})=>this.t.defaults[t]).reduce((r,{name:e},n)=>t({},r,{[e]:this.t.defaults[e]}),{})}p(r,e={}){return Object.entries(r).reduce((r,[n,i])=>{if(!i||"object"!=typeof i||Array.isArray(i)||"_query"===n)return t({},r,{[n]:i});if(!i.hasOwnProperty(e[n])){if(!i.hasOwnProperty("id"))throw new Error(`Ziggy error: object passed as '${n}' parameter is missing route model binding key '${e[n]}'.`);e[n]="id"}return t({},r,{[n]:i[e[n]]})},{})}l(r){var e;let n=window.location.pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"");const i=(r,e="",n)=>{const[i,o]=[r,e].map(t=>t.split(n));return o.reduce((r,e,n)=>/^{[^}?]+\??}$/.test(e)&&i[n]?t({},r,{[e.replace(/^{|\??}$/g,"")]:i[n]}):r,{})};return t({},i(window.location.host,r.domain,"."),i(n,r.uri,"/"),function(t,r){var e=w;if(""===t||null==t)return e.plainObjects?Object.create(null):{};for(var n="string"==typeof t?function(t,r){var e,n={},i=(r.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(r.delimiter,Infinity===r.parameterLimit?void 0:r.parameterLimit),u=-1,f=r.charset;if(r.charsetSentinel)for(e=0;e<i.length;++e)0===i[e].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[e]?f="utf-8":"utf8=%26%2310003%3B"===i[e]&&(f="iso-8859-1"),u=e,e=i.length);for(e=0;e<i.length;++e)if(e!==u){var a,s,c=i[e],l=c.indexOf("]="),h=-1===l?c.indexOf("="):l+1;-1===h?(a=r.decoder(c,w.decoder,f,"key"),s=r.strictNullHandling?null:""):(a=r.decoder(c.slice(0,h),w.decoder,f,"key"),s=o.maybeMap($(c.slice(h+1),r),function(t){return r.decoder(t,w.decoder,f,"value")})),s&&r.interpretNumericEntities&&"iso-8859-1"===f&&(s=O(s)),c.indexOf("[]=")>-1&&(s=j(s)?[s]:s),n[a]=m.call(n,a)?o.combine(n[a],s):s}return n}(t,e):t,i=e.plainObjects?Object.create(null):{},u=Object.keys(n),f=0;f<u.length;++f){var a=u[f],s=E(a,n[a],e,"string"==typeof t);i=o.merge(i,s,e)}return o.compact(i)}(null===(e=window.location.search)||void 0===e?void 0:e.replace(/^\?/,"")))}valueOf(){return this.toString()}check(t){return this.has(t)}}export default function(t,r,e,n){const i=new R(t,r,e,n);return t?i.toString():i}
//# sourceMappingURL=index.es.js.map
