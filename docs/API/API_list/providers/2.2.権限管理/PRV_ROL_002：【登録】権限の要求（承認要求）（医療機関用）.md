### 処理概要

他の医療機関、特定患者に対して、各々が管理する文書情報に対する権限の要求を行う。

| 機能 ID     | API 論理名                                   | HTTP メソッド | URI                                     |
| :---------- | :------------------------------------------- | :------------ | :-------------------------------------- |
| PRV_ROL_002 | 【登録】権限の要求（承認要求）（医療機関用） | POST          | {applicationPath}/providers/permissions |

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
| -   |        |        |      |          |          |

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名                    | 物理名                         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                                                                                                 |
| :-- | :------------------------ | :----------------------------  | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| 1   | コメント                  | comment                        |  ○  |     |     |     |     |     | -     | string | ○       | 権限要求の際のコメント                                                                                                             |
| 2   | 権限要求リスト            | permissionApproval             |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                    |
| 3   | 許可可能者 ID（医療機関） | allowableOrganizationId        |     |  ○  |     |     |     |     | -     | string | ○       | 組織単位で設定する際は必須                                                                                                         |
| 4   | 許可可能者 ID（診療科）   | allowableDepartmentId          |     |  ○  |     |     |     |     | -     | string | ○       | 組織単位で設定する際に診療科まで許可者を絞る際は設定                                                                               |
| 5   | 許可可能者 ID（個人）     | allowablePersonalId            |     |  ○  |     |     |     |     | -     | string | ○       | 個人単位で設定する際は必須                                                                                                         |
| 6   | 権限リスト                | permissionList                 |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                    |
| 7   | 権限検索条件リスト        | permissionSearchCriteriaList   |     |  ○  |     |     |     |     | ○    | array  | -        |                                                                                                                                    |
| 8   | 検索条件                  | searchCriteria                 |     |     |  ○  |     |     |     | -     | string | -        | FRUCtoSへの検索条件<br/>※現時点では「文書所有者ID」「医療機関ID」「文書キー」「文書タイプ」のいずれかが指定される             |
| 9   | 演算子                    | operator                       |     |     |  ○  |     |     |     | -     | string | -        | "検索条件 に対して値をどうチェックするか<br/>01:＝ ※ 現時点では「＝」のみ"                                                        |
| 10  | 値                        | value                          |     |     |  ○  |     |     |     | -     | string | -        | 階層パスのチェックする値                                                                                                           |
| 11  | 文書所有者ID              | documentOwnerId                |     |  ○  |     |     |     |     | -     | string | -        | 要求を行う文書の所有者のID(PLAT_ID)                                                                                                |                                                                                                                                |
| 12  | 権限保持対象区分          | classification                 |     |  ○  |     |     |     |     | -     | string | -        | 1:個人、2:組織                                                                                                                     |
| 13  | 権限保持者ID              | permissionId                   |     |  ○  |     |     |     |     | -     | string | -        | 個人の場合、対象者の PLAT 共通 ID もしくはスタッフ ID、医療機関の場合、対象の医療機関 ID                                           |
| 14  | 権限種別                  | type                           |     |  ○  |     |     |     |     | -     | string | -        | "01:ReadOnly(参照のみ)<br/>02:UpdateOnly(参照、更新、削除)<br/>03:FullAccess(参照、登録、更新、削除)<br/>04:AccessDeny(権限無し)"  |
| 15  | 有効期限（開始）          | expirationFrom                 |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（FROM）                                                                                                             |
| 16  | 有効期限（終了）          | expirationTo                   |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（TO）                                                                                                               |

### サンプル（リクエスト）

医療機関が患者へ保険医療記録の閲覧権限を要求する場合

