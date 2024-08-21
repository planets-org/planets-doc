### 処理概要

医療機関リストを取得する。

| 機能 ID     | API 論理名                     | HTTP メソッド | URI                                                           |
| :---------- | :----------------------------- | :------------ | :------------------------------------------------------------ |
| PTP_ORG_002 | 【取得】医療機関情報（患者用） | GET           | {applicationPath}/participants/organizations/{organizationId} |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | リモート         |

### リクエスト（認証）

| No. | 項目名           | 物理名                      |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :-------------------------- | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization               | string |    -     | 認証処理で取得した Bearer Token を設定 |
| 2   | 操作対象者       | X-OPERATION-TARGET-USER-ID  | string |    -     | 操作対象者のPLATID                     |

### リクエスト（クエリ）

| No. | 項目名   | 物理名  |  属性  | Nullable | 設定要領 |
| :-- | :------- | :------ | :----: | :------: | :------- |
| 1   | 名前     | name    | string |          |          |
| 2   | 住所     | address | string |          |          |
| 3   | 電話番号 | telecom | string |          |          |

### リクエスト（パスパラメータ）

| No. | 項目名         | 物理名  |  属性  | Nullable | 設定要領                                           |
| :-- | :------------- | :------ | :----: | :------: | :------------------------------------------------- |
| 1   | organizationId | 組織 ID | string |    ○     | 組織 ID を設定 ※患者用の場合、「0000000000」を設定 |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
{applicationPath}/participants/organizations/0000000000
```

＜クエリパラメータ指定の場合＞

```
{applicationPath}/participants/organizations?name=クリニック X
```

### レスポンス

| No. | 項目名             | 物理名        | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性    | Nullable | レスポンス設定要領                                   |
| :-- | :----------------- | :------------ | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :------ | :------- | :--------------------------------------------------- |
| 1   | 検索結果           | searchResults |  ○  |     |     |     |     |     | ○      | object  | -        |                                                      |
| 2   | 件数               | count         |     |  ○  |     |     |     |     | -      | integer | -        | 検索結果件数                                         |
| 3   | 取得データリスト   | results       |     |  ○  |     |     |     |     | ○      | array   | -        |                                                      |
| 4   | 医療機関情報       | contents      |     |     |  ○  |     |     |     | -      | string  | -        | OpenFRUCtoS の Organization リソースの仕様に準拠する |
| 5   | 医療機関バージョン | version       |     |     |  ○  |     |     |     | -      | string  | -        | Organization リソースのバージョン                    |

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
        "contents": {
          "fullUrl": "http://localhost:8099/of1/Organization/2",
          "resource": {
            "resourceType": "Organization",
            "id": "2",
            "meta": {
              "versionId": "1",
              "lastUpdated": "2021-10-07T18:30:14.792+09:00"
            },
            "text": {
              "status": "generated",
              "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;ul&gt;&lt;li&gt;1310000001&lt;/li&gt;&lt;li&gt;クリニックX&lt;/li&gt;&lt;li&gt;〒163-0490 東京都新宿区西新宿 2-1-1&lt;/li&gt;&lt;li&gt;03-0000-0001&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;"
            },
            "identifier": [
              {
                "system": "http://hl7.jp/fhir/ePrescription/InsuranceMedicalInstitutionNo",
                "value": "1310000001"
              }
            ],
            "name": "クリニック X",
            "telecom": [
              {
                "system": "phone",
                "value": "03-0000-0001"
              }
            ],
            "address": [
              {
                "text": "163-0488 東京都新宿区西新宿 2-12-1"
              }
            ]
          },
          "search": {
            "mode": "include"
          }
        },
        "version": "1"
      }
    ]
  }
}
```

```json title="異常終了"
{
  "errorCode": "PLAT500",
  "errorMessage": "例外内容"
}
```

### 備考

なし
