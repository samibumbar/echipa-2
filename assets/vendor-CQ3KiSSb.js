var ar={};/**
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
 */const os=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uo=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},as={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let v=(a&15)<<2|l>>6,E=l&63;c||(E=64,o||(v=64)),r.push(n[h],n[f],n[v],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(os(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new ho;const v=i<<2|a>>4;if(r.push(v),l!==64){const E=a<<4&240|l>>2;if(r.push(E),f!==64){const p=l<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ho extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fo=function(t){const e=os(t);return as.encodeByteArray(e,!0)},cs=function(t){return fo(t).replace(/\./g,"")},ls=function(t){try{return as.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function po(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mo=()=>po().__FIREBASE_DEFAULTS__,go=()=>{if(typeof process>"u"||typeof ar>"u")return;const t=ar.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wo=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ls(t[1]);return e&&JSON.parse(e)},On=()=>{try{return mo()||go()||wo()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bo=t=>{var e,n;return(n=(e=On())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},us=()=>{var t;return(t=On())===null||t===void 0?void 0:t.config},ds=t=>{var e;return(e=On())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function N(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(N())}function _o(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Eo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Io(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function To(){const t=N();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function So(){try{return typeof indexedDB=="object"}catch{return!1}}function Co(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ao="FirebaseError";class be extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ao,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rt.prototype.create)}}class rt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ko(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new be(s,a,r)}}function ko(t,e){return t.replace(Po,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Po=/\{\$([^}]+)}/g;function Oo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ct(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cr(i)&&cr(o)){if(!Ct(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cr(t){return t!==null&&typeof t=="object"}/**
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
 */function st(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ro(t,e){const n=new xo(t,e);return n.subscribe.bind(n)}class xo{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lo(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zt),s.error===void 0&&(s.error=Zt),s.complete===void 0&&(s.complete=Zt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lo(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zt(){}/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class He{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _e="[DEFAULT]";/**
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
 */class Do{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mo(e))try{this.getOrInitializeService({instanceIdentifier:_e})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_e){return this.instances.has(e)}getOptions(e=_e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:No(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_e){return this.component?this.component.multipleInstances?e:_e:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function No(t){return t===_e?void 0:t}function Mo(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Do(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var T;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(T||(T={}));const Uo={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},Fo=T.INFO,$o={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},Ho=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=$o[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=Fo,this._logHandler=Ho,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const jo=(t,e)=>e.some(n=>t instanceof n);let lr,ur;function Vo(){return lr||(lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zo(){return ur||(ur=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fs=new WeakMap,hn=new WeakMap,ps=new WeakMap,Qt=new WeakMap,Rn=new WeakMap;function qo(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ge(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fs.set(n,t)}).catch(()=>{}),Rn.set(e,t),e}function Wo(t){if(hn.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hn.set(t,e)}let fn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ps.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ko(t){fn=t(fn)}function Go(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(en(this),e,...n);return ps.set(r,e.sort?e.sort():[e]),ge(r)}:zo().includes(t)?function(...e){return t.apply(en(this),e),ge(fs.get(this))}:function(...e){return ge(t.apply(en(this),e))}}function Jo(t){return typeof t=="function"?Go(t):(t instanceof IDBTransaction&&Wo(t),jo(t,Vo())?new Proxy(t,fn):t)}function ge(t){if(t instanceof IDBRequest)return qo(t);if(Qt.has(t))return Qt.get(t);const e=Jo(t);return e!==t&&(Qt.set(t,e),Rn.set(e,t)),e}const en=t=>Rn.get(t);function Yo(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ge(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ge(o.result),c.oldVersion,c.newVersion,ge(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Xo=["get","getKey","getAll","getAllKeys","count"],Zo=["put","add","delete","clear"],tn=new Map;function dr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Xo.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return tn.set(e,i),i}Ko(t=>({...t,get:(e,n,r)=>dr(e,n)||t.get(e,n,r),has:(e,n)=>!!dr(e,n)||t.has(e,n)}));/**
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
 */class Qo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ea(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ea(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pn="@firebase/app",hr="0.10.11";/**
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
 */const se=new hs("@firebase/app"),ta="@firebase/app-compat",na="@firebase/analytics-compat",ra="@firebase/analytics",sa="@firebase/app-check-compat",ia="@firebase/app-check",oa="@firebase/auth",aa="@firebase/auth-compat",ca="@firebase/database",la="@firebase/database-compat",ua="@firebase/functions",da="@firebase/functions-compat",ha="@firebase/installations",fa="@firebase/installations-compat",pa="@firebase/messaging",ma="@firebase/messaging-compat",ga="@firebase/performance",wa="@firebase/performance-compat",ba="@firebase/remote-config",ya="@firebase/remote-config-compat",va="@firebase/storage",_a="@firebase/storage-compat",Ea="@firebase/firestore",Ia="@firebase/vertexai-preview",Ta="@firebase/firestore-compat",Sa="firebase",Ca="10.13.2";/**
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
 */const mn="[DEFAULT]",Aa={[pn]:"fire-core",[ta]:"fire-core-compat",[ra]:"fire-analytics",[na]:"fire-analytics-compat",[ia]:"fire-app-check",[sa]:"fire-app-check-compat",[oa]:"fire-auth",[aa]:"fire-auth-compat",[ca]:"fire-rtdb",[la]:"fire-rtdb-compat",[ua]:"fire-fn",[da]:"fire-fn-compat",[ha]:"fire-iid",[fa]:"fire-iid-compat",[pa]:"fire-fcm",[ma]:"fire-fcm-compat",[ga]:"fire-perf",[wa]:"fire-perf-compat",[ba]:"fire-rc",[ya]:"fire-rc-compat",[va]:"fire-gcs",[_a]:"fire-gcs-compat",[Ea]:"fire-fst",[Ta]:"fire-fst-compat",[Ia]:"fire-vertex","fire-js":"fire-js",[Sa]:"fire-js-all"};/**
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
 */const At=new Map,ka=new Map,gn=new Map;function fr(t,e){try{t.container.addComponent(e)}catch(n){se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qe(t){const e=t.name;if(gn.has(e))return se.debug(`There were multiple attempts to register component ${e}.`),!1;gn.set(e,t);for(const n of At.values())fr(n,t);for(const n of ka.values())fr(n,t);return!0}function ms(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fe(t){return t.settings!==void 0}/**
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
 */const Pa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new rt("app","Firebase",Pa);/**
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
 */class Oa{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
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
 */const it=Ca;function Ra(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw we.create("bad-app-name",{appName:String(s)});if(n||(n=us()),!n)throw we.create("no-options");const i=At.get(s);if(i){if(Ct(n,i.options)&&Ct(r,i.config))return i;throw we.create("duplicate-app",{appName:s})}const o=new Bo(s);for(const c of gn.values())o.addComponent(c);const a=new Oa(n,r,o);return At.set(s,a),a}function xa(t=mn){const e=At.get(t);if(!e&&t===mn&&us())return Ra();if(!e)throw we.create("no-app",{appName:t});return e}function Ne(t,e,n){var r;let s=(r=Aa[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),se.warn(a.join(" "));return}Qe(new He(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const La="firebase-heartbeat-database",Da=1,et="firebase-heartbeat-store";let nn=null;function gs(){return nn||(nn=Yo(La,Da,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(et)}catch(n){console.warn(n)}}}}).catch(t=>{throw we.create("idb-open",{originalErrorMessage:t.message})})),nn}async function Na(t){try{const n=(await gs()).transaction(et),r=await n.objectStore(et).get(ws(t));return await n.done,r}catch(e){if(e instanceof be)se.warn(e.message);else{const n=we.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});se.warn(n.message)}}}async function pr(t,e){try{const r=(await gs()).transaction(et,"readwrite");await r.objectStore(et).put(e,ws(t)),await r.done}catch(n){if(n instanceof be)se.warn(n.message);else{const r=we.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});se.warn(r.message)}}}function ws(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ma=1024,Ba=30*24*60*60*1e3;class Ua{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $a(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ba}),this._storage.overwrite(this._heartbeatsCache))}catch(r){se.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mr(),{heartbeatsToSend:r,unsentEntries:s}=Fa(this._heartbeatsCache.heartbeats),i=cs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return se.warn(n),""}}}function mr(){return new Date().toISOString().substring(0,10)}function Fa(t,e=Ma){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gr(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $a{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return So()?Co().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Na(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gr(t){return cs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ha(t){Qe(new He("platform-logger",e=>new Qo(e),"PRIVATE")),Qe(new He("heartbeat",e=>new Ua(e),"PRIVATE")),Ne(pn,hr,t),Ne(pn,hr,"esm2017"),Ne("fire-js","")}Ha("");var ja="firebase",Va="10.13.2";/**
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
 */Ne(ja,Va,"app");function xn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const za=bs,ys=new rt("auth","Firebase",bs());/**
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
 */const kt=new hs("@firebase/auth");function qa(t,...e){kt.logLevel<=T.WARN&&kt.warn(`Auth (${it}): ${t}`,...e)}function vt(t,...e){kt.logLevel<=T.ERROR&&kt.error(`Auth (${it}): ${t}`,...e)}/**
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
 */function ie(t,...e){throw Ln(t,...e)}function Y(t,...e){return Ln(t,...e)}function vs(t,e,n){const r=Object.assign(Object.assign({},za()),{[e]:n});return new rt("auth","Firebase",r).create(e,{appName:t.name})}function Ie(t){return vs(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ln(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ys.create(t,...e)}function w(t,e,...n){if(!t)throw Ln(e,...n)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vt(e),new Error(e)}function oe(t,e){t||ee(e)}/**
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
 */function wn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wa(){return wr()==="http:"||wr()==="https:"}function wr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Ka(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wa()||Eo()||"connection"in navigator)?navigator.onLine:!0}function Ga(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ot{constructor(e,n){this.shortDelay=e,this.longDelay=n,oe(n>e,"Short delay should be less than long delay!"),this.isMobile=vo()||Io()}get(){return Ka()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dn(t,e){oe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _s{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ja={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ya=new ot(3e4,6e4);function Nn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,s={}){return Es(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=st(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return _o()||(l.referrerPolicy="no-referrer"),_s.fetch()(Is(t,t.config.apiHost,n,a),l)})}async function Es(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ja),e);try{const s=new Za(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bt(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bt(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vs(t,h,l);ie(t,h)}}catch(s){if(s instanceof be)throw s;ie(t,"network-request-failed",{message:String(s)})}}async function Xa(t,e,n,r,s={}){const i=await qe(t,e,n,r,s);return"mfaPendingCredential"in i&&ie(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Is(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dn(t.config,s):`${t.config.apiScheme}://${s}`}class Za{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Y(this.auth,"network-request-failed")),Ya.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Y(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Qa(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function Ts(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ze(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ec(t,e=!1){const n=ye(t),r=await n.getIdToken(e),s=Mn(r);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ze(rn(s.auth_time)),issuedAtTime:Ze(rn(s.iat)),expirationTime:Ze(rn(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rn(t){return Number(t)*1e3}function Mn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vt("JWT malformed, contained fewer than 3 sections"),null;try{const s=ls(n);return s?JSON.parse(s):(vt("Failed to decode base64 JWT payload"),null)}catch(s){return vt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function br(t){const e=Mn(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function tt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof be&&tc(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ze(this.lastLoginAt),this.creationTime=Ze(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pt(t){var e;const n=t.auth,r=await t.getIdToken(),s=await tt(t,Ts(n,{idToken:r}));w(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ss(i.providerUserInfo):[],a=sc(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new bn(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function rc(t){const e=ye(t);await Pt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sc(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ss(t){return t.map(e=>{var{providerId:n}=e,r=xn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ic(t,e){const n=await Es(t,{},async()=>{const r=st({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Is(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_s.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oc(t,e){return qe(t,"POST","/v2/accounts:revokeToken",Nn(t,e))}/**
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
 */class Me{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):br(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){w(e.length!==0,"internal-error");const n=br(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ic(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Me;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(w(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Me,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
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
 */function ae(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class te{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await tt(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ec(this,e)}reload(){return rc(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new te(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Pt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fe(this.auth.app))return Promise.reject(Ie(this.auth));const e=await this.getIdToken();return await tt(this,Qa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,A=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:q,isAnonymous:L,providerData:W,stsTokenManager:G}=n;w(k&&G,e,"internal-error");const xe=Me.fromJSON(this.name,G);w(typeof k=="string",e,"internal-error"),ae(f,e.name),ae(v,e.name),w(typeof q=="boolean",e,"internal-error"),w(typeof L=="boolean",e,"internal-error"),ae(E,e.name),ae(p,e.name),ae(b,e.name),ae(m,e.name),ae(C,e.name),ae(A,e.name);const Le=new te({uid:k,auth:e,email:v,emailVerified:q,displayName:f,isAnonymous:L,photoURL:p,phoneNumber:E,tenantId:b,stsTokenManager:xe,createdAt:C,lastLoginAt:A});return W&&Array.isArray(W)&&(Le.providerData=W.map(lo=>Object.assign({},lo))),m&&(Le._redirectEventId=m),Le}static async _fromIdTokenResponse(e,n,r=!1){const s=new Me;s.updateFromServerResponse(n);const i=new te({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Pt(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];w(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ss(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Me;a.updateFromIdToken(r);const c=new te({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bn(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const yr=new Map;function ne(t){oe(t instanceof Function,"Expected a class definition");let e=yr.get(t);return e?(oe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yr.set(t,e),e)}/**
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
 */class Cs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cs.type="NONE";const vr=Cs;/**
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
 */function _t(t,e,n){return`firebase:${t}:${e}:${n}`}class Be{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_t(this.userKey,s.apiKey,i),this.fullPersistenceKey=_t("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?te._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Be(ne(vr),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ne(vr);const o=_t(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const f=te._fromJSON(e,h);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Be(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Be(i,e,r))}}/**
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
 */function _r(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Os(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(As(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xs(e))return"Blackberry";if(Ls(e))return"Webos";if(ks(e))return"Safari";if((e.includes("chrome/")||Ps(e))&&!e.includes("edge/"))return"Chrome";if(Rs(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function As(t=N()){return/firefox\//i.test(t)}function ks(t=N()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ps(t=N()){return/crios\//i.test(t)}function Os(t=N()){return/iemobile/i.test(t)}function Rs(t=N()){return/android/i.test(t)}function xs(t=N()){return/blackberry/i.test(t)}function Ls(t=N()){return/webos/i.test(t)}function Bn(t=N()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ac(t=N()){var e;return Bn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cc(){return To()&&document.documentMode===10}function Ds(t=N()){return Bn(t)||Rs(t)||Ls(t)||xs(t)||/windows phone/i.test(t)||Os(t)}/**
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
 */function Ns(t,e=[]){let n;switch(t){case"Browser":n=_r(N());break;case"Worker":n=`${_r(N())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${it}/${r}`}/**
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
 */class lc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uc(t,e={}){return qe(t,"GET","/v2/passwordPolicy",Nn(t,e))}/**
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
 */const dc=6;class hc{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dc,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class fc{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.beforeStateQueue=new lc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ys,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ne(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Be.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ts(this,{idToken:e}),r=await te._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ga()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fe(this.app))return Promise.reject(Ie(this));const n=e?ye(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fe(this.app)?Promise.reject(Ie(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fe(this.app)?Promise.reject(Ie(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ne(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uc(this),n=new hc(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new rt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oc(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ne(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[ne(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ns(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qa(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Un(t){return ye(t)}class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ro(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pc(t){Fn=t}function mc(t){return Fn.loadJS(t)}function gc(){return Fn.gapiScript}function wc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bc(t,e){const n=ms(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ct(i,e??{}))return s;ie(s,"already-initialized")}return n.initialize({options:e})}function yc(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ne);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vc(t,e,n){const r=Un(t);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ms(e),{host:o,port:a}=_c(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Ec()}function Ms(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _c(t){const e=Ms(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ir(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ir(o)}}}function Ir(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ec(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,n){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}/**
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
 */async function Ue(t,e){return Xa(t,"POST","/v1/accounts:signInWithIdp",Nn(t,e))}/**
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
 */const Ic="http://localhost";class Ce extends Bs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xn(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ce(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ue(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ue(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ue(e,n)}buildRequest(){const e={requestUri:Ic,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=st(n)}return e}}/**
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
 */class Us{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class at extends Us{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class le extends at{constructor(){super("facebook.com")}static credential(e){return Ce._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.FACEBOOK_SIGN_IN_METHOD="facebook.com";le.PROVIDER_ID="facebook.com";/**
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
 */class ue extends at{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ce._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ue.credential(n,r)}catch{return null}}}ue.GOOGLE_SIGN_IN_METHOD="google.com";ue.PROVIDER_ID="google.com";/**
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
 */class de extends at{constructor(){super("github.com")}static credential(e){return Ce._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.GITHUB_SIGN_IN_METHOD="github.com";de.PROVIDER_ID="github.com";/**
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
 */class he extends at{constructor(){super("twitter.com")}static credential(e,n){return Ce._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return he.credentialFromTaggedObject(e)}static credentialFromError(e){return he.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return he.credential(n,r)}catch{return null}}}he.TWITTER_SIGN_IN_METHOD="twitter.com";he.PROVIDER_ID="twitter.com";/**
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
 */class je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await te._fromIdTokenResponse(e,r,s),o=Tr(r);return new je({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Tr(r);return new je({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Tr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ot extends be{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ot(e,n,r,s)}}function Fs(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ot._fromErrorAndOperation(t,i,e,r):i})}async function Tc(t,e,n=!1){const r=await tt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return je._forOperation(t,"link",r)}/**
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
 */async function Sc(t,e,n=!1){const{auth:r}=t;if(fe(r.app))return Promise.reject(Ie(r));const s="reauthenticate";try{const i=await tt(t,Fs(r,s,e,t),n);w(i.idToken,r,"internal-error");const o=Mn(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(t.uid===a,r,"user-mismatch"),je._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ie(r,"user-mismatch"),i}}/**
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
 */async function Cc(t,e,n=!1){if(fe(t.app))return Promise.reject(Ie(t));const r="signIn",s=await Fs(t,r,e),i=await je._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ac(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function kc(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function rp(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}function sp(t){return ye(t).signOut()}const Rt="__sak";/**
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
 */class $s{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pc=1e3,Oc=10;class Hs extends $s{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ds(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Oc):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hs.type="LOCAL";const Rc=Hs;/**
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
 */class js extends $s{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}js.type="SESSION";const Vs=js;/**
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
 */function xc(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new $t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xc(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$t.receivers=[];/**
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
 */function $n(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$n("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const v=f;if(v.data.eventId===l)switch(v.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(v.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function X(){return window}function Dc(t){X().location.href=t}/**
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
 */function zs(){return typeof X().WorkerGlobalScope<"u"&&typeof X().importScripts=="function"}async function Nc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mc(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bc(){return zs()?self:null}/**
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
 */const qs="firebaseLocalStorageDb",Uc=1,xt="firebaseLocalStorage",Ws="fbase_key";class ct{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ht(t,e){return t.transaction([xt],e?"readwrite":"readonly").objectStore(xt)}function Fc(){const t=indexedDB.deleteDatabase(qs);return new ct(t).toPromise()}function yn(){const t=indexedDB.open(qs,Uc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xt,{keyPath:Ws})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xt)?e(r):(r.close(),await Fc(),e(await yn()))})})}async function Sr(t,e,n){const r=Ht(t,!0).put({[Ws]:e,value:n});return new ct(r).toPromise()}async function $c(t,e){const n=Ht(t,!1).get(e),r=await new ct(n).toPromise();return r===void 0?null:r.value}function Cr(t,e){const n=Ht(t,!0).delete(e);return new ct(n).toPromise()}const Hc=800,jc=3;class Ks{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$t._getInstance(Bc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nc(),!this.activeServiceWorker)return;this.sender=new Lc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mc()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yn();return await Sr(e,Rt,"1"),await Cr(e,Rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$c(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ht(s,!1).getAll();return new ct(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ks.type="LOCAL";const Vc=Ks;new ot(3e4,6e4);/**
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
 */function zc(t,e){return e?ne(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hn extends Bs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ue(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ue(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ue(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qc(t){return Cc(t.auth,new Hn(t),t.bypassAuthState)}function Wc(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Sc(n,new Hn(t),t.bypassAuthState)}async function Kc(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),Tc(n,new Hn(t),t.bypassAuthState)}/**
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
 */class Gs{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qc;case"linkViaPopup":case"linkViaRedirect":return Kc;case"reauthViaPopup":case"reauthViaRedirect":return Wc;default:ie(this.auth,"internal-error")}}resolve(e){oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){oe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gc=new ot(2e3,1e4);class De extends Gs{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,De.currentPopupAction&&De.currentPopupAction.cancel(),De.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){oe(this.filter.length===1,"Popup operations only handle one event");const e=$n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,De.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Y(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gc.get())};e()}}De.currentPopupAction=null;/**
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
 */const Jc="pendingRedirect",Et=new Map;class Yc extends Gs{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Et.get(this.auth._key());if(!e){try{const r=await Xc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Et.set(this.auth._key(),e)}return this.bypassAuthState||Et.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xc(t,e){const n=el(e),r=Qc(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zc(t,e){Et.set(t._key(),e)}function Qc(t){return ne(t._redirectPersistence)}function el(t){return _t(Jc,t.config.apiKey,t.name)}async function tl(t,e,n=!1){if(fe(t.app))return Promise.reject(Ie(t));const r=Un(t),s=zc(r,e),o=await new Yc(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const nl=10*60*1e3;class rl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Js(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Y(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ar(e))}saveEventToCache(e){this.cachedEventUids.add(Ar(e)),this.lastProcessedEventTime=Date.now()}}function Ar(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Js({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Js(t);default:return!1}}/**
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
 */async function il(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
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
 */const ol=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,al=/^https?/;async function cl(t){if(t.config.emulator)return;const{authorizedDomains:e}=await il(t);for(const n of e)try{if(ll(n))return}catch{}ie(t,"unauthorized-domain")}function ll(t){const e=wn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!al.test(n))return!1;if(ol.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ul=new ot(3e4,6e4);function kr(){const t=X().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dl(t){return new Promise((e,n)=>{var r,s,i;function o(){kr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kr(),n(Y(t,"network-request-failed"))},timeout:ul.get()})}if(!((s=(r=X().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=X().gapi)===null||i===void 0)&&i.load)o();else{const a=wc("iframefcb");return X()[a]=()=>{gapi.load?o():n(Y(t,"network-request-failed"))},mc(`${gc()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw It=null,e})}let It=null;function hl(t){return It=It||dl(t),It}/**
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
 */const fl=new ot(5e3,15e3),pl="__/auth/iframe",ml="emulator/auth/iframe",gl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bl(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dn(e,ml):`https://${t.config.authDomain}/${pl}`,r={apiKey:e.apiKey,appName:t.name,v:it},s=wl.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${st(r).slice(1)}`}async function yl(t){const e=await hl(t),n=X().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:bl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gl,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Y(t,"network-request-failed"),a=X().setTimeout(()=>{i(o)},fl.get());function c(){X().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_l=500,El=600,Il="_blank",Tl="http://localhost";class Pr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sl(t,e,n,r=_l,s=El){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vl),{width:r.toString(),height:s.toString(),top:i,left:o}),l=N().toLowerCase();n&&(a=Ps(l)?Il:n),As(l)&&(e=e||Tl,c.scrollbars="yes");const h=Object.entries(c).reduce((v,[E,p])=>`${v}${E}=${p},`,"");if(ac(l)&&a!=="_self")return Cl(e||"",a),new Pr(null);const f=window.open(e||"",a,h);w(f,t,"popup-blocked");try{f.focus()}catch{}return new Pr(f)}function Cl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Al="__/auth/handler",kl="emulator/auth/handler",Pl=encodeURIComponent("fac");async function Or(t,e,n,r,s,i){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:it,eventId:s};if(e instanceof Us){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof at){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${Pl}=${encodeURIComponent(c)}`:"";return`${Ol(t)}?${st(a).slice(1)}${l}`}function Ol({config:t}){return t.emulator?Dn(t,kl):`https://${t.authDomain}/${Al}`}/**
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
 */const sn="webStorageSupport";class Rl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vs,this._completeRedirectFn=tl,this._overrideRedirectResult=Zc}async _openPopup(e,n,r,s){var i;oe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Or(e,n,r,wn(),s);return Sl(e,o,$n())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Or(e,n,r,wn(),s);return Dc(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(oe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yl(e),r=new rl(e);return n.register("authEvent",s=>(w(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(sn,{type:sn},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sn];o!==void 0&&n(!!o),ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ds()||ks()||Bn()}}const xl=Rl;var Rr="@firebase/auth",xr="1.7.9";/**
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
 */class Ll{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Dl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nl(t){Qe(new He("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ns(t)},l=new fc(r,s,i,c);return yc(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qe(new He("auth-internal",e=>{const n=Un(e.getProvider("auth").getImmediate());return(r=>new Ll(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(Rr,xr,Dl(t)),Ne(Rr,xr,"esm2017")}/**
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
 */const Ml=5*60,Bl=ds("authIdTokenMaxAge")||Ml;let Lr=null;const Ul=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bl)return;const s=n==null?void 0:n.token;Lr!==s&&(Lr=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ip(t=xa()){const e=ms(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bc(t,{popupRedirectResolver:xl,persistence:[Vc,Rc,Vs]}),r=ds("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Ul(i.toString());kc(n,o,()=>o(n.currentUser)),Ac(n,a=>o(a))}}const s=bo("auth");return s&&vc(n,`http://${s}`),n}function Fl(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pc({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Y("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Nl("Browser");/*!
* sweetalert2 v11.14.1
* Released under the MIT License.
*/function Ys(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function $l(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Dr(t,e){return t.get(Ys(t,e))}function Hl(t,e,n){$l(t,e),e.set(t,n)}function jl(t,e,n){return t.set(Ys(t,e),n),n}const Vl=100,g={},zl=()=>{g.previousActiveElement instanceof HTMLElement?(g.previousActiveElement.focus(),g.previousActiveElement=null):document.body&&document.body.focus()},ql=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,r=window.scrollY;g.restoreFocusTimeout=setTimeout(()=>{zl(),e()},Vl),window.scrollTo(n,r)}),Xs="swal2-",Wl=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"],u=Wl.reduce((t,e)=>(t[e]=Xs+e,t),{}),Kl=["success","warning","info","question","error"],Lt=Kl.reduce((t,e)=>(t[e]=Xs+e,t),{}),Zs="SweetAlert2:",jn=t=>t.charAt(0).toUpperCase()+t.slice(1),F=t=>{console.warn(`${Zs} ${typeof t=="object"?t.join(" "):t}`)},Oe=t=>{console.error(`${Zs} ${t}`)},Nr=[],Gl=t=>{Nr.includes(t)||(Nr.push(t),F(t))},Qs=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gl(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},jt=t=>typeof t=="function"?t():t,Vn=t=>t&&typeof t.toPromise=="function",lt=t=>Vn(t)?t.toPromise():Promise.resolve(t),zn=t=>t&&Promise.resolve(t)===t,$=()=>document.body.querySelector(`.${u.container}`),ut=t=>{const e=$();return e?e.querySelector(t):null},V=t=>ut(`.${t}`),I=()=>V(u.popup),dt=()=>V(u.icon),Jl=()=>V(u["icon-content"]),ei=()=>V(u.title),qn=()=>V(u["html-container"]),ti=()=>V(u.image),Wn=()=>V(u["progress-steps"]),Vt=()=>V(u["validation-message"]),Z=()=>ut(`.${u.actions} .${u.confirm}`),We=()=>ut(`.${u.actions} .${u.cancel}`),Re=()=>ut(`.${u.actions} .${u.deny}`),Yl=()=>V(u["input-label"]),Ke=()=>ut(`.${u.loader}`),ht=()=>V(u.actions),ni=()=>V(u.footer),zt=()=>V(u["timer-progress-bar"]),Kn=()=>V(u.close),Xl=`
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
`,Gn=()=>{const t=I();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((i,o)=>{const a=parseInt(i.getAttribute("tabindex")||"0"),c=parseInt(o.getAttribute("tabindex")||"0");return a>c?1:a<c?-1:0}),r=t.querySelectorAll(Xl),s=Array.from(r).filter(i=>i.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(i=>M(i))},Jn=()=>re(document.body,u.shown)&&!re(document.body,u["toast-shown"])&&!re(document.body,u["no-backdrop"]),qt=()=>{const t=I();return t?re(t,u.toast):!1},Zl=()=>{const t=I();return t?t.hasAttribute("data-loading"):!1},z=(t,e)=>{if(t.textContent="",e){const r=new DOMParser().parseFromString(e,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(o=>{t.appendChild(o)});const i=r.querySelector("body");i&&Array.from(i.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},re=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},Ql=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(u).includes(n)&&!Object.values(Lt).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},j=(t,e,n)=>{if(Ql(t,e),!e.customClass)return;const r=e.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){F(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}_(t,r)}},Wt=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${u.popup} > .${u[e]}`);case"checkbox":return t.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return t.querySelector(`.${u.popup} > .${u.radio} input:checked`)||t.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return t.querySelector(`.${u.popup} > .${u.range} input`);default:return t.querySelector(`.${u.popup} > .${u.input}`)}},ri=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},si=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(r=>{Array.isArray(t)?t.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?t.classList.add(r):t.classList.remove(r)}))},_=(t,e)=>{si(t,e,!0)},Q=(t,e)=>{si(t,e,!1)},pe=(t,e)=>{const n=Array.from(t.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&re(s,e))return s}},Te=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},x=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},D=t=>{t&&(t.style.display="none")},Yn=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{ft(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Mr=(t,e,n,r)=>{const s=t.querySelector(e);s&&s.style.setProperty(n,r)},ft=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?x(t,n):D(t)},M=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),eu=()=>!M(Z())&&!M(Re())&&!M(We()),Br=t=>t.scrollHeight>t.clientHeight,ii=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},Xn=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=zt();n&&M(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},tu=()=>{const t=zt();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),r=e/n*100;t.style.width=`${r}%`},oi=()=>typeof window>"u"||typeof document>"u",nu=`
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
`.replace(/(^|\n)\s*/g,""),ru=()=>{const t=$();return t?(t.remove(),Q([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},ve=()=>{g.currentInstance.resetValidationMessage()},su=()=>{const t=I(),e=pe(t,u.input),n=pe(t,u.file),r=t.querySelector(`.${u.range} input`),s=t.querySelector(`.${u.range} output`),i=pe(t,u.select),o=t.querySelector(`.${u.checkbox} input`),a=pe(t,u.textarea);e.oninput=ve,n.onchange=ve,i.onchange=ve,o.onchange=ve,a.oninput=ve,r.oninput=()=>{ve(),s.value=r.value},r.onchange=()=>{ve(),s.value=r.value}},iu=t=>typeof t=="string"?document.querySelector(t):t,ou=t=>{const e=I();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},au=t=>{window.getComputedStyle(t).direction==="rtl"&&_($(),u.rtl)},cu=t=>{const e=ru();if(oi()){Oe("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=u.container,e&&_(n,u["no-transition"]),z(n,nu);const r=iu(t.target);r.appendChild(n),ou(t),au(r),su()},Zn=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?lu(t,e):t&&z(e,t)},lu=(t,e)=>{t.jquery?uu(e,t):z(e,t.toString())},uu=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Ae=(()=>{if(oi())return!1;const t=document.createElement("div");return typeof t.style.webkitAnimation<"u"?"webkitAnimationEnd":typeof t.style.animation<"u"?"animationend":!1})(),du=(t,e)=>{const n=ht(),r=Ke();!n||!r||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?D(n):x(n),j(n,e,"actions"),hu(n,r,e),z(r,e.loaderHtml||""),j(r,e,"loader"))};function hu(t,e,n){const r=Z(),s=Re(),i=We();!r||!s||!i||(on(r,"confirm",n),on(s,"deny",n),on(i,"cancel",n),fu(r,s,i,n),n.reverseButtons&&(n.toast?(t.insertBefore(i,r),t.insertBefore(s,r)):(t.insertBefore(i,e),t.insertBefore(s,e),t.insertBefore(r,e))))}function fu(t,e,n,r){if(!r.buttonsStyling){Q([t,e,n],u.styled);return}_([t,e,n],u.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor,_(t,u["default-outline"])),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor,_(e,u["default-outline"])),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor,_(n,u["default-outline"]))}function on(t,e,n){const r=jn(e);ft(t,n[`show${r}Button`],"inline-block"),z(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=u[e],j(t,n,`${e}Button`)}const pu=(t,e)=>{const n=Kn();n&&(z(n,e.closeButtonHtml||""),j(n,e,"closeButton"),ft(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},mu=(t,e)=>{const n=$();n&&(gu(n,e.backdrop),wu(n,e.position),bu(n,e.grow),j(n,e,"container"))};function gu(t,e){typeof e=="string"?t.style.background=e:e||_([document.documentElement,document.body],u["no-backdrop"])}function wu(t,e){e&&(e in u?_(t,u[e]):(F('The "position" parameter is not valid, defaulting to "center"'),_(t,u.center)))}function bu(t,e){e&&_(t,u[`grow-${e}`])}var S={innerParams:new WeakMap,domCache:new WeakMap};const yu=["input","file","range","select","radio","checkbox","textarea"],vu=(t,e)=>{const n=I();if(!n)return;const r=S.innerParams.get(t),s=!r||e.input!==r.input;yu.forEach(i=>{const o=pe(n,u[i]);o&&(Iu(i,e.inputAttributes),o.className=u[i],s&&D(o))}),e.input&&(s&&_u(e),Tu(e))},_u=t=>{if(!t.input)return;if(!P[t.input]){Oe(`Unexpected type of input! Expected ${Object.keys(P).join(" | ")}, got "${t.input}"`);return}const e=ai(t.input);if(!e)return;const n=P[t.input](e,t);x(e),t.inputAutoFocus&&setTimeout(()=>{ri(n)})},Eu=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},Iu=(t,e)=>{const n=I();if(!n)return;const r=Wt(n,t);if(r){Eu(r);for(const s in e)r.setAttribute(s,e[s])}},Tu=t=>{if(!t.input)return;const e=ai(t.input);e&&j(e,t,"input")},Qn=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},pt=(t,e,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=u["input-label"];r.setAttribute("for",t.id),r.className=s,typeof n.customClass=="object"&&_(r,n.customClass.inputLabel),r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},ai=t=>{const e=I();if(e)return pe(e,u[t]||u.input)},Dt=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:zn(e)||F(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},P={};P.text=P.email=P.password=P.number=P.tel=P.url=P.search=P.date=P["datetime-local"]=P.time=P.week=P.month=(t,e)=>(Dt(t,e.inputValue),pt(t,t,e),Qn(t,e),t.type=e.input,t);P.file=(t,e)=>(pt(t,t,e),Qn(t,e),t);P.range=(t,e)=>{const n=t.querySelector("input"),r=t.querySelector("output");return Dt(n,e.inputValue),n.type=e.input,Dt(r,e.inputValue),pt(n,t,e),t};P.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");z(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return pt(t,t,e),t};P.radio=t=>(t.textContent="",t);P.checkbox=(t,e)=>{const n=Wt(I(),"checkbox");n.value="1",n.checked=!!e.inputValue;const r=t.querySelector("span");return z(r,e.inputPlaceholder||e.inputLabel),n};P.textarea=(t,e)=>{Dt(t,e.inputValue),Qn(t,e),pt(t,t,e);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(I()).width),s=()=>{if(!document.body.contains(t))return;const i=t.offsetWidth+n(t);i>r?I().style.width=`${i}px`:Te(I(),"width",e.width)};new MutationObserver(s).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const Su=(t,e)=>{const n=qn();n&&(Yn(n),j(n,e,"htmlContainer"),e.html?(Zn(e.html,n),x(n,"block")):e.text?(n.textContent=e.text,x(n,"block")):D(n),vu(t,e))},Cu=(t,e)=>{const n=ni();n&&(Yn(n),ft(n,e.footer,"block"),e.footer&&Zn(e.footer,n),j(n,e,"footer"))},Au=(t,e)=>{const n=S.innerParams.get(t),r=dt();if(r){if(n&&e.icon===n.icon){Fr(r,e),Ur(r,e);return}if(!e.icon&&!e.iconHtml){D(r);return}if(e.icon&&Object.keys(Lt).indexOf(e.icon)===-1){Oe(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),D(r);return}x(r),Fr(r,e),Ur(r,e),_(r,e.showClass&&e.showClass.icon)}},Ur=(t,e)=>{for(const[n,r]of Object.entries(Lt))e.icon!==n&&Q(t,r);_(t,e.icon&&Lt[e.icon]),Ru(t,e),ku(),j(t,e,"icon")},ku=()=>{const t=I();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=e},Pu=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ou=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Fr=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,r="";e.iconHtml?r=$r(e.iconHtml):e.icon==="success"?(r=Pu,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?r=Ou:e.icon&&(r=$r({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==r.trim()&&z(t,r)},Ru=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Mr(t,n,"background-color",e.iconColor);Mr(t,".swal2-success-ring","border-color",e.iconColor)}},$r=t=>`<div class="${u["icon-content"]}">${t}</div>`,xu=(t,e)=>{const n=ti();if(n){if(!e.imageUrl){D(n);return}x(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Te(n,"width",e.imageWidth),Te(n,"height",e.imageHeight),n.className=u.image,j(n,e,"image")}},Lu=(t,e)=>{const n=$(),r=I();if(!(!n||!r)){if(e.toast){Te(n,"width",e.width),r.style.width="100%";const s=Ke();s&&r.insertBefore(s,dt())}else Te(r,"width",e.width);Te(r,"padding",e.padding),e.color&&(r.style.color=e.color),e.background&&(r.style.background=e.background),D(Vt()),Du(r,e)}},Du=(t,e)=>{const n=e.showClass||{};t.className=`${u.popup} ${M(t)?n.popup:""}`,e.toast?(_([document.documentElement,document.body],u["toast-shown"]),_(t,u.toast)):_(t,u.modal),j(t,e,"popup"),typeof e.customClass=="string"&&_(t,e.customClass),e.icon&&_(t,u[`icon-${e.icon}`])},Nu=(t,e)=>{const n=Wn();if(!n)return;const{progressSteps:r,currentProgressStep:s}=e;if(!r||r.length===0||s===void 0){D(n);return}x(n),n.textContent="",s>=r.length&&F("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((i,o)=>{const a=Mu(i);if(n.appendChild(a),o===s&&_(a,u["active-progress-step"]),o!==r.length-1){const c=Bu(e);n.appendChild(c)}})},Mu=t=>{const e=document.createElement("li");return _(e,u["progress-step"]),z(e,t),e},Bu=t=>{const e=document.createElement("li");return _(e,u["progress-step-line"]),t.progressStepsDistance&&Te(e,"width",t.progressStepsDistance),e},Uu=(t,e)=>{const n=ei();n&&(Yn(n),ft(n,e.title||e.titleText,"block"),e.title&&Zn(e.title,n),e.titleText&&(n.innerText=e.titleText),j(n,e,"title"))},ci=(t,e)=>{Lu(t,e),mu(t,e),Nu(t,e),Au(t,e),xu(t,e),Uu(t,e),pu(t,e),Su(t,e),du(t,e),Cu(t,e);const n=I();typeof e.didRender=="function"&&n&&e.didRender(n),g.eventEmitter.emit("didRender",n)},Fu=()=>M(I()),li=()=>{var t;return(t=Z())===null||t===void 0?void 0:t.click()},$u=()=>{var t;return(t=Re())===null||t===void 0?void 0:t.click()},Hu=()=>{var t;return(t=We())===null||t===void 0?void 0:t.click()},Ge=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),ui=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},ju=(t,e,n)=>{ui(t),e.toast||(t.keydownHandler=r=>zu(e,r,n),t.keydownTarget=e.keydownListenerCapture?window:I(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},vn=(t,e)=>{var n;const r=Gn();if(r.length){t=t+e,t===r.length?t=0:t===-1&&(t=r.length-1),r[t].focus();return}(n=I())===null||n===void 0||n.focus()},di=["ArrowRight","ArrowDown"],Vu=["ArrowLeft","ArrowUp"],zu=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?qu(e,t):e.key==="Tab"?Wu(e):[...di,...Vu].includes(e.key)?Ku(e.key):e.key==="Escape"&&Gu(e,t,n)))},qu=(t,e)=>{if(!jt(e.allowEnterKey))return;const n=Wt(I(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;li(),t.preventDefault()}},Wu=t=>{const e=t.target,n=Gn();let r=-1;for(let s=0;s<n.length;s++)if(e===n[s]){r=s;break}t.shiftKey?vn(r,-1):vn(r,1),t.stopPropagation(),t.preventDefault()},Ku=t=>{const e=ht(),n=Z(),r=Re(),s=We();if(!e||!n||!r||!s)return;const i=[n,r,s];if(document.activeElement instanceof HTMLElement&&!i.includes(document.activeElement))return;const o=di.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let c=0;c<e.children.length;c++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&M(a))break}a instanceof HTMLButtonElement&&a.focus()}},Gu=(t,e,n)=>{jt(e.allowEscapeKey)&&(t.preventDefault(),n(Ge.esc))};var Ve={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ju=()=>{const t=$();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},hi=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},fi=typeof window<"u"&&!!window.GestureEvent,Yu=()=>{if(fi&&!re(document.body,u.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,_(document.body,u.iosfix),Xu()}},Xu=()=>{const t=$();if(!t)return;let e;t.ontouchstart=n=>{e=Zu(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Zu=t=>{const e=t.target,n=$(),r=qn();return!n||!r||Qu(t)||ed(t)?!1:e===n||!Br(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Br(r)&&r.contains(e))},Qu=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",ed=t=>t.touches&&t.touches.length>1,td=()=>{if(re(document.body,u.iosfix)){const t=parseInt(document.body.style.top,10);Q(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},nd=()=>{const t=document.createElement("div");t.className=u["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Fe=null;const rd=t=>{Fe===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Fe=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Fe+nd()}px`)},sd=()=>{Fe!==null&&(document.body.style.paddingRight=`${Fe}px`,Fe=null)};function pi(t,e,n,r){qt()?Hr(t,r):(ql(n).then(()=>Hr(t,r)),ui(g)),fi?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Jn()&&(sd(),td(),hi()),id()}function id(){Q([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function me(t){t=ad(t);const e=Ve.swalPromiseResolve.get(this),n=od(this);this.isAwaitingPromise?t.isDismissed||(mt(this),e(t)):n&&e(t)}const od=t=>{const e=I();if(!e)return!1;const n=S.innerParams.get(t);if(!n||re(e,n.hideClass.popup))return!1;Q(e,n.showClass.popup),_(e,n.hideClass.popup);const r=$();return Q(r,n.showClass.backdrop),_(r,n.hideClass.backdrop),cd(t,e,n),!0};function mi(t){const e=Ve.swalPromiseReject.get(this);mt(this),e&&e(t)}const mt=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,S.innerParams.get(t)||t._destroy())},ad=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),cd=(t,e,n)=>{const r=$(),s=Ae&&ii(e);typeof n.willClose=="function"&&n.willClose(e),g.eventEmitter.emit("willClose",e),s?ld(t,e,r,n.returnFocus,n.didClose):pi(t,r,n.returnFocus,n.didClose)},ld=(t,e,n,r,s)=>{Ae&&(g.swalCloseEventFinishedCallback=pi.bind(null,t,n,r,s),e.addEventListener(Ae,function(i){i.target===e&&(g.swalCloseEventFinishedCallback(),delete g.swalCloseEventFinishedCallback)}))},Hr=(t,e)=>{setTimeout(()=>{typeof e=="function"&&e.bind(t.params)(),g.eventEmitter.emit("didClose"),t._destroy&&t._destroy()})},ze=t=>{let e=I();if(e||new En,e=I(),!e)return;const n=Ke();qt()?D(dt()):ud(e,t),x(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},ud=(t,e)=>{const n=ht(),r=Ke();!n||!r||(!e&&M(Z())&&(e=Z()),x(n),e&&(D(e),r.setAttribute("data-button-to-replace",e.className),n.insertBefore(r,e)),_([t,n],u.loading))},dd=(t,e)=>{e.input==="select"||e.input==="radio"?gd(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Vn(e.inputValue)||zn(e.inputValue))&&(ze(Z()),wd(t,e))},hd=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return fd(n);case"radio":return pd(n);case"file":return md(n);default:return e.inputAutoTrim?n.value.trim():n.value}},fd=t=>t.checked?1:0,pd=t=>t.checked?t.value:null,md=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,gd=(t,e)=>{const n=I();if(!n)return;const r=s=>{e.input==="select"?bd(n,Nt(s),e):e.input==="radio"&&yd(n,Nt(s),e)};Vn(e.inputOptions)||zn(e.inputOptions)?(ze(Z()),lt(e.inputOptions).then(s=>{t.hideLoading(),r(s)})):typeof e.inputOptions=="object"?r(e.inputOptions):Oe(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},wd=(t,e)=>{const n=t.getInput();n&&(D(n),lt(e.inputValue).then(r=>{n.value=e.input==="number"?`${parseFloat(r)||0}`:`${r}`,x(n),n.focus(),t.hideLoading()}).catch(r=>{Oe(`Error in inputValue promise: ${r}`),n.value="",x(n),n.focus(),t.hideLoading()}))};function bd(t,e,n){const r=pe(t,u.select);if(!r)return;const s=(i,o,a)=>{const c=document.createElement("option");c.value=a,z(c,o),c.selected=gi(a,n.inputValue),i.appendChild(c)};e.forEach(i=>{const o=i[0],a=i[1];if(Array.isArray(a)){const c=document.createElement("optgroup");c.label=o,c.disabled=!1,r.appendChild(c),a.forEach(l=>s(c,l[1],l[0]))}else s(r,a,o)}),r.focus()}function yd(t,e,n){const r=pe(t,u.radio);if(!r)return;e.forEach(i=>{const o=i[0],a=i[1],c=document.createElement("input"),l=document.createElement("label");c.type="radio",c.name=u.radio,c.value=o,gi(o,n.inputValue)&&(c.checked=!0);const h=document.createElement("span");z(h,a),h.className=u.label,l.appendChild(c),l.appendChild(h),r.appendChild(l)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const Nt=t=>{const e=[];return t instanceof Map?t.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=Nt(s)),e.push([r,s])}):Object.keys(t).forEach(n=>{let r=t[n];typeof r=="object"&&(r=Nt(r)),e.push([n,r])}),e},gi=(t,e)=>!!e&&e.toString()===t.toString(),vd=t=>{const e=S.innerParams.get(t);t.disableButtons(),e.input?wi(t,"confirm"):tr(t,!0)},_d=t=>{const e=S.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?wi(t,"deny"):er(t,!1)},Ed=(t,e)=>{t.disableButtons(),e(Ge.cancel)},wi=(t,e)=>{const n=S.innerParams.get(t);if(!n.input){Oe(`The "input" parameter is needed to be set when using returnInputValueOn${jn(e)}`);return}const r=t.getInput(),s=hd(t,n);n.inputValidator?Id(t,s,e):r&&!r.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||r.validationMessage)):e==="deny"?er(t,s):tr(t,s)},Id=(t,e,n)=>{const r=S.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>lt(r.inputValidator(e,r.validationMessage))).then(i=>{t.enableButtons(),t.enableInput(),i?t.showValidationMessage(i):n==="deny"?er(t,e):tr(t,e)})},er=(t,e)=>{const n=S.innerParams.get(t||void 0);n.showLoaderOnDeny&&ze(Re()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>lt(n.preDeny(e,n.validationMessage))).then(s=>{s===!1?(t.hideLoading(),mt(t)):t.close({isDenied:!0,value:typeof s>"u"?e:s})}).catch(s=>bi(t||void 0,s))):t.close({isDenied:!0,value:e})},jr=(t,e)=>{t.close({isConfirmed:!0,value:e})},bi=(t,e)=>{t.rejectPromise(e)},tr=(t,e)=>{const n=S.innerParams.get(t||void 0);n.showLoaderOnConfirm&&ze(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>lt(n.preConfirm(e,n.validationMessage))).then(s=>{M(Vt())||s===!1?(t.hideLoading(),mt(t)):jr(t,typeof s>"u"?e:s)}).catch(s=>bi(t||void 0,s))):jr(t,e)};function Mt(){const t=S.innerParams.get(this);if(!t)return;const e=S.domCache.get(this);D(e.loader),qt()?t.icon&&x(dt()):Td(e),Q([e.popup,e.actions],u.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const Td=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?x(e[0],"inline-block"):eu()&&D(t.actions)};function yi(){const t=S.innerParams.get(this),e=S.domCache.get(this);return e?Wt(e.popup,t.input):null}function vi(t,e,n){const r=S.domCache.get(t);e.forEach(s=>{r[s].disabled=n})}function _i(t,e){const n=I();if(!(!n||!t))if(t.type==="radio"){const r=n.querySelectorAll(`[name="${u.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=e}else t.disabled=e}function Ei(){vi(this,["confirmButton","denyButton","cancelButton"],!1)}function Ii(){vi(this,["confirmButton","denyButton","cancelButton"],!0)}function Ti(){_i(this.getInput(),!1)}function Si(){_i(this.getInput(),!0)}function Ci(t){const e=S.domCache.get(this),n=S.innerParams.get(this);z(e.validationMessage,t),e.validationMessage.className=u["validation-message"],n.customClass&&n.customClass.validationMessage&&_(e.validationMessage,n.customClass.validationMessage),x(e.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",u["validation-message"]),ri(r),_(r,u.inputerror))}function Ai(){const t=S.domCache.get(this);t.validationMessage&&D(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Q(e,u.inputerror))}const $e={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Sd=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Cd={allowEnterKey:void 0},Ad=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ki=t=>Object.prototype.hasOwnProperty.call($e,t),Pi=t=>Sd.indexOf(t)!==-1,Oi=t=>Cd[t],kd=t=>{ki(t)||F(`Unknown parameter "${t}"`)},Pd=t=>{Ad.includes(t)&&F(`The parameter "${t}" is incompatible with toasts`)},Od=t=>{const e=Oi(t);e&&Qs(t,e)},Rd=t=>{t.backdrop===!1&&t.allowOutsideClick&&F('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const e in t)kd(e),t.toast&&Pd(e),Od(e)};function Ri(t){const e=I(),n=S.innerParams.get(this);if(!e||re(e,n.hideClass.popup)){F("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const r=xd(t),s=Object.assign({},n,r);ci(this,s),S.innerParams.set(this,s),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const xd=t=>{const e={};return Object.keys(t).forEach(n=>{Pi(n)?e[n]=t[n]:F(`Invalid parameter to update: ${n}`)}),e};function xi(){const t=S.domCache.get(this),e=S.innerParams.get(this);if(!e){Li(this);return}t.popup&&g.swalCloseEventFinishedCallback&&(g.swalCloseEventFinishedCallback(),delete g.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),g.eventEmitter.emit("didDestroy"),Ld(this)}const Ld=t=>{Li(t),delete t.params,delete g.keydownHandler,delete g.keydownTarget,delete g.currentInstance},Li=t=>{t.isAwaitingPromise?(an(S,t),t.isAwaitingPromise=!0):(an(Ve,t),an(S,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},an=(t,e)=>{for(const n in t)t[n].delete(e)};var Dd=Object.freeze({__proto__:null,_destroy:xi,close:me,closeModal:me,closePopup:me,closeToast:me,disableButtons:Ii,disableInput:Si,disableLoading:Mt,enableButtons:Ei,enableInput:Ti,getInput:yi,handleAwaitingPromise:mt,hideLoading:Mt,rejectPromise:mi,resetValidationMessage:Ai,showValidationMessage:Ci,update:Ri});const Nd=(t,e,n)=>{t.toast?Md(t,e,n):(Ud(e),Fd(e),$d(t,e,n))},Md=(t,e,n)=>{e.popup.onclick=()=>{t&&(Bd(t)||t.timer||t.input)||n(Ge.close)}},Bd=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let Bt=!1;const Ud=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(Bt=!0)}}},Fd=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(Bt=!0)}}},$d=(t,e,n)=>{e.container.onclick=r=>{if(Bt){Bt=!1;return}r.target===e.container&&jt(t.allowOutsideClick)&&n(Ge.backdrop)}},Hd=t=>typeof t=="object"&&t.jquery,Vr=t=>t instanceof Element||Hd(t),jd=t=>{const e={};return typeof t[0]=="object"&&!Vr(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,r)=>{const s=t[r];typeof s=="string"||Vr(s)?e[n]=s:s!==void 0&&Oe(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),e};function Vd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function zd(t){class e extends this{_main(r,s){return super._main(r,Object.assign({},t,s))}}return e}const qd=()=>g.timeout&&g.timeout.getTimerLeft(),Di=()=>{if(g.timeout)return tu(),g.timeout.stop()},Ni=()=>{if(g.timeout){const t=g.timeout.start();return Xn(t),t}},Wd=()=>{const t=g.timeout;return t&&(t.running?Di():Ni())},Kd=t=>{if(g.timeout){const e=g.timeout.increase(t);return Xn(e,!0),e}},Gd=()=>!!(g.timeout&&g.timeout.isRunning());let zr=!1;const _n={};function Jd(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";_n[t]=this,zr||(document.body.addEventListener("click",Yd),zr=!0)}const Yd=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in _n){const r=e.getAttribute(n);if(r){_n[n].fire({template:r});return}}};class Xd{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const r=this._getHandlersByEventName(e);r.includes(n)||r.push(n)}once(e,n){var r=this;const s=function(){r.removeListener(e,s);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];n.apply(r,o)};this.on(e,s)}emit(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];this._getHandlersByEventName(e).forEach(i=>{try{i.apply(this,r)}catch(o){console.error(o)}})}removeListener(e,n){const r=this._getHandlersByEventName(e),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}g.eventEmitter=new Xd;const Zd=(t,e)=>{g.eventEmitter.on(t,e)},Qd=(t,e)=>{g.eventEmitter.once(t,e)},eh=(t,e)=>{if(!t){g.eventEmitter.reset();return}e?g.eventEmitter.removeListener(t,e):g.eventEmitter.removeAllListeners(t)};var th=Object.freeze({__proto__:null,argsToParams:jd,bindClickHandler:Jd,clickCancel:Hu,clickConfirm:li,clickDeny:$u,enableLoading:ze,fire:Vd,getActions:ht,getCancelButton:We,getCloseButton:Kn,getConfirmButton:Z,getContainer:$,getDenyButton:Re,getFocusableElements:Gn,getFooter:ni,getHtmlContainer:qn,getIcon:dt,getIconContent:Jl,getImage:ti,getInputLabel:Yl,getLoader:Ke,getPopup:I,getProgressSteps:Wn,getTimerLeft:qd,getTimerProgressBar:zt,getTitle:ei,getValidationMessage:Vt,increaseTimer:Kd,isDeprecatedParameter:Oi,isLoading:Zl,isTimerRunning:Gd,isUpdatableParameter:Pi,isValidParameter:ki,isVisible:Fu,mixin:zd,off:eh,on:Zd,once:Qd,resumeTimer:Ni,showLoading:ze,stopTimer:Di,toggleTimer:Wd});class nh{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Mi=["swal-title","swal-html","swal-footer"],rh=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return dh(n),Object.assign(sh(n),ih(n),oh(n),ah(n),ch(n),lh(n),uh(n,Mi))},sh=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(r=>{ke(r,["name","value"]);const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(typeof $e[s]=="boolean"?e[s]=i!=="false":typeof $e[s]=="object"?e[s]=JSON.parse(i):e[s]=i)}),e},ih=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),i=r.getAttribute("value");!s||!i||(e[s]=new Function(`return ${i}`)())}),e},oh=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(r=>{ke(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(e[`${s}ButtonText`]=r.innerHTML,e[`show${jn(s)}Button`]=!0,r.hasAttribute("color")&&(e[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(e[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),e},ah=t=>{const e={},n=t.querySelector("swal-image");return n&&(ke(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},ch=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ke(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},lh=t=>{const e={},n=t.querySelector("swal-input");n&&(ke(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const r=Array.from(t.querySelectorAll("swal-input-option"));return r.length&&(e.inputOptions={},r.forEach(s=>{ke(s,["value"]);const i=s.getAttribute("value");if(!i)return;const o=s.innerHTML;e.inputOptions[i]=o})),e},uh=(t,e)=>{const n={};for(const r in e){const s=e[r],i=t.querySelector(s);i&&(ke(i,[]),n[s.replace(/^swal-/,"")]=i.innerHTML.trim())}return n},dh=t=>{const e=Mi.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const r=n.tagName.toLowerCase();e.includes(r)||F(`Unrecognized element <${r}>`)})},ke=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&F([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Bi=10,hh=t=>{const e=$(),n=I();typeof t.willOpen=="function"&&t.willOpen(n),g.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;mh(e,n,t),setTimeout(()=>{fh(e,n)},Bi),Jn()&&(ph(e,t.scrollbarPadding,s),Ju()),!qt()&&!g.previousActiveElement&&(g.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),g.eventEmitter.emit("didOpen",n),Q(e,u["no-transition"])},Ui=t=>{const e=I();if(t.target!==e||!Ae)return;const n=$();e.removeEventListener(Ae,Ui),n.style.overflowY="auto"},fh=(t,e)=>{Ae&&ii(e)?(t.style.overflowY="hidden",e.addEventListener(Ae,Ui)):t.style.overflowY="auto"},ph=(t,e,n)=>{Yu(),e&&n!=="hidden"&&rd(n),setTimeout(()=>{t.scrollTop=0})},mh=(t,e,n)=>{_(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),x(e,"grid"),setTimeout(()=>{_(e,n.showClass.popup),e.style.removeProperty("opacity")},Bi)):x(e,"grid"),_([document.documentElement,document.body],u.shown),n.heightAuto&&n.backdrop&&!n.toast&&_([document.documentElement,document.body],u["height-auto"])};var qr={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function gh(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=qr.email),t.input==="url"&&(t.inputValidator=qr.url))}function wh(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(F('Target parameter is not valid, defaulting to "body"'),t.target="body")}function bh(t){gh(t),t.showLoaderOnConfirm&&!t.preConfirm&&F(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),wh(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),cu(t)}let J;var yt=new WeakMap;class O{constructor(){if(Hl(this,yt,void 0),typeof window>"u")return;J=this;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const s=Object.freeze(this.constructor.argsToParams(n));this.params=s,this.isAwaitingPromise=!1,jl(yt,this,this._main(J.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(Rd(Object.assign({},n,e)),g.currentInstance){const i=Ve.swalPromiseResolve.get(g.currentInstance),{isAwaitingPromise:o}=g.currentInstance;g.currentInstance._destroy(),o||i({isDismissed:!0}),Jn()&&hi()}g.currentInstance=J;const r=vh(e,n);bh(r),Object.freeze(r),g.timeout&&(g.timeout.stop(),delete g.timeout),clearTimeout(g.restoreFocusTimeout);const s=_h(J);return ci(J,r),S.innerParams.set(J,r),yh(J,s,r)}then(e){return Dr(yt,this).then(e)}finally(e){return Dr(yt,this).finally(e)}}const yh=(t,e,n)=>new Promise((r,s)=>{const i=o=>{t.close({isDismissed:!0,dismiss:o})};Ve.swalPromiseResolve.set(t,r),Ve.swalPromiseReject.set(t,s),e.confirmButton.onclick=()=>{vd(t)},e.denyButton.onclick=()=>{_d(t)},e.cancelButton.onclick=()=>{Ed(t,i)},e.closeButton.onclick=()=>{i(Ge.close)},Nd(n,e,i),ju(g,n,i),dd(t,n),hh(n),Eh(g,n,i),Ih(e,n),setTimeout(()=>{e.container.scrollTop=0})}),vh=(t,e)=>{const n=rh(t),r=Object.assign({},$e,e,n,t);return r.showClass=Object.assign({},$e.showClass,r.showClass),r.hideClass=Object.assign({},$e.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},_h=t=>{const e={popup:I(),container:$(),actions:ht(),confirmButton:Z(),denyButton:Re(),cancelButton:We(),loader:Ke(),closeButton:Kn(),validationMessage:Vt(),progressSteps:Wn()};return S.domCache.set(t,e),e},Eh=(t,e,n)=>{const r=zt();D(r),e.timer&&(t.timeout=new nh(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(x(r),j(r,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Xn(e.timer)})))},Ih=(t,e)=>{if(!e.toast){if(!jt(e.allowEnterKey)){Qs("allowEnterKey"),Ch();return}Th(t)||Sh(t,e)||vn(-1,1)}},Th=t=>{const e=t.popup.querySelectorAll("[autofocus]");for(const n of e)if(n instanceof HTMLElement&&M(n))return n.focus(),!0;return!1},Sh=(t,e)=>e.focusDeny&&M(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&M(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&M(t.confirmButton)?(t.confirmButton.focus(),!0):!1,Ch=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}O.prototype.disableButtons=Ii;O.prototype.enableButtons=Ei;O.prototype.getInput=yi;O.prototype.disableInput=Si;O.prototype.enableInput=Ti;O.prototype.hideLoading=Mt;O.prototype.disableLoading=Mt;O.prototype.showValidationMessage=Ci;O.prototype.resetValidationMessage=Ai;O.prototype.close=me;O.prototype.closePopup=me;O.prototype.closeModal=me;O.prototype.closeToast=me;O.prototype.rejectPromise=mi;O.prototype.update=Ri;O.prototype._destroy=xi;Object.assign(O,th);Object.keys(Dd).forEach(t=>{O[t]=function(){return J&&J[t]?J[t](...arguments):null}});O.DismissReason=Ge;O.version="11.14.1";const En=O;En.default=En;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');function Fi(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ah}=Object.prototype,{getPrototypeOf:nr}=Object,Kt=(t=>e=>{const n=Ah.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),K=t=>(t=t.toLowerCase(),e=>Kt(e)===t),Gt=t=>e=>typeof e===t,{isArray:Je}=Array,nt=Gt("undefined");function kh(t){return t!==null&&!nt(t)&&t.constructor!==null&&!nt(t.constructor)&&H(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const $i=K("ArrayBuffer");function Ph(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&$i(t.buffer),e}const Oh=Gt("string"),H=Gt("function"),Hi=Gt("number"),Jt=t=>t!==null&&typeof t=="object",Rh=t=>t===!0||t===!1,Tt=t=>{if(Kt(t)!=="object")return!1;const e=nr(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},xh=K("Date"),Lh=K("File"),Dh=K("Blob"),Nh=K("FileList"),Mh=t=>Jt(t)&&H(t.pipe),Bh=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||H(t.append)&&((e=Kt(t))==="formdata"||e==="object"&&H(t.toString)&&t.toString()==="[object FormData]"))},Uh=K("URLSearchParams"),[Fh,$h,Hh,jh]=["ReadableStream","Request","Response","Headers"].map(K),Vh=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function gt(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Je(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function ji(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Ee=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Vi=t=>!nt(t)&&t!==Ee;function In(){const{caseless:t}=Vi(this)&&this||{},e={},n=(r,s)=>{const i=t&&ji(e,s)||s;Tt(e[i])&&Tt(r)?e[i]=In(e[i],r):Tt(r)?e[i]=In({},r):Je(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&gt(arguments[r],n);return e}const zh=(t,e,n,{allOwnKeys:r}={})=>(gt(e,(s,i)=>{n&&H(s)?t[i]=Fi(s,n):t[i]=s},{allOwnKeys:r}),t),qh=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Wh=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Kh=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&nr(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Gh=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Jh=t=>{if(!t)return null;if(Je(t))return t;let e=t.length;if(!Hi(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Yh=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&nr(Uint8Array)),Xh=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Zh=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Qh=K("HTMLFormElement"),ef=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Wr=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),tf=K("RegExp"),zi=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};gt(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},nf=t=>{zi(t,(e,n)=>{if(H(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(H(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rf=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Je(t)?r(t):r(String(t).split(e)),n},sf=()=>{},of=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,cn="abcdefghijklmnopqrstuvwxyz",Kr="0123456789",qi={DIGIT:Kr,ALPHA:cn,ALPHA_DIGIT:cn+cn.toUpperCase()+Kr},af=(t=16,e=qi.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function cf(t){return!!(t&&H(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const lf=t=>{const e=new Array(10),n=(r,s)=>{if(Jt(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Je(r)?[]:{};return gt(r,(o,a)=>{const c=n(o,s+1);!nt(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},uf=K("AsyncFunction"),df=t=>t&&(Jt(t)||H(t))&&H(t.then)&&H(t.catch),Wi=((t,e)=>t?setImmediate:e?((n,r)=>(Ee.addEventListener("message",({source:s,data:i})=>{s===Ee&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Ee.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",H(Ee.postMessage)),hf=typeof queueMicrotask<"u"?queueMicrotask.bind(Ee):typeof process<"u"&&process.nextTick||Wi,d={isArray:Je,isArrayBuffer:$i,isBuffer:kh,isFormData:Bh,isArrayBufferView:Ph,isString:Oh,isNumber:Hi,isBoolean:Rh,isObject:Jt,isPlainObject:Tt,isReadableStream:Fh,isRequest:$h,isResponse:Hh,isHeaders:jh,isUndefined:nt,isDate:xh,isFile:Lh,isBlob:Dh,isRegExp:tf,isFunction:H,isStream:Mh,isURLSearchParams:Uh,isTypedArray:Yh,isFileList:Nh,forEach:gt,merge:In,extend:zh,trim:Vh,stripBOM:qh,inherits:Wh,toFlatObject:Kh,kindOf:Kt,kindOfTest:K,endsWith:Gh,toArray:Jh,forEachEntry:Xh,matchAll:Zh,isHTMLForm:Qh,hasOwnProperty:Wr,hasOwnProp:Wr,reduceDescriptors:zi,freezeMethods:nf,toObjectSet:rf,toCamelCase:ef,noop:sf,toFiniteNumber:of,findKey:ji,global:Ee,isContextDefined:Vi,ALPHABET:qi,generateString:af,isSpecCompliantForm:cf,toJSONObject:lf,isAsyncFn:uf,isThenable:df,setImmediate:Wi,asap:hf};function y(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}d.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.status}}});const Ki=y.prototype,Gi={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Gi[t]={value:t}});Object.defineProperties(y,Gi);Object.defineProperty(Ki,"isAxiosError",{value:!0});y.from=(t,e,n,r,s,i)=>{const o=Object.create(Ki);return d.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),y.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const ff=null;function Tn(t){return d.isPlainObject(t)||d.isArray(t)}function Ji(t){return d.endsWith(t,"[]")?t.slice(0,-2):t}function Gr(t,e,n){return t?t.concat(e).map(function(s,i){return s=Ji(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function pf(t){return d.isArray(t)&&!t.some(Tn)}const mf=d.toFlatObject(d,{},null,function(e){return/^is[A-Z]/.test(e)});function Yt(t,e,n){if(!d.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,m){return!d.isUndefined(m[b])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(e);if(!d.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(d.isDate(p))return p.toISOString();if(!c&&d.isBlob(p))throw new y("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(p)||d.isTypedArray(p)?c&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function h(p,b,m){let C=p;if(p&&!m&&typeof p=="object"){if(d.endsWith(b,"{}"))b=r?b:b.slice(0,-2),p=JSON.stringify(p);else if(d.isArray(p)&&pf(p)||(d.isFileList(p)||d.endsWith(b,"[]"))&&(C=d.toArray(p)))return b=Ji(b),C.forEach(function(k,q){!(d.isUndefined(k)||k===null)&&e.append(o===!0?Gr([b],q,i):o===null?b:b+"[]",l(k))}),!1}return Tn(p)?!0:(e.append(Gr(m,b,i),l(p)),!1)}const f=[],v=Object.assign(mf,{defaultVisitor:h,convertValue:l,isVisitable:Tn});function E(p,b){if(!d.isUndefined(p)){if(f.indexOf(p)!==-1)throw Error("Circular reference detected in "+b.join("."));f.push(p),d.forEach(p,function(C,A){(!(d.isUndefined(C)||C===null)&&s.call(e,C,d.isString(A)?A.trim():A,b,v))===!0&&E(C,b?b.concat(A):[A])}),f.pop()}}if(!d.isObject(t))throw new TypeError("data must be an object");return E(t),e}function Jr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function rr(t,e){this._pairs=[],t&&Yt(t,this,e)}const Yi=rr.prototype;Yi.append=function(e,n){this._pairs.push([e,n])};Yi.toString=function(e){const n=e?function(r){return e.call(this,r,Jr)}:Jr;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function gf(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xi(t,e,n){if(!e)return t;const r=n&&n.encode||gf,s=n&&n.serialize;let i;if(s?i=s(e,n):i=d.isURLSearchParams(e)?e.toString():new rr(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Yr{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){d.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Zi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},wf=typeof URLSearchParams<"u"?URLSearchParams:rr,bf=typeof FormData<"u"?FormData:null,yf=typeof Blob<"u"?Blob:null,vf={isBrowser:!0,classes:{URLSearchParams:wf,FormData:bf,Blob:yf},protocols:["http","https","file","blob","url","data"]},sr=typeof window<"u"&&typeof document<"u",Sn=typeof navigator=="object"&&navigator||void 0,_f=sr&&(!Sn||["ReactNative","NativeScript","NS"].indexOf(Sn.product)<0),Ef=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",If=sr&&window.location.href||"http://localhost",Tf=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:sr,hasStandardBrowserEnv:_f,hasStandardBrowserWebWorkerEnv:Ef,navigator:Sn,origin:If},Symbol.toStringTag,{value:"Module"})),B={...Tf,...vf};function Sf(t,e){return Yt(t,new B.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return B.isNode&&d.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Cf(t){return d.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Af(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Qi(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&d.isArray(s)?s.length:o,c?(d.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!d.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&d.isArray(s[o])&&(s[o]=Af(s[o])),!a)}if(d.isFormData(t)&&d.isFunction(t.entries)){const n={};return d.forEachEntry(t,(r,s)=>{e(Cf(r),s,n,0)}),n}return null}function kf(t,e,n){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const wt={transitional:Zi,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=d.isObject(e);if(i&&d.isHTMLForm(e)&&(e=new FormData(e)),d.isFormData(e))return s?JSON.stringify(Qi(e)):e;if(d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e)||d.isReadableStream(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Sf(e,this.formSerializer).toString();if((a=d.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Yt(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),kf(e)):e}],transformResponse:[function(e){const n=this.transitional||wt.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(d.isResponse(e)||d.isReadableStream(e))return e;if(e&&d.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?y.from(a,y.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],t=>{wt.headers[t]={}});const Pf=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Of=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Pf[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Xr=Symbol("internals");function Xe(t){return t&&String(t).trim().toLowerCase()}function St(t){return t===!1||t==null?t:d.isArray(t)?t.map(St):String(t)}function Rf(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const xf=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ln(t,e,n,r,s){if(d.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!d.isString(e)){if(d.isString(r))return e.indexOf(r)!==-1;if(d.isRegExp(r))return r.test(e)}}function Lf(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Df(t,e){const n=d.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class U{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const h=Xe(c);if(!h)throw new Error("header name must be a non-empty string");const f=d.findKey(s,h);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=St(a))}const o=(a,c)=>d.forEach(a,(l,h)=>i(l,h,c));if(d.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(d.isString(e)&&(e=e.trim())&&!xf(e))o(Of(e),n);else if(d.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Xe(e),e){const r=d.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Rf(s);if(d.isFunction(n))return n.call(this,s,r);if(d.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Xe(e),e){const r=d.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ln(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Xe(o),o){const a=d.findKey(r,o);a&&(!n||ln(r,r[a],a,n))&&(delete r[a],s=!0)}}return d.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||ln(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return d.forEach(this,(s,i)=>{const o=d.findKey(r,i);if(o){n[o]=St(s),delete n[i];return}const a=e?Lf(i):String(i).trim();a!==i&&delete n[i],n[a]=St(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return d.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&d.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Xr]=this[Xr]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Xe(o);r[a]||(Df(s,o),r[a]=!0)}return d.isArray(e)?e.forEach(i):i(e),this}}U.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(U.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});d.freezeMethods(U);function un(t,e){const n=this||wt,r=e||n,s=U.from(r.headers);let i=r.data;return d.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function eo(t){return!!(t&&t.__CANCEL__)}function Ye(t,e,n){y.call(this,t??"canceled",y.ERR_CANCELED,e,n),this.name="CanceledError"}d.inherits(Ye,y,{__CANCEL__:!0});function to(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Nf(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Mf(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),h=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,v=0;for(;f!==s;)v+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const E=h&&l-h;return E?Math.round(v*1e3/E):void 0}}function Bf(t,e){let n=0,r=1e3/e,s,i;const o=(l,h=Date.now())=>{n=h,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const h=Date.now(),f=h-n;f>=r?o(l,h):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Ut=(t,e,n=3)=>{let r=0;const s=Mf(50,250);return Bf(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),h=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&h?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Zr=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},Qr=t=>(...e)=>d.asap(()=>t(...e)),Uf=B.hasStandardBrowserEnv?function(){const e=B.navigator&&/(msie|trident)/i.test(B.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=d.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),Ff=B.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];d.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),d.isString(r)&&o.push("path="+r),d.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $f(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Hf(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function no(t,e){return t&&!$f(e)?Hf(t,e):e}const es=t=>t instanceof U?{...t}:t;function Pe(t,e){e=e||{};const n={};function r(l,h,f){return d.isPlainObject(l)&&d.isPlainObject(h)?d.merge.call({caseless:f},l,h):d.isPlainObject(h)?d.merge({},h):d.isArray(h)?h.slice():h}function s(l,h,f){if(d.isUndefined(h)){if(!d.isUndefined(l))return r(void 0,l,f)}else return r(l,h,f)}function i(l,h){if(!d.isUndefined(h))return r(void 0,h)}function o(l,h){if(d.isUndefined(h)){if(!d.isUndefined(l))return r(void 0,l)}else return r(void 0,h)}function a(l,h,f){if(f in e)return r(l,h);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,h)=>s(es(l),es(h),!0)};return d.forEach(Object.keys(Object.assign({},t,e)),function(h){const f=c[h]||s,v=f(t[h],e[h],h);d.isUndefined(v)&&f!==a||(n[h]=v)}),n}const ro=t=>{const e=Pe({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=U.from(o),e.url=Xi(no(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(d.isFormData(n)){if(B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...h]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...h].join("; "))}}if(B.hasStandardBrowserEnv&&(r&&d.isFunction(r)&&(r=r(e)),r||r!==!1&&Uf(e.url))){const l=s&&i&&Ff.read(i);l&&o.set(s,l)}return e},jf=typeof XMLHttpRequest<"u",Vf=jf&&function(t){return new Promise(function(n,r){const s=ro(t);let i=s.data;const o=U.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,h,f,v,E,p;function b(){E&&E(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(h),s.signal&&s.signal.removeEventListener("abort",h)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function C(){if(!m)return;const k=U.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:k,config:t,request:m};to(function(G){n(G),b()},function(G){r(G),b()},L),m=null}"onloadend"in m?m.onloadend=C:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(C)},m.onabort=function(){m&&(r(new y("Request aborted",y.ECONNABORTED,t,m)),m=null)},m.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let q=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||Zi;s.timeoutErrorMessage&&(q=s.timeoutErrorMessage),r(new y(q,L.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,t,m)),m=null},i===void 0&&o.setContentType(null),"setRequestHeader"in m&&d.forEach(o.toJSON(),function(q,L){m.setRequestHeader(L,q)}),d.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),l&&([v,p]=Ut(l,!0),m.addEventListener("progress",v)),c&&m.upload&&([f,E]=Ut(c),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(h=k=>{m&&(r(!k||k.type?new Ye(null,t,m):k),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(h),s.signal&&(s.signal.aborted?h():s.signal.addEventListener("abort",h)));const A=Nf(s.url);if(A&&B.protocols.indexOf(A)===-1){r(new y("Unsupported protocol "+A+":",y.ERR_BAD_REQUEST,t));return}m.send(i||null)})},zf=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const h=l instanceof Error?l:this.reason;r.abort(h instanceof y?h:new Ye(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new y(`timeout ${e} of ms exceeded`,y.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>d.asap(a),c}},qf=function*(t,e){let n=t.byteLength;if(!e||n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},Wf=async function*(t,e){for await(const n of Kf(t))yield*qf(n,e)},Kf=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},ts=(t,e,n,r)=>{const s=Wf(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:h}=await s.next();if(l){a(),c.close();return}let f=h.byteLength;if(n){let v=i+=f;n(v)}c.enqueue(new Uint8Array(h))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Xt=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",so=Xt&&typeof ReadableStream=="function",Gf=Xt&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),io=(t,...e)=>{try{return!!t(...e)}catch{return!1}},Jf=so&&io(()=>{let t=!1;const e=new Request(B.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),ns=64*1024,Cn=so&&io(()=>d.isReadableStream(new Response("").body)),Ft={stream:Cn&&(t=>t.body)};Xt&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ft[e]&&(Ft[e]=d.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new y(`Response type '${e}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Yf=async t=>{if(t==null)return 0;if(d.isBlob(t))return t.size;if(d.isSpecCompliantForm(t))return(await new Request(B.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(d.isArrayBufferView(t)||d.isArrayBuffer(t))return t.byteLength;if(d.isURLSearchParams(t)&&(t=t+""),d.isString(t))return(await Gf(t)).byteLength},Xf=async(t,e)=>{const n=d.toFiniteNumber(t.getContentLength());return n??Yf(e)},Zf=Xt&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:h,withCredentials:f="same-origin",fetchOptions:v}=ro(t);l=l?(l+"").toLowerCase():"text";let E=zf([s,i&&i.toAbortSignal()],o),p;const b=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let m;try{if(c&&Jf&&n!=="get"&&n!=="head"&&(m=await Xf(h,r))!==0){let L=new Request(e,{method:"POST",body:r,duplex:"half"}),W;if(d.isFormData(r)&&(W=L.headers.get("content-type"))&&h.setContentType(W),L.body){const[G,xe]=Zr(m,Ut(Qr(c)));r=ts(L.body,ns,G,xe)}}d.isString(f)||(f=f?"include":"omit");const C="credentials"in Request.prototype;p=new Request(e,{...v,signal:E,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:r,duplex:"half",credentials:C?f:void 0});let A=await fetch(p);const k=Cn&&(l==="stream"||l==="response");if(Cn&&(a||k&&b)){const L={};["status","statusText","headers"].forEach(Le=>{L[Le]=A[Le]});const W=d.toFiniteNumber(A.headers.get("content-length")),[G,xe]=a&&Zr(W,Ut(Qr(a),!0))||[];A=new Response(ts(A.body,ns,G,()=>{xe&&xe(),b&&b()}),L)}l=l||"text";let q=await Ft[d.findKey(Ft,l)||"text"](A,t);return!k&&b&&b(),await new Promise((L,W)=>{to(L,W,{data:q,headers:U.from(A.headers),status:A.status,statusText:A.statusText,config:t,request:p})})}catch(C){throw b&&b(),C&&C.name==="TypeError"&&/fetch/i.test(C.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,t,p),{cause:C.cause||C}):y.from(C,C&&C.code,t,p)}}),An={http:ff,xhr:Vf,fetch:Zf};d.forEach(An,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const rs=t=>`- ${t}`,Qf=t=>d.isFunction(t)||t===null||t===!1,oo={getAdapter:t=>{t=d.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Qf(n)&&(r=An[(o=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(rs).join(`
`):" "+rs(i[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:An};function dn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ye(null,t)}function ss(t){return dn(t),t.headers=U.from(t.headers),t.data=un.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),oo.getAdapter(t.adapter||wt.adapter)(t).then(function(r){return dn(t),r.data=un.call(t,t.transformResponse,r),r.headers=U.from(r.headers),r},function(r){return eo(r)||(dn(t),r&&r.response&&(r.response.data=un.call(t,t.transformResponse,r.response),r.response.headers=U.from(r.response.headers))),Promise.reject(r)})}const ao="1.7.7",ir={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ir[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const is={};ir.transitional=function(e,n,r){function s(i,o){return"[Axios v"+ao+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!is[o]&&(is[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function ep(t,e,n){if(typeof t!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new y("option "+i+" must be "+c,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const kn={assertOptions:ep,validators:ir},ce=kn.validators;class Se{constructor(e){this.defaults=e,this.interceptors={request:new Yr,response:new Yr}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Pe(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&kn.assertOptions(r,{silentJSONParsing:ce.transitional(ce.boolean),forcedJSONParsing:ce.transitional(ce.boolean),clarifyTimeoutError:ce.transitional(ce.boolean)},!1),s!=null&&(d.isFunction(s)?n.paramsSerializer={serialize:s}:kn.assertOptions(s,{encode:ce.function,serialize:ce.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&d.merge(i.common,i[n.method]);i&&d.forEach(["delete","get","head","post","put","patch","common"],p=>{delete i[p]}),n.headers=U.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(c=c&&b.synchronous,a.unshift(b.fulfilled,b.rejected))});const l=[];this.interceptors.response.forEach(function(b){l.push(b.fulfilled,b.rejected)});let h,f=0,v;if(!c){const p=[ss.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,l),v=p.length,h=Promise.resolve(n);f<v;)h=h.then(p[f++],p[f++]);return h}v=a.length;let E=n;for(f=0;f<v;){const p=a[f++],b=a[f++];try{E=p(E)}catch(m){b.call(this,m);break}}try{h=ss.call(this,E)}catch(p){return Promise.reject(p)}for(f=0,v=l.length;f<v;)h=h.then(l[f++],l[f++]);return h}getUri(e){e=Pe(this.defaults,e);const n=no(e.baseURL,e.url);return Xi(n,e.params,e.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(e){Se.prototype[e]=function(n,r){return this.request(Pe(r||{},{method:e,url:n,data:(r||{}).data}))}});d.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Pe(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Se.prototype[e]=n(),Se.prototype[e+"Form"]=n(!0)});class or{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Ye(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new or(function(s){e=s}),cancel:e}}}function tp(t){return function(n){return t.apply(null,n)}}function np(t){return d.isObject(t)&&t.isAxiosError===!0}const Pn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pn).forEach(([t,e])=>{Pn[e]=t});function co(t){const e=new Se(t),n=Fi(Se.prototype.request,e);return d.extend(n,Se.prototype,e,{allOwnKeys:!0}),d.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return co(Pe(t,s))},n}const R=co(wt);R.Axios=Se;R.CanceledError=Ye;R.CancelToken=or;R.isCancel=eo;R.VERSION=ao;R.toFormData=Yt;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(e){return Promise.all(e)};R.spread=tp;R.isAxiosError=np;R.mergeConfig=Pe;R.AxiosHeaders=U;R.formToJSON=t=>Qi(d.isHTMLForm(t)?new FormData(t):t);R.getAdapter=oo.getAdapter;R.HttpStatusCode=Pn;R.default=R;export{En as S,R as a,ip as g,Ra as i,rp as o,sp as s};
//# sourceMappingURL=vendor-CQ3KiSSb.js.map
