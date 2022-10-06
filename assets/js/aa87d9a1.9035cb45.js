"use strict";(self.webpackChunkmy_website_0729=self.webpackChunkmy_website_0729||[]).push([[9529],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),k=r,u=d["".concat(i,".").concat(k)]||d[k]||m[k]||o;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Postman\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d",sidebar_position:1},l="Postman \u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d",p={unversionedId:"Usage/operation_check",id:"Usage/operation_check",title:"Postman \u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d",description:"1. \u6982\u8981",source:"@site/docs/Usage/operation_check.md",sourceDirName:"Usage",slug:"/Usage/operation_check",permalink:"/planets-doc/docs/Usage/operation_check",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Postman\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806",permalink:"/planets-doc/docs/Setup/init_docker"},next:{title:"\u5916\u90e8\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304b\u3089PLAT\u3092\u5229\u7528\u3059\u308b",permalink:"/planets-doc/docs/Usage/external"}},i={},c=[{value:"1. \u6982\u8981",id:"1-\u6982\u8981",level:2},{value:"2. \u4e8b\u524d\u6e96\u5099",id:"2-\u4e8b\u524d\u6e96\u5099",level:2},{value:"3. \u624b\u9806",id:"3-\u624b\u9806",level:2},{value:"3.1. Postman \u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080",id:"31-postman-\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080",level:3},{value:"3.2. KeyCloak \u306e\u8a2d\u5b9a",id:"32-keycloak-\u306e\u8a2d\u5b9a",level:3},{value:"3.3. Postman \u306e\u5b9f\u884c\uff08\u30e6\u30fc\u30b6\u8a8d\u8a3c\u301cAPI \u30a2\u30af\u30bb\u30b9\u307e\u3067\u5404\u74b0\u5883\u306e\u4e00\u6c17\u901a\u8cab\u78ba\u8a8d\uff09",id:"33-postman-\u306e\u5b9f\u884c\u30e6\u30fc\u30b6\u8a8d\u8a3capi-\u30a2\u30af\u30bb\u30b9\u307e\u3067\u5404\u74b0\u5883\u306e\u4e00\u6c17\u901a\u8cab\u78ba\u8a8d",level:2}],s={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postman-\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d"},"Postman \u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d"),(0,r.kt)("h2",{id:"1-\u6982\u8981"},"1. \u6982\u8981"),(0,r.kt)("p",null,"PLAT \u74b0\u5883\u306e\u69cb\u7bc9\u5f8c\u306b\u52d5\u4f5c\u78ba\u8a8d\u3092\u3059\u308b\u305f\u3081\u306e\u624b\u9806\u3092\u8a18\u8f09\u3059\u308b\u3002"),(0,r.kt)("h2",{id:"2-\u4e8b\u524d\u6e96\u5099"},"2. \u4e8b\u524d\u6e96\u5099"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Postman \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb")),(0,r.kt)("h2",{id:"3-\u624b\u9806"},"3. \u624b\u9806"),(0,r.kt)("h3",{id:"31-postman-\u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080"},"3.1. Postman \u306b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Postman \u3092\u8d77\u52d5\u3057","[File][Import]"," \u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"image.png",src:a(8394).Z,width:"1792",height:"1304"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[Upload Files]"," \u3092\u62bc\u4e0b\u3057\u3001\u51e6\u7406\u5b9a\u7fa9\uff08planets-lib/postman/collection \u914d\u4e0b\uff09\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PLAT \u758e\u901a\u78ba\u8a8d.postman_collection.json"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[Upload Files]"," \u3092\u62bc\u4e0b\u3057\u3001\u74b0\u5883\u5909\u6570\uff08planets-lib/postman/environment \u914d\u4e0b\uff09\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PLAT \u30ea\u30ea\u30fc\u30b9\u74b0\u5883.postman_environment.json")))),(0,r.kt)("h3",{id:"32-keycloak-\u306e\u8a2d\u5b9a"},"3.2. KeyCloak \u306e\u8a2d\u5b9a"),(0,r.kt)("p",null,"\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30e6\u30fc\u30b6\u3092\u767b\u9332\uff08\u8a73\u7d30\u306a\u624b\u9806\u306f ",(0,r.kt)("a",{parentName:"p",href:"/planets-doc/docs/Tips/add_keycloak_user"},"KeyCloak \u3078\u306e\u30e6\u30fc\u30b6\u767b\u9332\u624b\u9806")," \u3092\u53c2\u7167\uff09"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5de6\u306e\u30e1\u30cb\u30e5\u30fc\u304b\u3089 Users \u3092\u958b\u304d\u3001localclinicx.admin \u30e6\u30fc\u30b6\u3092\u751f\u6210\u3059\u308b\u3002\uff08\u30e6\u30fc\u30b6\u540d\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306f\u4efb\u610f\u3067\u826f\u3044\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u518d\u3073 Users \u3092\u958b\u304d\u3001View all users \u3092\u62bc\u4e0b\u3059\u308b\u3068\u4f5c\u6210\u3057\u305f\u30e6\u30fc\u30b6\u304c\u8868\u793a\u3055\u308c\u308b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30e6\u30fc\u30b6\u306e\u30ea\u30f3\u30af\u3092\u30af\u30ea\u30c3\u30af\u3057\u3001Credentials \u30bf\u30d6\u3067\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u8a2d\u5b9a\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\uff08\u5024\u306f localclinicx.admin\u3001Temporary \u306f OFF \u306b\u3057\u3066 Reset Password \u3092\u62bc\u4e0b\u3059\u308b\uff09"))),(0,r.kt)("h2",{id:"33-postman-\u306e\u5b9f\u884c\u30e6\u30fc\u30b6\u8a8d\u8a3capi-\u30a2\u30af\u30bb\u30b9\u307e\u3067\u5404\u74b0\u5883\u306e\u4e00\u6c17\u901a\u8cab\u78ba\u8a8d"},"3.3. Postman \u306e\u5b9f\u884c\uff08\u30e6\u30fc\u30b6\u8a8d\u8a3c\u301cAPI \u30a2\u30af\u30bb\u30b9\u307e\u3067\u5404\u74b0\u5883\u306e\u4e00\u6c17\u901a\u8cab\u78ba\u8a8d\uff09"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30e6\u30fc\u30b6\u8a8d\u8a3c\uff08\u7ba1\u7406\u30e6\u30fc\u30b6\uff1alocalclinicx.admin\uff09",(0,r.kt)("br",{parentName:"p"}),"\n","1.1. Postman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]"," - ","[\u2460COM_ATH_001.\u3010\u8a8d\u8a3c\u3011\u8a8d\u8a3c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8]"," \u3092\u958b\u304d\u3001Send \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",'1.2. Postman \u306e Console \u306b\u4ee5\u4e0b\u306e\u69d8\u306a URL \u304c\u751f\u6210\u3055\u308c\u308b\u306e\u3067\u3001"http"\u4ee5\u964d\u3092\u30b3\u30d4\u30fc\u3057\u3066 Web \u30d6\u30e9\u30a6\u30b6\u3067\u958b\u304f\u3002'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"GET http://localhost:8184/auth/realms/1310000001/protocol/openid-connect/auth?client_id=plat-public&scope=openid&response_type=code&redirect_uri=http://localhost:18182/callback&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256\n")),(0,r.kt)("p",{parentName:"li"},"1.3. localclinicx.admin \u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u3068\u753b\u9762\u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u7b49\u306b\u4fdd\u6301\u3057\u3066\u304a\u304f\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"8979899a-8a6e-4155-9115-d3dfe23b64af.b76fe821-d095-4a30-86d0-74f1dd5d8471.5a3c96e3-34cd-4dd6-a984-ff868b4f0eea\n")),(0,r.kt)("p",{parentName:"li"},"1.4. Postman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]"," - ","[\u2461COM_ATH_003.\u3010\u8a8d\u8a3c\u3011\u30c8\u30fc\u30af\u30f3\u53d6\u5f97]"," \u3092\u958b\u304d\u3001Body \u30bf\u30d6\u306e code\uff08\u4e0b\u56f3!!!replace_me!!!\u306e\u7b87\u6240\uff09\u306b 1.3. \u3067\u53d6\u5f97\u3057\u305f\u8a8d\u53ef\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u3066 Send \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"image.png",src:a(135).Z,width:"1167",height:"476"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30b9\u30bf\u30c3\u30d5\u306e\u767b\u9332",(0,r.kt)("br",{parentName:"p"}),"\n","2.1. Postman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]"," - ","[\u2462PRV_STF_003.\u3010\u767b\u9332\u3011\u30b9\u30bf\u30c3\u30d5\u7ba1\u7406\uff08\u8a8d\u8a3c\u60c5\u5831\u307e\u3067\u4e00\u62ec\u767b\u9332\uff09]"," \u3092\u958b\u304d\u3001Send \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u203b \u6b63\u5e38\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u3063\u3066\u304f\u308c\u3070 ID\uff1alocalclinicx.doctor0001\u3001\u30d1\u30b9\u30ef\u30fc\u30c9\uff1alocalclinicx.doctor0001 \u306e\u30e6\u30fc\u30b6\u304c KeyCloak \u306b\u767b\u9332\u3055\u308c\u3066\u3044\u308b\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u30e6\u30fc\u30b6\u8a8d\u8a3c\uff08\u30b9\u30bf\u30c3\u30d5\uff1alocalclinicx.doctor0001\uff09",(0,r.kt)("br",{parentName:"p"}),"\n","3.1. Postman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]"," - ","[\u2463COM_ATH_001.\u3010\u8a8d\u8a3c\u3011\u8a8d\u8a3c\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8]"," \u3092\u958b\u304d\u3001Send \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",'3.2. Postman \u306e Console \u306b\u4ee5\u4e0b\u306e\u69d8\u306a URL \u304c\u751f\u6210\u3055\u308c\u308b\u306e\u3067\u3001"http"\u4ee5\u964d\u3092\u30b3\u30d4\u30fc\u3057\u3066 Web \u30d6\u30e9\u30a6\u30b6\u3067\u958b\u304f\u3002',(0,r.kt)("br",{parentName:"p"}),"\n","\uff08\u30d1\u30b9\u30ef\u30fc\u30c9\u306e\u518d\u8a2d\u5b9a\u3092\u6c42\u3081\u3089\u308c\u305f\u5834\u5408\u3001\u300clocalclinicx.doctor0001\u300d\u3092\u8a2d\u5b9a\u3059\u308b\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"GET http://localhost:8184/auth/realms/1310000001/protocol/openid-connect/auth?client_id=plat-public&scope=openid&response_type=code&redirect_uri=http://localhost:18182/callback&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&code_challenge_method=S256\n")),(0,r.kt)("p",{parentName:"li"},"3.3. localclinicx.doctor0001 \u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3059\u308b\u3068\u753b\u9762\u306b\u8a8d\u53ef\u30b3\u30fc\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u306e\u3067\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u7b49\u306b\u4fdd\u6301\u3057\u3066\u304a\u304f\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"8979899a-8a6e-4155-9115-d3dfe23b64af.b76fe821-d095-4a30-86d0-74f1dd5d8471.5a3c96e3-34cd-4dd6-a984-ff868b4f0eea\n")),(0,r.kt)("p",{parentName:"li"},"3.4. Postman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]"," - ","[\u2464COM_ATH_003.\u3010\u8a8d\u8a3c\u3011\u30c8\u30fc\u30af\u30f3\u53d6\u5f97]"," \u3092\u958b\u304d\u3001Body \u30bf\u30d6\u306e code\uff08\u4e0b\u56f3!!!replace_me!!!\u306e\u7b87\u6240\uff09\u306b 3.3. \u3067\u53d6\u5f97\u3057\u305f\u8a8d\u53ef\u30b3\u30fc\u30c9\u3092\u8a2d\u5b9a\u3057\u3066 Send \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("img",{alt:"image.png",src:a(1110).Z,width:"1169",height:"473"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7d44\u7e54\u4e00\u89a7\u3092\u53d6\u5f97",(0,r.kt)("br",{parentName:"p"}),"\n","Postman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]"," - ","[\u2465PRV_ORG_001.\u3010\u53d6\u5f97\u3011\u6587\u66f8\u60c5\u5831\u304c\u5b58\u5728\u3059\u308b\u533b\u7642\u6a5f\u95a2\u30ea\u30b9\u30c8]"," \u3092\u958b\u304d\u3001Send \u30dc\u30bf\u30f3\u3092\u62bc\u4e0b\u3059\u308b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u203b\u3053\u3053\u3067\u6b63\u5e38\u306b\u30ec\u30b9\u30dd\u30f3\u30b9\u304c\u8fd4\u3063\u3066\u304f\u308c\u3070 plat-gateway \u2192 KeyCloak \u2192 plat-api(LocalX) \u2192 plat-api(Remote) \u2192 OpenFRUCtoS(Remote)\u306e\u4e00\u6c17\u901a\u8cab\u304c\u78ba\u8a8d\u5b8c\u4e86\u3002"))),(0,r.kt)("p",null,"\u203b\u4e0a\u8a18\u306e\u624b\u9806\u3092\u884c\u3046\u3068\u3001\u30af\u30ea\u30cb\u30c3\u30afX\u306badmin\u30e6\u30fc\u30b6\u3068\u30b9\u30bf\u30c3\u30d5\u304c1\u4eba\u305a\u3064\u767b\u9332\u3055\u308c\u308b\u3002\n\u203b\u30af\u30ea\u30cb\u30c3\u30afY\u306b\u304a\u3044\u3066\u4e0a\u8a18\u306e\u624b\u9806\u3092\u884c\u3046\u5834\u5408\u3001\u7ba1\u7406\u30b3\u30f3\u30bd\u30fc\u30eb\u304b\u3089\u30e6\u30fc\u30b6\u3092\u767b\u9332\uff08KeyCloak\u306e\u30ec\u30eb\u30e0\u306f1310000002\uff09\u3057\u3001\nPostman \u306e ","[PLAT \u758e\u901a\u78ba\u8a8d]"," - ","[LocalX]","\u306ePre-request Scripts \u306bLocalX , ClinicX\u3068\u8a18\u8f09\u304c\u3042\u308b\u30d1\u30e9\u30e1\u30bf\u540d\u3092LocalY, ClinicY\u306b\u5909\u66f4\u3059\u308b\u3002"))}m.isMDXComponent=!0},8394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-1b663dd4-3541-409a-bf16-64ffc8dda1d7-0848988cabb36047856adb6c53e1e702.png"},135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-postman0001-2686579abe5c781d1ea6b01d9a426a80.png"},1110:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-postman0002-3b59161de5d78bc15b5e4cd67e89742f.png"}}]);