### 処理概要

自身が管理している記録・受診内容に対して、医療機関、患者から要求されている権限の内容を変更して承認する。

| 機能 ID     | API 論理名                           | HTTP メソッド | URI                                                                           |
| :---------- | :----------------------------------- | :------------ | :---------------------------------------------------------------------------- |
| PRV_ROL_008 | 【更新】権限の部分承認（医療機関用） | PUT           | {applicationPath}/providers/permission/partialapproval/{permissionApprovalId} |

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
|     | なし   |        |      |          |          |

### リクエスト（パスパラメータ）

| No. | 項目名      | 物理名               |  属性  | Nullable | 設定要領                 |
| :-- | :---------- | :------------------- | :----: | :------: | :----------------------- |
| 1   | 権限承認 ID | permissionApprovalId | string |          | 権限承認 ID を設定する。 |

### リクエスト(Body)

| No. | 項目名                    | 物理名                  | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                                                                                                |
| :-- | :------------------------ | :---------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 拒否コメント              | rejectComment           |  ○  |     |     |     |     |     | -      | string | -        | 権限拒否の際のコメント                                                                                                            |
| 2   | コメント                  | comment                 |  ○  |     |     |     |     |     | -      | string | -        | 権限承認の際のコメント                                                                                                            |
| 3   | 権限要求リスト            | permissionApproval      |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                   |
| 4   | 許可可能者 ID（医療機関） | allowableOrganizationId |     |  ○  |     |     |     |     | -      | string | -        | 組織単位で設定する際は必須                                                                                                        |
| 5   | 許可可能者 ID（診療科）   | allowableDepartmentId   |     |  ○  |     |     |     |     | -      | string | ○        | 組織単位で設定する際に診療科まで許可者を絞る際は設定                                                                              |
| 6   | 許可可能者 ID（個人）     | allowablePersonalId     |     |  ○  |     |     |     |     | -      | string | -        | 個人単位で設定する際は必須                                                                                                        |
| 7   | 権限リスト                | permissionList          |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                   |
| 8   | 権限保持対象区分          | classification          |     |  ○  |     |     |     |     | -      | string | -        | 1:個人、2:組織                                                                                                                    |
| 9   | 許可者 ID                 | permissionId            |     |  ○  |     |     |     |     | -      | string | -        | 付与する対象者の PLAT_ID または STAFF_ID を設定                                                                                   |
| 10  | 権限種別                  | type                    |     |  ○  |     |     |     |     | -      | string | -        | "01:ReadOnly(参照のみ)<br/>02:UpdateOnly(参照、更新、削除)<br/>03:FullAccess(参照、登録、更新、削除)<br/>04:AccessDeny(権限無し)" |
| 11  | 有効期限（開始）          | expirationFrom          |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（FROM）                                                                                                            |
| 12  | 有効期限（終了）          | expirationTo            |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（TO）                                                                                                              |
| 13  | 権限詳細リスト            | detailList              |     |  ○  |     |     |     |     | ○      | array  | -        |                                                                                                                                   |
| 14  | 対象パス                  | path                    |     |     |  ○  |     |     |     | -      | string | ○        | 権限チェック対象の階層パス                                                                                                        |
| 15  | 演算子                    | operator                |     |     |  ○  |     |     |     | -      | string | ○        | "パスに対して値をどうチェックするか<br/>01:＝ ※ 現時点では「＝」のみ"                                                             |
| 16  | 値                        | value                   |     |     |  ○  |     |     |     | -      | string | ○        | 階層パスのチェックする値                                                                                                          |

### サンプル（リクエスト）

医療機関が患者へ保険医療記録の閲覧権限を要求する場合

```json
{
  "rejectComment": "拒否します",
  "comment": "承認しました",
  "permissionApproval": [
    {
      "approverOrganizationId": "0001",
      "approverDepartmentId": "0011",
      "approverPersonalId": "0111"
    }
  ],
  "permissionList": [
    {
      "classification": "1",
      "permissionId": "1000000001",
      "type": "01",
      "expirationFrom": "Mar 2, 2021, 1:00:00 AM",
      "expirationTo": "Feb 23, 2022, 1:00:00 AM",
      "detailList": [
        {
          "path": "Composition.author:PractitionerRole.identifier",
          "operator": "01",
          "value": "urn:oid:1.2.392.100495.20.3.41.11311234567|1000002"
        },
        {
          "path": "Composition.type.coding.code",
          "operator": "02",
          "value": "03"
        },
        {
          "path": "Composition.date",
          "operator": "06",
          "value": "2022-03-31T13:00:00Z"
        },
        {
          "path": "Composition.date",
          "operator": "05",
          "value": "2021-03-01T13:00:00Z"
        },
        {
          "path": "Composition.identifier",
          "operator": "01",
          "value": "urn:oid:1.2.392.100495.20.3.11|10000004000000000004"
        },
        {
          "path": "Composition.author:Organization.identifier",
          "operator": "01",
          "value": "http://hl7.jp/fhir/ePrescription/InsuranceMedicalInstitutionNo|1310000002"
        },
        {
          "path": "Composition.subject:Patient.identifier",
          "operator": "01",
          "value": "http://10.13.21.6:8099/openfhir-api-0.0.1.20210317-SNAPSHOT|10000003"
        }
      ]
    },
    {
      "classification": "2",
      "permissionId": "9000000001",
      "type": "03",
      "expirationFrom": "Mar 2, 2021, 1:00:00 AM",
      "expirationTo": "Feb 23, 2022, 1:00:00 AM",
      "detailList": [
        {
          "path": "Composition.identifier",
          "operator": "01",
          "value": "urn:ietf:rfc:3986|http://emr-server/documents/123456"
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
| 24  | 承認日時                  | approvedDatetime        |     |  ○  |     |     |     |     | ○      | date   | -        |                                                                                                                                 |
| 25  | 権限コメントリスト        | permissionComment       |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 26  | 医療機関 ID               | organizationId          |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 27  | 診療科 ID                 | departmentId            |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 28  | 個人 ID                   | personalId              |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 29  | コメント                  | comment                 |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |

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
      "allowablePersonalId": "0034fff5-296b-4ece-b2b8-a97e34ae5cf2",
      "approvedDatetime": "Feb 23, 2021, 1:00:00 AM"
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

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
