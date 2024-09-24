var mr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},To=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let y=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(y=64)),r.push(n[h],n[f],n[y],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gs(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):To(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new So;const y=i<<2|a>>4;if(r.push(y),l!==64){const g=a<<4&240|l>>2;if(r.push(g),f!==64){const p=l<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class So extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Co=function(t){const e=gs(t);return ws.encodeByteArray(e,!0)},bs=function(t){return Co(t).replace(/\./g,"")},ys=function(t){try{return ws.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=()=>ko().__FIREBASE_DEFAULTS__,Po=()=>{if(typeof process>"u"||typeof mr>"u")return;const t=mr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Oo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ys(t[1]);return e&&JSON.parse(e)},Fn=()=>{try{return Ao()||Po()||Oo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ro=t=>{var e,n;return(n=(e=Fn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vs=()=>{var t;return(t=Fn())===null||t===void 0?void 0:t.config},_s=t=>{var e;return(e=Fn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function Do(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function No(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bo(){const t=N();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Uo(){try{return typeof indexedDB=="object"}catch{return!1}}function Fo(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="FirebaseError";class ve extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$o,Object.setPrototypeOf(this,ve.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lt.prototype.create)}}class lt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jo(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ve(s,a,r)}}function jo(t,e){return t.replace(Ho,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ho=/\{\$([^}]+)}/g;function Vo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gr(i)&&gr(o)){if(!Lt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function nt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zo(t,e){const n=new Wo(t,e);return n.subscribe.bind(n)}class Wo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qo(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=an),s.error===void 0&&(s.error=an),s.complete===void 0&&(s.complete=an);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qo(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function an(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){return t&&t._delegate?t._delegate:t}class We{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jo(e))try{this.getOrInitializeService({instanceIdentifier:Te})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Te){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Te){return this.instances.has(e)}getOptions(e=Te){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Go(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Te){return this.component?this.component.multipleInstances?e:Te:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Go(t){return t===Te?void 0:t}function Jo(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ko(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(T||(T={}));const Xo={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Zo=T.INFO,Qo={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},ea=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Qo[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Es{constructor(e){this.name=e,this._logLevel=Zo,this._logHandler=ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const ta=(t,e)=>e.some(n=>t instanceof n);let wr,br;function na(){return wr||(wr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ra(){return br||(br=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Is=new WeakMap,vn=new WeakMap,Ts=new WeakMap,cn=new WeakMap,$n=new WeakMap;function sa(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(be(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Is.set(n,t)}).catch(()=>{}),$n.set(e,t),e}function ia(t){if(vn.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vn.set(t,e)}let _n={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ts.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oa(t){_n=t(_n)}function aa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ln(this),e,...n);return Ts.set(r,e.sort?e.sort():[e]),be(r)}:ra().includes(t)?function(...e){return t.apply(ln(this),e),be(Is.get(this))}:function(...e){return be(t.apply(ln(this),e))}}function ca(t){return typeof t=="function"?aa(t):(t instanceof IDBTransaction&&ia(t),ta(t,na())?new Proxy(t,_n):t)}function be(t){if(t instanceof IDBRequest)return sa(t);if(cn.has(t))return cn.get(t);const e=ca(t);return e!==t&&(cn.set(t,e),$n.set(e,t)),e}const ln=t=>$n.get(t);function la(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=be(o);return r&&o.addEventListener("upgradeneeded",c=>{r(be(o.result),c.oldVersion,c.newVersion,be(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ua=["get","getKey","getAll","getAllKeys","count"],da=["put","add","delete","clear"],un=new Map;function yr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(un.get(e))return un.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=da.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ua.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return un.set(e,i),i}oa(t=>({...t,get:(e,n,r)=>yr(e,n)||t.get(e,n,r),has:(e,n)=>!!yr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fa(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const En="@firebase/app",vr="0.10.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Es("@firebase/app"),pa="@firebase/app-compat",ma="@firebase/analytics-compat",ga="@firebase/analytics",wa="@firebase/app-check-compat",ba="@firebase/app-check",ya="@firebase/auth",va="@firebase/auth-compat",_a="@firebase/database",Ea="@firebase/database-compat",Ia="@firebase/functions",Ta="@firebase/functions-compat",Sa="@firebase/installations",Ca="@firebase/installations-compat",ka="@firebase/messaging",Aa="@firebase/messaging-compat",Pa="@firebase/performance",Oa="@firebase/performance-compat",Ra="@firebase/remote-config",xa="@firebase/remote-config-compat",La="@firebase/storage",Da="@firebase/storage-compat",Na="@firebase/firestore",Ma="@firebase/vertexai-preview",Ba="@firebase/firestore-compat",Ua="firebase",Fa="10.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="[DEFAULT]",$a={[En]:"fire-core",[pa]:"fire-core-compat",[ga]:"fire-analytics",[ma]:"fire-analytics-compat",[ba]:"fire-app-check",[wa]:"fire-app-check-compat",[ya]:"fire-auth",[va]:"fire-auth-compat",[_a]:"fire-rtdb",[Ea]:"fire-rtdb-compat",[Ia]:"fire-fn",[Ta]:"fire-fn-compat",[Sa]:"fire-iid",[Ca]:"fire-iid-compat",[ka]:"fire-fcm",[Aa]:"fire-fcm-compat",[Pa]:"fire-perf",[Oa]:"fire-perf-compat",[Ra]:"fire-rc",[xa]:"fire-rc-compat",[La]:"fire-gcs",[Da]:"fire-gcs-compat",[Na]:"fire-fst",[Ba]:"fire-fst-compat",[Ma]:"fire-vertex","fire-js":"fire-js",[Ua]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Map,ja=new Map,Tn=new Map;function _r(t,e){try{t.container.addComponent(e)}catch(n){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function st(t){const e=t.name;if(Tn.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;Tn.set(e,t);for(const n of Dt.values())_r(n,t);for(const n of ja.values())_r(n,t);return!0}function Ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function X(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ye=new lt("app","Firebase",Ha);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=Fa;function za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:In,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ye.create("bad-app-name",{appName:String(s)});if(n||(n=vs()),!n)throw ye.create("no-options");const i=Dt.get(s);if(i){if(Lt(n,i.options)&&Lt(r,i.config))return i;throw ye.create("duplicate-app",{appName:s})}const o=new Yo(s);for(const c of Tn.values())o.addComponent(c);const a=new Va(n,r,o);return Dt.set(s,a),a}function Wa(t=In){const e=Dt.get(t);if(!e&&t===In&&vs())return za();if(!e)throw ye.create("no-app",{appName:t});return e}function Fe(t,e,n){var r;let s=(r=$a[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(a.join(" "));return}st(new We(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="firebase-heartbeat-database",Ka=1,it="firebase-heartbeat-store";let dn=null;function Cs(){return dn||(dn=la(qa,Ka,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(it)}catch(n){console.warn(n)}}}}).catch(t=>{throw ye.create("idb-open",{originalErrorMessage:t.message})})),dn}async function Ga(t){try{const n=(await Cs()).transaction(it),r=await n.objectStore(it).get(ks(t));return await n.done,r}catch(e){if(e instanceof ve)ae.warn(e.message);else{const n=ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(n.message)}}}async function Er(t,e){try{const r=(await Cs()).transaction(it,"readwrite");await r.objectStore(it).put(e,ks(t)),await r.done}catch(n){if(n instanceof ve)ae.warn(n.message);else{const r=ye.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ae.warn(r.message)}}}function ks(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=1024,Ya=30*24*60*60*1e3;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qa(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ir();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ya}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ae.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ir(),{heartbeatsToSend:r,unsentEntries:s}=Za(this._heartbeatsCache.heartbeats),i=bs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ae.warn(n),""}}}function Ir(){return new Date().toISOString().substring(0,10)}function Za(t,e=Ja){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Tr(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uo()?Fo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ga(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Er(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Tr(t){return bs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){st(new We("platform-logger",e=>new ha(e),"PRIVATE")),st(new We("heartbeat",e=>new Xa(e),"PRIVATE")),Fe(En,vr,t),Fe(En,vr,"esm2017"),Fe("fire-js","")}ec("");var tc="firebase",nc="10.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(tc,nc,"app");function jn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function As(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rc=As,Ps=new lt("auth","Firebase",As());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Es("@firebase/auth");function sc(t,...e){Nt.logLevel<=T.WARN&&Nt.warn(`Auth (${dt}): ${t}`,...e)}function kt(t,...e){Nt.logLevel<=T.ERROR&&Nt.error(`Auth (${dt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,...e){throw Hn(t,...e)}function Z(t,...e){return Hn(t,...e)}function Os(t,e,n){const r=Object.assign(Object.assign({},rc()),{[e]:n});return new lt("auth","Firebase",r).create(e,{appName:t.name})}function ie(t){return Os(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ps.create(t,...e)}function v(t,e,...n){if(!t)throw Hn(e,...n)}function ne(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kt(e),new Error(e)}function ce(t,e){t||ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ic(){return Sr()==="http:"||Sr()==="https:"}function Sr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ic()||No()||"connection"in navigator)?navigator.onLine:!0}function ac(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){this.shortDelay=e,this.longDelay=n,ce(n>e,"Short delay should be less than long delay!"),this.isMobile=Lo()||Mo()}get(){return oc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){ce(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new ht(3e4,6e4);function _e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ee(t,e,n,r,s={}){return xs(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ut(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return Do()||(l.referrerPolicy="no-referrer"),Rs.fetch()(Ls(t,t.config.apiHost,n,a),l)})}async function xs(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cc),e);try{const s=new dc(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw St(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw St(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw St(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw St(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Os(t,h,l);K(t,h)}}catch(s){if(s instanceof ve)throw s;K(t,"network-request-failed",{message:String(s)})}}async function ft(t,e,n,r,s={}){const i=await Ee(t,e,n,r,s);return"mfaPendingCredential"in i&&K(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ls(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vn(t.config,s):`${t.config.apiScheme}://${s}`}function uc(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Z(this.auth,"network-request-failed")),lc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function St(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Z(t,e,r);return s.customData._tokenResponse=n,s}function Cr(t){return t!==void 0&&t.enterprise!==void 0}class hc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return uc(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fc(t,e){return Ee(t,"GET","/v2/recaptchaConfig",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t,e){return Ee(t,"POST","/v1/accounts:delete",e)}async function Ds(t,e){return Ee(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mc(t,e=!1){const n=le(t),r=await n.getIdToken(e),s=zn(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:rt(hn(s.auth_time)),issuedAtTime:rt(hn(s.iat)),expirationTime:rt(hn(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function hn(t){return Number(t)*1e3}function zn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kt("JWT malformed, contained fewer than 3 sections"),null;try{const s=ys(n);return s?JSON.parse(s):(kt("Failed to decode base64 JWT payload"),null)}catch(s){return kt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kr(t){const e=zn(t);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ve&&gc(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=rt(this.lastLoginAt),this.creationTime=rt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ot(t,Ds(n,{idToken:r}));v(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ns(i.providerUserInfo):[],a=yc(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Cn(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function bc(t){const e=le(t);await Mt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yc(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ns(t){return t.map(e=>{var{providerId:n}=e,r=jn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t,e){const n=await xs(t,{},async()=>{const r=ut({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ls(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rs.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _c(t,e){return Ee(t,"POST","/v2/accounts:revokeToken",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){v(e.length!==0,"internal-error");const n=kr(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vc(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $e;return r&&(v(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(v(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(v(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $e,this.toJSON())}_performRefresh(){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,e){v(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class re{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Cn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ot(this,this.stsTokenManager.getToken(this.auth,e));return v(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mc(this,e)}reload(){return bc(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(X(this.auth.app))return Promise.reject(ie(this.auth));const e=await this.getIdToken();return await ot(this,pc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:A,emailVerified:W,isAnonymous:L,providerData:q,stsTokenManager:J}=n;v(A&&J,e,"internal-error");const Me=$e.fromJSON(this.name,J);v(typeof A=="string",e,"internal-error"),ue(f,e.name),ue(y,e.name),v(typeof W=="boolean",e,"internal-error"),v(typeof L=="boolean",e,"internal-error"),ue(g,e.name),ue(p,e.name),ue(w,e.name),ue(m,e.name),ue(S,e.name),ue(k,e.name);const Be=new re({uid:A,auth:e,email:y,emailVerified:W,displayName:f,isAnonymous:L,photoURL:p,phoneNumber:g,tenantId:w,stsTokenManager:Me,createdAt:S,lastLoginAt:k});return q&&Array.isArray(q)&&(Be.providerData=q.map(Io=>Object.assign({},Io))),m&&(Be._redirectEventId=m),Be}static async _fromIdTokenResponse(e,n,r=!1){const s=new $e;s.updateFromServerResponse(n);const i=new re({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mt(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];v(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ns(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new $e;a.updateFromIdToken(r);const c=new re({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Cn(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map;function se(t){ce(t instanceof Function,"Expected a class definition");let e=Ar.get(t);return e?(ce(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ar.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ms.type="NONE";const Pr=Ms;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e,n){return`firebase:${t}:${e}:${n}`}class je{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=At(this.userKey,s.apiKey,i),this.fullPersistenceKey=At("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new je(se(Pr),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||se(Pr);const o=At(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const f=re._fromJSON(e,h);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new je(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new je(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($s(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hs(e))return"Blackberry";if(Vs(e))return"Webos";if(Us(e))return"Safari";if((e.includes("chrome/")||Fs(e))&&!e.includes("edge/"))return"Chrome";if(js(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Bs(t=N()){return/firefox\//i.test(t)}function Us(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fs(t=N()){return/crios\//i.test(t)}function $s(t=N()){return/iemobile/i.test(t)}function js(t=N()){return/android/i.test(t)}function Hs(t=N()){return/blackberry/i.test(t)}function Vs(t=N()){return/webos/i.test(t)}function Wn(t=N()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ec(t=N()){var e;return Wn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ic(){return Bo()&&document.documentMode===10}function zs(t=N()){return Wn(t)||js(t)||Vs(t)||Hs(t)||/windows phone/i.test(t)||$s(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t,e=[]){let n;switch(t){case"Browser":n=Or(N());break;case"Worker":n=`${Or(N())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(t,e={}){return Ee(t,"GET","/v2/passwordPolicy",_e(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=6;class kc{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Cc,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rr(this),this.idTokenSubscription=new Rr(this),this.beforeStateQueue=new Tc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=se(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await je.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ds(this,{idToken:e}),r=await re._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(X(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ac()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(X(this.app))return Promise.reject(ie(this));const n=e?le(e):null;return n&&v(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return X(this.app)?Promise.reject(ie(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return X(this.app)?Promise.reject(ie(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(se(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sc(this),n=new kc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _c(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&se(e)||this._popupRedirectResolver;v(n,this,"argument-error"),this.redirectPersistenceManager=await je.create(this,[se(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ws(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Le(t){return le(t)}class Rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=zo(n=>this.observer=n)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pc(t){Kt=t}function qs(t){return Kt.loadJS(t)}function Oc(){return Kt.recaptchaEnterpriseScript}function Rc(){return Kt.gapiScript}function xc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Lc="recaptcha-enterprise",Dc="NO_RECAPTCHA";class Nc{constructor(e){this.type=Lc,this.auth=Le(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{fc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new hc(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Cr(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Dc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Cr(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Oc();c.length!==0&&(c+=a),qs(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xr(t,e,n,r=!1){const s=new Nc(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kn(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await xr(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await xr(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e){const n=Ss(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Lt(i,e??{}))return s;K(s,"already-initialized")}return n.initialize({options:e})}function Bc(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(se);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uc(t,e,n){const r=Le(t);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ks(e),{host:o,port:a}=Fc(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$c()}function Ks(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fc(t){const e=Ks(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lr(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lr(o)}}}function Lr(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $c(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ne("not implemented")}_getIdTokenResponse(e){return ne("not implemented")}_linkToIdToken(e,n){return ne("not implemented")}_getReauthenticationResolver(e){return ne("not implemented")}}async function jc(t,e){return Ee(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e){return ft(t,"POST","/v1/accounts:signInWithPassword",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t,e){return ft(t,"POST","/v1/accounts:signInWithEmailLink",_e(t,e))}async function zc(t,e){return ft(t,"POST","/v1/accounts:signInWithEmailLink",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends qn{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new at(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new at(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kn(e,n,"signInWithPassword",Hc);case"emailLink":return Vc(e,{email:this._email,oobCode:this._password});default:K(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kn(e,r,"signUpPassword",jc);case"emailLink":return zc(e,{idToken:n,email:this._email,oobCode:this._password});default:K(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(t,e){return ft(t,"POST","/v1/accounts:signInWithIdp",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="http://localhost";class Ae extends qn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ae(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):K("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jn(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ae(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return He(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,He(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,He(e,n)}buildRequest(){const e={requestUri:Wc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ut(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kc(t){const e=tt(nt(t)).link,n=e?tt(nt(e)).deep_link_id:null,r=tt(nt(t)).deep_link_id;return(r?tt(nt(r)).link:null)||r||n||e||t}class Kn{constructor(e){var n,r,s,i,o,a;const c=tt(nt(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=qc((s=c.mode)!==null&&s!==void 0?s:null);v(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Kc(e);try{return new Kn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(){this.providerId=Ge.PROVIDER_ID}static credential(e,n){return at._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kn.parseLink(n);return v(r,"argument-error"),at._fromEmailAndCode(e,r.code,r.tenantId)}}Ge.PROVIDER_ID="password";Ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Gs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends pt{constructor(){super("facebook.com")}static credential(e){return Ae._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return he.credential(e.oauthAccessToken)}catch{return null}}}he.FACEBOOK_SIGN_IN_METHOD="facebook.com";he.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ae._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fe.credential(n,r)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends pt{constructor(){super("github.com")}static credential(e){return Ae._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pe.credentialFromTaggedObject(e)}static credentialFromError(e){return pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pe.credential(e.oauthAccessToken)}catch{return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com";pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends pt{constructor(){super("twitter.com")}static credential(e,n){return Ae._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return me.credential(n,r)}catch{return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com";me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gc(t,e){return ft(t,"POST","/v1/accounts:signUp",_e(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await re._fromIdTokenResponse(e,r,s),o=Dr(r);return new Pe({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Dr(r);return new Pe({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Dr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ve{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bt(e,n,r,s)}}function Js(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bt._fromErrorAndOperation(t,i,e,r):i})}async function Jc(t,e,n=!1){const r=await ot(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pe._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yc(t,e,n=!1){const{auth:r}=t;if(X(r.app))return Promise.reject(ie(r));const s="reauthenticate";try{const i=await ot(t,Js(r,s,e,t),n);v(i.idToken,r,"internal-error");const o=zn(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),Pe._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&K(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(X(t.app))return Promise.reject(ie(t));const r="signIn",s=await Js(t,r,e),i=await Pe._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Xc(t,e){return Ys(Le(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t){const e=Le(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rp(t,e,n){if(X(t.app))return Promise.reject(ie(t));const r=Le(t),o=await kn(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gc).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Xs(t),c}),a=await Pe._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function xp(t,e,n){return X(t.app)?Promise.reject(ie(t)):Xc(le(t),Ge.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xs(t),r})}function Zc(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function Qc(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function Lp(t,e,n,r){return le(t).onAuthStateChanged(e,n,r)}function Dp(t){return le(t).signOut()}const Ut="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ut,"1"),this.storage.removeItem(Ut),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=1e3,tl=10;class Qs extends Zs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ic()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tl):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},el)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qs.type="LOCAL";const nl=Qs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Zs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ei.type="SESSION";const ti=ei;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await rl(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Gn("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const y=f;if(y.data.eventId===l)switch(y.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(y.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return window}function il(t){Q().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return typeof Q().WorkerGlobalScope<"u"&&typeof Q().importScripts=="function"}async function ol(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function al(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cl(){return ni()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="firebaseLocalStorageDb",ll=1,Ft="firebaseLocalStorage",si="fbase_key";class mt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jt(t,e){return t.transaction([Ft],e?"readwrite":"readonly").objectStore(Ft)}function ul(){const t=indexedDB.deleteDatabase(ri);return new mt(t).toPromise()}function An(){const t=indexedDB.open(ri,ll);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ft,{keyPath:si})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ft)?e(r):(r.close(),await ul(),e(await An()))})})}async function Nr(t,e,n){const r=Jt(t,!0).put({[si]:e,value:n});return new mt(r).toPromise()}async function dl(t,e){const n=Jt(t,!1).get(e),r=await new mt(n).toPromise();return r===void 0?null:r.value}function Mr(t,e){const n=Jt(t,!0).delete(e);return new mt(n).toPromise()}const hl=800,fl=3;class ii{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await An(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ni()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gt._getInstance(cl()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ol(),!this.activeServiceWorker)return;this.sender=new sl(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||al()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await An();return await Nr(e,Ut,"1"),await Mr(e,Ut),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dl(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jt(s,!1).getAll();return new mt(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ii.type="LOCAL";const pl=ii;new ht(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t,e){return e?se(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends qn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return He(e,this._buildIdpRequest())}_linkToIdToken(e,n){return He(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return He(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gl(t){return Ys(t.auth,new Jn(t),t.bypassAuthState)}function wl(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Yc(n,new Jn(t),t.bypassAuthState)}async function bl(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Jc(n,new Jn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gl;case"linkViaPopup":case"linkViaRedirect":return bl;case"reauthViaPopup":case"reauthViaRedirect":return wl;default:K(this.auth,"internal-error")}}resolve(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new ht(2e3,1e4);class Ue extends oi{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ue.currentPopupAction&&Ue.currentPopupAction.cancel(),Ue.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){ce(this.filter.length===1,"Popup operations only handle one event");const e=Gn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Z(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Z(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ue.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Z(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yl.get())};e()}}Ue.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="pendingRedirect",Pt=new Map;class _l extends oi{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pt.get(this.auth._key());if(!e){try{const r=await El(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pt.set(this.auth._key(),e)}return this.bypassAuthState||Pt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function El(t,e){const n=Sl(e),r=Tl(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Il(t,e){Pt.set(t._key(),e)}function Tl(t){return se(t._redirectPersistence)}function Sl(t){return At(vl,t.config.apiKey,t.name)}async function Cl(t,e,n=!1){if(X(t.app))return Promise.reject(ie(t));const r=Le(t),s=ml(r,e),o=await new _l(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=10*60*1e3;class Al{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ai(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Z(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Br(e))}saveEventToCache(e){this.cachedEventUids.add(Br(e)),this.lastProcessedEventTime=Date.now()}}function Br(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ai({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ai(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ol(t,e={}){return Ee(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xl=/^https?/;async function Ll(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ol(t);for(const n of e)try{if(Dl(n))return}catch{}K(t,"unauthorized-domain")}function Dl(t){const e=Sn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xl.test(n))return!1;if(Rl.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new ht(3e4,6e4);function Ur(){const t=Q().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ml(t){return new Promise((e,n)=>{var r,s,i;function o(){Ur(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ur(),n(Z(t,"network-request-failed"))},timeout:Nl.get()})}if(!((s=(r=Q().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Q().gapi)===null||i===void 0)&&i.load)o();else{const a=xc("iframefcb");return Q()[a]=()=>{gapi.load?o():n(Z(t,"network-request-failed"))},qs(`${Rc()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ot=null,e})}let Ot=null;function Bl(t){return Ot=Ot||Ml(t),Ot}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=new ht(5e3,15e3),Fl="__/auth/iframe",$l="emulator/auth/iframe",jl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vl(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vn(e,$l):`https://${t.config.authDomain}/${Fl}`,r={apiKey:e.apiKey,appName:t.name,v:dt},s=Hl.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ut(r).slice(1)}`}async function zl(t){const e=await Bl(t),n=Q().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Vl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jl,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Z(t,"network-request-failed"),a=Q().setTimeout(()=>{i(o)},Ul.get());function c(){Q().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ql=500,Kl=600,Gl="_blank",Jl="http://localhost";class Fr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yl(t,e,n,r=ql,s=Kl){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Wl),{width:r.toString(),height:s.toString(),top:i,left:o}),l=N().toLowerCase();n&&(a=Fs(l)?Gl:n),Bs(l)&&(e=e||Jl,c.scrollbars="yes");const h=Object.entries(c).reduce((y,[g,p])=>`${y}${g}=${p},`,"");if(Ec(l)&&a!=="_self")return Xl(e||"",a),new Fr(null);const f=window.open(e||"",a,h);v(f,t,"popup-blocked");try{f.focus()}catch{}return new Fr(f)}function Xl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl="__/auth/handler",Ql="emulator/auth/handler",eu=encodeURIComponent("fac");async function $r(t,e,n,r,s,i){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:dt,eventId:s};if(e instanceof Gs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof pt){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${eu}=${encodeURIComponent(c)}`:"";return`${tu(t)}?${ut(a).slice(1)}${l}`}function tu({config:t}){return t.emulator?Vn(t,Ql):`https://${t.authDomain}/${Zl}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="webStorageSupport";class nu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ti,this._completeRedirectFn=Cl,this._overrideRedirectResult=Il}async _openPopup(e,n,r,s){var i;ce((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $r(e,n,r,Sn(),s);return Yl(e,o,Gn())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $r(e,n,r,Sn(),s);return il(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ce(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zl(e),r=new Al(e);return n.register("authEvent",s=>(v(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fn,{type:fn},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[fn];o!==void 0&&n(!!o),K(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ll(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zs()||Us()||Wn()}}const ru=nu;var jr="@firebase/auth",Hr="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ou(t){st(new We("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ws(t)},l=new Ac(r,s,i,c);return Bc(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),st(new We("auth-internal",e=>{const n=Le(e.getProvider("auth").getImmediate());return(r=>new su(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(jr,Hr,iu(t)),Fe(jr,Hr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=5*60,cu=_s("authIdTokenMaxAge")||au;let Vr=null;const lu=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cu)return;const s=n==null?void 0:n.token;Vr!==s&&(Vr=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Np(t=Wa()){const e=Ss(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mc(t,{popupRedirectResolver:ru,persistence:[pl,nl,ti]}),r=_s("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lu(i.toString());Qc(n,o,()=>o(n.currentUser)),Zc(n,a=>o(a))}}const s=Ro("auth");return s&&Uc(n,`http://${s}`),n}function uu(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Pc({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Z("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uu().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ou("Browser");/*!
* sweetalert2 v11.14.1
* Released under the MIT License.
*/function ci(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function du(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function zr(t,e){return t.get(ci(t,e))}function hu(t,e,n){du(t,e),e.set(t,n)}function fu(t,e,n){return t.set(ci(t,e),n),n}const pu=100,b={},mu=()=>{b.previousActiveElement instanceof HTMLElement?(b.previousActiveElement.focus(),b.previousActiveElement=null):document.body&&document.body.focus()},gu=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;b.restoreFocusTimeout=setTimeout(()=>{mu(),e()},pu),window.scrollTo(n,r)}),li="swal2-",wu=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],u=wu.reduce((t,e)=>(t[e]=li+e,t),{}),bu=["success","warning","info","question","error"],$t=bu.reduce((t,e)=>(t[e]=li+e,t),{}),ui="SweetAlert2:",Yn=t=>t.charAt(0).toUpperCase()+t.slice(1),F=t=>{console.warn(`${ui} ${typeof t=="object"?t.join(" "):t}`)},De=t=>{console.error(`${ui} ${t}`)},Wr=[],yu=t=>{Wr.includes(t)||(Wr.push(t),F(t))},di=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yu(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Yt=t=>typeof t=="function"?t():t,Xn=t=>t&&typeof t.toPromise=="function",gt=t=>Xn(t)?t.toPromise():Promise.resolve(t),Zn=t=>t&&Promise.resolve(t)===t,$=()=>document.body.querySelector(`.${u.container}`),wt=t=>{const e=$();return e?e.querySelector(t):null},V=t=>wt(`.${t}`),I=()=>V(u.popup),bt=()=>V(u.icon),vu=()=>V(u["icon-content"]),hi=()=>V(u.title),Qn=()=>V(u["html-container"]),fi=()=>V(u.image),er=()=>V(u["progress-steps"]),Xt=()=>V(u["validation-message"]),ee=()=>wt(`.${u.actions} .${u.confirm}`),Je=()=>wt(`.${u.actions} .${u.cancel}`),Ne=()=>wt(`.${u.actions} .${u.deny}`),_u=()=>V(u["input-label"]),Ye=()=>wt(`.${u.loader}`),yt=()=>V(u.actions),pi=()=>V(u.footer),Zt=()=>V(u["timer-progress-bar"]),tr=()=>V(u.close),Eu=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,nr=()=>{const t=I();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,o)=>{const a=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return a>c?1:a<c?-1:0}),r=t.querySelectorAll(Eu),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>M(i))},rr=()=>oe(document.body,u.shown)&&!oe(document.body,u["toast-shown"])&&!oe(document.body,u["no-backdrop"]),Qt=()=>{const t=I();return t?oe(t,u.toast):!1},Iu=()=>{const t=I();return t?t.hasAttribute("data-loading"):!1},z=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},oe=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},Tu=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(u).includes(n)&&!Object.values($t).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},H=(t,e,n)=>{if(Tu(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){F(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}E(t,r)}},en=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${u.popup} > .${u[e]}`);case"checkbox":return t.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return t.querySelector(`.${u.popup} > .${u.radio} input:checked`)||t.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return t.querySelector(`.${u.popup} > .${u.range} input`);default:return t.querySelector(`.${u.popup} > .${u.input}`)}},mi=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},gi=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},E=(t,e)=>{gi(t,e,!0)},te=(t,e)=>{gi(t,e,!1)},ge=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&oe(s,e))return s}},Ce=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},x=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},D=t=>{t&&(t.style.display="none")},sr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{vt(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},qr=(t,e,n,r)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,r)},vt=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?x(t,n):D(t)},M=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),Su=()=>!M(ee())&&!M(Ne())&&!M(Je()),Kr=t=>t.scrollHeight>t.clientHeight,wi=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},ir=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Zt();n&&M(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},Cu=()=>{const t=Zt();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},bi=()=>typeof window>"u"||typeof document>"u",ku=`
 <div aria-labelledby="${u.title}" aria-describedby="${u["html-container"]}" class="${u.popup}" tabindex="-1">
   <button type="button" class="${u.close}"></button>
   <ul class="${u["progress-steps"]}"></ul>
   <div class="${u.icon}"></div>
   <img class="${u.image}" />
   <h2 class="${u.title}" id="${u.title}"></h2>
   <div class="${u["html-container"]}" id="${u["html-container"]}"></div>
   <input class="${u.input}" id="${u.input}" />
   <input type="file" class="${u.file}" />
   <div class="${u.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${u.select}" id="${u.select}"></select>
   <div class="${u.radio}"></div>
   <label class="${u.checkbox}">
     <input type="checkbox" id="${u.checkbox}" />
     <span class="${u.label}"></span>
   </label>
   <textarea class="${u.textarea}" id="${u.textarea}"></textarea>
   <div class="${u["validation-message"]}" id="${u["validation-message"]}"></div>
   <div class="${u.actions}">
     <div class="${u.loader}"></div>
     <button type="button" class="${u.confirm}"></button>
     <button type="button" class="${u.deny}"></button>
     <button type="button" class="${u.cancel}"></button>
   </div>
   <div class="${u.footer}"></div>
   <div class="${u["timer-progress-bar-container"]}">
     <div class="${u["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Au=()=>{const t=$();return t?(t.remove(),te([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},Ie=()=>{b.currentInstance.resetValidationMessage()},Pu=()=>{const t=I(),e=ge(t,u.input),n=ge(t,u.file),r=t.querySelector(`.${u.range} input`),s=t.querySelector(`.${u.range} output`),i=ge(t,u.select),o=t.querySelector(`.${u.checkbox} input`),a=ge(t,u.textarea);e.oninput=Ie,n.onchange=Ie,i.onchange=Ie,o.onchange=Ie,a.oninput=Ie,r.oninput=()=>{Ie(),s.value=r.value},r.onchange=()=>{Ie(),s.value=r.value}},Ou=t=>typeof t=="string"?document.querySelector(t):t,Ru=t=>{const e=I();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},xu=t=>{window.getComputedStyle(t).direction==="rtl"&&E($(),u.rtl)},Lu=t=>{const e=Au();if(bi()){De("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=u.container,e&&E(n,u["no-transition"]),z(n,ku);const r=Ou(t.target);r.appendChild(n),Ru(t),xu(r),Pu()},or=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?Du(t,e):t&&z(e,t)},Du=(t,e)=>{t.jquery?Nu(e,t):z(e,t.toString())},Nu=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Oe=(()=>{if(bi())return!1;const t=document.createElement("div");return typeof t.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof t.style.animation<"u"?"animationend":!1})(),Mu=(t,e)=>{const n=yt(),r=Ye();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?D(n):x(n),H(n,e,"actions"),Bu(n,r,e),z(r,e.loaderHtml||""),H(r,e,"loader"))};function Bu(t,e,n){const r=ee(),s=Ne(),i=Je();!r||!s||!i||(pn(r,"confirm",n),pn(s,"deny",n),pn(i,"cancel",n),Uu(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e))))}function Uu(t,e,n,r){if(!r.buttonsStyling){te([t,e,n],u.styled);return}E([t,e,n],u.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,E(t,u["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,E(e,u["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,E(n,u["default-outline"]))}function pn(t,e,n){const r=Yn(e);vt(t,n[`show${r}Button`],"inline-block"),z(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=u[e],H(t,n,`${e}Button`)}const Fu=(t,e)=>{const n=tr();n&&(z(n,e.closeButtonHtml||""),H(n,e,"closeButton"),vt(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},$u=(t,e)=>{const n=$();n&&(ju(n,e.backdrop),Hu(n,e.position),Vu(n,e.grow),H(n,e,"container"))};function ju(t,e){typeof e=="string"?t.style.background=e:e||E([document.documentElement,document.body],u["no-backdrop"])}function Hu(t,e){e&&(e in u?E(t,u[e]):(F('The "position" parameter is not valid, defaulting to "center"'),E(t,u.center)))}function Vu(t,e){e&&E(t,u[`grow-${e}`])}var C={innerParams:new WeakMap,domCache:new WeakMap};const zu=["input","file","range","select","radio","checkbox","textarea"],Wu=(t,e)=>{const n=I();if(!n)return;const r=C.innerParams.get(t),s=!r||e.input!==r.input;zu.forEach(i=>{const o=ge(n,u[i]);o&&(Gu(i,e.inputAttributes),o.className=u[i],s&&D(o))}),e.input&&(s&&qu(e),Ju(e))},qu=t=>{if(!t.input)return;if(!P[t.input]){De(`Unexpected type of input! Expected ${Object.keys(P).join(" | ")}, got "${t.input}"`);return}const e=yi(t.input);if(!e)return;const n=P[t.input](e,t);x(e),t.inputAutoFocus&&setTimeout(()=>{mi(n)})},Ku=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},Gu=(t,e)=>{const n=I();if(!n)return;const r=en(n,t);if(r){Ku(r);for(const s in e)r.setAttribute(s,e[s])}},Ju=t=>{if(!t.input)return;const e=yi(t.input);e&&H(e,t,"input")},ar=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},_t=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=u["input-label"];r.setAttribute("for",t.id),r.className=s,typeof n.customClass=="object"&&E(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},yi=t=>{const e=I();if(e)return ge(e,u[t]||u.input)},jt=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Zn(e)||F(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},P={};P.text=P.email=P.password=P.number=P.tel=P.url=P.search=P.date=P["datetime-local"]=P.time=P.week=P.month=(t,e)=>(jt(t,e.inputValue),_t(t,t,e),ar(t,e),t.type=e.input,t);P.file=(t,e)=>(_t(t,t,e),ar(t,e),t);P.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return jt(n,e.inputValue),n.type=e.input,jt(r,e.inputValue),_t(n,t,e),t};P.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");z(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return _t(t,t,e),t};P.radio=t=>(t.textContent="",t);P.checkbox=(t,e)=>{const n=en(I(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return z(r,e.inputPlaceholder||e.inputLabel),n};P.textarea=(t,e)=>{jt(t,e.inputValue),ar(t,e),_t(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(I()).width),s=()=>{if(!document.body.contains(t))return;const i=t.offsetWidth+n(t);i>r?I().style.width=`${i}px`:Ce(I(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Yu=(t,e)=>{const n=Qn();n&&(sr(n),H(n,e,"htmlContainer"),e.html?(or(e.html,n),x(n,"block")):e.text?(n.textContent=e.text,x(n,"block")):D(n),Wu(t,e))},Xu=(t,e)=>{const n=pi();n&&(sr(n),vt(n,e.footer,"block"),e.footer&&or(e.footer,n),H(n,e,"footer"))},Zu=(t,e)=>{const n=C.innerParams.get(t),r=bt();if(r){if(n&&e.icon===n.icon){Jr(r,e),Gr(r,e);return}if(!e.icon&&!e.iconHtml){D(r);return}if(e.icon&&Object.keys($t).indexOf(e.icon)===-1){De(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),D(r);return}x(r),Jr(r,e),Gr(r,e),E(r,e.showClass&&e.showClass.icon)}},Gr=(t,e)=>{for(const[n,r]of Object.entries($t))e.icon!==n&&te(t,r);E(t,e.icon&&$t[e.icon]),nd(t,e),Qu(),H(t,e,"icon")},Qu=()=>{const t=I();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},ed=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,td=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Jr=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=Yr(e.iconHtml):e.icon==="success"?(r=ed,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=td:e.icon&&(r=Yr({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&z(t,r)},nd=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])qr(t,n,"background-color",e.iconColor);qr(t,".swal2-success-ring","border-color",e.iconColor)}},Yr=t=>`<div class="${u["icon-content"]}">${t}</div>`,rd=(t,e)=>{const n=fi();if(n){if(!e.imageUrl){D(n);return}x(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Ce(n,"width",e.imageWidth),Ce(n,"height",e.imageHeight),n.className=u.image,H(n,e,"image")}},sd=(t,e)=>{const n=$(),r=I();if(!(!n||!r)){if(e.toast){Ce(n,"width",e.width),r.style.width="100%";const s=Ye();s&&r.insertBefore(s,bt())}else Ce(r,"width",e.width);Ce(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),D(Xt()),id(r,e)}},id=(t,e)=>{const n=e.showClass||{};t.className=`${u.popup} ${M(t)?n.popup:""}`,e.toast?(E([document.documentElement,document.body],u["toast-shown"]),E(t,u.toast)):E(t,u.modal),H(t,e,"popup"),typeof e.customClass=="string"&&E(t,e.customClass),e.icon&&E(t,u[`icon-${e.icon}`])},od=(t,e)=>{const n=er();if(!n)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){D(n);return}x(n),n.textContent="",s>=r.length&&F("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const a=ad(i);if(n.appendChild(a),o===s&&E(a,u["active-progress-step"]),o!==r.length-1){const c=cd(e);n.appendChild(c)}})},ad=t=>{const e=document.createElement("li");return E(e,u["progress-step"]),z(e,t),e},cd=t=>{const e=document.createElement("li");return E(e,u["progress-step-line"]),t.progressStepsDistance&&Ce(e,"width",t.progressStepsDistance),e},ld=(t,e)=>{const n=hi();n&&(sr(n),vt(n,e.title||e.titleText,"block"),e.title&&or(e.title,n),e.titleText&&(n.innerText=e.titleText),H(n,e,"title"))},vi=(t,e)=>{sd(t,e),$u(t,e),od(t,e),Zu(t,e),rd(t,e),ld(t,e),Fu(t,e),Yu(t,e),Mu(t,e),Xu(t,e);const n=I();typeof e.didRender=="function"&&n&&e.didRender(n),b.eventEmitter.emit("didRender",n)},ud=()=>M(I()),_i=()=>{var t;return(t=ee())===null||t===void 0?void 0:t.click()},dd=()=>{var t;return(t=Ne())===null||t===void 0?void 0:t.click()},hd=()=>{var t;return(t=Je())===null||t===void 0?void 0:t.click()},Xe=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ei=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},fd=(t,e,n)=>{Ei(t),e.toast||(t.keydownHandler=r=>md(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:I(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},Pn=(t,e)=>{var n;const r=nr();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=I())===null||n===void 0||n.focus()},Ii=["ArrowRight","ArrowDown"],pd=["ArrowLeft","ArrowUp"],md=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?gd(e,t):e.key==="Tab"?wd(e):[...Ii,...pd].includes(e.key)?bd(e.key):e.key==="Escape"&&yd(e,t,n)))},gd=(t,e)=>{if(!Yt(e.allowEnterKey))return;const n=en(I(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;_i(),t.preventDefault()}},wd=t=>{const e=t.target,n=nr();let r=-1;for(let s=0;s<n.length;s++)if(e===n[s]){r=s;break}t.shiftKey?Pn(r,-1):Pn(r,1),t.stopPropagation(),t.preventDefault()},bd=t=>{const e=yt(),n=ee(),r=Ne(),s=Je();if(!e||!n||!r||!s)return;const i=[n,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=Ii.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let c=0;c<e.children.length;c++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&M(a))break}a instanceof HTMLButtonElement&&a.focus()}},yd=(t,e,n)=>{Yt(e.allowEscapeKey)&&(t.preventDefault(),n(Xe.esc))};var qe={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const vd=()=>{const t=$();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Ti=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Si=typeof window<"u"&&!!window.GestureEvent,_d=()=>{if(Si&&!oe(document.body,u.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,E(document.body,u.iosfix),Ed()}},Ed=()=>{const t=$();if(!t)return;let e;t.ontouchstart=n=>{e=Id(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Id=t=>{const e=t.target,n=$(),r=Qn();return!n||!r||Td(t)||Sd(t)?!1:e===n||!Kr(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Kr(r)&&r.contains(e))},Td=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Sd=t=>t.touches&&t.touches.length>1,Cd=()=>{if(oe(document.body,u.iosfix)){const t=parseInt(document.body.style.top,10);te(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},kd=()=>{const t=document.createElement("div");t.className=u["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Ve=null;const Ad=t=>{Ve===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Ve=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ve+kd()}px`)},Pd=()=>{Ve!==null&&(document.body.style.paddingRight=`${Ve}px`,Ve=null)};function Ci(t,e,n,r){Qt()?Xr(t,r):(gu(n).then(()=>Xr(t,r)),Ei(b)),Si?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),rr()&&(Pd(),Cd(),Ti()),Od()}function Od(){te([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function we(t){t=xd(t);const e=qe.swalPromiseResolve.get(this),n=Rd(this);this.isAwaitingPromise?t.isDismissed||(Et(this),e(t)):n&&e(t)}const Rd=t=>{const e=I();if(!e)return!1;const n=C.innerParams.get(t);if(!n||oe(e,n.hideClass.popup))return!1;te(e,n.showClass.popup),E(e,n.hideClass.popup);const r=$();return te(r,n.showClass.backdrop),E(r,n.hideClass.backdrop),Ld(t,e,n),!0};function ki(t){const e=qe.swalPromiseReject.get(this);Et(this),e&&e(t)}const Et=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,C.innerParams.get(t)||t._destroy())},xd=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Ld=(t,e,n)=>{const r=$(),s=Oe&&wi(e);typeof n.willClose=="function"&&n.willClose(e),b.eventEmitter.emit("willClose",e),s?Dd(t,e,r,n.returnFocus,n.didClose):Ci(t,r,n.returnFocus,n.didClose)},Dd=(t,e,n,r,s)=>{Oe&&(b.swalCloseEventFinishedCallback=Ci.bind(null,t,n,r,s),e.addEventListener(Oe,function(i){i.target===e&&(b.swalCloseEventFinishedCallback(),delete b.swalCloseEventFinishedCallback)}))},Xr=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),b.eventEmitter.emit("didClose"),t._destroy&&t._destroy()})},Ke=t=>{let e=I();if(e||new Rn,e=I(),!e)return;const n=Ye();Qt()?D(bt()):Nd(e,t),x(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Nd=(t,e)=>{const n=yt(),r=Ye();!n||!r||(!e&&M(ee())&&(e=ee()),x(n),e&&(D(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),E([t,n],u.loading))},Md=(t,e)=>{e.input==="select"||e.input==="radio"?jd(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Xn(e.inputValue)||Zn(e.inputValue))&&(Ke(ee()),Hd(t,e))},Bd=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Ud(n);case"radio":return Fd(n);case"file":return $d(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Ud=t=>t.checked?1:0,Fd=t=>t.checked?t.value:null,$d=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,jd=(t,e)=>{const n=I();if(!n)return;const r=s=>{e.input==="select"?Vd(n,Ht(s),e):e.input==="radio"&&zd(n,Ht(s),e)};Xn(e.inputOptions)||Zn(e.inputOptions)?(Ke(ee()),gt(e.inputOptions).then(s=>{t.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):De(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Hd=(t,e)=>{const n=t.getInput();n&&(D(n),gt(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,x(n),n.focus(),t.hideLoading()}).catch(r=>{De(`Error in inputValue promise: ${r}`),n.value="",x(n),n.focus(),t.hideLoading()}))};function Vd(t,e,n){const r=ge(t,u.select);if(!r)return;const s=(i,o,a)=>{const c=document.createElement("option");c.value=a,z(c,o),c.selected=Ai(a,n.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],a=i[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),a.forEach(l=>s(c,l[1],l[0]))}else s(r,a,o)}),r.focus()}function zd(t,e,n){const r=ge(t,u.radio);if(!r)return;e.forEach(i=>{const o=i[0],a=i[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=u.radio,c.value=o,Ai(o,n.inputValue)&&(c.checked=!0);const h=document.createElement("span");z(h,a),h.className=u.label,l.appendChild(c),l.appendChild(h),r.appendChild(l)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const Ht=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=Ht(s)),e.push([r,s])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=Ht(r)),e.push([n,r])}),e},Ai=(t,e)=>!!e&&e.toString()===t.toString(),Wd=t=>{const e=C.innerParams.get(t);t.disableButtons(),e.input?Pi(t,"confirm"):lr(t,!0)},qd=t=>{const e=C.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Pi(t,"deny"):cr(t,!1)},Kd=(t,e)=>{t.disableButtons(),e(Xe.cancel)},Pi=(t,e)=>{const n=C.innerParams.get(t);if(!n.input){De(`The "input" parameter is needed to be set when using returnInputValueOn${Yn(e)}`);return}const r=t.getInput(),s=Bd(t,n);n.inputValidator?Gd(t,s,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?cr(t,s):lr(t,s)},Gd=(t,e,n)=>{const r=C.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>gt(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?cr(t,e):lr(t,e)})},cr=(t,e)=>{const n=C.innerParams.get(t||void 0);n.showLoaderOnDeny&&Ke(Ne()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>gt(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),Et(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>Oi(t||void 0,s))):t.close({isDenied:!0,value:e})},Zr=(t,e)=>{t.close({isConfirmed:!0,value:e})},Oi=(t,e)=>{t.rejectPromise(e)},lr=(t,e)=>{const n=C.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Ke(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>gt(n.preConfirm(e,n.validationMessage))).then(s=>{M(Xt())||s===!1?(t.hideLoading(),Et(t)):Zr(t,typeof s>"u"?e:s)}).catch(s=>Oi(t||void 0,s))):Zr(t,e)};function Vt(){const t=C.innerParams.get(this);if(!t)return;const e=C.domCache.get(this);D(e.loader),Qt()?t.icon&&x(bt()):Jd(e),te([e.popup,e.actions],u.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Jd=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?x(e[0],"inline-block"):Su()&&D(t.actions)};function Ri(){const t=C.innerParams.get(this),e=C.domCache.get(this);return e?en(e.popup,t.input):null}function xi(t,e,n){const r=C.domCache.get(t);e.forEach(s=>{r[s].disabled=n})}function Li(t,e){const n=I();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${u.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=e}else t.disabled=e}function Di(){xi(this,["confirmButton","denyButton","cancelButton"],!1)}function Ni(){xi(this,["confirmButton","denyButton","cancelButton"],!0)}function Mi(){Li(this.getInput(),!1)}function Bi(){Li(this.getInput(),!0)}function Ui(t){const e=C.domCache.get(this),n=C.innerParams.get(this);z(e.validationMessage,t),e.validationMessage.className=u["validation-message"],n.customClass&&n.customClass.validationMessage&&E(e.validationMessage,n.customClass.validationMessage),x(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",u["validation-message"]),mi(r),E(r,u.inputerror))}function Fi(){const t=C.domCache.get(this);t.validationMessage&&D(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),te(e,u.inputerror))}const ze={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Yd=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Xd={allowEnterKey:void 0},Zd=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],$i=t=>Object.prototype.hasOwnProperty.call(ze,t),ji=t=>Yd.indexOf(t)!==-1,Hi=t=>Xd[t],Qd=t=>{$i(t)||F(`Unknown parameter "${t}"`)},eh=t=>{Zd.includes(t)&&F(`The parameter "${t}" is incompatible with toasts`)},th=t=>{const e=Hi(t);e&&di(t,e)},nh=t=>{t.backdrop===!1&&t.allowOutsideClick&&F('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)Qd(e),t.toast&&eh(e),th(e)};function Vi(t){const e=I(),n=C.innerParams.get(this);if(!e||oe(e,n.hideClass.popup)){F("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const r=rh(t),s=Object.assign({},n,r);vi(this,s),C.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const rh=t=>{const e={};return Object.keys(t).forEach(n=>{ji(n)?e[n]=t[n]:F(`Invalid parameter to update: ${n}`)}),e};function zi(){const t=C.domCache.get(this),e=C.innerParams.get(this);if(!e){Wi(this);return}t.popup&&b.swalCloseEventFinishedCallback&&(b.swalCloseEventFinishedCallback(),delete b.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),b.eventEmitter.emit("didDestroy"),sh(this)}const sh=t=>{Wi(t),delete t.params,delete b.keydownHandler,delete b.keydownTarget,delete b.currentInstance},Wi=t=>{t.isAwaitingPromise?(mn(C,t),t.isAwaitingPromise=!0):(mn(qe,t),mn(C,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},mn=(t,e)=>{for(const n in t)t[n].delete(e)};var ih=Object.freeze({__proto__:null,_destroy:zi,close:we,closeModal:we,closePopup:we,closeToast:we,disableButtons:Ni,disableInput:Bi,disableLoading:Vt,enableButtons:Di,enableInput:Mi,getInput:Ri,handleAwaitingPromise:Et,hideLoading:Vt,rejectPromise:ki,resetValidationMessage:Fi,showValidationMessage:Ui,update:Vi});const oh=(t,e,n)=>{t.toast?ah(t,e,n):(lh(e),uh(e),dh(t,e,n))},ah=(t,e,n)=>{e.popup.onclick=()=>{t&&(ch(t)||t.timer||t.input)||n(Xe.close)}},ch=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let zt=!1;const lh=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(zt=!0)}}},uh=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(zt=!0)}}},dh=(t,e,n)=>{e.container.onclick=r=>{if(zt){zt=!1;return}r.target===e.container&&Yt(t.allowOutsideClick)&&n(Xe.backdrop)}},hh=t=>typeof t=="object"&&t.jquery,Qr=t=>t instanceof Element||hh(t),fh=t=>{const e={};return typeof t[0]=="object"&&!Qr(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const s=t[r];typeof s=="string"||Qr(s)?e[n]=s:s!==void 0&&De(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function ph(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function mh(t){class e extends this{_main(r,s){return super._main(r,Object.assign({},t,s))}}return e}const gh=()=>b.timeout&&b.timeout.getTimerLeft(),qi=()=>{if(b.timeout)return Cu(),b.timeout.stop()},Ki=()=>{if(b.timeout){const t=b.timeout.start();return ir(t),t}},wh=()=>{const t=b.timeout;return t&&(t.running?qi():Ki())},bh=t=>{if(b.timeout){const e=b.timeout.increase(t);return ir(e,!0),e}},yh=()=>!!(b.timeout&&b.timeout.isRunning());let es=!1;const On={};function vh(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";On[t]=this,es||(document.body.addEventListener("click",_h),es=!0)}const _h=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in On){const r=e.getAttribute(n);if(r){On[n].fire({template:r});return}}};class Eh{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const s=function(){r.removeListener(e,s);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];n.apply(r,o)};this.on(e,s)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}b.eventEmitter=new Eh;const Ih=(t,e)=>{b.eventEmitter.on(t,e)},Th=(t,e)=>{b.eventEmitter.once(t,e)},Sh=(t,e)=>{if(!t){b.eventEmitter.reset();return}e?b.eventEmitter.removeListener(t,e):b.eventEmitter.removeAllListeners(t)};var Ch=Object.freeze({__proto__:null,argsToParams:fh,bindClickHandler:vh,clickCancel:hd,clickConfirm:_i,clickDeny:dd,enableLoading:Ke,fire:ph,getActions:yt,getCancelButton:Je,getCloseButton:tr,getConfirmButton:ee,getContainer:$,getDenyButton:Ne,getFocusableElements:nr,getFooter:pi,getHtmlContainer:Qn,getIcon:bt,getIconContent:vu,getImage:fi,getInputLabel:_u,getLoader:Ye,getPopup:I,getProgressSteps:er,getTimerLeft:gh,getTimerProgressBar:Zt,getTitle:hi,getValidationMessage:Xt,increaseTimer:bh,isDeprecatedParameter:Hi,isLoading:Iu,isTimerRunning:yh,isUpdatableParameter:ji,isValidParameter:$i,isVisible:ud,mixin:mh,off:Sh,on:Ih,once:Th,resumeTimer:Ki,showLoading:Ke,stopTimer:qi,toggleTimer:wh});class kh{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Gi=["swal-title","swal-html","swal-footer"],Ah=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Mh(n),Object.assign(Ph(n),Oh(n),Rh(n),xh(n),Lh(n),Dh(n),Nh(n,Gi))},Ph=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{Re(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(typeof ze[s]=="boolean"?e[s]=i!=="false":typeof ze[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},Oh=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},Rh=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{Re(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=r.innerHTML,e[`show${Yn(s)}Button`]=!0,r.hasAttribute("color")&&(e[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},xh=t=>{const e={},n=t.querySelector("swal-image");return n&&(Re(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Lh=t=>{const e={},n=t.querySelector("swal-icon");return n&&(Re(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Dh=t=>{const e={},n=t.querySelector("swal-input");n&&(Re(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{Re(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},Nh=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(Re(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},Mh=t=>{const e=Gi.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||F(`Unrecognized element <${r}>`)})},Re=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&F([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Ji=10,Bh=t=>{const e=$(),n=I();typeof t.willOpen=="function"&&t.willOpen(n),b.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;$h(e,n,t),setTimeout(()=>{Uh(e,n)},Ji),rr()&&(Fh(e,t.scrollbarPadding,s),vd()),!Qt()&&!b.previousActiveElement&&(b.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),b.eventEmitter.emit("didOpen",n),te(e,u["no-transition"])},Yi=t=>{const e=I();if(t.target!==e||!Oe)return;const n=$();e.removeEventListener(Oe,Yi),n.style.overflowY="auto"},Uh=(t,e)=>{Oe&&wi(e)?(t.style.overflowY="hidden",e.addEventListener(Oe,Yi)):t.style.overflowY="auto"},Fh=(t,e,n)=>{_d(),e&&n!=="hidden"&&Ad(n),setTimeout(()=>{t.scrollTop=0})},$h=(t,e,n)=>{E(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),x(e,"grid"),setTimeout(()=>{E(e,n.showClass.popup),e.style.removeProperty("opacity")},Ji)):x(e,"grid"),E([document.documentElement,document.body],u.shown),n.heightAuto&&n.backdrop&&!n.toast&&E([document.documentElement,document.body],u["height-auto"])};var ts={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function jh(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=ts.email),t.input==="url"&&(t.inputValidator=ts.url))}function Hh(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(F('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Vh(t){jh(t),t.showLoaderOnConfirm&&!t.preConfirm&&F(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Hh(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),Lu(t)}let Y;var Ct=new WeakMap;class O{constructor(){if(hu(this,Ct,void 0),typeof window>"u")return;Y=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));this.params=s,this.isAwaitingPromise=!1,fu(Ct,this,this._main(Y.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(nh(Object.assign({},n,e)),b.currentInstance){const i=qe.swalPromiseResolve.get(b.currentInstance),{isAwaitingPromise:o}=b.currentInstance;b.currentInstance._destroy(),o||i({isDismissed:!0}),rr()&&Ti()}b.currentInstance=Y;const r=Wh(e,n);Vh(r),Object.freeze(r),b.timeout&&(b.timeout.stop(),delete b.timeout),clearTimeout(b.restoreFocusTimeout);const s=qh(Y);return vi(Y,r),C.innerParams.set(Y,r),zh(Y,s,r)}then(e){return zr(Ct,this).then(e)}finally(e){return zr(Ct,this).finally(e)}}const zh=(t,e,n)=>new Promise((r,s)=>{const i=o=>{t.close({isDismissed:!0,dismiss:o})};qe.swalPromiseResolve.set(t,r),qe.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{Wd(t)},e.denyButton.onclick=()=>{qd(t)},e.cancelButton.onclick=()=>{Kd(t,i)},e.closeButton.onclick=()=>{i(Xe.close)},oh(n,e,i),fd(b,n,i),Md(t,n),Bh(n),Kh(b,n,i),Gh(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Wh=(t,e)=>{const n=Ah(t),r=Object.assign({},ze,e,n,t);return r.showClass=Object.assign({},ze.showClass,r.showClass),r.hideClass=Object.assign({},ze.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},qh=t=>{const e={popup:I(),container:$(),actions:yt(),confirmButton:ee(),denyButton:Ne(),cancelButton:Je(),loader:Ye(),closeButton:tr(),validationMessage:Xt(),progressSteps:er()};return C.domCache.set(t,e),e},Kh=(t,e,n)=>{const r=Zt();D(r),e.timer&&(t.timeout=new kh(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(x(r),H(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&ir(e.timer)})))},Gh=(t,e)=>{if(!e.toast){if(!Yt(e.allowEnterKey)){di("allowEnterKey"),Xh();return}Jh(t)||Yh(t,e)||Pn(-1,1)}},Jh=t=>{const e=t.popup.querySelectorAll("[autofocus]");for(const n of e)if(n instanceof HTMLElement&&M(n))return n.focus(),!0;return!1},Yh=(t,e)=>e.focusDeny&&M(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&M(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&M(t.confirmButton)?(t.confirmButton.focus(),!0):!1,Xh=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}O.prototype.disableButtons=Ni;O.prototype.enableButtons=Di;O.prototype.getInput=Ri;O.prototype.disableInput=Bi;O.prototype.enableInput=Mi;O.prototype.hideLoading=Vt;O.prototype.disableLoading=Vt;O.prototype.showValidationMessage=Ui;O.prototype.resetValidationMessage=Fi;O.prototype.close=we;O.prototype.closePopup=we;O.prototype.closeModal=we;O.prototype.closeToast=we;O.prototype.rejectPromise=ki;O.prototype.update=Vi;O.prototype._destroy=zi;Object.assign(O,Ch);Object.keys(ih).forEach(t=>{O[t]=function(){return Y&&Y[t]?Y[t](...arguments):null}});O.DismissReason=Xe;O.version="11.14.1";const Rn=O;Rn.default=Rn;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xi={exports:{}};(function(t,e){(function(r,s){t.exports=s()})(typeof self<"u"?self:Zh,function(){return function(n){var r={};function s(i){if(r[i])return r[i].exports;var o=r[i]={i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=n,s.c=r,s.d=function(i,o,a){s.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:a})},s.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,o){if(o&1&&(i=s(i)),o&8||o&4&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),o&2&&typeof i!="string")for(var c in i)s.d(a,c,(function(l){return i[l]}).bind(null,c));return a},s.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(o,"a",o),o},s.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},s.p="",s(s.s="./src/index.js")}({"./src/darkmode.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.IS_BROWSER=void 0;function i(h,f){if(!(h instanceof f))throw new TypeError("Cannot call a class as a function")}function o(h,f){for(var y=0;y<f.length;y++){var g=f[y];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(h,g.key,g)}}function a(h,f,y){return f&&o(h.prototype,f),h}var c=typeof window<"u";r.IS_BROWSER=c;var l=function(){function h(f){if(i(this,h),!!c){var y={bottom:"32px",right:"32px",left:"unset",time:"0.3s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#100f2c",buttonColorLight:"#fff",label:"",saveInCookies:!0,autoMatchOsTheme:!0};f=Object.assign({},y,f);var g=`
      .darkmode-layer {
        position: fixed;
        pointer-events: none;
        background: `.concat(f.mixColor,`;
        transition: all `).concat(f.time,` ease;
        mix-blend-mode: difference;
      }

      .darkmode-layer--button {
        width: 2.9rem;
        height: 2.9rem;
        border-radius: 50%;
        right: `).concat(f.right,`;
        bottom: `).concat(f.bottom,`;
        left: `).concat(f.left,`;
      }

      .darkmode-layer--simple {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(1) !important;
      }

      .darkmode-layer--expanded {
        transform: scale(100);
        border-radius: 0;
      }

      .darkmode-layer--no-transition {
        transition: none;
      }

      .darkmode-toggle {
        background: `).concat(f.buttonColorDark,`;
        width: 3rem;
        height: 3rem;
        position: fixed;
        border-radius: 50%;
        border:none;
        right: `).concat(f.right,`;
        bottom: `).concat(f.bottom,`;
        left: `).concat(f.left,`;
        cursor: pointer;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .darkmode-toggle--white {
        background: `).concat(f.buttonColorLight,`;
      }

      .darkmode-toggle--inactive {
        display: none;
      }

      .darkmode-background {
        background: `).concat(f.backgroundColor,`;
        position: fixed;
        pointer-events: none;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }

      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .darkmode-toggle {display: none !important}
      }

      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {
        .darkmode-toggle {display: none !important}
      }
    `),p=document.createElement("div"),w=document.createElement("button"),m=document.createElement("div");w.innerHTML=f.label,w.classList.add("darkmode-toggle--inactive"),p.classList.add("darkmode-layer"),m.classList.add("darkmode-background");var S=window.localStorage.getItem("darkmode")==="true",k=f.autoMatchOsTheme&&window.matchMedia("(prefers-color-scheme: dark)").matches,A=window.localStorage.getItem("darkmode")===null;(S===!0&&f.saveInCookies||A&&k)&&(p.classList.add("darkmode-layer--expanded","darkmode-layer--simple","darkmode-layer--no-transition"),w.classList.add("darkmode-toggle--white"),document.body.classList.add("darkmode--activated")),document.body.insertBefore(w,document.body.firstChild),document.body.insertBefore(p,document.body.firstChild),document.body.insertBefore(m,document.body.firstChild),this.addStyle(g),this.button=w,this.layer=p,this.saveInCookies=f.saveInCookies,this.time=f.time}}return a(h,[{key:"addStyle",value:function(y){var g=document.createElement("link");g.setAttribute("rel","stylesheet"),g.setAttribute("type","text/css"),g.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(y)),document.head.appendChild(g)}},{key:"showWidget",value:function(){var y=this;if(c){var g=this.button,p=this.layer,w=parseFloat(this.time)*1e3;g.classList.add("darkmode-toggle"),g.classList.remove("darkmode-toggle--inactive"),g.setAttribute("aria-label","Activate dark mode"),g.setAttribute("aria-checked","false"),g.setAttribute("role","checkbox"),p.classList.add("darkmode-layer--button"),g.addEventListener("click",function(){var m=y.isActivated();m?(p.classList.remove("darkmode-layer--simple"),g.setAttribute("disabled",!0),setTimeout(function(){p.classList.remove("darkmode-layer--no-transition"),p.classList.remove("darkmode-layer--expanded"),g.removeAttribute("disabled")},1)):(p.classList.add("darkmode-layer--expanded"),g.setAttribute("disabled",!0),setTimeout(function(){p.classList.add("darkmode-layer--no-transition"),p.classList.add("darkmode-layer--simple"),g.removeAttribute("disabled")},w)),g.classList.toggle("darkmode-toggle--white"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!m)})}}},{key:"toggle",value:function(){if(c){var y=this.layer,g=this.isActivated(),p=this.button;y.classList.toggle("darkmode-layer--simple"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!g),p.setAttribute("aria-label","De-activate dark mode"),p.setAttribute("aria-checked","true")}}},{key:"isActivated",value:function(){return c?document.body.classList.contains("darkmode--activated"):null}}]),h}();r.default=l},"./src/index.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=o(s("./src/darkmode.js"));function o(c){if(c&&c.__esModule)return c;var l={};if(c!=null){for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)){var f=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(c,h):{};f.get||f.set?Object.defineProperty(l,h,f):l[h]=c[h]}}return l.default=c,l}var a=i.default;r.default=a,i.IS_BROWSER&&function(c){c.Darkmode=i.default}(window),n.exports=r.default}})})})(Xi);var ef=Xi.exports;const Mp=Qh(ef);function Zi(t,e){return function(){return t.apply(e,arguments)}}const{toString:tf}=Object.prototype,{getPrototypeOf:ur}=Object,tn=(t=>e=>{const n=tf.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),G=t=>(t=t.toLowerCase(),e=>tn(e)===t),nn=t=>e=>typeof e===t,{isArray:Ze}=Array,ct=nn("undefined");function nf(t){return t!==null&&!ct(t)&&t.constructor!==null&&!ct(t.constructor)&&j(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Qi=G("ArrayBuffer");function rf(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Qi(t.buffer),e}const sf=nn("string"),j=nn("function"),eo=nn("number"),rn=t=>t!==null&&typeof t=="object",of=t=>t===!0||t===!1,Rt=t=>{if(tn(t)!=="object")return!1;const e=ur(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},af=G("Date"),cf=G("File"),lf=G("Blob"),uf=G("FileList"),df=t=>rn(t)&&j(t.pipe),hf=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||j(t.append)&&((e=tn(t))==="formdata"||e==="object"&&j(t.toString)&&t.toString()==="[object FormData]"))},ff=G("URLSearchParams"),[pf,mf,gf,wf]=["ReadableStream","Request","Response","Headers"].map(G),bf=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function It(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Ze(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function to(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Se=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,no=t=>!ct(t)&&t!==Se;function xn(){const{caseless:t}=no(this)&&this||{},e={},n=(r,s)=>{const i=t&&to(e,s)||s;Rt(e[i])&&Rt(r)?e[i]=xn(e[i],r):Rt(r)?e[i]=xn({},r):Ze(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&It(arguments[r],n);return e}const yf=(t,e,n,{allOwnKeys:r}={})=>(It(e,(s,i)=>{n&&j(s)?t[i]=Zi(s,n):t[i]=s},{allOwnKeys:r}),t),vf=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),_f=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Ef=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ur(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},If=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Tf=t=>{if(!t)return null;if(Ze(t))return t;let e=t.length;if(!eo(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Sf=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ur(Uint8Array)),Cf=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},kf=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Af=G("HTMLFormElement"),Pf=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ns=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Of=G("RegExp"),ro=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};It(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Rf=t=>{ro(t,(e,n)=>{if(j(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(j(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},xf=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ze(t)?r(t):r(String(t).split(e)),n},Lf=()=>{},Df=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,gn="abcdefghijklmnopqrstuvwxyz",rs="0123456789",so={DIGIT:rs,ALPHA:gn,ALPHA_DIGIT:gn+gn.toUpperCase()+rs},Nf=(t=16,e=so.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Mf(t){return!!(t&&j(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Bf=t=>{const e=new Array(10),n=(r,s)=>{if(rn(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Ze(r)?[]:{};return It(r,(o,a)=>{const c=n(o,s+1);!ct(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Uf=G("AsyncFunction"),Ff=t=>t&&(rn(t)||j(t))&&j(t.then)&&j(t.catch),io=((t,e)=>t?setImmediate:e?((n,r)=>(Se.addEventListener("message",({source:s,data:i})=>{s===Se&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Se.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",j(Se.postMessage)),$f=typeof queueMicrotask<"u"?queueMicrotask.bind(Se):typeof process<"u"&&process.nextTick||io,d={isArray:Ze,isArrayBuffer:Qi,isBuffer:nf,isFormData:hf,isArrayBufferView:rf,isString:sf,isNumber:eo,isBoolean:of,isObject:rn,isPlainObject:Rt,isReadableStream:pf,isRequest:mf,isResponse:gf,isHeaders:wf,isUndefined:ct,isDate:af,isFile:cf,isBlob:lf,isRegExp:Of,isFunction:j,isStream:df,isURLSearchParams:ff,isTypedArray:Sf,isFileList:uf,forEach:It,merge:xn,extend:yf,trim:bf,stripBOM:vf,inherits:_f,toFlatObject:Ef,kindOf:tn,kindOfTest:G,endsWith:If,toArray:Tf,forEachEntry:Cf,matchAll:kf,isHTMLForm:Af,hasOwnProperty:ns,hasOwnProp:ns,reduceDescriptors:ro,freezeMethods:Rf,toObjectSet:xf,toCamelCase:Pf,noop:Lf,toFiniteNumber:Df,findKey:to,global:Se,isContextDefined:no,ALPHABET:so,generateString:Nf,isSpecCompliantForm:Mf,toJSONObject:Bf,isAsyncFn:Uf,isThenable:Ff,setImmediate:io,asap:$f};function _(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}d.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.status}}});const oo=_.prototype,ao={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ao[t]={value:t}});Object.defineProperties(_,ao);Object.defineProperty(oo,"isAxiosError",{value:!0});_.from=(t,e,n,r,s,i)=>{const o=Object.create(oo);return d.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),_.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const jf=null;function Ln(t){return d.isPlainObject(t)||d.isArray(t)}function co(t){return d.endsWith(t,"[]")?t.slice(0,-2):t}function ss(t,e,n){return t?t.concat(e).map(function(s,i){return s=co(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Hf(t){return d.isArray(t)&&!t.some(Ln)}const Vf=d.toFlatObject(d,{},null,function(e){return/^is[A-Z]/.test(e)});function sn(t,e,n){if(!d.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,m){return!d.isUndefined(m[w])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(e);if(!d.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(d.isDate(p))return p.toISOString();if(!c&&d.isBlob(p))throw new _("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(p)||d.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function h(p,w,m){let S=p;if(p&&!m&&typeof p=="object"){if(d.endsWith(w,"{}"))w=r?w:w.slice(0,-2),p=JSON.stringify(p);else if(d.isArray(p)&&Hf(p)||(d.isFileList(p)||d.endsWith(w,"[]"))&&(S=d.toArray(p)))return w=co(w),S.forEach(function(A,W){!(d.isUndefined(A)||A===null)&&e.append(o===!0?ss([w],W,i):o===null?w:w+"[]",l(A))}),!1}return Ln(p)?!0:(e.append(ss(m,w,i),l(p)),!1)}const f=[],y=Object.assign(Vf,{defaultVisitor:h,convertValue:l,isVisitable:Ln});function g(p,w){if(!d.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(p),d.forEach(p,function(S,k){(!(d.isUndefined(S)||S===null)&&s.call(e,S,d.isString(k)?k.trim():k,w,y))===!0&&g(S,w?w.concat(k):[k])}),f.pop()}}if(!d.isObject(t))throw new TypeError("data must be an object");return g(t),e}function is(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function dr(t,e){this._pairs=[],t&&sn(t,this,e)}const lo=dr.prototype;lo.append=function(e,n){this._pairs.push([e,n])};lo.toString=function(e){const n=e?function(r){return e.call(this,r,is)}:is;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function zf(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uo(t,e,n){if(!e)return t;const r=n&&n.encode||zf,s=n&&n.serialize;let i;if(s?i=s(e,n):i=d.isURLSearchParams(e)?e.toString():new dr(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class os{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){d.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ho={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wf=typeof URLSearchParams<"u"?URLSearchParams:dr,qf=typeof FormData<"u"?FormData:null,Kf=typeof Blob<"u"?Blob:null,Gf={isBrowser:!0,classes:{URLSearchParams:Wf,FormData:qf,Blob:Kf},protocols:["http","https","file","blob","url","data"]},hr=typeof window<"u"&&typeof document<"u",Dn=typeof navigator=="object"&&navigator||void 0,Jf=hr&&(!Dn||["ReactNative","NativeScript","NS"].indexOf(Dn.product)<0),Yf=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Xf=hr&&window.location.href||"http://localhost",Zf=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hr,hasStandardBrowserEnv:Jf,hasStandardBrowserWebWorkerEnv:Yf,navigator:Dn,origin:Xf},Symbol.toStringTag,{value:"Module"})),B={...Zf,...Gf};function Qf(t,e){return sn(t,new B.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return B.isNode&&d.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function ep(t){return d.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function tp(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function fo(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&d.isArray(s)?s.length:o,c?(d.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!d.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&d.isArray(s[o])&&(s[o]=tp(s[o])),!a)}if(d.isFormData(t)&&d.isFunction(t.entries)){const n={};return d.forEachEntry(t,(r,s)=>{e(ep(r),s,n,0)}),n}return null}function np(t,e,n){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const Tt={transitional:ho,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=d.isObject(e);if(i&&d.isHTMLForm(e)&&(e=new FormData(e)),d.isFormData(e))return s?JSON.stringify(fo(e)):e;if(d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)||d.isReadableStream(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qf(e,this.formSerializer).toString();if((a=d.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return sn(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),np(e)):e}],transformResponse:[function(e){const n=this.transitional||Tt.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(d.isResponse(e)||d.isReadableStream(e))return e;if(e&&d.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?_.from(a,_.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],t=>{Tt.headers[t]={}});const rp=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),sp=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&rp[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},as=Symbol("internals");function et(t){return t&&String(t).trim().toLowerCase()}function xt(t){return t===!1||t==null?t:d.isArray(t)?t.map(xt):String(t)}function ip(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const op=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function wn(t,e,n,r,s){if(d.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!d.isString(e)){if(d.isString(r))return e.indexOf(r)!==-1;if(d.isRegExp(r))return r.test(e)}}function ap(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function cp(t,e){const n=d.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class U{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const h=et(c);if(!h)throw new Error("header name must be a non-empty string");const f=d.findKey(s,h);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=xt(a))}const o=(a,c)=>d.forEach(a,(l,h)=>i(l,h,c));if(d.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(d.isString(e)&&(e=e.trim())&&!op(e))o(sp(e),n);else if(d.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=et(e),e){const r=d.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return ip(s);if(d.isFunction(n))return n.call(this,s,r);if(d.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=et(e),e){const r=d.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||wn(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=et(o),o){const a=d.findKey(r,o);a&&(!n||wn(r,r[a],a,n))&&(delete r[a],s=!0)}}return d.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||wn(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return d.forEach(this,(s,i)=>{const o=d.findKey(r,i);if(o){n[o]=xt(s),delete n[i];return}const a=e?ap(i):String(i).trim();a!==i&&delete n[i],n[a]=xt(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return d.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&d.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[as]=this[as]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=et(o);r[a]||(cp(s,o),r[a]=!0)}return d.isArray(e)?e.forEach(i):i(e),this}}U.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(U.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});d.freezeMethods(U);function bn(t,e){const n=this||Tt,r=e||n,s=U.from(r.headers);let i=r.data;return d.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function po(t){return!!(t&&t.__CANCEL__)}function Qe(t,e,n){_.call(this,t??"canceled",_.ERR_CANCELED,e,n),this.name="CanceledError"}d.inherits(Qe,_,{__CANCEL__:!0});function mo(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function lp(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function up(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),h=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,y=0;for(;f!==s;)y+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=h&&l-h;return g?Math.round(y*1e3/g):void 0}}function dp(t,e){let n=0,r=1e3/e,s,i;const o=(l,h=Date.now())=>{n=h,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const h=Date.now(),f=h-n;f>=r?o(l,h):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Wt=(t,e,n=3)=>{let r=0;const s=up(50,250);return dp(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),h=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&h?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},cs=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},ls=t=>(...e)=>d.asap(()=>t(...e)),hp=B.hasStandardBrowserEnv?function(){const e=B.navigator&&/(msie|trident)/i.test(B.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=d.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),fp=B.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];d.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),d.isString(r)&&o.push("path="+r),d.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pp(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function mp(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function go(t,e){return t&&!pp(e)?mp(t,e):e}const us=t=>t instanceof U?{...t}:t;function xe(t,e){e=e||{};const n={};function r(l,h,f){return d.isPlainObject(l)&&d.isPlainObject(h)?d.merge.call({caseless:f},l,h):d.isPlainObject(h)?d.merge({},h):d.isArray(h)?h.slice():h}function s(l,h,f){if(d.isUndefined(h)){if(!d.isUndefined(l))return r(void 0,l,f)}else return r(l,h,f)}function i(l,h){if(!d.isUndefined(h))return r(void 0,h)}function o(l,h){if(d.isUndefined(h)){if(!d.isUndefined(l))return r(void 0,l)}else return r(void 0,h)}function a(l,h,f){if(f in e)return r(l,h);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,h)=>s(us(l),us(h),!0)};return d.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=c[h]||s,y=f(t[h],e[h],h);d.isUndefined(y)&&f!==a||(n[h]=y)}),n}const wo=t=>{const e=xe({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=U.from(o),e.url=uo(go(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(d.isFormData(n)){if(B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...h]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...h].join("; "))}}if(B.hasStandardBrowserEnv&&(r&&d.isFunction(r)&&(r=r(e)),r||r!==!1&&hp(e.url))){const l=s&&i&&fp.read(i);l&&o.set(s,l)}return e},gp=typeof XMLHttpRequest<"u",wp=gp&&function(t){return new Promise(function(n,r){const s=wo(t);let i=s.data;const o=U.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,h,f,y,g,p;function w(){g&&g(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function S(){if(!m)return;const A=U.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:A,config:t,request:m};mo(function(J){n(J),w()},function(J){r(J),w()},L),m=null}"onloadend"in m?m.onloadend=S:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(S)},m.onabort=function(){m&&(r(new _("Request aborted",_.ECONNABORTED,t,m)),m=null)},m.onerror=function(){r(new _("Network Error",_.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let W=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||ho;s.timeoutErrorMessage&&(W=s.timeoutErrorMessage),r(new _(W,L.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,t,m)),m=null},i===void 0&&o.setContentType(null),"setRequestHeader"in m&&d.forEach(o.toJSON(),function(W,L){m.setRequestHeader(L,W)}),d.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),l&&([y,p]=Wt(l,!0),m.addEventListener("progress",y)),c&&m.upload&&([f,g]=Wt(c),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(h=A=>{m&&(r(!A||A.type?new Qe(null,t,m):A),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const k=lp(s.url);if(k&&B.protocols.indexOf(k)===-1){r(new _("Unsupported protocol "+k+":",_.ERR_BAD_REQUEST,t));return}m.send(i||null)})},bp=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const h=l instanceof Error?l:this.reason;r.abort(h instanceof _?h:new Qe(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new _(`timeout ${e} of ms exceeded`,_.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>d.asap(a),c}},yp=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},vp=async function*(t,e){for await(const n of _p(t))yield*yp(n,e)},_p=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},ds=(t,e,n,r)=>{const s=vp(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:h}=await s.next();if(l){a(),c.close();return}let f=h.byteLength;if(n){let y=i+=f;n(y)}c.enqueue(new Uint8Array(h))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},on=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",bo=on&&typeof ReadableStream=="function",Ep=on&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),yo=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Ip=bo&&yo(()=>{let t=!1;const e=new Request(B.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),hs=64*1024,Nn=bo&&yo(()=>d.isReadableStream(new Response("").body)),qt={stream:Nn&&(t=>t.body)};on&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!qt[e]&&(qt[e]=d.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new _(`Response type '${e}' is not supported`,_.ERR_NOT_SUPPORT,r)})})})(new Response);const Tp=async t=>{if(t==null)return 0;if(d.isBlob(t))return t.size;if(d.isSpecCompliantForm(t))return(await new Request(B.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(d.isArrayBufferView(t)||d.isArrayBuffer(t))return t.byteLength;if(d.isURLSearchParams(t)&&(t=t+""),d.isString(t))return(await Ep(t)).byteLength},Sp=async(t,e)=>{const n=d.toFiniteNumber(t.getContentLength());return n??Tp(e)},Cp=on&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:h,withCredentials:f="same-origin",fetchOptions:y}=wo(t);l=l?(l+"").toLowerCase():"text";let g=bp([s,i&&i.toAbortSignal()],o),p;const w=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let m;try{if(c&&Ip&&n!=="get"&&n!=="head"&&(m=await Sp(h,r))!==0){let L=new Request(e,{method:"POST",body:r,duplex:"half"}),q;if(d.isFormData(r)&&(q=L.headers.get("content-type"))&&h.setContentType(q),L.body){const[J,Me]=cs(m,Wt(ls(c)));r=ds(L.body,hs,J,Me)}}d.isString(f)||(f=f?"include":"omit");const S="credentials"in Request.prototype;p=new Request(e,{...y,signal:g,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",credentials:S?f:void 0});let k=await fetch(p);const A=Nn&&(l==="stream"||l==="response");if(Nn&&(a||A&&w)){const L={};["status","statusText","headers"].forEach(Be=>{L[Be]=k[Be]});const q=d.toFiniteNumber(k.headers.get("content-length")),[J,Me]=a&&cs(q,Wt(ls(a),!0))||[];k=new Response(ds(k.body,hs,J,()=>{Me&&Me(),w&&w()}),L)}l=l||"text";let W=await qt[d.findKey(qt,l)||"text"](k,t);return!A&&w&&w(),await new Promise((L,q)=>{mo(L,q,{data:W,headers:U.from(k.headers),status:k.status,statusText:k.statusText,config:t,request:p})})}catch(S){throw w&&w(),S&&S.name==="TypeError"&&/fetch/i.test(S.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,t,p),{cause:S.cause||S}):_.from(S,S&&S.code,t,p)}}),Mn={http:jf,xhr:wp,fetch:Cp};d.forEach(Mn,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const fs=t=>`- ${t}`,kp=t=>d.isFunction(t)||t===null||t===!1,vo={getAdapter:t=>{t=d.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!kp(n)&&(r=Mn[(o=String(n)).toLowerCase()],r===void 0))throw new _(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(fs).join(`
`):" "+fs(i[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Mn};function yn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Qe(null,t)}function ps(t){return yn(t),t.headers=U.from(t.headers),t.data=bn.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),vo.getAdapter(t.adapter||Tt.adapter)(t).then(function(r){return yn(t),r.data=bn.call(t,t.transformResponse,r),r.headers=U.from(r.headers),r},function(r){return po(r)||(yn(t),r&&r.response&&(r.response.data=bn.call(t,t.transformResponse,r.response),r.response.headers=U.from(r.response.headers))),Promise.reject(r)})}const _o="1.7.7",fr={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fr[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const ms={};fr.transitional=function(e,n,r){function s(i,o){return"[Axios v"+_o+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new _(s(o," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!ms[o]&&(ms[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function Ap(t,e,n){if(typeof t!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new _("option "+i+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}const Bn={assertOptions:Ap,validators:fr},de=Bn.validators;class ke{constructor(e){this.defaults=e,this.interceptors={request:new os,response:new os}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=xe(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Bn.assertOptions(r,{silentJSONParsing:de.transitional(de.boolean),forcedJSONParsing:de.transitional(de.boolean),clarifyTimeoutError:de.transitional(de.boolean)},!1),s!=null&&(d.isFunction(s)?n.paramsSerializer={serialize:s}:Bn.assertOptions(s,{encode:de.function,serialize:de.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&d.merge(i.common,i[n.method]);i&&d.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=U.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let h,f=0,y;if(!c){const p=[ps.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),y=p.length,h=Promise.resolve(n);f<y;)h=h.then(p[f++],p[f++]);return h}y=a.length;let g=n;for(f=0;f<y;){const p=a[f++],w=a[f++];try{g=p(g)}catch(m){w.call(this,m);break}}try{h=ps.call(this,g)}catch(p){return Promise.reject(p)}for(f=0,y=l.length;f<y;)h=h.then(l[f++],l[f++]);return h}getUri(e){e=xe(this.defaults,e);const n=go(e.baseURL,e.url);return uo(n,e.params,e.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(e){ke.prototype[e]=function(n,r){return this.request(xe(r||{},{method:e,url:n,data:(r||{}).data}))}});d.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(xe(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}ke.prototype[e]=n(),ke.prototype[e+"Form"]=n(!0)});class pr{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Qe(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new pr(function(s){e=s}),cancel:e}}}function Pp(t){return function(n){return t.apply(null,n)}}function Op(t){return d.isObject(t)&&t.isAxiosError===!0}const Un={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Un).forEach(([t,e])=>{Un[e]=t});function Eo(t){const e=new ke(t),n=Zi(ke.prototype.request,e);return d.extend(n,ke.prototype,e,{allOwnKeys:!0}),d.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Eo(xe(t,s))},n}const R=Eo(Tt);R.Axios=ke;R.CanceledError=Qe;R.CancelToken=pr;R.isCancel=po;R.VERSION=_o;R.toFormData=sn;R.AxiosError=_;R.Cancel=R.CanceledError;R.all=function(e){return Promise.all(e)};R.spread=Pp;R.isAxiosError=Op;R.mergeConfig=xe;R.AxiosHeaders=U;R.formToJSON=t=>fo(d.isHTMLForm(t)?new FormData(t):t);R.getAdapter=vo.getAdapter;R.HttpStatusCode=Un;R.default=R;export{Mp as D,Rn as S,R as a,Dp as b,Rp as c,Np as g,za as i,Lp as o,xp as s};
//# sourceMappingURL=vendor-DwzPqAEj.js.map