### 処理概要

PLAT 上にスタッフ情報を登録し、同時に認証情報を作成し紐付ける。

| 機能 ID     | API 論理名                | HTTP メソッド | URI                                         |
| :---------- |:-----------------------| :------------ | :------------------------------------------ |
| PRV_STF_003 | 【登録】スタッフ情報（認証情報まで一括登録） | POST          | {applicationPath}/providers/staffs/accounts |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル         |

### リクエスト（ヘッダー）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名                   | 物理名         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                  |
| :-- | :----------------------- | :------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :-------------------------------------------------- |
| 1   | ユーザ名                 | username       |  ○  |     |     |     |     |     |        | string | -        | KeyCloak に登録する username                        |
| 2   | 仮パスワード             | password       |  ○  |     |     |     |     |     |        | string | -        | KeyCloak の認証用仮パスワード                       |
| 3   | メールアドレス           | email          |  ○  |     |     |     |     |     |        | string | -        | KeyCloak に登録するメールアドレス情報               |
| 4   | 組織 ID                  | organizationId |  ○  |     |     |     |     |     |        | string | -        |                                                     |
| 5   | 診療科 ID                | departmentId   |  ○  |     |     |     |     |     |        | string | -        |                                                     |
| 6   | 職業                     | occupation     |  ○  |     |     |     |     |     |        | string | -        |                                                     |
| 7   | スタッフ情報オブジェクト | staffResource  |  ○  |     |     |     |     |     |        | object | -        |                                                     |
| 8   | リソース種別             | resourceType   |     |  ○  |     |     |     |     |        | string | -        | "Staff"固定                                         |
| 9   | 救急フラグ               | emergencyFlg   |     |  ○  |     |     |     |     |        | string | -        | [救急フラグ](../../../API_Domain_Definition_Table.md)                                       |
| 10  | 名称リスト               | name           |     |  ○  |     |     |     |     |        | object | -        |                                                     |
| 11  | 拡張リスト               | extension      |     |     |  ○  |     |     |     |        | object | -        |                                                     |
| 12  | URL                      | url            |     |     |     |  ○  |     |     |        | string | -        |                                                     |
| 13  | 値コード                 | valueCode      |     |     |     |  ○  |     |     |        | string | -        | [値コード](../../../API_Domain_Definition_Table.md)  |
| 14  | 姓                       | family         |     |     |  ○  |     |     |     |        | string | -        |                                                     |
| 15  | 名リスト                 | given          |     |     |  ○  |     |     |     |        | object | -        |                                                     |
| 16  | 名                       | -              |     |     |     |  ○  |     |     |        | string | -        |                                                     |

### サンプル（リクエスト）

```json
{
  "username": "yamamoto.taro",
  "password": "plat0001",
  "email": "yamamoto.taro@example.com",
  "organizationId": "1310000001",
  "departmentId": "00001",
  "occupation": "A",
  "staffResource": {
    "resourceType": "Staff",
    "emergencyFlg": 0,
    "name": [
      {
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
            "valueCode": "IDE"
          }
        ],
        "family": "山本",
        "given": ["太郎"]
      },
      {
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
            "valueCode": "SYL"
          }
        ],
        "family": "ヤマモト",
        "given": ["タロウ"]
      }
    ]
  }
}
```

### レスポンス

| No. | 項目名       | 物理名       | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領 |
| :-- | :----------- | :----------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | リソース種別 | resourceType |  ○  |     |     |     |     |     |        | string | -        |                    |
| 2   | 緊急フラグ   | emergencyFlg |  ○  |     |     |     |     |     |        | string | -        | [救急フラグ](../../../API_Domain_Definition_Table.md)                   |
| 3   | 名称リスト   | name         |  ○  |     |     |     |     |     |        | array  | -        |                    |
| 4   | 拡張リスト   | extension    |     |  ○  |     |     |     |     |        | array  | -        |                    |
| 5   | URL          | url          |     |     |  ○  |     |     |     |        | string | -        |                    |
| 6   | 値コード     | valueCode    |     |     |  ○  |     |     |     |        | string | -        |  [値コード](../../../API_Domain_Definition_Table.md)                   |
| 7   | 姓           | family       |     |  ○  |     |     |     |     |        | string | -        |                    |
| 8   | 名リスト     | given        |     |  ○  |     |     |     |     |        | array  | -        |                    |
| 9   | 名           | -            |     |     |  ○  |     |     |     |        | string | -        |                    |
| 10  | 識別子       | identifier   |  ○  |     |     |     |     |     |        | array  | -        |                    |
| 11  | システム     | system       |     |  ○  |     |     |     |     |        | string | -        |                    |
| 12  | 値           | value        |     |  ○  |     |     |     |     |        | string | -        |                    |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "resourceType": "Staff",
  "emergencyFlg": 0,
  "name": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
          "valueCode": "IDE"
        }
      ],
      "family": "山本",
      "given": ["太郎"]
    },
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
          "valueCode": "SYL"
        }
      ],
      "family": "ヤマモト",
      "given": ["タロウ"]
    }
  ],
  "identifier": [
    {
      "system": "https://www.plat.org/",
      "value": "aef656e5-0735-4757-a369-83a2b34110bd"
    }
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
