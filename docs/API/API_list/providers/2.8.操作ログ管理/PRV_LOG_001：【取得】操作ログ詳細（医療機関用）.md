### 処理概要

操作ログ詳細を取得する。

| 機能 ID     | API 論理名                          | HTTP メソッド | URI                                              |
| :---------- | :---------------------------------- | :------------ | :----------------------------------------------- |
| PRV_LOG_001 | 【取得】操作ログ詳細(医療機関用)        | GET           | {applicationPath}/providers/operationlog             |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名       | 物理名           | 属性    | Nullable | 設定要領                                        |
| :-- | :----------- | :--------------- | :-----: | :------: | :---------------------------------------------- |
| 1   | 参照先     | location            | string |    ○     | ”self”/”remote”/"all"もしくは医療機関 ID のカンマ区切りを URL エンコードを行い指定 |
| 2   | 操作者       | operatorId       | string  |    〇    | PLATID/スタッフIDで操作ログを検索 |
| 3   | 操作対象者   | operationTargetUserId | string  |    〇     | 操作対象者のPLATID |
| 4   | 診療科名称   | departmentName   | string  |    〇    | 診療科名称のキーワード(部分一致) |
| 5   | 操作内容     | operationDetails | string  |    〇    | API論理名で検索(部分一致) |
| 6   | 操作日時From | operationDayFrom | string  |    -     | yyyyMMddHHmmss 形式(24時間表記) |
| 7   | 操作日時To   | operationDayTo   | string  |    -     | yyyyMMddHHmmss 形式(24時間表記) |

### リクエスト（パスパラメータ）

| No. | 項目名  | 物理名    |  属性  | Nullable | 設定要領                                         |
| :-- | :------ | :-------- | :----: | :------: | :----------------------------------------------- |
| -   | | | | | |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |

### サンプル（リクエスト）
＜クエリパラメータ指定の場合＞
```
　　{applicationPath}/providers/operationlog?operatorId=36b65929-6bd6-455d-9533-ba8c70da4e11
　　&operationTargetUserId=a94ad575-e822-4280-b66b-3c530e373872
　　&departmentName=テスト診療科4&operationDetails=承認
　　&operationDayFrom=20210301123015&operationDayTo=20210401180000
```

### レスポンス

