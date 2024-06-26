### 処理概要

PLAT 上にスタッフ情報を登録する。

| 機能 ID     | API 論理名    | HTTP メソッド | URI                                |
| :---------- |:-----------| :------------ | :--------------------------------- |
| PRV_STF_001 | 【登録】スタッフ情報 | POST          | {applicationPath}/providers/staffs |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

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
| 1   | 組織 ID                  | organizationId |  ○  |     |     |     |     |     |        | string | -        |                                                     |
| 2   | 診療科 ID                | departmentId   |  ○  |     |     |     |     |     |        | string | -        |                                                     |
| 3   | 職業                     | occupation     |  ○  |     |     |     |     |     |        | string | -        |                                                     |
| 4   | スタッフ情報オブジェクト | staffResource  |  ○  |     |     |     |     |     |        | object | -        |                                                     |
| 5   | リソース種別             | resourceType   |     |  ○  |     |     |     |     |        | string | -        | "Staff"固定                                         |
| 6   | 救急フラグ               | emergencyFlg   |     |  ○  |     |     |     |     |        | string | -        | 0:通常、1:救急                                      |
| 7   | 名称リスト               | name           |     |  ○  |     |     |     |     |        | object | -        |                                                     |
| 8   | 拡張リスト               | extension      |     |     |  ○  |     |     |     |        | object | -        |                                                     |
| 9   | URL                      | url            |     |     |     |  ○  |     |     |        | string | -        |                                                     |
| 10  | 値コード                 | valueCode      |     |     |     |  ○  |     |     |        | string | -        | IDE：漢字、SYL：カナ　※認証情報には漢字が登録される |
| 11  | 姓                       | family         |     |     |  ○  |     |     |     |        | string | -        |                                                     |
| 12  | 名リスト                 | given          |     |     |  ○  |     |     |     |        | object | -        |                                                     |
| 13  | 名                       | -              |     |     |     |  ○  |     |     |        | string | -        |                                                     |

### サンプル（リクエスト）

```json
{
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
| 2   | 緊急フラグ   | emergencyFlg |  ○  |     |     |     |     |     |        | string | -        |                    |
| 3   | 名称リスト   | name         |  ○  |     |     |     |     |     |        | array  | -        |                    |
| 4   | 拡張リスト   | extension    |     |  ○  |     |     |     |     |        | array  | -        |                    |
| 5   | URL          | url          |     |     |  ○  |     |     |     |        | string | -        |                    |
| 6   | 値コード     | valueCode    |     |     |  ○  |     |     |     |        | string | -        |                    |
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
