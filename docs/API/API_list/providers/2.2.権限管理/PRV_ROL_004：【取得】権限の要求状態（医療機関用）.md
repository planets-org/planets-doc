### 処理概要

他医療機関、患者が管理する文書情報に対して、自身が要求している権限の状態を取得する。

| 機能 ID     | API 論理名                           | HTTP メソッド | URI                                                                 |
| :---------- | :----------------------------------- | :------------ | :------------------------------------------------------------------ |
| PRV_ROL_004 | 【取得】権限の要求状態（医療機関用） | GET           | {applicationPath}/providers/permission/requests/{permissionGroupId} |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名     | 物理名 |  属性  | Nullable | 設定要領                                                                         |
| :-- | :--------- | :----- | :----: | :------: | :------------------------------------------------------------------------------- |
| 1   | ステータス | status | string |    -     | [権限承認状態](../../../API_Domain_Definition_Table.md)  |

### リクエスト（パスパラメータ）

| No. | 項目名              | 物理名            |  属性  | Nullable | 設定要領                                                                         |
| :-- | :------------------ | :---------------- | :----: | :------: | :------------------------------------------------------------------------------- |
| 1   | 権限グループ管理 ID | permissionGroupId | string |    -     | 権限グループ管理 ID を設定する。クエリパラメータ指定が無い場合は必須入力となる。 |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/providers/permission/requests/3fa04331-85fd-4cb5-819d-d240145a74ca
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/providers/permission/requests?status=1
```

### レスポンス

| No. | 項目名                    | 物理名                  | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                         |
| :-- | :------------------------ | :---------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------------------------------------------------------------------------------- |
| 1   | 権限管理オブジェクト      | permissonGroup          |  ○  |     |     |     |     |     | ○      | object | -        |                                                                                            |
| 2   | 権限グループ管理 ID       | permissionGroupId       |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 3   | ステータス                | status                  |     |  ○  |     |     |     |     | -      | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)  |
| 4   | 権限要求者 ID（医療機関） | requestedOrganizationId |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 5   | 権限要求者 ID（診療科）   | requestedDepartmentId   |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 6   | 権限要求者 ID（個人）     | requestedPersonalId     |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 7   | 権限要求日時              | requestedDatetime       |     |  ○  |     |     |     |     | -      | date   | -        |                                                                                            |
| 8   | 権限承認リスト            | permissionApproval      |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                            |
| 9   | 権限承認 ID               | permissionApprovalId    |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 10  | ステータス                | status                  |     |  ○  |     |     |     |     | -      | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)  |
| 11  | 権限承認者 ID（医療機関） | allowableOrganizationId |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 12  | 権限承認者 ID（診療科）   | allowableDepartmentId   |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 13  | 権限承認者 ID（個人）     | allowablePersonalId     |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 14  | 権限コメントリスト        | permissionComment       |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                            |
| 15  | 権限コメント ID           | permissionCommentId     |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 16  | 医療機関 ID               | organizationId          |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 17  | 診療科 ID                 | departmentId            |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 18  | 個人 ID                   | personalId              |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |
| 19  | コメント                  | comment                 |     |  ○  |     |     |     |     | -      | string | -        |                                                                                            |

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
