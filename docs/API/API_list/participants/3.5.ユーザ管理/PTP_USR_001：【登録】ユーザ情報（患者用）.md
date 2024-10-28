### 処理概要

リモートに対して PLAT の新規ユーザ登録をする。

| 機能 ID     | API 論理名        | HTTP メソッド | URI                                  |
| :---------- |:---------------| :------------ | :----------------------------------- |
| PTP_USR_001 | 【登録】ユーザ情報（患者用） | POST          | {applicationPath}/participants/users |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | リモート         |

### リクエスト（認証）

| No. | 項目名           | 物理名                      |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :-------------------------- | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization               | string |    -     | 認証処理で取得した Bearer Token を設定 |
| 2   | 操作対象者       | X-OPERATION-TARGET-USER-ID  | string |    〇    | Nullの場合は操作者のPLATIDで、指定ありの場合は指定されたPLATIDで処理 |

### リクエスト（クエリ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名                         | 物理名          | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                              |
| :-- | :----------------------------- | :-------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :---------------------------------------------- |
| 1   | Patient の登録対象オブジェクト | patientResource |  ○  |     |     |     |     |     | -      | object | -        |                                                 |
| 2   | Patient 構造体                 |                 |     |  ○  |     |     |     |     | -      | -      | -        | OpenFRUCtoS の Patient リソースの仕様に準拠する |

### サンプル（リクエスト）

```json
{
  "patientResource": {
    "resourceType": "Patient",
    "text": {
      "status": "generated",
      "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;～～～&lt;/div&gt;"
    },
    "active": true,
    "name": [
      {
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
            "valueCode": "IDE"
          }
        ],
        "family": "山田",
        "given": ["太郎"]
      },
      {
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
            "valueCode": "SYL"
          }
        ],
        "family": "ヤマダ",
        "given": ["タロウ"]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "09099999999",
        "use": "mobile"
      }
    ],
    "gender": "male",
    "birthDate": "1974-12-25",
    "deceasedBoolean": false,
    "address": [
      {
        "use": "home",
        "line": ["玉手町 23-10"],
        "city": "柏原市",
        "district": "大阪府",
        "postalCode": "5820001"
      }
    ]
  }
}
```

### レスポンス

| No. | 項目名         | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | レスポンス設定要領                              |
| :-- | :------------- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :---------------------------------------------- |
| 1   | Patient 構造体 |        |  ○  |     |     |     |     |     |        | -    | -        | OpenFRUCtoS の Patient リソースの仕様に準拠する |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "resourceType": "Patient",
  "id": "10",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2021-10-08T21:12:58.924+09:00"
  },
  "text": {
    "status": "generated",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;～～～&lt;/div&gt;"
  },
  "identifier": [
    {
      "system": "https://www.plat.org/",
      "value": "025a20e7-f68c-40ad-8bce-2afcc69cc8bd"
    }
  ],
  "active": true,
  "name": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
          "valueCode": "IDE"
        }
      ],
      "family": "山田",
      "given": ["太郎"]
    },
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
          "valueCode": "SYL"
        }
      ],
      "family": "ヤマダ",
      "given": ["タロウ"]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "09099999999",
      "use": "mobile"
    }
  ],
  "gender": "male",
  "birthDate": "1974-12-25",
  "deceasedBoolean": false,
  "address": [
    {
      "use": "home",
      "line": ["玉手町 23-10"],
      "city": "柏原市",
      "district": "大阪府",
      "postalCode": "5820001"
    }
  ],
  "managingOrganization": {
        "identifier": {
        "system": "http://hl7.jp/fhir/ePrescription/InsuranceMedicalInstitutionNo",
        "value": "0000000000"
        }
    }
}
```

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
