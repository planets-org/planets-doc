---
sidebar_label: "PLATユーザ登録"
sidebar_position: 11
---

# PLAT ユーザ登録

PLAT にて新規ユーザ登録、ID紐づけを行う。
なお、PLAT では登録されたPatientリソースを管理する。

## 1. 医療機関による登録

1. 医療機関の管理者 または 医師によるユーザ登録

   - 自病院に対してのPLAT の新規ユーザ登録
   [PLAT API 01.マスタ系] - [Local] - [PRV_USR_001：【登録】ユーザ情報（医療機関用）]に登録したいユーザの情報を入力し管理者 または 医師のトークンで実行する。
   （管理者のトークン発行については[Postman の実行（ユーザ認証〜API アクセスまで各環境の一気通貫確認）](../../private_docs/Usage/operation_check.md) を参照）

   - PLAT 共通 ID と自病院の患者 ID との紐づけ
   [PLAT API 01.マスタ系] - [Local] - [PRV_PAT_001：【登録】PLAT患者情報（医療機関用）.md]に紐づけしたいユーザの情報を入力し管理者 または 医師のトークンで実行する。

## 2. 患者による登録

   - 患者自身のPLAT の新規ユーザ登録
   [PLAT API 01.マスタ系] - [Patient] - [PTP_USR_001：【登録】ユーザ情報（患者用）]に登録したいユーザの情報を入力し患者のトークンで実行する。
   （患者のトークン発行については[Postman の実行（ユーザ認証〜API アクセスまで各環境の一気通貫確認）](../../private_docs/Usage/operation_check.md) を参照）

### 3. フロー

   - 新規ユーザ登録
   ```mermaid
   sequenceDiagram
   actor Client
   participant gateway as PLAT_Gateway
   participant api as PLAT_API
   participant keycloak as KeyCloak
   Client->>gateway: ユーザ登録
   Note left of gateway: アクセストークン
   gateway->>keycloak: アクセストークンの確認
   gateway->>gateway: 認可チェック
   gateway->>api: API呼び出し（ユーザ登録）<br/>・PRV_USR_001<br/>・PTP_USR_001
   api->>api: 患者登録(PLAT_ID発行、認証情報と紐づけ)
   api->>Client: APIレスポンス(ユーザ登録)
   ```

   - PLAT 共通 ID と自病院の患者 ID との紐づけ
   ```mermaid
   sequenceDiagram
   actor Client
   participant gateway as PLAT_Gateway
   participant api as PLAT_API
   participant keycloak as KeyCloak
   Client->>gateway: 認証情報紐づけ(PLAT_ID)
   Note left of gateway: アクセストークン
   gateway->>keycloak: アクセストークンの確認
   gateway->>gateway: 認可チェック
   gateway->>api: 認証情報紐付け(PLAT_ID)<br/>・PRV_PAT_001
   api->>api: PLAT_IDで登録されている情報に<br/>アクセストークンのID情報を紐づけ
   api->>Client: APIレスポンス(認証情報紐づけ)
   ```