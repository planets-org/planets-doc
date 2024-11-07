### 処理概要

他の医療機関、特定患者に対して、各々が管理する文書情報に対する権限の要求を行う。

| 機能 ID     | API 論理名                               | HTTP メソッド | URI                                        |
| :---------- | :--------------------------------------- | :------------ | :----------------------------------------- |
| PTP_ROL_002 | 【登録】権限の要求（承認要求）（患者用） | POST          | {applicationPath}/participants/permissions |

| 連携方式 | データ形式                           | 利用可能な接続先 |
| :------- | :----------------------------------- | :--------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | リモート         |

### リクエスト（ヘッダー）

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

| No. | 項目名                    | 物理名                         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                                                                                                 |
| :-- | :------------------------ | :----------------------------  | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| 1   | コメント                  | comment                        |  ○  |     |     |     |     |     | -     | string | ○       | 権限要求の際のコメント                                                                                                             |
| 2   | 権限管理リスト            | permissionManagementList       |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                    |
| 3   | 権限承認リスト            | permissionApprovalList         |     |  ○  |     |     |     |     | ○    | array  | -        |                                                                                                                                    |
| 4   | 許可可能者 ID（医療機関） | allowableOrganizationId        |     |     |  ○  |     |     |     | -     | string | ○       | 組織単位で設定する際は必須                                                                                                         |
| 5   | 許可可能者 ID（診療科）   | allowableDepartmentId          |     |     |  ○  |     |     |     | -     | string | ○       | 組織単位で設定する際に診療科まで許可者を絞る際は設定                                                                               |
| 6   | 許可可能者 ID（個人）     | allowablePersonalId            |     |     |  ○  |     |     |     | -     | string | ○       | 個人単位で設定する際は必須                                                                                                         |
| 7   | 権限検索条件リスト        | permissionSearchCriteriaList   |     |  ○  |     |     |     |     | ○    | array  | -        |                                                                                                                                    |
| 8   | 検索条件                  | searchCriteria                 |     |     |  ○  |     |     |     | -     | string | -        | [検索条件](../../../API_Domain_Definition_Table.md)                                                                                |
| 9   | 演算子                    | operator                       |     |     |  ○  |     |     |     | -     | string | -        | [演算子](../../../API_Domain_Definition_Table.md)                                                                                  |
| 10  | 値                        | value                          |     |     |  ○  |     |     |     | -     | string | -        | 階層パスのチェックする値                                                                                                           |
| 11  | 文書所有者ID              | documentOwnerId                |     |  ○  |     |     |     |     | -     | string | -        | 要求を行う文書の所有者のID(PLAT_ID)                                                                                                |                                                                                                                                |
| 12  | 権限保持対象区分          | classification                 |     |  ○  |     |     |     |     | -     | string | -        |[権限保持対象区分](../../../API_Domain_Definition_Table.md)                                                                         |
| 13  | 権限保持者ID              | permissionId                   |     |  ○  |     |     |     |     | -     | string | -        | 個人の場合、付与対象者の PLAT 共通 ID もしくはスタッフ ID ※本人以外(後見人や両親)のAPI実行の場合は後見人や両親のPLAT共通IDを設定  |
| 14  | 権限種別                  | type                           |     |  ○  |     |     |     |     | -     | string | -        | [権限種別](../../../API_Domain_Definition_Table.md)                                                                                |
| 15  | 有効期限（開始）          | expirationFrom                 |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（FROM）                                                                                                             |
| 16  | 有効期限（終了）          | expirationTo                   |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（TO）                                                                                                               |

### サンプル（リクエスト）

患者が自身や親族の保険医療記録の閲覧権限を要求する場合

```json
{
　　"comment": "患者 1 の文書閲覧権限要求",
　　"permissionManagementList": [
　　　　{
　　　　　　"permissionApprovalList": [
　　　　　　　　{
　　　　　　　　　　"allowablePersonalId": "aaab8ced-33ce-4ef9-800a-7c8310020ecc"　 → 権限の要求に対し承認・拒否を行う人の PLAT 共通 ID を設定
　　　　　　　　}
　　　　　　],
　　　　　　"permissionSearchCriteriaList": [
　　　　　　　　{
　　　　　　　　　　"searchCriteria": "hospitalCode",
　　　　　　　　　　"operator": "01",
　　　　　　　　　　"value": "2520000009"
　　　　　　　　},
　　　　　　　　{
　　　　　　　　　　"searchCriteria": "documentOwnerId",
　　　　　　　　　　"operator": "01",
　　　　　　　　　　"value": "0034fff5-296b-4ece-b2b8-a97e34ae5cf2"
　　　　　　　　},
　　　　　　　　{
　　　　　　　　　　"searchCriteria": "documentType",
　　　　　　　　　　"operator": "01",
　　　　　　　　　　"value": "01"
　　　　　　　　}
　　　　　　],
　　　　　　"documentOwnerId": "0034fff5-296b-4ece-b2b8-a97e34ae5cf2",
　　　　　　"classification": "1",
　　　　　　"permissionId": "6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca", → 権限付与対象のPLAT共通ID を設定
　　　　　　"type": "01",
　　　　　　"expirationFrom": "Mar 2, 2021, 1:00:00 AM",
　　　　　　"expirationTo": "Mar 2, 2025, 1:00:00 AM"
　　　　}
　　]
}
```

