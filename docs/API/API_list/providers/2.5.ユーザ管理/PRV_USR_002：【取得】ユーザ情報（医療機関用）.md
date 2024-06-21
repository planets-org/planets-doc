### 処理概要

PLAT 上で管理しているユーザの[Patient リソース](../../../../Plat/resource_patient.md)を取得する

| 機能 ID     | API 論理名          | HTTP メソッド | URI                                        |
| :---------- |:-----------------| :------------ | :----------------------------------------- |
| PRV_USR_002 | 【取得】ユーザ情報（医療機関用） | GET           | {applicationPath}/providers/users/{platId} |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定|

### リクエスト（クエリ）

| No. | 項目名   | 物理名    |  属性  | Nullable | 設定要領                                                    |
| :-- | :------- | :-------- | :----: | :------: |:--------------------------------------------------------|
| 1   | 名前     | name      | string |    ○     | 漢字もしくはカナの前方一致検索                                         |
| 2   | 住所     | address   | string |    ○     | 住所を前方一致検索                                               |
| 3   | 電話番号 | telecom   | string |    ○     | 電話番号を完全一致検索                                             |
| 4   | 性別     | gender    | string |    ○     | [性別](../../../../API/API_parameter_definition_table.md) |
| 5   | 生年月日 | birthDate |  date  |    ○     | 生年月日を完全一致検索（YYYY-MM-DD 形式）                              |

### リクエスト（パスパラメータ）

| No. | 項目名       | 物理名 |  属性  | Nullable | 設定要領                                         |
| :-- | :----------- | :----- | :----: | :------: | :----------------------------------------------- |
| 1   | PLAT 共通 ID | platId | string |    ○     |  [PLAT 共通 ID（必須）](../../../../API/API_parameter_definition_table.md) |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/providers/users/3fa04331-85fd-4cb5-819d-d240145a74ca
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/providers/users?name=ヤマダダロウ&birthDate=1980-01-01
```

### レスポンス

| No. | 項目名           | 物理名        | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性    | Nullable | レスポンス設定要領                              |
| :-- | :--------------- | :------------ | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :------ | :------- | :---------------------------------------------- |
| 1   | 検索結果         | searchResults |  ○  |     |     |     |     |     | -      | object  | -        |                                                 |
| 2   | 件数             | count         |     |  ○  |     |     |     |     | -      | integer | -        | 検索結果件数                                    |
| 3   | 取得データリスト | results       |     |  ○  |     |     |     |     | -      | array   | -        |                                                 |
| 4   | ユーザ情報       | user          |     |     |  ○  |     |     |     | -      | object  | -        | OpenFRUCtoS の Patient リソースの仕様に準拠する |
| 5   | バージョン       | version       |     |     |  ○  |     |     |     | -      | string  | -        | 拡張性(uuid の格納等)を考慮して string 型を使用 |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "searchResults": {
    "count": 1,
    "results": [
      {
        "user": {
          "resourceType": "Patient",
          "text": {
            "status": "generated",
            "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;～～～&lt;/div&gt;"
          },
          "identifier": [
            {
              "system": "https://www.plat.org/",
              "value": "d2db2727-eb07-2e54-fcbd-5ed011499cb7"
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
              "line": ["玉手町 18-50"],
              "city": "柏原市",
              "district": "大阪府",
              "postalCode": "5820001"
            }
          ]
        },
        "version": "1"
      }
    ]
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
