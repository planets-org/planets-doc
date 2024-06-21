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
| :-- | :------ | :----- | :--: | :------: | :------- |
| 1   | 参照先     | location            | string |    ○     | ”self”/”remote”/"all"もしくは医療機関 ID のカンマ区切りを URL エンコードを行い指定 |

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名                    | 物理名                  | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                                                                                                |
| :-- | :------------------------ | :---------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| 1   | コメント                  | comment                 |  ○  |     |     |     |     |     | -      | string | -        | 権限承認の際のコメント                                                                                                            |
| 2   | 権限要求リスト            | permissionApproval      |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                   |
| 3   | 許可可能者 ID（医療機関） | allowableOrganizationId |     |  ○  |     |     |     |     | -      | string | -        | 組織単位で設定する際は必須                                                                                                        |
| 4   | 許可可能者 ID（診療科）   | allowableDepartmentId   |     |  ○  |     |     |     |     | -      | string | ○        | 組織単位で設定する際に診療科まで許可者を絞る際は設定                                                                              |
| 5   | 許可可能者 ID（個人）     | allowablePersonalId     |     |  ○  |     |     |     |     | -      | string | -        | 個人単位で設定する際は必須                                                                                                        |
| 6   | 権限リスト                | permissionList          |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                   |
| 7   | 権限保持対象区分          | classification          |     |  ○  |     |     |     |     | -      | string | -        | 1:個人、2:組織                                                                                                                    |
| 8   | 許可者 ID                 | permissionId            |     |  ○  |     |     |     |     | -      | string | -        | 個人の場合、付与対象者の PLAT 共通 ID もしくはスタッフ ID、医療機関の場合、付与対象の医療機関 ID                                  |
| 9   | 権限種別                  | type                    |     |  ○  |     |     |     |     | -      | string | -        | "01:ReadOnly(参照のみ)<br/>02:UpdateOnly(参照、更新、削除)<br/>03:FullAccess(参照、登録、更新、削除)<br/>04:AccessDeny(権限無し)" |
| 10  | 有効期限（開始）          | expirationFrom          |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（FROM）                                                                                                            |
| 11  | 有効期限（終了）          | expirationTo            |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（TO）                                                                                                              |
| 12  | 権限詳細リスト            | detailList              |     |  ○  |     |     |     |     | ○      | array  | -        |                                                                                                                                   |
| 13  | 対象パス                  | path                    |     |     |  ○  |     |     |     | -      | string | ○        | 権限チェック対象の階層パス                                                                                                        |
| 14  | 演算子                    | operator                |     |     |  ○  |     |     |     | -      | string | ○        | "パスに対して値をどうチェックするか<br/>01:＝ ※ 現時点では「＝」のみ"                                                             |
| 15  | 値                        | value                   |     |     |  ○  |     |     |     | -      | string | ○        | 階層パスのチェックする値                                                                                                          |

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
　　　　　　"classification": "2",
　　　　　　"permissionId": "1310000001", → 医療機関 ID を設定
　　　　　　"type": "01",
　　　　　　"expirationFrom": "Mar 2, 2021, 1:00:00 AM",
　　　　　　"expirationTo": "Mar 2, 2025, 1:00:00 AM",
　　　　　　"detailList": [
　　　　　　　　{
　　　　　　　　　　"path": "Composition.subject:Patient.identifier",
　　　　　　　　　　"operator": "01",
　　　　　　　　　　"value": "https://www.plat.org/|6d86c3e2-aa16-6a0c-89df-a4d40bcc83ca"
　　　　　　　　},
　　　　　　　　{
　　　　　　　　　　"path": "type.coding.code",　 →Bundle の Path（文書タイプ）
　　　　　　　　　　"operator": "01",　
　　　　　　　　　　"value": "01"　 → 文書タイプの値
　　　　　　　　}
　　　　　　]
　　　　}
　　]
}
```

### レスポンス

| No. | 項目名                    | 物理名                  | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                                                              |
| :-- | :------------------------ | :---------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 権限管理オブジェクト      | permissonGroup          |  ○  |     |     |     |     |     | -      | object | -        |                                                                                                                                 |
| 2   | 権限グループ管理 ID       | permissionGroupId       |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 3   | ステータス                | status                  |     |  ○  |     |     |     |     | -      | string | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ                                      |
| 4   | 権限要求者 ID（医療機関） | requestedOrganizationId |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 5   | 権限要求者 ID（診療科）   | requestedDepartmentId   |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 6   | 権限要求者 ID（個人）     | requestedPersonalId     |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 7   | 権限要求日時              | requestedDatetime       |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 8   | 権限リスト                | permissionList          |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 9   | 権限管理 ID               | permissionManagementId  |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 10  | 権限保持対象区分          | classification          |     |  ○  |     |     |     |     | -      | string | -        | 1:個人、2:組織                                                                                                                  |
| 11  | 許可者 ID                 | permissionId            |     |  ○  |     |     |     |     | -      | string | -        | 付与する対象者の PLAT_ID または STAFF_ID を設定                                                                                 |
| 12  | 権限種別                  | type                    |     |  ○  |     |     |     |     | -      | string | -        | 01:ReadOnly(参照のみ)<br/>02:UpdateOnly(参照、更新、削除)<br/>03:FullAccess(参照、登録、更新、削除)<br/>04:AccessDeny(権限無し) |
| 13  | 有効期限（開始）          | expirationFrom          |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（FROM）                                                                                                          |
| 14  | 有効期限（終了）          | expirationTo            |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（TO）                                                                                                            |
| 15  | 権限詳細リスト            | detailList              |     |  ○  |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 16  | 対象パス                  | path                    |     |     |  ○  |     |     |     | -      | string | -        | 権限チェック対象の階層パス                                                                                                      |
| 17  | 演算子                    | operator                |     |     |  ○  |     |     |     | -      | string | -        | パスに対して値をどうチェックするか<br/>01:＝ ※ 現時点では「＝」のみ                                                             |
| 18  | 値                        | value                   |     |     |  ○  |     |     |     | -      | string | -        | 階層パスのチェックする値                                                                                                        |
| 19  | 権限承認リスト            | permissionApproval      |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 20  | ステータス                | status                  |     |  ○  |     |     |     |     | -      | string | -        | 権限の承認状態を設定する。<br/>0:承認要求中<br/>1:承認済み<br/>2:承認拒否<br/>3:承認取下げ                                      |
| 21  | 権限承認者 ID（医療機関） | allowableOrganizationId |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 22  | 権限承認者 ID（診療科）   | allowableDepartmentId   |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 23  | 権限承認者 ID（個人）     | allowablePersonalId     |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 24  | 権限コメントリスト        | permissionComment       |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 25  | 医療機関 ID               | organizationId          |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 26  | 診療科 ID                 | departmentId            |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 27  | 個人 ID                   | personalId              |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 28  | コメント                  | comment                 |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "permissionGroup": {
    "permissionGroupId": "d79650b4-1f72-4ee8-85dd-1aaa049d0da9",
    "status": "0",
    "requestedOrganizationId": "1310000001",
    "requestedDepartmentId": "",
    "requestedPersonalId": "faab8ced-33ce-4ef9-800a-7c8310020ecc",
    "requestedDatetime": "Oct 6, 2021, 9:44:07 PM"
  },
  "permissionList": [
    {
      "detailList": [
        {
          "path": "Composition.subject:Patient.identifier",
          "operator": "01",
          "value": "https://www.plat.org/|0034fff5-296b-4ece-b2b8-a97e34ae5cf2"
        },
        {
          "path": "type.coding.code",
          "operator": "01",
          "value": "01"
        }
      ],
      "permissionManagementId": "c42e5ca3-fb57-4e5a-9b75-a9b08aeddda4",
      "classification": "1",
      "permissionId": "faab8ced-33ce-4ef9-800a-7c8310020ecc",
      "type": "01",
      "expirationFrom": "Mar 2, 2021, 1:00:00 AM",
      "expirationTo": "Feb 23, 2022, 1:00:00 AM"
    }
  ],
  "permissionApproval": [
    {
      "status": "0",
      "allowablePersonalId": "0034fff5-296b-4ece-b2b8-a97e34ae5cf2"
    }
  ],
  "permissionComment": [
    {
      "organizationId": "1310000001",
      "departmentId": "",
      "personalId": "faab8ced-33ce-4ef9-800a-7c8310020ecc",
      "comment": "クリニック X 医師 B への権限承認をお願いします"
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
