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

クエリパラメータとパスパラメータが指定されていない場合は、一覧を返却する。

| No. | 項目名       | 物理名         |  属性  | Nullable | 設定要領                                                                     |
| :-- | :----------- | :------------- | :----: | :------: | :--------------------------------------------------------------------------- |
| 1   | 権限保持区分 | classification | string |    -     | 権限保持区分を設定する。（1:個人、2:組織）                                   |
| 2   | 許可者 ID    | permissionId   | string |    -     | 許可者 ID を設定する。（個人の場合は PLAT 共通 ID、組織の場合は医療機関 ID） |
| 3   | 基準日       | defaultdate    |  date  |    -     | 権限の有効期限 From ～ To の条件を設定する。                                 |

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
　　{applicationPath}/providers/permissions?classification=2&permissionId=1310000001&defaultdate=2021-04-01T13:00:00Z
```

### レスポンス

| No. | 項目名              | 物理名                 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                                                                                              |
| :-- | :------------------ | :--------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | 権限管理リスト      | permissionList         |  ○  |     |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 2   | 権限詳細リスト      | detailList             |     |  ○  |     |     |     |     | ○      | array  | -        |                                                                                                                                 |
| 3   | 権限詳細 ID         | permissionDetailId     |     |     |  ○  |     |     |     | -      | string | -        |                                                                                                                                 |
| 4   | 権限管理 ID         | permissionManagementId |     |     |  ○  |     |     |     | -      | string | -        |                                                                                                                                 |
| 5   | 対象パス            | path                   |     |     |  ○  |     |     |     | -      | string | -        | 権限チェック対象の階層パス                                                                                                      |
| 6   | 演算子              | operator               |     |     |  ○  |     |     |     | -      | string | -        | パスに対して値をどうチェックするか<br/>01:＝ ※ 現時点では「＝」のみ                                                             |
| 7   | 値                  | value                  |     |     |  ○  |     |     |     | -      | string | -        |                                                                                                                                 |
| 8   | 権限管理 ID         | permissionManagementId |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 9   | 権限グループ管理 ID | permissionGroupId      |     |  ○  |     |     |     |     | -      | string | -        |                                                                                                                                 |
| 10  | 権限保持対象区分    | classification         |     |  ○  |     |     |     |     | -      | string | -        | 1:個人、2:組織                                                                                                                  |
| 11  | 許可者 ID           | permissionId           |     |  ○  |     |     |     |     | -      | string | -        | 付与する対象者の PLAT_ID または STAFF_ID を設定                                                                                 |
| 12  | 権限種別            | type                   |     |  ○  |     |     |     |     | -      | string | -        | 01:ReadOnly(参照のみ)<br/>02:UpdateOnly(参照、更新、削除)<br/>03:FullAccess(参照、登録、更新、削除)<br/>04:AccessDeny(権限無し) |
| 13  | 有効期限（開始）    | expirationFrom         |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（FROM）                                                                                                          |
| 14  | 有効期限（終了）    | expirationTo           |     |  ○  |     |     |     |     | -      | date   | -        | 権限の有効期限（TO）                                                                                                            |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "permissionList": [
    {
      "detailList": [
        {
          "permissionDetailId": 1,
          "permissionManagementId": "521f67c7-4eb6-402b-a873-684f9cd5f6b7",
          "path": "Composition.author:Organization.identifier",
          "operator": "01",
          "value": "http://hl7.jp/fhir/ePrescription/InsuranceMedicalInstitutionNo|1310000001"
        }
      ],
      "permissionManagementId": "521f67c7-4eb6-402b-a873-684f9cd5f6b7",
      "classification": "2",
      "permissionId": "1310000001",
      "type": "03",
      "expirationFrom": "Mar 2, 2021, 1:00:00 AM",
      "expirationTo": "Feb 23, 2022, 1:00:00 AM"
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
