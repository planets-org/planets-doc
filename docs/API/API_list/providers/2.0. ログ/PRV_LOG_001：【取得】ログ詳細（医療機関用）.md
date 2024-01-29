### 処理概要

ログ詳細を取得する。

| 機能 ID     | API 論理名                          | HTTP メソッド | URI                                              |
| :---------- | :---------------------------------- | :------------ | :----------------------------------------------- |
| PRV_LOG_001 | 【取得】ログ詳細(医療機関用)        | GET           | {applicationPath}/providers/auditlog/{patientId} |

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
| 1   | 患者ID       | patientId        | string  |    〇    | 患者IDで操作ログを検索 |
| 2   | 医療機関ID   | organizationId   | string  |    〇    | 医療機関IDで操作ログを検索 |
| 3   | 診療科ID     | departmentId     | string  |    〇    | 診療科IDで操作ログを検索 |
| 4   | 操作内容     | operationDetails | string  |    〇    | 操作内容のキーワードで操作ログを検索 |
| 5   | 操作日時From | operationDayFrom | string  |    -     | yyyyMMddHHmmss 形式(24時間表記) |
| 6   | 操作日時To   | operationDayTo   | string  |    -     | yyyyMMddHHmmss 形式(24時間表記) |

### リクエスト（パスパラメータ）

| No. | 項目名  | 物理名    |  属性  | Nullable | 設定要領                                         |
| :-- | :------ | :-------- | :----: | :------: | :----------------------------------------------- |
| -   | | | | | |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |

### サンプル（リクエスト）

```
　　{applicationPath}/providers/auditlog/patientId=36b65929-6bd6-455d-9533-ba8c70da4e11
　　&organizationId=252242&departmentId=999&operationDetails=承認
　　&operationDayFrom=20210301123015&operationDayTo=20210401180000
```

### レスポンス

