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

| No. | 項目名 | 物理名 | 属性 | Nullable | 桁数 | 最小値 | 最大値 | フォーマット | 過去日付 | 未来日付 | 設定要領 |
| :-- | :--------------- | :------------ | :----: | :--------: | ---- | ------ | ------ | ------------ | -------- | -------- | :------------------------------------- | 
| -   |        |        |      |          |      |        |        |              |          |          |          | 

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 桁数 | 最小値 | 最大値 | フォーマット | 過去日付 | 未来日付 | 設定要領 | 
| :-- | :--------------- | :------------ | :----: | :--------: | ---- | ------ | ------ | ------------ | -------- | -------- | -------- | 
| -   |        |        |      |          |      |        |        |              |          |          |          | 

### リクエスト(Body)

| No. | 項目名                    | 物理名                  | 階層 | 繰返し | 属性                 | Nullable | 桁数  | 最小値 | 最大値 | フォーマット | 過去日付 | 未来日付 | リクエスト設定要領                                                                                                               |
| :-- | :--------------- | :------------ | --- | ------ | :------------ | :--------: | ----- | ------ | ------ | ------------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- | 
| 1   | 組織 ID  | organizationId | 1 |      | string               | -        | 36 |       |     | 制御文字以外 |         |         |    | 
| 2   | 診療科 ID                | departmentId | 1 |     | string               | -        | 1000 |     |       | 以下の文字と記号のみ可<br/>・a-zA-Z0-9<br/>・記号[・-_.!*'()] |        |        |    | 
| 3   | 職業 | occupation  | 1 |    | string               | -        | 1 |      |      | 制御文字以外 |        |         |    | 
| 4   | スタッフ情報オブジェクト | staffResource  | 1 |     | object   |   -      |  |      |     |  |    |       |    | 
| 5   | リソース種別       | resourceType | 2 |     | string  |   -      |  |     |     | Staff |    |       |  "Staff"固定  | 
| 6   | 救急フラグ    | emergencyFlg | 2 |     | string  |   -      |  |     |     | true &#124; false |    |       |  true:救急、false:通常  | 
| 7   | 名称リスト               | name           | 2 |  | object | -        |                                                     |
| 8   | 拡張リスト               | extension      | 3  |        | object | -        |                                                     |
| 9   | URL  | url  |  4   |        | string | -        |  |  |  | URL形式 |  |
| 10  | 値コード   | valueCode      |  4 |  | string | -        |  |  |  | IDE &#124; SYL  |  |  | IDE：漢字、SYL：カナ <br>※認証情報には漢字が登録される |
| 11  | 姓  | family         |   3  |        | string | -        |    |  |  | 制御文字以外 |  |  |  |
| 12  | 名リスト  | given    |  3   |        | object | -        |  |
| 13  | 名   | -              |  4  |        | string | -        |   |



### サンプル（リクエスト）

```json
{
  "organizationId": "1310000001",
  "departmentId": "00001",
  "occupation": "A",
  "staffResource": {
    "resourceType": "Staff",
    "emergencyFlg": false,
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

| No. | 項目名       | 物理名       | 階層 | 繰返し | 属性   | Nullable | レスポンス設定要領 |
| :-- | :----------- | :----------- | :-: | :----- | :----- | :------- | :----------------- |
| 1   | リソース種別 | resourceType |  1  | string | -        |                    |
| 2   | 緊急フラグ   | emergencyFlg |  1    | string | -        |                    |
| 3   | 名称リスト   | name         |  1  |  array  | -        |                    |
| 4   | 拡張リスト   | extension    |  2   | array  | -        |                    |
| 5   | URL          | url          |  3 | string | -        |                    |
| 6   | 値コード     | valueCode    |  3   | string | -        |                    |
| 7   | 姓           | family       |   2   | string | -        |                    |
| 8   | 名リスト     | given        |  2  | array  | -        |                    |
| 9   | 名           | -            | 3   | string | -        |                    |
| 10  | 識別子       | identifier   |  1   | array  | -        |                    |
| 11  | システム     | system       | 2  | string | -        |                    |
| 12  | 値           | value        |  2   | string | -        |                    |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "resourceType": "Staff",
  "emergencyFlg": false,
  "name": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
          "valueCode": "IDE"
        }
      ],
      "family": "田中",
      "given": ["一郎"]
    },
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
          "valueCode": "SYL"
        }
      ],
      "family": "タナカ",
      "given": ["イチロウ"]
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
