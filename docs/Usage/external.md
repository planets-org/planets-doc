---
sidebar_label: "外部クライアントからPLATを利用する"
sidebar_position: 2
---

# 外部クライアントから PLAT を利用する

## 1. 事前準備

- 環境構築手順を実施し、KeyCloak が利用可能な状態になっていること。

## 2. 設定手順

### 2.1. KeyCloak 上に新規クライアントを追加する。

1. ブラウザを開き、下記のどちらかにアクセスし、KeyCloak のトップページを開く。 
- 医療機関用：http://localhost:8184
- 患者用 ：http://localhost:8084
   ![image-2022-05-21 21.12.20.png](../.attachments/image-2022-05-21%2021.12.20-c349d6f0-2a90-4ec0-a164-b092b94c663c.png)

2. 「Administration Console」をクリックするすると以下の画面が開く。下記の通り入力し「Login」ボタンを押下する。  
    「ユーザ名またはアドレス」：admin  
   　　　　　　「パスワード」：admin  
    ![image-2022-05-21 21.14.47.png](../.attachments/image-2022-05-21%2021.14.47-4b060870-52ef-48c1-933a-81dab189c004.png)

3. レルムの中から「1310000001」をクリックする。  
   ![image-2022-05-21 21.18.10.png](../.attachments/image-2022-05-21%2021.18.10-dd55c6ea-41cc-4a99-a14f-520cc5867292.png)

4. 左側のメニューから「Clients」をクリックする。  
   クライアント一覧画面が開くので「Create」を押下する。

5. クライアントの追加画面が開くので以下の通り入力し、「Save」ボタンを押下する。  
   「Client ID」：必須。任意の値を設定  
   ![image-2022-05-23 2.55.32.png](../.attachments/image-2022-05-23%202.55.32-690326c9-7c3b-474c-ba62-2b641f712212.png)

6. 追加したクライアントの設定画面（「Settings」タブ）が開くので、以下の通り入力し、「Save」ボタンを押下する。  
   「Name」：Client ID と同様の値  
   「Description」：Client ID と同様の値  
   「Enabled」：ON  
   「Always Display in Console」：ON  
   「Consent Required」：OFF  
   「Login Theme」：base  
   「Client Protocol」：openid-connect  
   「Access Type」：public  
   「Standard Flow Enabled」：ON  
   「Implicit Flow Enabled」：OFF  
   「Direct Access Grants Enabled」：OFF  
   「Valid Redirect URIs」：任意の値  
   「Web Origins」：任意の値  
   「Advanced Settings - Proof Key for Code Exchange Code Challenge Method」：256

7. 「Client Scopes」タブを開き、Default Client Scopes の「email」「profile」を
   「Assigned Default Client Scopes」から「Available Client Scopes」に移す。

8. 「Mappers」タブを開き「Create」ボタンを押下する。

9. 「Create Protocol Mapper」画面が開くので以下の通り入力し、「Save」ボタンを押下するとマッパーの一覧に「PLAT-ID」が追加される。  
   「Name」：PLAT-ID  
   「Mapper Type」：User Attribute  
   「User Attribute」：PLAT-ID  
   「Token Claim Name」：PLAT-ID  
   「Claim JSON Type」：String  
   「Add to ID token」：OFF  
   「Add to access token」：ON  
   「Add to userinfo」：ON  
   「Multivalued」：OFF  
   「Aggregate attribute values」：OFF

10. 「Mappers」タブを開き「Create」ボタンを押下する。

11. 「Create Protocol Mapper」画面が開くので以下の通り入力し、「Save」ボタンを押下するとマッパーの一覧に「ORGANIZATION-ID」が追加される。  
    「Name」：ORGANIZATION-ID  
    「Mapper Type」：Hardcoded claim  
    「Token Claim Name」：ORGANIZATION-ID  
    「Claim JSON Type」：String  
    「Add to ID token」：OFF  
    「Add to access token」：ON  
    「Add to userinfo」：ON  
    「includeInAccessTokenResponse.label」：OFF

12. ここまで設定したら利用可能となるため、外部クライアント側で設定した情報を用いて打鍵確認します。
