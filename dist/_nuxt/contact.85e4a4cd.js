import{e as b,q as I,v as p,D as x,o as k,E,F as r,Q as d,u as f}from"./entry.b1930bc4.js";import{I as C,a as O,b as A}from"./alternate-email.0919e5f1.js";var S=function o(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,s,n;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(s=i;s--!==0;)if(!o(e[s],t[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(n=Object.keys(e),i=n.length,i!==Object.keys(t).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[s]))return!1;for(s=i;s--!==0;){var a=n[s];if(!o(e[a],t[a]))return!1}return!0}return e!==e&&t!==t};const g="__googleMapsScriptId";var h;(function(o){o[o.INITIALIZED=0]="INITIALIZED",o[o.LOADING=1]="LOADING",o[o.SUCCESS=2]="SUCCESS",o[o.FAILURE=3]="FAILURE"})(h||(h={}));class l{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:s,id:n=g,language:a,libraries:c=[],mapIds:u,nonce:m,region:_,retries:y=3,url:v="https://maps.googleapis.com/maps/api/js",version:w}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=s,this.id=n||g,this.language=a,this.libraries=c,this.mapIds=u,this.nonce=m,this.region=_,this.retries=y,this.url=v,this.version=w,l.instance){if(!S(this.options,l.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(l.instance.options)}`);return l.instance}l.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?h.FAILURE:this.done?h.SUCCESS:this.loading?h.LOADING:h.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}const j={class:"w-full h-full flex flex-col bg-[#CFB53B]",id:"contact-page"},P={class:"flex flex-row h-full justify-center mt-16 md:mt-20 mb-12"},$={class:"flex h-full items-start p-10 flex-col md:flex-row w-full sm:w-[96%] xl:w-[87%] justify-center rounded-md bg-[#000000]"},K=r("div",{class:"map w-full md:w-3/5 h-[50vh] md:h-[69vh]",id:"map"},null,-1),N={class:"w-full md:w-2/5 h-[69vh] text-white flex flex-col justify-start items-start px-10"},R={class:"flex flex-col items-start justify-center ml-4 text-white space-y-2"},B=r("h1",{class:"text-4xl mb-10 mt-4 md:mt-0"},"KONTAKT",-1),D={class:"flex hover:cursor-pointer space-x-2"},F=r("h2",null,"798 832 807",-1),M={class:"flex space-x-2 hover:cursor-pointer break-normal"},U=r("h2",null,"kontakt.graphicdesigner@gmail.com",-1),G=[U],T=r("h2",null,"OK Graphics",-1),L=r("h3",{class:"mt-8"},"Dni/godziny pracy: Od poniedzia\u0142ku do soboty, 10:00-20:00",-1),Z=b({__name:"contact",setup(o){const e=I(),t=new l({apiKey:e.GOOGLE_MAPS_API_KEY,version:"weekly",libraries:["places"]});p(!1);const i=()=>{window.open("https://www.facebook.com/profile.php?id=100088083068376","_blank")},s=()=>{document.location="mailto:graphicdesigner@gmail.com"},n=()=>{document.location="tel:798832807"},a=p([]);return x(async()=>{await t.load().then(c=>{a.value=new c.maps.Map(document.getElementById("map"),{center:{lat:51.133106,lng:23.476335},zoom:13})}).catch(c=>{console.log(c)}).then(function(){})}),(c,u)=>(k(),E("div",j,[r("div",P,[r("div",$,[K,r("div",N,[r("div",R,[B,r("div",D,[d(f(C),{class:"text-blue-700 w-6 h-6",onClick:n}),F]),r("div",M,[d(f(O),{class:"text-white w-6 h-6",onClick:s}),r("div",{class:"break-all",id:"email",onClick:s},G)]),r("div",{class:"flex space-x-2 hover:cursor-pointer",onClick:i},[d(f(A),{class:"text-blue-600 w-6 h-6"}),T])]),L])])])]))}});export{Z as default};
