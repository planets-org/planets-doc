### 処理概要

自身の文書情報に対して、付与済みの権限を削除する。
また、一文書に紐づく全ての承認者が権限を削除した場合、権限グループの権限を削除する。

| 機能 ID     | API 論理名                       | HTTP メソッド | URI                                                                     |
| :---------- | :------------------------------- | :------------ | :---------------------------------------------------------------------- |
| PTP_ROL_009 | 【削除】付与済みの権限（患者用） | PUT           | {applicationPath}/participants/permission/delete/{permissionApprovalId} |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | リモート         |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト（パスパラメータ）

| No. | 項目名      | 物理名               |  属性  | Nullable | 設定要領                 |
| :-- | :---------- | :------------------- | :----: | :------: | :----------------------- |
| 1   | 権限承認 ID | permissionApprovalId | string |    -     | 権限承認 ID を設定する。 |

### リクエスト(Body)

| No. | 項目名   | 物理名  | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領 |
| :-- | :------- | :------ | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | コメント | comment |  ○  |     |     |     |     |     | -      | string | -        | 削除理由を記載する。 |

### サンプル（リクエスト）

```json
{
  "comment": "〜のため削除します"
}
```

### レスポンス

| No. | 項目名                    | 物理名                         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                                                              |
| :-- | :------------------------ | :----------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 権限管理リスト            | permissionManagementList       |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 2   | 権限承認リスト            | permissionApprovalList         |     |  ○  |      |     |     |    | ○    | array  | -        |                                                                                                                                 |
| 3   | 権限承認 ID               | permissionApprovalId           |     |     |  ○  |     |     |     | -     | serial | -        | 連番形式で自動設定されたID                                                                                                      |
| 4   | ステータス                | status                         |     |     |  ○  |     |     |     | -     | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)                                                                         |
| 5   | 論理削除フラグ            | deletedFlg                     |     |     |  ○  |     |     |     | -     | integer| -        | [論理削除フラグ](../../../API_Domain_Definition_Table.md)                                                                       |
| 6   | 許可可能者 ID（医療機関） | allowableOrganizationId        |     |     |  ○  |     |     |     | -     | string | ○       | 組織単位で設定する際は必須                                                                                                      |
| 7   | 許可可能者 ID（診療科）   | allowableDepartmentId          |     |     |  ○  |     |     |     | -     | string | ○       | 組織単位で設定する際に診療科まで設定する場合必須                                                                                |
| 8   | 許可可能者 ID（個人）     | allowablePersonalId            |     |     |  ○  |     |     |     | -     | string | ○       | 個人単位で設定する際は必須                                                                                                      |
| 9   | 許可承認者 ID（医療機関） | approverOrganizationId         |     |     |  ○  |     |     |     | -     | string | ○       | 組織単位で設定する際は必須                                                                                                      |
| 10  | 許可承認者 ID（診療科）   | approverDepartmentId           |     |     |  ○  |     |     |     | -     | string | ○       | 組織単位で設定する際に診療科まで設定する場合必須                                                                                |
| 11  | 許可承認者 ID（個人）     | approverPersonalId             |     |     |  ○  |     |     |     | -     | string | ○       | 個人単位で設定する際は必須                                                                                                      |
| 12  | 許可承認日時              | approvedDatetime               |     |     |  ○  |     |     |     | ○    | date   | ○       | 権限要求が承認された日時                                                                                                        |
| 13  | コメント                  | comment                        |     |     |  ○  |     |     |     | -     | string | ○       | 承認者のコメント                                                                                                                |
| 14  | 権限管理 ID               | permissionManagementId         |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |
| 15  | ステータス                | status                         |     |     |  ○  |     |     |     | -     | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)                                                                         |
| 16  | 論理削除フラグ            | deletedFlg                     |     |     |  ○  |     |     |     | -     | integer| -        | [論理削除フラグ](../../../API_Domain_Definition_Table.md)                                                                       |
| 17  | 許可要求者 ID（医療機関） | requestedOrganizationId        |     |  ○  |     |     |     |     | -     | string | ○       | 権限要求者の医療機関ID                                                                                                          |
| 18  | 許可要求者 ID（診療科）   | requestedDepartmentId          |     |  ○  |     |     |     |     | -     | string | ○       | 権限要求者の診療科ID                                                                                                            |
| 19  | 許可要求者 ID（個人）     | requestedPersonalId            |     |  ○  |     |     |     |     | -     | string | ○       | 権限要求者の個人ID(PLAT_ID)                                                                                                     |
| 20  | 許可要求日時              | requestedDatetime              |     |  ○  |     |     |     |     | -     | string | -        | 権限要求を行った時刻                                                                                                            |
| 21  | 文書所有者ID              | documentOwnerId                |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |                                                                                                                                |
| 22  | 権限保持対象区分          | classification                 |     |  ○  |     |     |     |     | -     | string | -        | [権限保持対象区分](../../../API_Domain_Definition_Table.md)                                                                     |
| 23  | 権限保持者ID              | permissionId                   |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |
| 24  | 権限種別                  | type                           |     |  ○  |     |     |     |     | -     | string | -        | [権限種別](../../../API_Domain_Definition_Table.md)                                                                             |
| 25  | 有効期限（開始）          | expirationFrom                 |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（FROM）                                                                                                          |
| 26  | 有効期限（終了）          | expirationTo                   |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（TO）                                                                                                            |
| 27  | コメント                  | comment                        |     |  ○  |     |     |     |     | -     | string | -        | 権限要求時のコメント                                                                                                            |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "permissionManagementList": [
    {
      "permissionApprovalList": [
      {
       "permissionApprovalId": 1,
       "status": "1",
       "deletedFlg": 0,
       "allowablePersonalId": "6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca",
       "approverPersonalId": "6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca",
       "approvedDatetime": "Mar 3, 2021, 1:00:00 AM",
       "〜のため削除します"
      }
    ],
    "permissionManagementId": "c42e5ca3-fb57-4e5a-9b75-a9b08aeddda4",
    "status": "0",
    "deletedFlg": 0,
    "requestedOrganizationId": "1310000001",
    "requestedPersonalId": "faab8ced-33ce-4ef9-800a-7c8310020ecc",
    "requestedDatetime": "Oct 6, 2021, 9:44:07 PM",
    "documentOwnerId": "0034fff5-296b-4ece-b2b8-a97e34ae5cf2",
    "classification": "2",
    "permissionId": "1310000001",
    "type": "01",
    "expirationFrom": "Mar 2, 2021, 1:00:00 AM",
    "expirationTo": "Mar 2, 2025, 1:00:00 AM",
    "comment": "患者 1 への権限要求"
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
