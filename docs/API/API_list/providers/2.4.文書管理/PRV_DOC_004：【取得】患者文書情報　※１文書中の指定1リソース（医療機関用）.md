### 処理概要

特定文書に含まれる 1 リソースを取得する。

| 機能 ID     | API 論理名                                                     | HTTP メソッド | URI                                                                                   |
| :---------- | :------------------------------------------------------------- | :------------ | :------------------------------------------------------------------------------------ |
| PRV_DOC_004 | 【取得】患者文書情報　※１文書中の指定 1 リソース（医療機関用） | GET           | {applicationPath}/providers/patients/documents/{documentKey}/resources/{resourceType} |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名 | 物理名   |  属性  | Nullable | 設定要領                                                                           |
| :-- | :----- | :------- | :----: | :------: | :--------------------------------------------------------------------------------- |
| 1   | 参照先 | location | string |    ○     |[参照先（文書管理）](../../../API_Domain_Definition_Table.md)  |

### リクエスト（パスパラメータ）

| No. | 項目名         | 物理名       |  属性  | Nullable | 設定要領                                |
| :-- | :------------- | :----------- | :----: | :------: | :-------------------------------------- |
| 1   | 文書キー       | documentKey  | string |    -     | URL エンコードを行う                    |
| 2   | リソースタイプ | resourceType | string |    -     | Bundle リソース内のリソースタイプを指定 |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

```
{applicationPath}/providers/patients/documents/urn%3Auuid%3Abb2e253d-3ba6-4ec8-a3f7-60da8560c6d7/resources/Composition?location=remote
```

### レスポンス

| No. | 項目名              | 物理名       | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領                                               |
| :-- | :------------------ | :----------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :--------------------------------------------------------------- |
| 1   | 医療機関情報        | organization |  ○  |     |     |     |     |     | -      | object | -        | OpenFRUCtoS の Oganization リソースの仕様に準拠する              |
| 2   | Bundle リソース情報 | contents     |     |  ○  |     |     |     |     | -      | string | -        | OpenFRUCtoS の Bundle リソース内各リソースタイプの仕様に準拠する |
| 3   | 文書バージョン      | version      |     |  ○  |     |     |     |     | -      | string | -        |                                                                  |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
　　"organization": {
　　　　"fullUrl": "http://localhost:8099/of3/Organization/1",
　　　　"resource": {
　　　　　　"resourceType": "Organization",
　　　　　　"id": "1",
　　　　　　"meta": {
　　　　　　　　"versionId": "1",
　　　　　　　　"lastUpdated": "2021-09-24T19:41:56.646+09:00"
　　　　　　},
　　　　　　"text": {
　　　　　　　　"status": "generated",
　　　　　　　　"div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;ul&gt;&lt;li&gt;1310000001&lt;/li&gt;&lt;li&gt;クリニックX&lt;/li&gt;&lt;/div&gt;"
　　　　　　},
　　　　　　"identifier": [
　　　　　　　　{
　　　　　　　　　　"system": "http://hl7.jp/fhir/ePrescription/InsuranceMedicalInstitutionNo",
　　　　　　　　　　"value": "1310000001"
　　　　　　　　}
　　　　　　],
　　　　　　"name": "クリニック X",
　　　　　　"telecom": [
　　　　　　　　{
　　　　　　　　　　"system": "phone",
　　　　　　　　　　"value": "03-0000-0001"
　　　　　　　　}
　　　　　　],
　　　　　　"address": [
　　　　　　　　{
　　　　　　　　　　"text": "163-0488 東京都新宿区西新宿 2-12-1"
　　　　　　　　}
　　　　　　]
　　　　},
　　　　"search": {
　　　　　　"mode": "include"
　　　　}
　　},
　　"contents":{
　　　　{
　　　　　　"fullUrl": "urn:uuid:24ada691-1828-4ff9-9694-9705e0ffbbe7",
　　　　　　"resource": {
　　　　　　　　"resourceType": "Composition",
　　　　　　　　"id": "urn:uuid:24ada691-1828-4ff9-9694-9705e0ffbbe7",
　　　　　　　　"text": {
　　　　　　　　　　"status": "generated",
　　　　　　　　　　"div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;処方箋サンプル_患者1_クリニックX_医師A1&lt;/div&gt;"
　　　　　　　　},
　　　　　　　　"identifier": {
　　　　　　　　　　"system": "urn:oid:1.2.392.100495.20.3.11",
　　　　　　　　　　"value": "11310000001000001000001"
　　　　　　　　},
　　　　　　　　"status": "final",
　　　　　　　　"type": {
　　　　　　　　　　"coding": [
　　　　　　　　　　　　{
　　　　　　　　　　　　　　"system": "urn:oid:1.2.392.100495.20.2.11",
　　　　　　　　　　　　　　"code": "01",
　　　　　　　　　　　　　　"display": "処方箋"
　　　　　　　　　　　　}
　　　　　　　　　　]
　　　　　　　　},
　　　　　　　　"subject": {
　　　　　　　　　　"reference": "urn:uuid:75563685-6d0b-4c88-a735-50ff64507414",
　　　　　　　　　　"display": "サンプル患者 1"
　　　　　　　　},
　　　　　　　　"date": "2021-03-01T09:00:00+09:00",
　　　　　　　　"author": [
　　　　　　　　　　{
　　　　　　　　　　　　"reference": "urn:uuid:738ba3db-e282-4fce-b66d-9e054c7a1987",
　　　　　　　　　　　　"display": "サンプル医師 A1"
　　　　　　　　　　},
　　　　　　　　　　{
　　　　　　　　　　　　"reference": "urn:uuid:4081daf3-d25d-42ce-9ff9-815d749b0e19",
　　　　　　　　　　　　"display": "クリニック X"
　　　　　　　　　　}
　　　　　　　　],
　　　　　　　　"title": "処方箋サンプル*患者 1*クリニック X\_医師 A1",
　　　　　　　　"event": [
　　　　　　　　　　{
　　　　　　　　　　　　"code": [
　　　　　　　　　　　　　　{
　　　　　　　　　　　　　　　　"text": "処方箋交付"
　　　　　　　　　　　　　　}
　　　　　　　　　　　　],
　　　　　　　　　　　　"period": {
　　　　　　　　　　　　　　"start": "2021-03-01",
　　　　　　　　　　　　　　"end": "2021-03-07"
　　　　　　　　　　　　}
　　　　　　　　　　}
　　　　　　　　],
　　　　　　　　"section": [
　　　　　　　　　　{
　　　　　　　　　　　　"title": "処方指示 BODY",
　　　　　　　　　　　　"entry": [
　　　　　　　　　　　　　　{
　　　　　　　　　　　　　　　　"reference": "urn:uuid:1a1fcd84-ba4c-456d-baf3-e3198e7c40fa"
　　　　　　　　　　　　　　}
　　　　　　　　　　　　]
　　　　　　　　　　}
　　　　　　　　]
　　　　　　}
　　　　}
　　},
　　"version": "1"
}
```

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