```json
{
　　"comment": "患者 1 への権限要求",
　　"permissionApproval": [
　　　　{
　　　　　　"allowablePersonalId": "6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca"　 → 　患者の PLAT 共通 ID を設定
　　　　}
　　],
　　"permissionList": [
　　　　{
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
　　　　　　]
　　　　　　"documentOwnerId": "0034fff5-296b-4ece-b2b8-a97e34ae5cf2",
　　　　　　"classification": "2",
　　　　　　"permissionId": "1310000001", → 医療機関 ID を設定
　　　　　　"type": "01",
　　　　　　"expirationFrom": "Mar 2, 2021, 1:00:00 AM",
　　　　　　"expirationTo": "Mar 2, 2025, 1:00:00 AM",
　　　　}
　　]
}
```

### レスポンス

| No. | 項目名                    | 物理名                         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                                                              |
| :-- | :------------------------ | :----------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 権限リスト                | permissionList                 |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 2   | 権限検索条件リスト        | permissionSearchCriteriaList   |     |  ○  |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 3   | 検索条件                  | searchCriteria                 |     |     |  ○  |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 4   | 演算子                    | operator                       |     |     |  ○  |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 5   | 値                        | value                          |     |     |  ○  |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |
| 6   | 権限管理 ID               | permissionManagementId         |     |  ○  |     |     |     |     | -     | string | -        | UUID形式で設定                                                                                                                  |
| 7   | ステータス                | status                         |     |  ○  |     |     |     |     | -     | string | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ                                      |
| 8   | 許可要求者 ID（医療機関） | requestedOrganizationId        |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の医療機関ID                                                                                                           |
| 9   | 許可要求者 ID（診療科）   | requestedDepartmentId          |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の診療科ID                                                                                                             |
| 10  | 許可要求者 ID（個人）     | requestedPersonalId            |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の個人ID(PLAT_ID)                                                                                                      |
| 11  | 許可要求日時              | requestedDatetime              |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |
| 12  | 文書所有者ID              | documentOwnerId                |     |  ○  |     |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                                  |                                                                                                                                |
| 13  | 権限保持対象区分          | classification                 |     |  ○  |     |     |     |     | -     | string | -        | 1:個人、2:組織                                                                                                                  |
| 14  | 権限保持者ID              | permissionId                   |     |  ○  |     |     |     |     | -     | string | -        | リクエストで設定した値と同一値                                                                                         |
| 15  | 権限種別                  | type                           |     |  ○  |     |     |     |     | -     | string | -        | 01:ReadOnly(参照のみ)<br/>02:UpdateOnly(参照、更新、削除)<br/>03:FullAccess(参照、登録、更新、削除)<br/>04:AccessDeny(権限無し) |
| 16  | 有効期限（開始）          | expirationFrom                 |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（FROM）                                                                                                          |
| 17  | 有効期限（終了）          | expirationTo                   |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（TO）                                                                                                            |
| 18  | コメント                  | comment                        |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |
| 19  | 権限承認リスト            | permissionApproval             |  ○  |    |      |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 20  | ステータス                | status                         |     |  ○  |     |     |     |     | -     | string | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ                                      |
| 21  | 許可可能者 ID（医療機関） | allowableOrganizationId        |     |  ○  |     |     |     |     | -     | string | ○       | リクエストで設定した値と同一値                                                                                                  |
| 22  | 許可可能者 ID（診療科）   | allowableDepartmentId          |     |  ○  |     |     |     |     | -     | string | ○       | リクエストで設定した値と同一値                                                                                                  |
| 23  | 許可可能者 ID（個人）     | allowablePersonalId            |     |  ○  |     |     |     |     | -     | string | ○       | リクエストで設定した値と同一値                                                                                                  |
                                                                                                                                |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "permissionList": [
    {
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
      ]
      "permissionManagementId": "c42e5ca3-fb57-4e5a-9b75-a9b08aeddda4",
      "status": "0",
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
   ],
  "permissionApproval": [
    {
     "status": "0",
     "allowablePersonalId": "6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca"
    }
   ]
}
```

```json title="異常終了
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