| No. | 項目名                   | 物理名                               | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性    | Nullable | レスポンス設定要領                              |
| :-- | :----------------------- | :----------------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :------ | :------- | :---------------------------------------------- |
| 1   | 検索結果                 | searchResults                        | ○  |     |     |     |     |     | -      | object  | -        | |
| 2   | 件数                     | count                                |     | ○  |     |     |     |     | -      | integer | -        | 検索結果件数                                    |
| 3   | 操作ログ情報             | results                              |     | ○  |     |     |     |     | ○     | array   | -        | |
| 4   | 操作ログID               | operationLogId                       |     |     | ○  |     |     |     | -      | string  | -        | |
| 5   | 操作者区分               | operatorKbn                          |     |     | ○  |     |     |     | -      | string  | -        | [操作者区分](../../../API_Domain_Definition_Table.md) |
| 6   | 医療機関ID               | organizationId                       |     |     | ○  |     |     |     | -      | string  | 〇       | |
| 7   | 医療機関名称             | organizationName                     |     |     | ○  |     |     |     | -      | string  | 〇       | |
| 8   | 診療科ID                 | departmentId                         |     |     | ○  |     |     |     | -      | string  | 〇       | |
| 9   | 診療科名称               | departmentName                       |     |     | ○  |     |     |     | -      | string  | 〇       | |
| 10  | 操作者                   | operatorId                           |     |     | ○  |     |     |     | -      | string  | 〇       | PLATID/スタッフID|
| 11  | 操作者名称（漢字）       | operatorNameKanji                    |     |     | ○  |     |     |     | -      | string  | 〇       | |
| 12  | 操作日時                 | operationDatetime                    |     |     | ○  |     |     |     | -      | string  | -        | |
| 13  | 操作内容                 | operationDetails                     |     |     | ○  |     |     |     | -      | string  | -        | 自動承認/医療機関情報取得・・・|
| 14  | 操作結果                 | operationResult                      |     |     | ○  |     |     |     | -      | string  | -        | [操作結果](../../../API_Domain_Definition_Table.md)|
| 15  | 操作デバイス（UserAgent）| userAgent                            |     |     | ○  |     |     |     | -      | string  | -        | |
| 18  | 登録日時                 | registedDatetime                     |     |     | ○  |     |     |     | -      | string  | -        | |
| 19  | 操作対象者情報           | resultsOperationTargetUserInfo       |     |     | ○  |     |     |     | ○     | array   | -        | |
| 20  | 操作対象者ID             | operationTargetUserId                |     |     |     | ○  |     |     | -      | string  | -        | PLATID/スタッフID|
| 21  | 操作対象者区分           | operationTargetUserKbn               |     |     |     | ○  |     |     | -      | string  | 〇       | スタッフ/患者|
| 22  | 操作対象者医療機関ID     | operationTargeOrganizationId         |     |     |     | ○  |     |     | -      | string  | 〇       | |
| 23  | 操作対象者医療機関名称   | operationTargeOrganizationName       |     |     |     | ○  |     |     | -      | string  | 〇       | |
| 24  | 操作対象者診療科ID       | operationTargeDepartmentId           |     |     |     | ○  |     |     | -      | string  | 〇       | |
| 25  | 操作対象者診療科名称     | operationTargeDepartmentName         |     |     |     | ○  |     |     | -      | string  | 〇       | |
| 26  | 操作対象者名称（漢字）   | operationTargetUserNameKanji         |     |     |     | ○  |     |     | -      | string  | 〇       | |
| 27  | 通知タイプ               | notificationType                     |     |     |     | ○  |     |     | -      | integer | -        | [通知タイプ](../../../API_Domain_Definition_Table.md)|
| 28  | 操作対象文書情報         | resultsOperationTargetDocumentInfo   |     |     | ○  |     |     |     | ○     | array   | -        | |
| 29  | 文書キー                 | documentKey                          |     |     |     | ○  |     |     | -      | string  | -        | |
| 30  | 文書種別                 | document_type                        |     |     |     | ○  |     |     | -      | string  | -        | |
| 31  | 文書バージョン           | documentVersion                      |     |     |     | ○  |     |     | -      | string  | -        | |
| 32  | 操作対象者ID             | operationTargetUserId                |     |     |     | ○  |     |     | -      | string  | -        | PLATID/スタッフID|
| 33  | 対象保管先               | targetLocation                       |     |     |     | ○  |     |     | -      | string  | -        | 病院A、患者管理・・・|
| 34  | 操作対象権限情報         | resultsOperationTargetPermissionInfo |     |     | ○  |     |     |     | ○     | array   | -        | |
| 35  | 権限管理ID               | permissionManagementId               |     |     |     | ○  |     |     | -      | string  | -        | |
| 36  | 権限承認ID               | permissionApprovalId                 |     |     |     | ○  |     |     | -      | string  | -        | |
| 37  | 操作対象者ID             | operationTargetUserId                |     |     |     | ○  |     |     | -      | string  | -        | PLATID/スタッフID|


| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |


### サンプル（レスポンス）

```json title="正常終了"

{
    "searchResults": {
        "count": 1,
        "results": [
            {
                "operationLogId": "1-b0a3a6c9-44ac-41bf-bac6-9a2cf50f3495",
                "operatorKbn": "スタッフ",
                "organizationId": "1310000001",
                "organizationName": "クリニックX",
                "departmentId": "004",
                "departmentName": "テスト診療科4",
                "operatorId": "21397ebb-0c0f-4737-bca9-03281b67206d",
                "operatorNameKanji": "テスト太郎",
                "operationDatetime": "Feb 27, 2024, 2:15:04 PM",
                "operationDetails": "明示的承認（文書の承認※一括承認含む）",
                "operationResult": "成功",
                "userAgent": "PostmanRuntime/7.32.3",
                "registedDatetime": "Feb 27, 2024, 2:15:04 PM",
                "resultsOperationTargetUserInfo": [
                    {
                        "operationTargetUserId": "a94ad575-e822-4280-b66b-3c530e373872",
                        "operationTargetUserKbn": "患者",
                        "operationTargeOrganizationId": "1310000001",
                        "operationTargeOrganizationName": "クリニックX",
                        "operationTargeDepartmentId": "004",
                        "operationTargeDepartmentName": "テスト診療科4",
                        "operationTargetUserNameKanji": "患者一郎",
                        "notificationType": 1
                    }
                ],
                "resultsOperationTargetDocumentInfo": [
                    {
                        "documentKey": "urn:uuid:9999f6d7-fa93-2795-f279-94055f8b5bbb",
                        "document_type": "01",
                        "documentVersion": "1",
                        "operationTargetUserId": "a94ad575-e822-4280-b66b-3c530e373872",
                        "targetLocation": "患者管理"
                    }
                ],
                "resultsOperationTargetPermissionInfo": [
                    {
                        "permissionManagementId": "423f1d00-ce95-4d05-9244-923bdbb23cf0",
                        "permissionApprovalId": "20",
                        "operationTargetUserId": "a94ad575-e822-4280-b66b-3c530e373872",
                    }
                ]
            }
        ]
    }
}
```
```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```
### 備考

なし