| No. | 項目名                   | 物理名                               | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性    | Nullable | レスポンス設定要領                              |
| :-- | :----------------------- | :----------------------------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :------ | :------- | :---------------------------------------------- |
| 1   | 検索結果                 | searchResults                        | ○  |     |     |     |     |     | -      | object  | -        | |
| 2   | 件数                     | count                                |     | ○  |     |     |     |     | -      | integer | -        | 検索結果件数                                    |
| 3   | 操作ログ情報             | resultsOperationLogInfo              |     | ○  |     |     |     |     | ○     | array   | -        | |
| 4   | 操作ログID               | operation_log_id                     |     |     | ○  |     |     |     | -      | string  | -        | |
| 5   | 操作者区分               | operator_kbn                         |     |     | ○  |     |     |     | -      | string  | -        | 0:医療機関/1:スタッフ/2:患者 |
| 6   | 医療機関ID               | organization_id                      |     |     | ○  |     |     |     | -      | string  | -        | |
| 7   | 医療機関名称             | organization_name                    |     |     | ○  |     |     |     | -      | string  | -        | |
| 8   | 診療科ID                 | department_id                        |     |     | ○  |     |     |     | -      | string  | -        | |
| 9   | 診療科名称               | department_name                      |     |     | ○  |     |     |     | -      | string  | -        | |
| 10  | 操作者                   | operator_id                          |     |     | ○  |     |     |     | -      | string  | -        | PLATID/スタッフID|
| 11  | 操作者名称（漢字）       | operator_name_kanji                  |     |     | ○  |     |     |     | -      | string  | -        | |
| 12  | 操作日時                 | operation_datetime                   |     |     | ○  |     |     |     | -      | string  | -        | |
| 13  | 操作内容                 | operation_details                    |     |     | ○  |     |     |     | -      | string  | -        | 自動承認/医療機関情報取得・・・|
| 14  | 操作結果                 | operation_result                     |     |     | ○  |     |     |     | -      | string  | -        | 0:成功/1:失敗|
| 15  | 操作デバイス（UserAgent）| user_agent                           |     |     | ○  |     |     |     | -      | string  | -        | |
| 16  | FRUCtoSアクセスフラグ    | fructos_access_flg                   |     |     | ○  |     |     |     | -      | integer | -        | 0:無/1:有|
| 17  | リクエスト内容（URI）    | uri                                  |     |     | ○  |     |     |     | -      | string  | -        | |
| 18  | 登録日時                 | registed_datetime                    |     |     | ○  |     |     |     | -      | string  | -        | |
| 19  | 操作対象者情報           | resultsOperationTargetUserInfo       |     |     | ○  |     |     |     | ○     | array   | -        | |
| 20  | 操作対象者ID             | operation_target_user_id             |     |     |     | ○  |     |     | -      | string  | -        | PLATID/スタッフID|
| 21  | 操作対象者区分           | operation_target_user_kbn            |     |     |     | ○  |     |     | -      | string  | -        | スタッフ/患者|
| 22  | 操作対象者名称（漢字）   | operation_target_user_name_kanji     |     |     |     | ○  |     |     | -      | string  | -        | |
| 23  | 通知フラグ               | notification_flg                     |     |     |     | ○  |     |     | -      | string  | -        | 0:通知なし/1:リアルタイム通知/2:集約通知|
| 24  | 操作対象文書情報         | resultsOperationTargetDocumentInfo   |     |     | ○  |     |     |     | ○     | array   | -        | |
| 25  | 連番                     | serial_number                        |     |     |     | ○  |     |     | -      | integer | -        | |
| 26  | 文書キー                 | document_key                         |     |     |     | ○  |     |     | -      | string  | -        | |
| 27  | 文書バージョン           | document_version                     |     |     |     | ○  |     |     | -      | string  | -        | |
| 28  | リソースタイプ           | resource_type                        |     |     |     | ○  |     |     | -      | string  | -        | |
| 29  | 操作対象者ID             | operation_target_user_id             |     |     |     | ○  |     |     | -      | string  | -        | PLATID/スタッフID|
| 30  | 対象保管先               | target_location                      |     |     |     | ○  |     |     | -      | string  | -        | 病院A、患者管理・・・|
| 31  | 操作対象権限情報         | resultsOperationTargetPermissionInfo |     |     | ○  |     |     |     | ○     | array   | -        | |
| 32  | 連番                     | serial_number                        |     |     |     | ○  |     |     | -      | integer | -        | |
| 33  | 権限グループ管理ID       | permission_group_id                  |     |     |     | ○  |     |     | -      | string  | -        | |
| 34  | 権限管理ID               | permission_management_id             |     |     |     | ○  |     |     | -      | string  | -        | |
| 35  | 権限承認ID               | permission_approval_id               |     |     |     | ○  |     |     | -      | string  | -        | |
| 36  | 操作対象者ID             | operation_target_user_id             |     |     |     | ○  |     |     | -      | string  | -        | PLATID/スタッフID|


| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |


### サンプル（レスポンス）

```json title="正常終了"

{
 "searchResults": {
   "count": 1,
   "resultsOperationLogInfo": [
     {
      "operation_log_id": "11310000001000001",
      "operator_kbn": "0",
      "organization_id": "urn:uuid:4081daf3-d25d-42ce-9ff9-815d749b0e19",
      "organization_name": "クリニック X",
      "department_id": "001",
      "department_name": "内科",
      "operator_id": "stf000001",
      "operator_name_kanji": "サンプルスタッフ X1",
      "operation_datetime": "20210315150030",
      "operation_details": "患者文書情報取得",
      "operation_result": "0",
      "user_agent": "サンプル PC-5522-2282252",
      "fructos_access_flg": "1",
      "uri": "sampleurl-xxxxxxxxxxxx",
      "registed_datetime": "20210315150030"
     },
   "resultsOperationTargetUserInfo": [
     {
     "operation_target_user_id": "36b65929-6bd6-455d-9533-ba8c70da4e11",
     "operation_target_user_kbn": "1",
     "operation_target_user_name_kanji": "田中一郎",
     "notification_flg": "1"
     },
   "resultsOperationTargetDocumentInfo": [
     {
     "serial_number": "001",
     "document_key": "dockey0000001",
     "document_version": "1",
     "resource_type": "01",
     "operation_target_user_id": "36b65929-6bd6-455d-9533-ba8c70da4e11",
     "target_location": "self"
     },
   "resultsOperationTargetPermissionInfo": [
     {
     "serial_number": "001",
     "permission_group_id": "001",
     "permission_management_id": "002",
     "permission_approval_id": "003",
     "operation_target_user_id": "36b65929-6bd6-455d-9533-ba8c70da4e11"
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
