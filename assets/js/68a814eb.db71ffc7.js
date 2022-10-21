"use strict";(self.webpackChunkmy_website_0729=self.webpackChunkmy_website_0729||[]).push([[2207],{9151:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>n,contentTitle:()=>r,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>i});var l=t(7462),o=(t(7294),t(3905));t(1839);const p={sidebar_label:"\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806",sidebar_position:3},r="\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806",c={unversionedId:"Setup/init_docker",id:"Setup/init_docker",title:"\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806",description:"1. \u521d\u671f\u5316\u624b\u9806",source:"@site/docs/Setup/init_docker.md",sourceDirName:"Setup",slug:"/Setup/init_docker",permalink:"/planets-doc/docs/Setup/init_docker",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u533b\u7642\u6a5f\u95a2\u3092\u8ffd\u52a0\u3059\u308b",permalink:"/planets-doc/docs/Setup/add_providers"},next:{title:"Postman\u3067\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u758e\u901a\u78ba\u8a8d",permalink:"/planets-doc/docs/Usage/operation_check"}},n={},i=[{value:"1. \u521d\u671f\u5316\u624b\u9806",id:"1-\u521d\u671f\u5316\u624b\u9806",level:2},{value:"1.1. \u904e\u53bb\u306b PLAT \u74b0\u5883\u3092\u69cb\u7bc9\u6e08\u307f\u3067 PLAT \u74b0\u5883\u306e\u307f\u518d\u4f5c\u6210\u3059\u308b\u5834\u5408",id:"11-\u904e\u53bb\u306b-plat-\u74b0\u5883\u3092\u69cb\u7bc9\u6e08\u307f\u3067-plat-\u74b0\u5883\u306e\u307f\u518d\u4f5c\u6210\u3059\u308b\u5834\u5408",level:3},{value:"1.2. Docker \u30b3\u30f3\u30c6\u30ca\u81ea\u4f53\u3092\u5b8c\u5168\u306b\u521d\u671f\u5316\u3059\u308b\u5834\u5408",id:"12-docker-\u30b3\u30f3\u30c6\u30ca\u81ea\u4f53\u3092\u5b8c\u5168\u306b\u521d\u671f\u5316\u3059\u308b\u5834\u5408",level:3}],d={toc:i};function m(e){let{components:a,...p}=e;return(0,o.kt)("wrapper",(0,l.Z)({},d,p,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806"},"\u74b0\u5883\u306e\u521d\u671f\u5316\u624b\u9806"),(0,o.kt)("h2",{id:"1-\u521d\u671f\u5316\u624b\u9806"},"1. \u521d\u671f\u5316\u624b\u9806"),(0,o.kt)("h3",{id:"11-\u904e\u53bb\u306b-plat-\u74b0\u5883\u3092\u69cb\u7bc9\u6e08\u307f\u3067-plat-\u74b0\u5883\u306e\u307f\u518d\u4f5c\u6210\u3059\u308b\u5834\u5408"},"1.1. \u904e\u53bb\u306b PLAT \u74b0\u5883\u3092\u69cb\u7bc9\u6e08\u307f\u3067 PLAT \u74b0\u5883\u306e\u307f\u518d\u4f5c\u6210\u3059\u308b\u5834\u5408"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8d77\u52d5\u4e2d\u306e Docker \u30b3\u30f3\u30c6\u30ca\u3092\u505c\u6b62"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"remote")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker stop remote_plat-db remote_keycloak-db remote_openfructos-db-1 remote_openfructos-db-2 remote_openfructos-audit-db-1 remote_openfructos-audit-db-2 remote_keycloak remote_openfructos-tomcat-1 remote_openfructos-tomcat-2 remote_plat-gateway remote_plat-api\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"localX")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker stop localX_plat-db localX_keycloak-db localX_openfructos-db localX_openfructos-audit-db localX_rabbitmq localX_keycloak localX_openfructos-tomcat localX_plat-gateway localX_plat-api localX_plat-mq localX_plat-sync localX_plat-autoapproval localX_plat-cleaning\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"localY")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker stop localY_plat-db localY_keycloak-db localY_openfructos-db localY_openfructos-audit-db localY_rabbitmq localY_keycloak localY_openfructos-tomcat localY_plat-gateway localY_plat-api localY_plat-mq localY_plat-sync localY_plat-autoapproval localY_plat-cleaning\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Docker \u306e\u30a4\u30e1\u30fc\u30b8\u3092\u524a\u9664"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"remote")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker rm remote_plat-db remote_keycloak-db remote_openfructos-db-1 remote_openfructos-db-2 remote_openfructos-audit-db-1 remote_openfructos-audit-db-2 remote_keycloak remote_openfructos-tomcat-1 remote_openfructos-tomcat-2 remote_plat-gateway remote_plat-api\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"localX")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker rm localX_plat-db localX_keycloak-db localX_openfructos-db localX_openfructos-audit-db localX_rabbitmq localX_keycloak localX_openfructos-tomcat localX_plat-gateway localX_plat-api localX_plat-mq localX_plat-sync localX_plat-autoapproval localX_plat-cleaning\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"localY")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker rm localY_plat-db localY_keycloak-db localY_openfructos-db localY_openfructos-audit-db localY_rabbitmq localY_keycloak localY_openfructos-tomcat localY_plat-gateway localY_plat-api localY_plat-mq localY_plat-sync localY_plat-autoapproval localY_plat-cleaning\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3001\u30ed\u30fc\u30ab\u30eb DB \u30c7\u30fc\u30bf\u30d5\u30a1\u30a4\u30eb\u3092\u524a\u9664")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# docker volume rm $(docker volume ls -qf dangling=true)\n")))),(0,o.kt)("h3",{id:"12-docker-\u30b3\u30f3\u30c6\u30ca\u81ea\u4f53\u3092\u5b8c\u5168\u306b\u521d\u671f\u5316\u3059\u308b\u5834\u5408"},"1.2. Docker \u30b3\u30f3\u30c6\u30ca\u81ea\u4f53\u3092\u5b8c\u5168\u306b\u521d\u671f\u5316\u3059\u308b\u5834\u5408"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Docker for Desktop \u306e\u4e0a\u90e8\u306b\u3042\u308b\u866b\u30a2\u30a4\u30b3\u30f3\u3092\u62bc\u4e0b\u3057\u3001Troubleshoot \u753b\u9762\u3092\u958b\u304f\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"image.png",src:t(7468).Z,width:"1250",height:"720"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[Clean / Purge data]","\u3092\u62bc\u4e0b",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"image.png",src:t(1716).Z,width:"1250",height:"720"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5168\u3066\u30c1\u30a7\u30c3\u30af\u3057\u3001","[Delete]","\u3092\u62bc\u4e0b",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"image.png",src:t(587).Z,width:"1250",height:"720"})))))}m.isMDXComponent=!0},1716:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-009f8087-367b-45da-b66d-7b38ecae8c3d-2d6a26a01579c4866c7ac7e8c2e819d7.png"},587:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-9148308a-a4e9-45f6-9a39-89760e5c3838-477bd90676d336c2c26c98358b3f3520.png"},7468:(e,a,t)=>{t.d(a,{Z:()=>l});const l=t.p+"assets/images/image-fae3f9dd-ebba-4110-abcb-b05d8edea370-d77f4a520f8cd5d896e795b926763439.png"}}]);