"use strict";(()=>{var Ua="186",Nf=0,yl=1,Uf=2,br=1,Of=2,Ar=3,ki=0,Lt=1,Kt=2,Vi=0,Tr=1,Oa=2,El=3,Ml=4,zf=5,zn=100,kf=101,Vf=102,Gf=103,Hf=104,Wf=200,Xf=201,qf=202,Yf=203,Sl=204,wl=205,Kf=206,Zf=207,$f=208,Jf=209,Qf=210,jf=211,e0=212,t0=213,i0=214,za=0,ka=1,Va=2,Cr=3,Ga=4,Ha=5,Wa=6,Xa=7,qa=0,n0=1,r0=2,bi=0,bl=1,Al=2,Tl=3,Ya=4,Cl=5,Rl=6,Dl=7,Pl=300,gn=301,kn=302,Ka=303,Za=304,ys=306,Rr=1e3,Gi=1001,$a=1002,Bt=1003,s0=1004,Es=1005,It=1006,Ja=1007,rn=1008,si=1009,Fl=1010,Ll=1011,Dr=1012,Qa=1013,Ai=1014,vi=1015,_i=1016,ja=1017,eo=1018,Pr=1020,Bl=35902,Il=35899,Nl=1021,Ul=1022,xi=1023,Hi=1026,vn=1027,to=1028,io=1029,_n=1030,no=1031,ro=1033,Ms=33776,Ss=33777,ws=33778,bs=33779,so=35840,ao=35841,oo=35842,uo=35843,lo=36196,co=37492,ho=37496,fo=37488,po=37489,As=37490,mo=37491,go=37808,vo=37809,_o=37810,xo=37811,yo=37812,Eo=37813,Mo=37814,So=37815,wo=37816,bo=37817,Ao=37818,To=37819,Co=37820,Ro=37821,Do=36492,Po=36494,Fo=36495,Lo=36283,Bo=36284,Ts=36285,Io=36286,Cs=2300,No=2301,Uo=2302,Ol=2303,zl=2400,kl=2401,Vl=2402,a0=3200,Rs=0,o0=1,sn="",ht="srgb",Ds="srgb-linear",Ps="linear",it="srgb",Oo=7680,u0=519,l0=512,c0=513,h0=514,zo=515,d0=516,f0=517,ko=518,p0=519,m0=35044,Gl="300 es",Ti=2e3,Fr=2001;function g0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function v0(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function _0(){const e=Fs("canvas");return e.style.display="block",e}var Hl={},Vn=null;function Wl(...e){const t="THREE."+e.shift();Vn?Vn("log",t,...e):console.log(t,...e)}function Xl(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function De(...e){e=Xl(e);const t="THREE."+e.shift();if(Vn)Vn("warn",t,...e);else{const i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Le(...e){e=Xl(e);const t="THREE."+e.shift();if(Vn)Vn("error",t,...e);else{const i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Gn(...e){const t=e.join(" ");t in Hl||(Hl[t]=!0,De(...e))}function x0(e,t,i){return new Promise(function(n,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var y0={[za]:ka,[Va]:Wa,[Ga]:Xa,[Cr]:Ha,[ka]:za,[Wa]:Va,[Xa]:Ga,[Ha]:Cr},xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const n=i[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ql=1234567,Hn=Math.PI/180,Lr=180/Math.PI;function yn(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[e&255]+Vt[e>>8&255]+Vt[e>>16&255]+Vt[e>>24&255]+"-"+Vt[t&255]+Vt[t>>8&255]+"-"+Vt[t>>16&15|64]+Vt[t>>24&255]+"-"+Vt[i&63|128]+Vt[i>>8&255]+"-"+Vt[i>>16&255]+Vt[i>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ve(e,t,i){return Math.max(t,Math.min(i,e))}function Vo(e,t){return(e%t+t)%t}function E0(e,t,i,n,r){return n+(e-t)*(r-n)/(i-t)}function M0(e,t,i){return e!==t?(i-e)/(t-e):0}function Br(e,t,i){return(1-i)*e+i*t}function S0(e,t,i,n){return Br(e,t,1-Math.exp(-i*n))}function w0(e,t=1){return t-Math.abs(Vo(e,t*2)-t)}function b0(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function A0(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function T0(e,t){return e+Math.floor(Math.random()*(t-e+1))}function C0(e,t){return e+Math.random()*(t-e)}function R0(e){return e*(.5-Math.random())}function D0(e){e!==void 0&&(ql=e);let t=ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function P0(e){return e*Hn}function F0(e){return e*Lr}function L0(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function B0(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function I0(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function N0(e,t,i,n,r){const s=Math.cos,a=Math.sin,o=s(i/2),u=a(i/2),l=s((t+n)/2),c=a((t+n)/2),d=s((t-n)/2),h=a((t-n)/2),f=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":e.set(o*c,u*d,u*h,o*l);break;case"YZY":e.set(u*h,o*c,u*d,o*l);break;case"ZXZ":e.set(u*d,u*h,o*c,o*l);break;case"XZX":e.set(o*c,u*g,u*f,o*l);break;case"YXY":e.set(u*f,o*c,u*g,o*l);break;case"ZYZ":e.set(u*g,u*f,o*c,o*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var En={DEG2RAD:Hn,RAD2DEG:Lr,generateUUID:yn,clamp:Ve,euclideanModulo:Vo,mapLinear:E0,inverseLerp:M0,lerp:Br,damp:S0,pingpong:w0,smoothstep:b0,smootherstep:A0,randInt:T0,randFloat:C0,randFloatSpread:R0,seededRandom:D0,degToRad:P0,radToDeg:F0,isPowerOfTwo:L0,ceilPowerOfTwo:B0,floorPowerOfTwo:I0,setQuaternionFromProperEuler:N0,normalize:Zt,denormalize:Wn},le=class pf{static{pf.prototype.isVector2=!0}constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,n=this.y,r=t.elements;return this.x=r[0]*i+r[3]*n+r[6],this.y=r[1]*i+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const n=Math.cos(i),r=Math.sin(i),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,s,a){let o=i[n+0],u=i[n+1],l=i[n+2],c=i[n+3],d=r[s+0],h=r[s+1],f=r[s+2],g=r[s+3];if(c!==g||o!==d||u!==h||l!==f){let _=o*d+u*h+l*f+c*g;_<0&&(d=-d,h=-h,f=-f,g=-g,_=-_);let m=1-a;if(_<.9995){const p=Math.acos(_),y=Math.sin(p);m=Math.sin(m*p)/y,a=Math.sin(a*p)/y,o=o*m+d*a,u=u*m+h*a,l=l*m+f*a,c=c*m+g*a}else{o=o*m+d*a,u=u*m+h*a,l=l*m+f*a,c=c*m+g*a;const p=1/Math.sqrt(o*o+u*u+l*l+c*c);o*=p,u*=p,l*=p,c*=p}}e[t]=o,e[t+1]=u,e[t+2]=l,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,n,r,s){const a=i[n],o=i[n+1],u=i[n+2],l=i[n+3],c=r[s],d=r[s+1],h=r[s+2],f=r[s+3];return e[t]=a*f+l*c+o*h-u*d,e[t+1]=o*f+l*d+u*c-a*h,e[t+2]=u*f+l*h+a*d-o*c,e[t+3]=l*f-a*c-o*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,s=e._order,a=Math.cos,o=Math.sin,u=a(i/2),l=a(n/2),c=a(r/2),d=o(i/2),h=o(n/2),f=o(r/2);switch(s){case"XYZ":this._x=d*l*c+u*h*f,this._y=u*h*c-d*l*f,this._z=u*l*f+d*h*c,this._w=u*l*c-d*h*f;break;case"YXZ":this._x=d*l*c+u*h*f,this._y=u*h*c-d*l*f,this._z=u*l*f-d*h*c,this._w=u*l*c+d*h*f;break;case"ZXY":this._x=d*l*c-u*h*f,this._y=u*h*c+d*l*f,this._z=u*l*f+d*h*c,this._w=u*l*c-d*h*f;break;case"ZYX":this._x=d*l*c-u*h*f,this._y=u*h*c+d*l*f,this._z=u*l*f-d*h*c,this._w=u*l*c+d*h*f;break;case"YZX":this._x=d*l*c+u*h*f,this._y=u*h*c+d*l*f,this._z=u*l*f-d*h*c,this._w=u*l*c-d*h*f;break;case"XZY":this._x=d*l*c-u*h*f,this._y=u*h*c-d*l*f,this._z=u*l*f+d*h*c,this._w=u*l*c+d*h*f;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],u=t[2],l=t[6],c=t[10],d=i+a+c;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(l-o)*h,this._y=(r-u)*h,this._z=(s-n)*h}else if(i>a&&i>c){const h=2*Math.sqrt(1+i-a-c);this._w=(l-o)/h,this._x=.25*h,this._y=(n+s)/h,this._z=(r+u)/h}else if(a>c){const h=2*Math.sqrt(1+a-i-c);this._w=(r-u)/h,this._x=(n+s)/h,this._y=.25*h,this._z=(o+l)/h}else{const h=2*Math.sqrt(1+c-i-a);this._w=(s-n)/h,this._x=(r+u)/h,this._y=(o+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,s=e._w,a=t._x,o=t._y,u=t._z,l=t._w;return this._x=i*l+s*a+n*u-r*o,this._y=n*l+s*o+r*a-i*u,this._z=r*l+s*u+i*o-n*a,this._w=s*l-i*a-n*o-r*u,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,s=-s,a=-a);let o=1-t;if(a<.9995){const u=Math.acos(a),l=Math.sin(u);o=Math.sin(o*u)/l,t=Math.sin(t*u)/l,this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+n*t,this._z=this._z*o+r*t,this._w=this._w*o+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class mf{static{mf.prototype.isVector3=!0}constructor(t=0,i=0,n=0){this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Yl.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6]*r,this.y=s[1]*i+s[4]*n+s[7]*r,this.z=s[2]*i+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*i+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*i+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*i+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const i=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,u=t.w,l=2*(a*r-o*n),c=2*(o*i-s*r),d=2*(s*n-a*i);return this.x=i+u*l+a*d-o*c,this.y=n+u*c+o*l-s*d,this.z=r+u*d+s*c-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*i+s[4]*n+s[8]*r,this.y=s[1]*i+s[5]*n+s[9]*r,this.z=s[2]*i+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const n=t.x,r=t.y,s=t.z,a=i.x,o=i.y,u=i.z;return this.x=r*u-s*o,this.y=s*a-n*u,this.z=n*o-r*a,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const n=this.dot(t)/i;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return i*i+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){const r=Math.sin(i)*t;return this.x=r*Math.sin(n),this.y=Math.cos(i)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=r,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Go=new R,Yl=new Wi,Oe=class gf{static{gf.prototype.isMatrix3=!0}constructor(t,i,n,r,s,a,o,u,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,u,l)}set(t,i,n,r,s,a,o,u,l){const c=this.elements;return c[0]=t,c[1]=r,c[2]=o,c[3]=i,c[4]=s,c[5]=u,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],c=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],w=r[4],v=r[7],b=r[2],T=r[5],C=r[8];return s[0]=a*_+o*y+u*b,s[3]=a*m+o*w+u*T,s[6]=a*p+o*v+u*C,s[1]=l*_+c*y+d*b,s[4]=l*m+c*w+d*T,s[7]=l*p+c*v+d*C,s[2]=h*_+f*y+g*b,s[5]=h*m+f*w+g*T,s[8]=h*p+f*v+g*C,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],u=t[6],l=t[7],c=t[8];return i*a*c-i*o*l-n*s*c+n*o*u+r*s*l-r*a*u}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],u=t[6],l=t[7],c=t[8],d=c*a-o*l,h=o*u-c*s,f=l*s-a*u,g=i*d+n*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(r*l-c*n)*_,t[2]=(o*n-r*a)*_,t[3]=h*_,t[4]=(c*i-r*u)*_,t[5]=(r*s-o*i)*_,t[6]=f*_,t[7]=(n*u-l*i)*_,t[8]=(a*i-n*s)*_,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,r,s,a,o){const u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*a+l*o)+a+t,-r*l,r*u,-r*(-l*a+u*o)+o+i,0,0,1),this}scale(t,i){return Gn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ho.makeScale(t,i)),this}rotate(t){return Gn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ho.makeRotation(-t)),this}translate(t,i){return Gn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ho.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<9;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Oe,Kl=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function U0(){const e={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===sn?Ps:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Gn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Gn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Ds]:{primaries:t,whitePoint:n,transfer:Ps,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:t,whitePoint:n,transfer:it,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),e}var We=U0();function Xi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Xn(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var qn,O0=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qn===void 0&&(qn=Fs("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=qn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Xi(r[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xi(t[i]/255)*255):t[i]=Xi(t[i]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},z0=0,Wo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,a=n.length;s<a;s++)n[s].isDataTexture?r.push(Xo(n[s].image)):r.push(Xo(n[s]))}else r=Xo(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xo(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?O0.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var k0=0,qo=new R,di=class Ia extends xn{constructor(t=Ia.DEFAULT_IMAGE,i=Ia.DEFAULT_MAPPING,n=Gi,r=Gi,s=It,a=rn,o=xi,u=si,l=Ia.DEFAULT_ANISOTROPY,c=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=yn(),this.name="",this.source=new Wo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qo).x}get height(){return this.source.getSize(qo).y}get depth(){return this.source.getSize(qo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const n=t[i];if(n===void 0){De(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){De(`Texture.setValues(): property '${i}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[i]=n}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};di.DEFAULT_IMAGE=null,di.DEFAULT_MAPPING=Pl,di.DEFAULT_ANISOTROPY=1;var pt=class vf{static{vf.prototype.isVector4=!0}constructor(t=0,i=0,n=0,r=1){this.x=t,this.y=i,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,r){return this.x=t,this.y=i,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*i+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*i+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*i+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*i+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,r,s;const u=t.elements,l=u[0],c=u[4],d=u[8],h=u[1],f=u[5],g=u[9],_=u[2],m=u[6],p=u[10];if(Math.abs(c-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(l+1)/2,v=(f+1)/2,b=(p+1)/2,T=(c+h)/4,C=(d+_)/4,x=(g+m)/4;return w>v&&w>b?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=T/n,s=C/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=x/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=C/s,r=x/s),this.set(n,r,s,i),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(h-c)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ve(this.x,t.x,i.x),this.y=Ve(this.y,t.y,i.y),this.z=Ve(this.z,t.z,i.z),this.w=Ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ve(this.x,t,i),this.y=Ve(this.y,t,i),this.z=Ve(this.z,t,i),this.w=Ve(this.w,t,i),this}clampLength(t,i){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},V0=class extends xn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const n={width:e,height:t,depth:i.depth},r=new di(n),s=i.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wo(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends V0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$l=class extends di{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},G0=class extends di{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$e=class xl{static{xl.prototype.isMatrix4=!0}constructor(t,i,n,r,s,a,o,u,l,c,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,r,s,a,o,u,l,c,d,h,f,g,_,m)}set(t,i,n,r,s,a,o,u,l,c,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=i,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=u,p[2]=l,p[6]=c,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(t){const i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){const i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,n=t.elements,r=1/Yn.setFromMatrixColumn(t,0).length(),s=1/Yn.setFromMatrixColumn(t,1).length(),a=1/Yn.setFromMatrixColumn(t,2).length();return i[0]=n[0]*r,i[1]=n[1]*r,i[2]=n[2]*r,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*a,i[9]=n[9]*a,i[10]=n[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(r),l=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=a*c,f=a*d,g=o*c,_=o*d;i[0]=u*c,i[4]=-u*d,i[8]=l,i[1]=f+g*l,i[5]=h-_*l,i[9]=-o*u,i[2]=_-h*l,i[6]=g+f*l,i[10]=a*u}else if(t.order==="YXZ"){const h=u*c,f=u*d,g=l*c,_=l*d;i[0]=h+_*o,i[4]=g*o-f,i[8]=a*l,i[1]=a*d,i[5]=a*c,i[9]=-o,i[2]=f*o-g,i[6]=_+h*o,i[10]=a*u}else if(t.order==="ZXY"){const h=u*c,f=u*d,g=l*c,_=l*d;i[0]=h-_*o,i[4]=-a*d,i[8]=g+f*o,i[1]=f+g*o,i[5]=a*c,i[9]=_-h*o,i[2]=-a*l,i[6]=o,i[10]=a*u}else if(t.order==="ZYX"){const h=a*c,f=a*d,g=o*c,_=o*d;i[0]=u*c,i[4]=g*l-f,i[8]=h*l+_,i[1]=u*d,i[5]=_*l+h,i[9]=f*l-g,i[2]=-l,i[6]=o*u,i[10]=a*u}else if(t.order==="YZX"){const h=a*u,f=a*l,g=o*u,_=o*l;i[0]=u*c,i[4]=_-h*d,i[8]=g*d+f,i[1]=d,i[5]=a*c,i[9]=-o*c,i[2]=-l*c,i[6]=f*d+g,i[10]=h-_*d}else if(t.order==="XZY"){const h=a*u,f=a*l,g=o*u,_=o*l;i[0]=u*c,i[4]=-d,i[8]=l*c,i[1]=h*d+_,i[5]=a*c,i[9]=f*d-g,i[2]=g*d-f,i[6]=o*c,i[10]=_*d+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(H0,t,W0)}lookAt(t,i,n){const r=this.elements;return oi.subVectors(t,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),an.crossVectors(n,oi),an.lengthSq()===0&&(Math.abs(n.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),an.crossVectors(n,oi)),an.normalize(),Ls.crossVectors(oi,an),r[0]=an.x,r[4]=Ls.x,r[8]=oi.x,r[1]=an.y,r[5]=Ls.y,r[9]=oi.y,r[2]=an.z,r[6]=Ls.z,r[10]=oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const n=t.elements,r=i.elements,s=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],c=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],w=n[7],v=n[11],b=n[15],T=r[0],C=r[4],x=r[8],M=r[12],F=r[1],P=r[5],D=r[9],G=r[13],L=r[2],O=r[6],$=r[10],V=r[14],ie=r[3],X=r[7],J=r[11],j=r[15];return s[0]=a*T+o*F+u*L+l*ie,s[4]=a*C+o*P+u*O+l*X,s[8]=a*x+o*D+u*$+l*J,s[12]=a*M+o*G+u*V+l*j,s[1]=c*T+d*F+h*L+f*ie,s[5]=c*C+d*P+h*O+f*X,s[9]=c*x+d*D+h*$+f*J,s[13]=c*M+d*G+h*V+f*j,s[2]=g*T+_*F+m*L+p*ie,s[6]=g*C+_*P+m*O+p*X,s[10]=g*x+_*D+m*$+p*J,s[14]=g*M+_*G+m*V+p*j,s[3]=y*T+w*F+v*L+b*ie,s[7]=y*C+w*P+v*O+b*X,s[11]=y*x+w*D+v*$+b*J,s[15]=y*M+w*G+v*V+b*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],u=t[9],l=t[13],c=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],y=u*f-l*h,w=o*f-l*d,v=o*h-u*d,b=a*f-l*c,T=a*h-u*c,C=a*d-o*c;return i*(_*y-m*w+p*v)-n*(g*y-m*b+p*T)+r*(g*w-_*b+p*C)-s*(g*v-_*T+m*C)}determinantAffine(){const t=this.elements,i=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],u=t[2],l=t[6],c=t[10];return i*(a*c-o*l)-n*(s*c-o*u)+r*(s*l-a*u)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=i,r[14]=n),this}invert(){const t=this.elements,i=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],u=t[6],l=t[7],c=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=i*o-n*a,w=i*u-r*a,v=i*l-s*a,b=n*u-r*o,T=n*l-s*o,C=r*l-s*u,x=c*_-d*g,M=c*m-h*g,F=c*p-f*g,P=d*m-h*_,D=d*p-f*_,G=h*p-f*m,L=y*G-w*D+v*P+b*F-T*M+C*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return t[0]=(o*G-u*D+l*P)*O,t[1]=(r*D-n*G-s*P)*O,t[2]=(_*C-m*T+p*b)*O,t[3]=(h*T-d*C-f*b)*O,t[4]=(u*F-a*G-l*M)*O,t[5]=(i*G-r*F+s*M)*O,t[6]=(m*v-g*C-p*w)*O,t[7]=(c*C-h*v+f*w)*O,t[8]=(a*D-o*F+l*x)*O,t[9]=(n*F-i*D-s*x)*O,t[10]=(g*T-_*v+p*y)*O,t[11]=(d*v-c*T-f*y)*O,t[12]=(o*M-a*P-u*x)*O,t[13]=(i*P-n*M+r*x)*O,t[14]=(_*w-g*b-m*y)*O,t[15]=(c*b-d*w+h*y)*O,this}scale(t){const i=this.elements,n=t.x,r=t.y,s=t.z;return i[0]*=n,i[4]*=r,i[8]*=s,i[1]*=n,i[5]*=r,i[9]*=s,i[2]*=n,i[6]*=r,i[10]*=s,i[3]*=n,i[7]*=r,i[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,r))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const n=Math.cos(i),r=Math.sin(i),s=1-n,a=t.x,o=t.y,u=t.z,l=s*a,c=s*o;return this.set(l*a+n,l*o-r*u,l*u+r*o,0,l*o+r*u,c*o+n,c*u-r*a,0,l*u-r*o,c*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,i,r,1,0,0,0,0,1),this}compose(t,i,n){const r=this.elements,s=i._x,a=i._y,o=i._z,u=i._w,l=s+s,c=a+a,d=o+o,h=s*l,f=s*c,g=s*d,_=a*c,m=a*d,p=o*d,y=u*l,w=u*c,v=u*d,b=n.x,T=n.y,C=n.z;return r[0]=(1-(_+p))*b,r[1]=(f+v)*b,r[2]=(g-w)*b,r[3]=0,r[4]=(f-v)*T,r[5]=(1-(h+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+w)*C,r[9]=(m-y)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,i,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),i.identity(),this;let a=Yn.set(r[0],r[1],r[2]).length();const o=Yn.set(r[4],r[5],r[6]).length(),u=Yn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),yi.copy(this);const l=1/a,c=1/o,d=1/u;return yi.elements[0]*=l,yi.elements[1]*=l,yi.elements[2]*=l,yi.elements[4]*=c,yi.elements[5]*=c,yi.elements[6]*=c,yi.elements[8]*=d,yi.elements[9]*=d,yi.elements[10]*=d,i.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=u,this}makePerspective(t,i,n,r,s,a,o=Ti,u=!1){const l=this.elements,c=2*s/(i-t),d=2*s/(n-r),h=(i+t)/(i-t),f=(n+r)/(n-r);let g,_;if(u)g=s/(a-s),_=a*s/(a-s);else if(o===Ti)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Fr)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,n,r,s,a,o=Ti,u=!1){const l=this.elements,c=2/(i-t),d=2/(n-r),h=-(i+t)/(i-t),f=-(n+r)/(n-r);let g,_;if(u)g=1/(a-s),_=a/(a-s);else if(o===Ti)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Fr)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const i=this.elements,n=t.elements;for(let r=0;r<16;r++)if(i[r]!==n[r])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){const n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}},Yn=new R,yi=new $e,H0=new R(0,0,0),W0=new R(1,1,1),an=new R,Ls=new R,oi=new R,Jl=new $e,Ql=new Wi,on=class _f{constructor(t=0,i=0,n=0,r=_f.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,r=this._order){return this._x=t,this._y=i,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],u=r[1],l=r[5],c=r[9],d=r[2],h=r[6],f=r[10];switch(i){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},X0=0,jl=new R,Kn=new Wi,qi=new $e,Bs=new R,Ir=new R,q0=new R,Y0=new Wi,ec=new R(1,0,0),tc=new R(0,1,0),ic=new R(0,0,1),nc={type:"added"},K0={type:"removed"},Zn={type:"childadded",child:null},Ko={type:"childremoved",child:null},$t=class Na extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Na.DEFAULT_UP.clone();const t=new R,i=new on,n=new Wi,r=new R(1,1,1);function s(){n.setFromEuler(i,!1)}function a(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Oe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Na.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Na.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Kn.setFromAxisAngle(t,i),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,i){return Kn.setFromAxisAngle(t,i),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,i){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Bs.copy(t):Bs.set(t,i,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ir,Bs,this.up):qi.lookAt(Bs,Ir,this.up),this.quaternion.setFromRotationMatrix(qi),r&&(qi.extractRotation(r.matrixWorld),Kn.setFromRotationMatrix(qi),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nc),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(K0),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nc),Zn.child=t,this.dispatchEvent(Zn),Zn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*n-s[8]*r,s[13]+=n-s[1]*i-s[5]*n-s[9]*r,s[14]+=r-s[2]*i-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let n=0,r=i.length;n<r;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),i===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const d=u[l];s(t.shapes,d)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(s(t.materials,this.material[u]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];r.animations.push(s(t.animations,u))}}if(i){const o=a(t.geometries),u=a(t.materials),l=a(t.textures),c=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const u=[];for(const l in o){const c=o[l];delete c.metadata,u.push(c)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new R(0,1,0),$t.DEFAULT_MATRIX_AUTO_UPDATE=!0,$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ut=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Z0={type:"move"},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,s=null;const a=this._targetRay,o=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,i),m=this._getHandJoint(u,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const l=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],d=l.position.distanceTo(c.position),h=.02,f=.005;u.inputState.pinching&&d>h+f?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-f&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return a!==null&&(a.visible=n!==null),o!==null&&(o.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},Is={h:0,s:0,l:0};function $o(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=We.workingColorSpace){return this.r=e,this.g=t,this.b=i,We.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=We.workingColorSpace){if(e=Vo(e,1),t=Ve(t,0,1),i=Ve(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=$o(s,r,e+1/3),this.g=$o(s,r,e),this.b=$o(s,r,e-1/3)}return We.colorSpaceToWorking(this,n),this}setStyle(e,t=ht){function i(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],a=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const i=rc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return We.workingToColorSpace(Gt.copy(this),e),Math.round(Ve(Gt.r*255,0,255))*65536+Math.round(Ve(Gt.g*255,0,255))*256+Math.round(Ve(Gt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Gt.copy(this),t);const i=Gt.r,n=Gt.g,r=Gt.b,s=Math.max(i,n,r),a=Math.min(i,n,r);let o,u;const l=(a+s)/2;if(a===s)o=0,u=0;else{const c=s-a;switch(u=l<=.5?c/(s+a):c/(2-s-a),s){case i:o=(n-r)/c+(n<r?6:0);break;case n:o=(r-i)/c+2;break;case r:o=(i-n)/c+4;break}o/=6}return e.h=o,e.s=u,e.l=l,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=ht){We.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,n=Gt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(un),this.setHSL(un.h+e,un.s+t,un.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(Is);const i=Br(un.h,Is.h,t),n=Br(un.s,Is.s,t),r=Br(un.l,Is.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ie;Ie.NAMES=rc;var Jo=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ei=new R,Yi=new R,Qo=new R,Ki=new R,$n=new R,Jn=new R,sc=new R,jo=new R,eu=new R,tu=new R,iu=new pt,nu=new pt,ru=new pt,Qn=class Sr{constructor(t=new R,i=new R,n=new R){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,r){r.subVectors(n,i),Ei.subVectors(t,i),r.cross(Ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,i,n,r,s){Ei.subVectors(r,i),Yi.subVectors(n,i),Qo.subVectors(t,i);const a=Ei.dot(Ei),o=Ei.dot(Yi),u=Ei.dot(Qo),l=Yi.dot(Yi),c=Yi.dot(Qo),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(l*u-o*c)*h,g=(a*c-o*u)*h;return s.set(1-f-g,g,f)}static containsPoint(t,i,n,r){return this.getBarycoord(t,i,n,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(t,i,n,r,s,a,o,u){return this.getBarycoord(t,i,n,r,Ki)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ki.x),u.addScaledVector(a,Ki.y),u.addScaledVector(o,Ki.z),u)}static getInterpolatedAttribute(t,i,n,r,s,a){return iu.setScalar(0),nu.setScalar(0),ru.setScalar(0),iu.fromBufferAttribute(t,i),nu.fromBufferAttribute(t,n),ru.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(iu,s.x),a.addScaledVector(nu,s.y),a.addScaledVector(ru,s.z),a}static isFrontFacing(t,i,n,r){return Ei.subVectors(n,i),Yi.subVectors(t,i),Ei.cross(Yi).dot(r)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,r){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,i,n,r){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Ei.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Sr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,r,s){return Sr.getInterpolation(t,this.a,this.b,this.c,i,n,r,s)}containsPoint(t){return Sr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const n=this.a,r=this.b,s=this.c;let a,o;$n.subVectors(r,n),Jn.subVectors(s,n),jo.subVectors(t,n);const u=$n.dot(jo),l=Jn.dot(jo);if(u<=0&&l<=0)return i.copy(n);eu.subVectors(t,r);const c=$n.dot(eu),d=Jn.dot(eu);if(c>=0&&d<=c)return i.copy(r);const h=u*d-c*l;if(h<=0&&u>=0&&c<=0)return a=u/(u-c),i.copy(n).addScaledVector($n,a);tu.subVectors(t,s);const f=$n.dot(tu),g=Jn.dot(tu);if(g>=0&&f<=g)return i.copy(s);const _=f*l-u*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),i.copy(n).addScaledVector(Jn,o);const m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return sc.subVectors(s,r),o=(d-c)/(d-c+(f-g)),i.copy(r).addScaledVector(sc,o);const p=1/(m+_+h);return a=_*p,o=h*p,i.copy(n).addScaledVector($n,a).addScaledVector(Jn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Mi):Mi.fromBufferAttribute(r,s),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Us.subVectors(this.max,Nr),jn.subVectors(e.a,Nr),er.subVectors(e.b,Nr),tr.subVectors(e.c,Nr),ln.subVectors(er,jn),cn.subVectors(tr,er),Sn.subVectors(jn,tr);let t=[0,-ln.z,ln.y,0,-cn.z,cn.y,0,-Sn.z,Sn.y,ln.z,0,-ln.x,cn.z,0,-cn.x,Sn.z,0,-Sn.x,-ln.y,ln.x,0,-cn.y,cn.x,0,-Sn.y,Sn.x,0];return!su(t,jn,er,tr,Us)||(t=[1,0,0,0,1,0,0,0,1],!su(t,jn,er,tr,Us))?!1:(Os.crossVectors(ln,cn),t=[Os.x,Os.y,Os.z],su(t,jn,er,tr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new R,new R,new R,new R,new R,new R,new R,new R],Mi=new R,Ns=new Mn,jn=new R,er=new R,tr=new R,ln=new R,cn=new R,Sn=new R,Nr=new R,Us=new R,Os=new R,wn=new R;function su(e,t,i,n,r){for(let s=0,a=e.length-3;s<=a;s+=3){wn.fromArray(e,s);const o=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),u=t.dot(wn),l=i.dot(wn),c=n.dot(wn);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>o)return!1}return!0}var Mt=new R,zs=new le,$0=0,ui=class extends xn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=m0,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},ac=class extends ui{constructor(e,t,i){super(new Uint16Array(e),t,i)}},oc=class extends ui{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ne=class extends ui{constructor(e,t,i){super(new Float32Array(e),t,i)}},J0=new Mn,Ur=new R,au=new R,ir=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):J0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ur,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(au)),this.expandByPoint(Ur.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Q0=0,fi=new $e,ou=new $t,nr=new R,li=new Mn,Or=new Mn,Ft=new R,vt=class xf extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g0(t)?oc:ac)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,n){return fi.makeTranslation(t,i,n),this.applyMatrix4(fi),this}scale(t,i,n){return fi.makeScale(t,i,n),this.applyMatrix4(fi),this}lookAt(t){return ou.lookAt(t),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ne(n,3))}else{const n=Math.min(t.length,i.count);for(let r=0;r<n;r++){const s=t[r];i.setXYZ(r,s.x,s.y,s.z||0)}t.length>i.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,r=i.length;n<r;n++){const s=i[n];li.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),i)for(let s=0,a=i.length;s<a;s++){const o=i[s];Or.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(li.min,Or.min),li.expandByPoint(Ft),Ft.addVectors(li.max,Or.max),li.expandByPoint(Ft)):(li.expandByPoint(Or.min),li.expandByPoint(Or.max))}li.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ft.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ft));if(i)for(let s=0,a=i.length;s<a;s++){const o=i[s],u=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)Ft.fromBufferAttribute(o,l),u&&(nr.fromBufferAttribute(t,l),Ft.add(nr)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=i.position,r=i.normal,s=i.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ui(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],u=[];for(let x=0;x<n.count;x++)o[x]=new R,u[x]=new R;const l=new R,c=new R,d=new R,h=new le,f=new le,g=new le,_=new R,m=new R;function p(x,M,F){l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,F),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,M),g.fromBufferAttribute(s,F),c.sub(l),d.sub(l),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(P),o[x].add(_),o[M].add(_),o[F].add(_),u[x].add(m),u[M].add(m),u[F].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,M=y.length;x<M;++x){const F=y[x],P=F.start,D=F.count;for(let G=P,L=P+D;G<L;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new R,v=new R,b=new R,T=new R;function C(x){b.fromBufferAttribute(r,x),T.copy(b);const M=o[x];w.copy(M),w.sub(b.multiplyScalar(b.dot(M))).normalize(),v.crossVectors(T,M);const P=v.dot(u[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,M=y.length;x<M;++x){const F=y[x],P=F.start,D=F.count;for(let G=P,L=P+D;G<L;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==i.count)n=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const r=new R,s=new R,a=new R,o=new R,u=new R,l=new R,c=new R,d=new R;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(i,g),s.fromBufferAttribute(i,_),a.fromBufferAttribute(i,m),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),o.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(c),u.add(c),l.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=i.count;h<f;h+=3)r.fromBufferAttribute(i,h+0),s.fromBufferAttribute(i,h+1),a.fromBufferAttribute(i,h+2),c.subVectors(a,s),d.subVectors(r,s),c.cross(d),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)Ft.fromBufferAttribute(t,i),Ft.normalize(),t.setXYZ(i,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function t(o,u){const l=o.array,c=o.itemSize,d=o.normalized,h=new l.constructor(u.length*c);let f=0,g=0;for(let _=0,m=u.length;_<m;_++){o.isInterleavedBufferAttribute?f=u[_]*o.data.stride+o.offset:f=u[_]*c;for(let p=0;p<c;p++)h[g++]=l[f++]}return new ui(h,c,d)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xf,n=this.index.array,r=this.attributes;for(const o in r){const u=r[o],l=t(u,n);i.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const u=[],l=s[o];for(let c=0,d=l.length;c<d;c++){const h=l[c],f=t(h,n);u.push(f)}i.morphAttributes[o]=u}i.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];i.addGroup(l.start,l.count,l.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(t[l]=u[l]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const n=this.attributes;for(const u in n){const l=n[u];t.data.attributes[u]=l.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];c.push(f.toJSON(t.data))}c.length>0&&(r[u]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(i))}const s=t.morphAttributes;for(const l in s){const c=[],d=s[l];for(let h=0,f=d.length;h<f;h++)c.push(d[h].clone(i));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},uu=new R,j0=new R,ep=new Oe,$i=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=uu.subVectors(i,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const n=e.delta(uu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ep.getNormalMatrix(e),n=this.coplanarPoint(uu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tp=0,bn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Tr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=wl,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(t){const r=n(e.textures),s=n(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new $i().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new le().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ji=new R,lu=new R,ks=new R,Vs=new R,cu=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){lu.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Vs.copy(this.origin).sub(lu);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ks),a=Vs.dot(this.direction),o=-Vs.dot(ks),u=Vs.lengthSq(),l=Math.abs(1-s*s);let c,d,h,f;if(l>0)if(c=s*o-a,d=s*a-o,f=r*l,c>=0)if(d>=-f)if(d<=f){const g=1/l;c*=g,d*=g,h=c*(c+s*d+2*a)+d*(s*c+d+2*o)+u}else d=r,c=Math.max(0,-(s*d+a)),h=-c*c+d*(d+2*o)+u;else d=-r,c=Math.max(0,-(s*d+a)),h=-c*c+d*(d+2*o)+u;else d<=-f?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-o),r),h=-c*c+d*(d+2*o)+u):d<=f?(c=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+u):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-o),r),h=-c*c+d*(d+2*o)+u);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),h=-c*c+d*(d+2*o)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),n&&n.copy(lu).addScaledVector(ks,d),h}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);const i=Ji.dot(this.direction),n=Ji.dot(Ji)-i*i,r=e.radius*e.radius;if(n>r)return null;const s=Math.sqrt(r-n),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,s,a,o;const u=1/this.direction.x,l=1/this.direction.y,c=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,n=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,n=(e.min.x-d.x)*u),l>=0?(r=(e.min.y-d.y)*l,s=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,s=(e.min.y-d.y)*l),i>s||r>n||((r>i||isNaN(i))&&(i=r),(s<n||isNaN(n))&&(n=s),c>=0?(a=(e.min.z-d.z)*c,o=(e.max.z-d.z)*c):(a=(e.max.z-d.z)*c,o=(e.min.z-d.z)*c),i>o||a>n)||((a>i||i!==i)&&(i=a),(o<n||n!==n)&&(n=o),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,i,n,r){const s=this.origin,a=this.direction,o=a.x,u=a.y,l=a.z,c=e.x-s.x,d=e.y-s.y,h=e.z-s.z,f=t.x-s.x,g=t.y-s.y,_=t.z-s.z,m=i.x-s.x,p=i.y-s.y,y=i.z-s.z,w=Math.abs(o),v=Math.abs(u),b=Math.abs(l);let T,C,x,M,F,P,D,G,L,O,$,V;if(w>=v&&w>=b?(x=o,P=c,L=f,V=m,o>=0?(T=u,C=l,M=d,F=h,D=g,G=_,O=p,$=y):(T=l,C=u,M=h,F=d,D=_,G=g,O=y,$=p)):v>=b?(x=u,P=d,L=g,V=p,u>=0?(T=l,C=o,M=h,F=c,D=_,G=f,O=y,$=m):(T=o,C=l,M=c,F=h,D=f,G=_,O=m,$=y)):(x=l,P=h,L=_,V=y,l>=0?(T=o,C=u,M=c,F=d,D=f,G=g,O=m,$=p):(T=u,C=o,M=d,F=c,D=g,G=f,O=p,$=m)),x===0)return null;const ie=T/x,X=C/x,J=1/x,j=M-ie*P,Te=F-X*P,Se=D-ie*L,rt=G-X*L,Be=O-ie*V,q=$-X*V,re=Be*rt-q*Se,se=j*q-Te*Be,Ae=Se*Te-rt*j;if(n){if(re<0||se<0||Ae<0)return null}else if((re<0||se<0||Ae<0)&&(re>0||se>0||Ae>0))return null;const Fe=re+se+Ae;if(Fe===0)return null;const Ce=J*(re*P+se*L+Ae*V);return(Fe>0?Ce<0:Ce>0)?null:this.at(Ce/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},uc=new $e,An=new cu,Gs=new ir,lc=new R,Hs=new R,Ws=new R,Xs=new R,hu=new R,qs=new R,cc=new R,Ys=new R,ne=class extends $t{constructor(e=new vt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let o=0,u=r.length;o<u;o++){const l=a[o],c=r[o];l!==0&&(hu.fromBufferAttribute(c,e),s?qs.addScaledVector(hu,l):qs.addScaledVector(hu.sub(t),l))}t.add(qs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(r),An.copy(e.ray).recast(e.near),!(Gs.containsPoint(An.origin)===!1&&(An.intersectSphere(Gs,lc)===null||An.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(uc.copy(r).invert(),An.copy(e.ray).applyMatrix4(uc),!(i.boundingBox!==null&&An.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,i){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,c=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,h.start),y=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let w=p,v=y;w<v;w+=3){const b=a.getX(w),T=a.getX(w+1),C=a.getX(w+2);n=Ks(this,m,e,i,u,l,c,b,T,C),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const f=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=f,m=g;_<m;_+=3){const p=a.getX(_),y=a.getX(_+1),w=a.getX(_+2);n=Ks(this,s,e,i,u,l,c,p,y,w),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,h.start),y=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let w=p,v=y;w<v;w+=3){const b=w,T=w+1,C=w+2;n=Ks(this,m,e,i,u,l,c,b,T,C),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=f,m=g;_<m;_+=3){const p=_,y=_+1,w=_+2;n=Ks(this,s,e,i,u,l,c,p,y,w),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}};function ip(e,t,i,n,r,s,a,o){let u;if(t.side===Lt?u=n.intersectTriangle(a,s,r,!0,o):u=n.intersectTriangle(r,s,a,t.side===ki,o),u===null)return null;Ys.copy(o),Ys.applyMatrix4(e.matrixWorld);const l=i.ray.origin.distanceTo(Ys);return l<i.near||l>i.far?null:{distance:l,point:Ys.clone(),object:e}}function Ks(e,t,i,n,r,s,a,o,u,l){e.getVertexPosition(o,Hs),e.getVertexPosition(u,Ws),e.getVertexPosition(l,Xs);const c=ip(e,t,i,n,Hs,Ws,Xs,cc);if(c){const d=new R;Qn.getBarycoord(cc,Hs,Ws,Xs,d),r&&(c.uv=Qn.getInterpolatedAttribute(r,o,u,l,d,new le)),s&&(c.uv1=Qn.getInterpolatedAttribute(s,o,u,l,d,new le)),a&&(c.normal=Qn.getInterpolatedAttribute(a,o,u,l,d,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:u,c:l,normal:new R,materialIndex:0};Qn.getNormal(Hs,Ws,Xs,h.normal),c.face=h,c.barycoord=d}return c}var hc=class extends di{constructor(e=null,t=1,i=1,n,r,s,a,o,u=Bt,l=Bt,c,d){super(null,s,a,o,u,l,n,r,c,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},dc=class extends ui{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new $e,fc=new $e,Zs=[],pc=new Mn,np=new $e,zr=new ne,kr=new ir,rp=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,np)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),pc.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(pc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),kr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,s=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[s+a]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(i),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,rr),fc.multiplyMatrices(i,rr),zr.matrixWorld=fc,zr.raycast(e,Zs);for(let s=0,a=Zs.length;s<a;s++){const o=Zs[s];o.instanceId=r,o.object=this,t.push(o)}Zs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new hc(new Float32Array(n*this.count),n,this.count,to,vi));const r=this.morphTexture.source.data.data;let s=0;for(let u=0;u<i.length;u++)s+=i[u];const a=this.geometry.morphTargetsRelative?1:1-s,o=n*e;return r[o]=a,r.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Tn=new ir,sp=new le(.5,.5),$s=new R,du=class{constructor(e=new $i,t=new $i,i=new $i,n=new $i,r=new $i,s=new $i){this.planes=[e,t,i,n,r,s]}set(e,t,i,n,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti,i=!1){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],u=r[3],l=r[4],c=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],w=r[14],v=r[15];if(n[0].setComponents(u-s,h-l,m-f,v-p).normalize(),n[1].setComponents(u+s,h+l,m+f,v+p).normalize(),n[2].setComponents(u+a,h+c,m+g,v+y).normalize(),n[3].setComponents(u-a,h-c,m-g,v-y).normalize(),i)n[4].setComponents(o,d,_,w).normalize(),n[5].setComponents(u-o,h-d,m-_,v-w).normalize();else if(n[4].setComponents(u-o,h-d,m-_,v-w).normalize(),t===Ti)n[5].setComponents(u+o,h+d,m+_,v+w).normalize();else if(t===Fr)n[5].setComponents(o,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){Tn.center.set(0,0,0);const t=sp.distanceTo(e.center);return Tn.radius=.7071067811865476+t,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if($s.x=n.normal.x>0?e.max.x:e.min.x,$s.y=n.normal.y>0?e.max.y:e.min.y,$s.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mc=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Js=new R,Qs=new R,gc=new $e,Vr=new cu,js=new ir,fu=new R,vc=new R,ap=class extends $t{constructor(e=new vt,t=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Js.fromBufferAttribute(t,n-1),Qs.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Js.distanceTo(Qs);e.setAttribute("lineDistance",new Ne(i,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(n),js.radius+=r,e.ray.intersectsSphere(js)===!1)return;gc.copy(n).invert(),Vr.copy(e.ray).applyMatrix4(gc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,u=this.isLineSegments?2:1,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let g=h,_=f-1;g<_;g+=u){const m=l.getX(g),p=l.getX(g+1),y=ea(this,e,Vr,o,m,p,g);y&&t.push(y)}if(this.isLineLoop){const g=l.getX(f-1),_=l.getX(h),m=ea(this,e,Vr,o,g,_,f-1);m&&t.push(m)}}else{const h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let g=h,_=f-1;g<_;g+=u){const m=ea(this,e,Vr,o,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=ea(this,e,Vr,o,f-1,h,f-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ea(e,t,i,n,r,s,a){const o=e.geometry.attributes.position;if(Js.fromBufferAttribute(o,r),Qs.fromBufferAttribute(o,s),i.distanceSqToSegment(Js,Qs,fu,vc)>n)return;fu.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(fu);if(!(l<t.near||l>t.far))return{distance:l,point:vc.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}var _c=new R,xc=new R,op=class extends ap{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)_c.fromBufferAttribute(t,n),xc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+_c.distanceTo(xc);e.setAttribute("lineDistance",new Ne(i,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yc=class extends di{constructor(e=[],t=gn,i,n,r,s,a,o,u,l){super(e,t,i,n,r,s,a,o,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends di{constructor(e,t,i,n,r,s,a,o,u){super(e,t,i,n,r,s,a,o,u),this.isCanvasTexture=!0,this.needsUpdate=!0}},Gr=class extends di{constructor(e,t,i=Ai,n,r,s,a=Bt,o=Bt,u,l=Hi,c=1){if(l!==Hi&&l!==vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:c};super(d,n,r,s,a,o,l,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},up=class extends Gr{constructor(e,t=Ai,i=gn,n,r,s=Bt,a=Bt,o,u=Hi){const l={width:e,height:e,depth:1},c=[l,l,l,l,l,l];super(e,e,t,i,n,r,s,a,o,u),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ec=class extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xt=class yf extends vt{constructor(t=1,i=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],l=[],c=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,n,i,t,a,s,0),g("z","y","x",1,-1,n,i,-t,a,s,1),g("x","z","y",1,1,t,n,i,r,a,2),g("x","z","y",1,-1,t,n,-i,r,a,3),g("x","y","z",1,-1,t,i,n,r,s,4),g("x","y","z",-1,-1,t,i,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(d,2));function g(_,m,p,y,w,v,b,T,C,x,M){const F=v/C,P=b/x,D=v/2,G=b/2,L=T/2,O=C+1,$=x+1;let V=0,ie=0;const X=new R;for(let J=0;J<$;J++){const j=J*P-G;for(let Te=0;Te<O;Te++){const Se=Te*F-D;X[_]=Se*y,X[m]=j*w,X[p]=L,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,c.push(X.x,X.y,X.z),d.push(Te/C),d.push(1-J/x),V+=1}}for(let J=0;J<x;J++)for(let j=0;j<C;j++){const Te=h+j+O*J,Se=h+j+O*(J+1),rt=h+(j+1)+O*(J+1),Be=h+(j+1)+O*J;u.push(Te,Se,Be),u.push(Se,rt,Be),ie+=6}o.addGroup(f,ie,M),f+=ie,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yf(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},lp=class Ef extends vt{constructor(t=1,i=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:n,radialSegments:r,heightSegments:s},i=Math.max(0,i),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],u=[],l=[],c=i/2,d=Math.PI/2*t,h=i,f=2*d+h,g=n*2+s,_=r+1,m=new R,p=new R;for(let y=0;y<=g;y++){let w=0,v=0,b=0,T=0;if(y<=n){const M=y/n,F=M*Math.PI/2;v=-c-t*Math.cos(F),b=t*Math.sin(F),T=-t*Math.cos(F),w=M*d}else if(y<=n+s){const M=(y-n)/s;v=-c+M*i,b=t,T=0,w=d+M*h}else{const M=(y-n-s)/n,F=M*Math.PI/2;v=c+t*Math.sin(F),b=t*Math.cos(F),T=t*Math.sin(F),w=d+h+M*d}const C=Math.max(0,Math.min(1,w/f));let x=0;y===0?x=.5/r:y===g&&(x=-.5/r);for(let M=0;M<=r;M++){const F=M/r,P=F*Math.PI*2,D=Math.sin(P),G=Math.cos(P);p.x=-b*G,p.y=v,p.z=b*D,o.push(p.x,p.y,p.z),m.set(-b*G,T,b*D),m.normalize(),u.push(m.x,m.y,m.z),l.push(F+x,C)}if(y>0){const M=(y-1)*_;for(let F=0;F<r;F++){const P=M+F,D=M+F+1,G=y*_+F,L=y*_+F+1;a.push(P,D,G),a.push(D,L,G)}}}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(u,3)),this.setAttribute("uv",new Ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ef(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Mc=class Mf extends vt{constructor(t=1,i=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:n,thetaLength:r},i=Math.max(3,i);const s=[],a=[],o=[],u=[],l=new R,c=new le;a.push(0,0,0),o.push(0,0,1),u.push(.5,.5);for(let d=0,h=3;d<=i;d++,h+=3){const f=n+d/i*r;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(a[h]/t+1)/2,c.y=(a[h+1]/t+1)/2,u.push(c.x,c.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(o,3)),this.setAttribute("uv",new Ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mf(t.radius,t.segments,t.thetaStart,t.thetaLength)}},St=class Sf extends vt{constructor(t=1,i=1,n=1,r=32,s=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:u};const l=this;r=Math.floor(r),s=Math.floor(s);const c=[],d=[],h=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(c),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(f,2));function y(){const v=new R,b=new R;let T=0;const C=(i-t)/n;for(let x=0;x<=s;x++){const M=[],F=x/s,P=F*(i-t)+t;for(let D=0;D<=r;D++){const G=D/r,L=G*u+o,O=Math.sin(L),$=Math.cos(L);b.x=P*O,b.y=-F*n+m,b.z=P*$,d.push(b.x,b.y,b.z),v.set(O,C,$).normalize(),h.push(v.x,v.y,v.z),f.push(G,1-F),M.push(g++)}_.push(M)}for(let x=0;x<r;x++)for(let M=0;M<s;M++){const F=_[M][x],P=_[M+1][x],D=_[M+1][x+1],G=_[M][x+1];(t>0||M!==0)&&(c.push(F,P,G),T+=3),(i>0||M!==s-1)&&(c.push(P,D,G),T+=3)}l.addGroup(p,T,0),p+=T}function w(v){const b=g,T=new le,C=new R;let x=0;const M=v===!0?t:i,F=v===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,m*F,0),h.push(0,F,0),f.push(.5,.5),g++;const P=g;for(let D=0;D<=r;D++){const L=D/r*u+o,O=Math.cos(L),$=Math.sin(L);C.x=M*$,C.y=m*F,C.z=M*O,d.push(C.x,C.y,C.z),h.push(0,F,0),T.x=O*.5+.5,T.y=$*.5*F+.5,f.push(T.x,T.y),g++}for(let D=0;D<r;D++){const G=b+D,L=P+D;v===!0?c.push(L,L+1,G):c.push(L+1,L,G),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pu=class wf extends St{constructor(t=1,i=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,i,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new wf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cp=class bf extends vt{constructor(t=[],i=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:n,detail:r};const s=[],a=[];o(r),l(n),c(),this.setAttribute("position",new Ne(s,3)),this.setAttribute("normal",new Ne(s.slice(),3)),this.setAttribute("uv",new Ne(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const w=new R,v=new R,b=new R;for(let T=0;T<i.length;T+=3)f(i[T+0],w),f(i[T+1],v),f(i[T+2],b),u(w,v,b,y)}function u(y,w,v,b){const T=b+1,C=[];for(let x=0;x<=T;x++){C[x]=[];const M=y.clone().lerp(v,x/T),F=w.clone().lerp(v,x/T),P=T-x;for(let D=0;D<=P;D++)D===0&&x===T?C[x][D]=M:C[x][D]=M.clone().lerp(F,D/P)}for(let x=0;x<T;x++)for(let M=0;M<2*(T-x)-1;M++){const F=Math.floor(M/2);M%2===0?(h(C[x][F+1]),h(C[x+1][F]),h(C[x][F])):(h(C[x][F+1]),h(C[x+1][F+1]),h(C[x+1][F]))}}function l(y){const w=new R;for(let v=0;v<s.length;v+=3)w.x=s[v+0],w.y=s[v+1],w.z=s[v+2],w.normalize().multiplyScalar(y),s[v+0]=w.x,s[v+1]=w.y,s[v+2]=w.z}function c(){const y=new R;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];const v=m(y)/2/Math.PI+.5,b=p(y)/Math.PI+.5;a.push(v,1-b)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const w=a[y+0],v=a[y+2],b=a[y+4],T=Math.max(w,v,b),C=Math.min(w,v,b);T>.9&&C<.1&&(w<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),b<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function f(y,w){const v=y*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){const y=new R,w=new R,v=new R,b=new R,T=new le,C=new le,x=new le;for(let M=0,F=0;M<s.length;M+=9,F+=6){y.set(s[M+0],s[M+1],s[M+2]),w.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),T.set(a[F+0],a[F+1]),C.set(a[F+2],a[F+3]),x.set(a[F+4],a[F+5]),b.copy(y).add(w).add(v).divideScalar(3);const P=m(b);_(T,F+0,y,P),_(C,F+2,w,P),_(x,F+4,v,P)}}function _(y,w,v,b){b<0&&y.x===1&&(a[w]=y.x-1),v.x===0&&v.z===0&&(a[w]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bf(t.vertices,t.indices,t.radius,t.detail)}},ta=new R,ia=new R,mu=new R,na=new Qn,hp=class extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(Hn*t),s=e.getIndex(),a=e.getAttribute("position"),o=s?s.count:a.count,u=[0,0,0],l=["a","b","c"],c=new Array(3),d={},h=[];for(let f=0;f<o;f+=3){s?(u[0]=s.getX(f),u[1]=s.getX(f+1),u[2]=s.getX(f+2)):(u[0]=f,u[1]=f+1,u[2]=f+2);const{a:g,b:_,c:m}=na;if(g.fromBufferAttribute(a,u[0]),_.fromBufferAttribute(a,u[1]),m.fromBufferAttribute(a,u[2]),na.getNormal(mu),c[0]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,c[1]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,c[2]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let p=0;p<3;p++){const y=(p+1)%3,w=c[p],v=c[y],b=na[l[p]],T=na[l[y]],C=`${w}_${v}`,x=`${v}_${w}`;x in d&&d[x]?(mu.dot(d[x].normal)<=r&&(h.push(b.x,b.y,b.z),h.push(T.x,T.y,T.z)),d[x]=null):C in d||(d[C]={index0:u[p],index1:u[y],normal:mu.clone()})}}for(const f in d)if(d[f]){const{index0:g,index1:_}=d[f];ta.fromBufferAttribute(a,g),ia.fromBufferAttribute(a,_),h.push(ta.x,ta.y,ta.z),h.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new Ne(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){De("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let n=0;const r=i.length;let s;t?s=t:s=e*i[r-1];let a=0,o=r-1,u;for(;a<=o;)if(n=Math.floor(a+(o-a)/2),u=i[n]-s,u<0)a=n+1;else if(u>0)o=n-1;else{o=n;break}if(n=o,i[n]===s)return n/(r-1);const l=i[n],d=i[n+1]-l,h=(s-l)/d;return(n+h)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const s=this.getPoint(n),a=this.getPoint(r),o=t||(s.isVector2?new le:new R);return o.copy(a).sub(s).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new R,n=[],r=[],s=[],a=new R,o=new $e;for(let h=0;h<=e;h++){const f=h/e;n[h]=this.getTangentAt(f,new R)}r[0]=new R,s[0]=new R;let u=Number.MAX_VALUE;const l=Math.abs(n[0].x),c=Math.abs(n[0].y),d=Math.abs(n[0].z);l<=u&&(u=l,i.set(1,0,0)),c<=u&&(u=c,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),s[0].crossVectors(n[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),s[h]=s[h-1].clone(),a.crossVectors(n[h-1],n[h]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(Ve(n[h-1].dot(n[h]),-1,1));r[h].applyMatrix4(o.makeRotationAxis(a,f))}s[h].crossVectors(n[h],r[h])}if(t===!0){let h=Math.acos(Ve(r[0].dot(r[e]),-1,1));h/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(h=-h);for(let f=1;f<=e;f++)r[f].applyMatrix4(o.makeRotationAxis(n[f],h*f)),s[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gu=class extends Ci{constructor(e=0,t=0,i=1,n=1,r=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(e,t=new le){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(s?r=0:r=n),this.aClockwise===!0&&!s&&(r===n?r=-n:r=r-n);const a=this.aStartAngle+e*r;let o=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,h=u-this.aY;o=d*l-h*c+this.aX,u=d*c+h*l+this.aY}return i.set(o,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dp=class extends gu{constructor(e,t,i,n,r,s){super(e,t,i,i,n,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function vu(){let e=0,t=0,i=0,n=0;function r(s,a,o,u){e=s,t=o,i=-3*s+3*a-2*o-u,n=2*s-2*a+o+u}return{initCatmullRom:function(s,a,o,u,l){r(a,o,l*(o-s),l*(u-a))},initNonuniformCatmullRom:function(s,a,o,u,l,c,d){let h=(a-s)/l-(o-s)/(l+c)+(o-a)/c,f=(o-a)/c-(u-a)/(c+d)+(u-o)/d;h*=c,f*=c,r(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return e+t*s+i*a+n*o}}}var Sc=new R,wc=new R,_u=new vu,xu=new vu,yu=new vu,bc=class extends Ci{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){const i=t,n=this.points,r=n.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:o===0&&a===r-1&&(a=r-2,o=1);let u,l;this.closed||a>0?u=n[(a-1)%r]:(wc.subVectors(n[0],n[1]).add(n[0]),u=wc);const c=n[a%r],d=n[(a+1)%r];if(this.closed||a+2<r?l=n[(a+2)%r]:(Sc.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=Sc),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let f=Math.pow(u.distanceToSquared(c),h),g=Math.pow(c.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(l),h);g<1e-4&&(g=1),f<1e-4&&(f=g),_<1e-4&&(_=g),_u.initNonuniformCatmullRom(u.x,c.x,d.x,l.x,f,g,_),xu.initNonuniformCatmullRom(u.y,c.y,d.y,l.y,f,g,_),yu.initNonuniformCatmullRom(u.z,c.z,d.z,l.z,f,g,_)}else this.curveType==="catmullrom"&&(_u.initCatmullRom(u.x,c.x,d.x,l.x,this.tension),xu.initCatmullRom(u.y,c.y,d.y,l.y,this.tension),yu.initCatmullRom(u.z,c.z,d.z,l.z,this.tension));return i.set(_u.calc(o),xu.calc(o),yu.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ac(e,t,i,n,r){const s=(n-t)*.5,a=(r-i)*.5,o=e*e,u=e*o;return(2*i-2*n+s+a)*u+(-3*i+3*n-2*s-a)*o+s*e+i}function fp(e,t){const i=1-e;return i*i*t}function pp(e,t){return 2*(1-e)*e*t}function mp(e,t){return e*e*t}function Hr(e,t,i,n){return fp(e,t)+pp(e,i)+mp(e,n)}function gp(e,t){const i=1-e;return i*i*i*t}function vp(e,t){const i=1-e;return 3*i*i*e*t}function _p(e,t){return 3*(1-e)*e*e*t}function xp(e,t){return e*e*e*t}function Wr(e,t,i,n,r){return gp(e,t)+vp(e,i)+_p(e,n)+xp(e,r)}var Tc=class extends Ci{constructor(e=new le,t=new le,i=new le,n=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new le){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Wr(e,n.x,r.x,s.x,a.x),Wr(e,n.y,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yp=class extends Ci{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){const i=t,n=this.v0,r=this.v1,s=this.v2,a=this.v3;return i.set(Wr(e,n.x,r.x,s.x,a.x),Wr(e,n.y,r.y,s.y,a.y),Wr(e,n.z,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends Ci{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ep=class extends Ci{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends Ci{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Hr(e,n.x,r.x,s.x),Hr(e,n.y,r.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends Ci{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,n=this.v0,r=this.v1,s=this.v2;return i.set(Hr(e,n.x,r.x,s.x),Hr(e,n.y,r.y,s.y),Hr(e,n.z,r.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,n=this.points,r=(n.length-1)*e,s=Math.floor(r),a=r-s,o=n[s===0?s:s-1],u=n[s],l=n[s>n.length-2?n.length-1:s+1],c=n[s>n.length-3?n.length-1:s+2];return i.set(Ac(a,o.x,u.x,l.x,c.x),Ac(a,o.y,u.y,l.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new le().fromArray(n))}return this}},Eu=Object.freeze({__proto__:null,ArcCurve:dp,CatmullRomCurve3:bc,CubicBezierCurve:Tc,CubicBezierCurve3:yp,EllipseCurve:gu,LineCurve:Cc,LineCurve3:Ep,QuadraticBezierCurve:Rc,QuadraticBezierCurve3:Dc,SplineCurve:Pc}),Mp=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const s=n[r]-i,a=this.curves[r],o=a.getLength(),u=o===0?0:1-s/o;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const s=r[n],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,o=s.getPoints(a);for(let u=0;u<o.length;u++){const l=o[u];i&&i.equals(l)||(t.push(l),i=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Eu[n.type]().fromJSON(n))}return this}},Mu=class extends Mp{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Cc(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new Rc(this.currentPoint.clone(),new le(e,t),new le(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,s){const a=new Tc(this.currentPoint.clone(),new le(e,t),new le(i,n),new le(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Pc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,s){const a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+a,t+o,i,n,r,s),this}absarc(e,t,i,n,r,s){return this.absellipse(e,t,i,i,n,r,s),this}ellipse(e,t,i,n,r,s,a,o){const u=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+u,t+l,i,n,r,s,a,o),this}absellipse(e,t,i,n,r,s,a,o){const u=new gu(e,t,i,n,r,s,a,o);if(this.curves.length>0){const c=u.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(u);const l=u.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Su=class extends Mu{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Mu().fromJSON(n))}return this}};function Sp(e,t,i=2){const n=t&&t.length,r=n?t[0]*i:e.length;let s=Fc(e,0,r,i,!0);const a=[];if(!s||s.next===s.prev)return a;let o,u,l;if(n&&(s=Cp(e,t,s,i)),e.length>80*i){o=e[0],u=e[1];let c=o,d=u;for(let h=i;h<r;h+=i){const f=e[h],g=e[h+1];f<o&&(o=f),g<u&&(u=g),f>c&&(c=f),g>d&&(d=g)}l=Math.max(c-o,d-u),l=l!==0?32767/l:0}return Xr(s,a,i,o,u,l,0),a}function Fc(e,t,i,n,r){let s;if(r===zp(e,t,i,n)>0)for(let a=t;a<i;a+=n)s=Nc(a/n|0,e[a],e[a+1],s);else for(let a=i-n;a>=t;a-=n)s=Nc(a/n|0,e[a],e[a+1],s);return s&&sr(s,s.next)&&(Kr(s),s=s.next),s}function Cn(e,t){if(!e)return e;t||(t=e);let i=e,n;do if(n=!1,!i.steiner&&(sr(i,i.next)||mt(i.prev,i,i.next)===0)){if(Kr(i),i=t=i.prev,i===i.next)break;n=!0}else i=i.next;while(n||i!==t);return t}function Xr(e,t,i,n,r,s,a){if(!e)return;!a&&s&&Lp(e,n,r,s);let o=e;for(;e.prev!==e.next;){const u=e.prev,l=e.next;if(s?bp(e,n,r,s):wp(e)){t.push(u.i,e.i,l.i),Kr(e),e=l.next,o=l.next;continue}if(e=l,e===o){a?a===1?(e=Ap(Cn(e),t),Xr(e,t,i,n,r,s,2)):a===2&&Tp(e,t,i,n,r,s):Xr(Cn(e),t,i,n,r,s,1);break}}}function wp(e){const t=e.prev,i=e,n=e.next;if(mt(t,i,n)>=0)return!1;const r=t.x,s=i.x,a=n.x,o=t.y,u=i.y,l=n.y,c=Math.min(r,s,a),d=Math.min(o,u,l),h=Math.max(r,s,a),f=Math.max(o,u,l);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=h&&g.y>=d&&g.y<=f&&qr(r,o,s,u,a,l,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bp(e,t,i,n){const r=e.prev,s=e,a=e.next;if(mt(r,s,a)>=0)return!1;const o=r.x,u=s.x,l=a.x,c=r.y,d=s.y,h=a.y,f=Math.min(o,u,l),g=Math.min(c,d,h),_=Math.max(o,u,l),m=Math.max(c,d,h),p=wu(f,g,t,i,n),y=wu(_,m,t,i,n);let w=e.prevZ,v=e.nextZ;for(;w&&w.z>=p&&v&&v.z<=y;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==r&&w!==a&&qr(o,c,u,d,l,h,w.x,w.y)&&mt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&qr(o,c,u,d,l,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=_&&w.y>=g&&w.y<=m&&w!==r&&w!==a&&qr(o,c,u,d,l,h,w.x,w.y)&&mt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&qr(o,c,u,d,l,h,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ap(e,t){let i=e;do{const n=i.prev,r=i.next.next;!sr(n,r)&&Bc(n,i,i.next,r)&&Yr(n,r)&&Yr(r,n)&&(t.push(n.i,i.i,r.i),Kr(i),Kr(i.next),i=e=r),i=i.next}while(i!==e);return Cn(i)}function Tp(e,t,i,n,r,s){let a=e;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Np(a,o)){let u=Ic(a,o);a=Cn(a,a.next),u=Cn(u,u.next),Xr(a,t,i,n,r,s,0),Xr(u,t,i,n,r,s,0);return}o=o.next}a=a.next}while(a!==e)}function Cp(e,t,i,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,u=s<a-1?t[s+1]*n:e.length,l=Fc(e,o,u,n,!1);l===l.next&&(l.steiner=!0),r.push(Ip(l))}r.sort(Rp);for(let s=0;s<r.length;s++)i=Dp(r[s],i);return i}function Rp(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){const n=(e.next.y-e.y)/(e.next.x-e.x),r=(t.next.y-t.y)/(t.next.x-t.x);i=n-r}return i}function Dp(e,t){const i=Pp(e,t);if(!i)return t;const n=Ic(i,e);return Cn(n,n.next),Cn(i,i.next)}function Pp(e,t){let i=t;const n=e.x,r=e.y;let s=-1/0,a;if(sr(e,i))return i;do{if(sr(e,i.next))return i.next;if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){const d=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=n&&d>s&&(s=d,a=i.x<i.next.x?i:i.next,d===n))return a}i=i.next}while(i!==t);if(!a)return null;const o=a,u=a.x,l=a.y;let c=1/0;i=a;do{if(n>=i.x&&i.x>=u&&n!==i.x&&Lc(r<l?n:s,r,u,l,r<l?s:n,r,i.x,i.y)){const d=Math.abs(r-i.y)/(n-i.x);Yr(i,e)&&(d<c||d===c&&(i.x>a.x||i.x===a.x&&Fp(a,i)))&&(a=i,c=d)}i=i.next}while(i!==o);return a}function Fp(e,t){return mt(e.prev,e,t.prev)<0&&mt(t.next,e,e.next)<0}function Lp(e,t,i,n){let r=e;do r.z===0&&(r.z=wu(r.x,r.y,t,i,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Bp(r)}function Bp(e){let t,i=1;do{let n=e,r;e=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<i&&(o++,a=a.nextZ,!!a);l++);let u=i;for(;o>0||u>0&&a;)o!==0&&(u===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,u--),s?s.nextZ=r:e=r,r.prevZ=s,s=r;n=a}s.nextZ=null,i*=2}while(t>1);return e}function wu(e,t,i,n,r){return e=(e-i)*r|0,t=(t-n)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ip(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function Lc(e,t,i,n,r,s,a,o){return(r-a)*(t-o)>=(e-a)*(s-o)&&(e-a)*(n-o)>=(i-a)*(t-o)&&(i-a)*(s-o)>=(r-a)*(n-o)}function qr(e,t,i,n,r,s,a,o){return!(e===a&&t===o)&&Lc(e,t,i,n,r,s,a,o)}function Np(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Up(e,t)&&(Yr(e,t)&&Yr(t,e)&&Op(e,t)&&(mt(e.prev,e,t.prev)||mt(e,t.prev,t))||sr(e,t)&&mt(e.prev,e,e.next)>0&&mt(t.prev,t,t.next)>0)}function mt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function sr(e,t){return e.x===t.x&&e.y===t.y}function Bc(e,t,i,n){const r=sa(mt(e,t,i)),s=sa(mt(e,t,n)),a=sa(mt(i,n,e)),o=sa(mt(i,n,t));return!!(r!==s&&a!==o||r===0&&ra(e,i,t)||s===0&&ra(e,n,t)||a===0&&ra(i,e,n)||o===0&&ra(i,t,n))}function ra(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function sa(e){return e>0?1:e<0?-1:0}function Up(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Bc(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Yr(e,t){return mt(e.prev,e,e.next)<0?mt(e,t,e.next)>=0&&mt(e,e.prev,t)>=0:mt(e,t,e.prev)<0||mt(e,e.next,t)<0}function Op(e,t){let i=e,n=!1;const r=(e.x+t.x)/2,s=(e.y+t.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&r<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(n=!n),i=i.next;while(i!==e);return n}function Ic(e,t){const i=bu(e.i,e.x,e.y),n=bu(t.i,t.x,t.y),r=e.next,s=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,n.next=i,i.prev=n,s.next=n,n.prev=s,n}function Nc(e,t,i,n){const r=bu(e,t,i);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Kr(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function bu(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zp(e,t,i,n){let r=0;for(let s=t,a=i-n;s<i;s+=n)r+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return r}var kp=class{static triangulate(e,t,i=2){return Sp(e,t,i)}},Au=class Af{static area(t){const i=t.length;let n=0;for(let r=i-1,s=0;s<i;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Af.area(t)<0}static triangulateShape(t,i){const n=[],r=[],s=[];Uc(t),Oc(n,t);let a=t.length;i.forEach(Uc);for(let u=0;u<i.length;u++)r.push(a),a+=i[u].length,Oc(n,i[u]);const o=kp.triangulate(n,r);for(let u=0;u<o.length;u+=3)s.push(o.slice(u,u+3));return s}};function Uc(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Oc(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var Vp=class Tf extends cp{constructor(t=1,i=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Tf(t.radius,t.detail)}},Gp=class Cf extends vt{constructor(t=[new le(0,-.5),new le(.5,0),new le(0,.5)],i=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:n,phiLength:r},i=Math.floor(i),r=Ve(r,0,Math.PI*2);const s=[],a=[],o=[],u=[],l=[],c=1/i,d=new R,h=new le,f=new R,g=new R,_=new R;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),u.push(f.x,f.y,f.z);break;case t.length-1:u.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),u.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=i;y++){const w=n+y*c*r,v=Math.sin(w),b=Math.cos(w);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*v,d.y=t[T].y,d.z=t[T].x*b,a.push(d.x,d.y,d.z),h.x=y/i,h.y=T/(t.length-1),o.push(h.x,h.y);const C=u[3*T+0]*v,x=u[3*T+1],M=u[3*T+0]*b;l.push(C,x,M)}}for(let y=0;y<i;y++)for(let w=0;w<t.length-1;w++){const v=w+y*t.length,b=v,T=v+t.length,C=v+t.length+1,x=v+1;s.push(b,T,x),s.push(C,x,T)}this.setIndex(s),this.setAttribute("position",new Ne(a,3)),this.setAttribute("uv",new Ne(o,2)),this.setAttribute("normal",new Ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cf(t.points,t.segments,t.phiStart,t.phiLength)}},Nt=class Rf extends vt{constructor(t=1,i=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:r};const s=t/2,a=i/2,o=Math.floor(n),u=Math.floor(r),l=o+1,c=u+1,d=t/o,h=i/u,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const y=p*h-a;for(let w=0;w<l;w++){const v=w*d-s;g.push(v,-y,0),_.push(0,0,1),m.push(w/o),m.push(1-p/u)}}for(let p=0;p<u;p++)for(let y=0;y<o;y++){const w=y+l*p,v=y+l*(p+1),b=y+1+l*(p+1),T=y+1+l*p;f.push(w,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rf(t.width,t.height,t.widthSegments,t.heightSegments)}},zc=class Df extends vt{constructor(t=.5,i=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],u=[],l=[],c=[];let d=t;const h=(i-t)/r,f=new R,g=new le;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),u.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/i+1)/2,g.y=(f.y/i+1)/2,c.push(g.x,g.y)}d+=h}for(let _=0;_<r;_++){const m=_*(n+1);for(let p=0;p<n;p++){const y=p+m,w=y,v=y+n+1,b=y+n+2,T=y+1;o.push(w,v,T),o.push(v,b,T)}}this.setIndex(o),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Df(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},kc=class Pf extends vt{constructor(t=new Su([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const n=[],r=[],s=[],a=[];let o=0,u=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(o,u,c),o+=u,u=0;this.setIndex(n),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(s,3)),this.setAttribute("uv",new Ne(a,2));function l(c){const d=r.length/3,h=c.extractPoints(i);let f=h.shape;const g=h.holes;Au.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Au.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Au.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],w=y[0]+d,v=y[1]+d,b=y[2]+d;n.push(w,v,b),u+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return Hp(i,t)}static fromJSON(t,i){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=i[t.shapes[r]];n.push(a)}return new Pf(n,t.curveSegments)}};function Hp(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,n=e.length;i<n;i++){const r=e[i];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Ri=class Ff extends vt{constructor(t=1,i=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const c=[],d=new R,h=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],w=p/n,v=a+w*o,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b);let C=0;p===0&&a===0?C=.5/i:p===n&&u===Math.PI&&(C=-.5/i);for(let x=0;x<=i;x++){const M=x/i,F=r+M*s;d.x=-T*Math.cos(F),d.y=b,d.z=T*Math.sin(F),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(M+C,1-w),y.push(l++)}c.push(y)}for(let p=0;p<n;p++)for(let y=0;y<i;y++){const w=c[p][y+1],v=c[p][y],b=c[p+1][y],T=c[p+1][y+1];(p!==0||a>0)&&f.push(w,v,T),(p!==n-1||u<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ff(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Wp=class Lf extends vt{constructor(t=new Dc(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),i=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:n,radialSegments:r,closed:s};const a=t.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,u=new R,l=new le;let c=new R;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ne(d,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(f,2));function _(){for(let w=0;w<i;w++)m(w);m(s===!1?i:0),y(),p()}function m(w){c=t.getPointAt(w/i,c);const v=a.normals[w],b=a.binormals[w];for(let T=0;T<=r;T++){const C=T/r*Math.PI*2,x=Math.sin(C),M=-Math.cos(C);u.x=M*v.x+x*b.x,u.y=M*v.y+x*b.y,u.z=M*v.z+x*b.z,u.normalize(),h.push(u.x,u.y,u.z),o.x=c.x+n*u.x,o.y=c.y+n*u.y,o.z=c.z+n*u.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=i;w++)for(let v=1;v<=r;v++){const b=(r+1)*(w-1)+(v-1),T=(r+1)*w+(v-1),C=(r+1)*w+v,x=(r+1)*(w-1)+v;g.push(b,T,x),g.push(T,C,x)}}function y(){for(let w=0;w<=i;w++)for(let v=0;v<=r;v++)l.x=w/i,l.y=v/r,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lf(new Eu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ar(e){const t={};for(const i in e){t[i]={};for(const n in e[i]){const r=e[i][n];if(Vc(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=r.clone();else if(Array.isArray(r))if(Vc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[i][n]=s}else t[i][n]=r.slice();else t[i][n]=r}}return t}function Jt(e){const t={};for(let i=0;i<e.length;i++){const n=ar(e[i]);for(const r in n)t[r]=n[r]}return t}function Vc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Xp(e){const t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Gc(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}var Hc={clone:ar,merge:Jt},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Xp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(n.value);break;case"v2":this.uniforms[i].value=new le().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new pt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new $e().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Kp=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qe=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zr=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=qa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Zp=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$p=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function or(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Tu(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var $r=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let o=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(n=r,r=t[--i-1],e>=r)break e}s=i,i=0;break t}break i}for(;i<s;){const a=i+s>>>1;e<t[a]?s=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=i[r+s];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jp=class extends $r{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,s=e+1,a=n[r],o=n[s];if(a===void 0)switch(this.getSettings_().endingStart){case kl:r=e,a=2*t-i;break;case Vl:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case kl:s=e,o=2*i-t;break;case Vl:s=1,o=i+n[1]-n[0];break;default:s=e-1,o=t}const u=(i-t)*.5,l=this.valueSize;this._weightPrev=u/(t-a),this._weightNext=u/(o-i),this._offsetPrev=r*l,this._offsetNext=s*l}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,u=o-a,l=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(i-t)/(n-t),g=f*f,_=g*f,m=-d*_+2*d*g-d*f,p=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*f+1,y=(-1-h)*_+(1.5+h)*g+.5*f,w=h*_-h*g;for(let v=0;v!==a;++v)r[v]=m*s[l+v]+p*s[u+v]+y*s[o+v]+w*s[c+v];return r}},Qp=class extends $r{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,u=o-a,l=(i-t)/(n-t),c=1-l;for(let d=0;d!==a;++d)r[d]=s[u+d]*c+s[o+d]*l;return r}},jp=class extends $r{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},em=class extends $r{interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=e*a,u=o-a,l=this.inTangents,c=this.outTangents;if(!l||!c){const f=(i-t)/(n-t),g=1-f;for(let _=0;_!==a;++_)r[_]=s[u+_]*g+s[o+_]*f;return r}const d=a*2,h=e-1;for(let f=0;f!==a;++f){const g=s[u+f],_=s[o+f],m=h*d+f*2,p=c[m],y=c[m+1],w=e*d+f*2,v=l[w],b=l[w+1],T=im(i,t,p,v,n);r[f]=Wc(T,g,y,b,_)}return r}};function Wc(e,t,i,n,r){const s=1-e;return s*s*s*t+3*s*s*e*i+3*s*e*e*n+e*e*e*r}function tm(e,t,i,n,r){const s=1-e;return 3*s*s*(i-t)+6*s*e*(n-i)+3*e*e*(r-n)}function im(e,t,i,n,r){let s=(e-t)/(r-t);for(let a=0;a<8;a++){const o=Wc(s,t,i,n,r)-e;if(Math.abs(o)<1e-10)break;const u=tm(s,t,i,n,r);if(Math.abs(u)<1e-10)break;s=Math.max(0,Math.min(1,s-o/u))}return s}var Di=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=or(t,this.TimeBufferType),this.values=or(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:or(e.times,Array),values:or(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Tu(e.settings)&&(i.settings={inTangents:or(e.settings.inTangents,Array),outTangents:or(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new em(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case No:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth;break;case Ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return De("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Tu(this.settings)&&(Xc(this.settings.inTangents,e),Xc(this.settings.outTangents,e))}return this}trim(e,t){const i=this.times,n=i.length;let r=0,s=n-1;for(;r!==n&&i[r]<e;)++r;for(;s!==-1&&i[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=i.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const o=i[a];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,a,o),e=!1;break}if(s!==null&&s>o){Le("KeyframeTrack: Out of order keys.",this,a,o,s),e=!1;break}s=o}if(n!==void 0&&v0(n))for(let a=0,o=n.length;a!==o;++a){const u=n[a];if(isNaN(u)){Le("KeyframeTrack: Value is not a valid number.",this,a,u),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Uo,r=e.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const u=e[a],l=e[a+1];if(u!==l&&(a!==1||u!==e[0]))if(n)o=!0;else{const c=a*i,d=c-i,h=c+i;for(let f=0;f!==i;++f){const g=t[c+f];if(g!==t[d+f]||g!==t[h+f]){o=!0;break}}}if(o){if(a!==s){e[s]=e[a];const c=a*i,d=s*i;for(let h=0;h!==i;++h)t[d+h]=t[c+h]}++s}}if(r>0){e[s]=e[r];for(let a=r*i,o=s*i,u=0;u!==i;++u)t[o+u]=t[a+u];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Tu(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Xc(e,t){for(let i=0,n=e.length;i!==n;i+=2)e[i]*=t}Di.prototype.ValueTypeName="",Di.prototype.TimeBufferType=Float32Array,Di.prototype.ValueBufferType=Float32Array,Di.prototype.DefaultInterpolation=No;var Jr=class extends Di{constructor(e,t,i){super(e,t,i)}};Jr.prototype.ValueTypeName="bool",Jr.prototype.ValueBufferType=Array,Jr.prototype.DefaultInterpolation=Cs,Jr.prototype.InterpolantFactoryMethodLinear=void 0,Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var nm=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}};nm.prototype.ValueTypeName="color";var rm=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}};rm.prototype.ValueTypeName="number";var sm=class extends $r{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-t)/(n-t);let u=e*a;for(let l=u+a;u!==l;u+=4)Wi.slerpFlat(r,0,s,u-a,s,u,o);return r}},qc=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new sm(this.times,this.values,this.getValueSize(),e)}};qc.prototype.ValueTypeName="quaternion",qc.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Di{constructor(e,t,i){super(e,t,i)}};Qr.prototype.ValueTypeName="string",Qr.prototype.ValueBufferType=Array,Qr.prototype.DefaultInterpolation=Cs,Qr.prototype.InterpolantFactoryMethodLinear=void 0,Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var am=class extends Di{constructor(e,t,i,n){super(e,t,i,n)}};am.prototype.ValueTypeName="vector";var om=class{constructor(e,t,i){const n=this;let r=!1,s=0,a=0,o;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(l){a++,r===!1&&n.onStart!==void 0&&n.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,n.onProgress!==void 0&&n.onProgress(l,s,a),s===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,c){return u.push(l,c),this},this.removeHandler=function(l){const c=u.indexOf(l);return c!==-1&&u.splice(c,2),this},this.getHandler=function(l){for(let c=0,d=u.length;c<d;c+=2){const h=u[c],f=u[c+1];if(h.global&&(h.lastIndex=0),h.test(l))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},um=new om,lm=class{constructor(e){this.manager=e!==void 0?e:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lm.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cu=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Yc=class extends Cu{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ru=new $e,Kc=new R,Zc=new R,$c=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new du,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kc),Zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Ru.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ru,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,s=n?n.z/r.x:1,a=n?n.w/r.y:1,o=n?n.x/r.x:0,u=n?n.y/r.y:0;e.coordinateSystem===Fr||e.reversedDepth?t.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(Ru)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},aa=new R,oa=new Wi,Pi=new R,Jc=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(aa,oa,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(aa,oa,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hn=new R,Qc=new le,jc=new le,Qt=class extends Jc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Hn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,Qc,jc),t.subVectors(jc,Qc)}setViewOffset(e,t,i,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,u=s.fullHeight;r+=s.offsetX*n/o,t-=s.offsetY*i/u,n*=s.width/o,i*=s.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cm=class extends $c{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},hm=class extends Cu{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new cm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ua=class extends Jc{constructor(e=-1,t=1,i=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,s=i+e,a=n+t,o=n-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,a-=l*this.view.offsetY,o=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dm=class extends $c{constructor(){super(new ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eh=class extends Cu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new dm}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ur=-90,lr=1,fm=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Qt(ur,lr,e,t);n.layers=this.layers,this.add(n);const r=new Qt(ur,lr,e,t);r.layers=this.layers,this.add(r);const s=new Qt(ur,lr,e,t);s.layers=this.layers,this.add(s);const a=new Qt(ur,lr,e,t);a.layers=this.layers,this.add(a);const o=new Qt(ur,lr,e,t);o.layers=this.layers,this.add(o);const u=new Qt(ur,lr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,s,a,o]=t;for(const u of t)this.remove(u);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,u,l]=this.children,c=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(c,d,h),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},pm=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Du="\\[\\]\\.:\\/",mm=new RegExp("["+Du+"]","g"),Pu="[^"+Du+"]",gm="[^"+Du.replace("\\.","")+"]",vm=/((?:WC+[\/:])*)/.source.replace("WC",Pu),_m=/(WCOD+)?/.source.replace("WCOD",gm),xm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),Em=new RegExp("^"+vm+_m+xm+ym+"$"),Mm=["material","materials","bones","map"],Sm=class{constructor(e,t,i){const n=i||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},_t=class wr{constructor(t,i,n){this.path=i,this.parsedPath=n||wr.parseTrackName(i),this.node=wr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new wr.Composite(t,i,n):new wr(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mm,"")}static parseTrackName(t){const i=Em.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Mm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===i||o.uuid===i)return o;const u=n(o.children);if(u)return u}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[i++]=n[r]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,n=i.objectName,r=i.propertyName;let s=i.propertyIndex;if(t||(t=wr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=i.objectIndex;switch(n){case"materials":if(!t.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[r];if(a===void 0){const l=i.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Sm,_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray],_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var GE=new Float32Array(1),th=new $e,wm=class{constructor(e,t,i=0,n=1/0){this.ray=new cu(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return th.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(e,t=!0,i=[]){return Fu(e,this,i,t),i.sort(ih),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Fu(e[n],this,i,t);return i.sort(ih),i}};function ih(e,t){return e.distance-t.distance}function Fu(e,t,i,n){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(r=!1),r===!0&&n===!0){const s=e.children;for(let a=0,o=s.length;a<o;a++)Fu(s[a],t,i,!0)}}var HE=class Bf{static{Bf.prototype.isMatrix2=!0}constructor(t,i,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let n=0;n<4;n++)this.elements[n]=t[n+i];return this}set(t,i,n,r){const s=this.elements;return s[0]=t,s[2]=i,s[1]=n,s[3]=r,this}};function nh(e,t,i,n){const r=bm(n);switch(i){case Nl:return e*t;case to:return e*t/r.components*r.byteLength;case io:return e*t/r.components*r.byteLength;case _n:return e*t*2/r.components*r.byteLength;case no:return e*t*2/r.components*r.byteLength;case Ul:return e*t*3/r.components*r.byteLength;case xi:return e*t*4/r.components*r.byteLength;case ro:return e*t*4/r.components*r.byteLength;case Ms:case Ss:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ws:case bs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ao:case uo:return Math.max(e,16)*Math.max(t,8)/4;case so:case oo:return Math.max(e,8)*Math.max(t,8)/2;case lo:case co:case fo:case po:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ho:case As:case mo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case To:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Do:case Po:case Fo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Lo:case Bo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ts:case Io:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bm(e){switch(e){case si:case Fl:return{byteLength:1,components:1};case Dr:case Ll:case _i:return{byteLength:2,components:1};case ja:case eo:return{byteLength:2,components:4};case Ai:case Qa:case vi:return{byteLength:4,components:1};case Bl:case Il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}})),typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);function rh(){let e=null,t=!1,i=null,n=null;function r(s,a){n=e.requestAnimationFrame(r),i(s,a)}return{start:function(){t!==!0&&i!==null&&e!==null&&(n=e.requestAnimationFrame(r),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function Am(e){const t=new WeakMap;function i(o,u){const l=o.array,c=o.usage,d=l.byteLength,h=e.createBuffer();e.bindBuffer(u,h),e.bufferData(u,l,c),o.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,u,l){const c=u.array,d=u.updateRanges;if(e.bindBuffer(l,o),d.length===0)e.bufferSubData(l,0,c);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];e.bufferSubData(l,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=t.get(o);u&&(e.deleteBuffer(u.buffer),t.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,i(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,u),l.version=o.version}}return{get:r,remove:s,update:a}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Um=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,km=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n3="gl_FragColor = linearToOutputTexel( gl_FragColor );",r3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,a3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,x3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,y3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,D3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ig=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Tm,alphahash_pars_fragment:Cm,alphamap_fragment:Rm,alphamap_pars_fragment:Dm,alphatest_fragment:Pm,alphatest_pars_fragment:Fm,aomap_fragment:Lm,aomap_pars_fragment:Bm,batching_pars_vertex:Im,batching_vertex:Nm,begin_vertex:Um,beginnormal_vertex:Om,bsdfs:zm,iridescence_fragment:km,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Gm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:Km,color_vertex:Zm,common:$m,cube_uv_reflection_fragment:Jm,defaultnormal_vertex:Qm,displacementmap_pars_vertex:jm,displacementmap_vertex:e3,emissivemap_fragment:t3,emissivemap_pars_fragment:i3,colorspace_fragment:n3,colorspace_pars_fragment:r3,envmap_fragment:s3,envmap_common_pars_fragment:a3,envmap_pars_fragment:o3,envmap_pars_vertex:u3,envmap_physical_pars_fragment:x3,envmap_vertex:l3,fog_vertex:c3,fog_pars_vertex:h3,fog_fragment:d3,fog_pars_fragment:f3,gradientmap_pars_fragment:p3,lightmap_pars_fragment:m3,lights_lambert_fragment:g3,lights_lambert_pars_fragment:v3,lights_pars_begin:_3,lights_toon_fragment:y3,lights_toon_pars_fragment:E3,lights_phong_fragment:M3,lights_phong_pars_fragment:S3,lights_physical_fragment:w3,lights_physical_pars_fragment:b3,lights_fragment_begin:A3,lights_fragment_maps:T3,lights_fragment_end:C3,lightprobes_pars_fragment:R3,logdepthbuf_fragment:D3,logdepthbuf_pars_fragment:P3,logdepthbuf_pars_vertex:F3,logdepthbuf_vertex:L3,map_fragment:B3,map_pars_fragment:I3,map_particle_fragment:N3,map_particle_pars_fragment:U3,metalnessmap_fragment:O3,metalnessmap_pars_fragment:z3,morphinstance_vertex:k3,morphcolor_vertex:V3,morphnormal_vertex:G3,morphtarget_pars_vertex:H3,morphtarget_vertex:W3,normal_fragment_begin:X3,normal_fragment_maps:q3,normal_pars_fragment:Y3,normal_pars_vertex:K3,normal_vertex:Z3,normalmap_pars_fragment:$3,clearcoat_normal_fragment_begin:J3,clearcoat_normal_fragment_maps:Q3,clearcoat_pars_fragment:j3,iridescence_pars_fragment:eg,opaque_fragment:tg,packing:ig,premultiplied_alpha_fragment:ng,project_vertex:rg,dithering_fragment:sg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:hg,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:vg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:yg,transmission_fragment:Eg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:wg,uv_vertex:bg,worldpos_vertex:Ag,background_vert:Tg,background_frag:Cg,backgroundCube_vert:Rg,backgroundCube_frag:Dg,cube_vert:Pg,cube_frag:Fg,depth_vert:Lg,depth_frag:Bg,distance_vert:Ig,distance_frag:Ng,equirect_vert:Ug,equirect_frag:Og,linedashed_vert:zg,linedashed_frag:kg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Hg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Kg,meshphong_vert:Zg,meshphong_frag:$g,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:jg,meshtoon_frag:ev,points_vert:tv,points_frag:iv,shadow_vert:nv,shadow_frag:rv,sprite_vert:sv,sprite_frag:av},he={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Fi={basic:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Jt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Jt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Jt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Jt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Jt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Jt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Jt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Jt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Jt([he.common,he.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Jt([he.lights,he.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Fi.physical={uniforms:Jt([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var la={r:0,b:0,g:0},ov=new $e,sh=new Oe;sh.set(-1,0,0,0,1,0,0,0,1);function uv(e,t,i,n,r,s){const a=new Ie(0);let o=r===!0?0:1,u,l,c=null,d=0,h=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(y){let w=!1;const v=f(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(y,w){const v=f(w);v&&(v.isCubeTexture||v.mapping===ys)?(l===void 0&&(l=new ne(new xt(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:ar(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ov.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sh),l.material.toneMapped=We.getTransfer(v.colorSpace)!==it,(c!==v||d!==v.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,c=v,d=v.version,h=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new ne(new Nt(2,2),new Ht({name:"BackgroundMaterial",uniforms:ar(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=We.getTransfer(v.colorSpace)!==it,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||h!==e.toneMapping)&&(u.material.needsUpdate=!0,c=v,d=v.version,h=e.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function m(y,w){y.getRGB(la,Gc(e)),i.buffers.color.setClear(la.r,la.g,la.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function lv(e,t){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(P,D,G,L,O){let $=!1;const V=d(P,L,G,D);s!==V&&(s=V,l(s.object)),$=f(P,L,G,O),$&&g(P,L,G,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(P,D,G,L),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function u(){return e.createVertexArray()}function l(P){return e.bindVertexArray(P)}function c(P){return e.deleteVertexArray(P)}function d(P,D,G,L){const O=L.wireframe===!0;let $=n[D.id];$===void 0&&($={},n[D.id]=$);const V=P.isInstancedMesh===!0?P.id:0;let ie=$[V];ie===void 0&&(ie={},$[V]=ie);let X=ie[G.id];X===void 0&&(X={},ie[G.id]=X);let J=X[O];return J===void 0&&(J=h(u()),X[O]=J),J}function h(P){const D=[],G=[],L=[];for(let O=0;O<i;O++)D[O]=0,G[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:L,object:P,attributes:{},index:null}}function f(P,D,G,L){const O=s.attributes,$=D.attributes;let V=0;const ie=G.getAttributes();for(const X in ie)if(ie[X].location>=0){const j=O[X];let Te=$[X];if(Te===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(Te=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(Te=P.instanceColor)),j===void 0||j.attribute!==Te||Te&&j.data!==Te.data)return!0;V++}return s.attributesNum!==V||s.index!==L}function g(P,D,G,L){const O={},$=D.attributes;let V=0;const ie=G.getAttributes();for(const X in ie)if(ie[X].location>=0){let j=$[X];j===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));const Te={};Te.attribute=j,j&&j.data&&(Te.data=j.data),O[X]=Te,V++}s.attributes=O,s.attributesNum=V,s.index=L}function _(){const P=s.newAttributes;for(let D=0,G=P.length;D<G;D++)P[D]=0}function m(P){p(P,0)}function p(P,D){const G=s.newAttributes,L=s.enabledAttributes,O=s.attributeDivisors;G[P]=1,L[P]===0&&(e.enableVertexAttribArray(P),L[P]=1),O[P]!==D&&(e.vertexAttribDivisor(P,D),O[P]=D)}function y(){const P=s.newAttributes,D=s.enabledAttributes;for(let G=0,L=D.length;G<L;G++)D[G]!==P[G]&&(e.disableVertexAttribArray(G),D[G]=0)}function w(P,D,G,L,O,$,V){V===!0?e.vertexAttribIPointer(P,D,G,O,$):e.vertexAttribPointer(P,D,G,L,O,$)}function v(P,D,G,L){_();const O=L.attributes,$=G.getAttributes(),V=D.defaultAttributeValues;for(const ie in $){const X=$[ie];if(X.location>=0){let J=O[ie];if(J===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const j=J.normalized,Te=J.itemSize,Se=t.get(J);if(Se===void 0)continue;const rt=Se.buffer,Be=Se.type,q=Se.bytesPerElement,re=Be===e.INT||Be===e.UNSIGNED_INT||J.gpuType===Qa;if(J.isInterleavedBufferAttribute){const se=J.data,Ae=se.stride,Fe=J.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)p(X.location+Ce,se.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)m(X.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let Ce=0;Ce<X.locationSize;Ce++)w(X.location+Ce,Te/X.locationSize,Be,j,Ae*q,(Fe+Te/X.locationSize*Ce)*q,re)}else{if(J.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,J.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);e.bindBuffer(e.ARRAY_BUFFER,rt);for(let se=0;se<X.locationSize;se++)w(X.location+se,Te/X.locationSize,Be,j,Te*q,Te/X.locationSize*se*q,re)}}else if(V!==void 0){const j=V[ie];if(j!==void 0)switch(j.length){case 2:e.vertexAttrib2fv(X.location,j);break;case 3:e.vertexAttrib3fv(X.location,j);break;case 4:e.vertexAttrib4fv(X.location,j);break;default:e.vertexAttrib1fv(X.location,j)}}}}y()}function b(){M();for(const P in n){const D=n[P];for(const G in D){const L=D[G];for(const O in L){const $=L[O];for(const V in $)c($[V].object),delete $[V];delete L[O]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const G in D){const L=D[G];for(const O in L){const $=L[O];for(const V in $)c($[V].object),delete $[V];delete L[O]}}delete n[P.id]}function C(P){for(const D in n){const G=n[D];for(const L in G){const O=G[L];if(O[P.id]===void 0)continue;const $=O[P.id];for(const V in $)c($[V].object),delete $[V];delete O[P.id]}}}function x(P){for(const D in n){const G=n[D],L=P.isInstancedMesh===!0?P.id:0,O=G[L];if(O!==void 0){for(const $ in O){const V=O[$];for(const ie in V)c(V[ie].object),delete V[ie];delete O[$]}delete G[L],Object.keys(G).length===0&&delete n[D]}}}function M(){F(),a=!0,s!==r&&(s=r,l(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function cv(e,t,i){let n;function r(u){n=u}function s(u,l){e.drawArrays(n,u,l),i.update(l,n,1)}function a(u,l,c){c!==0&&(e.drawArraysInstanced(n,u,l,c),i.update(l,n,c))}function o(u,l,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,l,0,c);let h=0;for(let f=0;f<c;f++)h+=l[f];i.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function hv(e,t,i,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==xi&&n.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==si&&C!==vi&&!x&&n.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function u(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=i.precision!==void 0?i.precision:"highp";const c=u(l);c!==l&&(De("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const d=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&h===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),w=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:T}}function dv(e){const t=this;let i=null,n=0,r=!1,s=!1;const a=new $i,o=new Oe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){i=c(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!r||g===null||g.length===0||s&&!m)s?c(null):l();else{const y=s?0:n,w=y*4;let v=p.clippingState||null;u.value=v,v=c(g,h,w,f);for(let b=0;b!==w;++b)v[b]=i[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){u.value!==i&&(u.value=i,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=u.value,g!==!0||m===null){const p=f+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==_;++w,v+=4)a.copy(d[w]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}u.value=m,u.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var cr=4,fv=6,pv=20,mv=256,jr=new ua,ah=new Ie,Lu=null,Bu=0,Iu=0,Nu=!1,gv=new R,Rn=new R,Uu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){const{size:s=256,position:a=gv}=r;Lu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,n,o,a),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lu,Bu,Iu),this._renderer.xr.enabled=Nu,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gn||e.mapping===kn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:_i,format:xi,colorSpace:Ds,depthBuffer:!1},n=oh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vv(r)),this._blurMaterial=xv(r,e,t),this._ggxMaterial=_v(r,e,t)}return n}_compileMaterial(e){const t=new ne(new vt,e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,i,n,r){const o=new Qt(90,1,t,i),u=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(ah),c.toneMapping=bi,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(n),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new xt,new At({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(ah),m=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(o.up.set(0,u[y],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+l[y],r.y,r.z)):w===1?(o.up.set(0,0,u[y]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+l[y],r.z)):(o.up.set(0,u[y],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+l[y]));const v=this._cubeSize;hr(n,w*v,y>2?v:0,v,v),c.setRenderTarget(n),m&&c.render(g,o),c.render(e,o)}c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===gn||e.mapping===kn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const r=n?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=e;const o=this._cubeSize;hr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(s,jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const n=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const o=s.uniforms,u=i/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),c=Math.sqrt(u*u-l*l),d=u*1.25,h=c*d,{_lodMax:f}=this,g=this._sizeLods[i],_=3*g*(i>f-cr?i-f+cr:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=h,o.mipInt.value=f-t,hr(r,_,m,3*g,2*g),n.setRenderTarget(r),n.render(a,jr),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=f-i,hr(e,_,m,3*g,2*g),n.setRenderTarget(e),n.render(a,jr)}_blur(e,t,i,n){const r=this._pingPongRenderTarget,s=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,s),this._blurPass(r,e,i,i,s)}_blurPass(e,t,i,n,r){const s=this._renderer,a=this._blurMaterial,o=this._lodMeshes[n];o.material=a;const u=a.uniforms;u.envMap.value=e.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-i;const l=this._sizeLods[n],c=3*l*(n>this._lodMax-cr?n-this._lodMax+cr:0),d=4*(this._cubeSize-l);hr(t,c,d,3*l,2*l),s.setRenderTarget(t),s.render(o,jr)}};function vv(e){const t=[],i=[];let n=e;const r=e-cr+1+fv;for(let s=0;s<r;s++){const a=Math.pow(2,n);t.push(a);const o=1/(a-2),u=-o,l=1+o,c=[u,u,l,u,l,l,u,u,l,l,u,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){const y=p%3*2/3-1,w=p>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];g.set(v,f*h*p);for(let b=0;b<h;b++){const T=c[b*2]*2-1,C=c[b*2+1]*2-1;p===0?Rn.set(1,C,T):p===1?Rn.set(-T,1,-C):p===2?Rn.set(-T,C,1):p===3?Rn.set(-1,C,-T):p===4?Rn.set(-T,-1,C):Rn.set(T,C,-1),Rn.toArray(_,(p*h+b)*f)}}const m=new vt;m.setAttribute("position",new ui(g,f)),m.setAttribute("outputDirection",new ui(_,f)),i.push(new ne(m,null)),n>cr&&n--}return{lodMeshes:i,sizeLods:t}}function oh(e,t,i){const n=new ai(e,t,i);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(e,t,i,n,r){e.viewport.set(t,i,n,r),e.scissor.set(t,i,n,r)}function _v(e,t,i){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function xv(e,t,i){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function uh(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function lh(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ch=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new yc(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new xt(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:Vi});r.uniforms.tEquirect.value=t;const s=new ne(n,r),a=t.minFilter;return t.minFilter===rn&&(t.minFilter=It),new fm(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(r)}};function yv(e){let t=new WeakMap,i=new WeakMap,n=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ka||f===Za)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new ch(g.height);return _.fromEquirectangularTexture(e,h),t.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===Ka||f===Za,_=f===gn||f===kn;if(g||_){let m=i.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Uu(e)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,i.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return g&&y&&y.height>0||_&&y&&u(y)?(n===null&&(n=new Uu(e)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,i.set(h,m),h.addEventListener("dispose",c),m.texture):null}}}return h}function o(h,f){return f===Ka?h.mapping=gn:f===Za&&(h.mapping=kn),h}function u(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=i.get(f);g!==void 0&&(i.delete(f),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Ev(e){const t={};function i(n){if(t[n]!==void 0)return t[n];const r=e.getExtension(n);return t[n]=r,r}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){const r=i(n);return r===null&&Gn("WebGLRenderer: "+n+" extension not supported."),r}}}function Mv(e,t,i,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,i.memory.geometries++),h}function u(d){const h=d.attributes;for(const f in h)t.update(h[f],e.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let w=0,v=y.length;w<v;w+=3){const b=y[w+0],T=y[w+1],C=y[w+2];h.push(b,T,T,C,C,b)}}else{const y=g.array;_=g.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const b=w+0,T=w+1,C=w+2;h.push(b,T,T,C,C,b)}}const m=new(g.count>=65535?oc:ac)(h,1);m.version=_;const p=s.get(d);p&&t.remove(p),s.set(d,m)}function c(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:u,getWireframeAttribute:c}}function Sv(e,t,i){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function u(d,h){e.drawElements(n,h,s,d*a),i.update(h,n,1)}function l(d,h,f){f!==0&&(e.drawElementsInstanced(n,h,s,d*a,f),i.update(h,n,f))}function c(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];i.update(_,n,1)}this.setMode=r,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=c}function wv(e){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(i.calls++,a){case e.TRIANGLES:i.triangles+=o*(s/3);break;case e.LINES:i.lines+=o*(s/2);break;case e.LINE_STRIP:i.lines+=o*(s-1);break;case e.LINE_LOOP:i.lines+=o*s;break;case e.POINTS:i.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:r,update:n}}function bv(e,t,i){const n=new WeakMap,r=new pt;function s(a,o,u){const l=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let f=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",f)};h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=o.attributes.position.count*v,T=1;b>t.maxTextureSize&&(T=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const C=new Float32Array(b*T*4*d),x=new $l(C,b,T,d);x.type=vi,x.needsUpdate=!0;const M=v*4;for(let F=0;F<d;F++){const P=p[F],D=y[F],G=w[F],L=b*T*4*F;for(let O=0;O<P.count;O++){const $=O*M;g===!0&&(r.fromBufferAttribute(P,O),C[L+$+0]=r.x,C[L+$+1]=r.y,C[L+$+2]=r.z,C[L+$+3]=0),_===!0&&(r.fromBufferAttribute(D,O),C[L+$+4]=r.x,C[L+$+5]=r.y,C[L+$+6]=r.z,C[L+$+7]=0),m===!0&&(r.fromBufferAttribute(G,O),C[L+$+8]=r.x,C[L+$+9]=r.y,C[L+$+10]=r.z,C[L+$+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:x,size:new le(b,T)},n.set(o,h),o.addEventListener("dispose",f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(e,"morphTexture",a.morphTexture,i);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;u.getUniforms().setValue(e,"morphTargetBaseInfluence",g),u.getUniforms().setValue(e,"morphTargetInfluences",l)}u.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function Av(e,t,i,n,r){let s=new WeakMap;function a(l){const c=r.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",u)===!1&&l.addEventListener("dispose",u),s.get(l)!==c&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function u(l){const c=l.target;c.removeEventListener("dispose",u),n.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:a,dispose:o}}var Tv={[bl]:"LINEAR_TONE_MAPPING",[Al]:"REINHARD_TONE_MAPPING",[Tl]:"CINEON_TONE_MAPPING",[Ya]:"ACES_FILMIC_TONE_MAPPING",[Rl]:"AGX_TONE_MAPPING",[Dl]:"NEUTRAL_TONE_MAPPING",[Cl]:"CUSTOM_TONE_MAPPING"};function Cv(e,t,i,n,r,s){const a=new ai(t,i,{type:e,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,u=null;const l=new vt;l.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ne([0,2,0,0,2,0],2));const c=new Kp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ne(l,c),h=new ua(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,y=[],w=!1;this.setSize=function(v,b){a.setSize(v,b),o!==null&&o.setSize(v,b),u!==null&&u.setSize(v,b);for(let T=0;T<y.length;T++){const C=y[T];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;const b=a.width,T=a.height;y.length>0&&o===null&&(o=new ai(b,T,{type:_i,depthBuffer:!1,stencilBuffer:!1}),u=new ai(b,T,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){const x=y[C];x.setSize&&x.setSize(b,T)}},this.begin=function(v,b){if(_||v.toneMapping===bi&&y.length===0)return!1;if(p=b,b!==null){const T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=bi,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=m,_=!0;let T=a,C=o;for(let x=0;x<y.length;x++){const M=y[x];M.enabled!==!1&&(M.render(v,C,T,b),M.needsSwap!==!1&&(T=C,C=C===o?u:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,c.defines={},We.getTransfer(f)===it&&(c.defines.SRGB_TRANSFER="");const x=Tv[g];x&&(c.defines[x]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),u!==null&&u.dispose(),l.dispose(),c.dispose()}}var hh=new di,Ou=new Gr(1,1),dh=new $l,fh=new G0,ph=new yc,mh=[],gh=[],vh=new Float32Array(16),_h=new Float32Array(9),xh=new Float32Array(4);function dr(e,t,i){const n=e[0];if(n<=0||n>0)return e;const r=t*i;let s=mh[r];if(s===void 0&&(s=new Float32Array(r),mh[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=i,e[a].toArray(s,o)}return s}function Tt(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Ct(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function ha(e,t){let i=gh[t];i===void 0&&(i=new Int32Array(t),gh[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function Rv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Dv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2fv(this.addr,t),Ct(i,t)}}function Pv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Tt(i,t))return;e.uniform3fv(this.addr,t),Ct(i,t)}}function Fv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4fv(this.addr,t),Ct(i,t)}}function Lv(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Tt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ct(i,t)}else{if(Tt(i,n))return;xh.set(n),e.uniformMatrix2fv(this.addr,!1,xh),Ct(i,n)}}function Bv(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Tt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ct(i,t)}else{if(Tt(i,n))return;_h.set(n),e.uniformMatrix3fv(this.addr,!1,_h),Ct(i,n)}}function Iv(e,t){const i=this.cache,n=t.elements;if(n===void 0){if(Tt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ct(i,t)}else{if(Tt(i,n))return;vh.set(n),e.uniformMatrix4fv(this.addr,!1,vh),Ct(i,n)}}function Nv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Uv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2iv(this.addr,t),Ct(i,t)}}function Ov(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3iv(this.addr,t),Ct(i,t)}}function zv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4iv(this.addr,t),Ct(i,t)}}function kv(e,t){const i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Vv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Tt(i,t))return;e.uniform2uiv(this.addr,t),Ct(i,t)}}function Gv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Tt(i,t))return;e.uniform3uiv(this.addr,t),Ct(i,t)}}function Hv(e,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Tt(i,t))return;e.uniform4uiv(this.addr,t),Ct(i,t)}}function Wv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Ou.compareFunction=i.isReversedDepthBuffer()?ko:zo,s=Ou):s=hh,i.setTexture2D(t||s,r)}function Xv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture3D(t||fh,r)}function qv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTextureCube(t||ph,r)}function Yv(e,t,i){const n=this.cache,r=i.allocateTextureUnit();n[0]!==r&&(e.uniform1i(this.addr,r),n[0]=r),i.setTexture2DArray(t||dh,r)}function Kv(e){switch(e){case 5126:return Rv;case 35664:return Dv;case 35665:return Pv;case 35666:return Fv;case 35674:return Lv;case 35675:return Bv;case 35676:return Iv;case 5124:case 35670:return Nv;case 35667:case 35671:return Uv;case 35668:case 35672:return Ov;case 35669:case 35673:return zv;case 5125:return kv;case 36294:return Vv;case 36295:return Gv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return Xv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Yv}}function Zv(e,t){e.uniform1fv(this.addr,t)}function $v(e,t){const i=dr(t,this.size,2);e.uniform2fv(this.addr,i)}function Jv(e,t){const i=dr(t,this.size,3);e.uniform3fv(this.addr,i)}function Qv(e,t){const i=dr(t,this.size,4);e.uniform4fv(this.addr,i)}function jv(e,t){const i=dr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function e_(e,t){const i=dr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function t_(e,t){const i=dr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function i_(e,t){e.uniform1iv(this.addr,t)}function n_(e,t){e.uniform2iv(this.addr,t)}function r_(e,t){e.uniform3iv(this.addr,t)}function s_(e,t){e.uniform4iv(this.addr,t)}function a_(e,t){e.uniform1uiv(this.addr,t)}function o_(e,t){e.uniform2uiv(this.addr,t)}function u_(e,t){e.uniform3uiv(this.addr,t)}function l_(e,t){e.uniform4uiv(this.addr,t)}function c_(e,t,i){const n=this.cache,r=t.length,s=ha(i,r);Tt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));let a;this.type===e.SAMPLER_2D_SHADOW?a=Ou:a=hh;for(let o=0;o!==r;++o)i.setTexture2D(t[o]||a,s[o])}function h_(e,t,i){const n=this.cache,r=t.length,s=ha(i,r);Tt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)i.setTexture3D(t[a]||fh,s[a])}function d_(e,t,i){const n=this.cache,r=t.length,s=ha(i,r);Tt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)i.setTextureCube(t[a]||ph,s[a])}function f_(e,t,i){const n=this.cache,r=t.length,s=ha(i,r);Tt(n,s)||(e.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==r;++a)i.setTexture2DArray(t[a]||dh,s[a])}function p_(e){switch(e){case 5126:return Zv;case 35664:return $v;case 35665:return Jv;case 35666:return Qv;case 35674:return jv;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return i_;case 35667:case 35671:return n_;case 35668:case 35672:return r_;case 35669:case 35673:return s_;case 5125:return a_;case 36294:return o_;case 36295:return u_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}var m_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}},g_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p_(t.type)}},v_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const a=n[r];a.setValue(e,t[a.id],i)}}},zu=/(\w+)(\])?(\[|\.)?/g;function yh(e,t){e.seq.push(t),e.map[t.id]=t}function __(e,t,i){const n=e.name,r=n.length;for(zu.lastIndex=0;;){const s=zu.exec(n),a=zu.lastIndex;let o=s[1];const u=s[2]==="]",l=s[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===r){yh(i,l===void 0?new m_(o,e,t):new g_(o,e,t));break}else{let d=i.map[o];d===void 0&&(d=new v_(o),yh(i,d)),i=d}}}var da=class{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),o=e.getUniformLocation(t,a.name);__(a,o,this)}const n=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(s):r.push(s);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,s=t.length;r!==s;++r){const a=t[r],o=i[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const s=e[n];s.id in t&&i.push(s)}return i}};function Eh(e,t,i){const n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var x_=37297,y_=0;function E_(e,t){const i=e.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${i[a]}`)}return n.join(`
`)}var Mh=new Oe;function M_(e){We._getMatrix(Mh,We.workingColorSpace,e);const t=`mat3( ${Mh.elements.map(i=>i.toFixed(4))} )`;switch(We.getTransfer(e)){case Ps:return[t,"LinearTransferOETF"];case it:return[t,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Sh(e,t,i){const n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return i.toUpperCase()+`

`+s+`

`+E_(e.getShaderSource(t),o)}else return s}function S_(e,t){const i=M_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var w_={[bl]:"Linear",[Al]:"Reinhard",[Tl]:"Cineon",[Ya]:"ACESFilmic",[Rl]:"AgX",[Dl]:"Neutral",[Cl]:"Custom"};function b_(e,t){const i=w_[t];return i===void 0?(De("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var fa=new R;function A_(){We.getLuminanceCoefficients(fa);const e=fa.x.toFixed(4),t=fa.y.toFixed(4),i=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function C_(e){const t=[];for(const i in e){const n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function R_(e,t){const i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return i}function es(e){return e!==""}function wh(e,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(e){return e.replace(D_,F_)}var P_=new Map;function F_(e,t){let i=ze[t];if(i===void 0){const n=P_.get(t);if(n!==void 0)i=ze[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ku(i)}var L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(e){return e.replace(L_,B_)}function B_(e,t,i,n){let r="";for(let s=parseInt(t);s<parseInt(i);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Th(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var I_={[br]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function N_(e){return I_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var U_={[gn]:"ENVMAP_TYPE_CUBE",[kn]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE_UV"};function O_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":U_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var z_={[kn]:"ENVMAP_MODE_REFRACTION"};function k_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V_={[qa]:"ENVMAP_BLENDING_MULTIPLY",[n0]:"ENVMAP_BLENDING_MIX",[r0]:"ENVMAP_BLENDING_ADD"};function G_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":V_[e.combine]||"ENVMAP_BLENDING_NONE"}function H_(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:n,maxMip:i}}function W_(e,t,i,n){const r=e.getContext(),s=i.defines;let a=i.vertexShader,o=i.fragmentShader;const u=N_(i),l=O_(i),c=k_(i),d=G_(i),h=H_(i),f=T_(i),g=C_(s),_=r.createProgram();let m,p,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[Th(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[Th(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==bi?"#define TONE_MAPPING":"",i.toneMapping!==bi?ze.tonemapping_pars_fragment:"",i.toneMapping!==bi?b_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,S_("linearToOutputTexel",i.outputColorSpace),A_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(es).join(`
`)),a=ku(a),a=wh(a,i),a=bh(a,i),o=ku(o),o=wh(o,i),o=bh(o,i),a=Ah(a),o=Ah(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",i.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+a,v=y+p+o,b=Eh(r,r.VERTEX_SHADER,w),T=Eh(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,T),i.index0AttributeName!==void 0?r.bindAttribLocation(_,0,i.index0AttributeName):i.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(P){if(e.debug.checkShaderErrors){const D=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(b)||"",L=r.getShaderInfoLog(T)||"",O=D.trim(),$=G.trim(),V=L.trim();let ie=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,_,b,T);else{const J=Sh(r,b,"vertex"),j=Sh(r,T,"fragment");Le("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+J+`
`+j)}else O!==""?De("WebGLProgram: Program Info Log:",O):($===""||V==="")&&(X=!1);X&&(P.diagnostics={runnable:ie,programLog:O,vertexShader:{log:$,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(T),x=new da(r,_),M=R_(r,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(_,x_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}var X_=0,q_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Y_(e),t.set(e,i)),i}},Y_=class{constructor(e){this.id=X_++,this.code=e,this.usedTimes=0}};function K_(e){return e===_n||e===As||e===Ts}function Z_(e,t,i,n,r,s){const a=new Yo,o=new q_,u=new Set,l=[],c=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return u.add(x),x===0?"uv":`uv${x}`}function _(x,M,F,P,D,G){const L=P.fog,O=D.geometry,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=t.get(x.envMap||$,V),X=ie&&ie.mapping===ys?ie.image.height:null,J=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&De("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Te=j!==void 0?j.length:0;let Se=0;O.morphAttributes.position!==void 0&&(Se=1),O.morphAttributes.normal!==void 0&&(Se=2),O.morphAttributes.color!==void 0&&(Se=3);let rt,Be,q,re;if(J){const lt=Fi[J];rt=lt.vertexShader,Be=lt.fragmentShader}else{rt=x.vertexShader,Be=x.fragmentShader;const lt=o.getVertexShaderStage(x),et=o.getFragmentShaderStage(x);o.update(x,lt,et),q=lt.id,re=et.id}const se=e.getRenderTarget(),Ae=e.state.buffers.depth.getReversed(),Fe=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,Rt=!!x.map,He=!!x.matcap,Ye=!!ie,st=!!x.aoMap,Ke=!!x.lightMap,kt=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,ni=!!x.displacementMap,Dt=!!x.emissiveMap,Pt=!!x.metalnessMap,N=!!x.roughnessMap,ri=x.anisotropy>0,je=x.clearcoat>0,gt=x.dispersion>0,A=x.retroreflectivity>0,E=x.iridescence>0,B=x.sheen>0,H=x.transmission>0,te=ri&&!!x.anisotropyMap,oe=je&&!!x.clearcoatMap,de=je&&!!x.clearcoatNormalMap,K=je&&!!x.clearcoatRoughnessMap,Q=E&&!!x.iridescenceMap,ve=E&&!!x.iridescenceThicknessMap,be=B&&!!x.sheenColorMap,fe=B&&!!x.sheenRoughnessMap,ae=!!x.specularMap,Re=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Qe=H&&!!x.transmissionMap,U=H&&!!x.thicknessMap,ue=!!x.gradientMap,Z=!!x.alphaMap,ce=x.alphaTest>0,_e=!!x.alphaHash,ee=!!x.extensions;let pe=bi;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(pe=e.toneMapping);const Ue={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:Be,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ce,batchingColor:Ce&&D._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&D.instanceColor!==null,instancingMorph:Fe&&D.morphTexture!==null,outputColorSpace:se===null?e.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:He,envMap:Ye,envMapMode:Ye&&ie.mapping,envMapCubeUVHeight:X,aoMap:st,lightMap:Ke,bumpMap:kt,normalMap:dt,displacementMap:ni,emissiveMap:Dt,normalMapObjectSpace:dt&&x.normalMapType===o0,normalMapTangentSpace:dt&&x.normalMapType===Rs,packedNormalMap:dt&&x.normalMapType===Rs&&K_(x.normalMap.format),metalnessMap:Pt,roughnessMap:N,anisotropy:ri,anisotropyMap:te,clearcoat:je,clearcoatMap:oe,clearcoatNormalMap:de,clearcoatRoughnessMap:K,dispersion:gt,retroreflection:A,iridescence:E,iridescenceMap:Q,iridescenceThicknessMap:ve,sheen:B,sheenColorMap:be,sheenRoughnessMap:fe,specularMap:ae,specularColorMap:Re,specularIntensityMap:Pe,transmission:H,transmissionMap:Qe,thicknessMap:U,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Tr&&x.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:_e,combine:x.combine,mapUv:Rt&&g(x.map.channel),aoMapUv:st&&g(x.aoMap.channel),lightMapUv:Ke&&g(x.lightMap.channel),bumpMapUv:kt&&g(x.bumpMap.channel),normalMapUv:dt&&g(x.normalMap.channel),displacementMapUv:ni&&g(x.displacementMap.channel),emissiveMapUv:Dt&&g(x.emissiveMap.channel),metalnessMapUv:Pt&&g(x.metalnessMap.channel),roughnessMapUv:N&&g(x.roughnessMap.channel),anisotropyMapUv:te&&g(x.anisotropyMap.channel),clearcoatMapUv:oe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(x.sheenRoughnessMap.channel),specularMapUv:ae&&g(x.specularMap.channel),specularColorMapUv:Re&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:Qe&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:Z&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||ri),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Rt||Z),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Se,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:pe,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kt,flipSided:x.side===Lt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ee&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&x.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ue.vertexUv1s=u.has(1),Ue.vertexUv2s=u.has(2),Ue.vertexUv3s=u.has(3),u.clear(),Ue}function m(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)M.push(F),M.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(p(M,x),y(M,x),M.push(e.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const M=f[x.type];let F;if(M){const P=Fi[M];F=Hc.clone(P.uniforms)}else F=x.uniforms;return F}function v(x,M){let F=c.get(M);return F!==void 0?++F.usedTimes:(F=new W_(e,M,x,r),l.push(F),c.set(M,F)),F}function b(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),c.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:C}}function $_(){let e=new WeakMap;function t(a){return e.has(a)}function i(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function n(a){e.delete(a)}function r(a,o,u){e.get(a)[o]=u}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:r,dispose:s}}function J_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ch(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Rh(){const e=[];let t=0;const i=[],n=[],r=[];function s(){t=0,i.length=0,n.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let y=e[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},e[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=g,y.materialVariant=a(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=m,y.group=p),t++,y}function u(h,f,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);const w=o(h,f,g,_,m,p);g.transmission>0?n.push(w):g.transparent===!0?r.push(w):i.push(w)}function l(h,f,g,_,m,p){const y=o(h,f,g,_,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?r.unshift(y):i.unshift(y)}function c(h,f){i.length>1&&i.sort(h||J_),n.length>1&&n.sort(f||Ch),r.length>1&&r.sort(f||Ch)}function d(){for(let h=t,f=e.length;h<f;h++){const g=e[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:n,transparent:r,init:s,push:u,unshift:l,finish:d,sort:c}}function Q_(){let e=new WeakMap;function t(n,r){const s=e.get(n);let a;return s===void 0?(a=new Rh,e.set(n,[a])):r>=s.length?(a=new Rh,s.push(a)):a=s[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function j_(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new Ie};break;case"SpotLight":i={position:new R,direction:new R,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":i={color:new Ie,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function e1(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var t1=0;function i1(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function n1(e){const t=new j_,i=e1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const r=new R,s=new $e,a=new $e;function o(l){let c=0,d=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,w=0,v=0,b=0,T=0,C=0,x=0,M=0,F=0;l.sort(i1);for(let D=0,G=l.length;D<G;D++){const L=l[D],O=L.color,$=L.intensity,V=L.distance;let ie=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===_n?ie=L.shadow.map.texture:ie=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=O.r*$,d+=O.g*$,h+=O.b*$;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],$);F++}else if(L.isSunLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,j=i.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=ie;const Te=J.getViewportCount();for(let Se=0;Se<Te;Se++)n.sunShadowMatrix[_+Se]=J.getMatrix(Se),n.sunShadowCascade[_+Se]=J._cascadeData[Se];_+=Te,g++}n.sun[f]=X,f++}else if(L.isDirectionalLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,j=i.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=X,m++}else if(L.isSpotLight){const X=t.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(O).multiplyScalar($),X.distance=V,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[y]=X;const J=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,J.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[y]=J.matrix,L.castShadow){const j=i.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=ie,C++}y++}else if(L.isRectAreaLight){const X=t.get(L);X.color.copy(O).multiplyScalar($),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=X,w++}else if(L.isPointLight){const X=t.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const J=L.shadow,j=i.get(L);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ie,n.pointShadowMatrix[p]=L.shadow.matrix,T++}n.point[p]=X,p++}else if(L.isHemisphereLight){const X=t.get(L);X.skyColor.copy(L.color).multiplyScalar($),X.groundColor.copy(L.groundColor).multiplyScalar($),n.hemi[v]=X,v++}}w>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==T||P.numSpotShadows!==C||P.numSpotMaps!==x||P.numLightProbes!==F)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=F,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=T,P.numSpotShadows=C,P.numSpotMaps=x,P.numLightProbes=F,n.version=t1++)}function u(l,c){let d=0,h=0,f=0,g=0,_=0,m=0;const p=c.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){const v=l[y];if(v.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),h++}else if(v.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:u,state:n}}function Dh(e){const t=new n1(e),i=[],n=[],r=[];function s(h){d.camera=h,i.length=0,n.length=0,r.length=0}function a(h){i.push(h)}function o(h){n.push(h)}function u(h){r.push(h)}function l(){t.setup(i)}function c(h){t.setupView(i,h)}const d={lightsArray:i,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:u}}function r1(e){let t=new WeakMap;function i(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Dh(e),t.set(r,[o])):s>=a.length?(o=new Dh(e),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:i,dispose:n}}var s1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o1=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],u1=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Ph=new $e,ts=new R,Vu=new R;function l1(e,t,i){let n=new du;const r=new le,s=new le,a=new pt,o=new Zp,u=new $p,l={},c=i.maxTextureSize,d={[ki]:Lt,[Lt]:ki,[Kt]:Kt},h=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:s1,fragmentShader:a1}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=br;let p=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Of&&(De("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=br);const M=e.getRenderTarget(),F=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),D=e.state;D.setBlending(Vi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const G=p!==this.type;G&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=T.length;L<O;L++){const $=T[L],V=$.shadow;if(V===void 0){De("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();r.multiply(ie),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ie.x),r.x=s.x*ie.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ie.y),r.y=s.y*ie.y,V.mapSize.y=s.y));const X=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ar){if($.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ai(r.x,r.y,{format:_n,type:_i,minFilter:It,magFilter:It,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new Gr(r.x,r.y,vi),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=Hi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt}else $.isPointLight?(V.map=new ch(r.x),V.map.depthTexture=new up(r.x,Ai)):(V.map=new ai(r.x,r.y),V.map.depthTexture=new Gr(r.x,r.y,Ai)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=Hi,this.type===br?(V.map.depthTexture.compareFunction=X?ko:zo,V.map.depthTexture.minFilter=It,V.map.depthTexture.magFilter=It):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Bt,V.map.depthTexture.magFilter=Bt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const J=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,x);for(let j=0;j<J;j++){const Te=V.getCamera(j);if($.isPointLight){const Se=V.camera,rt=V.matrix,Be=$.distance||Se.far;Be!==Se.far&&(Se.far=Be,Se.updateProjectionMatrix()),ts.setFromMatrixPosition($.matrixWorld),Se.position.copy(ts),Vu.copy(Se.position),Vu.add(o1[j]),Se.up.copy(u1[j]),Se.lookAt(Vu),Se.updateMatrixWorld(),rt.makeTranslation(-ts.x,-ts.y,-ts.z),Ph.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ph,Se.coordinateSystem,Se.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,j),e.clear();else{j===0&&(e.setRenderTarget(V.map),e.clear());const Se=V.getViewport(j);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),D.viewport(a)}n=V.getFrustum(j),v(C,x,Te,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ar&&y(V,x),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(M,F,P)};function y(T,C){const x=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new ai(r.x,r.y,{format:_n,type:_i}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(C,null,x,h,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(C,null,x,f,_,null)}function w(T,C,x,M){let F=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)F=P;else if(F=x.isPointLight===!0?u:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=F.uuid,G=C.uuid;let L=l[D];L===void 0&&(L={},l[D]=L);let O=L[G];O===void 0&&(O=F.clone(),L[G]=O,C.addEventListener("dispose",b)),F=O}if(F.visible=C.visible,F.wireframe=C.wireframe,M===Ar?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:d[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,x.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const D=e.properties.get(F);D.light=x}return F}function v(T,C,x,M,F){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Ar)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const G=t.update(T),L=T.material;if(Array.isArray(L)){const O=G.groups;for(let $=0,V=O.length;$<V;$++){const ie=O[$],X=L[ie.materialIndex];if(X&&X.visible){const J=w(T,X,M,F);T.onBeforeShadow(e,T,C,x,G,J,ie),e.renderBufferDirect(x,null,G,J,T,ie),T.onAfterShadow(e,T,C,x,G,J,ie)}}}else if(L.visible){const O=w(T,L,M,F);T.onBeforeShadow(e,T,C,x,G,O,null),e.renderBufferDirect(x,null,G,O,T,null),T.onAfterShadow(e,T,C,x,G,O,null)}}const D=T.children;for(let G=0,L=D.length;G<L;G++)v(D[G],C,x,M,F)}function b(T){T.target.removeEventListener("dispose",b);for(const x in l){const M=l[x],F=T.target.uuid;F in M&&(M[F].dispose(),delete M[F])}}}function c1(e,t){function i(){let U=!1;const ue=new pt;let Z=null;const ce=new pt(0,0,0,0);return{setMask:function(_e){Z!==_e&&!U&&(e.colorMask(_e,_e,_e,_e),Z=_e)},setLocked:function(_e){U=_e},setClear:function(_e,ee,pe,Ue,lt){lt===!0&&(_e*=Ue,ee*=Ue,pe*=Ue),ue.set(_e,ee,pe,Ue),ce.equals(ue)===!1&&(e.clearColor(_e,ee,pe,Ue),ce.copy(ue))},reset:function(){U=!1,Z=null,ce.set(-1,0,0,0)}}}function n(){let U=!1,ue=!1,Z=null,ce=null,_e=null;return{setReversed:function(ee){if(ue!==ee){const pe=t.get("EXT_clip_control");ee?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;const Ue=_e;_e=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(ee){ee?se(e.DEPTH_TEST):Ae(e.DEPTH_TEST)},setMask:function(ee){Z!==ee&&!U&&(e.depthMask(ee),Z=ee)},setFunc:function(ee){if(ue&&(ee=y0[ee]),ce!==ee){switch(ee){case za:e.depthFunc(e.NEVER);break;case ka:e.depthFunc(e.ALWAYS);break;case Va:e.depthFunc(e.LESS);break;case Cr:e.depthFunc(e.LEQUAL);break;case Ga:e.depthFunc(e.EQUAL);break;case Ha:e.depthFunc(e.GEQUAL);break;case Wa:e.depthFunc(e.GREATER);break;case Xa:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=ee}},setLocked:function(ee){U=ee},setClear:function(ee){_e!==ee&&(_e=ee,ue&&(ee=1-ee),e.clearDepth(ee))},reset:function(){U=!1,Z=null,ce=null,_e=null,ue=!1}}}function r(){let U=!1,ue=null,Z=null,ce=null,_e=null,ee=null,pe=null,Ue=null,lt=null;return{setTest:function(et){U||(et?se(e.STENCIL_TEST):Ae(e.STENCIL_TEST))},setMask:function(et){ue!==et&&!U&&(e.stencilMask(et),ue=et)},setFunc:function(et,Oi,nn){(Z!==et||ce!==Oi||_e!==nn)&&(e.stencilFunc(et,Oi,nn),Z=et,ce=Oi,_e=nn)},setOp:function(et,Oi,nn){(ee!==et||pe!==Oi||Ue!==nn)&&(e.stencilOp(et,Oi,nn),ee=et,pe=Oi,Ue=nn)},setLocked:function(et){U=et},setClear:function(et){lt!==et&&(e.clearStencil(et),lt=et)},reset:function(){U=!1,ue=null,Z=null,ce=null,_e=null,ee=null,pe=null,Ue=null,lt=null}}}const s=new i,a=new n,o=new r,u=new WeakMap,l=new WeakMap;let c={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,w=null,v=null,b=null,T=null,C=null,x=new Ie(0,0,0),M=0,F=!1,P=null,D=null,G=null,L=null,O=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ie>=1):X.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ie>=2);let J=null,j={};const Te=e.getParameter(e.SCISSOR_BOX),Se=e.getParameter(e.VIEWPORT),rt=new pt().fromArray(Te),Be=new pt().fromArray(Se);function q(U,ue,Z,ce){const _e=new Uint8Array(4),ee=e.createTexture();e.bindTexture(U,ee),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let pe=0;pe<Z;pe++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ue,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,_e):e.texImage2D(ue+pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_e);return ee}const re={};re[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(e.DEPTH_TEST),a.setFunc(Cr),kt(!1),dt(yl),se(e.CULL_FACE),st(Vi);function se(U){c[U]!==!0&&(e.enable(U),c[U]=!0)}function Ae(U){c[U]!==!1&&(e.disable(U),c[U]=!1)}function Fe(U,ue){return h[U]!==ue?(e.bindFramebuffer(U,ue),h[U]=ue,U===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=ue),U===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ce(U,ue){let Z=g,ce=!1;if(U){Z=f.get(ue),Z===void 0&&(Z=[],f.set(ue,Z));const _e=U.textures;if(Z.length!==_e.length||Z[0]!==e.COLOR_ATTACHMENT0){for(let ee=0,pe=_e.length;ee<pe;ee++)Z[ee]=e.COLOR_ATTACHMENT0+ee;Z.length=_e.length,ce=!0}}else Z[0]!==e.BACK&&(Z[0]=e.BACK,ce=!0);ce&&e.drawBuffers(Z)}function Rt(U){return _!==U?(e.useProgram(U),_=U,!0):!1}const He={[zn]:e.FUNC_ADD,[kf]:e.FUNC_SUBTRACT,[Vf]:e.FUNC_REVERSE_SUBTRACT};He[Gf]=e.MIN,He[Hf]=e.MAX;const Ye={[Wf]:e.ZERO,[Xf]:e.ONE,[qf]:e.SRC_COLOR,[Sl]:e.SRC_ALPHA,[Qf]:e.SRC_ALPHA_SATURATE,[$f]:e.DST_COLOR,[Kf]:e.DST_ALPHA,[Yf]:e.ONE_MINUS_SRC_COLOR,[wl]:e.ONE_MINUS_SRC_ALPHA,[Jf]:e.ONE_MINUS_DST_COLOR,[Zf]:e.ONE_MINUS_DST_ALPHA,[jf]:e.CONSTANT_COLOR,[e0]:e.ONE_MINUS_CONSTANT_COLOR,[t0]:e.CONSTANT_ALPHA,[i0]:e.ONE_MINUS_CONSTANT_ALPHA};function st(U,ue,Z,ce,_e,ee,pe,Ue,lt,et){if(U===Vi){m===!0&&(Ae(e.BLEND),m=!1);return}if(m===!1&&(se(e.BLEND),m=!0),U!==zf){if(U!==p||et!==F){if((y!==zn||b!==zn)&&(e.blendEquation(e.FUNC_ADD),y=zn,b=zn),et)switch(U){case Tr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oa:e.blendFunc(e.ONE,e.ONE);break;case El:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ml:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Le("WebGLState: Invalid blending: ",U);break}else switch(U){case Tr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Oa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case El:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",U);break}w=null,v=null,T=null,C=null,x.set(0,0,0),M=0,p=U,F=et}return}_e=_e||ue,ee=ee||Z,pe=pe||ce,(ue!==y||_e!==b)&&(e.blendEquationSeparate(He[ue],He[_e]),y=ue,b=_e),(Z!==w||ce!==v||ee!==T||pe!==C)&&(e.blendFuncSeparate(Ye[Z],Ye[ce],Ye[ee],Ye[pe]),w=Z,v=ce,T=ee,C=pe),(Ue.equals(x)===!1||lt!==M)&&(e.blendColor(Ue.r,Ue.g,Ue.b,lt),x.copy(Ue),M=lt),p=U,F=!1}function Ke(U,ue){U.side===Kt?Ae(e.CULL_FACE):se(e.CULL_FACE);let Z=U.side===Lt;ue&&(Z=!Z),kt(Z),U.blending===Tr&&U.transparent===!1?st(Vi):st(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const ce=U.stencilWrite;o.setTest(ce),ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(e.SAMPLE_ALPHA_TO_COVERAGE):Ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function kt(U){P!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),P=U)}function dt(U){U!==Nf?(se(e.CULL_FACE),U!==D&&(U===yl?e.cullFace(e.BACK):U===Uf?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ae(e.CULL_FACE),D=U}function ni(U){U!==G&&(V&&e.lineWidth(U),G=U)}function Dt(U,ue,Z){U?(se(e.POLYGON_OFFSET_FILL),(L!==ue||O!==Z)&&(L=ue,O=Z,a.getReversed()&&(ue=-ue),e.polygonOffset(ue,Z))):Ae(e.POLYGON_OFFSET_FILL)}function Pt(U){U?se(e.SCISSOR_TEST):Ae(e.SCISSOR_TEST)}function N(U){U===void 0&&(U=e.TEXTURE0+$-1),J!==U&&(e.activeTexture(U),J=U)}function ri(U,ue,Z){Z===void 0&&(J===null?Z=e.TEXTURE0+$-1:Z=J);let ce=j[Z];ce===void 0&&(ce={type:void 0,texture:void 0},j[Z]=ce),(ce.type!==U||ce.texture!==ue)&&(J!==Z&&(e.activeTexture(Z),J=Z),e.bindTexture(U,ue||re[U]),ce.type=U,ce.texture=ue)}function je(){const U=j[J];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function gt(){try{e.compressedTexImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function E(){try{e.texSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function B(){try{e.texSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function te(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function oe(){try{e.texStorage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function de(){try{e.texStorage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function K(){try{e.texImage2D(...arguments)}catch(U){Le("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){Le("WebGLState:",U)}}function ve(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function be(U,ue){d[U]!==ue&&(e.pixelStorei(U,ue),d[U]=ue)}function fe(U){rt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),rt.copy(U))}function ae(U){Be.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Be.copy(U))}function Re(U,ue){let Z=l.get(ue);Z===void 0&&(Z=new WeakMap,l.set(ue,Z));let ce=Z.get(U);ce===void 0&&(ce=e.getUniformBlockIndex(ue,U.name),Z.set(U,ce))}function Pe(U,ue){const ce=l.get(ue).get(U);u.get(ue)!==ce&&(e.uniformBlockBinding(ue,ce,U.__bindingPointIndex),u.set(ue,ce))}function Qe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),c={},d={},J=null,j={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,w=null,v=null,b=null,T=null,C=null,x=new Ie(0,0,0),M=0,F=!1,P=null,D=null,G=null,L=null,O=null,rt.set(0,0,e.canvas.width,e.canvas.height),Be.set(0,0,e.canvas.width,e.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Ae,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:Rt,setBlending:st,setMaterial:Ke,setFlipSided:kt,setCullFace:dt,setLineWidth:ni,setPolygonOffset:Dt,setScissorTest:Pt,activeTexture:N,bindTexture:ri,unbindTexture:je,compressedTexImage2D:gt,compressedTexImage3D:A,texImage2D:K,texImage3D:Q,pixelStorei:be,getParameter:ve,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:de,texSubImage2D:E,texSubImage3D:B,compressedTexSubImage2D:H,compressedTexSubImage3D:te,scissor:fe,viewport:ae,reset:Qe}}function h1(e,t,i,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,c=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return g?new OffscreenCanvas(A,E):Fs("canvas")}function m(A,E,B){let H=1;const te=gt(A);if((te.width>B||te.height>B)&&(H=B/Math.max(te.width,te.height)),H<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(H*te.width),de=Math.floor(H*te.height);h===void 0&&(h=_(oe,de));const K=E?_(oe,de):h;return K.width=oe,K.height=de,K.getContext("2d").drawImage(A,0,0,oe,de),De("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+de+")."),K}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){e.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(A,E,B,H,te,oe=!1){if(A!==null){if(e[A]!==void 0)return e[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de;H&&(de=t.get("EXT_texture_norm16"),de||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===e.RED&&(B===e.FLOAT&&(K=e.R32F),B===e.HALF_FLOAT&&(K=e.R16F),B===e.UNSIGNED_BYTE&&(K=e.R8),B===e.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),B===e.SHORT&&de&&(K=de.R16_SNORM_EXT)),E===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.R8UI),B===e.UNSIGNED_SHORT&&(K=e.R16UI),B===e.UNSIGNED_INT&&(K=e.R32UI),B===e.BYTE&&(K=e.R8I),B===e.SHORT&&(K=e.R16I),B===e.INT&&(K=e.R32I)),E===e.RG&&(B===e.FLOAT&&(K=e.RG32F),B===e.HALF_FLOAT&&(K=e.RG16F),B===e.UNSIGNED_BYTE&&(K=e.RG8),B===e.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),B===e.SHORT&&de&&(K=de.RG16_SNORM_EXT)),E===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.RG8UI),B===e.UNSIGNED_SHORT&&(K=e.RG16UI),B===e.UNSIGNED_INT&&(K=e.RG32UI),B===e.BYTE&&(K=e.RG8I),B===e.SHORT&&(K=e.RG16I),B===e.INT&&(K=e.RG32I)),E===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.RGB8UI),B===e.UNSIGNED_SHORT&&(K=e.RGB16UI),B===e.UNSIGNED_INT&&(K=e.RGB32UI),B===e.BYTE&&(K=e.RGB8I),B===e.SHORT&&(K=e.RGB16I),B===e.INT&&(K=e.RGB32I)),E===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),B===e.UNSIGNED_INT&&(K=e.RGBA32UI),B===e.BYTE&&(K=e.RGBA8I),B===e.SHORT&&(K=e.RGBA16I),B===e.INT&&(K=e.RGBA32I)),E===e.RGB&&(B===e.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),B===e.SHORT&&de&&(K=de.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),E===e.RGBA){const Q=oe?Ps:We.getTransfer(te);B===e.FLOAT&&(K=e.RGBA32F),B===e.HALF_FLOAT&&(K=e.RGBA16F),B===e.UNSIGNED_BYTE&&(K=Q===it?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),B===e.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(A,E){let B;return A?E===null||E===Ai||E===Pr?B=e.DEPTH24_STENCIL8:E===vi?B=e.DEPTH32F_STENCIL8:E===Dr&&(B=e.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ai||E===Pr?B=e.DEPTH_COMPONENT24:E===vi?B=e.DEPTH_COMPONENT32F:E===Dr&&(B=e.DEPTH_COMPONENT16),B}function T(A,E){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==It?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){const E=A.target;E.removeEventListener("dispose",C),M(E),E.isVideoTexture&&c.delete(E),E.isHTMLTexture&&d.delete(E)}function x(A){const E=A.target;E.removeEventListener("dispose",x),P(E)}function M(A){const E=n.get(A);if(E.__webglInit===void 0)return;const B=A.source,H=f.get(B);if(H){const te=H[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(A),Object.keys(H).length===0&&f.delete(B)}n.remove(A)}function F(A){const E=n.get(A);e.deleteTexture(E.__webglTexture);const B=A.source,H=f.get(B);delete H[E.__cacheKey],a.memory.textures--}function P(A){const E=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(E.__webglFramebuffer[H]))for(let te=0;te<E.__webglFramebuffer[H].length;te++)e.deleteFramebuffer(E.__webglFramebuffer[H][te]);else e.deleteFramebuffer(E.__webglFramebuffer[H]);E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer[H])}else{if(Array.isArray(E.__webglFramebuffer))for(let H=0;H<E.__webglFramebuffer.length;H++)e.deleteFramebuffer(E.__webglFramebuffer[H]);else e.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&e.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&e.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let H=0;H<E.__webglColorRenderbuffer.length;H++)E.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(E.__webglColorRenderbuffer[H]);E.__webglDepthRenderbuffer&&e.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=A.textures;for(let H=0,te=B.length;H<te;H++){const oe=n.get(B[H]);oe.__webglTexture&&(e.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(B[H])}n.remove(A)}let D=0;function G(){D=0}function L(){return D}function O(A){D=A}function $(){const A=D;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function V(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function ie(A,E){const B=n.get(A);if(A.isVideoTexture&&ri(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const H=A.image;if(H===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(B,A,E);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+E)}function X(A,E){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ae(B,A,E);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+E)}function J(A,E){const B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ae(B,A,E);return}i.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+E)}function j(A,E){const B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Fe(B,A,E);return}i.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+E)}const Te={[Rr]:e.REPEAT,[Gi]:e.CLAMP_TO_EDGE,[$a]:e.MIRRORED_REPEAT},Se={[Bt]:e.NEAREST,[s0]:e.NEAREST_MIPMAP_NEAREST,[Es]:e.NEAREST_MIPMAP_LINEAR,[It]:e.LINEAR,[Ja]:e.LINEAR_MIPMAP_NEAREST,[rn]:e.LINEAR_MIPMAP_LINEAR},rt={[l0]:e.NEVER,[p0]:e.ALWAYS,[c0]:e.LESS,[zo]:e.LEQUAL,[h0]:e.EQUAL,[ko]:e.GEQUAL,[d0]:e.GREATER,[f0]:e.NOTEQUAL};function Be(A,E){if(E.type===vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===It||E.magFilter===Ja||E.magFilter===Es||E.magFilter===rn||E.minFilter===It||E.minFilter===Ja||E.minFilter===Es||E.minFilter===rn)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Te[E.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Te[E.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Te[E.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Se[E.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,rt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bt||E.minFilter!==Es&&E.minFilter!==rn||E.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function q(A,E){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",C));const H=E.source;let te=f.get(H);te===void 0&&(te={},f.set(H,te));const oe=V(E);if(oe!==A.__cacheKey){te[oe]===void 0&&(te[oe]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[oe].usedTimes++;const de=te[A.__cacheKey];de!==void 0&&(te[A.__cacheKey].usedTimes--,de.usedTimes===0&&F(E)),A.__cacheKey=oe,A.__webglTexture=te[oe].texture}return B}function re(A,E,B){return Math.floor(Math.floor(A/B)/E)}function se(A,E,B,H){const oe=A.updateRanges;if(oe.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,E.width,E.height,B,H,E.data);else{oe.sort((be,fe)=>be.start-fe.start);let de=0;for(let be=1;be<oe.length;be++){const fe=oe[de],ae=oe[be],Re=fe.start+fe.count,Pe=re(ae.start,E.width,4),Qe=re(fe.start,E.width,4);ae.start<=Re+1&&Pe===Qe&&re(ae.start+ae.count-1,E.width,4)===Pe?fe.count=Math.max(fe.count,ae.start+ae.count-fe.start):(++de,oe[de]=ae)}oe.length=de+1;const K=i.getParameter(e.UNPACK_ROW_LENGTH),Q=i.getParameter(e.UNPACK_SKIP_PIXELS),ve=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,E.width);for(let be=0,fe=oe.length;be<fe;be++){const ae=oe[be],Re=Math.floor(ae.start/4),Pe=Math.ceil(ae.count/4),Qe=Re%E.width,U=Math.floor(Re/E.width),ue=Pe,Z=1;i.pixelStorei(e.UNPACK_SKIP_PIXELS,Qe),i.pixelStorei(e.UNPACK_SKIP_ROWS,U),i.texSubImage2D(e.TEXTURE_2D,0,Qe,U,ue,Z,B,H,E.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,K),i.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),i.pixelStorei(e.UNPACK_SKIP_ROWS,ve)}}function Ae(A,E,B){let H=e.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),E.isData3DTexture&&(H=e.TEXTURE_3D);const te=q(A,E),oe=E.source;i.bindTexture(H,A.__webglTexture,e.TEXTURE0+B);const de=n.get(oe);if(oe.version!==de.__version||te===!0){if(i.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Z=We.getPrimaries(We.workingColorSpace),ce=E.colorSpace===sn?null:We.getPrimaries(E.colorSpace),_e=E.colorSpace===sn||Z===ce?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=m(E.image,!1,r.maxTextureSize);Q=je(E,Q);const ve=s.convert(E.format,E.colorSpace),be=s.convert(E.type);let fe=v(E.internalFormat,ve,be,E.normalized,E.colorSpace,E.isVideoTexture);Be(H,E);let ae;const Re=E.mipmaps,Pe=E.isVideoTexture!==!0,Qe=de.__version===void 0||te===!0,U=oe.dataReady,ue=T(E,Q);if(E.isDepthTexture)fe=b(E.format===vn,E.type),Qe&&(Pe?i.texStorage2D(e.TEXTURE_2D,1,fe,Q.width,Q.height):i.texImage2D(e.TEXTURE_2D,0,fe,Q.width,Q.height,0,ve,be,null));else if(E.isDataTexture)if(Re.length>0){Pe&&Qe&&i.texStorage2D(e.TEXTURE_2D,ue,fe,Re[0].width,Re[0].height);for(let Z=0,ce=Re.length;Z<ce;Z++)ae=Re[Z],Pe?U&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,ve,be,ae.data):i.texImage2D(e.TEXTURE_2D,Z,fe,ae.width,ae.height,0,ve,be,ae.data);E.generateMipmaps=!1}else Pe?(Qe&&i.texStorage2D(e.TEXTURE_2D,ue,fe,Q.width,Q.height),U&&se(E,Q,ve,be)):i.texImage2D(e.TEXTURE_2D,0,fe,Q.width,Q.height,0,ve,be,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&Qe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ue,fe,Re[0].width,Re[0].height,Q.depth);for(let Z=0,ce=Re.length;Z<ce;Z++)if(ae=Re[Z],E.format!==xi)if(ve!==null)if(Pe){if(U)if(E.layerUpdates.size>0){const _e=nh(ae.width,ae.height,E.format,E.type);for(const ee of E.layerUpdates){const pe=ae.data.subarray(ee*_e/ae.data.BYTES_PER_ELEMENT,(ee+1)*_e/ae.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,ee,ae.width,ae.height,1,ve,pe)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,ve,ae.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,fe,ae.width,ae.height,Q.depth,0,ae.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,ve,be,ae.data):i.texImage3D(e.TEXTURE_2D_ARRAY,Z,fe,ae.width,ae.height,Q.depth,0,ve,be,ae.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Pe&&Qe&&i.texStorage2D(e.TEXTURE_2D,ue,fe,Re[0].width,Re[0].height);for(let Z=0,ce=Re.length;Z<ce;Z++)ae=Re[Z],E.format!==xi?ve!==null?Pe?U&&i.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,ve,ae.data):i.compressedTexImage2D(e.TEXTURE_2D,Z,fe,ae.width,ae.height,0,ae.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ae.width,ae.height,ve,be,ae.data):i.texImage2D(e.TEXTURE_2D,Z,fe,ae.width,ae.height,0,ve,be,ae.data)}else if(E.isDataArrayTexture)if(Pe){if(Qe&&i.texStorage3D(e.TEXTURE_2D_ARRAY,ue,fe,Q.width,Q.height,Q.depth),U)if(E.layerUpdates.size>0){const Z=nh(Q.width,Q.height,E.format,E.type);for(const ce of E.layerUpdates){const _e=Q.data.subarray(ce*Z/Q.data.BYTES_PER_ELEMENT,(ce+1)*Z/Q.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ce,Q.width,Q.height,1,ve,be,_e)}E.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ve,be,Q.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,ve,be,Q.data);else if(E.isData3DTexture)Pe?(Qe&&i.texStorage3D(e.TEXTURE_3D,ue,fe,Q.width,Q.height,Q.depth),U&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ve,be,Q.data)):i.texImage3D(e.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,ve,be,Q.data);else if(E.isFramebufferTexture){if(Qe)if(Pe)i.texStorage2D(e.TEXTURE_2D,ue,fe,Q.width,Q.height);else{let Z=Q.width,ce=Q.height;for(let _e=0;_e<ue;_e++)i.texImage2D(e.TEXTURE_2D,_e,fe,Z,ce,0,ve,be,null),Z>>=1,ce>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in e){const Z=e.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),Q.parentNode!==Z){Z.appendChild(Q),d.add(E),Z.onpaint=ce=>{const _e=ce.changedElements;for(const ee of d)_e.includes(ee.image)&&(ee.needsUpdate=!0)},Z.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{const _e=e.RGBA,ee=e.RGBA,pe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,_e,ee,pe,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Pe&&Qe){const Z=gt(Re[0]);i.texStorage2D(e.TEXTURE_2D,ue,fe,Z.width,Z.height)}for(let Z=0,ce=Re.length;Z<ce;Z++)ae=Re[Z],Pe?U&&i.texSubImage2D(e.TEXTURE_2D,Z,0,0,ve,be,ae):i.texImage2D(e.TEXTURE_2D,Z,fe,ve,be,ae);E.generateMipmaps=!1}else if(Pe){if(Qe){const Z=gt(Q);i.texStorage2D(e.TEXTURE_2D,ue,fe,Z.width,Z.height)}U&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ve,be,Q)}else i.texImage2D(e.TEXTURE_2D,0,fe,ve,be,Q);p(E)&&y(H),de.__version=oe.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Fe(A,E,B){if(E.image.length!==6)return;const H=q(A,E),te=E.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+B);const oe=n.get(te);if(te.version!==oe.__version||H===!0){i.activeTexture(e.TEXTURE0+B);const de=We.getPrimaries(We.workingColorSpace),K=E.colorSpace===sn?null:We.getPrimaries(E.colorSpace),Q=E.colorSpace===sn||de===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ve=E.isCompressedTexture||E.image[0].isCompressedTexture,be=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!ve&&!be?fe[ee]=m(E.image[ee],!0,r.maxCubemapSize):fe[ee]=be?E.image[ee].image:E.image[ee],fe[ee]=je(E,fe[ee]);const ae=fe[0],Re=s.convert(E.format,E.colorSpace),Pe=s.convert(E.type),Qe=v(E.internalFormat,Re,Pe,E.normalized,E.colorSpace),U=E.isVideoTexture!==!0,ue=oe.__version===void 0||H===!0,Z=te.dataReady;let ce=T(E,ae);Be(e.TEXTURE_CUBE_MAP,E);let _e;if(ve){U&&ue&&i.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Qe,ae.width,ae.height);for(let ee=0;ee<6;ee++){_e=fe[ee].mipmaps;for(let pe=0;pe<_e.length;pe++){const Ue=_e[pe];E.format!==xi?Re!==null?U?Z&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Qe,Ue.width,Ue.height,0,Ue.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Z&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,Ue.width,Ue.height,Re,Pe,Ue.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Qe,Ue.width,Ue.height,0,Re,Pe,Ue.data)}}}else{if(_e=E.mipmaps,U&&ue){_e.length>0&&ce++;const ee=gt(fe[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(be){U?Z&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,Re,Pe,fe[ee].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,fe[ee].width,fe[ee].height,0,Re,Pe,fe[ee].data);for(let pe=0;pe<_e.length;pe++){const lt=_e[pe].image[ee].image;U?Z&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,lt.width,lt.height,Re,Pe,lt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Qe,lt.width,lt.height,0,Re,Pe,lt.data)}}else{U?Z&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,Pe,fe[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Qe,Re,Pe,fe[ee]);for(let pe=0;pe<_e.length;pe++){const Ue=_e[pe];U?Z&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Re,Pe,Ue.image[ee]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Qe,Re,Pe,Ue.image[ee])}}}p(E)&&y(e.TEXTURE_CUBE_MAP),oe.__version=te.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Ce(A,E,B,H,te,oe){const de=s.convert(B.format,B.colorSpace),K=s.convert(B.type),Q=v(B.internalFormat,de,K,B.normalized,B.colorSpace),ve=n.get(E),be=n.get(B);if(be.__renderTarget=E,!ve.__hasExternalTextures){const fe=Math.max(1,E.width>>oe),ae=Math.max(1,E.height>>oe);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?i.texImage3D(te,oe,Q,fe,ae,E.depth,0,de,K,null):i.texImage2D(te,oe,Q,fe,ae,0,de,K,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),N(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,te,be.__webglTexture,0,Pt(E)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,te,be.__webglTexture,oe),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Rt(A,E,B){if(e.bindRenderbuffer(e.RENDERBUFFER,A),E.depthBuffer){const H=E.depthTexture,te=H&&H.isDepthTexture?H.type:null,oe=b(E.stencilBuffer,te),de=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;N(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pt(E),oe,E.width,E.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt(E),oe,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,oe,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,A)}else{const H=E.textures;for(let te=0;te<H.length;te++){const oe=H[te],de=s.convert(oe.format,oe.colorSpace),K=s.convert(oe.type),Q=v(oe.internalFormat,de,K,oe.normalized,oe.colorSpace);N(E)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Pt(E),Q,E.width,E.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt(E),Q,E.width,E.height):e.renderbufferStorage(e.RENDERBUFFER,Q,E.width,E.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function He(A,E,B){const H=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(E.depthTexture);if(te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H){if(te.__webglInit===void 0&&(te.__webglInit=!0,E.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,te.__webglTexture),Be(e.TEXTURE_CUBE_MAP,E.depthTexture);const ve=s.convert(E.depthTexture.format),be=s.convert(E.depthTexture.type);let fe;E.depthTexture.format===Hi?fe=e.DEPTH_COMPONENT24:E.depthTexture.format===vn&&(fe=e.DEPTH24_STENCIL8);for(let ae=0;ae<6;ae++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,fe,E.width,E.height,0,ve,be,null)}}else ie(E.depthTexture,0);const oe=te.__webglTexture,de=Pt(E),K=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,Q=E.depthTexture.format===vn?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(E.depthTexture.format===Hi)N(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,K,oe,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,Q,K,oe,0);else if(E.depthTexture.format===vn)N(E)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,K,oe,0,de):e.framebufferTexture2D(e.FRAMEBUFFER,Q,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(A){const E=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==A.depthTexture){const H=A.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),H){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,H.removeEventListener("dispose",te)};H.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=H}if(A.depthTexture&&!E.__autoAllocateDepthBuffer)if(B)for(let H=0;H<6;H++)He(E.__webglFramebuffer[H],A,H);else{const H=A.texture.mipmaps;H&&H.length>0?He(E.__webglFramebuffer[0],A,0):He(E.__webglFramebuffer,A,0)}else if(B){E.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[H]),E.__webglDepthbuffer[H]===void 0)E.__webglDepthbuffer[H]=e.createRenderbuffer(),Rt(E.__webglDepthbuffer[H],A,!1);else{const te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,oe)}}else{const H=A.texture.mipmaps;if(H&&H.length>0?i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=e.createRenderbuffer(),Rt(E.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,oe),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,oe)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function st(A,E,B){const H=n.get(A);E!==void 0&&Ce(H.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Ye(A)}function Ke(A){const E=A.texture,B=n.get(A),H=n.get(E);A.addEventListener("dispose",x);const te=A.textures,oe=A.isWebGLCubeRenderTarget===!0,de=te.length>1;if(de||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=E.version,a.memory.textures++),oe){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<E.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=e.createFramebuffer()}else B.__webglFramebuffer[K]=e.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)B.__webglFramebuffer[K]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(de)for(let K=0,Q=te.length;K<Q;K++){const ve=n.get(te[K]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),a.memory.textures++)}if(A.samples>0&&N(A)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<te.length;K++){const Q=te[K];B.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[K]);const ve=s.convert(Q.format,Q.colorSpace),be=s.convert(Q.type),fe=v(Q.internalFormat,ve,be,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),ae=Pt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,ae,fe,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,B.__webglColorRenderbuffer[K])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Rt(B.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(oe){i.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),Be(e.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ce(B.__webglFramebuffer[K][Q],A,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Ce(B.__webglFramebuffer[K],A,E,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(E)&&y(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(de){for(let K=0,Q=te.length;K<Q;K++){const ve=te[K],be=n.get(ve);let fe=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(fe,be.__webglTexture),Be(fe,ve),Ce(B.__webglFramebuffer,A,ve,e.COLOR_ATTACHMENT0+K,fe,0),p(ve)&&y(fe)}i.unbindTexture()}else{let K=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(K,H.__webglTexture),Be(K,E),E.mipmaps&&E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)Ce(B.__webglFramebuffer[Q],A,E,e.COLOR_ATTACHMENT0,K,Q);else Ce(B.__webglFramebuffer,A,E,e.COLOR_ATTACHMENT0,K,0);p(E)&&y(K),i.unbindTexture()}A.depthBuffer&&Ye(A)}function kt(A){const E=A.textures;for(let B=0,H=E.length;B<H;B++){const te=E[B];if(p(te)){const oe=w(A),de=n.get(te).__webglTexture;i.bindTexture(oe,de),y(oe),i.unbindTexture()}}}const dt=[],ni=[];function Dt(A){if(A.samples>0){if(N(A)===!1){const E=A.textures,B=A.width,H=A.height;let te=e.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=n.get(A),K=E.length>1;if(K)for(let ve=0;ve<E.length;ve++)i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<E.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const be=n.get(E[ve]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,be,0)}e.blitFramebuffer(0,0,B,H,0,0,B,H,te,e.NEAREST),u===!0&&(dt.length=0,ni.length=0,dt.push(e.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(dt.push(oe),ni.push(oe),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ni)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,dt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let ve=0;ve<E.length;ve++){i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.RENDERBUFFER,de.__webglColorRenderbuffer[ve]);const be=n.get(E[ve]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ve,e.TEXTURE_2D,be,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&u){const E=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[E])}}}function Pt(A){return Math.min(r.maxSamples,A.samples)}function N(A){const E=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ri(A){const E=a.render.frame;c.get(A)!==E&&(c.set(A,E),A.update())}function je(A,E){const B=A.colorSpace,H=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ds&&B!==sn&&(We.getTransfer(B)===it?(H!==xi||te!==si)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",B)),E}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=G,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=ie,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=st,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function d1(e,t){function i(n,r=sn){let s;const a=We.getTransfer(r);if(n===si)return e.UNSIGNED_BYTE;if(n===ja)return e.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return e.UNSIGNED_SHORT_5_5_5_1;if(n===Bl)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fl)return e.BYTE;if(n===Ll)return e.SHORT;if(n===Dr)return e.UNSIGNED_SHORT;if(n===Qa)return e.INT;if(n===Ai)return e.UNSIGNED_INT;if(n===vi)return e.FLOAT;if(n===_i)return e.HALF_FLOAT;if(n===Nl)return e.ALPHA;if(n===Ul)return e.RGB;if(n===xi)return e.RGBA;if(n===Hi)return e.DEPTH_COMPONENT;if(n===vn)return e.DEPTH_STENCIL;if(n===to)return e.RED;if(n===io)return e.RED_INTEGER;if(n===_n)return e.RG;if(n===no)return e.RG_INTEGER;if(n===ro)return e.RGBA_INTEGER;if(n===Ms||n===Ss||n===ws||n===bs)if(a===it)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ao||n===oo||n===uo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===so)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho||n===fo||n===po||n===As||n===mo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lo||n===co)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ho)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===fo)return s.COMPRESSED_R11_EAC;if(n===po)return s.COMPRESSED_SIGNED_R11_EAC;if(n===As)return s.COMPRESSED_RG11_EAC;if(n===mo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===go||n===vo||n===_o||n===xo||n===yo||n===Eo||n===Mo||n===So||n===wo||n===bo||n===Ao||n===To||n===Co||n===Ro)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===go)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===To)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Do||n===Po||n===Fo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Do)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Bo||n===Ts||n===Io)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Lo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ts)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var f1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,m1=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ec(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ht({vertexShader:f1,fragmentShader:p1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new Nt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},g1=class extends xn{constructor(e,t){super();const i=this;let n=null,r=1,s=null,a="local-floor",o=1,u=null,l=null,c=null,d=null,h=null,f=null;const g=typeof XRWebGLBinding<"u",_=new m1,m={},p=t.getContextAttributes();let y=null,w=null;const v=[],b=[],T=new le;let C=null,x=null;const M=new Qt;M.viewport=new pt;const F=new Qt;F.viewport=new pt;const P=[M,F],D=new pm;let G=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=v[q];return re===void 0&&(re=new Zo,v[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=v[q];return re===void 0&&(re=new Zo,v[q]=re),re.getGripSpace()},this.getHand=function(q){let re=v[q];return re===void 0&&(re=new Zo,v[q]=re),re.getHandSpace()};function O(q){const re=b.indexOf(q.inputSource);if(re===-1)return;const se=v[re];se!==void 0&&(se.update(q.inputSource,q.frame,u||s),se.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",V);for(let q=0;q<v.length;q++){const re=b[q];re!==null&&(b[q]=null,v[q].disconnect(re))}G=null,L=null,_.reset();for(const q in m)delete m[q];if(e.setRenderTarget(y),h=null,d=null,c=null,n=null,w=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),x!==null){const q=x.camera;q.fov=x.fov,q.zoom=x.zoom,q.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(n,t)),c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",$),n.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ae=null,Fe=null;p.depth&&(Fe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?vn:Hi,Ae=p.stencil?Pr:Ai);const Ce={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};c=this.getBinding(),d=c.createProjectionLayer(Ce),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new ai(d.textureWidth,d.textureHeight,{format:xi,type:si,depthTexture:new Gr(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(n,t,se),n.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new ai(h.framebufferWidth,h.framebufferHeight,{format:xi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(o),u=null,s=await n.requestReferenceSpace(a),Be.setContext(n),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(q){for(let re=0;re<q.removed.length;re++){const se=q.removed[re],Ae=b.indexOf(se);Ae>=0&&(b[Ae]=null,v[Ae].disconnect(se))}for(let re=0;re<q.added.length;re++){const se=q.added[re];let Ae=b.indexOf(se);if(Ae===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=b.length){b.push(se),Ae=Ce;break}else if(b[Ce]===null){b[Ce]=se,Ae=Ce;break}if(Ae===-1)break}const Fe=v[Ae];Fe&&Fe.connect(se)}}const ie=new R,X=new R;function J(q,re,se){ie.setFromMatrixPosition(re.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const Ae=ie.distanceTo(X),Fe=re.projectionMatrix.elements,Ce=se.projectionMatrix.elements,Rt=Fe[14]/(Fe[10]-1),He=Fe[14]/(Fe[10]+1),Ye=(Fe[9]+1)/Fe[5],st=(Fe[9]-1)/Fe[5],Ke=(Fe[8]-1)/Fe[0],kt=(Ce[8]+1)/Ce[0],dt=Rt*Ke,ni=Rt*kt,Dt=Ae/(-Ke+kt),Pt=Dt*-Ke;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pt),q.translateZ(Dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Fe[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const N=Rt+Dt,ri=He+Dt,je=dt-Pt,gt=ni+(Ae-Pt),A=Ye*He/ri*N,E=st*He/ri*N;q.projectionMatrix.makePerspective(je,gt,A,E,N,ri),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let re=q.near,se=q.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(se=_.depthFar)),D.near=F.near=M.near=re,D.far=F.far=M.far=se,(G!==D.near||L!==D.far)&&(n.updateRenderState({depthNear:D.near,depthFar:D.far}),G=D.near,L=D.far),D.layers.mask=q.layers.mask|6,M.layers.mask=D.layers.mask&-5,F.layers.mask=D.layers.mask&-3;const Ae=q.parent,Fe=D.cameras;j(D,Ae);for(let Ce=0;Ce<Fe.length;Ce++)j(Fe[Ce],Ae);Fe.length===2?J(D,M,F):D.projectionMatrix.copy(M.projectionMatrix),x===null&&q.isPerspectiveCamera&&(x={camera:q,fov:q.fov,zoom:q.zoom}),Te(q,D,Ae)};function Te(q,re,se){se===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(se.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Lr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(q){o=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(q){return m[q]};let Se=null;function rt(q,re){if(l=re.getViewerPose(u||s),f=re,l!==null){const se=l.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let Ae=!1;se.length!==D.cameras.length&&(D.cameras.length=0,Ae=!0);for(let He=0;He<se.length;He++){const Ye=se[He];let st=null;if(h!==null)st=h.getViewport(Ye);else{const kt=c.getViewSubImage(d,Ye);st=kt.viewport,He===0&&(e.setRenderTargetTextures(w,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(w))}let Ke=P[He];Ke===void 0&&(Ke=new Qt,Ke.layers.enable(He),Ke.viewport=new pt,P[He]=Ke),Ke.matrix.fromArray(Ye.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ye.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(st.x,st.y,st.width,st.height),He===0&&(D.matrix.copy(Ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ae===!0&&D.cameras.push(Ke)}const Fe=n.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){c=i.getBinding();const He=c.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&_.init(He,n.renderState)}if(Fe&&Fe.includes("camera-access")&&g){e.state.unbindTexture(),c=i.getBinding();for(let He=0;He<se.length;He++){const Ye=se[He].camera;if(Ye){let st=m[Ye];st||(st=new Ec,m[Ye]=st);const Ke=c.getCameraImage(Ye);st.sourceTexture=Ke}}}}for(let se=0;se<v.length;se++){const Ae=b[se],Fe=v[se];Ae!==null&&Fe!==void 0&&Fe.update(Ae,re,u||s)}Se&&Se(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),f=null}const Be=new rh;Be.setAnimationLoop(rt),this.setAnimationLoop=function(q){Se=q},this.dispose=function(){}}},v1=new $e,Fh=new Oe;Fh.set(-1,0,0,0,1,0,0,0,1);function _1(e,t){function i(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gc(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?u(m,p,y,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,i(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Lt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,i(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Lt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,i(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,i(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(v1.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function u(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,i(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,i(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,i(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x1(e,t,i,n){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function u(v,b){const T=b.program;n.uniformBlockBinding(v,T)}function l(v,b){let T=r[v.id];T===void 0&&(m(v),T=c(v),r[v.id]=T,v.addEventListener("dispose",y));const C=b.program;n.updateUBOMapping(v,C);const x=t.render.frame;s[v.id]!==x&&(h(v),s[v.id]=x)}function c(v){const b=d();v.__bindingPointIndex=b;const T=e.createBuffer(),C=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const b=r[v.id],T=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let x=0,M=T.length;x<M;x++){const F=T[x];if(Array.isArray(F))for(let P=0,D=F.length;P<D;P++)f(F[P],x,P,C);else f(F,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(v,b,T,C){if(_(v,b,T,C)===!0){const x=v.__offset,M=v.value;if(Array.isArray(M)){let F=0;for(let P=0;P<M.length;P++){const D=M[P],G=p(D);g(D,v.__data,F),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function g(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function _(v,b,T,C){const x=v.value,M=b+"_"+T;if(C[M]===void 0)return typeof x=="number"||typeof x=="boolean"?C[M]=x:ArrayBuffer.isView(x)?C[M]=x.slice():C[M]=x.clone(),!0;{const F=C[M];if(typeof x=="number"||typeof x=="boolean"){if(F!==x)return C[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(F.equals(x)===!1)return F.copy(x),!0}}return!1}function m(v){const b=v.uniforms;let T=0;const C=16;for(let M=0,F=b.length;M<F;M++){const P=Array.isArray(b[M])?b[M]:[b[M]];for(let D=0,G=P.length;D<G;D++){const L=P[D],O=Array.isArray(L.value)?L.value:[L.value];for(let $=0,V=O.length;$<V;$++){const ie=O[$],X=p(ie),J=T%C,j=J%X.boundary,Te=J+j;T+=j,Te!==0&&C-Te<X.storage&&(T+=C-Te),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=X.storage}}}const x=T%C;return x>0&&(T+=C-x),v.__size=T,v.__cache={},this}function p(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):De("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){const b=v.target;b.removeEventListener("dispose",y);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),e.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const v in r)e.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:u,update:l,dispose:w}}var y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Li=null;function E1(){return Li===null&&(Li=new hc(y1,16,16,_n,_i),Li.name="DFG_LUT",Li.minFilter=It,Li.magFilter=It,Li.wrapS=Gi,Li.wrapT=Gi,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}var M1=class{constructor(e={}){const{canvas:t=_0(),context:i=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:u=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:h=si}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=s;const g=h,_=new Set([ro,no,io]),m=new Set([si,Ai,Dr,Pr,ja,eo]),p=new Uint32Array(4),y=new Int32Array(4),w=new R;let v=null,b=null;const T=[],C=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let F=!1,P=null,D=null,G=null,L=null;this._outputColorSpace=ht;let O=0,$=0,V=null,ie=-1,X=null;const J=new pt,j=new pt;let Te=null;const Se=new Ie(0);let rt=0,Be=t.width,q=t.height,re=1,se=null,Ae=null;const Fe=new pt(0,0,Be,q),Ce=new pt(0,0,Be,q);let Rt=!1;const He=new du;let Ye=!1,st=!1;const Ke=new $e,kt=new R,dt=new pt,ni={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Pt(){return V===null?re:1}let N=i;function ri(S,I){return t.getContext(S,I)}let je,gt,A,E,B,H,te,oe,de,K,Q,ve,be,fe,ae,Re,Pe,Qe,U,ue,Z,ce,_e;try{const S={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:u,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",et,!1),N===null){const I="webgl2";if(N=ri(I,S),N===null)throw ri(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ee()}catch(S){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Le("WebGLRenderer: "+S.message),S}function ee(){je=new Ev(N),je.init(),Z=new d1(N,je),gt=new hv(N,je,e,Z),A=new c1(N,je),gt.reversedDepthBuffer&&d&&A.buffers.depth.setReversed(!0),D=N.createFramebuffer(),G=N.createFramebuffer(),L=N.createFramebuffer(),E=new wv(N),B=new $_,H=new h1(N,je,A,B,gt,Z,E),te=new yv(M),oe=new Am(N),ce=new lv(N,oe),de=new Mv(N,oe,E,ce),K=new Av(N,de,oe,ce,E),Qe=new bv(N,gt,H),ae=new dv(B),Q=new Z_(M,te,je,gt,ce,ae),ve=new _1(M,B),be=new Q_,fe=new r1(je),Pe=new uv(M,te,A,K,f,o),Re=new l1(M,K,gt),_e=new x1(N,E,gt,A),U=new cv(N,je,E),ue=new Sv(N,je,E),E.programs=Q.programs,M.capabilities=gt,M.extensions=je,M.properties=B,M.renderLists=be,M.shadowMap=Re,M.state=A,M.info=E}g!==si&&(x=new Cv(g,t.width,t.height,a,n,r));const pe=new g1(M,N);this.xr=pe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(S){S!==void 0&&(re=S,this.setSize(Be,q,!1))},this.getSize=function(S){return S.set(Be,q)},this.setSize=function(S,I,W=!0){if(pe.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=S,q=I,t.width=Math.floor(S*re),t.height=Math.floor(I*re),W===!0&&(t.style.width=S+"px",t.style.height=I+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(Be*re,q*re).floor()},this.setDrawingBufferSize=function(S,I,W){Be=S,q=I,re=W,t.width=Math.floor(S*W),t.height=Math.floor(I*W),this.setViewport(0,0,S,I)},this.setEffects=function(S){if(g===si){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let I=0;I<S.length;I++)if(S[I].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(J)},this.getViewport=function(S){return S.copy(Fe)},this.setViewport=function(S,I,W,z){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,I,W,z),A.viewport(J.copy(Fe).multiplyScalar(re).round())},this.getScissor=function(S){return S.copy(Ce)},this.setScissor=function(S,I,W,z){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,I,W,z),A.scissor(j.copy(Ce).multiplyScalar(re).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(S){A.setScissorTest(Rt=S)},this.setOpaqueSort=function(S){se=S},this.setTransparentSort=function(S){Ae=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(S=!0,I=!0,W=!0){let z=0;if(S){let k=!1;if(V!==null){const ge=V.texture.format;k=_.has(ge)}if(k){const ge=V.texture.type,ye=m.has(ge),me=Pe.getClearColor(),Ee=Pe.getClearAlpha(),we=me.r,ke=me.g,Ge=me.b;ye?(p[0]=we,p[1]=ke,p[2]=Ge,p[3]=Ee,N.clearBufferuiv(N.COLOR,0,p)):(y[0]=we,y[1]=ke,y[2]=Ge,y[3]=Ee,N.clearBufferiv(N.COLOR,0,y))}else z|=N.COLOR_BUFFER_BIT}I&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),P=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",et,!1),Pe.dispose(),be.dispose(),fe.dispose(),B.dispose(),te.dispose(),K.dispose(),ce.dispose(),_e.dispose(),Q.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",sf),pe.removeEventListener("sessionend",af),On.stop()};function Ue(S){S.preventDefault(),Wl("WebGLRenderer: Context Lost."),F=!0}function lt(){Wl("WebGLRenderer: Context Restored."),F=!1;const S=E.autoReset,I=Re.enabled,W=Re.autoUpdate,z=Re.needsUpdate,k=Re.type;ee(),E.autoReset=S,Re.enabled=I,Re.autoUpdate=W,Re.needsUpdate=z,Re.type=k}function et(S){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oi(S){const I=S.target;I.removeEventListener("dispose",Oi),nn(I)}function nn(S){NE(S),B.remove(S)}function NE(S){const I=B.get(S).programs;I!==void 0&&(I.forEach(function(W){Q.releaseProgram(W)}),S.isShaderMaterial&&Q.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,W,z,k,ge){I===null&&(I=ni);const ye=k.isMesh&&k.matrixWorld.determinantAffine()<0,me=zE(S,I,W,z,k);A.setMaterial(z,ye);let Ee=W.index,we=1;if(z.wireframe===!0){if(Ee=de.getWireframeAttribute(W),Ee===void 0)return;we=2}const ke=W.drawRange,Ge=W.attributes.position;let Me=ke.start*we,tt=(ke.start+ke.count)*we;ge!==null&&(Me=Math.max(Me,ge.start*we),tt=Math.min(tt,(ge.start+ge.count)*we)),Ee!==null?(Me=Math.max(Me,0),tt=Math.min(tt,Ee.count)):Ge!=null&&(Me=Math.max(Me,0),tt=Math.min(tt,Ge.count));const bt=tt-Me;if(bt<0||bt===1/0)return;ce.setup(k,z,me,W,Ee);let ft,ot=U;if(Ee!==null&&(ft=oe.get(Ee),ot=ue,ot.setIndex(ft)),k.isMesh)z.wireframe===!0?(A.setLineWidth(z.wireframeLinewidth*Pt()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(k.isLine){let Yt=z.linewidth;Yt===void 0&&(Yt=1),A.setLineWidth(Yt*Pt()),k.isLineSegments?ot.setMode(N.LINES):k.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else k.isPoints?ot.setMode(N.POINTS):k.isSprite&&ot.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(je.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Yt=k._multiDrawStarts,xe=k._multiDrawCounts,ei=k._multiDrawCount,Ze=Ee?oe.get(Ee).bytesPerElement:1,gi=B.get(z).currentProgram.getUniforms();for(let zi=0;zi<ei;zi++)gi.setValue(N,"_gl_DrawID",zi),ot.render(Yt[zi]/Ze,xe[zi])}else if(k.isInstancedMesh)ot.renderInstances(Me,bt,k.count);else if(W.isInstancedBufferGeometry){const Yt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xe=Math.min(W.instanceCount,Yt);ot.renderInstances(Me,bt,xe)}else ot.render(Me,bt)};function rf(S,I,W,z){P!==null&&S.isNodeMaterial&&P.setObject(z,S),Ye===!0&&ae.setState(S,W,!1),S.transparent===!0&&S.side===Kt&&S.forceSinglePass===!1?(S.side=Lt,S.needsUpdate=!0,Ba(S,I,z),S.side=ki,S.needsUpdate=!0,Ba(S,I,z),S.side=Kt):Ba(S,I,z)}this.compile=function(S,I,W=null){W===null&&(W=S),P!==null&&P.renderStart(S,I,W),b=fe.get(W),b.init(I),C.push(b),W.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),S!==W&&S.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(b.pushLight(k),k.castShadow&&b.pushShadow(k))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),st=this.localClippingEnabled,Ye=ae.init(this.clippingPlanes,st),Ye===!0&&ae.setGlobalState(this.clippingPlanes,I),P!==null&&Re.render(b.state.shadowsArray,W,I);const z=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ge=k.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];rf(me,W,I,k),z.add(me)}else rf(ge,W,I,k),z.add(ge)}),b=C.pop(),P!==null&&P.renderEnd(),z},this.compileAsync=function(S,I,W=null){const z=this.compile(S,I,W);return new Promise(k=>{function ge(){if(z.forEach(function(ye){const Ee=B.get(ye).currentProgram;(Ee===void 0||Ee.isReady())&&z.delete(ye)}),z.size===0){k(S);return}setTimeout(ge,10)}je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let vl=null;function UE(S){vl&&vl(S)}function sf(){On.stop()}function af(){On.start()}const On=new rh;On.setAnimationLoop(UE),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){vl=S,pe.setAnimationLoop(S),S===null?On.stop():On.start()},pe.addEventListener("sessionstart",sf),pe.addEventListener("sessionend",af),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;P!==null&&P.renderStart(S,I);const W=pe.enabled===!0&&pe.isPresenting===!0,z=x!==null&&(V===null||W)&&x.begin(M,V);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(I),I=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,I,V),b=fe.get(S,C.length),b.init(I),b.state.textureUnits=H.getTextureUnits(),C.push(b),Ke.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),He.setFromProjectionMatrix(Ke,Ti,I.reversedDepth),st=this.localClippingEnabled,Ye=ae.init(this.clippingPlanes,st),v=be.get(S,T.length),v.init(),T.push(v),pe.enabled===!0&&pe.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&_l(ye,I,-1/0,M.sortObjects)}_l(S,I,0,M.sortObjects),v.finish(),P!==null&&P.updateLights(b.state.lightsArray),M.sortObjects===!0&&v.sort(se,Ae),Dt=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Dt&&Pe.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&ae.beginShadows();const k=b.state.shadowsArray;if(Re.render(k,S,I),Ye===!0&&ae.endShadows(),(z&&x.hasRenderPass())===!1){const ye=v.opaque,me=v.transmissive;if(b.setupLights(),I.isArrayCamera){const Ee=I.cameras;if(me.length>0)for(let we=0,ke=Ee.length;we<ke;we++){const Ge=Ee[we];uf(ye,me,S,Ge)}Dt&&Pe.render(S);for(let we=0,ke=Ee.length;we<ke;we++){const Ge=Ee[we];of(v,S,Ge,Ge.viewport)}}else me.length>0&&uf(ye,me,S,I),Dt&&Pe.render(S),of(v,S,I)}V!==null&&$===0&&(H.updateMultisampleRenderTarget(V),H.updateRenderTargetMipmap(V)),z&&x.end(M),S.isScene===!0&&S.onAfterRender(M,S,I),ce.resetDefaultState(),ie=-1,X=null,C.pop(),C.length>0?(b=C[C.length-1],H.setTextureUnits(b.state.textureUnits),Ye===!0&&ae.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,P!==null&&P.renderEnd()};function _l(S,I,W,z){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(He)){z&&dt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ke);const ye=K.update(S),me=S.material;me.visible&&v.push(S,ye,me,W,dt.z,null,I)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(He))){const ye=K.update(S),me=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),dt.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),dt.copy(ye.boundingSphere.center)),dt.applyMatrix4(S.matrixWorld).applyMatrix4(Ke)),Array.isArray(me)){const Ee=ye.groups;for(let we=0,ke=Ee.length;we<ke;we++){const Ge=Ee[we],Me=me[Ge.materialIndex];Me&&Me.visible&&v.push(S,ye,Me,W,dt.z,Ge,I)}}else me.visible&&v.push(S,ye,me,W,dt.z,null,I)}}const ge=S.children;for(let ye=0,me=ge.length;ye<me;ye++)_l(ge[ye],I,W,z)}function of(S,I,W,z){const{opaque:k,transmissive:ge,transparent:ye}=S;b.setupLightsView(W),Ye===!0&&ae.setGlobalState(M.clippingPlanes,W),z&&A.viewport(J.copy(z)),k.length>0&&La(k,I,W),ge.length>0&&La(ge,I,W),ye.length>0&&La(ye,I,W),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function uf(S,I,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){const Me=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new ai(1,1,{generateMipmaps:!0,type:Me?_i:si,minFilter:rn,samples:Math.max(4,gt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}const ge=b.state.transmissionRenderTarget[z.id],ye=z.viewport||J;ge.setSize(ye.z*M.transmissionResolutionScale,ye.w*M.transmissionResolutionScale);const me=M.getRenderTarget(),Ee=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(ge),M.getClearColor(Se),rt=M.getClearAlpha(),rt<1&&M.setClearColor(16777215,.5),M.clear(),Dt&&Pe.render(W);const ke=M.toneMapping;M.toneMapping=bi;const Ge=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),Ye===!0&&ae.setGlobalState(M.clippingPlanes,z),La(S,W,z),H.updateMultisampleRenderTarget(ge),H.updateRenderTargetMipmap(ge),je.has("WEBGL_multisampled_render_to_texture")===!1){let Me=!1;for(let tt=0,bt=I.length;tt<bt;tt++){const ft=I[tt],{object:ot,geometry:Yt,material:xe,group:ei}=ft;if(xe.side===Kt&&ot.layers.test(z.layers)){const Ze=xe.side;xe.side=Lt,xe.needsUpdate=!0,lf(ot,W,z,Yt,xe,ei),xe.side=Ze,xe.needsUpdate=!0,Me=!0}}Me===!0&&(H.updateMultisampleRenderTarget(ge),H.updateRenderTargetMipmap(ge))}M.setRenderTarget(me,Ee,we),M.setClearColor(Se,rt),Ge!==void 0&&(z.viewport=Ge),M.toneMapping=ke}function La(S,I,W){const z=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ge=S.length;k<ge;k++){const ye=S[k],{object:me,geometry:Ee,group:we}=ye;let ke=ye.material;ke.allowOverride===!0&&z!==null&&(ke=z),me.layers.test(W.layers)&&lf(me,I,W,Ee,ke,we)}}function lf(S,I,W,z,k,ge){P!==null&&k.isNodeMaterial&&P.setObject(S,k),S.onBeforeRender(M,I,W,z,k,ge),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(M,I,W,z,S,ge),k.transparent===!0&&k.side===Kt&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,M.renderBufferDirect(W,I,z,k,S,ge),k.side=ki,k.needsUpdate=!0,M.renderBufferDirect(W,I,z,k,S,ge),k.side=Kt):M.renderBufferDirect(W,I,z,k,S,ge),S.onAfterRender(M,I,W,z,k,ge)}function Ba(S,I,W){I.isScene!==!0&&(I=ni);const z=B.get(S),k=b.state.lights,ge=b.state.shadowsArray,ye=k.state.version,me=Q.getParameters(S,k.state,ge,I,W,b.state.lightProbeGridArray),Ee=Q.getProgramCacheKey(me);let we=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=te.get(S.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,we===void 0&&(S.addEventListener("dispose",Oi),we=new Map,z.programs=we);let Ge=we.get(Ee);if(Ge!==void 0){if(z.currentProgram===Ge&&z.lightsStateVersion===ye)return hf(S,me),Ge}else me.uniforms=Q.getUniforms(S),P!==null&&S.isNodeMaterial&&P.build(S,W,me),S.onBeforeCompile(me,M),Ge=Q.acquireProgram(me,Ee),we.set(Ee,Ge),z.uniforms=me.uniforms;const Me=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Me.clippingPlanes=ae.uniform),hf(S,me),z.needsLights=VE(S),z.lightsStateVersion=ye,z.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.sunLights.value=k.state.sun,Me.sunLightShadows.value=k.state.sunShadow,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.sunShadowMatrix.value=k.state.sunShadowMatrix,Me.sunShadowCascade.value=k.state.sunShadowCascade,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=b.state.lightProbeGridArray.length>0,z.currentProgram=Ge,z.uniformsList=null,Ge}function cf(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=da.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function hf(S,I){const W=B.get(S);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function OE(S,I){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;w.setFromMatrixPosition(I.matrixWorld);for(let W=0,z=S.length;W<z;W++){const k=S[W];if(k.texture!==null&&k.boundingBox.containsPoint(w))return k}return null}function zE(S,I,W,z,k){I.isScene!==!0&&(I=ni),H.resetTextureUnits();const ge=I.fog,ye=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,me=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:We.workingColorSpace,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=te.get(z.envMap||ye,Ee),ke=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color;let ft=bi;z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ft=M.toneMapping);const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Yt=ot!==void 0?ot.length:0,xe=B.get(z),ei=b.state.lights;if(Ye===!0&&(st===!0||S!==X)){const ct=S===X&&z.id===ie;ae.setState(z,S,ct)}let Ze=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ei.state.version||xe.outputColorSpace!==me||k.isBatchedMesh&&xe.batching===!1||!k.isBatchedMesh&&xe.batching===!0||k.isBatchedMesh&&xe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&xe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&xe.instancing===!1||!k.isInstancedMesh&&xe.instancing===!0||k.isSkinnedMesh&&xe.skinning===!1||!k.isSkinnedMesh&&xe.skinning===!0||k.isInstancedMesh&&xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xe.instancingMorph===!1&&k.morphTexture!==null||xe.envMap!==we||z.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ae.numPlanes||xe.numIntersection!==ae.numIntersection)||xe.vertexAlphas!==ke||xe.vertexTangents!==Ge||xe.morphTargets!==Me||xe.morphNormals!==tt||xe.morphColors!==bt||xe.toneMapping!==ft||xe.morphTargetsCount!==Yt||!!xe.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,xe.__version=z.version);let gi=xe.currentProgram;Ze===!0&&(gi=Ba(z,I,k),P&&z.isNodeMaterial&&P.onUpdateProgram(z,gi,xe));let zi=!1,fn=!1,Er=!1;const at=gi.getUniforms(),Et=xe.uniforms;if(A.useProgram(gi.program)&&(zi=!0,fn=!0,Er=!0),z.id!==ie&&(ie=z.id,fn=!0),xe.needsLights){const ct=OE(b.state.lightProbeGridArray,k);xe.lightProbeGrid!==ct&&(xe.lightProbeGrid=ct,fn=!0)}if(zi||X!==S){A.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(N,"projectionMatrix",S.projectionMatrix),at.setValue(N,"viewMatrix",S.matrixWorldInverse);const mn=at.map.cameraPosition;mn!==void 0&&mn.setValue(N,kt.setFromMatrixPosition(S.matrixWorld)),gt.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),X!==S&&(X=S,fn=!0,Er=!0)}if(xe.needsLights&&(ei.state.sunShadowMap.length>0&&at.setValue(N,"sunShadowMap",ei.state.sunShadowMap,H),ei.state.directionalShadowMap.length>0&&at.setValue(N,"directionalShadowMap",ei.state.directionalShadowMap,H),ei.state.spotShadowMap.length>0&&at.setValue(N,"spotShadowMap",ei.state.spotShadowMap,H),ei.state.pointShadowMap.length>0&&at.setValue(N,"pointShadowMap",ei.state.pointShadowMap,H)),k.isSkinnedMesh){at.setOptional(N,k,"bindMatrix"),at.setOptional(N,k,"bindMatrixInverse");const ct=k.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(N,"boneTexture",ct.boneTexture,H))}k.isBatchedMesh&&(at.setOptional(N,k,"batchingTexture"),at.setValue(N,"batchingTexture",k._matricesTexture,H),at.setOptional(N,k,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",k._indirectTexture,H),at.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",k._colorsTexture,H));const pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Qe.update(k,W,gi),(fn||xe.receiveShadow!==k.receiveShadow)&&(xe.receiveShadow=k.receiveShadow,at.setValue(N,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Et.envMapIntensity.value=I.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=E1()),fn){if(at.setValue(N,"toneMappingExposure",M.toneMappingExposure),xe.needsLights&&kE(Et,Er),ge&&z.fog===!0&&ve.refreshFogUniforms(Et,ge),ve.refreshMaterialUniforms(Et,z,re,q,b.state.transmissionRenderTarget[S.id]),xe.needsLights&&xe.lightProbeGrid){const ct=xe.lightProbeGrid;Et.probesSH.value=ct.texture,Et.probesMin.value.copy(ct.boundingBox.min),Et.probesMax.value.copy(ct.boundingBox.max),Et.probesResolution.value.copy(ct.resolution)}da.upload(N,cf(xe),Et,H)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(da.upload(N,cf(xe),Et,H),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(N,"center",k.center),at.setValue(N,"modelViewMatrix",k.modelViewMatrix),at.setValue(N,"normalMatrix",k.normalMatrix),at.setValue(N,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const ct=z.uniformsGroups;for(let mn=0,Mr=ct.length;mn<Mr;mn++){const ff=ct[mn];_e.update(ff,gi),_e.bind(ff,gi)}}return gi}function kE(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.sunLights.needsUpdate=I,S.sunLightShadows.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function VE(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(S,I,W){const z=B.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),B.get(S.texture).__webglTexture=I,B.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,I){const W=B.get(S);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,W=0){V=S,O=I,$=W;let z=null,k=!1,ge=!1;if(S){const me=B.get(S);if(me.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),J.copy(S.viewport),j.copy(S.scissor),Te=S.scissorTest,A.viewport(J),A.scissor(j),A.setScissorTest(Te),ie=-1;return}else if(me.__webglFramebuffer===void 0)H.setupRenderTarget(S);else if(me.__hasExternalTextures)H.rebindTextures(S,B.get(S.texture).__webglTexture,B.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const ke=S.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&B.has(ke)&&(S.width!==ke.image.width||S.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(S)}}const Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const we=B.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(we[I])?z=we[I][W]:z=we[I],k=!0):S.samples>0&&H.useMultisampledRTT(S)===!1?z=B.get(S).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[W]:z=we,J.copy(S.viewport),j.copy(S.scissor),Te=S.scissorTest}else J.copy(Fe).multiplyScalar(re).floor(),j.copy(Ce).multiplyScalar(re).floor(),Te=Rt;if(W!==0&&(z=D),A.bindFramebuffer(N.FRAMEBUFFER,z)&&A.drawBuffers(S,z),A.viewport(J),A.scissor(j),A.setScissorTest(Te),k){const me=B.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,W)}else if(ge){const me=I;for(let Ee=0;Ee<S.textures.length;Ee++){const we=B.get(S.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,we.__webglTexture,W,me)}}else if(S!==null&&W!==0){const me=B.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,W)}ie=-1};function df(S){const I=B.get(S);return(I.__readFormat!==S.format||I.__readType!==S.type)&&(I.__readFormat=S.format,I.__readType=S.type,I.__formatReadable=gt.textureFormatReadable(S.format),I.__typeReadable=gt.textureTypeReadable(S.type)),I}this.readRenderTargetPixels=function(S,I,W,z,k,ge,ye,me=0){if(!(S&&S.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){A.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const we=S.textures[me],ke=we.format,Ge=we.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Me=df(we);if(Me.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-z&&W>=0&&W<=S.height-k&&N.readPixels(I,W,z,k,Z.convert(ke),Z.convert(Ge),ge)}finally{const we=V!==null?B.get(V).__webglFramebuffer:null;A.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(S,I,W,z,k,ge,ye,me=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=B.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(I>=0&&I<=S.width-z&&W>=0&&W<=S.height-k){A.bindFramebuffer(N.FRAMEBUFFER,Ee);const we=S.textures[me],ke=we.format,Ge=we.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Me=df(we);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,tt),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(I,W,z,k,Z.convert(ke),Z.convert(Ge),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const bt=V!==null?B.get(V).__webglFramebuffer:null;A.bindFramebuffer(N.FRAMEBUFFER,bt);const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await x0(N,ft,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(tt),N.deleteSync(ft),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,I=null,W=0){const z=Math.pow(2,-W),k=Math.floor(S.image.width*z),ge=Math.floor(S.image.height*z),ye=I!==null?I.x:0,me=I!==null?I.y:0;H.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,ye,me,k,ge),A.unbindTexture()},this.copyTextureToTexture=function(S,I,W=null,z=null,k=0,ge=0){let ye,me,Ee,we,ke,Ge,Me,tt,bt;const ft=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(W!==null)ye=W.max.x-W.min.x,me=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,ke=W.min.y,Ge=W.isBox3?W.min.z:0;else{const Et=Math.pow(2,-k);ye=Math.floor(ft.width*Et),me=Math.floor(ft.height*Et),S.isDataArrayTexture?Ee=ft.depth:S.isData3DTexture?Ee=Math.floor(ft.depth*Et):Ee=1,we=0,ke=0,Ge=0}z!==null?(Me=z.x,tt=z.y,bt=z.z):(Me=0,tt=0,bt=0);const ot=Z.convert(I.format),Yt=Z.convert(I.type);let xe;I.isData3DTexture?(H.setTexture3D(I,0),xe=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(H.setTexture2DArray(I,0),xe=N.TEXTURE_2D_ARRAY):(H.setTexture2D(I,0),xe=N.TEXTURE_2D),A.activeTexture(N.TEXTURE0),A.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),A.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),A.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const ei=A.getParameter(N.UNPACK_ROW_LENGTH),Ze=A.getParameter(N.UNPACK_IMAGE_HEIGHT),gi=A.getParameter(N.UNPACK_SKIP_PIXELS),zi=A.getParameter(N.UNPACK_SKIP_ROWS),fn=A.getParameter(N.UNPACK_SKIP_IMAGES);A.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),A.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),A.pixelStorei(N.UNPACK_SKIP_PIXELS,we),A.pixelStorei(N.UNPACK_SKIP_ROWS,ke),A.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const Er=S.isDataArrayTexture||S.isData3DTexture,at=I.isDataArrayTexture||I.isData3DTexture;if(S.isDepthTexture){const Et=B.get(S),pn=B.get(I),ct=B.get(Et.__renderTarget),mn=B.get(pn.__renderTarget);A.bindFramebuffer(N.READ_FRAMEBUFFER,ct.__webglFramebuffer),A.bindFramebuffer(N.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let Mr=0;Mr<Ee;Mr++)Er&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,B.get(S).__webglTexture,k,Ge+Mr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,B.get(I).__webglTexture,ge,bt+Mr)),N.blitFramebuffer(we,ke,ye,me,Me,tt,ye,me,N.DEPTH_BUFFER_BIT,N.NEAREST);A.bindFramebuffer(N.READ_FRAMEBUFFER,null),A.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||B.has(S)){const Et=B.get(S),pn=B.get(I);A.bindFramebuffer(N.READ_FRAMEBUFFER,G),A.bindFramebuffer(N.DRAW_FRAMEBUFFER,L);for(let ct=0;ct<Ee;ct++)Er?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.__webglTexture,k,Ge+ct):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Et.__webglTexture,k),at?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pn.__webglTexture,ge,bt+ct):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pn.__webglTexture,ge),k!==0?N.blitFramebuffer(we,ke,ye,me,Me,tt,ye,me,N.COLOR_BUFFER_BIT,N.NEAREST):at?N.copyTexSubImage3D(xe,ge,Me,tt,bt+ct,we,ke,ye,me):N.copyTexSubImage2D(xe,ge,Me,tt,we,ke,ye,me);A.bindFramebuffer(N.READ_FRAMEBUFFER,null),A.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(xe,ge,Me,tt,bt,ye,me,Ee,ot,Yt,ft.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,ge,Me,tt,bt,ye,me,Ee,ot,ft.data):N.texSubImage3D(xe,ge,Me,tt,bt,ye,me,Ee,ot,Yt,ft):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Me,tt,ye,me,ot,Yt,ft.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Me,tt,ft.width,ft.height,ot,ft.data):N.texSubImage2D(N.TEXTURE_2D,ge,Me,tt,ye,me,ot,Yt,ft);A.pixelStorei(N.UNPACK_ROW_LENGTH,ei),A.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),A.pixelStorei(N.UNPACK_SKIP_PIXELS,gi),A.pixelStorei(N.UNPACK_SKIP_ROWS,zi),A.pixelStorei(N.UNPACK_SKIP_IMAGES,fn),ge===0&&I.generateMipmaps&&N.generateMipmap(xe),A.unbindTexture()},this.initRenderTarget=function(S){B.get(S).__webglFramebuffer===void 0&&H.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?H.setTextureCube(S,0):S.isData3DTexture?H.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?H.setTexture2DArray(S,0):H.setTexture2D(S,0),A.unbindTexture()},this.resetState=function(){O=0,$=0,V=null,A.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}},S1=class{state;listeners=new Set;constructor(e){this.state=e}get(){return this.state}set(e){const t=this.state;let i=!1;for(const n of Object.keys(e))if(!Object.is(t[n],e[n])){i=!0;break}if(i){this.state={...t,...e};for(const n of this.listeners)n(this.state,t)}}updateSettings(e){this.set({settings:{...this.state.settings,...e}})}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}select(e,t){return this.subscribe((i,n)=>{const r=e(i),s=e(n);Object.is(r,s)||t(r,s)})}},Dn={quality:"auto",mouseSensitivity:1,fov:70,invertY:!1,reducedMotion:!1,muted:!0};function w1(e,t){return{mode:"loading",resumeMode:"walking",loadingProgress:0,quality:t,settings:e,activeExhibitId:null,nearbyExhibitId:null,hintStage:"hidden",demoPlaying:!1,zoneId:null,visited:[],hintViewed:[]}}var Gu="oim:v1";function Lh(e){return typeof e=="object"&&e!==null}function Bh(e){const t={settings:{...Dn},visited:[],hintViewed:[]};if(!e)return t;let i;try{i=JSON.parse(e)}catch{return t}if(!Lh(i))return t;const n=Lh(i.settings)?i.settings:{},r=(u,l,c,d)=>typeof u=="number"&&Number.isFinite(u)?Math.min(c,Math.max(l,u)):d,s=(u,l)=>typeof u=="boolean"?u:l,a=["auto","low","medium","high"].includes(n.quality)?n.quality:Dn.quality,o=u=>Array.isArray(u)?u.filter(l=>typeof l=="string").slice(0,100):[];return{settings:{quality:a,mouseSensitivity:r(n.mouseSensitivity,.2,3,Dn.mouseSensitivity),fov:r(n.fov,50,100,Dn.fov),invertY:s(n.invertY,Dn.invertY),reducedMotion:s(n.reducedMotion,Dn.reducedMotion),muted:s(n.muted,Dn.muted)},visited:o(i.visited),hintViewed:o(i.hintViewed)}}function b1(){try{const e=window.localStorage.getItem(Gu);return{saved:Bh(e),hadSettings:e!==null}}catch{return{saved:Bh(null),hadSettings:!1}}}function A1(e){try{window.localStorage.setItem(Gu,JSON.stringify(e))}catch{}}function T1(){try{window.localStorage.removeItem(Gu)}catch{}}var is={low:{pixelRatio:1,shadowMapSize:1024,artTextureSize:1024,reflectorScale:.35},medium:{pixelRatio:1.5,shadowMapSize:2048,artTextureSize:2048,reflectorScale:.6},high:{pixelRatio:2,shadowMapSize:4096,artTextureSize:2048,reflectorScale:1}};function C1(e){const t=new M1({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});return t.outputColorSpace=ht,t.toneMapping=Ya,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=br,t.shadowMap.autoUpdate=!1,t.setSize(e.clientWidth,e.clientHeight),e.appendChild(t.domElement),t}function Ih(e,t){const i=is[t];e.setPixelRatio(Math.min(window.devicePixelRatio||1,i.pixelRatio))}function Nh(e){const t=e.getContext();let i="";const n=t.getExtension("WEBGL_debug_renderer_info");return n&&(i=String(t.getParameter(n.UNMASKED_RENDERER_WEBGL)??"")),/swiftshader|llvmpipe|software|basic render/i.test(i)||/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/.test(navigator.userAgent)?"low":/nvidia|geforce|rtx|radeon rx|radeon pro|apple m\d (pro|max|ultra)/i.test(i)?"high":"medium"}var ns={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"]},R1=6,D1=class{constructor(e){this.element=e;const t=this.abort.signal;window.addEventListener("keydown",i=>this.onKeyDown(i),{signal:t}),window.addEventListener("keyup",i=>this.down.delete(i.code),{signal:t}),window.addEventListener("blur",()=>this.down.clear(),{signal:t}),document.addEventListener("mousemove",i=>{this.pointerLocked&&(this.lookDX+=i.movementX,this.lookDY+=i.movementY)},{signal:t}),e.addEventListener("pointerdown",i=>this.onPointerDown(i),{signal:t}),e.addEventListener("pointermove",i=>this.onPointerMove(i),{signal:t}),e.addEventListener("pointerup",i=>this.onPointerUp(i),{signal:t}),e.addEventListener("pointercancel",()=>this.drag=null,{signal:t}),e.addEventListener("contextmenu",i=>i.preventDefault(),{signal:t})}down=new Set;lookDX=0;lookDY=0;stickX=0;stickY=0;keyHandlers=new Set;clickHandlers=new Set;abort=new AbortController;drag=null;dragLookEnabled=!0;get pointerLocked(){return document.pointerLockElement===this.element}isDown(e){return this.down.has(e)}getMove(){const e=s=>s.some(a=>this.down.has(a));let t=(e(ns.right)?1:0)-(e(ns.left)?1:0)+this.stickX,i=(e(ns.forward)?1:0)-(e(ns.back)?1:0)+this.stickY;const n=Math.hypot(t,i);n>1&&(t/=n,i/=n);const r=Math.hypot(this.stickX,this.stickY)>.92;return{x:t,y:i,run:e(ns.run)||r}}consumeLook(){const e={dx:this.lookDX,dy:this.lookDY};return this.lookDX=0,this.lookDY=0,e}addLook(e,t){this.lookDX+=e,this.lookDY+=t}setStick(e,t){this.stickX=e,this.stickY=t}onKey(e){return this.keyHandlers.add(e),()=>this.keyHandlers.delete(e)}onClick(e){return this.clickHandlers.add(e),()=>this.clickHandlers.delete(e)}requestPointerLock(){if(!(this.pointerLocked||!this.element.requestPointerLock))try{const e=this.element.requestPointerLock();e instanceof Promise&&e.catch(()=>{})}catch{}}exitPointerLock(){this.pointerLocked&&document.exitPointerLock()}clearKeys(){this.down.clear(),this.stickX=0,this.stickY=0}dispose(){this.abort.abort(),this.keyHandlers.clear(),this.clickHandlers.clear()}onKeyDown(e){const t=e.target;if(!(t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))){this.down.add(e.code);for(const n of this.keyHandlers)n(e)}}onPointerDown(e){if(this.pointerLocked){for(const t of this.clickHandlers)t(e);return}this.drag={id:e.pointerId,x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY},this.element.setPointerCapture?.(e.pointerId)}onPointerMove(e){if(!this.drag||this.drag.id!==e.pointerId||this.pointerLocked)return;const t=e.clientX-this.drag.x,i=e.clientY-this.drag.y;if(this.drag.x=e.clientX,this.drag.y=e.clientY,this.dragLookEnabled){const n=e.pointerType==="touch"?1.6:1.2;this.addLook(-t*n,-i*n)}}onPointerUp(e){if(!this.drag||this.drag.id!==e.pointerId)return;const t=Math.hypot(e.clientX-this.drag.startX,e.clientY-this.drag.startY);if(this.drag=null,t<=R1)for(const i of this.clickHandlers)i(e)}},P1=1/20,F1=class{constructor(e,t){this.renderer=e,this.onFrame=t}last=-1;running=!1;fps=60;start(){this.running||(this.running=!0,this.last=-1,this.renderer.setAnimationLoop(e=>this.tick(e)))}stop(){this.running=!1,this.renderer.setAnimationLoop(null)}tick(e){const t=e/1e3,i=this.last<0?1/60:t-this.last;this.last=t,i>0&&(this.fps+=(1/i-this.fps)*.05),this.onFrame(Math.min(i,P1),t)}},rs={linear:e=>e,inOutCubic:e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,outCubic:e=>1-Math.pow(1-e,3),inOutSine:e=>-(Math.cos(Math.PI*e)-1)/2},L1=class{list=[];run(e,t,i={}){return new Promise(n=>{if(i.signal?.aborted){n(!1);return}if(e<=0){t(1),n(!0);return}const r={elapsed:0,duration:e,ease:i.ease??rs.inOutCubic,onUpdate:t,resolve:n,signal:i.signal};i.signal?.addEventListener("abort",()=>{this.list=this.list.filter(s=>s!==r),n(!1)},{once:!0}),t(0),this.list.push(r)})}wait(e,t){return this.run(e,()=>{},{ease:rs.linear,signal:t})}update(e){if(this.list.length===0)return;const t=[];for(const i of[...this.list]){i.elapsed+=e;const n=Math.min(1,i.elapsed/i.duration);i.onUpdate(i.ease(n)),n>=1&&t.push(i)}if(t.length){this.list=this.list.filter(i=>!t.includes(i));for(const i of t)i.resolve(!0)}}get active(){return this.list.length}},ss=new L1,B1=class{ctx=null;master=null;noise=null;stride=0;muted=!0;start(e){if(this.muted=e,e||this.ctx){this.applyMute();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;try{this.ctx=new t}catch{return}const i=this.ctx;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination);const n=i.sampleRate*2;this.noise=i.createBuffer(1,n,i.sampleRate);const r=this.noise.getChannelData(0);let s=0;for(let l=0;l<n;l++)s=(s+.02*(Math.random()*2-1))/1.02,r[l]=s*3.5;const a=i.createBufferSource();a.buffer=this.noise,a.loop=!0;const o=i.createBiquadFilter();o.type="lowpass",o.frequency.value=380;const u=i.createGain();u.gain.value=.22,a.connect(o).connect(u).connect(this.master),a.start(),this.applyMute()}setMuted(e){this.muted=e,!(!e&&!this.ctx)&&this.applyMute()}applyMute(){if(!this.ctx||!this.master)return;!this.muted&&this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(this.muted?0:.5,e,.3)}update(e,t){if(!this.ctx||!this.master||this.muted||t<.3){this.stride=.25;return}this.stride-=e*(t/.75),!(this.stride>0)&&(this.stride+=1,this.step(.55+Math.min(1,t/2.5)*.35))}step(e){const t=this.ctx,i=t.createBufferSource();i.buffer=this.noise;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=260+Math.random()*120,n.Q.value=1.2;const r=t.createGain(),s=t.currentTime;r.gain.setValueAtTime(0,s),r.gain.linearRampToValueAtTime(e,s+.01),r.gain.exponentialRampToValueAtTime(.001,s+.12),i.connect(n).connect(r).connect(this.master),i.start(s,Math.random()*1.5,.15)}};function mi(e,t,i,n){return{kind:"rect",x0:Math.min(e,i),z0:Math.min(t,n),x1:Math.max(e,i),z1:Math.max(t,n)}}var I1=.4,N1=4,U1=class{colliders=[];add(...e){this.colliders.push(...e)}clear(){this.colliders.length=0}move(e,t,i){const n=Math.hypot(t.x,t.z),r=Math.max(1,Math.ceil(n/(i*I1)));let s=e.x,a=e.z;for(let o=0;o<r;o++){s+=t.x/r,a+=t.z/r;const u=this.resolve({x:s,z:a},i);s=u.x,a=u.z}return{x:s,z:a}}resolve(e,t){let i=e.x,n=e.z;for(let r=0;r<N1;r++){let s=!1;for(const a of this.colliders){const o=Uh(a,i,n,t);o&&(i+=o.x,n+=o.z,s=!0)}if(!s)break}return{x:i,z:n}}hits(e,t){return this.colliders.some(i=>Uh(i,e.x,e.z,t)!==null)}};function Uh(e,t,i,n){if(e.kind==="circle"){const g=t-e.x,_=i-e.z,m=Math.hypot(g,_),p=n+e.r;if(m>=p)return null;if(m<1e-9)return{x:p,z:0};const y=(p-m)/m;return{x:g*y,z:_*y}}const r=Math.max(e.x0,Math.min(t,e.x1)),s=Math.max(e.z0,Math.min(i,e.z1)),a=t-r,o=i-s,u=a*a+o*o;if(u>=n*n)return null;if(u>1e-12){const g=Math.sqrt(u),_=(n-g)/g;return{x:a*_,z:o*_}}const l=t-e.x0,c=e.x1-t,d=i-e.z0,h=e.z1-i,f=Math.min(l,c,d,h);return f===l?{x:-(l+n),z:0}:f===c?{x:c+n,z:0}:f===d?{x:0,z:-(d+n)}:{x:0,z:h+n}}function Oh(e,t=!1){const i=e[0].index!==null,n=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),s={},a={},o=e[0].morphTargetsRelative,u=new vt;let l=0;for(let c=0;c<e.length;++c){const d=e[c];let h=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(i)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;u.addGroup(l,f,c),l+=f}}if(i){let c=0;const d=[];for(let h=0;h<e.length;++h){const f=e[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+c);c+=e[h].attributes.position.count}u.setIndex(d)}for(const c in s){const d=zh(s[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;u.setAttribute(c,d)}for(const c in a){const d=a[c][0].length;if(d!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[c]=[];for(let h=0;h<d;++h){const f=[];for(let _=0;_<a[c].length;++_)f.push(a[c][_][h]);const g=zh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;u.morphAttributes[c].push(g)}}}return u}function zh(e){let t,i,n,r=-1,s=0;for(let l=0;l<e.length;++l){const c=e[l];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=c.itemSize),i!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*i}const a=new t(s),o=new ui(a,i,n);let u=0;for(let l=0;l<e.length;++l){const c=e[l];if(c.isInterleavedBufferAttribute){const d=u/i;for(let h=0,f=c.count;h<f;h++)for(let g=0;g<i;g++){const _=c.getComponent(h,g);o.setComponent(h+d,g,_)}}else a.set(c.array,u);u+=c.count*i}return r!==void 0&&(o.gpuType=r),o}var kh={entrance:{id:"entrance",name:"\u30A8\u30F3\u30C8\u30E9\u30F3\u30B9",nameEn:"Entrance"},hall:{id:"hall",name:"\u4E2D\u592E\u30DB\u30FC\u30EB",nameEn:"Central Hall"},zoneA:{id:"zoneA",name:"Zone A \u5E73\u9762\u932F\u8996\u30AE\u30E3\u30E9\u30EA\u30FC",nameEn:"Plane Gallery"},zoneB:{id:"zoneB",name:"Zone B \u7ACB\u4F53\u932F\u8996\u30DB\u30FC\u30EB",nameEn:"Spatial Hall"},zoneC:{id:"zoneC",name:"Zone C \u30AA\u30EA\u30B8\u30CA\u30EB\u5C55\u793A\u5BA4",nameEn:"Original Room"},corridor:{id:"corridor",name:"\u56DE\u5ECA",nameEn:"Corridor"}},O1=.3,Vh=.3,Gh=1.6,Hh=.3,Qi=[{id:"entrance",zone:"entrance",rect:{x0:-4,z0:8,x1:4,z1:14},height:4.5,glassSides:["south"]},{id:"hall",zone:"hall",rect:{x0:-10,z0:-8,x1:10,z1:8},height:8,skylights:[{x0:-5,z0:-4,x1:5,z1:4}]},{id:"corridor-a",zone:"corridor",rect:{x0:-14,z0:-2,x1:-10,z1:2},height:4},{id:"zone-a",zone:"zoneA",rect:{x0:-44,z0:-6,x1:-14,z1:6},height:4.5,skylights:[{x0:-41,z0:-.8,x1:-17,z1:.8}]},{id:"corridor-b",zone:"corridor",rect:{x0:10,z0:-2,x1:14,z1:2},height:4},{id:"zone-b",zone:"zoneB",rect:{x0:14,z0:-12,x1:38,z1:12},height:6,skylights:[{x0:24,z0:-3,x1:34,z1:3}]},{id:"corridor-c",zone:"corridor",rect:{x0:-2,z0:-14,x1:2,z1:-8},height:4},{id:"zone-c",zone:"zoneC",rect:{x0:-10,z0:-28,x1:3,z1:-14},height:5,glassSides:["north"]},{id:"zone-c-south",zone:"zoneC",rect:{x0:3,z0:-21,x1:10,z1:-14},height:5},{id:"darkroom-door",zone:"zoneC",rect:{x0:3,z0:-25.2,x1:3.3,z1:-23.8},height:2.4},{id:"darkroom",zone:"zoneC",rect:{x0:3.3,z0:-28,x1:10,z1:-21.3},height:3.2,dark:!0}],z1=[{kind:"counter",x:6.5,z:5,rotation:-Math.PI/2},{kind:"bench",x:-33,z:0,rotation:0},{kind:"bench",x:-25,z:0,rotation:0},{kind:"bench",x:34,z:9.5,rotation:0},{kind:"bench",x:-6,z:-26.2,rotation:0}],k1=[{x:-43.98,y:2.6,z:0,rotation:Math.PI/2,title:"A  \u5E73\u9762\u932F\u8996\u30AE\u30E3\u30E9\u30EA\u30FC",subtitle:"PLANE GALLERY",width:5},{x:37.98,y:3.6,z:0,rotation:-Math.PI/2,title:"B  \u7ACB\u4F53\u932F\u8996\u30DB\u30FC\u30EB",subtitle:"SPATIAL HALL",width:5},{x:-9.98,y:3.2,z:-21,rotation:Math.PI/2,title:"C  \u30AA\u30EA\u30B8\u30CA\u30EB\u5C55\u793A\u5BA4",subtitle:"ORIGINAL ROOM",width:5}],as=Math.PI,Hu=-Math.PI/2,pa=[{id:"welcome-anamorphosis",x:0,z:0,rotation:0},{id:"cafe-wall",x:-20,z:-6,rotation:0},{id:"ebbinghaus",x:-29,z:-6,rotation:0},{id:"muller-lyer",x:-38,z:-6,rotation:0},{id:"scintillating-grid",x:-38,z:6,rotation:as},{id:"peripheral-drift",x:-29,z:6,rotation:as},{id:"afterimage",x:-20,z:6,rotation:as},{id:"ames-room",x:20,z:-8,rotation:0},{id:"impossible-triangle",x:30.5,z:-8,rotation:0},{id:"checker-shadow",x:27,z:6.5,rotation:as},{id:"reverspective",x:20,z:12,rotation:as},{id:"shadow-spinner",x:38,z:-6,rotation:Hu},{id:"circle-heart",x:-5,z:-22,rotation:0},{id:"colorless-fruit",x:7.6,z:-24.6,rotation:Hu},{id:"invisible-triangle",x:10,z:-17.5,rotation:Hu}],fr={x:0,z:10.8,yaw:0},ti=1e-6;function Wh(e){const t=e.rect;return[{side:"north",at:t.z0,range:{a:t.x0,b:t.x1},outward:-1,axis:"z"},{side:"south",at:t.z1,range:{a:t.x0,b:t.x1},outward:1,axis:"z"},{side:"west",at:t.x0,range:{a:t.z0,b:t.z1},outward:-1,axis:"x"},{side:"east",at:t.x1,range:{a:t.z0,b:t.z1},outward:1,axis:"x"}]}function V1(e,t,i){const n=[];for(const r of i)if(r.id!==e.id)for(const s of Wh(r)){if(s.axis!==t.axis||s.outward===t.outward||Math.abs(s.at-t.at)>ti)continue;const a=Math.max(t.range.a,s.range.a),o=Math.min(t.range.b,s.range.b);o-a>ti&&n.push({a,b:o,height:Math.min(e.height,r.height),otherRoomId:r.id})}return n.sort((r,s)=>r.a-s.a)}function G1(e,t){const i=[...t].sort((s,a)=>s.a-a.a),n=[];let r=e.a;for(const s of i)if(!(s.b<=r+ti)&&(s.a>r+ti&&n.push({a:r,b:Math.min(s.a,e.b)}),r=Math.max(r,s.b),r>=e.b-ti))break;return r<e.b-ti&&n.push({a:r,b:e.b}),n.filter(s=>s.b-s.a>ti)}function Xh(e,t,i){const n=e.at,r=e.at+e.outward*i;return e.axis==="x"?{x0:Math.min(n,r),x1:Math.max(n,r),z0:t.a,z1:t.b}:{x0:t.a,x1:t.b,z0:Math.min(n,r),z1:Math.max(n,r)}}function H1(e,t=O1){const i=[];for(const n of e){const r=n.height+Vh,s=Wh(n),a=new Map;for(const l of s){const c=V1(n,l,e),d=G1(l.range,c),h=n.glassSides?.includes(l.side)?"glass":"wall";for(const _ of d)i.push({roomId:n.id,side:l.side,kind:h,rect:Xh(l,_,t),y0:0,y1:r});for(const _ of c)n.height>_.height+ti&&i.push({roomId:n.id,side:l.side,kind:"lintel",rect:Xh(l,_,t),y0:_.height,y1:r});const f=d.some(_=>Math.abs(_.a-l.range.a)<ti),g=d.some(_=>Math.abs(_.b-l.range.b)<ti);a.set(`${l.side}:a`,f),a.set(`${l.side}:b`,g)}const o=n.rect,u=[["north:a","west:a",o.x0-t,o.z0-t,o.x0,o.z0],["north:b","east:a",o.x1,o.z0-t,o.x1+t,o.z0],["south:a","west:b",o.x0-t,o.z1,o.x0,o.z1+t],["south:b","east:b",o.x1,o.z1,o.x1+t,o.z1+t]];for(const[l,c,d,h,f,g]of u)a.get(l)&&a.get(c)&&i.push({roomId:n.id,side:l.startsWith("north")?"north":"south",kind:"corner",rect:{x0:d,z0:h,x1:f,z1:g},y0:0,y1:r})}return i}function W1(e,t){const i=new Set([e.x0,e.x1]),n=new Set([e.z0,e.z1]);for(const o of t){for(const u of[o.x0,o.x1])u>e.x0&&u<e.x1&&i.add(u);for(const u of[o.z0,o.z1])u>e.z0&&u<e.z1&&n.add(u)}const r=[...i].sort((o,u)=>o-u),s=[...n].sort((o,u)=>o-u),a=[];for(let o=0;o<r.length-1;o++)for(let u=0;u<s.length-1;u++){const l={x0:r[o],x1:r[o+1],z0:s[u],z1:s[u+1]},c=(l.x0+l.x1)/2,d=(l.z0+l.z1)/2;t.some(f=>c>f.x0&&c<f.x1&&d>f.z0&&d<f.z1)||a.push(l)}return a}function X1(e,t,i=Qi){return i.find(n=>e>=n.rect.x0-ti&&e<=n.rect.x1+ti&&t>=n.rect.z0-ti&&t<=n.rect.z1+ti)}function qh(e=Qi){return{x0:Math.min(...e.map(t=>t.rect.x0)),z0:Math.min(...e.map(t=>t.rect.z0)),x1:Math.max(...e.map(t=>t.rect.x1)),z1:Math.max(...e.map(t=>t.rect.z1))}}function os(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Yh(e){const t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");if(!i)throw new Error("2D \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093");return[t,i]}function q1(e){const[t,i]=Yh(e),n=os(7);i.fillStyle="#9d9a95",i.fillRect(0,0,e,e);for(let o=0;o<90;o++){const u=n()*e,l=n()*e,c=(.05+n()*.25)*e,d=i.createRadialGradient(u,l,0,u,l,c),h=n()>.5;d.addColorStop(0,h?"rgba(255,255,255,0.07)":"rgba(40,36,32,0.07)"),d.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=d,i.fillRect(0,0,e,e)}const r=i.getImageData(0,0,e,e),s=r.data;for(let o=0;o<s.length;o+=4){const u=(n()-.5)*14;s[o]=s[o]+u,s[o+1]=s[o+1]+u,s[o+2]=s[o+2]+u}i.putImageData(r,0,0);for(let o=0;o<e*1.5;o++){i.fillStyle=n()>.5?"rgba(235,232,226,0.35)":"rgba(60,56,52,0.3)";const u=1+n()*2.2;i.fillRect(n()*e,n()*e,u,u)}i.strokeStyle="rgba(70,66,62,0.55)",i.lineWidth=Math.max(1.5,e/512),i.strokeRect(0,0,e,e);const a=new pi(t);return a.colorSpace=ht,a.wrapS=a.wrapT=Rr,a.anisotropy=8,a}function Y1(e){const[t,i]=Yh(e),n=os(11);i.fillStyle="#b98a58",i.fillRect(0,0,e,e);for(let s=0;s<160;s++){const a=n()*e,o=2+n()*6;i.strokeStyle=`rgba(${90+n()*40},${55+n()*25},${25+n()*20},${.12+n()*.2})`,i.lineWidth=.6+n()*2,i.beginPath();for(let u=0;u<=e;u+=8){const l=a+Math.sin(u/e*Math.PI*2*(1+n()*.02)+s)*o;u===0?i.moveTo(u,l):i.lineTo(u,l)}i.stroke()}const r=new pi(t);return r.colorSpace=ht,r.wrapS=r.wrapT=Rr,r}var ma=null;function K1(e=1024){if(ma)return ma;const t=q1(e);return ma={wall:new qe({color:15921387,roughness:.92,metalness:0}),ceiling:new qe({color:16184818,roughness:.95,metalness:0}),floor:new qe({map:t,color:16777215,roughness:.32,metalness:0,envMapIntensity:.9}),darkFloor:new qe({color:2763308,roughness:.8}),darkWall:new qe({color:1973792,roughness:.95}),shadowGap:new qe({color:2828840,roughness:.9}),oak:new qe({map:Y1(512),roughness:.55}),steel:new qe({color:1776413,roughness:.4,metalness:.7}),glass:new qe({color:13624298,roughness:.05,metalness:.1,transparent:!0,opacity:.16,depthWrite:!1,side:Kt}),skylight:new At({color:15660799,toneMapped:!1}),plate:new qe({color:16448248,roughness:.6})},ma}var Kh=4;function wt(e,t,i){const n=e.get(t)??[];n.push(i),e.set(t,n)}function nt(e,t,i,n,r,s){const a=new xt(n-e,r-t,s-i);return a.translate((e+n)/2,(t+r)/2,(i+s)/2),a}function Zh(e,t,i,n,r,s){const a=new Nt(i-e,n-t);a.rotateX(s?-Math.PI/2:Math.PI/2),a.translate((e+i)/2,r,(t+n)/2);const o=a.getAttribute("position"),u=a.getAttribute("uv");for(let l=0;l<o.count;l++)u.setXY(l,o.getX(l)/Kh,-o.getZ(l)/Kh);return a}function Z1(e,t){const i=e.rect;wt(t,e.dark?"darkFloor":"floor",Zh(i.x0,i.z0,i.x1,i.z1,0,!0));const n=W1(i,e.skylights??[]),r=e.height;for(const s of n)wt(t,e.dark?"darkWall":"ceiling",nt(s.x0,r,s.z0,s.x1,r+Vh,s.z1));for(const s of e.skylights??[]){const u=r,l=r+1.2;wt(t,"ceiling",nt(s.x0-.1,u,s.z0-.1,s.x1+.1,l,s.z0)),wt(t,"ceiling",nt(s.x0-.1,u,s.z1,s.x1+.1,l,s.z1+.1)),wt(t,"ceiling",nt(s.x0-.1,u,s.z0,s.x0,l,s.z1)),wt(t,"ceiling",nt(s.x1,u,s.z0,s.x1+.1,l,s.z1));const c=Zh(s.x0,s.z0,s.x1,s.z1,l-.02,!1);wt(t,"skylight",c);const d=2;for(let h=s.x0+d;h<s.x1-.01;h+=d)wt(t,"steel",nt(h-.04,l-.2,s.z0,h+.04,l-.03,s.z1))}}function $1(e,t,i){const{rect:n,y0:r,y1:s}=e,a=i.has(e.roomId);if(e.kind==="glass"){const o=n.x1-n.x0>n.z1-n.z0,u=o?(n.z0+n.z1)/2:(n.x0+n.x1)/2,l=o?nt(n.x0,0,u-.01,n.x1,s,u+.01):nt(u-.01,0,n.z0,u+.01,s,n.z1);wt(t,"glass",l);const c=o?n.x1-n.x0:n.z1-n.z0,d=Math.max(1,Math.round(c/2.5));for(let h=0;h<=d;h++){const f=(o?n.x0:n.z0)+c*h/d;wt(t,"steel",o?nt(f-.05,0,u-.08,f+.05,s,u+.08):nt(u-.08,0,f-.05,u+.08,s,f+.05))}wt(t,"steel",o?nt(n.x0,0,u-.1,n.x1,.08,u+.1):nt(u-.1,0,n.z0,u+.1,.08,n.z1)),wt(t,"steel",o?nt(n.x0,s-.4,u-.1,n.x1,s,u+.1):nt(u-.1,s-.4,n.z0,u+.1,s,n.z1));return}if(e.kind==="wall"&&!a){const l=e.side==="north"||e.side==="south"?nt(n.x0,0,n.z0+(e.side==="south"?.015:0),n.x1,.04,n.z1-(e.side==="north"?.015:0)):nt(n.x0+(e.side==="east"?.015:0),0,n.z0,n.x1-(e.side==="west"?.015:0),.04,n.z1);wt(t,"shadowGap",l),wt(t,"wall",nt(n.x0,.04,n.z0,n.x1,s,n.z1));return}if(wt(t,"wall",nt(n.x0,r,n.z0,n.x1,s,n.z1)),a&&e.kind!=="corner"){const l=e.side==="north"?nt(n.x0,r,n.z1+.004,n.x1,s,n.z1+.014):e.side==="south"?nt(n.x0,r,n.z0-.014,n.x1,s,n.z0-.004):e.side==="west"?nt(n.x1+.004,r,n.z0,n.x1+.014,s,n.z1):nt(n.x0-.014,r,n.z0,n.x0-.004,s,n.z1);wt(t,"darkWall",l)}}function J1(e,t){const i=new $e().makeRotationY(e.rotation).setPosition(e.x,0,e.z),n=[];let r,s;e.kind==="bench"?(r=1.2,s=.25,n.push(["oak",nt(-1.2,.4,-.25,1.2,.46,.25)]),n.push(["steel",nt(-1.05,0,-.22,-.97,.4,.22)]),n.push(["steel",nt(.97,0,-.22,1.05,.4,.22)])):(r=1.8,s=.45,n.push(["wall",nt(-1.8,0,-.45,1.8,1.05,.45)]),n.push(["oak",nt(-1.85,1.05,-.5,1.85,1.1,.5)]));for(const[c,d]of n)d.applyMatrix4(i),wt(t,c,d);const a=Math.abs(Math.cos(e.rotation)),o=Math.abs(Math.sin(e.rotation)),u=r*a+s*o,l=r*o+s*a;return[mi(e.x-u,e.z-l,e.x+u,e.z+l)]}function Q1(e){const i=Math.round(2048/e.width*1.1),n=document.createElement("canvas");n.width=2048,n.height=i;const r=n.getContext("2d");r.clearRect(0,0,2048,i),r.fillStyle="#2a2a2c",r.textBaseline="alphabetic";const s=Math.round(i*.42);r.font=`600 ${s}px "Hiragino Sans","Noto Sans JP","Yu Gothic UI",sans-serif`;let a=r.measureText(e.title).width;a>2048*.98&&(r.font=`600 ${Math.round(s*2048*.98/a)}px "Hiragino Sans","Noto Sans JP","Yu Gothic UI",sans-serif`,a=r.measureText(e.title).width),r.fillText(e.title,(2048-a)/2,i*.52),r.fillStyle="#6a6a70",r.font=`500 ${Math.round(i*.16)}px "Helvetica Neue",Arial,sans-serif`;const o=e.subtitle.split("").join("\u200A"),u=r.measureText(o).width;r.fillText(o,(2048-u)/2,i*.86);const l=new pi(n);return l.colorSpace=ht,l.anisotropy=8,l}function j1(e){const t=Q1(e),i=t.image.height/t.image.width,n=new ne(new Nt(e.width,e.width*i),new At({map:t,transparent:!0,toneMapped:!1}));return n.position.set(e.x,e.y,e.z),n.rotation.y=e.rotation,n.name=`sign:${e.subtitle}`,n}function ex(e,t){for(const i of e){if(i.dark||i.zone==="corridor"||i.id==="darkroom-door")continue;const n=i.rect,r=i.height,s=n.x1-n.x0,a=n.z1-n.z0;if(s<6||a<6)continue;const o=s>=a,u=Math.min(o?a:s,12)*.25,l=o?[n.z0+u,n.z1-u]:[n.x0+u,n.x1-u];for(const c of l){o?wt(t,"steel",nt(n.x0+1,r-.05,c-.03,n.x1-1,r,c+.03)):wt(t,"steel",nt(c-.03,r-.05,n.z0+1,c+.03,r,n.z1-1));const d=(o?s:a)-2,h=Math.floor(d/3);for(let f=0;f<=h;f++){const g=(o?n.x0:n.z0)+1+d*f/Math.max(1,h),_=new St(.06,.07,.22,10);_.rotateX(.5*(c<(o?(n.z0+n.z1)/2:(n.x0+n.x1)/2)?-1:1)),o?_.translate(g,r-.16,c):_.translate(c,r-.16,g),wt(t,"steel",_)}}}}function tx(e){const t=K1(e),i=new ut;i.name="museum";const n=new Map,r=[];for(const a of Qi)Z1(a,n);const s=new Set(Qi.filter(a=>a.dark).map(a=>a.id));for(const a of H1(Qi))$1(a,n,s),a.y0<.5&&r.push(mi(a.rect.x0,a.rect.z0,a.rect.x1,a.rect.z1));for(const a of z1)r.push(...J1(a,n));ex(Qi,n);for(const[a,o]of n){const u=Oh(o,!1);for(const d of o)d.dispose();if(!u)continue;const l=new ne(u,t[a]);l.name=`museum:${a}`;const c=a!=="glass"&&a!=="skylight";l.castShadow=c&&a!=="floor"&&a!=="darkFloor",l.receiveShadow=c,a==="glass"&&(l.renderOrder=5),i.add(l)}for(const a of k1)i.add(j1(a));return i.traverse(a=>{a.matrixAutoUpdate=!1,a.updateMatrix()}),{group:i,colliders:r,dispose(){i.traverse(a=>{if(a instanceof ne){a.geometry.dispose();const o=a.material;a.name.startsWith("sign:")&&(o.map?.dispose(),o.dispose())}})}}}var ix=class extends Jo{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new xt;e.deleteAttribute("uv");const t=new qe({side:Lt}),i=new qe,n=new hm(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);const r=new ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const s=new rp(e,i,6),a=new $t;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),s.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),s.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),s.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),s.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),s.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),s.setMatrixAt(5,a.matrix),this.add(s);const o=new ne(e,pr(50));o.position.set(-16.116,14.37,8.208),o.scale.set(.1,2.428,2.739),this.add(o);const u=new ne(e,pr(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const l=new ne(e,pr(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);const c=new ne(e,pr(43));c.position.set(-.462,8.89,14.52),c.scale.set(4.38,5.441,.088),this.add(c);const d=new ne(e,pr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new ne(e,pr(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}};function pr(e){return new Zr({color:0,emissive:16777215,emissiveIntensity:e})}var nx=new R(.32,1,.42).normalize();function rx(e,t,i,n){const r=new ut;r.name="lighting";const s=new Uu(e),a=new ix,o=s.fromScene(a,.04).texture;a.dispose(),s.dispose(),t.environment=o,t.environmentIntensity=.55;const u=new Yc(16777215,13222584,1.35);r.add(u);const l=new eh(16774370,2.6),c=new R((i.x0+i.x1)/2,0,(i.z0+i.z1)/2);return l.position.copy(c).addScaledVector(nx,80),l.target.position.copy(c),l.castShadow=!0,l.shadow.mapSize.set(n,n),l.shadow.bias=-4e-4,l.shadow.normalBias=.04,sx(l,i),r.add(l,l.target),{group:r,sun:l,environment:o,dispose(){o.dispose(),l.shadow.map?.dispose()}}}function sx(e,t){const i=new $e().lookAt(e.position,e.target.position,new R(0,1,0));i.setPosition(e.position);const n=i.clone().invert(),r=new R(1/0,1/0,1/0),s=new R(-1/0,-1/0,-1/0),a=new R;for(const u of[t.x0-2,t.x1+2])for(const l of[0,10])for(const c of[t.z0-2,t.z1+2])a.set(u,l,c).applyMatrix4(n),r.min(a),s.max(a);const o=e.shadow.camera;o.left=r.x,o.right=s.x,o.bottom=r.y,o.top=s.y,o.near=Math.max(.5,-s.z-5),o.far=-r.z+5,o.updateProjectionMatrix()}function ax(){const e=new ut;e.name="exterior";const t=new Ht({side:Lt,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:new Ie(7315414)},horizon:{value:new Ie(15265522)}},vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 top;
      uniform vec3 horizon;
      varying vec3 vDir;
      void main() {
        float h = clamp(vDir.y, 0.0, 1.0);
        vec3 c = mix(horizon, top, pow(h, 0.55));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }
    `}),i=new ne(new Ri(240,32,16),t);i.renderOrder=-10,i.frustumCulled=!1,e.add(i);const n=new ne(new Nt(600,600),new qe({color:10134922,roughness:1}));n.rotation.x=-Math.PI/2,n.position.y=-.06,n.receiveShadow=!0,e.add(n);const r=new ne(new Nt(30,22),new qe({color:13223098,roughness:.9}));r.rotation.x=-Math.PI/2,r.position.set(0,-.03,25),r.receiveShadow=!0,e.add(r);const s=new qe({color:7034951,roughness:1}),a=new qe({color:6258514,roughness:1,flatShading:!0}),o=new St(.15,.22,3,6),u=new Vp(1.6,0),l=[[-14,22],[12,24],[-20,30],[18,32],[-12,-36],[-3,-40],[7,-35],[-18,-42],[14,-44]];for(const[c,d]of l){const h=new ne(o,s);h.position.set(c,1.5,d);const f=new ne(u,a);f.position.set(c,3.6,d),f.scale.setScalar(.9+(c*7+d*3)%5*.08),e.add(h,f)}return e}var ox=1.4,ux=2.5,lx=7,cx=.0022,$h=En.degToRad(85),hx=class{constructor(e,t,i){this.collision=e,this.input=t,this.getSettings=i}position=new R(0,Gh,0);yaw=0;pitch=0;velocity=new le;get speed(){return this.velocity.length()}teleport(e,t,i=this.yaw,n=0){const r=this.collision.resolve({x:e,z:t},Hh);this.position.set(r.x,Gh,r.z),this.yaw=i,this.pitch=n,this.velocity.set(0,0)}forward(e=new R){return e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}quaternion(e=new Wi){return e.setFromEuler(new on(this.pitch,this.yaw,0,"YXZ"))}update(e,t){const i=this.getSettings(),n=this.input.consumeLook();if(t){const h=cx*i.mouseSensitivity;this.yaw-=n.dx*h,this.pitch-=n.dy*h*(i.invertY?-1:1),this.pitch=En.clamp(this.pitch,-$h,$h)}const r=t?this.input.getMove():{x:0,y:0,run:!1},s=r.run?ux:ox,a=Math.sin(this.yaw),o=Math.cos(this.yaw),u=(-a*r.y+o*r.x)*s,l=(-o*r.y-a*r.x)*s,c=1-Math.exp(-lx*e);if(this.velocity.x+=(u-this.velocity.x)*c,this.velocity.y+=(l-this.velocity.y)*c,this.velocity.lengthSq()<1e-6&&u===0&&l===0){this.velocity.set(0,0);return}const d=this.collision.move({x:this.position.x,z:this.position.z},{x:this.velocity.x*e,z:this.velocity.y*e},Hh);e>0&&(this.velocity.x=(d.x-this.position.x)/e,this.velocity.y=(d.z-this.position.z)/e),this.position.x=d.x,this.position.z=d.z}},Jh=new R(0,1,0),dx=class{constructor(e,t,i,n,r){this.camera=e,this.player=t,this.getFov=i,this.getReducedMotion=n,this.fadeEl=r}mode="follow";base=null;current={position:new R,target:new R};maxShift=0;shift=0;insets={right:0,bottom:0};viewport={width:1,height:1};flight=null;setViewport(e,t){this.viewport={width:e,height:t},this.applyProjection()}setInsets(e){this.insets=e,this.applyProjection()}getInsets(){return{...this.insets}}getViewport(){return{...this.viewport}}applyProjection(){const{width:e,height:t}=this.viewport,{right:i,bottom:n}=this.insets,r=e+i,s=t+n;this.camera.aspect=r/s,i>0||n>0?this.camera.setViewOffset(r,s,i,n,e,t):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}focalPx(e=this.camera.fov){return(this.viewport.height+this.insets.bottom)/2/Math.tan(En.degToRad(e)/2)}follow(){this.cancelFlight(),this.mode="follow",this.base=null,this.maxShift=0,this.shift=0}setBase(e,t=0){this.base={position:e.position.clone(),target:e.target.clone(),fov:e.fov},this.maxShift=t,this.shift=0}get canShift(){return this.mode==="hold"&&!this.flight&&this.maxShift>0}addShift(e){!this.canShift||!this.base||(this.shift=En.clamp(this.shift+e,-this.maxShift,this.maxShift),this.applyHold(this.shiftedPose(this.base)))}getShift(){return this.shift}shiftedPose(e){if(this.shift===0)return e;const t=e.target.clone().sub(e.position),i=new R().crossVectors(t,Jh).normalize();return{position:e.position.clone().addScaledVector(i,this.shift),target:e.target.clone(),fov:e.fov}}currentPose(e=5){const t=new R(0,0,-1).applyQuaternion(this.camera.quaternion);return{position:this.camera.position.clone(),target:this.camera.position.clone().addScaledVector(t,e),fov:this.camera.fov}}playerPose(){const e=this.player.quaternion(),t=new R(0,0,-1).applyQuaternion(e);return{position:this.player.position.clone(),target:this.player.position.clone().addScaledVector(t,5),fov:this.getFov()}}async flyTo(e,t,i,n="auto"){this.cancelFlight();const r=new AbortController;this.flight=r;const s=()=>r.abort();i?.addEventListener("abort",s,{once:!0}),this.mode="hold";const a=Math.max(.5,e.target.distanceTo(e.position)),o=this.currentPose(a);let u;if(t<=0)this.applyHold(e),u=!0;else if(n==="fade"||this.getReducedMotion())u=await this.fade(1,.18,r.signal),u&&this.applyHold(e),u=u&&await this.fade(0,.22,r.signal),u||this.setFade(0);else{const l=new R,c=new R;u=await ss.run(t,d=>{if(e.via){const h=1-d;l.copy(o.position).multiplyScalar(h*h).addScaledVector(e.via,2*h*d).addScaledVector(e.position,d*d)}else l.lerpVectors(o.position,e.position,d);c.lerpVectors(o.target,e.target,d),this.applyHold({position:l,target:c,fov:En.lerp(o.fov,e.fov,d)})},{signal:r.signal,ease:rs.inOutCubic})}return i?.removeEventListener("abort",s),this.flight===r&&(this.flight=null),u}returnToBase(e,t){return this.base?this.flyTo(this.shiftedPose(this.base),e,t):Promise.resolve(!0)}cancelFlight(){this.flight?.abort(),this.flight=null}applyHold(e){this.current.position.copy(e.position),this.current.target.copy(e.target),this.camera.position.copy(e.position),this.camera.up.copy(Jh),this.camera.lookAt(e.target),Math.abs(this.camera.fov-e.fov)>1e-4&&(this.camera.fov=e.fov,this.camera.updateProjectionMatrix())}setFade(e){this.fadeEl&&(this.fadeEl.style.opacity=String(e))}fade(e,t,i){const n=Number(this.fadeEl?.style.opacity||0);return ss.run(t,r=>this.setFade(n+(e-n)*r),{signal:i,ease:rs.linear})}update(){if(this.mode!=="follow")return;this.camera.position.copy(this.player.position),this.player.quaternion(this.camera.quaternion);const e=this.getFov();Math.abs(this.camera.fov-e)>1e-4&&(this.camera.fov=e,this.camera.updateProjectionMatrix())}},Qh=[{id:"welcome-anamorphosis",number:"E-1",zone:"entrance",kind:"original",title:"\u3088\u3046\u3053\u305D",titleEn:"Welcome (Anamorphosis)",howToView:"\u30DB\u30FC\u30EB\u306E\u5E8A\u306B\u3042\u308B\u300C\u3053\u3053\u304B\u3089\u898B\u308B\u300D\u30DE\u30FC\u30AF\u306B\u7ACB\u3061\u3001\u6B63\u9762\u306E\u58C1\u306E\u307B\u3046\u3092\u773A\u3081\u3066\u304F\u3060\u3055\u3044\u3002\u58C1\u30FB\u67F1\u30FB\u5E8A\u30FB\u540A\u308A\u4E0B\u3052\u305F\u30D1\u30CD\u30EB\u306B\u3001\u8272\u306E\u65AD\u7247\u304C\u6563\u3089\u3070\u3063\u3066\u3044\u307E\u3059\u3002",hint:{appearance:"\u30DE\u30FC\u30AF\u306E\u4F4D\u7F6E\u304B\u3089\u898B\u308B\u3068\u3001\u3070\u3089\u3070\u3089\u306E\u65AD\u7247\u304C 1 \u679A\u306E\u5E73\u3089\u306A\u7D75\u306B\u3064\u306A\u304C\u308A\u3001\u76EE\u306E\u30B7\u30F3\u30DC\u30EB\u3068\u300COPTICAL ILLUSION MUSEUM\u300D\u306E\u6587\u5B57\u304C\u7A7A\u4E2D\u306B\u6D6E\u304B\u3093\u3067\u898B\u3048\u307E\u3059\u3002\u5C11\u3057\u3067\u3082\u6A2A\u306B\u52D5\u304F\u3068\u3001\u7D75\u306F\u305F\u3061\u307E\u3061\u5D29\u308C\u307E\u3059\u3002\u898B\u3048\u306B\u304F\u3044\u5834\u5408\u306F\u3001\u30DE\u30FC\u30AF\u306E\u4E2D\u5FC3\u306B\u7ACB\u3061\u76F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",mechanism:"\u65AD\u7247\u306F\u3001\u30DE\u30FC\u30AF\u306E\u4F4D\u7F6E\u306B\u7F6E\u3044\u305F\u4EEE\u60F3\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30BF\u304B\u3089\u3001\u30ED\u30B4\u306E\u753B\u50CF\u3092\u5EFA\u7269\u306B\u300C\u6295\u5F71\u300D\u3057\u305F\u3068\u304D\u306B\u5149\u304C\u5F53\u305F\u308B\u5834\u6240\u3060\u3051\u306B\u63CF\u304B\u308C\u3066\u3044\u307E\u3059\u3002\u6295\u5F71\u3057\u305F\u4F4D\u7F6E\u304B\u3089\u898B\u308B\u3068\u3001\u5149\u306E\u7B4B\u3068\u8996\u7DDA\u304C\u4E00\u81F4\u3059\u308B\u306E\u3067\u3001\u5965\u884C\u304D\u306E\u9055\u3046\u9762\u306B\u63CF\u304B\u308C\u305F\u65AD\u7247\u304C 1 \u679A\u306E\u7D75\u306B\u623B\u308A\u307E\u3059\u3002\u3053\u306E\u3088\u3046\u306B\u7279\u5B9A\u306E\u8996\u70B9\u304B\u3089\u3060\u3051\u6B63\u3057\u304F\u898B\u3048\u308B\u7D75\u3092\u300C\u30A2\u30CA\u30E2\u30EB\u30D5\u30A9\u30FC\u30B7\u30B9\uFF08\u6B6A\u50CF\u753B\uFF09\u300D\u3068\u547C\u3073\u307E\u3059\u3002"},demoLabel:"\u8996\u70B9\u3092\u6A2A\u306B\u305A\u3089\u3059"},{id:"cafe-wall",number:"A-1",zone:"plane",kind:"classic",title:"\u30AB\u30D5\u30A7\u30A6\u30A9\u30FC\u30EB\u932F\u8996",titleEn:"Caf\xE9 Wall Illusion",credit:"R. L. Gregory & P. Heard (1979)",howToView:"\u5C11\u3057\u96E2\u308C\u305F\u3068\u3053\u308D\u304B\u3089\u3001\u4F5C\u54C1\u5168\u4F53\u3092\u773A\u3081\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u767D\u3068\u9ED2\u306E\u30BF\u30A4\u30EB\u306E\u3042\u3044\u3060\u3092\u901A\u308B\u7070\u8272\u306E\u6A2A\u7DDA\u304C\u3001\u4EA4\u4E92\u306B\u53F3\u4E0A\u304C\u308A\u30FB\u53F3\u4E0B\u304C\u308A\u306B\u50BE\u3044\u3066\u3001\u304F\u3055\u3073\u5F62\u306B\u5E83\u304C\u3063\u305F\u308A\u3059\u307C\u307E\u3063\u305F\u308A\u3057\u3066\u898B\u3048\u307E\u3059\u3002\u50BE\u304D\u306E\u5F37\u3055\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002\u898B\u3048\u306B\u304F\u3044\u5834\u5408\u306F\u3001\u5C11\u3057\u96E2\u308C\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",mechanism:"\u7070\u8272\u306E\u6A2A\u7DDA\u306F\u3059\u3079\u3066\u6C34\u5E73\u3067\u3001\u4E92\u3044\u306B\u5E73\u884C\u3067\u3059\u3002\u7DDA\u3092\u306F\u3055\u3080\u4E0A\u4E0B\u306E\u884C\u3067\u30BF\u30A4\u30EB\u304C\u534A\u5206\u305A\u3064\u305A\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u7DDA\u306E\u4E21\u5074\u3067\u300C\u660E\u308B\u3044\u30BF\u30A4\u30EB\u300D\u3068\u300C\u6697\u3044\u30BF\u30A4\u30EB\u300D\u304C\u659C\u3081\u306B\u5411\u304B\u3044\u5408\u3044\u307E\u3059\u3002\u8996\u899A\u306E\u521D\u671F\u6BB5\u968E\u3067\u306F\u3001\u660E\u6697\u306E\u5883\u76EE\u3068\u305D\u308C\u306B\u63A5\u3059\u308B\u7070\u8272\u306E\u7DDA\u304C\u307E\u3068\u3081\u3066\u51E6\u7406\u3055\u308C\u3001\u5883\u76EE\u306E\u5C0F\u3055\u306A\u50BE\u304D\u304C\u7DDA\u5168\u4F53\u306E\u50BE\u304D\u3068\u3057\u3066\u611F\u3058\u3089\u308C\u308B\u3068\u8003\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u7DDA\u306E\u660E\u308B\u3055\u304C\u767D\u3068\u9ED2\u306E\u4E2D\u9593\u306E\u3068\u304D\u306B\u3001\u3082\u3063\u3068\u3082\u5F37\u304F\u50BE\u3044\u3066\u898B\u3048\u307E\u3059\u3002"},demoLabel:"\u30AC\u30A4\u30C9\u7DDA\u3092\u91CD\u306D\u3066\u3001\u30BF\u30A4\u30EB\u306E\u305A\u308C\u3092\u306A\u304F\u3059"},{id:"ebbinghaus",number:"A-2",zone:"plane",kind:"classic",title:"\u30A8\u30D3\u30F3\u30B0\u30CF\u30A6\u30B9\u932F\u8996",titleEn:"Ebbinghaus Illusion",credit:"H. Ebbinghaus\uFF0819 \u4E16\u7D00\u672B\uFF09",howToView:"\u5DE6\u53F3\u306E\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u5186\u3092\u898B\u6BD4\u3079\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u5927\u304D\u306A\u5186\u306B\u56F2\u307E\u308C\u305F\u5DE6\u306E\u5186\u306F\u5C0F\u3055\u304F\u3001\u5C0F\u3055\u306A\u5186\u306B\u56F2\u307E\u308C\u305F\u53F3\u306E\u5186\u306F\u5927\u304D\u304F\u898B\u3048\u307E\u3059\u3002\u5927\u304D\u3055\u306E\u5DEE\u306E\u611F\u3058\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"2 \u3064\u306E\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u5186\u306F\u3001\u307E\u3063\u305F\u304F\u540C\u3058\u5927\u304D\u3055\u3067\u3059\u3002\u79C1\u305F\u3061\u306F\u5927\u304D\u3055\u3092\u7D76\u5BFE\u7684\u306A\u5024\u3067\u306F\u306A\u304F\u3001\u5468\u308A\u3068\u6BD4\u3079\u305F\u76F8\u5BFE\u7684\u306A\u5024\u3068\u3057\u3066\u611F\u3058\u3084\u3059\u3044\u305F\u3081\u3001\u5927\u304D\u306A\u3082\u306E\u306B\u56F2\u307E\u308C\u308B\u3068\u5C0F\u3055\u304F\u3001\u5C0F\u3055\u306A\u3082\u306E\u306B\u56F2\u307E\u308C\u308B\u3068\u5927\u304D\u304F\u898B\u3048\u307E\u3059\u3002\u5468\u308A\u306E\u5186\u3068\u306E\u8DDD\u96E2\u3082\u5F71\u97FF\u3057\u3001\u5468\u308A\u306E\u5186\u304C\u8FD1\u3044\u307B\u3069\u4E2D\u592E\u306E\u5186\u306F\u5927\u304D\u304F\u898B\u3048\u308B\u50BE\u5411\u304C\u3042\u308A\u307E\u3059\u3002"},demoLabel:"\u5468\u308A\u306E\u5186\u3092\u6D88\u3057\u3066\u3001\u4E2D\u592E\u306E\u5186\u3092\u4E26\u3079\u308B"},{id:"muller-lyer",number:"A-3",zone:"plane",kind:"classic",title:"\u30DF\u30E5\u30E9\u30FC\u30FB\u30EA\u30E4\u30FC\u932F\u8996",titleEn:"M\xFCller-Lyer Illusion",credit:"F. C. M\xFCller-Lyer (1889)",howToView:"\u4E0A\u4E0B\u306B\u4E26\u3093\u3060 2 \u672C\u306E\u6A2A\u7DDA\u306E\u9577\u3055\u3092\u898B\u6BD4\u3079\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u4E21\u7AEF\u306B\u5916\u5411\u304D\u306E\u77E2\u7FBD\u304C\u3064\u3044\u305F\u7DDA\u306E\u307B\u3046\u304C\u3001\u5185\u5411\u304D\u306E\u77E2\u7FBD\u304C\u3064\u3044\u305F\u7DDA\u3088\u308A\u9577\u304F\u898B\u3048\u307E\u3059\u3002\u5DEE\u306E\u611F\u3058\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u3001\u898B\u6163\u308C\u308B\u3068\u5F31\u307E\u308B\u3053\u3068\u3082\u3042\u308A\u307E\u3059\u3002",mechanism:"2 \u672C\u306E\u6A2A\u7DDA\u306F\u540C\u3058\u9577\u3055\u3067\u3059\u3002\u77E2\u7FBD\u306E\u5411\u304D\u306B\u3088\u3063\u3066\u3001\u7DDA\u306E\u7AEF\u304C\u3069\u3053\u306B\u3042\u308B\u304B\u306E\u898B\u7A4D\u3082\u308A\u304C\u5916\u5074\u3084\u5185\u5074\u3078\u5F15\u3063\u5F35\u3089\u308C\u308B\u3068\u8003\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u307E\u305F\u3001\u5916\u5411\u304D\u306E\u77E2\u7FBD\u306F\u90E8\u5C4B\u306E\u5965\u306E\u89D2\u3001\u5185\u5411\u304D\u306E\u77E2\u7FBD\u306F\u5EFA\u7269\u306E\u624B\u524D\u306E\u89D2\u306E\u3088\u3046\u306A\u5965\u884C\u304D\u306E\u624B\u304C\u304B\u308A\u306B\u306A\u308A\u3001\u300C\u9060\u304F\u306B\u3042\u308B\u306E\u306B\u540C\u3058\u9577\u3055\u306B\u898B\u3048\u308B\u306A\u3089\u3001\u5B9F\u969B\u306F\u9577\u3044\u306F\u305A\u3060\u300D\u3068\u3044\u3046\u5927\u304D\u3055\u306E\u88DC\u6B63\u304C\u50CD\u304F\u3068\u3044\u3046\u8AAC\u3082\u3042\u308A\u307E\u3059\u3002"},demoLabel:"\u77E2\u7FBD\u3092\u6D88\u3057\u3066\u3001\u5B9A\u898F\u3092\u91CD\u306D\u308B"},{id:"scintillating-grid",number:"A-4",zone:"plane",kind:"classic",title:"\u304D\u3089\u3081\u304D\u683C\u5B50\u932F\u8996",titleEn:"Scintillating Grid Illusion",credit:"M. Schrauf, B. Lingelbach & E. R. Wist (1997)",howToView:"\u4F5C\u54C1\u5168\u4F53\u3092\u307C\u3093\u3084\u308A\u773A\u3081\u306A\u304C\u3089\u3001\u8996\u7DDA\u3092\u3086\u3063\u304F\u308A\u52D5\u304B\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u683C\u5B50\u306E\u4EA4\u70B9\u306B\u3042\u308B\u767D\u3044\u5186\u306E\u4E2D\u306B\u3001\u9ED2\u3044\u70B9\u304C\u3061\u3089\u3061\u3089\u3068\u73FE\u308C\u3066\u306F\u6D88\u3048\u308B\u3088\u3046\u306B\u898B\u3048\u307E\u3059\u3002\u3044\u307E\u6CE8\u8996\u3057\u3066\u3044\u308B\u4EA4\u70B9\u306B\u306F\u73FE\u308C\u307E\u305B\u3093\u3002\u898B\u3048\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u3001\u898B\u308B\u8DDD\u96E2\u306B\u3088\u3063\u3066\u3082\u5F37\u3055\u304C\u5909\u308F\u308A\u307E\u3059\u3002",mechanism:"\u767D\u3044\u5186\u306E\u4E2D\u306B\u9ED2\u3044\u70B9\u306F\u63CF\u304B\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u7DB2\u819C\u304B\u3089\u8133\u3078\u4FE1\u53F7\u3092\u9001\u308B\u7D30\u80DE\u306F\u3001\u4E2D\u5FC3\u3068\u5468\u56F2\u306E\u660E\u308B\u3055\u306E\u5DEE\u306B\u53CD\u5FDC\u3059\u308B\u6027\u8CEA\uFF08\u5074\u6291\u5236\uFF09\u3092\u3082\u3063\u3066\u3044\u307E\u3059\u3002\u4EA4\u70B9\u3067\u306F\u5468\u308A\u3092\u660E\u308B\u3044\u7DDA\u306B\u56F2\u307E\u308C\u308B\u305F\u3081\u3001\u4E2D\u5FC3\u304C\u76F8\u5BFE\u7684\u306B\u6697\u304F\u611F\u3058\u3089\u308C\u307E\u3059\u3002\u9ED2\u3044\u70B9\u304C\u8996\u7DDA\u3092\u5411\u3051\u305F\u5834\u6240\u3067\u6D88\u3048\u308B\u306E\u306F\u3001\u8996\u91CE\u306E\u4E2D\u5FC3\u3067\u306F\u53D7\u5BB9\u91CE\u304C\u5C0F\u3055\u304F\u3001\u3053\u306E\u52B9\u679C\u304C\u5F31\u3044\u305F\u3081\u3067\u3059\u3002\u5186\u304C\u3042\u308B\u3053\u3068\u3067\u70B9\u304C\u304D\u3089\u3081\u304F\u3088\u3046\u306B\u898B\u3048\u308B\u7406\u7531\u306F\u3001\u307E\u3060\u5B8C\u5168\u306B\u306F\u89E3\u660E\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"},demoLabel:"\u4EA4\u70B9\u3092\u62E1\u5927\u3059\u308B",caution:"\u3061\u3089\u3064\u304F\u3088\u3046\u306B\u611F\u3058\u308B\u56F3\u67C4\u3067\u3059\u3002\u6C17\u5206\u304C\u60AA\u304F\u306A\u3063\u305F\u3089\u3001\u3059\u3050\u306B\u9451\u8CDE\u3092\u3084\u3081\u3066\u304F\u3060\u3055\u3044\u3002"},{id:"peripheral-drift",number:"A-5",zone:"plane",kind:"classic",title:"\u5468\u8FBA\u30C9\u30EA\u30D5\u30C8\u932F\u8996",titleEn:"Peripheral Drift Illusion",credit:"J. Faubert & A. M. Herbert (1999)\uFF0F\u5317\u5CA1\u660E\u4F73\u30FB\u8606\u7530\u5B8F (2003)",howToView:"\u4F5C\u54C1\u306E\u4E2D\u5FC3\u3067\u306F\u306A\u304F\u3001\u5C11\u3057\u5916\u5074\u3092\u898B\u305F\u308A\u3001\u8996\u7DDA\u3092\u3042\u3061\u3053\u3061\u3078\u52D5\u304B\u3057\u305F\u308A\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u6B62\u307E\u3063\u3066\u3044\u308B\u7D75\u306A\u306E\u306B\u3001\u5186\u74B0\u304C\u3086\u3063\u304F\u308A\u56DE\u8EE2\u3057\u3066\u3044\u308B\u3088\u3046\u306B\u898B\u3048\u307E\u3059\u3002\u8996\u7DDA\u3092\u52D5\u304B\u3057\u305F\u308A\u3001\u307E\u3070\u305F\u304D\u3092\u3057\u305F\u308A\u3059\u308B\u3068\u5F37\u307E\u308A\u307E\u3059\u3002\u307E\u3063\u305F\u304F\u52D5\u3044\u3066\u898B\u3048\u306A\u3044\u4EBA\u3082\u3044\u307E\u3059\u304C\u3001\u7570\u5E38\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002",mechanism:"\u3053\u306E\u7D75\u306F 1 \u30D4\u30AF\u30BB\u30EB\u3082\u52D5\u3044\u3066\u3044\u307E\u305B\u3093\u3002\u5186\u74B0\u306F\u300C\u9ED2 \u2192 \u6FC3\u3044\u8272\uFF08\u9752\u7DD1\uFF09 \u2192 \u767D \u2192 \u6DE1\u3044\u8272\uFF08\u5C71\u5439\uFF09\u300D\u3068\u3044\u3046\u660E\u308B\u3055\u306E\u4E26\u3073\u3092\u7E70\u308A\u8FD4\u3057\u3066\u3044\u307E\u3059\u3002\u8996\u899A\u306F\u660E\u308B\u3055\u306E\u9055\u3044\u306B\u3088\u3063\u3066\u4FE1\u53F7\u306E\u51E6\u7406\u901F\u5EA6\u304C\u308F\u305A\u304B\u306B\u7570\u306A\u308B\u305F\u3081\u3001\u8996\u7DDA\u304C\u52D5\u3044\u305F\u3068\u304D\u3084\u5468\u8FBA\u8996\u91CE\u3067\u306F\u3001\u3053\u306E\u4E26\u3073\u306E\u65B9\u5411\u306B\u52D5\u304D\u306E\u4FE1\u53F7\u304C\u751F\u307E\u308C\u308B\u3068\u8003\u3048\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u305D\u306E\u305F\u3081\u3001\u660E\u308B\u3055\u306E\u4E26\u3073\u306E\u5411\u304D\u306B\u56DE\u3063\u3066\u898B\u3048\u307E\u3059\u3002"},demoLabel:"\u660E\u308B\u3055\u306E\u4E26\u3073\u3092\u62E1\u5927\u3057\u3066\u3001\u5165\u308C\u66FF\u3048\u308B",caution:"\u52D5\u3044\u3066\u898B\u3048\u308B\u56F3\u67C4\u3067\u3059\u3002\u5149\u306B\u654F\u611F\u306A\u65B9\u3084\u3001\u6C17\u5206\u304C\u60AA\u304F\u306A\u3063\u305F\u65B9\u306F\u3001\u3059\u3050\u306B\u9451\u8CDE\u3092\u3084\u3081\u3066\u304F\u3060\u3055\u3044\u3002"},{id:"afterimage",number:"A-6",zone:"plane",kind:"classic",title:"\u6B8B\u50CF\u306E\u7A93",titleEn:"Window of Afterimages",credit:"\u88DC\u8272\u6B8B\u50CF\uFF08\u8CA0\u306E\u6B8B\u50CF\uFF09",howToView:"\u300C\u306F\u3058\u3081\u308B\u300D\u3092\u62BC\u3059\u3068\u3001\u4E0D\u601D\u8B70\u306A\u8272\u306E\u98A8\u666F\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u4E2D\u592E\u306E\u5C0F\u3055\u306A\u9ED2\u3044\u70B9\u304B\u3089\u76EE\u3092\u96E2\u3055\u305A\u306B\u3001\u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3\u304C\u7D42\u308F\u308B\u307E\u3067\u898B\u3064\u3081\u7D9A\u3051\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u98A8\u666F\u304C\u767D\u9ED2\u306B\u5207\u308A\u66FF\u308F\u3063\u305F\u76F4\u5F8C\u3001\u767D\u9ED2\u306E\u5199\u771F\u306A\u306E\u306B\u3001\u4E00\u77AC\u3060\u3051\u81EA\u7136\u306A\u8272\uFF08\u9752\u3044\u7A7A\u3001\u7DD1\u306E\u8349\u3001\u8D64\u3044\u82B1\uFF09\u304C\u3064\u3044\u3066\u898B\u3048\u307E\u3059\u3002\u6570\u79D2\u3067\u8272\u306F\u6D88\u3048\u307E\u3059\u3002\u8272\u306E\u898B\u3048\u65B9\u3084\u9577\u3055\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"\u76EE\u306E\u7DB2\u819C\u306B\u306F\u3001\u8D64\u30FB\u7DD1\u30FB\u9752\u306E\u305D\u308C\u305E\u308C\u306B\u5F37\u304F\u53CD\u5FDC\u3059\u308B 3 \u7A2E\u985E\u306E\u9310\u4F53\u304C\u3042\u308A\u307E\u3059\u3002\u540C\u3058\u8272\u3092\u9577\u304F\u898B\u3064\u3081\u308B\u3068\u3001\u305D\u306E\u8272\u306B\u53CD\u5FDC\u3059\u308B\u9310\u4F53\u306E\u611F\u5EA6\u304C\u4E00\u6642\u7684\u306B\u4E0B\u304C\u308A\u307E\u3059\uFF08\u9806\u5FDC\uFF09\u3002\u305D\u306E\u76F4\u5F8C\u306B\u767D\u9ED2\u306E\u753B\u50CF\u3092\u898B\u308B\u3068\u3001\u611F\u5EA6\u304C\u4E0B\u304C\u3063\u3066\u3044\u306A\u3044\u5074\u306E\u8272\u304C\u76F8\u5BFE\u7684\u306B\u5F37\u304F\u611F\u3058\u3089\u308C\u3001\u6700\u521D\u306B\u898B\u3066\u3044\u305F\u8272\u306E\u53CD\u5BFE\u306E\u8272\uFF08\u88DC\u8272\uFF09\u304C\u3064\u3044\u3066\u898B\u3048\u307E\u3059\u3002\u6700\u521D\u306E\u98A8\u666F\u306F\u3001\u672C\u6765\u306E\u8272\u306E\u88DC\u8272\u3067\u63CF\u304B\u308C\u3066\u3044\u307E\u3059\u3002"},demoLabel:"\u9310\u4F53\u306E\u9806\u5FDC\u3092\u56F3\u3067\u898B\u308B"},{id:"ames-room",number:"B-1",zone:"spatial",kind:"classic",title:"\u30A8\u30A4\u30E0\u30BA\u306E\u90E8\u5C4B",titleEn:"Ames Room",credit:"A. Ames Jr. (1946)",howToView:"\u30D6\u30FC\u30B9\u306E\u6B63\u9762\u306B\u3042\u308B\u8997\u304D\u7A74\u304B\u3089\u3001\u90E8\u5C4B\u306E\u4E2D\u3092\u8997\u3044\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u666E\u901A\u306E\u56DB\u89D2\u3044\u90E8\u5C4B\u306B\u898B\u3048\u308B\u306E\u306B\u3001\u5DE6\u53F3\u306E\u9685\u306B\u7ACB\u3064 2 \u4F53\u306E\u4EBA\u5F62\u306E\u5927\u304D\u3055\u304C\u6975\u7AEF\u306B\u9055\u3063\u3066\u898B\u3048\u307E\u3059\u3002\u3069\u3061\u3089\u3082\u540C\u3058\u5927\u304D\u3055\u306E\u4EBA\u5F62\u3067\u3059\u3002\u5DEE\u306E\u611F\u3058\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"\u3053\u306E\u90E8\u5C4B\u306F\u56DB\u89D2\u304F\u3042\u308A\u307E\u305B\u3093\u3002\u5965\u306E\u58C1\u306F\u659C\u3081\u306B\u306A\u3063\u3066\u3044\u3066\u3001\u5DE6\u306E\u9685\u306F\u53F3\u306E\u9685\u3088\u308A\u305A\u3063\u3068\u9060\u304F\u306B\u3042\u308A\u307E\u3059\u3002\u5E8A\u3084\u5929\u4E95\u3001\u7A93\u306E\u5F62\u3082\u3001\u8997\u304D\u7A74\u304B\u3089\u898B\u305F\u3068\u304D\u3060\u3051\u56DB\u89D2\u304F\u898B\u3048\u308B\u3088\u3046\u306B\u6B6A\u3081\u3066\u3042\u308A\u307E\u3059\u3002\u79C1\u305F\u3061\u306F\u300C\u90E8\u5C4B\u306F\u56DB\u89D2\u3044\u306F\u305A\u3060\u300D\u3068\u3044\u3046\u601D\u3044\u8FBC\u307F\u304C\u5F37\u3044\u306E\u3067\u3001\u9060\u304F\u306B\u3042\u308B\u4EBA\u5F62\u3092\u300C\u540C\u3058\u8DDD\u96E2\u306B\u3042\u308B\u5C0F\u3055\u306A\u4EBA\u5F62\u300D\u3060\u3068\u89E3\u91C8\u3057\u3066\u3057\u307E\u3044\u307E\u3059\u3002"},demoLabel:"\u90E8\u5C4B\u306E\u672C\u5F53\u306E\u5F62\u3092\u898B\u308B"},{id:"impossible-triangle",number:"B-2",zone:"spatial",kind:"classic",title:"\u30DA\u30F3\u30ED\u30FC\u30BA\u306E\u4E09\u89D2\u5F62",titleEn:"Penrose Triangle",credit:"O. Reutersv\xE4rd (1934)\uFF0FL. S. Penrose & R. Penrose (1958)",howToView:"\u5E8A\u306E\u300C\u3053\u3053\u304B\u3089\u898B\u308B\u300D\u30DE\u30FC\u30AF\u306B\u7ACB\u3061\u3001\u53F0\u5EA7\u306E\u4E0A\u306E\u5F6B\u523B\u3092\u773A\u3081\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"3 \u672C\u306E\u89D2\u6750\u304C\u4E92\u3044\u306B\u76F4\u89D2\u306B\u3064\u306A\u304C\u308A\u3001\u3050\u308B\u308A\u3068\u4E00\u5468\u3057\u305F\u4E09\u89D2\u5F62\u306B\u898B\u3048\u307E\u3059\u3002\u3069\u306E\u89D2\u3082\u6B63\u3057\u304F\u3064\u306A\u304C\u3063\u3066\u3044\u308B\u306E\u306B\u3001\u5168\u4F53\u3068\u3057\u3066\u306F\u73FE\u5B9F\u306B\u3042\u308A\u3048\u306A\u3044\u5F62\u3067\u3059\u3002\u3059\u3050\u306B\u4E09\u89D2\u5F62\u306B\u898B\u3048\u306A\u3044\u5834\u5408\u306F\u3001\u30DE\u30FC\u30AF\u306E\u4E2D\u5FC3\u306B\u7ACB\u3061\u76F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",mechanism:"\u5B9F\u969B\u306E\u5F6B\u523B\u306F\u30013 \u672C\u306E\u89D2\u6750\u3092\u76F4\u89D2\u306B\u6298\u308A\u66F2\u3052\u306A\u304C\u3089\u3064\u306A\u3044\u3060\u300C\u9014\u5207\u308C\u305F\u300D\u5F62\u3067\u3059\u3002\u9014\u5207\u308C\u305F\u4E21\u7AEF\u306F\u3001\u30DE\u30FC\u30AF\u306E\u4F4D\u7F6E\u304B\u3089\u898B\u305F\u3068\u304D\u306B\u3060\u3051\u3061\u3087\u3046\u3069\u91CD\u306A\u308B\u3088\u3046\u306B\u3001\u5965\u3068\u624B\u524D\u306B\u305A\u3089\u3057\u3066\u7F6E\u3044\u3066\u3042\u308A\u307E\u3059\u3002\u79C1\u305F\u3061\u306E\u76EE\u306F\u3001\u753B\u9762\u4E0A\u3067\u91CD\u306A\u3063\u305F\u7AEF\u3092\u300C\u3064\u306A\u304C\u3063\u3066\u3044\u308B\u300D\u3068\u89E3\u91C8\u3059\u308B\u305F\u3081\u3001\u3042\u308A\u3048\u306A\u3044\u4E09\u89D2\u5F62\u304C\u751F\u307E\u308C\u307E\u3059\u3002\u53F0\u5EA7\u306E\u5468\u308A\u3092\u6B69\u304F\u3068\u3001\u9014\u5207\u308C\u305F\u90E8\u5206\u3092\u81EA\u5206\u3067\u898B\u3064\u3051\u3089\u308C\u307E\u3059\u3002"},demoLabel:"\u6A2A\u304B\u3089\u898B\u308B"},{id:"checker-shadow",number:"B-3",zone:"spatial",kind:"classic",title:"\u30C1\u30A7\u30C3\u30AB\u30FC\u30B7\u30E3\u30C9\u30A6",titleEn:"Checker Shadow Illusion (3D)",credit:"E. H. Adelson (1995)",howToView:"\u5E02\u677E\u6A21\u69D8\u306E\u76E4\u306B\u3042\u308B\u300CA\u300D\u3068\u300CB\u300D\u306E 2 \u3064\u306E\u30DE\u30B9\u306E\u660E\u308B\u3055\u3092\u898B\u6BD4\u3079\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u5186\u67F1\u306E\u5F71\u306E\u5916\u306B\u3042\u308B A \u306E\u30DE\u30B9\u306F\u6697\u3044\u7070\u8272\u3001\u5F71\u306E\u4E2D\u306B\u3042\u308B B \u306E\u30DE\u30B9\u306F\u660E\u308B\u3044\u7070\u8272\u306B\u898B\u3048\u307E\u3059\u3002\u591A\u304F\u306E\u4EBA\u306B\u306F\u3001\u306F\u3063\u304D\u308A\u9055\u3046\u8272\u306B\u898B\u3048\u307E\u3059\u304C\u3001\u5DEE\u306E\u611F\u3058\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"A \u3068 B \u306F\u3001\u753B\u9762\u306E\u4E0A\u3067\u307E\u3063\u305F\u304F\u540C\u3058\u8272\uFF08\u540C\u3058\u753B\u7D20\u5024\uFF09\u3067\u3059\u3002\u79C1\u305F\u3061\u306E\u8996\u899A\u306F\u3001\u7269\u306E\u8868\u9762\u306E\u8272\u3092\u77E5\u308B\u305F\u3081\u306B\u3001\u7167\u660E\u3084\u5F71\u306E\u5F71\u97FF\u3092\u5DEE\u3057\u5F15\u3044\u3066\u898B\u3088\u3046\u3068\u3057\u307E\u3059\u3002B \u306F\u5F71\u306E\u4E2D\u306B\u3042\u308B\u306E\u3067\u300C\u672C\u5F53\u306F\u3082\u3063\u3068\u660E\u308B\u3044\u8272\u306E\u306F\u305A\u300D\u3068\u88DC\u6B63\u3055\u308C\u3001A \u306F\u660E\u308B\u3044\u30DE\u30B9\u306B\u56F2\u307E\u308C\u3066\u3044\u308B\u306E\u3067\u6697\u304F\u611F\u3058\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u88DC\u6B63\u306F\u3001\u3075\u3060\u3093\u7269\u306E\u8272\u3092\u6B63\u3057\u304F\u898B\u5206\u3051\u308B\u305F\u3081\u306E\u5927\u5207\u306A\u3057\u304F\u307F\u3067\u3059\u3002"},demoLabel:"A \u3068 B \u3092\u3064\u306A\u3052\u308B"},{id:"reverspective",number:"B-4",zone:"spatial",kind:"classic",title:"\u9006\u9060\u8FD1\u306E\u8857",titleEn:"Reverspective City",credit:"P. Hughes \u306B\u3088\u308B\u300C\u30EA\u30D0\u30FC\u30B9\u30DA\u30AF\u30C6\u30A3\u30D6\u300D\u306E\u539F\u7406\uFF08\u56F3\u67C4\u306F\u72EC\u81EA\uFF09",howToView:"\u6B63\u9762\u304B\u3089\u4F5C\u54C1\u3092\u898B\u306A\u304C\u3089\u3001\u5DE6\u53F3\u306B\u3086\u3063\u304F\u308A\u52D5\u3044\u3066\u304F\u3060\u3055\u3044\uFF08A / D \u30AD\u30FC\u3001\u307E\u305F\u306F\u753B\u9762\u306E\u30C9\u30E9\u30C3\u30B0\uFF09\u3002",hint:{appearance:"\u58C1\u306E\u5965\u3078\u7D9A\u3044\u3066\u3044\u308B\u306F\u305A\u306E\u8857\u4E26\u307F\u304C\u3001\u3053\u3061\u3089\u306E\u52D5\u304D\u3092\u8FFD\u3044\u304B\u3051\u308B\u3088\u3046\u306B\u5927\u304D\u304F\u5411\u304D\u3092\u5909\u3048\u3066\u898B\u3048\u307E\u3059\u3002\u7247\u76EE\u3092\u3064\u3076\u308B\u3068\u3001\u3055\u3089\u306B\u5F37\u304F\u611F\u3058\u3089\u308C\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u611F\u3058\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"\u3053\u306E\u4F5C\u54C1\u306F\u5965\u3078\u3078\u3053\u3093\u3067\u3044\u308B\u306E\u3067\u306F\u306A\u304F\u3001\u624B\u524D\u306B\u7A81\u304D\u51FA\u3057\u305F\u7ACB\u4F53\u3067\u3059\u3002\u3044\u3061\u3070\u3093\u624B\u524D\u306B\u51FA\u3066\u3044\u308B\u9762\u306B\u3001\u9060\u304F\u306E\u6D88\u5931\u70B9\u3092\u63CF\u3044\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u306F\u63CF\u304B\u308C\u305F\u9060\u8FD1\u6CD5\u3092\u4FE1\u3058\u3066\u300C\u5965\u306B\u3078\u3053\u3093\u3060\u8857\u300D\u3068\u89E3\u91C8\u3057\u307E\u3059\u304C\u3001\u5B9F\u969B\u306E\u51F9\u51F8\u306F\u9006\u306A\u306E\u3067\u3001\u8996\u70B9\u3092\u52D5\u304B\u3057\u305F\u3068\u304D\u306E\u898B\u3048\u65B9\u306E\u5909\u5316\u304C\u4E88\u60F3\u3068\u9006\u306B\u306A\u308A\u3001\u7D75\u304C\u3053\u3061\u3089\u3092\u8FFD\u3063\u3066\u52D5\u304F\u3088\u3046\u306B\u611F\u3058\u3089\u308C\u307E\u3059\u3002"},demoLabel:"\u771F\u6A2A\u304B\u3089\u898B\u308B",caution:"\u8996\u70B9\u3092\u52D5\u304B\u3059\u3068\u753B\u9762\u304C\u5927\u304D\u304F\u52D5\u3044\u3066\u898B\u3048\u307E\u3059\u3002\u9154\u3044\u3084\u3059\u3044\u65B9\u306F\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002"},{id:"shadow-spinner",number:"B-5",zone:"spatial",kind:"classic",title:"\u56DE\u308B\u5F71",titleEn:"Spinning Silhouette",credit:"\u8305\u539F\u4F38\u5E78 (2003) \u306E\u30B7\u30EB\u30A8\u30C3\u30C8\u932F\u8996\u3068\u540C\u3058\u73FE\u8C61\uFF08\u4EBA\u578B\u306F\u72EC\u81EA\uFF09",howToView:"\u30B9\u30AF\u30EA\u30FC\u30F3\u306B\u6620\u308B\u3001\u56DE\u8EE2\u3059\u308B\u4EBA\u306E\u5F71\u3092\u3057\u3070\u3089\u304F\u773A\u3081\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u5F71\u306E\u4EBA\u306F\u3001\u53F3\u56DE\u308A\u306B\u3082\u5DE6\u56DE\u308A\u306B\u3082\u898B\u3048\u307E\u3059\u3002\u898B\u3066\u3044\u308B\u3046\u3061\u306B\u3001\u56DE\u8EE2\u306E\u5411\u304D\u304C\u7A81\u7136\u53CD\u8EE2\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u6700\u521D\u306B\u3069\u3061\u3089\u306B\u898B\u3048\u308B\u304B\u3001\u53CD\u8EE2\u3057\u3084\u3059\u3044\u304B\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"\u5F71\u306B\u306F\u5965\u884C\u304D\u306E\u60C5\u5831\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u53F3\u56DE\u308A\u306E\u4EBA\u5F62\u3068\u5DE6\u56DE\u308A\u306E\u4EBA\u5F62\u306F\u3001\u307E\u3063\u305F\u304F\u540C\u3058\u5F71\u3092\u4F5C\u308A\u307E\u3059\u3002\u8133\u306F 2 \u3064\u306E\u89E3\u91C8\u306E\u3069\u3061\u3089\u304B\u3092\u9078\u3093\u3067\u898B\u3066\u3044\u307E\u3059\u304C\u3001\u3069\u3061\u3089\u3082\u6B63\u89E3\u306A\u306E\u3067\u3001\u3068\u304D\u3069\u304D\u89E3\u91C8\u304C\u5165\u308C\u66FF\u308F\u308A\u307E\u3059\u3002\u4E0A\u3052\u3066\u3044\u308B\u8DB3\u304C\u624B\u524D\u306B\u3042\u308B\u3068\u601D\u3048\u3070\u4E00\u65B9\u5411\u306B\u3001\u5965\u306B\u3042\u308B\u3068\u601D\u3048\u3070\u53CD\u5BFE\u65B9\u5411\u306B\u56DE\u3063\u3066\u898B\u3048\u307E\u3059\u3002\u8DB3\u5143\u306B\u6CE8\u76EE\u3059\u308B\u3068\u3001\u5411\u304D\u3092\u5207\u308A\u66FF\u3048\u3084\u3059\u304F\u306A\u308A\u307E\u3059\u3002"},demoLabel:"\u5965\u884C\u304D\u306E\u624B\u304C\u304B\u308A\u3092\u52A0\u3048\u308B"},{id:"circle-heart",number:"C-1",zone:"original",kind:"original",title:"\u5186\u3068\u30CF\u30FC\u30C8\u306E\u3042\u3044\u3060",titleEn:"Between a Circle and a Heart",howToView:"\u5E8A\u306E\u300C\u3053\u3053\u304B\u3089\u898B\u308B\u300D\u30DE\u30FC\u30AF\u306B\u7ACB\u3061\u3001\u53F0\u5EA7\u306E\u4E0A\u306E\u7B52\u3068\u3001\u305D\u306E\u5F8C\u308D\u306E\u93E1\u3092\u898B\u6BD4\u3079\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u624B\u524D\u306E\u7B52\u306E\u7E01\u306F\u4E38\u3044\u300C\u5186\u300D\u306B\u898B\u3048\u308B\u306E\u306B\u3001\u5F8C\u308D\u306E\u93E1\u306B\u6620\u3063\u305F\u59FF\u306F\u300C\u30CF\u30FC\u30C8\u300D\u306B\u898B\u3048\u307E\u3059\u3002\u540C\u3058 1 \u672C\u306E\u7B52\u3067\u3059\u3002\u898B\u3048\u306B\u304F\u3044\u5834\u5408\u306F\u3001\u30DE\u30FC\u30AF\u306E\u4E2D\u5FC3\u306B\u7ACB\u3061\u76F4\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002",mechanism:"\u7B52\u306E\u4E0A\u7E01\u306F\u5186\u3067\u3082\u30CF\u30FC\u30C8\u3067\u3082\u306A\u3044\u3001\u6CE2\u6253\u3063\u305F\u7ACB\u4F53\u7684\u306A\u66F2\u7DDA\u3067\u3059\u3002\u3053\u306E\u66F2\u7DDA\u306F\u300C\u3053\u3061\u3089\u5074\u306E\u8996\u70B9\u304B\u3089\u898B\u308B\u3068\u5186\u306B\u3001\u93E1\u3092\u901A\u3057\u305F\u53CD\u5BFE\u5074\u306E\u8996\u70B9\u304B\u3089\u898B\u308B\u3068\u30CF\u30FC\u30C8\u306B\u898B\u3048\u308B\u300D\u3068\u3044\u3046 2 \u3064\u306E\u6761\u4EF6\u3092\u540C\u6642\u306B\u6E80\u305F\u3059\u3088\u3046\u306B\u3001\u8A08\u7B97\u3067\u6C42\u3081\u3066\u3044\u307E\u3059\u3002\u79C1\u305F\u3061\u306F\u7B52\u306E\u7E01\u3092\u300C\u5E73\u3089\u306A\u8F2A\u300D\u3060\u3068\u601D\u3044\u8FBC\u3080\u306E\u3067\u3001\u50BE\u3044\u3066\u898B\u3048\u305F\u8F2A\u306E\u5F62\u3092\u3001\u305D\u306E\u307E\u307E\u672C\u5F53\u306E\u5F62\u3060\u3068\u611F\u3058\u307E\u3059\u3002\u6749\u539F\u539A\u5409\u6C0F\u306E\u300C\u5909\u8EAB\u7ACB\u4F53\u300D\u3068\u540C\u3058\u539F\u7406\u3092\u4F7F\u3063\u305F\u4F5C\u54C1\u3067\u3059\u3002"},demoLabel:"\u7B52\u3092 180\xB0 \u56DE\u3059"},{id:"colorless-fruit",number:"C-2",zone:"original",kind:"original",title:"\u8272\u306E\u306A\u3044\u679C\u5B9F",titleEn:"Colorless Fruit",credit:"\u8272\u306E\u6052\u5E38\u6027\uFF08\u5317\u5CA1\u660E\u4F73\u6C0F\u306E\u300C\u8D64\u304F\u306A\u3044\u30A4\u30C1\u30B4\u300D\u3067\u5E83\u304F\u77E5\u3089\u308C\u308B\u73FE\u8C61\uFF09",howToView:"\u6697\u5BA4\u306B\u5165\u308A\u3001\u30C6\u30FC\u30D6\u30EB\u306E\u4E0A\u306E\u679C\u7269\u3092\u773A\u3081\u3066\u304F\u3060\u3055\u3044\u3002\u753B\u9762\u3092\u30AF\u30EA\u30C3\u30AF\uFF08\u30BF\u30C3\u30D7\uFF09\u3059\u308B\u3068\u3001\u305D\u306E\u5834\u6240\u306E\u5B9F\u969B\u306E\u8272\u3092\u8ABF\u3079\u3089\u308C\u307E\u3059\u3002",hint:{appearance:"\u30B7\u30A2\u30F3\u8272\u306E\u5149\u306B\u6E80\u305F\u3055\u308C\u305F\u90E8\u5C4B\u3067\u3001\u30A4\u30C1\u30B4\u3084\u30EA\u30F3\u30B4\u306F\u8D64\u304F\u898B\u3048\u307E\u3059\u3002\u3068\u3053\u308D\u304C\u3001\u30B9\u30DD\u30A4\u30C8\u3067\u679C\u7269\u306E\u8272\u3092\u8ABF\u3079\u308B\u3068\u3001\u7070\u8272\u306E\u5024\u3057\u304B\u51FA\u3066\u304D\u307E\u305B\u3093\u3002\u8D64\u304F\u898B\u3048\u308B\u5EA6\u5408\u3044\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"\u3053\u306E\u90E8\u5C4B\u306E\u753B\u9762\u306B\u306F\u3001\u8D64\u3044\u30D4\u30AF\u30BB\u30EB\u304C 1 \u3064\u3082\u3042\u308A\u307E\u305B\u3093\u3002\u90E8\u5C4B\u5168\u4F53\u304C\u30B7\u30A2\u30F3\uFF08\u9752\u7DD1\uFF09\u306E\u5149\u3067\u7167\u3089\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u3001\u8133\u306F\u300C\u5168\u4F53\u304C\u9752\u7DD1\u306B\u8272\u3065\u3044\u3066\u3044\u308B\u306E\u306F\u7167\u660E\u306E\u305B\u3044\u3060\u300D\u3068\u5224\u65AD\u3057\u3001\u305D\u306E\u5206\u3092\u5DEE\u3057\u5F15\u3044\u3066\u7269\u306E\u8272\u3092\u63A8\u5B9A\u3057\u307E\u3059\u3002\u7167\u660E\u306E\u8272\u3092\u5DEE\u3057\u5F15\u304F\u3068\u3001\u7070\u8272\u306B\u5199\u3063\u3066\u3044\u308B\u679C\u7269\u306F\u300C\u8D64\u3044\u7269\u300D\u3060\u3068\u63A8\u5B9A\u3055\u308C\u308B\u306E\u3067\u3001\u8D64\u304F\u611F\u3058\u3089\u308C\u307E\u3059\u3002\u3053\u306E\u50CD\u304D\u3092\u300C\u8272\u306E\u6052\u5E38\u6027\u300D\u3068\u547C\u3073\u307E\u3059\u3002"},demoLabel:"\u7167\u660E\u3092\u767D\u306B\u5207\u308A\u66FF\u3048\u308B"},{id:"invisible-triangle",number:"C-3",zone:"original",kind:"original",title:"\u898B\u3048\u306A\u3044\u4E09\u89D2\u5F62",titleEn:"The Invisible Triangle",credit:"G. Kanizsa (1955) \u306E\u4E3B\u89B3\u7684\u8F2A\u90ED\u3092\u7ACB\u4F53\u306B\u3057\u305F\u4F5C\u54C1",howToView:"\u5E8A\u306E\u300C\u3053\u3053\u304B\u3089\u898B\u308B\u300D\u30DE\u30FC\u30AF\u306B\u7ACB\u3061\u3001\u767D\u3044\u58C1\u306E\u524D\u306B\u540A\u308B\u3055\u308C\u305F\u4F5C\u54C1\u3092\u773A\u3081\u3066\u304F\u3060\u3055\u3044\u3002",hint:{appearance:"\u7A7A\u9593\u306E\u4E2D\u306B\u3001\u5468\u308A\u3088\u308A\u5C11\u3057\u660E\u308B\u3044\u767D\u3044\u4E09\u89D2\u5F62\u304C\u6D6E\u304B\u3093\u3067\u898B\u3048\u307E\u3059\u3002\u4E09\u89D2\u5F62\u306E\u8F2A\u90ED\u7DDA\u307E\u3067\u898B\u3048\u308B\u4EBA\u3082\u3044\u307E\u3059\u3002\u898B\u3048\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002",mechanism:"\u4E09\u89D2\u5F62\u306F\u3069\u3053\u306B\u3082\u63CF\u304B\u308C\u3066\u3044\u307E\u305B\u3093\u3002\u6B20\u3051\u305F\u5186\u76E4\u3068 V \u5B57\u306E\u30D1\u30FC\u30C4\u304C\u3001\u5965\u884C\u304D\u306E\u9055\u3046\u4F4D\u7F6E\u306B\u3070\u3089\u3070\u3089\u306B\u540A\u308B\u3057\u3066\u3042\u308A\u3001\u30DE\u30FC\u30AF\u306E\u4F4D\u7F6E\u304B\u3089\u898B\u305F\u3068\u304D\u3060\u3051\u3001\u305D\u306E\u5207\u308C\u76EE\u304C\u3061\u3087\u3046\u3069\u4E09\u89D2\u5F62\u306E\u89D2\u306E\u4F4D\u7F6E\u306B\u305D\u308D\u3044\u307E\u3059\u3002\u8133\u306F\u300C\u624B\u524D\u306B\u767D\u3044\u4E09\u89D2\u5F62\u304C\u91CD\u306A\u3063\u3066\u3044\u308B\u306E\u3067\u3001\u5186\u3084\u7DDA\u304C\u96A0\u308C\u3066\u3044\u308B\u300D\u3068\u89E3\u91C8\u3059\u308B\u307B\u3046\u304C\u81EA\u7136\u3060\u3068\u5224\u65AD\u3057\u3001\u5B58\u5728\u3057\u306A\u3044\u8F2A\u90ED\uFF08\u4E3B\u89B3\u7684\u8F2A\u90ED\uFF09\u3092\u4F5C\u308A\u51FA\u3057\u307E\u3059\u3002"},demoLabel:"\u6A2A\u304B\u3089\u898B\u308B"}],fx=new Map(Qh.map(e=>[e.id,e]));function jh(e){const t=fx.get(e);if(!t)throw new Error(`\u4F5C\u54C1\u306E\u6587\u8A00\u304C\u3042\u308A\u307E\u305B\u3093: ${e}`);return t}var Si=class{root=new ut;ctx;demoAbort=null;async init(e){this.ctx=e,await this.build(e)}resetDemo(){}async playDemo(){if(this.stopDemo(),!this.demo)return!0;const e=new AbortController;this.demoAbort=e;const t=await this.demo(e.signal);return this.demoAbort===e&&(this.demoAbort=null,this.resetDemo()),t&&!e.signal.aborted}stopDemo(){this.demoAbort&&(this.demoAbort.abort(),this.demoAbort=null,this.resetDemo())}get demoPlaying(){return this.demoAbort!==null}animate(e,t,i,n=rs.inOutCubic){return ss.run(this.ctx.reducedMotion?0:e,t,{signal:i,ease:n})}wait(e,t){return ss.wait(e,t)}dispose(){this.stopDemo(),px(this.root)}};function px(e){e.traverse(t=>{const i=t;if(!i.isMesh)return;i.geometry?.dispose();const n=Array.isArray(i.material)?i.material:[i.material];for(const r of n){if(!r||r.userData.shared)continue;const s=r.map;s&&!i.userData.sharedMap&&s.dispose(),r.dispose()}})}var mx=`
  uniform mat4 projector;
  uniform mat4 localMatrix;
  varying vec4 vProj;
  void main() {
    vProj = projector * localMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,gx=`
  uniform sampler2D map;
  uniform vec3 outsideColor;
  uniform float hasOutside;
  uniform float opacity;
  varying vec4 vProj;
  void main() {
    vec2 uv = vProj.xy / vProj.w * 0.5 + 0.5;
    bool inside = vProj.w > 0.0 && all(greaterThanEqual(uv, vec2(0.0))) && all(lessThanEqual(uv, vec2(1.0)));
    vec4 c;
    if (inside) {
      c = texture2D(map, uv);
    } else {
      if (hasOutside < 0.5) discard;
      c = vec4(outsideColor, 1.0);
    }
    if (c.a < 0.01) discard;
    gl_FragColor = vec4(c.rgb, c.a * opacity);
    #include <colorspace_fragment>
  }
`;function ed(e){return e.updateMatrixWorld(!0),e.updateProjectionMatrix(),new $e().multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}function vx(e,t,i={}){const n=i.outside===void 0?16777215:i.outside;return new Ht({uniforms:{map:{value:e},projector:{value:ed(t)},localMatrix:{value:i.localMatrix??new $e},outsideColor:{value:new Ie(n??16777215)},hasOutside:{value:n===null?0:1},opacity:{value:1}},vertexShader:mx,fragmentShader:gx,transparent:i.transparent??n===null,side:i.side??ki,toneMapped:!1})}function td(e,t,i,n){e.updateMatrixWorld(!0);const r=new R(t.x,t.y,t.z).project(e);return{x:(r.x+1)/2*i,y:(1-r.y)/2*n}}var Ut={x:0,y:1.6,z:5.2},ji={x:0,y:2.75,z:-8},_x=34,id=1.74,xx=40,Pn=-8,dn={x0:-2,x1:2,top:4},Fn=8,Je={z:-3,x0:-1.45,x1:1.45,y0:1.1,y1:2.95},ii={x:-3.2,z:-5,r:.35};function Wu(e){return Ut.z-Ut.y/Math.tan(Math.abs(e)*Math.PI/180)}var nd="#1b2552",Xu="#e0592a";function yx(e,t,i,n){const r=(w,v,b)=>td(n,{x:w,y:v,z:b},t,i);e.clearRect(0,0,t,i);const s=r(0,5.3,Pn),a=r(1.7,5.3,Pn).x-r(-1.7,5.3,Pn).x,o=a*.42;e.save(),e.translate(s.x,s.y),e.lineWidth=a*.045,e.strokeStyle=nd,e.fillStyle="#ffffff",e.beginPath(),e.moveTo(-a/2,0),e.quadraticCurveTo(0,-o,a/2,0),e.quadraticCurveTo(0,o,-a/2,0),e.closePath(),e.fill(),e.stroke();const u=e.createRadialGradient(-o*.1,-o*.1,o*.05,0,0,o*.46);u.addColorStop(0,"#39b6c9"),u.addColorStop(1,"#1d4fa6"),e.fillStyle=u,e.beginPath(),e.arc(0,0,o*.44,0,Math.PI*2),e.fill(),e.fillStyle="#0c0f22",e.beginPath(),e.arc(0,0,o*.19,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(o*.12,-o*.13,o*.07,0,Math.PI*2),e.fill(),e.strokeStyle=Xu,e.lineCap="round",e.lineWidth=a*.03;for(let w=-3;w<=3;w++){const v=-Math.PI/2+w*.3;e.beginPath(),e.moveTo(Math.cos(v)*o*.78,Math.sin(v)*o*.78-o*.1),e.lineTo(Math.cos(v)*o*1.02,Math.sin(v)*o*1.02-o*.12),e.stroke()}e.restore();const l=r(0,2.15,Pn),c=r(5.4,2.15,Pn).x-r(-5.4,2.15,Pn).x,d="OPTICAL ILLUSION MUSEUM";let h=c/10;e.font=`800 ${h}px "Helvetica Neue",Arial,sans-serif`;const f=e.measureText(d).width;h*=c/f,e.font=`800 ${h}px "Helvetica Neue",Arial,sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillStyle=nd,e.fillText(d,l.x,l.y),e.fillStyle=Xu,e.fillRect(l.x-c*.18,l.y+h*.62,c*.36,h*.12);const g=Wu(-9.6),_=r(0,0,g),m=r(0,0,Wu(-8.1)).y,y=(r(0,0,Wu(-11.2)).y-m)*.9;e.font=`800 ${y}px "Hiragino Sans","Noto Sans JP","Yu Gothic UI",sans-serif`,e.fillStyle=Xu,e.fillText("\u932F\u8996\u7F8E\u8853\u9928\u3078\u3088\u3046\u3053\u305D",_.x,_.y)}var Ex=`
  uniform mat4 projector;
  varying vec4 vProj;
  varying vec3 vPos;
  void main() {
    vPos = position;
    vProj = projector * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Mx=`
  uniform sampler2D map;
  uniform vec3 eye;
  uniform vec3 panelMin;
  uniform vec3 panelMax;
  uniform vec3 column;
  uniform float occlude;
  uniform float opacity;
  varying vec4 vProj;
  varying vec3 vPos;

  bool hitsPanel(vec3 p) {
    float t = (panelMin.z - eye.z) / (p.z - eye.z);
    if (t <= 0.0 || t >= 0.999) return false;
    vec3 q = eye + t * (p - eye);
    return q.x > panelMin.x && q.x < panelMax.x && q.y > panelMin.y && q.y < panelMax.y;
  }

  bool hitsColumn(vec3 p) {
    vec2 d = p.xz - eye.xz;
    vec2 oc = eye.xz - column.xy;
    float a = dot(d, d);
    float b = 2.0 * dot(oc, d);
    float c = dot(oc, oc) - column.z * column.z;
    float disc = b * b - 4.0 * a * c;
    if (disc < 0.0) return false;
    float t = (-b - sqrt(disc)) / (2.0 * a);
    return t > 0.0 && t < 0.999;
  }

  void main() {
    if (vProj.w <= 0.0) discard;
    vec2 uv = vProj.xy / vProj.w * 0.5 + 0.5;
    if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) discard;
    if (occlude > 0.5 && (hitsPanel(vPos) || hitsColumn(vPos))) discard;
    vec4 c = texture2D(map, uv);
    if (c.a < 0.02) discard;
    gl_FragColor = vec4(c.rgb, c.a * opacity);
    #include <colorspace_fragment>
  }
`,Sx=class extends Si{id="welcome-anamorphosis";viewMode={kind:"fixed",position:[Ut.x,Ut.y,Ut.z],target:[ji.x,ji.y,ji.z],fov:xx};colliders=[{kind:"circle",x:ii.x,z:ii.z,r:ii.r},{kind:"rect",x0:Je.x0,z0:Je.z-.05,x1:Je.x1,z1:Je.z+.05}];captionAnchor={position:[1.2,1.05,5.6],stand:!0};debugPoints={panelCenter:[0,(Je.y0+Je.y1)/2,Je.z+.02]};materials=[];build(e){const t=new Qt(_x,id,.1,50);t.position.set(Ut.x,Ut.y,Ut.z),t.lookAt(ji.x,ji.y,ji.z);const i=Math.min(2048,e.textureSize*2),n=Math.round(i/id),r=document.createElement("canvas");r.width=i,r.height=n,yx(r.getContext("2d"),i,n,t);const s=new pi(r);s.colorSpace=ht,s.anisotropy=e.renderer.capabilities.getMaxAnisotropy();const a=ed(t),o=C=>{const x=new Ht({uniforms:{map:{value:s},projector:{value:a},eye:{value:new R(Ut.x,Ut.y,Ut.z)},panelMin:{value:new R(Je.x0,Je.y0,Je.z)},panelMax:{value:new R(Je.x1,Je.y1,Je.z)},column:{value:new R(ii.x,ii.z,ii.r)},occlude:{value:C?1:0},opacity:{value:1}},vertexShader:Ex,fragmentShader:Mx,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return this.materials.push(x),x},u=o(!0),l=o(!1),c=(C,x,M,F=0)=>{const P=new Nt(C,x);return F&&P.rotateX(F),P.translate(...M),P},d=Pn+.012,h=Fn-.05,f=[c(9.9+dn.x0,h,[(-9.9+dn.x0)/2,h/2+.02,d]),c(9.9-dn.x1,h,[(9.9+dn.x1)/2,h/2+.02,d]),c(dn.x1-dn.x0,h-dn.top,[0,(h+dn.top)/2,d]),c(16,10.5,[0,.004,-2.7],-Math.PI/2)];for(const C of f){const x=new ne(C,u);x.renderOrder=2,x.name="e1-fragment",this.root.add(x)}const g=new qe({color:16184817,roughness:.8}),_=Je.x1-Je.x0,m=Je.y1-Je.y0,p=new ne(new xt(_,m,.03),g);p.position.set((Je.x0+Je.x1)/2,(Je.y0+Je.y1)/2,Je.z);const y=new ne(c(_,m,[(Je.x0+Je.x1)/2,(Je.y0+Je.y1)/2,Je.z+.016]),l);y.renderOrder=2;const w=new qe({color:10132122,metalness:.6,roughness:.4});for(const C of[Je.x0+.1,Je.x1-.1]){const x=new ne(new St(.004,.004,Fn-Je.y1,6),w);x.position.set(C,(Fn+Je.y1)/2,Je.z),this.root.add(x)}this.root.add(p,y);const v=new ne(new St(ii.r,ii.r,Fn,40),g);v.position.set(ii.x,Fn/2,ii.z);const b=new St(ii.r+.004,ii.r+.004,Fn,64,1,!0);b.translate(ii.x,Fn/2,ii.z);const T=new ne(b,l);T.renderOrder=2,this.root.add(v,T)}async demo(e){if(!await this.wait(.5,e))return!1;const t=[ji.x,ji.y,ji.z];return!await this.ctx.rig.flyTo({position:[Ut.x+3,Ut.y,Ut.z],target:t},2.6,e)||!await this.wait(2.5,e)||!await this.ctx.rig.flyTo({position:[Ut.x-2.5,Ut.y+.6,Ut.z-1.5],target:t},2.6,e)||!await this.wait(2,e)?!1:this.ctx.rig.returnToView(2.4,e)}dispose(){super.dispose();for(const e of this.materials)e.uniforms.map.value.dispose()}};function rd(e,t,i,n){const r=e>=1?t:Math.round(t*e),s=e>=1?Math.round(t/e):t,a=document.createElement("canvas");a.width=r,a.height=s;const o=a.getContext("2d",{willReadFrequently:!1});if(!o)throw new Error("2D \u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093");i(o,r,s);const u=new pi(a);return u.colorSpace=ht,u.generateMipmaps=!0,u.minFilter=rn,u.magFilter=It,u.anisotropy=n?n.capabilities.getMaxAnisotropy():8,{canvas:a,ctx:o,texture:u,width:r,height:s,redraw(l){o.save(),o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,r,s),o.restore(),l(o,r,s),u.needsUpdate=!0}}}function wx(e,t={}){return new At({map:e,toneMapped:!1,transparent:t.transparent??!1})}function ga(e,t,i,n,r,s,a=600,o='"Hiragino Sans","Noto Sans JP","Yu Gothic UI","Meiryo",sans-serif'){e.font=`${a} ${s}px ${o}`;const u=e.measureText(t).width;u>r&&(e.font=`${a} ${Math.floor(s*r/u)}px ${o}`),e.fillText(t,i,n)}var us=null;function bx(){if(us)return us;const e=256,t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d"),n=i.createRadialGradient(e/2,e*.42,0,e/2,e*.5,e/2);return n.addColorStop(0,"rgba(255,244,225,0.26)"),n.addColorStop(.55,"rgba(255,244,225,0.1)"),n.addColorStop(1,"rgba(255,244,225,0)"),i.fillStyle=n,i.fillRect(0,0,e,e),us=new pi(t),us.colorSpace=ht,us}function Ax(e,t){const i=new ne(new Nt(e,t),new At({map:bx(),transparent:!0,blending:Oa,depthWrite:!1,toneMapped:!0}));return i.userData.sharedMap=!0,i.renderOrder=1,i}function qu(e,t){const{width:i,height:n}=t,r=t.centerY??1.55,s=t.border??.035,a=t.depth??.045,o=new ut,u=new qe({color:t.color??1907999,roughness:.45,metalness:.4}),l=i+s*2,c=n+s*2,d=[[l,s,0,(n+s)/2],[l,s,0,-(n+s)/2],[s,n,-(i+s)/2,0],[s,n,(i+s)/2,0]].map(([y,w,v,b])=>{const T=new xt(y,w,a);return T.translate(v,r+b,a/2),T}),h=new xt(i,n,.01);h.translate(0,r,.005);const f=Oh([...d,h]);for(const y of[...d,h])y.dispose();const g=new ne(f,u);g.name="frame",o.add(g);const _=a-.008,m=new ne(new Nt(i,n),wx(e));m.position.set(0,r,_),m.name="art",o.add(m);const p=new ut;if(p.position.set(0,r,_+.002),o.add(p),t.glow!==!1){const y=Ax(l*1.9,c*1.7);y.position.set(0,r+c*.12,.003),o.add(y)}return{group:o,art:m,overlay:p,centerY:r,surfaceZ:_}}function sd(e,t,i){const n=new xt(e,i,t);n.translate(0,i/2,0);const r=new ne(n,new qe({color:16053231,roughness:.85}));return r.castShadow=!1,r.receiveShadow=!0,r.name="pedestal",r}var ls={cols:12,rows:9,shift:.5,mortar:.075,margin:.55},va={black:"#101010",white:"#ffffff",mortar:"#808080",paper:"#f7f6f2"};function _a(e={}){const t={...ls,...e},i=t.cols,n=t.rows+(t.rows-1)*t.mortar,r=i+t.margin*2,s=n+t.margin*2,a=t.margin,o=t.margin+i,u=[],l=[],c=[];for(let d=0;d<t.rows;d++){const h=t.margin+d*(1+t.mortar),f=d%2*t.shift;c.push(f);for(let g=-2;g<=t.cols+1;g++){if((g%2+2)%2!==0)continue;const _=Math.max(a,a+g+f),m=Math.min(o,a+g+f+1);m-_>1e-9&&u.push({x:_,y:h,w:m-_,h:1})}d<t.rows-1&&l.push({x:a,y:h+1,w:i,h:t.mortar})}return{width:r,height:s,blackTiles:u,field:{x:a,y:t.margin,w:i,h:n},mortarLines:l,rowShifts:c}}var cs=2.6,ad=1.6;function Yu(e,t,i,n){const r=t/n.width;e.fillStyle=va.paper,e.fillRect(0,0,t,i),e.fillStyle=va.white,e.fillRect(n.field.x*r,n.field.y*r,n.field.w*r,n.field.h*r),e.fillStyle=va.black;for(const s of n.blackTiles)e.fillRect(s.x*r,s.y*r,s.w*r,s.h*r);e.fillStyle=va.mortar;for(const s of n.mortarLines)e.fillRect(s.x*r,s.y*r,s.w*r,s.h*r)}var Tx=class extends Si{id="cafe-wall";viewMode;artH;art=null;guides=new ut;guideMat=new At({color:16719904,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1});shift=ls.shift;mortar=ls.mortar;tunables=[{label:"\u76EE\u5730\u306E\u592A\u3055\uFF08\u30BF\u30A4\u30EB\u6BD4\uFF09",min:.02,max:.2,step:.005,get:()=>this.mortar,set:e=>{this.mortar=e,this.art?.redraw((t,i,n)=>Yu(t,i,n,_a({shift:this.shift,mortar:e})))}}];constructor(){super();const e=_a();this.artH=cs*e.height/e.width,this.viewMode={kind:"front",center:[0,ad,.04],width:cs,height:this.artH}}build(e){const t=_a({shift:this.shift});this.art=rd(t.width/t.height,e.textureSize,(r,s,a)=>Yu(r,s,a,t),e.renderer);const i=qu(this.art.texture,{width:cs,height:this.artH,centerY:ad});this.root.add(i.group);const n=cs/t.width;for(const r of t.mortarLines){const s=new ne(new Nt(cs*.98,.006),this.guideMat),a=(r.y+r.h/2)*n;s.position.set(0,this.artH/2-a,0),this.guides.add(s)}this.guides.visible=!1,i.overlay.add(this.guides)}setShift(e){if(!this.art||Math.abs(e-this.shift)<1e-4)return;this.shift=e;const t=_a({shift:e,mortar:this.mortar});this.art.redraw((i,n,r)=>Yu(i,n,r,t))}async demo(e){if(this.guides.visible=!0,!await this.animate(.6,i=>this.guideMat.opacity=.9*i,e)||!await this.wait(1.6,e))return!1;const t=ls.shift;return!await this.animate(2.2,i=>this.setShift(t*(1-i)),e)||!await this.wait(2.4,e)||!await this.animate(1.4,i=>this.setShift(t*i),e)?!1:this.animate(.5,i=>this.guideMat.opacity=.9*(1-i),e)}resetDemo(){this.guideMat.opacity=0,this.guides.visible=!1,this.setShift(ls.shift)}dispose(){super.dispose(),this.guideMat.dispose()}},hs=class extends Si{centerY=1.6;art=null;framed=null;get viewMode(){return{kind:"front",center:[0,this.centerY,.04],width:this.artWidth,height:this.artHeight}}get artHeight(){return this.artWidth/this.aspect}build(e){this.art=rd(this.aspect,e.textureSize,(t,i,n)=>this.paint(t,i,n),e.renderer),this.framed=qu(this.art.texture,{width:this.artWidth,height:this.artHeight,centerY:this.centerY}),this.root.add(this.framed.group)}repaint(){this.art?.redraw((e,t,i)=>this.paint(e,t,i))}artPoint(e,t,i=0){const n=this.framed?.surfaceZ??.037;return[(e-.5)*this.artWidth,this.centerY+(.5-t)*this.artHeight,n+i]}},Ku=2,Zu={paper:"#f6f4ef",center:"#f08a24",surround:"#7489a3"},od=.07;function ud(e,t,i,n,r,s=0){return Array.from({length:i},(a,o)=>{const u=s+o/i*Math.PI*2;return{x:e+Math.cos(u)*n,y:t+Math.sin(u)*n,r}})}function Cx(e=0){const t=.52+(Ku/2-.1-.52)*e,i=1.48+(Ku/2+.1-1.48)*e;return{left:{center:{x:t,y:.5,r:od},surround:ud(.52,.5,6,.3,.14,Math.PI/6)},right:{center:{x:i,y:.5,r:od},surround:ud(1.48,.5,8,.125,.034)}}}var Rx=class extends hs{id="ebbinghaus";artWidth=2.4;aspect=Ku;surroundAlpha=1;separation=0;paint(e,t,i){const n=i,r=Cx(this.separation);e.fillStyle=Zu.paper,e.fillRect(0,0,t,i);const s=a=>{e.beginPath(),e.arc(a.x*n,a.y*n,a.r*n,0,Math.PI*2),e.fill()};e.globalAlpha=this.surroundAlpha,e.fillStyle=Zu.surround,[...r.left.surround,...r.right.surround].forEach(s),e.globalAlpha=1,e.fillStyle=Zu.center,s(r.left.center),s(r.right.center)}async demo(e){if(!await this.wait(.4,e))return!1;const t=n=>{this.surroundAlpha=1-n,this.repaint()};if(!await this.animate(1.4,t,e))return!1;const i=n=>{this.separation=n,this.repaint()};return!await this.animate(1.6,i,e)||!await this.wait(3,e)||!await this.animate(1.2,n=>i(1-n),e)?!1:this.animate(1,n=>t(1-n),e)}resetDemo(){this.surroundAlpha=1,this.separation=0,this.repaint()}},ld=1.6,ds=.9,cd=.16,hd=36*Math.PI/180;function dd(e,t,i){const n=e-ds/2,r=e+ds/2,s=Math.cos(hd)*cd,a=Math.sin(hd)*cd,o=i?1:-1,u=[];for(const[l,c]of[[n,-1],[r,1]])for(const d of[-1,1])u.push({x0:l,y0:t,x1:l+c*o*s,y1:t+d*a});return{shaft:{x0:n,y0:t,x1:r,y1:t},fins:u}}function Dx(){const e=ld/2;return{outward:dd(e,.32,!0),inward:dd(e,.7,!1)}}var Px="#1d1d1f",Fx="#f6f4ef",fd="#1f8a70",Lx=class extends hs{id="muller-lyer";artWidth=2.2;aspect=ld;finAlpha=1;rulerAlpha=0;rulerPos=0;paint(e,t,i){const n=i,r=Dx();e.fillStyle=Fx,e.fillRect(0,0,t,i),e.lineCap="round";const s=(a,o)=>{e.lineWidth=o*n,e.beginPath(),e.moveTo(a.x0*n,a.y0*n),e.lineTo(a.x1*n,a.y1*n),e.stroke()};e.strokeStyle=Px;for(const a of[r.outward,r.inward])s(a.shaft,.018);e.globalAlpha=this.finAlpha;for(const a of[r.outward,r.inward])for(const o of a.fins)s(o,.018);if(e.globalAlpha=1,this.rulerAlpha>0){const a=r.outward.shaft.y0+(r.inward.shaft.y0-r.outward.shaft.y0)*this.rulerPos,o=r.outward.shaft.x0;e.globalAlpha=this.rulerAlpha,e.fillStyle=fd,e.fillRect(o*n,(a-.045)*n,ds*n,.03*n),e.fillStyle="#ffffff";for(let u=0;u<=10;u++){const l=(o+ds*u/10)*n;e.fillRect(l-.002*n,(a-.045)*n,.004*n,(u%5===0?.03:.015)*n)}e.strokeStyle=fd,e.setLineDash([.012*n,.012*n]),e.lineWidth=.004*n;for(const u of[o,o+ds])e.beginPath(),e.moveTo(u*n,.18*n),e.lineTo(u*n,.84*n),e.stroke();e.setLineDash([]),e.globalAlpha=1}}async demo(e){const t=(i,n,r)=>{this.finAlpha=i,this.rulerAlpha=n,this.rulerPos=r,this.repaint()};return!await this.animate(.8,i=>t(1,i,0),e)||!await this.wait(1,e)||!await this.animate(1.6,i=>t(1,1,i),e)||!await this.wait(1.2,e)||!await this.animate(1.2,i=>t(1-i,1,1),e)||!await this.wait(2.5,e)?!1:this.animate(1,i=>t(i,1-i,1),e)}resetDemo(){this.finAlpha=1,this.rulerAlpha=0,this.rulerPos=0,this.repaint()}},pd={lines:11,lineWidth:.16,discScale:1.5,margin:.06},$u={background:"#000000",line:"#7c7c7c",disc:"#ffffff"};function md(e={}){const t={...pd,...e},n=(1-t.margin*2)/(t.lines-1),r=Array.from({length:t.lines},(u,l)=>t.margin+l*n),s=n*t.lineWidth,a=s*t.discScale/2,o=r.flatMap(u=>r.map(l=>({x:l,y:u})));return{positions:r,lineWidth:s,discRadius:a,discs:o,extent:{min:t.margin-s,max:1-t.margin+s}}}var Bx=class extends hs{id="scintillating-grid";artWidth=1.9;aspect=1;options={...pd};tunables=[{label:"\u7DDA\u306E\u592A\u3055\uFF08\u9593\u9694\u6BD4\uFF09",min:.06,max:.3,step:.005,get:()=>this.options.lineWidth,set:e=>{this.options.lineWidth=e,this.repaint()}},{label:"\u5186\u306E\u76F4\u5F84\uFF08\u7DDA\u5E45\u6BD4\uFF09",min:1,max:2.4,step:.05,get:()=>this.options.discScale,set:e=>{this.options.discScale=e,this.repaint()}}];loupe=new ne(new zc(.058,.066,48),new At({color:16726832,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1}));paint(e,t,i){const n=md(this.options),r=t;e.fillStyle=$u.background,e.fillRect(0,0,t,i),e.fillStyle=$u.line;const s=n.lineWidth*r,a=n.extent.min*r,o=(n.extent.max-n.extent.min)*r;for(const u of n.positions)e.fillRect(u*r-s/2,a,s,o),e.fillRect(a,u*r-s/2,o,s);e.fillStyle=$u.disc;for(const u of n.discs)e.beginPath(),e.arc(u.x*r,u.y*r,n.discRadius*r,0,Math.PI*2),e.fill()}build(e){super.build(e),this.loupe.visible=!1,this.framed?.overlay.add(this.loupe)}focusDisc(){const e=md(this.options),t=e.positions[Math.floor(e.positions.length/2)-1];return{u:t,v:t}}async demo(e){const{u:t,v:i}=this.focusDisc(),[n,r]=this.artPoint(t,i);this.loupe.position.set(n,r-this.centerY,.001),this.loupe.visible=!0;const s=this.loupe.material;if(!await this.animate(.5,u=>s.opacity=u,e)||!await this.wait(.8,e))return!1;const a=this.artPoint(t,i);return!await this.ctx.rig.flyTo({position:[a[0],a[1],a[2]+.55],target:a,fov:30},2,e)||!await this.wait(3.5,e)||!await this.ctx.rig.returnToView(1.6,e)?!1:this.animate(.5,u=>s.opacity=1-u,e)}resetDemo(){this.loupe.visible=!1,this.loupe.material.opacity=0}},Ju=1.5,xa=[0,1,2,3],Ix=[0,1,2,1],gd=[.16,.34,.16,.34],vd={cols:3,rows:2,rings:4,segments:24,sequence:xa};function Qu(e={}){const t={...vd,...e},i=Ju/t.cols,n=1/t.rows,r=Math.min(i,n)*.46,s=[];for(let a=0;a<t.rows;a++)for(let o=0;o<t.cols;o++)s.push({cx:i*(o+.5),cy:n*(a+.5),radius:r,direction:(o+a)%2===0?1:-1});return s}function _d(e={}){const t={...vd,...e},i=[];for(const n of Qu(t)){const r=n.radius*.18,s=(n.radius-r)/t.rings;for(let a=0;a<t.rings;a++){const o=r+a*s,u=o+s*.94,l=Math.max(8,Math.round(t.segments*(o+u)/2/n.radius/2)*2),c=a%2===0?n.direction:-n.direction,d=Math.PI*2/l,h=a*.37;for(let f=0;f<l;f++){let g=h+f*d;for(let _=0;_<4;_++){const m=gd[_]*d,p=t.sequence[_],y=c===1?g:g-m,w=c===1?g+m:g;i.push({cx:n.cx,cy:n.cy,r0:o,r1:u,a0:y,a1:w,step:p,dir:c}),g=c===1?g+m:g-m}}}}return i}var Nx={0:"#0e0e10",1:"#23647f",2:"#ffffff",3:"#f1c75a"},Ux="#8e887c",Ox={0:"\u9ED2",1:"\u6FC3",2:"\u767D",3:"\u6DE1"},zx=class extends hs{id="peripheral-drift";artWidth=2.4;aspect=Ju;sequence=xa;annotate=!1;paint(e,t,i){const n=i;e.fillStyle=Ux,e.fillRect(0,0,t,i);for(const r of Qu())e.fillStyle="#4a463f",e.beginPath(),e.arc(r.cx*n,r.cy*n,r.radius*n*1.02,0,Math.PI*2),e.fill();for(const r of _d({sequence:this.sequence}))e.fillStyle=Nx[r.step],e.beginPath(),e.arc(r.cx*n,r.cy*n,r.r1*n,r.a0,r.a1+.002),e.arc(r.cx*n,r.cy*n,r.r0*n,r.a1+.002,r.a0,!0),e.closePath(),e.fill();this.annotate&&this.paintAnnotation(e,n)}paintAnnotation(e,t){const{u:i,v:n,radius:r,a0:s,seg:a}=this.focus(),o=i*t,u=n*t;e.strokeStyle="#ff2d2d",e.lineWidth=.004*t,e.beginPath(),e.arc(o,u,r.r1*t+.004*t,s,s+a),e.arc(o,u,r.r0*t-.004*t,s+a,s,!0),e.closePath(),e.stroke(),e.fillStyle="#ff2d2d",e.font=`700 ${Math.round(.018*t)}px "Hiragino Sans","Noto Sans JP",sans-serif`,e.textAlign="center";let l=s;for(let c=0;c<4;c++){const d=gd[c]*a,h=l+d/2,f=r.r1+.02;e.fillText(Ox[this.sequence[c]],o+Math.cos(h)*f*t,u+Math.sin(h)*f*t+.006*t),l+=d}}focus(){const e=Qu()[0],t=_d({sequence:this.sequence}).filter(u=>u.cx===e.cx&&u.cy===e.cy&&u.dir===1),i=Math.max(...t.map(u=>u.r1)),n=t.filter(u=>u.r1===i),r=n.slice(0,4),s=r.reduce((u,l)=>u+(l.a1-l.a0),0),a=Math.min(...r.map(u=>u.a0)),o=Math.round((-.6-a)/s)*s;return{u:e.cx,v:e.cy,radius:{r0:n[0].r0,r1:i},a0:a+o,seg:s}}async demo(e){this.annotate=!0,this.repaint();const t=this.focus(),i=t.a0+t.seg/2,n=(t.radius.r0+t.radius.r1)/2,r=(t.u+Math.cos(i)*n)/Ju,s=t.v+Math.sin(i)*n,a=this.artPoint(r,s);return!await this.ctx.rig.flyTo({position:[a[0],a[1],.75],target:a,fov:30},2,e)||!await this.wait(4,e)||(this.sequence=Ix,this.repaint(),!await this.wait(1.5,e))||!await this.ctx.rig.returnToView(1.8,e)||(this.annotate=!1,this.repaint(),!await this.wait(5,e))?!1:(this.sequence=xa,this.repaint(),!0)}resetDemo(){this.sequence=xa,this.annotate=!1,this.repaint()}},ya=20,xd=10,kx=1.25;function ju(e){return e<0?{phase:"idle",progress:0}:e<ya?{phase:"fixate",progress:e/ya}:e<ya+xd?{phase:"after",progress:(e-ya)/xd}:{phase:"idle",progress:0}}var Vx={idle:0,fixate:1,after:2,diagram:3};function Gx(e,t,i){const n=os(42),r=e.createLinearGradient(0,0,0,i*.6);r.addColorStop(0,"#2f7fd6"),r.addColorStop(1,"#9fd3ff"),e.fillStyle=r,e.fillRect(0,0,t,i),e.fillStyle="#ffd21f",e.beginPath(),e.arc(t*.2,i*.2,i*.09,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff";for(const[u,l,c]of[[.55,.16,1],[.8,.26,.8]])for(let d=0;d<5;d++)e.beginPath(),e.arc(t*(u+(d-2)*.035*c),i*(l-d%2*.02),i*.045*c,0,Math.PI*2),e.fill();e.fillStyle="#4f9a3c",e.beginPath(),e.moveTo(0,i*.62);for(let u=0;u<=40;u++){const l=t*u/40;e.lineTo(l,i*(.55-.06*Math.sin(l/t*5.2+.4)))}e.lineTo(t,i),e.lineTo(0,i),e.fill(),e.fillStyle="#2b78c9",e.beginPath(),e.ellipse(t*.72,i*.68,t*.2,i*.06,0,0,Math.PI*2),e.fill(),e.fillStyle="#2f8f2a",e.beginPath(),e.moveTo(0,i*.74),e.quadraticCurveTo(t*.5,i*.68,t,i*.78),e.lineTo(t,i),e.lineTo(0,i),e.fill();const s=t*.3,a=i*.6;e.fillStyle="#f7f1e3",e.fillRect(s,a,t*.12,i*.12),e.fillStyle="#d0302b",e.beginPath(),e.moveTo(s-t*.015,a),e.lineTo(s+t*.06,a-i*.09),e.lineTo(s+t*.135,a),e.fill(),e.fillStyle="#1f4fb0",e.fillRect(s+t*.045,a+i*.05,t*.03,i*.07),e.fillStyle="#7a4a24",e.fillRect(t*.12,i*.52,t*.018,i*.2),e.fillStyle="#237a26",e.beginPath(),e.arc(t*.129,i*.48,i*.1,0,Math.PI*2),e.fill();const o=["#e3212f","#e3212f","#f5c400","#b0288f"];for(let u=0;u<70;u++){const l=n()*t,c=i*(.8+n()*.18);e.strokeStyle="#1f6b1c",e.lineWidth=i*.004,e.beginPath(),e.moveTo(l,c),e.lineTo(l,c+i*.03),e.stroke(),e.fillStyle=o[u%o.length],e.beginPath(),e.arc(l,c,i*(.011+n()*.006),0,Math.PI*2),e.fill()}}function Hx(e,t,i){e.fillStyle="#f7f6f2",e.fillRect(0,0,t,i);const n=(o,u=700)=>`${u} ${Math.round(i*o)}px "Hiragino Sans","Noto Sans JP","Yu Gothic UI",sans-serif`;e.fillStyle="#1c1c1e",e.textAlign="center",e.font=n(.06),e.fillText("\u6B8B\u50CF\u306E\u3057\u304F\u307F\uFF08\u9310\u4F53\u306E\u9806\u5FDC\uFF09",t/2,i*.11);const r=[{title:"\u2460 \u30B7\u30A2\u30F3\u3092\u898B\u3064\u3081\u308B",patch:"#27d3d3",sens:[1,1,1],resp:[.15,.85,.8]},{title:"\u2461 \u7DD1\u3068\u9752\u306E\u9310\u4F53\u304C\u75B2\u308C\u308B",patch:"#27d3d3",sens:[1,.45,.5],resp:[.15,.4,.4]},{title:"\u2462 \u767D\u3092\u898B\u308B\u3068\u8D64\u304F\u611F\u3058\u308B",patch:"#dcdcdc",sens:[1,.45,.5],resp:[.85,.38,.42]}],s=[{label:"L\uFF08\u8D64\uFF09",color:"#e03131"},{label:"M\uFF08\u7DD1\uFF09",color:"#2f9e44"},{label:"S\uFF08\u9752\uFF09",color:"#1c7ed6"}],a=t/3;r.forEach((o,u)=>{const l=a*u+a*.08,c=a*.84;e.fillStyle="#ffffff",e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=i*.004,e.beginPath(),e.roundRect(l,i*.18,c,i*.74,i*.02),e.fill(),e.stroke(),e.fillStyle="#1c1c1e",e.font=n(.042),e.fillText(o.title,l+c/2,i*.26),e.fillStyle=o.patch,e.fillRect(l+c*.3,i*.3,c*.4,i*.14),e.font=n(.032,600),s.forEach((d,h)=>{const f=l+c*(.15+h*.27),g=c*.16,_=i*.84,m=i*.3;e.strokeStyle=d.color,e.lineWidth=i*.004,e.strokeRect(f,_-m*o.sens[h],g,m*o.sens[h]),e.fillStyle=d.color,e.fillRect(f,_-m*o.resp[h],g,m*o.resp[h]),e.fillStyle="#3a3a3f",e.fillText(d.label,f+g/2,i*.895)})}),e.font=n(.03,500),e.fillStyle="#55555a",e.fillText("\u67A0 = \u611F\u5EA6\u3000\u5857\u308A = \u53CD\u5FDC\u306E\u5F37\u3055",t/2,i*.975)}var Wx=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Xx=`
  uniform sampler2D map;
  uniform sampler2D diagram;
  uniform float mode;
  uniform float progress;
  uniform float aspect;
  uniform float chromaGain;
  varying vec2 vUv;

  // BT.601 \u306E\u8F1D\u5EA6\uFF08sRGB \u306E\u5024\u3067\u8A08\u7B97\u3059\u308B\u3002pattern.ts \u306E luma \u3068\u540C\u3058\u5F0F\uFF09
  float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

  float disc(vec2 p, vec2 c, float r) {
    float d = length(p - c);
    return 1.0 - smoothstep(r - fwidth(d), r + fwidth(d), d);
  }

  void main() {
    vec2 p = vec2(vUv.x * aspect, vUv.y);
    vec3 lin = texture2D(map, vUv).rgb;
    vec3 s = sRGBTransferOETF(vec4(lin, 1.0)).rgb;
    float y = luma(s);
    vec3 outS;
    if (mode < 0.5) {
      // \u5F85\u6A5F: \u767D\u9ED2\u3092\u6DE1\u304F\u8868\u793A\u3057\u3001\u518D\u751F\u30DC\u30BF\u30F3\u3092\u63CF\u304F
      outS = mix(vec3(y), vec3(0.97), 0.55);
      vec2 c = vec2(0.5 * aspect, 0.5);
      float ring = disc(p, c, 0.13) - disc(p, c, 0.118);
      outS = mix(outS, vec3(0.15), ring);
      vec2 q = (p - c) / 0.06;
      float tri = step(-0.55, q.x) * step(q.x * 0.55 + abs(q.y) * 0.95, 0.5);
      outS = mix(outS, vec3(0.15), tri);
    } else if (mode < 1.5) {
      // \u88DC\u8272\u306E\u98A8\u666F
      outS = clamp(vec3(y) - (s - vec3(y)) * chromaGain, 0.0, 1.0);
    } else if (mode < 2.5) {
      outS = vec3(y);
    } else {
      outS = sRGBTransferOETF(vec4(texture2D(diagram, vUv).rgb, 1.0)).rgb;
    }

    if (mode > 0.5 && mode < 2.5) {
      // \u6CE8\u8996\u70B9
      vec2 c = vec2(0.5 * aspect, 0.5);
      outS = mix(outS, vec3(1.0), disc(p, c, 0.014));
      outS = mix(outS, vec3(0.0), disc(p, c, 0.009));
    }
    if (mode > 0.5 && mode < 1.5) {
      // \u5186\u5F62\u306E\u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3\uFF08\u53F3\u4E0B\uFF09
      vec2 c = vec2(aspect - 0.1, 0.1);
      vec2 d = p - c;
      float r = length(d);
      float band = smoothstep(0.048, 0.05, r) - smoothstep(0.062, 0.064, r);
      float ang = atan(d.x, d.y) / 6.2831853 + 0.5;
      float remain = step(ang, 1.0 - progress);
      outS = mix(outS, vec3(1.0), band * 0.35);
      outS = mix(outS, vec3(1.0), band * remain);
    }
    gl_FragColor = sRGBTransferEOTF(vec4(outS, 1.0));
    #include <colorspace_fragment>
  }
`,qx=class extends hs{id="afterimage";artWidth=2.3;aspect=1.5;material=null;diagram=null;elapsed=-1;showingDiagram=!1;panelActions=[{id:"start",label:"\u306F\u3058\u3081\u308B",run:()=>this.start()}];paint(e,t,i){Gx(e,t,i)}build(e){super.build(e);const t=document.createElement("canvas");t.width=Math.min(2048,e.textureSize),t.height=Math.round(t.width/this.aspect),Hx(t.getContext("2d"),t.width,t.height),this.diagram=new pi(t),this.diagram.colorSpace=ht,this.diagram.anisotropy=e.renderer.capabilities.getMaxAnisotropy(),this.material=new Ht({uniforms:{map:{value:this.art.texture},diagram:{value:this.diagram},mode:{value:0},progress:{value:0},aspect:{value:this.aspect},chromaGain:{value:kx}},vertexShader:Wx,fragmentShader:Xx,toneMapped:!1});const i=this.framed.art;i.material.dispose(),i.material=this.material}start(){this.showingDiagram=!1,this.elapsed=0,this.sync()}get phase(){return this.showingDiagram?"diagram":ju(this.elapsed).phase}sync(){if(!this.material)return;const{phase:e,progress:t}=this.showingDiagram?{phase:"diagram",progress:0}:ju(this.elapsed);this.material.uniforms.mode.value=Vx[e],this.material.uniforms.progress.value=t}update(e){this.elapsed<0||(this.elapsed+=e,ju(this.elapsed).phase==="idle"&&(this.elapsed=-1),this.sync())}onExitView(){this.elapsed=-1,this.showingDiagram=!1,this.sync()}async demo(e){return this.elapsed=-1,this.showingDiagram=!0,this.sync(),this.wait(12,e)}resetDemo(){this.showingDiagram=!1,this.sync()}dispose(){super.dispose(),this.diagram?.dispose()}},Wt=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Ln=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],yt=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Xt=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],el=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Yx=e=>Math.sqrt(Xt(e,e)),Bn=e=>yt(e,1/Yx(e));function Ea(e,t,i=[0,1,0]){const n=Bn(Ln(e,t)),r=Bn(el(i,n)),s=el(n,r);return{eye:e,right:r,up:s,back:n}}function Kx(e,t,i,n){const r=Ln(n,e),s=Xt(t,r)+i;if(s<=0)throw new Error("homology: \u5206\u6BCD\u304C 0 \u4EE5\u4E0B\u306B\u306A\u308B\u70B9\u304C\u3042\u308A\u307E\u3059");return Wt(e,yt(r,1/s))}function Zx(e,t,i){const n=Ln(i,e.eye),r=-Xt(n,e.back),s=Xt(n,e.right),a=Xt(n,e.up),o=r/t;return Wt(e.eye,Wt(Wt(yt(e.right,s*o),yt(e.up,a*o)),yt(e.back,-r)))}var yd=[0,1.6,0],Ma={x0:-.8,x1:.8,y0:.95,y1:1.85,zFront:-.5,zBack:-1.7},$x=[.55,0,0],Jx=1;function mr(e){return Kx(yd,$x,Jx,e)}var fs=[-.68,Ma.y0,-1.47],tl=[.68,Ma.y0,-1.47],Ed=.42;function Md(e){return[fs[0]+(tl[0]-fs[0])*e,Ma.y0,fs[2]]}var ps={x0:-1.6,x1:.95,z0:-3.25,z1:0,height:2.35};function ms(e,t,i){const n=document.createElement("canvas");n.width=e,n.height=t,i(n.getContext("2d"),e,t);const r=new pi(n);return r.colorSpace=ht,r.anisotropy=8,r}function il(e,t,i,n=.28){const r=e.createRadialGradient(t/2,i/2,Math.min(t,i)*.2,t/2,i/2,Math.hypot(t,i)*.62);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,`rgba(0,0,0,${n})`),e.fillStyle=r,e.fillRect(0,0,t,i)}var Qx="#d8c3a0",jx="#5b4631";function nl(e){return(t,i,n)=>{t.fillStyle=Qx,t.fillRect(0,0,i,n),t.fillStyle="rgba(90,70,40,0.25)",t.fillRect(0,n*.6,i,n*.012),t.fillStyle=jx,t.fillRect(0,n*.92,i,n*.08),t.fillStyle="#efe6d4",t.fillRect(0,0,i,n*.05);for(const r of e){const s=r.x*i,a=r.w*i,o=n*.18,u=n*.36,l=t.createLinearGradient(0,o,0,o+u);l.addColorStop(0,"#6fa8dc"),l.addColorStop(1,"#cfe6f7"),t.fillStyle="#f7f3ea",t.fillRect(s-a*.06,o-u*.06,a*1.12,u*1.12),t.fillStyle=l,t.fillRect(s,o,a,u),t.fillStyle="#f7f3ea",t.fillRect(s+a/2-a*.025,o,a*.05,u),t.fillRect(s,o+u/2-u*.025,a,u*.05)}il(t,i,n,.22)}}var ey=(e,t,i)=>{for(let s=0;s<8;s++)for(let a=0;a<6;a++)e.fillStyle=(s+a)%2===0?"#1c1c1e":"#ece7dc",e.fillRect(s*t/8,a*i/6,t/8+1,i/6+1);il(e,t,i,.3)},ty=(e,t,i)=>{e.fillStyle="#efe8da",e.fillRect(0,0,t,i),e.fillStyle="#fffaf0",e.beginPath(),e.arc(t/2,i/2,i*.12,0,Math.PI*2),e.fill(),il(e,t,i,.35)};function iy(e,t,i,n=16){const r=[],s=[],a=[];for(let u=0;u<=n;u++)for(let l=0;l<=n;l++){const c=l/n,d=u/n,h=[e[0]+t[0]*c+i[0]*d,e[1]+t[1]*c+i[1]*d,e[2]+t[2]*c+i[2]*d];r.push(...mr(h)),s.push(c,d)}for(let u=0;u<n;u++)for(let l=0;l<n;l++){const c=u*(n+1)+l;a.push(c,c+1,c+n+1,c+1,c+n+2,c+n+1)}const o=new vt;return o.setAttribute("position",new Ne(r,3)),o.setAttribute("uv",new Ne(s,2)),o.setIndex(a),o}function Sd(e){const t=new ut,i=g=>new Zr({color:g,emissive:g,emissiveIntensity:.25}),n=Ed,r=new ne(new pu(n*.2,n*.42,20),i(e));r.position.y=n*.42;const s=new ne(new St(n*.07,n*.1,n*.2,16),i(e));s.position.y=n*.68;const a=new ne(new Ri(n*.1,20,14),i(15911328));a.position.y=n*.88;const o=new ne(new Ri(n*.105,20,10,0,Math.PI*2,0,Math.PI/2),i(3876374));o.position.y=n*.9;const u=new St(n*.025,n*.025,n*.24,8),l=new ne(u,i(15911328));l.position.set(-n*.05,n*.12,0);const c=l.clone();c.position.x=n*.05;const d=new St(n*.02,n*.02,n*.26,8),h=new ne(d,i(15911328));h.position.set(-n*.12,n*.64,0),h.rotation.z=-.35;const f=h.clone();return f.position.x=n*.12,f.rotation.z=.35,t.add(r,s,a,o,l,c,h,f),t}var ny=class extends Si{id="ames-room";viewMode={kind:"fixed",position:yd,target:[0,1.33,-1.7],fov:50};colliders=[mi(ps.x0,ps.z0,ps.x1,ps.z1)];captionAnchor={position:[.55,1.3,.006]};floorMark=!1;dollA=Sd(12727855);dollB=Sd(3104706);roof=null;roofSkin=null;ceiling=null;build(e){this.buildRoom(),this.buildBooth(),this.placeDolls(0),this.root.add(this.dollA,this.dollB)}buildRoom(){const e=Ma,t=e.x1-e.x0,i=e.zFront-e.zBack,n=e.y1-e.y0,r=(s,a,o,u)=>{const l=new ne(iy(s,a,o),new At({map:u,side:Kt,toneMapped:!1}));return this.root.add(l),l};r([e.x0,e.y0,e.zFront],[t,0,0],[0,0,-i],ms(1024,768,ey)),this.ceiling=r([e.x0,e.y1,e.zBack],[t,0,0],[0,0,i],ms(1024,768,ty)),r([e.x0,e.y0,e.zBack],[t,0,0],[0,n,0],ms(1024,576,nl([{x:.16,w:.2},{x:.64,w:.2}]))),r([e.x0,e.y0,e.zFront],[0,0,-i],[0,n,0],ms(1024,768,nl([{x:.42,w:.26}]))),r([e.x1,e.y0,e.zBack],[0,0,i],[0,n,0],ms(1024,768,nl([{x:.32,w:.26}])))}buildBooth(){const e=ps,t=.06,i=new At({color:723724}),n=new qe({color:15855594,roughness:.85}),r=new qe({color:1907999,roughness:.6}),s=(p,y,w,v,b,T,C)=>{const x=new xt(v-p,b-y,T-w);x.translate((p+v)/2,(y+b)/2,(w+T)/2);const M=new ne(x,C);return this.root.add(M),M},a={x0:-.16,x1:.16,y0:1.49,y1:1.71};s(e.x0,0,e.z1-t,a.x0,e.height,e.z1,i),s(a.x1,0,e.z1-t,e.x1,e.height,e.z1,i),s(a.x0,0,e.z1-t,a.x1,a.y0,e.z1,i),s(a.x0,a.y1,e.z1-t,a.x1,e.height,e.z1,i),s(e.x0,0,e.z0,e.x1,e.height,e.z0+t,i),s(e.x0,0,e.z0,e.x0+t,e.height,e.z1,i),s(e.x1-t,0,e.z0,e.x1,e.height,e.z1,i),this.roof=s(e.x0,e.height-t,e.z0,e.x1,e.height,e.z1,i);const o=.004,u=e.x1-e.x0,l=e.z1-e.z0,c=e.height,d=new Su;d.moveTo(e.x0,0),d.lineTo(e.x1,0),d.lineTo(e.x1,c),d.lineTo(e.x0,c),d.closePath();const h=new Mu;h.moveTo(a.x0,a.y0),h.lineTo(a.x0,a.y1),h.lineTo(a.x1,a.y1),h.lineTo(a.x1,a.y0),h.closePath(),d.holes.push(h);const f=new ne(new kc(d),n);f.position.z=e.z1+o;const g=(p,y,w,v,b,T)=>{const C=new ne(new Nt(p,y),n);return C.position.set(w,v,b),C.rotation.y=T,this.root.add(C),C};this.root.add(f),g(u,c,(e.x0+e.x1)/2,c/2,e.z0-o,Math.PI),g(l,c,e.x0-o,c/2,(e.z0+e.z1)/2,-Math.PI/2),g(l,c,e.x1+o,c/2,(e.z0+e.z1)/2,Math.PI/2);const _=new ne(new Nt(u,l),n);_.rotation.x=-Math.PI/2,_.position.set((e.x0+e.x1)/2,c+o,(e.z0+e.z1)/2),this.root.add(_),this.roofSkin=_,s(e.x0-2*o,2.05,e.z1,e.x1+2*o,2.12,e.z1+2*o,r);const m=new ne(new zc(.2,.235,48,1),new qe({color:1907999,roughness:.5,side:Kt}));m.position.set(0,1.6,e.z1+.01),m.scale.set(1,.72,1),this.root.add(m)}placeDolls(e){const t=mr(Md(e)),i=mr(Md(1-e));this.dollA.position.set(...t),this.dollB.position.set(...i)}setTopOpen(e){this.roof&&(this.roof.visible=!e),this.roofSkin&&(this.roofSkin.visible=!e),this.ceiling&&(this.ceiling.visible=!e)}async demo(e){if(!await this.wait(.6,e)||!await this.animate(3.2,i=>this.placeDolls(i),e)||!await this.wait(1.5,e))return!1;this.setTopOpen(!0);const t=[-.3,1,-1.45];return!await this.ctx.rig.flyTo({position:[-.3,1.6,.9],target:[-.3,1.2,-1.4]},1.2,e)||!await this.ctx.rig.flyTo({position:[-.25,4.3,-1.2],target:t,fov:55},2.2,e)||!await this.wait(4.5,e)||!await this.ctx.rig.flyTo({position:[-.3,1.6,.9],target:[-.3,1.2,-1.4],fov:50},2,e)||(this.setTopOpen(!1),!await this.ctx.rig.returnToView(1.2,e))?!1:this.animate(2.4,i=>this.placeDolls(1-i),e)}resetDemo(){this.setTopOpen(!1),this.placeDolls(0)}get debugPoints(){const e=t=>{const i=mr(t);return[i[0],i[1]+Ed,i[2]]};return{dollLeftFoot:mr(fs),dollLeftTop:e(fs),dollRightFoot:mr(tl),dollRightTop:e(tl)}}},gs=[0,1.6,4.4],In=[0,1.55,0],ry=22,qt=.8,wd=.14,sy=Bn([2,-1,-1]),ay=Bn([0,1,-1]),oy=Bn([1,1,1]),uy=[11*qt/18,11*qt/18,5*qt/18],Sa=Ea(gs,In),ly=Math.hypot(gs[0]-In[0],gs[1]-In[1],gs[2]-In[2]);function cy(e){const t=Ln(e,uy);return Wt(In,Wt(Wt(yt(Sa.right,Xt(t,sy)),yt(Sa.up,Xt(t,ay))),yt(Sa.back,Xt(t,oy))))}function wa(e){return Zx(Sa,ly,cy(e))}function hy(){const e=wd/2;return[{min:[-e,-e,-e],max:[qt+e,e,e],axis:0},{min:[qt-e,e,-e],max:[qt+e,qt+e,e],axis:1},{min:[qt-e,qt-e,e],max:[qt+e,qt+e,qt+e],axis:2}]}var dy=[0,0,0],fy=[qt,qt,qt],rl=.95,py={"+y":15392715,"+x":12164988,"+z":8021585,"-y":6180930,"-x":9402976,"-z":10784111};function my(e,t,i){const n=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=[2,2,2];r[i]=18;const s=new xt(n[0],n[1],n[2],r[0],r[1],r[2]);s.translate((e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2);const a=s.getAttribute("position"),o=s.getAttribute("normal"),u=new Float32Array(a.count*3),l=new Ie;for(let c=0;c<a.count;c++){const d=[o.getX(c),o.getY(c),o.getZ(c)],h=d.findIndex(_=>Math.abs(_)>.5),f=`${d[h]>0?"+":"-"}${"xyz"[h]}`;l.set(py[f]),u.set([l.r,l.g,l.b],c*3);const g=wa([a.getX(c),a.getY(c),a.getZ(c)]);a.setXYZ(c,g[0],g[1],g[2])}return s.setAttribute("color",new ui(u,3)),s.deleteAttribute("normal"),s.deleteAttribute("uv"),s.computeBoundingSphere(),s}var gy=class extends Si{id="impossible-triangle";viewMode={kind:"fixed",position:gs,target:In,fov:ry};colliders=[mi(-.4,-.4,.4,.4)];captionAnchor={position:[0,.72,.356]};debugPoints={cornerA:wa(dy),cornerE:wa(fy)};build(e){this.root.add(sd(.7,.7,rl));const t=new At({vertexColors:!0,toneMapped:!1});for(const s of hy()){const a=new ne(my(s.min,s.max,s.axis),t);a.name="beam",this.root.add(a)}const i=wa([qt/2,-wd/2,0]),n=i[1]-rl,r=new ne(new St(.012,.012,n,10),new qe({color:2763308,metalness:.7,roughness:.4}));r.position.set(i[0],rl+n/2,i[2]),this.root.add(r)}async demo(e){return!await this.wait(.4,e)||!await this.ctx.rig.flyTo({position:[3.4,2.1,1.3],target:In,via:[3.6,2,4.2],fov:30},3,e)||!await this.wait(4.5,e)?!1:this.ctx.rig.returnToView(2.4,e)}},Nn=5,Bi=.2,wi=Nn*Bi;function sl(e){const t=e/255;return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function vy(e){const t=e<=.0031308?e*12.92:1.055*Math.pow(e,.4166666666666667)-.055;return Math.round(Math.min(1,Math.max(0,t))*255)}var vs=120,bd=220,Ad=sl(vs)/sl(bd),Ii={u:Bi,v:0,radius:.085,height:.42},_s=[.75,.6,.3],ba=(()=>{const e=Math.hypot(_s[0],_s[2]);return[-_s[0]/e,-_s[2]/e]})(),_y=3.2*Bi,Td=.9*Bi,Cd=.45*Bi,Aa={i:0,j:3},Ta={i:1,j:1};function Ca({i:e,j:t}){return{u:(e-(Nn-1)/2)*Bi,v:(t-(Nn-1)/2)*Bi}}function xy({i:e,j:t}){return(e+t)%2===0}function yy(e,t,i){const n=Math.min(1,Math.max(0,(i-e)/(t-e)));return n*n*(3-2*n)}function Ey(e,t){const i=e-Ii.u,n=t-Ii.v,r=Math.min(_y,Math.max(0,i*ba[0]+n*ba[1])),s=Ii.u+ba[0]*r,a=Ii.v+ba[1]*r,o=Math.hypot(e-s,t-a),u=yy(Td-Cd,Td+Cd,o);return Ad+(1-Ad)*u}function My(e,t){const i=Math.min(Nn-1,Math.max(0,Math.floor(e/Bi+Nn/2))),n=Math.min(Nn-1,Math.max(0,Math.floor(t/Bi+Nn/2))),r=xy({i,j:n})?bd:vs;return vy(sl(r)*Ey(e,t))}var al=.9,ol=.03,xs=al+ol;function Sy(){const e=new St(Ii.radius,Ii.radius,Ii.height,48,1),t=new R(..._s).normalize(),i=new Ie(5808218),n=e.getAttribute("normal"),r=new Float32Array(n.count*3),s=new R;for(let a=0;a<n.count;a++){s.set(n.getX(a),n.getY(a),n.getZ(a));const o=.32+.68*Math.max(0,s.dot(t));r.set([i.r*o,i.g*o,i.b*o],a*3)}return e.setAttribute("color",new ui(r,3)),e.translate(Ii.u,xs+Ii.height/2,Ii.v),e}function ul(e,t){const i=t/5;return[e.i*i,e.j*i,i,i]}var wy=class extends Si{id="checker-shadow";viewMode={kind:"fixed",position:[0,2,1.55],target:[0,xs,-.05],fov:36};colliders=[mi(-.6,-.6,.6,.6)];captionAnchor={position:[0,.68,.606]};debugPoints=(()=>{const e=Ca(Aa),t=Ca(Ta);return{tileA:[e.u,xs+.001,e.v],tileB:[t.u,xs+.001,t.v]}})();canvas=null;base=null;texture=null;cylinderMat=new At({vertexColors:!0,toneMapped:!1});band=0;dim=0;build(e){this.root.add(sd(1.2,1.2,al));const t=Math.min(2048,e.textureSize),i=document.createElement("canvas");i.width=i.height=t;const n=i.getContext("2d"),r=n.createImageData(t,t);for(let u=0;u<t;u++){const l=(u+.5)/t*wi-wi/2;for(let c=0;c<t;c++){const d=(c+.5)/t*wi-wi/2,h=My(d,l),f=(u*t+c)*4;r.data[f]=r.data[f+1]=r.data[f+2]=h,r.data[f+3]=255}}n.putImageData(r,0,0),n.font=`800 ${Math.round(t*.05)}px "Helvetica Neue",Arial,sans-serif`,n.textBaseline="top",n.lineWidth=t*.006;for(const[u,l]of[["A",Aa],["B",Ta]]){const[c,d]=ul(l,t);n.strokeStyle="rgba(255,255,255,0.9)",n.strokeText(u,c+t*.012,d+t*.01),n.fillStyle="#111111",n.fillText(u,c+t*.012,d+t*.01)}this.canvas=i,this.base=n.getImageData(0,0,t,t),this.texture=new pi(i),this.texture.colorSpace=ht,this.texture.anisotropy=e.renderer.capabilities.getMaxAnisotropy();const s=new ne(new Nt(wi,wi),new At({map:this.texture,toneMapped:!1}));s.rotation.x=-Math.PI/2,s.position.y=xs,s.name="board";const a=new ne(new xt(wi,ol,wi),[7039851,7039851,10132122,10132122,5263440,5263440].map(u=>new At({color:u,toneMapped:!1})));a.position.y=al+ol/2-5e-4;const o=new ne(Sy(),this.cylinderMat);this.root.add(s,a,o)}repaint(){if(!this.canvas||!this.base||!this.texture)return;const e=this.canvas.getContext("2d"),t=this.canvas.width;if(e.putImageData(this.base,0,0),this.dim>0&&(e.save(),e.beginPath(),e.rect(0,0,t,t),e.rect(...ul(Aa,t)),e.rect(...ul(Ta,t)),e.clip("evenodd"),e.fillStyle=`rgba(0,0,0,${.72*this.dim})`,e.fillRect(0,0,t,t),e.restore()),this.band>0){const n=Ca(Aa),r=Ca(Ta),s=a=>(a+wi/2)/wi*t;e.globalAlpha=this.band,e.strokeStyle=`rgb(${vs},${vs},${vs})`,e.lineWidth=Bi/wi*t*.3,e.lineCap="butt",e.beginPath(),e.moveTo(s(n.u),s(n.v)),e.lineTo(s(r.u),s(r.v)),e.stroke(),e.globalAlpha=1}this.texture.needsUpdate=!0;const i=1-.72*this.dim;this.cylinderMat.color.setRGB(i,i,i)}async demo(e){const t=(i,n)=>{this.band=i,this.dim=n,this.repaint()};return!await this.wait(.5,e)||!await this.animate(1.2,i=>t(i,0),e)||!await this.wait(2.5,e)||!await this.animate(1.2,i=>t(1,i),e)||!await this.wait(4,e)?!1:this.animate(1.2,i=>t(1-i,1-i),e)}resetDemo(){this.band=0,this.dim=0,this.repaint()}},gr={x:0,y:1.6,z:3.2},vr={x:0,y:1.6,z:0},by=50,Ay=1.5,_r={width:3.4,height:2,centerY:1.62,depth:.03},ll={w:1.1,h:1.3},Rd=.35,Dd=[-.78,.78].map(e=>({cx:e,cy:1.62,back:ll,front:{w:ll.w*Rd,h:ll.h*Rd},depth:.42}));function Pd(e){const t=_r.depth,i=_r.depth+e.depth,n=(r,s,a)=>[{x:e.cx-r/2,y:e.cy+s/2,z:a},{x:e.cx+r/2,y:e.cy+s/2,z:a},{x:e.cx+r/2,y:e.cy-s/2,z:a},{x:e.cx-r/2,y:e.cy-s/2,z:a}];return{back:n(e.back.w,e.back.h,t),front:n(e.front.w,e.front.h,i)}}function Ty(e,t,i,n){const r=(e.x-t.x)*(i.y-n.y)-(e.y-t.y)*(i.x-n.x),s=((e.x-i.x)*(i.y-n.y)-(e.y-i.y)*(i.x-n.x))/r;return{x:e.x+s*(t.x-e.x),y:e.y+s*(t.y-e.y)}}function Cy(e,t){const i=Ty(e[0],t[0],e[2],t[2]),n=Math.hypot(t[0].x-i.x,t[0].y-i.y)/Math.hypot(e[0].x-i.x,e[0].y-i.y),r=a=>1/(1+a*(1/n-1));return{vp:i,lf:n,lambda:r,at:(a,o)=>{const u=r(o);return{x:i.x+(a.x-i.x)*u,y:i.y+(a.y-i.y)*u}}}}var Fd=1.7,Ld=["#e9c7a2","#c7d6e6","#f1e1b0","#dcb4b0","#b9d5bf","#d8cde6"];function ci(e,t,i){e.fillStyle=i,e.beginPath(),t.forEach((n,r)=>r===0?e.moveTo(n.x,n.y):e.lineTo(n.x,n.y)),e.closePath(),e.fill()}var en=(e,t,i)=>({x:e.x+(t.x-e.x)*i,y:e.y+(t.y-e.y)*i});function Ry(e,t,i,n){const r=os(5),s=o=>td(n,o,t,i),a=e.createLinearGradient(0,0,0,i);a.addColorStop(0,"#6ea7de"),a.addColorStop(1,"#e3eef4"),e.fillStyle=a,e.fillRect(0,0,t,i),e.fillStyle="rgba(255,255,255,0.8)";for(let o=0;o<9;o++){const u=r()*t,l=r()*i*.5;for(let c=0;c<4;c++)e.beginPath(),e.ellipse(u+c*t*.02,l+c%2*i*.01,t*.03,i*.025,0,0,Math.PI*2),e.fill()}Dd.forEach((o,u)=>{const l=Pd(o),c=l.back.map(s),d=l.front.map(s),h=Cy(c,d),[f,g,_,m]=c,p=e.createLinearGradient(0,f.y,0,d[0].y);p.addColorStop(0,"#5f9bd6"),p.addColorStop(1,"#cfe3f1"),ci(e,[f,g,d[1],d[0]],p),ci(e,[m,_,d[2],d[3]],"#4b4b52");const y=(D,G,L,O,$)=>ci(e,[h.at(en(m,_,D),L),h.at(en(m,_,G),L),h.at(en(m,_,G),O),h.at(en(m,_,D),O)],$);y(0,.14,0,1,"#a9a49b"),y(.86,1,0,1,"#a9a49b");for(let D=0;D<1;D+=.1)y(.485,.515,D,D+.05,"#f2efe6");const w=(D,G,L)=>{const O=(V,ie)=>h.at(en(D,G,ie),V);ci(e,[O(0,0),O(1,0),O(1,1),O(0,1)],"#cfe3f1");const $=[0,.2,.42,.6,.78,1];for(let V=0;V<$.length-1;V++){const ie=$[V],X=$[V+1],J=.68+(V*37+L*11)%10/30,j=Ld[(V+L*2)%Ld.length];ci(e,[O(ie,0),O(X,0),O(X,J),O(ie,J)],j),ci(e,[O(ie,J-.025),O(X,J-.025),O(X,J),O(ie,J)],"rgba(0,0,0,0.25)");const Te=5,Se=3;for(let rt=0;rt<Te;rt++){const Be=.12+rt*(J-.18)/Te,q=Be+(J-.18)/Te*.55;for(let re=0;re<Se;re++){const se=ie+(X-ie)*(re+.25)/Se,Ae=ie+(X-ie)*(re+.75)/Se;ci(e,[O(se,Be),O(Ae,Be),O(Ae,q),O(se,q)],"#2f4a6b"),ci(e,[O(se,q-(q-Be)*.3),O(Ae,q-(q-Be)*.3),O(Ae,q),O(se,q)],"#6f8fb0")}}ci(e,[O(ie+(X-ie)*.4,0),O(ie+(X-ie)*.6,0),O(ie+(X-ie)*.6,.09),O(ie+(X-ie)*.4,.09)],"#5a3d2b")}};w(m,f,u*3+1),w(_,g,u*3+2);const[v,b,T,C]=d,x=e.createLinearGradient(0,v.y,0,C.y);x.addColorStop(0,"#b9d7ee"),x.addColorStop(1,"#eef4f6"),ci(e,[v,b,T,C],x);const M=b.x-v.x,F=C.y-v.y;for(let D=0;D<9;D++){const G=v.x+M*D/9,L=F*(.18+(D*7+u*3)%5*.06);ci(e,[{x:G,y:C.y},{x:G+M/9+.5,y:C.y},{x:G+M/9+.5,y:C.y-L},{x:G,y:C.y-L}],D%2?"#9fb3c4":"#8aa0b3")}const P=v.x+M*(u===0?.68:.32);ci(e,[{x:P-M*.03,y:C.y},{x:P+M*.03,y:C.y},{x:P+M*.012,y:v.y+F*.18},{x:P,y:v.y+F*.08},{x:P-M*.012,y:v.y+F*.18}],"#6d8196"),ci(e,[en(C,T,.3),en(C,T,.7),en(C,T,.52),en(C,T,.48)],"#4b4b52")})}var Dy=class extends Si{id="reverspective";viewMode={kind:"fixed",position:[gr.x,gr.y,gr.z],target:[vr.x,vr.y,vr.z],fov:by,allowShift:Ay};colliders=[mi(-_r.width/2-.05,0,_r.width/2+.05,.55)];captionAnchor={position:[_r.width/2+.35,1.3,.005]};wire=new ut;build(e){const t=new Qt(40,Fd,.1,20);t.position.set(gr.x,gr.y,gr.z),t.lookAt(vr.x,vr.y,vr.z),t.updateMatrixWorld(!0);const i=Math.min(2048,e.textureSize*2),n=Math.round(i/Fd),r=document.createElement("canvas");r.width=i,r.height=n,Ry(r.getContext("2d"),i,n,t);const s=new pi(r);s.colorSpace=ht,s.anisotropy=e.renderer.capabilities.getMaxAnisotropy();const a=vx(s,t,{outside:16053231,side:Kt}),o=_r,u=new Nt(o.width,o.height);u.translate(0,o.centerY,o.depth);const l=new ne(u,a),c=new ne(new xt(o.width+.04,o.height+.04,o.depth),new qe({color:1907999,roughness:.5}));c.position.set(0,o.centerY,o.depth/2-.001),this.root.add(c,l);for(const d of Dd){const{back:h,front:f}=Pd(d),g=[[h[0],h[1],f[1],f[0]],[h[1],h[2],f[2],f[1]],[h[2],h[3],f[3],f[2]],[h[3],h[0],f[0],f[3]],[f[0],f[1],f[2],f[3]]],_=[];for(const w of g)for(const v of[0,1,2,0,2,3])_.push(w[v].x,w[v].y,w[v].z);const m=new vt;m.setAttribute("position",new Ne(_,3));const p=new ne(m,a);p.name="frustum",this.root.add(p);const y=new op(new hp(m),new mc({color:16738816,toneMapped:!1}));this.wire.add(y)}this.wire.visible=!1,this.root.add(this.wire)}async demo(e){return this.wire.visible=!0,!await this.wait(1.2,e)||!await this.ctx.rig.flyTo({position:[2.9,1.9,.9],target:[-.2,1.6,.2],via:[2.8,1.8,3.1],fov:42},3,e)||!await this.wait(4.5,e)||!await this.ctx.rig.returnToView(2.6,e)?!1:this.wait(.8,e)}resetDemo(){this.wire.visible=!1}};function Ni(e,t,i,n){const r=new R(...e),s=new R(...t),a=r.distanceTo(s),o=new lp(i,a,6,16),u=new ne(o,n);return u.position.copy(r).add(s).multiplyScalar(.5),u.quaternion.setFromUnitVectors(new R(0,1,0),s.clone().sub(r).normalize()),u}function Py(e){const t=new ut,i=[],n=[],r=(u,l)=>{u.push(l),t.add(l)};r(i,Ni([0,.05,0],[.02,.48,0],.055,e)),r(i,Ni([.02,.48,0],[.04,.9,0],.065,e)),r(i,Ni([.06,.92,.02],[.2,.9,.36],.065,e)),r(i,Ni([.2,.9,.36],[.44,.72,.52],.055,e)),r(i,Ni([.44,.72,.52],[.52,.72,.62],.035,e)),r(n,Ni([.04,.95,0],[.02,1.38,-.02],.12,e));const s=new ne(new Ri(.1,20,14),e);s.position.set(0,1.58,-.03),r(n,s);const a=new ne(new Ri(.075,16,12),e);a.position.set(-.02,1.66,-.12),r(n,a),r(n,Ni([.1,1.33,0],[.32,1.55,.05],.04,e)),r(n,Ni([.32,1.55,.05],[.4,1.82,.1],.035,e)),r(n,Ni([-.1,1.33,0],[-.38,1.3,-.12],.04,e)),r(n,Ni([-.38,1.3,-.12],[-.62,1.36,-.22],.035,e));const o=new ne(new pu(.2,.22,20,1,!0),e);return o.position.set(.04,.93,0),r(n,o),{group:t,legs:i,body:n}}var cl=1.3,hl=1.9,Bd=1.55,Id=.55,Fy=16513004,Ly=class extends Si{id="shadow-spinner";viewMode={kind:"front",center:[0,Bd,.04],width:cl,height:hl,fill:.78};rt=null;scene=new Jo;camera=new ua(-.95,.95,1.39,-1.39,.1,10);silhouette=new At({color:657930});shaded=new Zr({color:9143936});turntable=new ut;figure=null;cue=new ut;angle=0;build(e){const t=e.quality==="low"?384:512;this.rt=new ai(t,Math.round(t*hl/cl),{samples:4}),this.scene.background=new Ie(Fy),this.scene.add(new Yc(16777215,4473924,1.6));const i=new eh(16777215,2.2);i.position.set(1.5,2,3),this.scene.add(i),this.figure=Py(this.silhouette),this.turntable.add(this.figure.group);const n=new ne(new St(.42,.42,.02,48),new Zr({color:12104360}));n.position.y=0;const r=new ne(new Ri(.035,12,8),new Zr({color:14237995,emissive:5902856}));r.position.set(.38,.03,0),this.cue.add(n,r),this.cue.visible=!1,this.turntable.add(this.cue),this.turntable.position.y=-.95,this.scene.add(this.turntable),this.camera.position.set(0,.35,4),this.camera.lookAt(0,0,0);const s=qu(this.rt.texture,{width:cl,height:hl,centerY:Bd,color:2763308,glow:!0});this.root.add(s.group),this.renderShadow(e.renderer)}renderShadow(e){if(!this.rt)return;const t=e.getRenderTarget(),i=e.xr.enabled;e.xr.enabled=!1,e.setRenderTarget(this.rt),e.render(this.scene,this.camera),e.setRenderTarget(t),e.xr.enabled=i}update(e,t){const i=t.reducedMotion?Id*.5:Id;this.angle=(this.angle+e*i*Math.PI*2)%(Math.PI*2),this.turntable.rotation.y=this.angle,this.renderShadow(t.renderer)}setCue(e){if(this.figure){for(const t of this.figure.legs)t.material=e?this.shaded:this.silhouette;this.cue.visible=e}}async demo(e){return this.setCue(!0),this.wait(9,e)}resetDemo(){this.setCue(!1)}dispose(){super.dispose(),this.rt?.dispose(),this.scene.traverse(e=>{const t=e;t.isMesh&&t.geometry.dispose()}),this.silhouette.dispose(),this.shaded.dispose()}},Nd=class If extends ne{constructor(t,i={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,r=i.color!==void 0?new Ie(i.color):new Ie(8355711),s=i.textureWidth||512,a=i.textureHeight||512,o=i.clipBias||0,u=i.shader||If.ReflectorShader,l=i.multisample!==void 0?i.multisample:4,c=new $i,d=new R,h=new R,f=new R,g=new $e,_=new R(0,0,-1),m=new pt,p=new R,y=new R,w=new pt,v=new $e,b=new ai(s,a,{samples:l,type:_i}),T=new Ht({name:u.name!==void 0?u.name:"unspecified",uniforms:Hc.clone(u.uniforms),fragmentShader:u.fragmentShader,vertexShader:u.vertexShader});T.uniforms.tDiffuse.value=b.texture,T.uniforms.color.value=r,T.uniforms.textureMatrix.value=v,this.material=T,this.onBeforeRender=function(C,x,M){const F=this.getReflectionCamera(M);if(h.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(h,f),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(h),g.extractRotation(M.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(f),y.subVectors(h,_),y.reflect(d).negate(),y.add(h),F.position.copy(p),F.up.set(0,1,0),F.up.applyMatrix4(g),F.up.reflect(d),F.lookAt(y),F.far=M.far,F.updateMatrixWorld(),F.projectionMatrix.copy(M.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(F.projectionMatrix),v.multiply(F.matrixWorldInverse),v.multiply(n.matrixWorld),c.setFromNormalAndCoplanarPoint(d,h),c.applyMatrix4(F.matrixWorldInverse),m.set(c.normal.x,c.normal.y,c.normal.z,c.constant);const D=F.projectionMatrix;F.isOrthographicCamera?(w.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],w.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],w.z=-M.far,w.w=1):(w.x=(Math.sign(m.x)+D.elements[8])/D.elements[0],w.y=(Math.sign(m.y)+D.elements[9])/D.elements[5],w.z=-1,w.w=(1+D.elements[10])/D.elements[14]),m.multiplyScalar(2/m.dot(w)),D.elements[2]=m.x,D.elements[6]=m.y,F.isOrthographicCamera?(D.elements[10]=m.z-o,D.elements[14]=m.w-1):(D.elements[10]=m.z+1-o,D.elements[14]=m.w),n.visible=!1;const G=C.getRenderTarget(),L=C.xr.enabled,O=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(b),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(x,F),C.xr.enabled=L,C.shadowMap.autoUpdate=O,C.setRenderTarget(G);const $=M.viewport;$!==void 0&&C.state.viewport($),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()},this.getReflectionCamera=function(C){let x=this._reflectionCameras.get(C);return x===void 0&&(x=C.clone(),this._reflectionCameras.set(C,x)),x}}};Nd.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function By(e,t){return[e[0],e[1],2*t-e[2]]}function Iy(e,t=4096){return Array.from({length:t},(i,n)=>{const r=n/t*Math.PI*2;return[e*Math.cos(r),e*Math.sin(r)]})}function Ud(e,t=4096){const i=e/16;return Array.from({length:t},(n,r)=>{const s=r/t*Math.PI*2,a=16*Math.sin(s)**3,o=13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s);return[a*i,(o+2.5)*i]})}function Od(e,t,i){const n=Bn(Ln(t,e)),r=[1,0,0],s=el(n,r);return Bn(Wt(yt(r,Math.cos(i)),yt(s,Math.sin(i))))}function dl(e,t,i){const n=yt(e.back,-1),r=Xt(t,n),s=Xt(t,e.right),a=Xt(t,e.up),o=[],u=l=>r+s*l[0]+a*l[1];for(let l=0;l<i.length;l++){const c=i[l],d=i[(l+1)%i.length],h=u(c),f=u(d);if(h===0||h*f<0){const g=h/(h-f);o.push([c[0]+(d[0]-c[0])*g,c[1]+(d[1]-c[1])*g])}}return o.sort((l,c)=>c[1]-l[1])}function zd(e,t,i,n){const r=Ln(e,i),s=Xt(t,t),a=Xt(t,n),o=Xt(n,n),u=Xt(t,r),l=Xt(n,r),c=s*o-a*a,d=(a*l-o*u)/c,h=(s*l-a*u)/c;return yt(Wt(Wt(e,yt(t,d)),Wt(i,yt(n,h))),.5)}function Ra(e,t){return Wt(yt(e.back,-1),Wt(yt(e.right,t[0]),yt(e.up,t[1])))}function kd(e,t,i,n){let r=0,s=.6;for(let a=0;a<60;a++){const o=(r+s)/2;dl(i,Od(e,t,o),n).length>=2?r=o:s=o}return r}function Ny(e,t=180){const i=e.eyeA,n=By(i,e.mirrorZ),r=Ea(i,e.target),s=Ea(n,e.target),a=Math.hypot(...Ln(e.target,i)),o=Iy(e.radius/a),u=kd(i,n,r,o);let l=.01,c=1;for(let _=0;_<50;_++){const m=(l+c)/2;kd(i,n,s,Ud(m,1024))<u?l=m:c=m}const d=Ud((l+c)/2),h=[],f=[];for(let _=0;_<=t;_++){const m=u*Math.sin(-Math.PI/2+Math.PI*_/t)*.999999,p=Od(i,n,m),y=dl(r,p,o),w=dl(s,p,d);if(y.length<2||w.length<2)continue;const v=y[0],b=y[y.length-1],T=w[0],C=w[w.length-1];f.push(zd(i,Ra(r,v),n,Ra(s,C))),h.push(zd(i,Ra(r,b),n,Ra(s,T)))}return{points:[...h,...f.slice().reverse()],near:h,far:f,basisA:r,basisB:s,eyeB:n,circle:o,heart:d}}var Ot={eye:[0,1.6,1.8],mirrorZ:-.35,target:[0,.3,0],radius:.1,plinthTop:.15};function Uy(){return Ny({eyeA:Ot.eye,mirrorZ:Ot.mirrorZ,target:Ot.target,radius:Ot.radius})}function Oy(e,t){let i=0;for(let u=0;u<e.length;u++){const l=e[u],c=e[(u+1)%e.length];i+=l[0]*c[2]-c[0]*l[2]}const n=i>0?[...e].reverse():e,r=[],s=[];for(const u of n)r.push(u[0],u[1],u[2],u[0],t,u[2]);const a=n.length;for(let u=0;u<a;u++){const l=u*2,c=l+1,d=(u+1)%a*2,h=d+1;s.push(l,c,d,d,c,h)}const o=new vt;return o.setAttribute("position",new Ne(r,3)),o.setIndex(s),o.computeVertexNormals(),o}var zy=class extends Si{id="circle-heart";viewMode={kind:"fixed",position:Ot.eye,target:[0,.31,-.3],fov:24};colliders=[mi(-.55,Ot.mirrorZ-.08,.55,.32)];captionAnchor={position:[.75,1.05,.2],rotationY:-.35,stand:!0};spinner=new ut;mirror=null;mirrorStandIn=null;get debugPoints(){return{tubeCenter:Ot.target}}build(e){const t=Uy(),i=new ne(new xt(.6,Ot.plinthTop,.56),new qe({color:2829102,roughness:.7}));i.position.set(0,Ot.plinthTop/2,0),this.root.add(i);const n=Oy(t.points,Ot.plinthTop),r=new ne(n,new qe({color:15986921,roughness:.45})),s=new ne(n,new qe({color:14969423,roughness:.6,side:Lt})),a=new bc(t.points.map(g=>new R(...g)),!0,"centripetal"),o=new ne(new Wp(a,480,.0035,8,!0),new qe({color:1779026,roughness:.4}));this.spinner.position.set(Ot.target[0],0,Ot.target[2]);for(const g of[r,s,o])g.position.set(-Ot.target[0],0,-Ot.target[2]),this.spinner.add(g);this.root.add(this.spinner);const u=.9,l=.85,c=new le;e.renderer.getDrawingBufferSize(c);const d=is[e.quality].reflectorScale;this.mirror=new Nd(new Nt(u,l),{clipBias:.003,textureWidth:Math.max(256,Math.round(c.x*d)),textureHeight:Math.max(256,Math.round(c.y*d)),color:15331054}),this.mirror.position.set(0,.1+l/2,Ot.mirrorZ),this.mirror.visible=!1,this.mirrorStandIn=new ne(new Nt(u,l),new qe({color:10134182,metalness:.9,roughness:.15})),this.mirrorStandIn.position.copy(this.mirror.position);const h=new ne(new xt(u+.06,l+.06,.04),new qe({color:1907999,roughness:.5}));h.position.set(0,.1+l/2,Ot.mirrorZ-.021);const f=new ne(new xt(u+.06,.1,.12),new qe({color:1907999,roughness:.5}));f.position.set(0,.05,Ot.mirrorZ-.04),this.root.add(this.mirror,this.mirrorStandIn,h,f)}setActive(e){this.mirror&&(this.mirror.visible=e),this.mirrorStandIn&&(this.mirrorStandIn.visible=!e)}async demo(e){return!await this.wait(.6,e)||!await this.animate(3.2,i=>this.spinner.rotation.y=Math.PI*i,e)||!await this.wait(3.2,e)||!await this.animate(2.4,i=>this.spinner.rotation.y=Math.PI*(1-i),e)||!await this.ctx.rig.flyTo({position:[0,1.25,.02],target:[0,.2,0],fov:30},2.4,e)||!await this.wait(4,e)?!1:this.ctx.rig.returnToView(2.2,e)}resetDemo(){this.spinner.rotation.y=0}dispose(){super.dispose(),this.mirror?.dispose()}},Un=[.28,1,1],fl=[1,1,1],ky=.38,Vy=.85,Vd={strawberry:[.8,.235,.245],seed:[.78,.72,.36],apple:[.72,.21,.225],cherry:[.62,.185,.2],calyx:[.16,.42,.12],grape:[.36,.56,.26],stem:[.3,.22,.12],plate:[.82,.8,.76],cloth:[.8,.78,.72],table:[.46,.33,.2],wall:[.8,.77,.72],wainscot:[.42,.4,.36],floor:[.3,.28,.25],ceiling:[.78,.76,.72],frame:[.2,.15,.1],canvasBlue:[.2,.42,.62],canvasGreen:[.3,.52,.34],canvasSand:[.7,.62,.45]};function Gd(e,t=0){return e[0]>e[1]+t&&e[0]>e[2]+t}var Xe={x0:-2.9,x1:2.9,z0:-2.2,z1:3.4,height:3},hi=.76,Da={lightColor:{value:new Ie().setRGB(...Un)},lightDir:{value:new R(-.35,.85,.4).normalize()}},Gy=new R(-.35,.85,.4).normalize(),Hy=`
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vNormal = normalize(mat3(modelMatrix) * normal);
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Wy=`
  uniform vec3 albedo;
  uniform vec3 lightColor;
  uniform vec3 lightDir;
  uniform float ambient;
  uniform float diffuse;
  uniform float seeds;
  uniform vec3 seedAlbedo;
  varying vec3 vNormal;
  varying vec2 vUv;
  void main() {
    vec3 n = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
    float d = max(dot(n, lightDir), 0.0);
    vec3 a = albedo;
    if (seeds > 0.5) {
      // \u30A4\u30C1\u30B4\u306E\u7A2E\uFF08\u4E92\u3044\u9055\u3044\u306E\u70B9\uFF09\u3002\u7A2E\u306E\u30A2\u30EB\u30D9\u30C9\u3082\u8D64\u304C\u512A\u4F4D\u306B\u306A\u3089\u306A\u3044\u8272\u306B\u3059\u308B
      vec2 g = vec2(vUv.x * 20.0, vUv.y * 8.0);
      vec2 f = fract(g + vec2(0.5 * floor(g.y), 0.0)) - 0.5;
      float m = smoothstep(0.2, 0.12, length(f * vec2(1.0, 1.5)));
      m *= step(0.1, vUv.y) * step(vUv.y, 0.88);
      a = mix(a, seedAlbedo, m);
    }
    vec3 c = a * lightColor * (ambient + diffuse * d);
    gl_FragColor = vec4(c, 1.0);
    #include <colorspace_fragment>
  }
`;function jt(e,t=ki){const i=Vd[e];return new Ht({uniforms:{albedo:{value:new R(i[0],i[1],i[2])},lightColor:Da.lightColor,lightDir:Da.lightDir,ambient:{value:ky},diffuse:{value:Vy},seeds:{value:e==="strawberry"?1:0},seedAlbedo:{value:new R(...Vd.seed)}},vertexShader:Hy,fragmentShader:Wy,toneMapped:!1,side:t})}function Xy(){const e=new ut,t=[];for(let r=0;r<=16;r++){const s=r/16,a=.029*Math.sin(Math.PI*Math.pow(s,.75))*(.55+.45*s);t.push(new le(Math.max(5e-4,a),.056*s))}const i=new ne(new Gp(t,32),jt("strawberry")),n=new ne(new pu(.02,.012,7),jt("calyx"));return n.position.y=.056,e.add(i,n),e}function Hd(e){const t=new ut,i=new ne(new Ri(e,28,20),jt("apple"));i.scale.set(1,.9,1);const n=new ne(new St(.003,.003,.03,6),jt("stem"));n.position.y=e*.95,n.rotation.z=.25;const r=new ne(new Ri(.018,10,6),jt("calyx"));return r.scale.set(1,.2,.5),r.position.set(.012,e*1.02,0),t.add(i,n,r),t}var qy=class extends Si{id="colorless-fruit";viewMode={kind:"fixed",position:[0,1.28,1.2],target:[.02,hi+.03,.02],fov:36};colliders=[{kind:"circle",x:0,z:0,r:.6},mi(Xe.x0-.05,Xe.z0,Xe.x0,Xe.z1),mi(Xe.x1,Xe.z0,Xe.x1+.05,Xe.z1),mi(Xe.x0,Xe.z0-.05,Xe.x1,Xe.z0)];captionAnchor={position:[1.7,1.05,3.75],stand:!0};lightDirWorld=new R;build(e){const t=m=>this.root.add(m),i=(m,p,y,w,v,b,T)=>{const C=new ne(new xt(m,p,y),jt(w));return C.position.set(v,b,T),t(C),C},n=Xe.x1-Xe.x0,r=Xe.z1-Xe.z0,s=(Xe.z0+Xe.z1)/2;i(n,.02,r,"floor",0,-.006,s),i(n,.02,r,"ceiling",0,Xe.height+.01,s),i(n,Xe.height,.04,"wall",0,Xe.height/2,Xe.z0-.02),i(.04,Xe.height,r,"wall",Xe.x0-.02,Xe.height/2,s),i(.04,Xe.height,r,"wall",Xe.x1+.02,Xe.height/2,s),i(n,.9,.01,"wainscot",0,.45,Xe.z0+.006),i(.01,.9,r,"wainscot",Xe.x0+.006,.45,s),i(.01,.9,r,"wainscot",Xe.x1-.006,.45,s),i(1.3,.9,.03,"frame",0,1.75,Xe.z0+.02),i(1.18,.4,.035,"canvasBlue",0,1.95,Xe.z0+.02),i(1.18,.2,.035,"canvasSand",0,1.65,Xe.z0+.02),i(1.18,.18,.035,"canvasGreen",0,1.46,Xe.z0+.02);const a=new ne(new St(.5,.5,.04,48),jt("table"));a.position.y=hi-.02;const o=new ne(new St(.56,.62,.22,48,1,!0),jt("cloth",Kt));o.position.y=hi-.1;const u=new ne(new Mc(.56,48),jt("cloth"));u.rotation.x=-Math.PI/2,u.position.y=hi+.001;const l=new ne(new St(.05,.07,hi-.04,16),jt("table"));l.position.y=(hi-.04)/2;const c=new ne(new St(.28,.3,.03,32),jt("table"));c.position.y=.015,t(a),t(o),t(u),t(l),t(c);const d=new ne(new St(.2,.16,.02,40),jt("plate"));d.position.set(-.08,hi+.011,.02),t(d);const h=os(3),f=[[-.16,.06,.4],[-.08,.1,-.3],[0,.05,1.2],[-.12,-.04,2],[-.03,-.03,-1.1],[.04,-.09,.7],[-.18,-.08,-.6]];for(const[m,p,y]of f){const w=new ut;w.position.set(m,hi+.036,p),w.rotation.y=(y>0?1:-1)*(Math.PI/2)+y*.25;const v=Xy();v.rotation.x=-Math.PI/2+.2,v.position.z=.035,v.scale.setScalar(1.25+h()*.25),w.add(v),t(w)}const g=Hd(.052);g.position.set(.22,hi+.047,-.12);const _=Hd(.048);_.position.set(.3,hi+.043,.06),_.rotation.y=1.3,t(g),t(_);for(let m=0;m<16;m++){const p=Math.floor(m/6),y=m%6*1.05+p*.5,w=new ne(new Ri(.016,12,8),jt("grape"));w.position.set(.08+Math.cos(y)*(.035-p*.01),hi+.02+p*.022,.2+Math.sin(y)*(.03-p*.008)-p*.01),t(w)}for(const[m,p]of[[.14,.26],[.18,.28]]){const y=new ne(new Ri(.014,14,10),jt("cherry"));y.position.set(m,hi+.014,p);const w=new ne(new St(.0015,.0015,.045,5),jt("stem"));w.position.set(m+.008,hi+.036,p-.006),w.rotation.z=-.4,t(y),t(w)}}update(){const e=new Wi;this.root.getWorldQuaternion(e),this.lightDirWorld.copy(Gy).applyQuaternion(e),Da.lightDir.value.copy(this.lightDirWorld)}onEnterView(){this.update()}readFrame(){const e=this.ctx.renderer;this.update(),e.render(this.ctx.scene,this.ctx.camera);const t=e.getContext(),i=t.drawingBufferWidth,n=t.drawingBufferHeight,r=new Uint8Array(i*n*4);return t.readPixels(0,0,i,n,t.RGBA,t.UNSIGNED_BYTE,r),{data:r,width:i,height:n}}onViewClick(e){const t=this.readFrame(),i=Math.min(t.width-1,Math.max(0,Math.floor((e.x+1)/2*t.width))),r=(Math.min(t.height-1,Math.max(0,Math.floor((e.y+1)/2*t.height)))*t.width+i)*4,[s,a,o]=[t.data[r],t.data[r+1],t.data[r+2]],u=Gd([s,a,o],6);this.ctx.notify(`\u30B9\u30DD\u30A4\u30C8: R ${s} / G ${a} / B ${o} \u2014 ${u?"\u8D64\u3063\u307D\u3044\u8272\u3067\u3059":"\u8D64\u3067\u306F\u3042\u308A\u307E\u305B\u3093\uFF08\u7070\u8272\u301C\u9752\u7DD1\uFF09"}`,`rgb(${s},${a},${o})`)}countRedPixels(e=3){const t=this.readFrame();let i=0;for(let n=0;n<t.data.length;n+=4)Gd([t.data[n],t.data[n+1],t.data[n+2]],e)&&i++;return{red:i,total:t.width*t.height}}setLight(e){Da.lightColor.value.setRGB(Un[0]+(fl[0]-Un[0])*e,Un[1]+(fl[1]-Un[1])*e,Un[2]+(fl[2]-Un[2])*e)}async demo(e){if(!await this.wait(.4,e))return!1;const{red:t,total:i}=this.countRedPixels();if(this.ctx.notify(`\u753B\u9762\u3092\u8D70\u67FB\u3057\u307E\u3057\u305F\u3002\u8D64\u3044\u30D4\u30AF\u30BB\u30EB: ${t.toLocaleString()} \u500B\uFF08\u5168 ${i.toLocaleString()} \u753B\u7D20\uFF09`),!await this.wait(3.5,e)||!await this.animate(1.6,r=>this.setLight(r),e))return!1;const n=this.countRedPixels();return this.ctx.notify(`\u7167\u660E\u3092\u767D\u306B\u3059\u308B\u3068\u3001\u679C\u7269\u306F\u672C\u5F53\u306B\u8D64\u3044\u8272\u3067\u3059\uFF08\u8D64\u3044\u30D4\u30AF\u30BB\u30EB: ${n.red.toLocaleString()} \u500B\uFF09`),await this.wait(4.5,e)?this.animate(1.4,r=>this.setLight(1-r),e):!1}resetDemo(){this.setLight(0)}},pl=[0,1.6,4.2],Wd=[0,1.8,0],Yy=2.4,ml=Ea(pl,Wd),Ky=.75,Xd=.12,qd=.36,Yd=.15,Zy=.022,tn=e=>e*Math.PI/180;function $y(e,t,i){const n=[[e,t]],r=i+tn(30),s=i+tn(330),a=48;for(let o=0;o<=a;o++){const u=r+(s-r)*o/a;n.push([e+Math.cos(u)*Xd,t+Math.sin(u)*Xd])}return n}function Kd(e,t,i){const n=Math.cos(i),r=Math.sin(i),s=Zy/2,a=-r*s,o=n*s,u=e-n*s,l=t-r*s,c=e+n*Yd,d=t+r*Yd;return[[u-a,l-o],[c-a,d-o],[c+a,d+o],[u+a,l+o]]}function Zd(){const e=Ky/Math.sqrt(3),t=[.55,1.35,.9],i=[1.15,.7,1.45],n=[];return[90,210,330].forEach((r,s)=>{const a=Math.cos(tn(r))*e,o=Math.sin(tn(r))*e;n.push({kind:"pacman",polygons:[$y(a,o,tn(r+180))],k:t[s]})}),[270,30,150].forEach((r,s)=>{const a=Math.cos(tn(r))*qd,o=Math.sin(tn(r))*qd,u=tn(r+180-30),l=tn(r+180+30);n.push({kind:"vee",polygons:[Kd(a,o,u),Kd(a,o,l)],k:i[s]})}),n}function gl(e,t){const i=Wt(Wt(yt(ml.back,-Yy),yt(ml.right,e[0])),yt(ml.up,e[1]));return Wt(pl,yt(i,t))}var Jy=5,Qy=class extends Si{id="invisible-triangle";viewMode={kind:"fixed",position:pl,target:Wd,fov:34};colliders=[mi(-.85,.4,.85,3.2)];captionAnchor={position:[1.25,1.05,3.6],rotationY:-.3,stand:!0};debugPoints=(()=>{const e={};return Zd().forEach((t,i)=>{const n=t.polygons[0][1];e[`piece${i}Plane`]=gl(n,1),e[`piece${i}Real`]=gl(n,t.k)}),e})();build(e){const t=new At({color:1250067,side:Kt}),i=new At({color:13224393});for(const n of Zd()){const r=new ut;let s=-1/0,a=[0,0,0];for(const l of n.polygons){const c=new Su(l.map(([f,g])=>new le(f,g))),d=new kc(c,24),h=d.getAttribute("position");for(let f=0;f<h.count;f++){const g=gl([h.getX(f),h.getY(f)],n.k);h.setXYZ(f,g[0],g[1],g[2]),g[1]>s&&(s=g[1],a=g)}d.computeBoundingSphere(),r.add(new ne(d,t))}const o=Jy-s,u=new ne(new St(.0012,.0012,o,4),i);u.position.set(a[0],s+o/2,a[2]),r.add(u),r.name=n.kind,this.root.add(r)}}async demo(e){return!await this.wait(.5,e)||!await this.ctx.rig.flyTo({position:[2.8,1.9,2.6],target:[0,1.75,1.8],via:[2.2,1.8,4.4],fov:40},3,e)||!await this.wait(4.5,e)?!1:this.ctx.rig.returnToView(2.6,e)}},jy={"welcome-anamorphosis":()=>new Sx,"cafe-wall":()=>new Tx,ebbinghaus:()=>new Rx,"muller-lyer":()=>new Lx,"scintillating-grid":()=>new Bx,"peripheral-drift":()=>new zx,afterimage:()=>new qx,"ames-room":()=>new ny,"impossible-triangle":()=>new gy,"checker-shadow":()=>new wy,reverspective:()=>new Dy,"shadow-spinner":()=>new Ly,"circle-heart":()=>new zy,"colorless-fruit":()=>new qy,"invisible-triangle":()=>new Qy},Pa=.3,xr=.2;function eE(e){const i=Math.round(600*xr/Pa),n=document.createElement("canvas");n.width=600,n.height=i;const r=n.getContext("2d");r.fillStyle="#fbfaf7",r.fillRect(0,0,600,i);const s=36;r.fillStyle="#6b6b70",r.textBaseline="alphabetic",ga(r,e.number,s,70,600-s*2,34,700,'"Helvetica Neue",Arial,sans-serif'),r.fillStyle="#1c1c1e",ga(r,e.title,s,150,600-s*2,50,700),r.fillStyle="#4a4a4f",ga(r,e.titleEn,s,205,600-s*2,28,500,'"Helvetica Neue",Arial,sans-serif'),r.fillStyle="#8a8a90",ga(r,e.kind==="original"?"\u30AA\u30EA\u30B8\u30CA\u30EB\u4F5C\u54C1":e.credit??"",s,i-44,600-s*2,24,500),r.fillStyle=e.kind==="original"?"#c2410c":"#1c1c1e",r.fillRect(s,92,44,5);const a=new pi(n);a.colorSpace=ht,a.anisotropy=8;const o=new ut;o.name="caption";const u=new ne(new xt(Pa+.01,xr+.01,.008),new qe({color:15131871,roughness:.6}));u.position.z=.004;const l=new ne(new Nt(Pa,xr),new At({map:a,toneMapped:!0}));return l.position.z=.0085,o.add(u,l),o}function tE(e,t){const i=new ut,n=new qe({color:1907999,roughness:.5,metalness:.4}),r=e[1]-xr/2,s=new ne(new xt(.03,r,.03),n);s.position.set(0,r/2,-.02);const a=new ne(new xt(.22,.012,.22),n);a.position.set(0,.006,-.02);const o=new ne(new xt(Pa+.02,xr+.02,.012),n);return o.position.set(0,r+xr/2,-.004),i.add(s,a,o),i.position.set(e[0],0,e[2]),i.rotation.y=t,i}var yr=null;function iE(){if(yr)return yr;const e=512,t=document.createElement("canvas");t.width=t.height=e;const i=t.getContext("2d");return i.clearRect(0,0,e,e),i.strokeStyle="rgba(28,28,30,0.85)",i.lineWidth=10,i.beginPath(),i.arc(e/2,e/2,e/2-12,0,Math.PI*2),i.stroke(),i.fillStyle="rgba(28,28,30,0.06)",i.fill(),i.lineWidth=12,i.beginPath(),i.moveTo(e*.26,e*.4),i.quadraticCurveTo(e*.5,e*.2,e*.74,e*.4),i.quadraticCurveTo(e*.5,e*.6,e*.26,e*.4),i.stroke(),i.fillStyle="rgba(28,28,30,0.85)",i.beginPath(),i.arc(e/2,e*.4,e*.065,0,Math.PI*2),i.fill(),i.textAlign="center",i.font='700 64px "Hiragino Sans","Noto Sans JP","Yu Gothic UI",sans-serif',i.fillText("\u3053\u3053\u304B\u3089\u898B\u308B",e/2,e*.72),i.font='600 30px "Helvetica Neue",Arial,sans-serif',i.fillText("VIEW FROM HERE",e/2,e*.82),yr=new pi(t),yr.colorSpace=ht,yr.anisotropy=8,yr}function nE(e=.8){const t=new ne(new Mc(e/2,48),new At({map:iE(),transparent:!0,depthWrite:!1,toneMapped:!0,polygonOffset:!0,polygonOffsetFactor:-2}));return t.rotation.x=-Math.PI/2,t.position.y=.003,t.name="floor-mark",t.userData.sharedMap=!0,t.renderOrder=1,t}var rE=42,$d=.7;function sE(e,t,i,n,r,s=$d){return Math.max(e*i/(s*n),t*i/(s*r))}function Jd(e,t){return t/2/Math.tan(e*Math.PI/180*.5)}function Qd(e,t){if(e.kind==="fixed")return{position:e.position,target:e.target,fov:e.fov};const i=e.fov??rE,n=Jd(i,t.height+t.insetBottom),r=Math.max(120,t.width-t.insetRight),s=Math.max(120,t.height-t.insetBottom),a=sE(e.width,e.height,n,r,s,e.fill??$d),[o,u,l]=e.center;return{position:[o,u,l+a],target:[o,u,l],fov:i}}function aE(e,t){if(t.width>720)return Qd(e,t);const i={width:1440,height:900,insetRight:392,insetBottom:0},n=Qd(e,i),r=Math.min(Math.max(1,t.width-t.insetRight)/(i.width-i.insetRight),Math.max(1,t.height-t.insetBottom)/i.height),s=Jd(n.fov,i.height)*r,a=2*Math.atan((t.height+t.insetBottom)/(2*s))*180/Math.PI;return{...n,fov:a}}var oE=3,uE=55,lE=16,cE=26,hE=34,dE=class{constructor(e,t,i){this.makeContext=i,this.group.name="exhibits",e.add(this.group);for(const n of pa){const r=jy[n.id];if(!r)continue;const s=r(),a=new ut;a.name=`exhibit:${n.id}`,a.position.set(n.x,0,n.z),a.rotation.y=n.rotation,a.updateMatrixWorld(!0);const o=s.viewMode,u=o.kind==="fixed"?o.target:o.center,l={id:n.id,content:jh(n.id),placement:n,exhibit:s,group:a,state:"idle",ready:null,active:!1,focus:this.toWorld(a,u)};this.entries.push(l),this.byId.set(l.id,l),this.group.add(a);for(const c of s.colliders??[])t.add(fE(c,n))}}entries=[];byId=new Map;group=new ut;raycaster=new wm;get(e){return this.byId.get(e)}has(e){return this.byId.has(e)}ids(){return this.entries.map(e=>e.id)}neighbors(e){const t=this.entries.findIndex(n=>n.id===e),i=this.entries.length;return{prev:this.entries[(t-1+i)%i].id,next:this.entries[(t+1)%i].id}}ensureReady(e){const t=this.byId.get(e);return t?(t.ready||(t.state="loading",t.ready=(async()=>{await t.exhibit.init(this.contextFor(t)),t.group.add(t.exhibit.root),this.addDecorations(t),t.group.updateMatrixWorld(!0),t.state="ready"})()),t.ready):Promise.reject(new Error(`\u672A\u767B\u9332\u306E\u5C55\u793A\u3067\u3059: ${e}`))}async loadZones(e,t){const i=this.entries.filter(r=>e.includes(r.content.zone));let n=0;for(const r of i)await this.ensureReady(r.id),t?.(++n,i.length)}async loadRemaining(e){for(const t of this.entries)t.state==="idle"&&(await e(),await this.ensureReady(t.id))}get readyCount(){return this.entries.filter(e=>e.state==="ready").length}viewPose(e,t){const i=this.byId.get(e),n=aE(i.exhibit.viewMode,t);return{position:this.toWorld(i.group,n.position),target:this.toWorld(i.group,n.target),fov:n.fov}}shotToWorld(e,t,i){const n=this.byId.get(e);return{position:this.toWorld(n.group,t.position),target:this.toWorld(n.group,t.target),fov:t.fov??i,via:t.via?this.toWorld(n.group,t.via):void 0}}standPoint(e,t){const i=this.byId.get(e),n=this.viewPose(e,t),r=n.position.clone();if(i.exhibit.viewMode.kind==="front"){const o=r.clone().sub(n.target).setY(0),u=En.clamp(o.length(),1.4,3.2);o.normalize().multiplyScalar(u),r.copy(n.target).add(o)}const s=n.target.x-r.x,a=n.target.z-r.z;return{x:r.x,z:r.z,yaw:Math.atan2(-s,-a)}}findNearby(e,t,i){let n=null,r=1/0;const s=Math.cos(En.degToRad(uE));for(const a of this.entries){const o=a.focus.x-e.x,u=a.focus.z-e.z,l=Math.hypot(o,u),c=this.standPoint(a.id,i),d=Math.hypot(c.x-e.x,c.z-e.z),h=Math.min(l,d);if(h>oE)continue;const f=l<.001?1:(o*t.x+u*t.z)/l;if(f<s)continue;const g=h*(2-f);g<r&&(r=g,n=a.id)}return n}pick(e,t,i=9){this.raycaster.setFromCamera(e,t),this.raycaster.far=i;const n=this.entries.filter(a=>a.state==="ready").map(a=>a.group),r=this.raycaster.intersectObjects(n,!0)[0];if(!r)return null;let s=r.object;for(;s&&!s.name.startsWith("exhibit:");)s=s.parent;return s?s.name.slice(8):null}update(e,t,i){for(const n of this.entries){const r=Math.hypot(n.focus.x-t.x,n.focus.z-t.z);if(n.state==="idle"&&r<cE&&this.ensureReady(n.id),n.state!=="ready")continue;n.group.visible=n.id===i||r<hE;const s=n.id===i||r<lE;s!==n.active&&(n.active=s,n.exhibit.setActive?.(s)),s&&n.exhibit.update?.(e,this.contextFor(n))}}contexts=new Map;contextFor(e){let t=this.contexts.get(e.id);return t||(t=this.makeContext(e),this.contexts.set(e.id,t)),t}addDecorations(e){const{exhibit:t,content:i,group:n}=e,r=t.viewMode,s=t.captionAnchor===void 0?r.kind==="front"?{position:[r.width/2+.42,1.3,.005],rotationY:0}:null:t.captionAnchor;if(s){const o=eE(i);o.position.set(...s.position),o.rotation.y=s.rotationY??0,n.add(o),"stand"in s&&s.stand&&n.add(tE(s.position,s.rotationY??0))}if((t.floorMark??r.kind==="fixed")&&r.kind==="fixed"){const o=nE(),u=new ut;u.position.set(r.position[0],0,r.position[2]),u.rotation.y=Math.atan2(-(r.target[0]-r.position[0]),-(r.target[2]-r.position[2])),u.add(o),n.add(u)}}toWorld(e,t){return e.updateMatrixWorld(!0),new R(t[0],t[1],t[2]).applyMatrix4(e.matrixWorld)}dispose(){for(const e of this.entries)e.exhibit.dispose()}};function fE(e,t){const i=Math.cos(t.rotation),n=Math.sin(t.rotation),r=(a,o)=>({x:t.x+a*i+o*n,z:t.z-a*n+o*i});if(e.kind==="circle"){const a=r(e.x,e.z);return{kind:"circle",x:a.x,z:a.z,r:e.r}}const s=[r(e.x0,e.z0),r(e.x1,e.z0),r(e.x0,e.z1),r(e.x1,e.z1)];return mi(Math.min(...s.map(a=>a.x)),Math.min(...s.map(a=>a.z)),Math.max(...s.map(a=>a.x)),Math.max(...s.map(a=>a.z)))}var pE=["welcome-anamorphosis","cafe-wall","ebbinghaus","muller-lyer","scintillating-grid","peripheral-drift","afterimage","ames-room","impossible-triangle","checker-shadow","reverspective","shadow-spinner","circle-heart","colorless-fruit","invisible-triangle"];function mE(e){return typeof e=="string"&&pE.includes(e)}function Y(e,t={},i=[]){const n=document.createElement(e);if(t.class&&(n.className=t.class),t.id&&(n.id=t.id),t.text!==void 0&&(n.textContent=t.text),t.html!==void 0&&(n.innerHTML=t.html),t.attrs)for(const[r,s]of Object.entries(t.attrs))s!==!1&&n.setAttribute(r,s===!0?"":String(s));if(t.on)for(const[r,s]of Object.entries(t.on))n.addEventListener(r,s);for(const r of i)r==null||r===!1||n.append(r);return n}function zt(e,t){e.hidden=!t}var gE=class{el;bar;label;constructor(e){this.bar=Y("div",{class:"loading__bar-fill"}),this.label=Y("p",{class:"loading__label",text:"\u6E96\u5099\u3057\u3066\u3044\u307E\u3059\u2026 0%"}),this.el=Y("section",{class:"screen loading",attrs:{"aria-live":"polite"}},[Y("div",{class:"loading__inner"},[Y("p",{class:"brand-mark",text:"OPTICAL ILLUSION MUSEUM"}),Y("div",{class:"loading__bar",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100}},[this.bar]),this.label])]);const t=()=>{const i=e.get();zt(this.el,i.mode==="loading");const n=Math.round(i.loadingProgress*100);this.bar.style.transform=`scaleX(${i.loadingProgress})`,this.bar.parentElement?.setAttribute("aria-valuenow",String(n)),this.label.textContent=`\u6E96\u5099\u3057\u3066\u3044\u307E\u3059\u2026 ${n}%`};e.subscribe(t),t()}},vE=class{el;enterButton;constructor(e,t,i){const n=(o,u,l)=>{const c=Y("input",{id:o,attrs:{type:"checkbox"}});return c.addEventListener("change",()=>l(c.checked)),{input:c,el:Y("label",{class:"start__toggle",attrs:{for:o}},[c,u])}},r=n("start-reduced","\u52D5\u304D\u3092\u6E1B\u3089\u3059",o=>i({reducedMotion:o})),s=n("start-sound","\u30B5\u30A6\u30F3\u30C9\uFF08\u74B0\u5883\u97F3\u30FB\u8DB3\u97F3\uFF09",o=>i({muted:!o}));this.enterButton=Y("button",{class:"btn btn--primary btn--large",text:"\u5165\u9928\u3059\u308B",attrs:{type:"button","data-testid":"enter"},on:{click:()=>t()}}),this.el=Y("section",{class:"screen start",attrs:{"aria-labelledby":"start-title"}},[Y("div",{class:"start__panel"},[Y("header",{class:"start__header"},[Y("p",{class:"brand-mark",text:"OPTICAL ILLUSION MUSEUM"}),Y("h1",{id:"start-title",class:"start__title",text:"\u932F\u8996\u7F8E\u8853\u9928"}),Y("p",{class:"start__lead",text:"\u76EE\u306F\u3068\u304D\u3069\u304D\u3001\u3042\u308A\u3048\u306A\u3044\u3082\u306E\u3092\u898B\u307E\u3059\u3002\u9928\u5185\u3092\u6B69\u304D\u306A\u304C\u3089\u3001\u932F\u8996\u3092\u30C6\u30FC\u30DE\u306B\u3057\u305F\u4F5C\u54C1\u3092\u304A\u697D\u3057\u307F\u304F\u3060\u3055\u3044\u3002\u5404\u4F5C\u54C1\u306E\u300C\u898B\u3048\u65B9\u306E\u30D2\u30F3\u30C8\u300D\u306F\u3001\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u307E\u3067\u96A0\u308C\u3066\u3044\u307E\u3059\u3002"})]),Y("div",{class:"start__grid"},[Y("section",{class:"start__block"},[Y("h2",{text:"\u64CD\u4F5C"}),Y("dl",{class:"keys keys--desktop"},[Y("dt",{text:"W A S D / \u77E2\u5370"}),Y("dd",{text:"\u6B69\u304F\uFF08Shift \u3067\u65E9\u6B69\u304D\uFF09"}),Y("dt",{text:"\u30DE\u30A6\u30B9"}),Y("dd",{text:"\u898B\u56DE\u3059\uFF08\u753B\u9762\u3092\u30AF\u30EA\u30C3\u30AF\u3067\u958B\u59CB\uFF09"}),Y("dt",{text:"E / \u30AF\u30EA\u30C3\u30AF"}),Y("dd",{text:"\u8FD1\u304F\u306E\u4F5C\u54C1\u3092\u9451\u8CDE\u3059\u308B"}),Y("dt",{text:"H"}),Y("dd",{text:"\u898B\u3048\u65B9\u306E\u30D2\u30F3\u30C8"}),Y("dt",{text:"Esc / Q"}),Y("dd",{text:"\u9451\u8CDE\u3092\u3084\u3081\u308B"}),Y("dt",{text:"M"}),Y("dd",{text:"\u30D5\u30ED\u30A2\u30DE\u30C3\u30D7"})]),Y("dl",{class:"keys keys--touch"},[Y("dt",{text:"\u5DE6\u4E0B\u306E\u30B9\u30C6\u30A3\u30C3\u30AF"}),Y("dd",{text:"\u6B69\u304F"}),Y("dt",{text:"\u753B\u9762\u3092\u30C9\u30E9\u30C3\u30B0"}),Y("dd",{text:"\u898B\u56DE\u3059"}),Y("dt",{text:"\u4F5C\u54C1\u3092\u30BF\u30C3\u30D7"}),Y("dd",{text:"\u9451\u8CDE\u3059\u308B"})])]),Y("section",{class:"start__block start__caution",attrs:{role:"note"}},[Y("h2",{text:"\u3054\u9451\u8CDE\u306E\u524D\u306B"}),Y("ul",{},[Y("li",{text:"\u4E00\u90E8\u306E\u4F5C\u54C1\u306B\u306F\u3001\u3061\u3089\u3064\u304D\u3084\u52D5\u3044\u3066\u898B\u3048\u308B\u56F3\u67C4\u304C\u3042\u308A\u307E\u3059\u3002\u5149\u306B\u654F\u611F\u306A\u65B9\u306F\u3001\u6C17\u5206\u304C\u60AA\u304F\u306A\u3063\u305F\u3089\u3059\u3050\u306B\u9451\u8CDE\u3092\u3084\u3081\u3066\u304F\u3060\u3055\u3044\u3002"}),Y("li",{text:"3D \u7A7A\u9593\u306E\u79FB\u52D5\u3067\u9154\u3044\u3084\u3059\u3044\u65B9\u306F\u3001\u4E0B\u306E\u300C\u52D5\u304D\u3092\u6E1B\u3089\u3059\u300D\u3092\u30AA\u30F3\u306B\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u3042\u3068\u304B\u3089\u8A2D\u5B9A\u3067\u3082\u5909\u3048\u3089\u308C\u307E\u3059\uFF09\u3002"}),Y("li",{text:"\u932F\u8996\u306E\u898B\u3048\u65B9\u306B\u306F\u500B\u4EBA\u5DEE\u304C\u3042\u308A\u307E\u3059\u3002\u3046\u307E\u304F\u898B\u3048\u306A\u304F\u3066\u3082\u7570\u5E38\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"})])])]),Y("div",{class:"start__actions"},[Y("div",{class:"start__toggles"},[r.el,s.el]),this.enterButton])])]);const a=()=>{const o=e.get();zt(this.el,o.mode==="start"),r.input.checked=o.settings.reducedMotion,s.input.checked=!o.settings.muted};e.subscribe(a),a()}},_E=class{el;constructor(e,t){const i=Y("button",{class:"btn btn--primary",text:"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u518D\u958B",attrs:{type:"button","data-testid":"resume"},on:{click:()=>t.resume()}});this.el=Y("section",{class:"screen pause",attrs:{"aria-labelledby":"pause-title"}},[Y("div",{class:"pause__panel"},[Y("h2",{id:"pause-title",text:"\u4E00\u6642\u505C\u6B62\u4E2D"}),i,Y("div",{class:"pause__row"},[Y("button",{class:"btn",text:"\u30D5\u30ED\u30A2\u30DE\u30C3\u30D7",attrs:{type:"button"},on:{click:()=>t.openMap()}}),Y("button",{class:"btn",text:"\u8A2D\u5B9A",attrs:{type:"button"},on:{click:()=>t.openSettings()}})])])]),this.el.addEventListener("click",r=>{r.target===this.el&&t.resume()});const n=()=>zt(this.el,e.get().mode==="paused");e.subscribe(n),n()}},xE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg>',yE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',EE=class{el;zone;crosshair;prompt;promptTitle;toastEl;toastText;toastSwatch;toastTimer=0;tools;constructor(e,t){this.crosshair=Y("div",{class:"hud__crosshair",attrs:{"aria-hidden":"true"}}),this.zone=Y("p",{class:"hud__zone",attrs:{"aria-live":"polite"}}),this.promptTitle=Y("span",{class:"hud__prompt-title"}),this.prompt=Y("button",{class:"hud__prompt",attrs:{type:"button","data-testid":"view-prompt"},on:{click:()=>t.viewNearby()}},[Y("kbd",{class:"hud__key",text:"E"}),Y("span",{class:"hud__prompt-verb",text:"\u9451\u8CDE\u3059\u308B"}),this.promptTitle]),this.toastSwatch=Y("span",{class:"hud__swatch",attrs:{"aria-hidden":"true"}}),this.toastText=Y("span"),this.toastEl=Y("p",{class:"hud__toast",attrs:{role:"status","data-testid":"toast"}},[this.toastSwatch,this.toastText]),this.toastEl.hidden=!0,this.tools=Y("div",{class:"hud__tools"},[Y("button",{class:"icon-btn",html:xE,attrs:{type:"button","aria-label":"\u30D5\u30ED\u30A2\u30DE\u30C3\u30D7\uFF08M\uFF09","data-testid":"open-map"},on:{click:()=>t.openMap()}}),Y("button",{class:"icon-btn",html:yE,attrs:{type:"button","aria-label":"\u8A2D\u5B9A","data-testid":"open-settings"},on:{click:()=>t.openSettings()}})]),this.el=Y("div",{class:"hud"},[this.crosshair,this.zone,this.tools,this.prompt,this.toastEl]);const i=()=>{const n=e.get();zt(this.el,n.mode==="walking"||n.mode==="viewing"),zt(this.crosshair,n.mode==="walking"),zt(this.tools,n.mode==="walking");const r=n.zoneId?kh[n.zoneId]:void 0;this.zone.textContent=r?r.name:"",zt(this.zone,!!r&&n.mode==="walking");const s=n.mode==="walking"?n.nearbyExhibitId:null;if(zt(this.prompt,!!s),s){const a=jh(s);this.promptTitle.textContent=`${a.number}  ${a.title}`}};e.subscribe(i),i()}toast(e,t,i=6){this.toastText.textContent=e,this.toastSwatch.hidden=!t,t&&(this.toastSwatch.style.background=t),this.toastEl.hidden=!1,window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.hidden=!0,i*1e3)}},ME=class{constructor(e,t,i){this.store=e,this.source=t,this.number=Y("span",{class:"panel__number"}),this.kind=Y("span",{class:"panel__kind"}),this.viewed=Y("span",{class:"panel__viewed",text:"\u30D2\u30F3\u30C8\u95B2\u89A7\u6E08\u307F"}),this.title=Y("h2",{class:"panel__title",id:"panel-title",attrs:{tabindex:-1,"data-testid":"panel-title"}}),this.titleEn=Y("p",{class:"panel__title-en"}),this.credit=Y("p",{class:"panel__credit"}),this.howTo=Y("p",{class:"panel__howto",attrs:{"data-testid":"how-to-view"}}),this.caution=Y("p",{class:"panel__caution",attrs:{role:"note"}}),this.actionsBox=Y("div",{class:"panel__actions"}),this.appearance=Y("p",{class:"panel__hint-text",attrs:{"data-testid":"appearance"}}),this.mechanism=Y("p",{class:"panel__hint-text",attrs:{"data-testid":"mechanism"}}),this.mechBody=Y("div",{class:"panel__mechanism",id:"hint-mechanism",attrs:{"data-testid":"mechanism-body"}},[Y("h4",{text:"\u306A\u305C\uFF1F"}),this.mechanism]),this.mechToggle=Y("button",{class:"disclosure disclosure--sub",attrs:{type:"button","aria-expanded":"false","aria-controls":"hint-mechanism","data-testid":"mechanism-toggle"},on:{click:()=>i.setHintStage(this.store.get().hintStage==="mechanism"?"appearance":"mechanism")}}),this.demoLabel=Y("span",{class:"demo__label"}),this.demoBtn=Y("button",{class:"btn btn--demo",attrs:{type:"button","data-testid":"demo"},on:{click:()=>i.toggleDemo()}},[]),this.hintBody=Y("div",{class:"panel__hint",id:"hint-body",attrs:{"data-testid":"hint-body"}},[Y("h4",{text:"\u3069\u3046\u898B\u3048\u308B\uFF1F"}),this.appearance,this.mechToggle,this.mechBody,Y("div",{class:"panel__demo"},[this.demoBtn,this.demoLabel])]),this.hintToggle=Y("button",{class:"disclosure",attrs:{type:"button","aria-expanded":"false","aria-controls":"hint-body","data-testid":"hint-toggle"},on:{click:()=>i.setHintStage(this.store.get().hintStage==="hidden"?"appearance":"hidden")}});const n=Y("nav",{class:"panel__nav",attrs:{"aria-label":"\u4F5C\u54C1\u306E\u79FB\u52D5"}},[Y("button",{class:"btn btn--ghost",text:"\u2190 \u524D\u306E\u4F5C\u54C1",attrs:{type:"button","data-testid":"prev-exhibit"},on:{click:()=>i.prev()}}),Y("button",{class:"btn btn--primary",text:"\u623B\u308B",attrs:{type:"button","data-testid":"close-exhibit"},on:{click:()=>i.close()}}),Y("button",{class:"btn btn--ghost",text:"\u6B21\u306E\u4F5C\u54C1 \u2192",attrs:{type:"button","data-testid":"next-exhibit"},on:{click:()=>i.next()}})]);this.el=Y("aside",{class:"panel",attrs:{"aria-labelledby":"panel-title","data-testid":"exhibit-panel"}},[Y("div",{class:"panel__scroll"},[Y("div",{class:"panel__meta"},[this.number,this.kind,this.viewed]),this.title,this.titleEn,this.credit,Y("section",{class:"panel__section"},[Y("h3",{text:"\u9451\u8CDE\u306E\u3057\u304B\u305F"}),this.howTo,this.caution,this.actionsBox]),Y("section",{class:"panel__section panel__section--hint"},[this.hintToggle,this.hintBody])]),n]),e.subscribe(()=>this.render()),this.render()}el;number;kind;title;titleEn;credit;howTo;caution;viewed;actionsBox;hintToggle;hintBody;appearance;mechToggle;mechBody;mechanism;demoBtn;demoLabel;renderedId=null;lastStage="hidden";render(){const e=this.store.get(),t=e.activeExhibitId,i=e.mode==="viewing"&&t!==null;if(zt(this.el,i),!i||!t){this.renderedId=null;return}if(this.renderedId!==t){this.renderedId=t;const o=this.source.content(t);this.number.textContent=o.number,this.kind.textContent=o.kind==="original"?"\u30AA\u30EA\u30B8\u30CA\u30EB":"\u53E4\u5178",this.kind.classList.toggle("panel__kind--original",o.kind==="original"),this.title.textContent=o.title,this.titleEn.textContent=o.titleEn,this.credit.textContent=o.credit??"",zt(this.credit,!!o.credit),this.howTo.textContent=o.howToView,this.caution.textContent=o.caution?`\u26A0 ${o.caution}`:"",zt(this.caution,!!o.caution),this.appearance.textContent=o.hint.appearance,this.mechanism.textContent=o.hint.mechanism,this.demoLabel.textContent=o.demoLabel??"",this.actionsBox.replaceChildren(...this.source.actions(t).map(u=>Y("button",{class:"btn btn--primary",text:u.label,attrs:{type:"button","data-testid":`action-${u.id}`},on:{click:()=>void u.run()}}))),zt(this.actionsBox,this.actionsBox.childElementCount>0),this.el.querySelector(".panel__scroll")?.scrollTo({top:0}),this.title.focus({preventScroll:!0})}const n=e.hintStage,r=n!=="hidden";if(n!==this.lastStage&&n!=="hidden"){const o=n==="mechanism"?this.mechBody:this.hintBody,u=e.settings.reducedMotion?"auto":"smooth";requestAnimationFrame(()=>o.scrollIntoView({block:"nearest",behavior:u}))}this.lastStage=n,this.hintToggle.setAttribute("aria-expanded",String(r)),this.hintToggle.textContent=r?"\u30D2\u30F3\u30C8\u3092\u96A0\u3059":"\u898B\u3048\u65B9\u306E\u30D2\u30F3\u30C8",this.hintBody.hidden=!r;const s=n==="mechanism";this.mechToggle.setAttribute("aria-expanded",String(s)),this.mechToggle.textContent=s?"\u3057\u304F\u307F\u3092\u9589\u3058\u308B":"\u3057\u304F\u307F\u3092\u77E5\u308B",this.mechBody.hidden=!s;const a=this.source.hasDemo(t);zt(this.demoBtn.parentElement,a),this.demoBtn.textContent=e.demoPlaying?"\u25A0 \u6B62\u3081\u308B":"\u25B6 \u78BA\u304B\u3081\u308B",this.demoBtn.setAttribute("aria-pressed",String(e.demoPlaying)),zt(this.viewed,e.hintViewed.includes(t))}},SE="http://www.w3.org/2000/svg";function Ui(e,t={},i=[]){const n=document.createElementNS(SE,e);for(const[r,s]of Object.entries(t))n.setAttribute(r,String(s));for(const r of i)n.append(r);return n}var wE={entrance:"#ecebe6",hall:"#f3efe6",corridor:"#ecebe6",zoneA:"#e7eef6",zoneB:"#eef3e8",zoneC:"#f6ece6"},bE=class{constructor(e,t,i){this.actions=t,this.getPlayer=i;const n=qh(Qi),r=2,s=Ui("svg",{class:"map__svg",viewBox:`${n.x0-r} ${n.z0-r} ${n.x1-n.x0+r*2} ${n.z1-n.z0+r*2}`,role:"img","aria-labelledby":"map-title"});for(const c of Qi)s.append(Ui("rect",{x:c.rect.x0,y:c.rect.z0,width:c.rect.x1-c.rect.x0,height:c.rect.z1-c.rect.z0,fill:c.dark?"#3a3a3e":wE[c.zone],stroke:"#9a978f","stroke-width":.15}));const a=[["zoneA",-29,.6],["zoneB",26,.6],["zoneC",-3.5,-15.3],["hall",0,7.3]];for(const[c,d,h]of a)s.append(Ui("text",{x:d,y:h,class:"map__zone","text-anchor":"middle"},[kh[c].name]));s.append(Ui("text",{x:0,y:13.2,class:"map__zone","text-anchor":"middle"},["\u5165\u53E3"]));const o=Y("ol",{class:"map__list"});for(const c of pa){const d=Qh.find(m=>m.id===c.id),h=c.x+Math.sin(c.rotation)*1.2,f=c.z+Math.cos(c.rotation)*1.2,g=Ui("g",{class:"map__marker",transform:`translate(${h} ${f})`,tabindex:-1,"data-id":c.id});g.append(Ui("circle",{r:1.35}),Ui("text",{"text-anchor":"middle",dy:.5},[d.number])),g.addEventListener("click",()=>this.actions.warp(c.id)),s.append(g),this.markers.set(c.id,g);const _=Y("button",{class:"map__item",attrs:{type:"button","data-testid":`map-item-${c.id}`},on:{click:()=>this.actions.warp(c.id)}},[Y("span",{class:"map__num",text:d.number}),Y("span",{class:"map__title",text:d.title}),Y("span",{class:"map__visited",text:"\u9451\u8CDE\u6E08\u307F"})]);this.items.set(c.id,_),o.append(Y("li",{},[_]))}this.player=Ui("g",{class:"map__player"},[Ui("circle",{r:2.2,class:"map__player-halo"}),Ui("path",{d:"M 0 -1.6 L 1.1 1.1 L 0 0.5 L -1.1 1.1 Z"})]),s.append(this.player),this.closeBtn=Y("button",{class:"btn",text:"\u9589\u3058\u308B",attrs:{type:"button","data-testid":"map-close"},on:{click:()=>this.actions.close()}});const u=Y("p",{class:"map__count"});this.el=Y("section",{class:"screen overlay map",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"map-title","data-testid":"floor-map"}},[Y("div",{class:"overlay__panel map__panel"},[Y("header",{class:"overlay__header"},[Y("h2",{id:"map-title",text:"\u30D5\u30ED\u30A2\u30DE\u30C3\u30D7"}),u,this.closeBtn]),Y("div",{class:"map__body"},[Y("div",{class:"map__figure"},[s]),Y("nav",{class:"map__nav",attrs:{"aria-label":"\u4F5C\u54C1\u4E00\u89A7\uFF08\u9078\u3076\u3068\u305D\u306E\u4F5C\u54C1\u3078\u79FB\u52D5\uFF09"}},[o])])])]),this.el.addEventListener("click",c=>{c.target===this.el&&this.actions.close()});const l=()=>{const c=e.get(),d=c.mode==="map",h=this.el.hidden;if(zt(this.el,d),!d)return;for(const[_,m]of this.markers){const p=c.visited.includes(_);m.classList.toggle("is-visited",p),this.items.get(_).classList.toggle("is-visited",p)}const f=pa.filter(_=>c.visited.includes(_.id)).length;u.textContent=`\u9451\u8CDE\u6E08\u307F ${f} / ${pa.length}`;const g=this.getPlayer();this.player.setAttribute("transform",`translate(${g.x} ${g.z}) rotate(${-g.yaw*180/Math.PI})`),h&&this.closeBtn.focus({preventScroll:!0})};e.subscribe(l),l()}el;markers=new Map;items=new Map;player;closeBtn},jd={auto:"\u81EA\u52D5",low:"\u4F4E",medium:"\u4E2D",high:"\u9AD8"},AE=class{constructor(e,t){this.store=e;const i=Y("select",{id:"set-quality",on:{change:()=>t.update({quality:i.value})}},Object.keys(jd).map(f=>Y("option",{text:jd[f],attrs:{value:f}}))),n=Y("output",{attrs:{for:"set-sensitivity"}}),r=Y("input",{id:"set-sensitivity",attrs:{type:"range",min:.3,max:2.5,step:.1},on:{input:()=>t.update({mouseSensitivity:Number(r.value)})}}),s=Y("output",{attrs:{for:"set-fov"}}),a=Y("input",{id:"set-fov",attrs:{type:"range",min:55,max:95,step:1},on:{input:()=>t.update({fov:Number(a.value)})}}),o=(f,g)=>{const _=Y("input",{id:f,attrs:{type:"checkbox"}});return _.addEventListener("change",()=>g(_.checked)),_},u=o("set-invert",f=>t.update({invertY:f})),l=o("set-reduced",f=>t.update({reducedMotion:f})),c=o("set-sound",f=>t.update({muted:!f}));this.inputs={quality:i,sensitivity:r,sensitivityOut:n,fov:a,fovOut:s,invertY:u,reducedMotion:l,sound:c};const d=(f,g,_,m,p)=>Y("div",{class:"settings__row"},[Y("label",{text:f,attrs:{for:g}}),Y("div",{class:"settings__control"},[_,m??null]),p?Y("p",{class:"settings__note",text:p}):null]);this.el=Y("section",{class:"screen overlay settings",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"settings-title","data-testid":"settings"}},[Y("div",{class:"overlay__panel settings__panel"},[Y("header",{class:"overlay__header"},[Y("h2",{id:"settings-title",text:"\u8A2D\u5B9A"}),Y("button",{class:"btn",text:"\u9589\u3058\u308B",attrs:{type:"button","data-testid":"settings-close"},on:{click:()=>t.close()}})]),d("\u753B\u8CEA","set-quality",i,void 0,"\u300C\u81EA\u52D5\u300D\u306F\u52D5\u4F5C\u306E\u91CD\u3055\u306B\u5408\u308F\u305B\u3066\u753B\u8CEA\u3092\u4E0B\u3052\u307E\u3059\u3002"),d("\u30DE\u30A6\u30B9\u611F\u5EA6","set-sensitivity",r,n),d("\u8996\u91CE\u89D2","set-fov",a,s),d("\u4E0A\u4E0B\u306E\u64CD\u4F5C\u3092\u53CD\u8EE2","set-invert",u),d("\u52D5\u304D\u3092\u6E1B\u3089\u3059","set-reduced",l,void 0,"\u30AB\u30E1\u30E9\u306E\u79FB\u52D5\u3092\u30D5\u30A7\u30FC\u30C9\u306B\u7F6E\u304D\u63DB\u3048\u3001\u4F5C\u54C1\u306E\u52D5\u304D\u3092\u63A7\u3048\u3081\u306B\u3057\u307E\u3059\u3002"),d("\u30B5\u30A6\u30F3\u30C9\uFF08\u74B0\u5883\u97F3\u30FB\u8DB3\u97F3\uFF09","set-sound",c),Y("div",{class:"settings__footer"},[Y("button",{class:"btn btn--ghost",text:"\u9451\u8CDE\u306E\u8A18\u9332\u3092\u6D88\u3059",attrs:{type:"button"},on:{click:()=>t.resetProgress()}})])])]),this.el.addEventListener("click",f=>{f.target===this.el&&t.close()});const h=()=>{const f=this.store.get(),g=f.mode==="settings",_=this.el.hidden;if(zt(this.el,g),!g)return;const m=f.settings,p=this.inputs;p.quality.value=m.quality,p.sensitivity.value=String(m.mouseSensitivity),p.sensitivityOut.textContent=`${m.mouseSensitivity.toFixed(1)}\xD7`,p.fov.value=String(m.fov),p.fovOut.textContent=`${Math.round(m.fov)}\xB0`,p.invertY.checked=m.invertY,p.reducedMotion.checked=m.reducedMotion,p.sound.checked=!m.muted,_&&p.quality.focus({preventScroll:!0})};e.subscribe(h),h()}el;inputs},TE=class{el;knob;pointer=null;cx=0;cy=0;constructor(e,t,i){this.knob=Y("div",{class:"stick__knob"});const n=Y("div",{class:"stick__base"},[this.knob]);this.el=Y("div",{class:"stick",attrs:{"aria-label":"\u79FB\u52D5\uFF08\u30C9\u30E9\u30C3\u30B0\uFF09",role:"application","data-testid":"stick"}},[n]);const r=()=>n.clientWidth/2,s=u=>{const l=r();let c=u.clientX-this.cx,d=u.clientY-this.cy;const h=Math.hypot(c,d);h>l&&(c=c/h*l,d=d/h*l),this.knob.style.transform=`translate(${c}px, ${d}px)`,t.setStick(c/l,-d/l)},a=()=>{this.pointer=null,this.knob.style.transform="",t.setStick(0,0)};n.addEventListener("pointerdown",u=>{if(this.pointer!==null)return;this.pointer=u.pointerId,n.setPointerCapture(u.pointerId);const l=n.getBoundingClientRect();this.cx=l.left+l.width/2,this.cy=l.top+l.height/2,s(u),u.preventDefault()}),n.addEventListener("pointermove",u=>{u.pointerId===this.pointer&&s(u)}),n.addEventListener("pointerup",u=>{u.pointerId===this.pointer&&a()}),n.addEventListener("pointercancel",a);const o=()=>{const u=e.get().mode==="walking";zt(this.el,i&&u),!u&&this.pointer!==null&&a()};e.subscribe(o),o()}};function CE(e){return e==="low"||e==="medium"||e==="high"?e:null}var Fa=()=>new Promise(e=>requestAnimationFrame(()=>e()));function RE(e,t){return e>720?{right:392,bottom:0}:{right:0,bottom:Math.round(t*.45)}}var DE=.8,PE=12,ef=.9,FE=38,LE=4,tf=["low","medium","high"],BE=class{constructor(e){this.container=e,this.renderer=C1(e);const{saved:t,hadSettings:i}=b1(),n=t.settings;i||(n.reducedMotion=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1);const r=CE(this.params.get("quality"));r&&(n.quality=r);const s=n.quality==="auto"?Nh(this.renderer):n.quality;this.store=new S1({...w1(n,s),visited:t.visited,hintViewed:t.hintViewed}),Ih(this.renderer,s),this.touch=window.matchMedia?.("(pointer: coarse)").matches??!1,this.camera=new Qt(n.fov,e.clientWidth/Math.max(1,e.clientHeight),.05,400),this.scene.add(this.camera),this.input=new D1(this.renderer.domElement),this.player=new hx(this.collision,this.input,()=>this.store.get().settings),this.loop=new F1(this.renderer,(a,o)=>this.frame(a,o)),this.pointerLockUsable="requestPointerLock"in this.renderer.domElement&&!window.matchMedia?.("(pointer: coarse)").matches,this.uiRoot=document.createElement("div"),this.uiRoot.id="ui",document.body.appendChild(this.uiRoot),this.fadeEl=document.createElement("div"),this.fadeEl.className="fade",this.fadeEl.setAttribute("aria-hidden","true"),document.body.appendChild(this.fadeEl),this.rig=new dx(this.camera,this.player,()=>this.store.get().settings.fov,()=>this.store.get().settings.reducedMotion,this.fadeEl),this.rig.setViewport(e.clientWidth,e.clientHeight),this.exhibits=new dE(this.scene,this.collision,a=>this.exhibitContext(a)),this.createUi(),this.bindEvents(),this.bindPersistence()}store;renderer;scene=new Jo;camera;input;collision=new U1;player;rig;exhibits;loop;uiRoot;fadeEl;hud=null;audio=new B1;overlayReturn="walking";slowTime=0;touch;museum=null;lighting=null;pointerLockUsable=!0;transitioning=!1;ndc=new le;params=new URLSearchParams(window.__OPUS_QUERY);get fps(){return this.loop.fps}get textureSize(){return is[this.store.get().quality].artTextureSize}async init(){const e=this.store,t=is[e.get().quality],i=r=>e.set({loadingProgress:Math.min(.99,r)});this.buildWorld(),i(.15),await Fa(),this.buildLighting(t.shadowMapSize),i(.3),await Fa(),await this.exhibits.loadZones(["entrance","plane"],(r,s)=>{i(.3+.5*r/s)}),await this.warmUp(),i(.95),this.player.teleport(fr.x,fr.z,fr.yaw),this.updateZone(),this.loop.start();const n=this.params.get("exhibit");mE(n)&&this.exhibits.has(n)?(e.set({loadingProgress:1,mode:"walking"}),await this.openExhibit(n,{instant:!0})):e.set({loadingProgress:1,mode:"start"}),this.exhibits.loadRemaining(async()=>{await Fa(),await Fa()})}enter(){this.store.set({mode:"walking"}),this.lockPointer(),this.audio.start(this.store.get().settings.muted)}openOverlay(e){const t=this.store.get();t.mode==="loading"||t.mode==="start"||this.transitioning||(t.mode!=="map"&&t.mode!=="settings"&&(this.overlayReturn=t.mode),this.input.exitPointerLock(),this.input.clearKeys(),this.store.set({mode:e}))}closeOverlay(){const e=this.overlayReturn;this.store.set({mode:e}),e==="walking"&&this.lockPointer()}openMap(){this.openOverlay("map")}openSettings(){this.openOverlay("settings")}async warpTo(e){this.store.set({mode:"walking"}),await this.openExhibit(e)}updateSettings(e){const t=this.store.get().settings;this.store.updateSettings(e);const i=this.store.get().settings;if(e.quality&&e.quality!==t.quality){const n=i.quality==="auto"?Nh(this.renderer):i.quality;this.setQuality(n)}e.muted!==void 0&&e.muted!==t.muted&&(i.muted?this.audio.setMuted(!0):this.audio.start(!1))}setQuality(e){if(e===this.store.get().quality)return;this.store.set({quality:e}),Ih(this.renderer,e),this.resize();const t=is[e].shadowMapSize,i=this.lighting?.sun;i&&i.shadow.mapSize.x!==t&&(i.shadow.mapSize.set(t,t),i.shadow.map?.dispose(),i.shadow.map=null,this.renderer.shadowMap.needsUpdate=!0)}resetProgress(){this.store.set({visited:[],hintViewed:[]}),T1(),this.saveNow()}saveNow(){const e=this.store.get();A1({settings:e.settings,visited:e.visited,hintViewed:e.hintViewed})}bindPersistence(){this.store.subscribe((e,t)=>{(e.settings!==t.settings||e.visited!==t.visited||e.hintViewed!==t.hintViewed)&&this.saveNow()})}resume(){const e=this.store.get();this.store.set({mode:e.resumeMode}),e.resumeMode==="walking"&&this.lockPointer()}pause(){const e=this.store.get();e.mode!=="walking"&&e.mode!=="viewing"||(this.input.clearKeys(),this.store.set({mode:"paused",resumeMode:e.mode}))}viewportSpec(e=!0){const t=this.container.clientWidth,i=Math.max(1,this.container.clientHeight),n=e?RE(t,i):{right:0,bottom:0};return{width:t,height:i,insetRight:n.right,insetBottom:n.bottom}}async openExhibit(e,t={}){if(!(!this.exhibits.has(e)||this.transitioning)){this.transitioning=!0;try{const i=this.store.get(),n=i.activeExhibitId;n&&this.leaveExhibit(n),await this.exhibits.ensureReady(e);const r=this.exhibits.get(e);this.input.exitPointerLock(),this.input.clearKeys();const s=this.viewportSpec(!0);this.rig.setInsets({right:s.insetRight,bottom:s.insetBottom});const a=this.exhibits.viewPose(e,s),o=this.exhibits.standPoint(e,s),u=this.camera.position.distanceTo(a.position)>PE;this.store.set({mode:"viewing",resumeMode:"viewing",activeExhibitId:e,nearbyExhibitId:null,hintStage:"hidden",demoPlaying:!1,visited:i.visited.includes(e)?i.visited:[...i.visited,e]}),this.player.teleport(o.x,o.z,o.yaw),this.updateZone(),r.exhibit.onEnterView?.();const l=r.exhibit.viewMode;this.rig.setBase(a,l.kind==="fixed"?l.allowShift??0:0),t.instant?await this.rig.flyTo(a,0):u?await this.fadeTo(a):await this.rig.flyTo(a,DE)}finally{this.transitioning=!1}}}async fadeTo(e){await this.rig.flyTo(e,1,void 0,"fade")}leaveExhibit(e){const t=this.exhibits.get(e);t&&(t.exhibit.stopDemo?.(),t.exhibit.setHintVisible?.(!1),t.exhibit.onExitView?.())}async closeExhibit(e={}){const t=this.store.get().activeExhibitId;if(!(!t||this.transitioning)){this.transitioning=!0;try{this.leaveExhibit(t);const i=!!e.toPaused&&this.pointerLockUsable;i||this.lockPointer(),this.store.set({hintStage:"hidden",demoPlaying:!1}),this.rig.setInsets({right:0,bottom:0}),await this.rig.flyTo(this.rig.playerPose(),.6),this.rig.follow(),this.store.set({mode:i?"paused":"walking",resumeMode:"walking",activeExhibitId:null})}finally{this.transitioning=!1}}}async stepExhibit(e){const t=this.store.get().activeExhibitId;if(!t)return;const i=this.exhibits.neighbors(t);await this.openExhibit(e>0?i.next:i.prev)}setHintStage(e){const t=this.store.get(),i=t.activeExhibitId;if(!i||t.mode!=="viewing")return;const n=this.exhibits.get(i);e==="hidden"&&t.demoPlaying&&this.stopDemo(),n.exhibit.setHintVisible?.(e!=="hidden"),this.store.set({hintStage:e,hintViewed:e!=="hidden"&&!t.hintViewed.includes(i)?[...t.hintViewed,i]:t.hintViewed})}async playDemo(){const e=this.store.get(),t=e.activeExhibitId;if(!t||e.demoPlaying||e.hintStage==="hidden")return;const i=this.exhibits.get(t).exhibit;i.playDemo&&(this.store.set({demoPlaying:!0}),await i.playDemo(),this.store.get().activeExhibitId===t&&this.store.get().demoPlaying&&(this.store.set({demoPlaying:!1}),await this.rig.returnToBase(.8)))}stopDemo(){const e=this.store.get().activeExhibitId;e&&(this.exhibits.get(e).exhibit.stopDemo?.(),this.store.set({demoPlaying:!1}),this.rig.returnToBase(.6))}toggleDemo(){this.store.get().demoPlaying?this.stopDemo():this.playDemo()}lockPointer(){this.pointerLockUsable&&this.input.requestPointerLock()}createUi(){const e=new gE(this.store),t=new vE(this.store,()=>this.enter(),u=>this.updateSettings(u)),i=new _E(this.store,{resume:()=>this.resume(),openMap:()=>this.openMap(),openSettings:()=>this.openSettings()}),n=new bE(this.store,{close:()=>this.closeOverlay(),warp:u=>void this.warpTo(u)},()=>({x:this.player.position.x,z:this.player.position.z,yaw:this.player.yaw})),r=new AE(this.store,{update:u=>this.updateSettings(u),close:()=>this.closeOverlay(),resetProgress:()=>this.resetProgress()}),s=new TE(this.store,this.input,this.touch),a=this.hud=new EE(this.store,{viewNearby:()=>{const u=this.store.get().nearbyExhibitId;u&&this.openExhibit(u)},openMap:()=>this.openMap(),openSettings:()=>this.openSettings()}),o=new ME(this.store,{content:u=>this.exhibits.get(u).content,hasDemo:u=>{const l=this.exhibits.get(u);return!!l?.exhibit.playDemo&&!!l.content.demoLabel},actions:u=>this.exhibits.get(u)?.exhibit.panelActions??[]},{close:()=>void this.closeExhibit(),prev:()=>void this.stepExhibit(-1),next:()=>void this.stepExhibit(1),setHintStage:u=>this.setHintStage(u),toggleDemo:()=>this.toggleDemo()});this.uiRoot.append(a.el,s.el,o.el,i.el,n.el,r.el,t.el,e.el)}bindEvents(){window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>{!this.input.pointerLocked&&this.store.get().mode==="walking"&&!this.transitioning&&this.pause()}),document.addEventListener("pointerlockerror",()=>{this.pointerLockUsable=!1}),this.input.onClick(e=>this.onCanvasClick(e)),this.input.onKey(e=>this.onKey(e))}onKey(e){const t=this.store.get();if(!e.repeat){if(t.mode==="map"||t.mode==="settings"){(e.code==="Escape"||e.code==="KeyM"&&t.mode==="map")&&this.closeOverlay();return}if(e.code==="KeyM"&&(t.mode==="walking"||t.mode==="viewing"||t.mode==="paused")){this.openMap();return}if(t.mode==="walking"){e.code==="KeyE"&&t.nearbyExhibitId&&this.openExhibit(t.nearbyExhibitId);return}if(t.mode==="viewing")switch(e.code){case"Escape":this.closeExhibit({toPaused:!0});break;case"KeyQ":this.closeExhibit();break;case"KeyH":this.setHintStage(t.hintStage==="hidden"?"appearance":"hidden");break;case"ArrowLeft":this.stepExhibit(-1);break;case"ArrowRight":this.stepExhibit(1);break}}}onCanvasClick(e){const t=this.store.get(),i=this.renderer.domElement.getBoundingClientRect();if(this.input.pointerLocked?this.ndc.set(0,0):this.ndc.set((e.clientX-i.left)/i.width*2-1,-((e.clientY-i.top)/i.height)*2+1),t.mode==="walking"){const n=this.exhibits.pick(this.ndc,this.camera);if(n){this.openExhibit(n);return}this.input.pointerLocked||this.lockPointer();return}t.mode==="viewing"&&t.activeExhibitId&&this.exhibits.get(t.activeExhibitId)?.exhibit.onViewClick?.({x:this.ndc.x,y:this.ndc.y})}exhibitContext(e){const t=this.store,i=this.rig,n=this.exhibits,r=this.camera,s=()=>this.textureSize,a=(o,u)=>this.hud?.toast(o,u);return{renderer:this.renderer,camera:r,scene:this.scene,get quality(){return t.get().quality},get textureSize(){return s()},get reducedMotion(){return t.get().settings.reducedMotion},notify:a,rig:{flyTo:(o,u=1.4,l)=>i.flyTo(n.shotToWorld(e.id,o,r.fov),u,l),returnToView:(o=1,u)=>i.returnToBase(o,u)}}}buildWorld(){this.museum=tx(1024),this.scene.add(this.museum.group),this.collision.add(...this.museum.colliders),this.scene.add(ax())}buildLighting(e){this.lighting=rx(this.renderer,this.scene,qh(Qi),e),this.scene.add(this.lighting.group),this.renderer.shadowMap.needsUpdate=!0}async warmUp(){this.player.teleport(fr.x,fr.z,fr.yaw),this.rig.update(),await this.renderer.compileAsync(this.scene,this.camera),this.renderer.render(this.scene,this.camera)}resize(){const e=this.container.clientWidth,t=Math.max(1,this.container.clientHeight);this.renderer.setSize(e,t),this.rig.setViewport(e,t);const i=this.store.get();if(i.mode==="viewing"&&i.activeExhibitId&&!i.demoPlaying){const n=this.viewportSpec(!0);this.rig.setInsets({right:n.insetRight,bottom:n.insetBottom});const r=i.activeExhibitId,s=this.exhibits.get(r).exhibit.viewMode,a=this.exhibits.viewPose(r,n);this.rig.setBase(a,s.kind==="fixed"?s.allowShift??0:0),this.rig.flyTo(a,0)}}autoQuality(e){const t=this.store.get();if(t.settings.quality!=="auto"||t.mode!=="walking"&&t.mode!=="viewing"||(this.loop.fps<FE?this.slowTime+=e:this.slowTime=Math.max(0,this.slowTime-e*2),this.slowTime<LE))return;this.slowTime=0;const i=tf.indexOf(t.quality);i>0&&this.setQuality(tf[i-1])}updateZone(){const e=X1(this.player.position.x,this.player.position.z);e&&this.store.set({zoneId:e.zone})}frame(e,t){const i=this.store.get(),n=i.mode==="walking",r=i.mode==="viewing";if(ss.update(e),this.input.dragLookEnabled=n&&(!this.pointerLockUsable||!this.input.pointerLocked)||r&&this.rig.canShift,r&&this.rig.canShift){let a=this.input.consumeLook().dx*.004;this.input.isDown("KeyA")&&(a-=ef*e),this.input.isDown("KeyD")&&(a+=ef*e),a!==0&&this.rig.addShift(a)}if(this.player.update(e,n),this.audio.update(e,n?this.player.speed:0),this.rig.update(),this.autoQuality(e),n){this.updateZone();const s=this.exhibits.findNearby(this.player.position,this.player.forward(),this.viewportSpec(!0));s!==i.nearbyExhibitId&&this.store.set({nearbyExhibitId:s})}this.exhibits.update(e,this.player.position,i.activeExhibitId),this.renderer.render(this.scene,this.camera)}},nf=document.getElementById("app");if(!nf)throw new Error("#app \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093");var IE=new BE(nf);IE.init().catch(e=>{console.error(e);const t=document.createElement("p");t.className="fatal",t.textContent="\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u306F 3D \u8868\u793A\u3092\u958B\u59CB\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002WebGL2 \u306B\u5BFE\u5FDC\u3057\u305F\u6700\u65B0\u306E\u30D6\u30E9\u30A6\u30B6\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002",document.body.appendChild(t)})})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