### レスポンス

| No. | 項目名                    | 物理名                         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                                                              |
| :-- | :------------------------ | :----------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 権限管理リスト            | permissionManagementList       |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 2   | 権限承認リスト            | permissionApprovalList         |     |  ○  |      |     |     |    | ○    | array  | -        |                                                                                                                                 |
| 3   | ステータス                | status                         |     |     |  ○  |     |     |     | -     | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)                                                                         |
| 4   | 論理削除フラグ            | deletedFlg                     |     |     |  ○  |     |     |     | -     | integer| -        | [論理削除フラグ](../../../API_Domain_Definition_Table.md)                                                                       |
| 5   | 許可可能者 ID（医療機関） | allowableOrganizationId        |     |     |  ○  |     |     |     | -     | string | ○       | リクエストで設定した値と同一値                                                                                                  |
| 6   | 許可可能者 ID（診療科）   | allowableDepartmentId          |     |     |  ○  |     |     |     | -     | string | ○       | リクエストで設定した値と同一値                                                                                                  |
| 7   | 許可可能者 ID（個人）     | allowablePersonalId            |     |     |  ○  |     |     |     | -     | string | ○       | リクエストで設定した値と同一値                                                                                                  |
| 8   | 権限検索条件リスト        | permissionSearchCriteriaList   |     |  ○  |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 9   | 検索条件                  | searchCriteria                 |     |     |  ○  |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 10  | 演算子                    | operator                       |     |     |  ○  |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 11  | 値                        | value                          |     |     |  ○  |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 12  | 権限管理 ID               | permissionManagementId         |     |  ○  |     |     |     |     | -     | string | -        | UUID形式で設定                                                                                                                  |
| 13  | ステータス                | status                         |     |  ○  |     |     |     |     | -     | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)                                                                         |
| 14  | 論理削除フラグ            | deletedFlg                     |     |  ○  |     |     |     |     | -     | integer| -        | [論理削除フラグ](../../../API_Domain_Definition_Table.md)                                                                       |
| 15  | 許可要求者 ID（医療機関） | requestedOrganizationId        |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の医療機関ID                                                                                                           |
| 16  | 許可要求者 ID（診療科）   | requestedDepartmentId          |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の診療科ID                                                                                                             |
| 17  | 許可要求者 ID（個人）     | requestedPersonalId            |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の個人ID(PLAT_ID)                                                                                                      |
| 18  | 許可要求日時              | requestedDatetime              |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |
| 19  | 文書所有者ID              | documentOwnerId                |     |  ○  |     |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |                                                                                                                                |
| 20  | 権限保持対象区分          | classification                 |     |  ○  |     |     |     |     | -     | string | -        | [権限保持対象区分](../../../API_Domain_Definition_Table.md)                                                                     |
| 21  | 権限保持者ID              | permissionId                   |     |  ○  |     |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 22  | 権限種別                  | type                           |     |  ○  |     |     |     |     | -     | string | -        | [権限種別](../../../API_Domain_Definition_Table.md)                                                                             |
| 23  | 有効期限（開始）          | expirationFrom                 |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（FROM）                                                                                                          |
| 24  | 有効期限（終了）          | expirationTo                   |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（TO）                                                                                                            |
| 25  | コメント                  | comment                        |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |


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
         "status": "0",
         "deletedFlg": 0,
         "allowablePersonalId": "6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca"
        }
      ],
      "permissionSearchCriteriaList": [
        {
          "searchCriteria": "hospitalCode",
          "operator": "01",
          "value": "2520000009"
        },
        {
          "searchCriteria": "documentOwnerId",
          "operator": "01",
          "value": "X001"
        },
        {
          "searchCriteria": "documentType",
          "operator": "01",
          "value": "01"
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
