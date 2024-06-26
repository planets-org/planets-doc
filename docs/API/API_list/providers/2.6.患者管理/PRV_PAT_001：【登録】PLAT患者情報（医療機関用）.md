### 処理概要

PLAT 共通 ID を自病院の患者 ID と紐づける。

| 機能 ID     | API 論理名              | HTTP メソッド | URI                                  |
| :---------- |:---------------------| :------------ | :----------------------------------- |
| PRV_PAT_001 | 【登録】PLAT 患者情報（医療機関用） | POST          | {applicationPath}/providers/patients |

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
　　　　"identifier": [　
　　　　　　{
　　　　　　　　"system": "https://www.plat.org/",　<font color="red">→PLAT 共通 ID 用の値（固定）</font>
　　　　　　　　"value": "d2db2727-eb07-2e54-fcbd-5ed011499cb7"　<font color="red">→PLAT 共通 ID を設定</font>
　　　　　　},
　　　　　　{
　　　　　　　　"system": "urn:oid:1.2.392.100495.20.3.51.11310000001",　<font color="red">→"1.2.392.100495.20.3.51." は固定。11310000001 は"1"(固定値) + 対象医療機関の医療機関コードを設定</font>
　　　　　　　　"value": "clinicX_p00001"　<font color="red">→ 病院ごとの患者 ID を設定</font>
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
　　　　　　　　"given": [
　　　　　　　　　　"太郎"
　　　　　　　　]
　　　　　　},
　　　　　　{
　　　　　　　　"extension": [
　　　　　　　　　　{
　　　　　　　　　　　　"url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
　　　　　　　　　　　　"valueCode": "SYL"
　　　　　　　　　　}
　　　　　　　　],
　　　　　　　　"family": "ヤマダ",
　　　　　　　　"given": [
　　　　　　　　　　"タロウ"
　　　　　　　　]
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
　　　　　　　　"line": [
　　　　　　　　　　"玉手町 23-10"
　　　　　　　　],
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
    },
    {
      "system": "urn:oid:1.2.392.100495.20.3.51.11310000001",
      "value": "clinicX_p00001"
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
