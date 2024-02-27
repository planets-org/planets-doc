### 処理概要

患者情報を確認する。

| 機能 ID     | API 論理名              | HTTP メソッド | URI                                              |
| :---------- |:---------------------| :------------ | :----------------------------------------------- |
| PRV_PAT_002 | 【取得】PLAT 患者情報（医療機関用） | GET           | {applicationPath}/providers/patients/{patientId} |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）
| No. | 項目名   | 物理名    |  属性  | Nullable | 最小文字数 | 最大文字数 | フォーマット          | 過去日付 | 未来日付 | 設定要領                                                                                                       |
| :-- | :------- | :-------- | :----: | :------: | ---------- | ---------- | --------------------- | -------- | -------- | :------------------------------------------------------------------------------------------------------------- |
| 1   | 名前     | name      | string |    ○     | -          | 30         | 制御文字以外          | -        | -        | 漢字もしくはカナの前方一致検索                                                                                 |
| 2   | 住所     | address   | string |    ○     | -          | 400        | 制御文字以外          | -        | -        | 前方一致検索                                                                                                   |
| 3   | 電話番号 | telecom   | string |    ○     | -          | 17         | 数字のみ              | -        | -        | 完全一致検索                                                                                                   |
| 4   | 性別     | gender    | string |    ○     | -          | -          | "male"/"female"       | -        | -        | "male"か"female"で検索                                                                       |
| 5   | 生年月日 | birthDate |  string  |    ○     | -          | -          | yyyy-MM-dd            | ○        | ○        | 生年月日を完全一致検索 年月日は0で桁埋めが必要                                                                 |
| 6   | 参照先   | location  | string |    ○     | -          | -          | ”self”/”remote” | -        | -        | 参照先が自医療機関の場合”self”、リモート自医療機関の場合”remote” |


### リクエスト（パスパラメータ）

| No. | 項目名   | 物理名     | 属性   | Nullable | 最小文字数 | 最大文字数 | フォーマット | 過去日付 | 未来日付 | 設定要領 |
| :-- | :------ | :-------- | :----: | :------: | ----- | ------ | ----------- | -------- | ------- |:----------------------------------------------- |
| 1   | 患者ID | patientId | string |  -  | -     | 100      | 以下の文字と記号のみ可<br/>・a-zA-Z0-9<br/>・記号[・-_.!*'()] |    -    |   -    | PLAT共通IDをURLエンコードを行い設定 |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/providers/patients/ClinicX_00002
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/providers/patients?name=ヤマダダロウ&birthDate=1980-01-01
```

### レスポンス

| No. | 項目名           | 物理名        | 階層  | 繰返し | 属性    | Nullable | レスポンス設定要領                              |
| :-- | :--------------- | :------------ | :-: | :----- | :------ | :------- | :---------------------------------------------- |
| 1   | 検索結果         | searchResults | 1    | -      | object  | -        |                                                 |
| 2   | 件数             | count         |  2  | -      | integer | -        | 検索結果件数                                    |
| 3   | 取得データリスト | results       |   2  | -      | array   | -        |                                                 |
| 4   | 患者情報         | patients      |   3  | -      | object  | -        | FRUCtoSのPatientリソースの仕様に準拠する<br/>参考：[Patientリソース構造体について](../../../../Plat/resource_patient.md) |

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
                "patient": {
                    "fullUrl": "http://localhost:19081/of2/Patient/1",
                    "resource": {
                        "resourceType": "Patient",
                        "id": "1",
                        "meta": {
                            "versionId": "1",
                            "lastUpdated": "2024-02-08T17:43:48.210+09:00"
                        },
                        "text": {
                            "status": "generated",
                            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">TEST</div>"
                        },
                        "identifier": [
                            {
                                "system": "https://www.plat.org/",
                                "value": "c0109a17-1d16-410a-9ccc-c83f348c755a"
                            },
                            {
                                "system": "urn:oid:1.2.392.100495.20.3.51.11310000001",
                                "value": "clinicX_p00101"
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
                                    "一郎"
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
                                    "イチロウ"
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
                                    "玉手町18-50"
                                ],
                                "city": "柏原市",
                                "district": "大阪府",
                                "postalCode": "5820001"
                            }
                        ],
                        "managingOrganization": {
                            "identifier": {
                                "system": "http://hl7.jp/fhir/ePrescription/InsuranceMedicalInstitutionNo",
                                "value": "1310000001"
                            }
                        }
                    },
                    "search": {
                        "mode": "match"
                    }
                }
            }
        ]
    }
}
```

```json title="異常終了"
{
    "errorCode": "PLAT500",
    "errorMessage": [
        {
            "text": "性別の選択が想定値ではありません。"
        }
    ]
}
```

### 備考

なし
