### 処理概要

自身が管理している文書情報に対して、医療機関、患者から要求されている権限の状態を更新（承認・拒否）する。

| 機能 ID     | API 論理名                                         | HTTP メソッド | URI                                                                    |
| :---------- | :------------------------------------------------- | :------------ | :--------------------------------------------------------------------- |
| PRV_ROL_007 | 【更新】権限の被要求状態の承認・拒否（医療機関用） | PUT           | {applicationPath}/providers/permission/approval/{permissionApprovalId} |

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

| No. | 項目名      | 物理名               |  属性  | Nullable | 設定要領                 |
| :-- | :---------- | :------------------- | :----: | :------: | :----------------------- |
| 1   | 権限承認 ID | permissionApprovalId | string |    -     | 権限承認 ID を設定する。 |

### リクエスト(Body)

| No. | 項目名     | 物理名  | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                     |
| :-- | :--------- | :------ | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------------------------------------------- |
| 1   | ステータス | status  |  ○  |     |     |     |     |     | -      | string | -        | [権限付与状態](../../../API_Domain_Definition_Table.md)  |
| 2   | コメント   | comment |  ○  |     |     |     |     |     | -      | string | -        |                                                        |

### サンプル（リクエスト）

```json
{
  "status": "1",
  "comment": "承認します"
}
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
{
  "permissionGroup": {
    "permissionGroupId": "6a7a8516-610d-4c35-bf95-9e7b5219a852",
    "status": "1",
    "requestedOrganizationId": "1310000001",
    "requestedDepartmentId": "",
    "requestedPersonalId": "ececfc9e-4b53-48c0-96da-482ffdf69a95",
    "requestedDatetime": "Oct 7, 2021, 7:51:02 PM"
  },
  "permissionApproval": [
    {
      "permissionApprovalId": 2,
      "status": "1",
      "allowablePersonalId": "db04b087-52ee-4d69-9861-07e4d3db325e",
      "approverPersonalId": "db04b087-52ee-4d69-9861-07e4d3db325e",
      "approvedDatetime": "Oct 7, 2021, 8:02:04 PM"
    }
  ],
  "permissionComment": [
    {
      "personalId": "db04b087-52ee-4d69-9861-07e4d3db325e",
      "comment": "承認します"
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
