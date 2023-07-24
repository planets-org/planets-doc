### 処理概要

他医療機関、患者が管理する文書情報に対して、自身が要求している権限の状態を取得する。

| 機能 ID     | API 論理名                       | HTTP メソッド | URI                                                                    |
| :---------- | :------------------------------- | :------------ | :--------------------------------------------------------------------- |
| PTP_ROL_004 | 【取得】権限の要求状態（患者用） | GET           | {applicationPath}/participants/permission/requests/{permissionGroupId} |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | リモート         |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）
| No. | 項目名     | 物理名   |  属性  | Nullable | 最小文字数                                                                       | 最大文字数 | フォーマット          | 過去日付 | 未来日付 | 設定要領                                                                                                       |
| :-- | :--------- | :------- | :----: | :------: | -------------------------------------------------------------------------------- | ---------- | --------------------- | -------- | -------- | :------------------------------------------------------------------------------------------------------------- |
| 1   | ステータス | status   | string |    ○     | -                                                                                | -          | ”0”/”1”/"2"/"3" | -        | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ |
| 2   | 参照先     | location | string |    ○     | -                                                                                | -          | ”self”/”remote”/"all" | -        | -        | 参照先が自医療機関の場合”self”、リモート自医療機関の場合”remote”、患者管理の場合"all"（指定なしの場合は"all"） |                                                                                                |

### リクエスト（パスパラメータ）
| No. | 項目名             | 物理名            |  属性  | Nullable | 最小文字数 | 最大文字数 | フォーマット                                                  | 過去日付 | 未来日付 | 設定要領                            |
| :-- | :----------------- | :---------------- | :----: | :------: | ---------- | ---------- | ------------------------------------------------------------- | -------- | -------- | :---------------------------------- |
| 1   | 権限グループ管理ID | permissionGroupId | string |    -     | -          | 36        | 以下の文字と記号のみ可<br/>・a-zA-Z0-9<br/>・記号[・-_.!*'()] | -        | -        | クエリパラメータ指定が無い場合は必須入力となる。 |



### リクエスト(Body)

| No. | 項目名   | 物理名     | 属性   | Nullable | 最小文字数 | 最大文字数 | フォーマット | 過去日付 | 未来日付 | 設定要領 |
| :-- | :------ | :-------- | :----: | :------: | ----- | ------ | ----------- | -------- | ------- |:----------------------------------------------- |
| -   |      |     |        |      |          |     |        |       |              |         |          |                       |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/participants/permission/requests/3fa04331-85fd-4cb5-819d-d240145a74ca
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/participants/permission/requests?status=1
```

### レスポンス

| No. | 項目名                    | 物理名                  |  階層  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                         |
| :-- | :------------------------ | :---------------------- | :-: | :----- | :----- | :------- | :----------------------------------------------------------------------------------------- |
| 1   | 権限管理オブジェクト      | permissonGroup          |  1   | ○      | object | -        |                                                                                            |
| 2   | 権限グループ管理 ID       | permissionGroupId       |  2   | -      | string | -        |                                                                                            |
| 3   | ステータス                | status                  |   2    | -      | string | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ |
| 4   | 権限要求者 ID（医療機関） | requestedOrganizationId |   2| -      | string | -        |                                                                                            |
| 5   | 権限要求者 ID（診療科）   | requestedDepartmentId   |    2  | -      | string | -        |                                                                                            |
| 6   | 権限要求者 ID（個人）     | requestedPersonalId     |   2   | -      | string | -        |                                                                                            |
| 7   | 権限要求日時              | requestedDatetime       |   2    | -      | date   | -        |                                                                                            |
| 8   | 権限承認リスト            | permissionApproval      |  1   | ○      | array  | -        |                                                                                            |
| 9   | 権限承認 ID               | permissionApprovalId    |   2  | -      | string | -        |                                                                                            |
| 10  | ステータス                | status                  |  2  | -      | string | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ |
| 11  | 権限承認者 ID（医療機関） | allowableOrganizationId |   2  | -      | string | -        |                                                                                            |
| 12  | 権限承認者 ID（診療科）   | allowableDepartmentId   |   2   | -      | string | -        |                                                                                            |
| 13  | 権限承認者 ID（個人）     | allowablePersonalId     |  2  | -      | string | -        |                                                                                            |
| 14  | 権限コメントリスト        | permissionComment       | 1    | ○      | array  | -        |                                                                                            |
| 15  | 権限コメント ID           | permissionCommentId     |  2  | -      | string | -        |                                                                                            |
| 16  | 医療機関 ID               | organizationId          | 2    | -      | string | -        |                                                                                            |
| 17  | 診療科 ID                 | departmentId            |   2    | -      | string | -        |                                                                                            |
| 18  | 個人 ID                   | personalId              |    2 | -      | string | -        |                                                                                            |
| 19  | コメント                  | comment                 |   2     | -      | string | -        |                                                                                            |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
[
  {
    "permissionGroup": {
      "permissionGroupId": "6a7a8516-610d-4c35-bf95-9e7b5219a852",
      "status": "0",
      "requestedOrganizationId": "1310000001",
      "requestedDepartmentId": "",
      "requestedPersonalId": "ececfc9e-4b53-48c0-96da-482ffdf69a95",
      "requestedDatetime": "Oct 7, 2021, 7:51:02 PM"
    },
    "permissionApproval": [
      {
        "permissionGroupId": 2,
        "permissionGroupId": "6a7a8516-610d-4c35-bf95-9e7b5219a852",
        "status": "0",
        "allowablePersonalId": "db04b087-52ee-4d69-9861-07e4d3db325e"
      }
    ],
    "permissionComment": [
      {
        "permissionCommentId": 2,
        "organizationId": "1310000001",
        "departmentId": "",
        "personalId": "ececfc9e-4b53-48c0-96da-482ffdf69a95",
        "comment": "クリニック X 医師 B への権限承認をお願いします"
      }
    ]
  }
]
```

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
