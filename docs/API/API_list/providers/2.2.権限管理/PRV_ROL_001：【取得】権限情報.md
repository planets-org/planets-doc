### 処理概要

特定患者、特定医療機関、特定スタッフが保持する権限情報を取得する。

| 機能 ID     | API 論理名       | HTTP メソッド | URI                                     |
| :---------- | :--------------- | :------------ | :-------------------------------------- |
| PRV_ROL_001 | 【取得】権限情報 | GET           | {applicationPath}/providers/permissions |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

クエリパラメータとパスパラメータが指定されていない場合は、自身が保持する権限の一覧を返却する。

| No. | 項目名       | 物理名         |  属性  | Nullable | 設定要領                                                                         |
| :-- | :----------- | :------------- | :----: | :------: | :------------------------------------------------------------------------------- |
| 1   | 参照先       | location       | string |    ○    | [参照先(権限管理）](../../../API_Domain_Definition_Table.md)                     |
| 2   | 権限保持区分 | classification | string |    -     | [権限保持対象区分](../../../API_Domain_Definition_Table.md)                      |
| 3   | 権限保持者 ID| permissionId   | string |    -     | 権限保持者 ID を設定する。（個人の場合は PLAT 共通 ID、組織の場合は医療機関 ID） |
| 4   | 基準日       | defaultdate    |  date  |    -     | 権限の有効期限 From ～ To の条件を設定する。                                     |


### リクエスト（パスパラメータ）

| No. | 項目名      | 物理名                 |  属性  | Nullable | 設定要領                                                                 |
| :-- | :---------- | :--------------------- | :----: | :------: | :----------------------------------------------------------------------- |
| 1   | 権限管理 ID | permissionManagementId | string |    -     | 権限管理 ID を設定する。|

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/providers/permissions/3fa04331-85fd-4cb5-819d-d240145a74ca
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/providers/permissions?location=self&classification=2&permissionId=1310000001&defaultdate=2021-04-01T13:00:00Z
```

### レスポンス

| No. | 項目名                    | 物理名                         | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                                                              |
| :-- | :------------------------ | :----------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 権限管理リスト            | permissionManagementList       |  ○  |     |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 2   | 権限検索条件リスト        | permissionSearchCriteriaList   |     |  ○  |     |     |     |     | ○    | array  | -        |                                                                                                                                 |
| 3   | 権限検索条件ID            | permissionSearchCriteriaId     |     |     |  ○  |     |     |     | -     | serial | -        |                                                                                                                                 |
| 3   | 検索条件                  | searchCriteria                 |     |     |  ○  |     |     |     | -     | string | -        | [検索条件](../../../API_Domain_Definition_Table.md)                                                                             |
| 4   | 演算子                    | operator                       |     |     |  ○  |     |     |     | -     | string | -        | [演算子](../../../API_Domain_Definition_Table.md)                                                                               |
| 5   | 値                        | value                          |     |     |  ○  |     |     |     | -     | string | -        |                                                                                                                                 |
| 6   | 権限管理 ID               | permissionManagementId         |     |  ○  |     |     |     |     | -     | string | -        | UUID形式で設定                                                                                                                  |
| 7   | ステータス                | status                         |     |  ○  |     |     |     |     | -     | string | -        | [権限承認状態](../../../API_Domain_Definition_Table.md)                                                                         |
| 8   | 論理削除フラグ            | deletedFlg                     |     |  ○  |     |     |     |     | -     | integer| -        | [論理削除フラグ](../../../API_Domain_Definition_Table.md)                                                                       |
| 9   | 許可要求者 ID（医療機関） | requestedOrganizationId        |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の医療機関ID                                                                                                           |
| 10  | 許可要求者 ID（診療科）   | requestedDepartmentId          |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の診療科ID                                                                                                             |
| 11  | 許可要求者 ID（個人）     | requestedPersonalId            |     |  ○  |     |     |     |     | -     | string | ○       | API実行者の個人ID(PLAT_ID)                                                                                                      |
| 12  | 許可要求日時              | requestedDatetime              |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |
| 13  | 文書所有者ID              | documentOwnerId                |     |  ○  |     |     |     |     | -     | string | -        | 文書の所有者のID(PLAT_ID)                                                                                                       |
| 14  | 権限保持対象区分          | classification                 |     |  ○  |     |     |     |     | -     | string | -        | [権限保持対象区分](../../../API_Domain_Definition_Table.md)                                                                     |
| 15  | 権限保持者ID              | permissionId                   |     |  ○  |     |     |     |     | -     | string | -        | 個人の場合、付与対象者の PLAT 共通 ID もしくはスタッフ ID、医療機関の場合、付与対象の医療機関 ID                                |
| 16  | 権限種別                  | type                           |     |  ○  |     |     |     |     | -     | string | -        | [権限種別](../../../API_Domain_Definition_Table.md)                                                                             |
| 17  | 有効期限（開始）          | expirationFrom                 |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（FROM）                                                                                                          |
| 18  | 有効期限（終了）          | expirationTo                   |     |  ○  |     |     |     |     | -     | date   | -        | 権限の有効期限（TO）                                                                                                            |
| 19  | コメント                  | comment                        |     |  ○  |     |     |     |     | -     | string | -        |                                                                                                                                 |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "permissionManagementList": [
    {
      "permissionSearchCriteriaList": [
        {
          "permissionSearchCriteriaId": 1,
          "searchCriteria": "hospitalCode",
          "operator": "01",
          "value": "2520000009"
        },
        {
          "permissionSearchCriteriaId": 2,
          "searchCriteria": "documentOwnerId",
          "operator": "01",
          "value": "X001"
        },
        {
          "permissionSearchCriteriaId": 3,
          "searchCriteria": "documentType",
          "operator": "01",
          "value": "01"
        }
      ]
      "permissionManagementId": "3fa04331-85fd-4cb5-819d-d240145a74ca",
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
