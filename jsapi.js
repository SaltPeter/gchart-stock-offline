if (!window['google']) {
	window['google'] = {};
}
if (!window['google']['loader']) {
	window['google']['loader'] = {};
	
(function() {
	var d=void 0,g=!0,h=null,k=!1,l=encodeURIComponent,m=window,n=document;function p(a,b){return a.load=b}var r="push",s="replace",t="charAt",v="indexOf",w="ServiceBase",x="name",y="getTime",z="length",A="prototype",B="setTimeout",C="loader",D="substring",E="join",F="toLowerCase";
	function G(a){
		return a in H?H[a]:H[a]=-1!=navigator.userAgent[F]()[v](a)
	}
	var H={};
	function I(a,b){
		var c=function(){};
		c.prototype=b[A];
		a.T=b[A];
		a.prototype=new c
	}

function J(a,b,c){var e=Array[A].slice.call(arguments,2)||[];return function(){var c=e.concat(Array[A].slice.call(arguments));return a.apply(b,c)}}function K(a){a=Error(a);a.toString=function(){return this.message};return a}function L(a,b){for(var c=a.split(/\./),e=m,f=0;f<c[z]-1;f++)e[c[f]]||(e[c[f]]={}),e=e[c[f]];e[c[c[z]-1]]=b}function aa(a,b,c){a[b]=c}if(!M)var M=L;if(!N)var N=aa;google[C].v={};M("google.loader.callbacks",google[C].v);var O={},P={};google[C].eval={};M("google.loader.eval",google[C].eval);
p(google,function(a,b,c){function e(a){var b=a.split(".");
if(2<b[z])
	throw K("Module: '"+a+"' not found!");
"undefined"!=typeof b[1]&&(f=b[0],c.packages=c.packages||[],c.packages[r](b[1]))}var f=a;c=c||{};
if(a instanceof Array||a&&"object"==typeof a&&"function"==typeof a[E]&&"function"==typeof a.reverse)
	for(var j=0;j<a[z];j++)
		e(a[j]);
else
	e(a);
if(a=O[":"+f]){
	c&&(!c.language&&c.locale)&&(c.language=c.locale);c&&"string"==typeof c.callback&&(j=c.callback,j.match(/^[[\]A-Za-z0-9._]+$/)&&(j=m.eval(j),c.callback=
j));if((j=c&&c.callback!=h)&&!a.s(b))throw K("Module: '"+f+"' must be loaded before DOM onLoad!");j?a.m(b,c)?m[B](c.callback,0):a.load(b,c):a.m(b,c)||a.load(b,c)
}
else
	throw K("Module: '"+f+"' not found!");});M("google.load",google.load);

google.S=
function(a,b){
	b ? (0==Q[z]&&(R(m,"load",S),!G("msie")&&!G("safari")&&!G("konqueror")&&G("mozilla")||m.opera?m.addEventListener("DOMContentLoaded",S,k):G("msie")?n.write("<script defer onreadystatechange='google.loader.domReady()' src=//:><\/script>"):(G("safari")||G("konqueror"))&&m[B](ba,10)),Q[r](a)) : R(m,"load",a)
};

M("google.setOnLoadCallback",google.S);

function R(a,b,c){if(a.addEventListener)a.addEventListener(b,c,k);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var e=a["on"+b];if(e!=h){var f=[c,e];c=function(){for(var a=0;a<f[z];a++)f[a]()}}a["on"+b]=c}}var Q=[];google[C].O=function(){var a=m.event.srcElement;"complete"==a.readyState&&(a.onreadystatechange=h,a.parentNode.removeChild(a),S())};M("google.loader.domReady",google[C].O);var ca={loaded:g,complete:g};function ba(){ca[n.readyState]?S():0<Q[z]&&m[B](ba,10)}
function S(){for(var a=0;a<Q[z];a++)Q[a]();Q.length=0}google[C].d=function(a,b,c){if(c){var e;"script"==a?(e=n.createElement("script"),e.type="text/javascript",e.src=b):"css"==a&&(e=n.createElement("link"),e.type="text/css",e.href=b,e.rel="stylesheet");(a=n.getElementsByTagName("head")[0])||(a=n.body.parentNode.appendChild(n.createElement("head")));a.appendChild(e)}else"script"==a?n.write('<script src="'+b+'" type="text/javascript"><\/script>'):"css"==a&&n.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
M("google.loader.writeLoadTag",google[C].d);google[C].P=function(a){P=a};M("google.loader.rfm",google[C].P);google[C].R=function(a){for(var b in a)"string"==typeof b&&(b&&":"==b[t](0)&&!O[b])&&(O[b]=new T(b[D](1),a[b]))};M("google.loader.rpl",google[C].R);google[C].Q=function(a){if((a=a.specs)&&a[z])for(var b=0;b<a[z];++b){var c=a[b];"string"==typeof c?O[":"+c]=new V(c):(c=new W(c[x],c.baseSpec,c.customSpecs),O[":"+c[x]]=c)}};M("google.loader.rm",google[C].Q);google[C].loaded=function(a){O[":"+a.module].l(a)};
M("google.loader.loaded",google[C].loaded);
google[C].N=function(){return"qid="+((new Date)[y]().toString(16)+Math.floor(1E7*Math.random()).toString(16))};
M("google.loader.createGuidArg_",google[C].N);
L("google_exportSymbol",L);
L("google_exportProperty",aa);
google[C].a={};
function V(a){this.b=a;this.o=[];this.n={};this.e={};this.f={};this.j=g;this.c=-1}

V[A].t=function(a){var b=h;a&&(b=a.packages);var c=h;if(b)if("string"==typeof b)c=[a.packages];else if(b[z]){c=[];for(a=0;a<b[z];a++)"string"==typeof b[a]&&c[r](b[a][s](/^\s*|\s*$/,"")[F]())}c||(c=["default"]);b=[];for(a=0;a<c[z];a++)this.n[":"+c[a]]||b[r](c[a]);return b};

V[A].l=function(a){-1!=this.c&&(da("al_"+this.b,"jl."+((new Date)[y]()-this.c),g),this.c=-1);this.o=this.o.concat(a.components);google[C][this.b]||(google[C][this.b]={});google[C][this.b].packages=this.o.slice(0);for(var b=0;b<a.components[z];b++){this.n[":"+a.components[b]]=g;this.e[":"+a.components[b]]=k;var c=this.f[":"+a.components[b]];if(c){for(var e=0;e<c[z];e++)c[e].B(a.components[b]);delete this.f[":"+a.components[b]]}}};V[A].m=function(a,b){return 0==this.t(b)[z]};V[A].s=function(){return g};
function X(a){this.D=a;this.q={};this.r=0}X[A].A=function(a){this.r++;this.q[":"+a]=g};X[A].B=function(a){this.q[":"+a]&&(this.q[":"+a]=k,this.r--,0==this.r&&m[B](this.D,0))};function W(a,b,c){this.name=a;this.C=b;this.p=c;this.u=this.h=k;this.k=[];google[C].v[this[x]]=J(this.l,this)}I(W,V);p(W[A],function(a,b){var c=b&&b.callback!=h;c?(this.k[r](b.callback),b.callback="google.loader.callbacks."+this[x]):this.h=g;(!b||!b.autoloaded)&&google[C].d("script",this.g(a,b),c)});W[A].m=function(a,b){return b&&b.callback!=h?this.u:this.h};W[A].l=function(){this.u=g;for(var a=0;a<this.k[z];a++)m[B](this.k[a],0);this.k=[]};
var Y=function(a,b){return a.string?l(a.string)+"="+l(b):a.regex?b[s](/(^.*$)/,a.regex):""};W[A].g=function(a,b){return this.F(this.w(a),a,b)};
W[A].F=function(a,b,c){
	var e="";

	a.version&&(e+="&"+Y(a.version,b));

	if(c!=h)
		for(var f in c)
			a.params[f]?e+="&"+Y(a.params[f],c[f]):"other_params"==f?e+="&"+c[f]:"base_domain"==f&&(b="http://"+c[f]+a.uri[D](a.uri[v]("/",7)));
		google[this[x]]={};
-1==b[v]("?")&&e&&(e="?"+e[D](1));return b+e};
		W[A].s=function(a){return this.w(a).deferred};
		W[A].w=function(a){if(this.p)for(var b=0;b<this.p[z];++b){var c=this.p[b];if(RegExp(c.pattern).test(a))return c}return this.C};
		function T(a,b){this.b=a;this.i=b;this.h=k}I(T,V);
		p(T[A],function(a,b){this.h=g;google[C].d("script",this.g(a,b),k)});T[A].m=function(){return this.h};T[A].l=function(){};
		
T[A].s=
function(){
	return k
};
var ea=k,
	Z=[],
	ha=function(){ea||(R(m,"unload",ga),ea=g)},
	ia=function(a,b){
		ha();
	},
	da=function(a,b,c){c?ia([a],[b]):(ha(),Z[r]("r"+Z[z]+"="+l(a+(b?"|"+b:""))),m[B](ga,5<Z[z]?0:15E3))},ga=function(){if(Z[z]){var a=
google[C][w];0==a[v]("http:")&&(a=a[s](/^http:/,"https:"));$(a+"/stats?"+Z[E]("&")+"&nc="+(new Date)[y]()+"_"+((new Date)[y]()-fa));Z.length=0}},$=function(a){var b=new Image,c=$.G++;$.z[c]=b;b.onload=b.onerror=function(){delete $.z[c]};b.src=a;b=h};$.z={};$.G=0;L("google.loader.recordCsiStat",ia);L("google.loader.recordStat",da);L("google.loader.createImageForLogging",$);
}) ();

google.loader.rm(
		{"specs":[
			"feeds",
			"spreadsheets",
			"gdata",
			"visualization",
			{"name":"sharing","baseSpec":{"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},
			"elements",
			{"name":"books","baseSpec":{"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},
			{"name":"friendconnect","baseSpec":{"ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},
			"identitytoolkit",
			"ima",
			{"name":"maps","baseSpec":{"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},
			"payments",
			"wave",
			"annotations_v2",
			"language",
			{"name":"annotations","baseSpec":{"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}},
		"picker"]}
	);
}
