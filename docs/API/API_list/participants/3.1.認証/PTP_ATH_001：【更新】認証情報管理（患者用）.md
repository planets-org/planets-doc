### 処理概要

PLAT の認証基盤に PLAT 共通 ID を紐付ける

| 機能 ID     | API 論理名                     | HTTP メソッド | URI                                     |
| :---------- | :----------------------------- | :------------ | :-------------------------------------- |
| PTP_ATH_001 | 【更新】認証情報管理（患者用） | PUT           | {applicationPath}/participants/accounts |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | リモート         |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名       | 物理名   | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領 |
| :-- | :----------- | :------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | ユーザ名     | username |  ○  |     |     |     |     |     |        | string | -        |                    |
| 2   | PLAT 共通 ID | platid   |  ○  |     |     |     |     |     |        | string | -        | PLAT_ID の値を設定 |

### サンプル（リクエスト）

```json
{
  "username": "takana.ichiro",
  "platId": "36b65929-6bd6-455d-9533-ba8c70da4e11"
}
```

### レスポンス

| No. | 項目名       | 物理名   | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領 |
| :-- | :----------- | :------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | ユーザ名     | username |  ○  |     |     |     |     |     |        | string | -        |                    |
| 2   | PLAT 共通 ID | platid   |  ○  |     |     |     |     |     |        | string | -        | PLAT_ID の値       |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
    "id": "3db1b66e-5a84-44ca-92ed-c18d0f7cb524",
    "createdTimestamp": 1669625889804,
    "username": "takana.ichiro",
    "enabled": true,
    "totp": false,
    "emailVerified": false,
    "disableableCredentialTypes": [],
    "requiredActions": [],
    "notBefore": 0,
    "access": {
    "manageGroupMembership": true,
    "view": true,
    "mapRoles": true,
    "impersonate": true,
    "manage": true
    },
    "attributes": {
    "PLAT-ID": [
    "36b65929-6bd6-455d-9533-ba8c70da4e11"
    ]
    },
    "groups": [
    "PARTICIPANTS"
    ]
}
```

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
