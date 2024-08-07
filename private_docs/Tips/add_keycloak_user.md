---
sidebar_label: "KeyCloakへのユーザ登録"
sidebar_position: 4
---

# KeyCloak へのユーザ登録

## 1. 事前準備

- セットアップ手順 > 新規に基盤を構築する の実施
  ※KeyCloak(http://localhost:8184)にアクセスできることを確認してください。

## 2. 設定手順

### 2.1. KeyCloak 上にユーザを追加する。

1. ブラウザを開き「http://localhost:8184」にアクセスし、KeyCloak のトップページを開く。  
   ![image-2022-05-21 21.12.20.png](../../docs/.attachments/image-2022-05-21%2021.12.20-c349d6f0-2a90-4ec0-a164-b092b94c663c.png)

1. 「Administration Console」をクリックするすると以下の画面が開く。下記の通り入力しログインボタンを押下する。  
    「ユーザ名またはアドレス」：admin  
   　　　　　　「パスワード」：admin  
    ![image-2022-05-21 21.14.47.png](../../docs/.attachments/image-2022-05-21%2021.14.47-4b060870-52ef-48c1-933a-81dab189c004.png)

1. レルムの中から「1310000001」をクリックする。  
   ![image-2022-05-21 21.18.10.png](../../docs/.attachments/image-2022-05-21%2021.18.10-dd55c6ea-41cc-4a99-a14f-520cc5867292.png)

1. 左側のメニューから「ユーザー」をクリックする。  
    ユーザ一覧画面が開くので「ユーザの追加」を押下する。  
   ![image-2022-05-21 21.20.15.png](../../docs/.attachments/image-2022-05-21%2021.20.15-36c930f7-8c30-40a5-8d92-dec8bc3fad63.png)

1. ユーザーの追加画面が開いたら以下の通り情報を入力し、保存ボタンを押下する。  
    「ユーザー名」：必須。値は任意  
    「E メール」：任意  
    「名」：任意  
    「性」：任意  
    「Groups」：/PROVIDERS  
   ![image-2022-05-21 21.33.46.png](../../docs/.attachments/image-2022-05-21%2021.33.46-97741fa2-7c0b-41fe-abeb-2c123c963815.png)

1. 以下の様に登録される。  
   ![image-2022-05-21 21.34.56.png](../../docs/.attachments/image-2022-05-21%2021.34.56-69657ff9-e43b-41ab-9e44-17a9381486b9.png)

### 2.2. KeyCloak 上のユーザにパスワードを設定する。

1. 左側のメニューから「ユーザー」をクリックする。  
    ユーザ一覧画面が開くので「すべてのユーザーを参照」を押下すると、登録済みのユーザーの一覧が表示されるので、パスワードを設定したいユーザーの ID 部分のリンクを押下する。  
   ![image-2022-05-21 21.36.58.png](../../docs/.attachments/image-2022-05-21%2021.36.58-77e6c41e-24b6-4ded-acbd-f23560490337.png)

1. 「クレデンシャル」タブをクリックし、パスワード設定欄を以下のように入力し、「パスワードを設定」ボタンを押下する。  
    「パスワード」：設定したい任意のパスワード文字列  
    「新しいパスワード（確認）」：設定したい任意のパスワード文字列  
    「一時的」：必ず「オフ」にすること  
   ![image-2022-05-21 21.39.30.png](../../docs/.attachments/image-2022-05-21%2021.39.30-aca68b85-8807-424d-a39b-0a9addd40efd.png)

1. 以下の様にクレデンシャルの管理にタイプが password のレコードが追加されればパスワードの設定は完了。  
   ![image-2022-05-21 21.43.04.png](../../docs/.attachments/image-2022-05-21%2021.43.04-c6ad34ae-5675-4e6b-b475-5137d53d049b.png)

1. ここまでで設定したユーザーの「ID」と「password」を利用して PLAT の認証 API にてログイン認証が可能となります。
