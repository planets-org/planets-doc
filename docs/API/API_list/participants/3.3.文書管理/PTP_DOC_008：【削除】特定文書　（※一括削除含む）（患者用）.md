### 処理概要

特定患者に文書を削除する。

| 機能 ID     | API 論理名                                    | HTTP メソッド | URI                                               |
| :---------- | :-------------------------------------------- | :------------ | :------------------------------------------------ |
| PTP_DOC_008 | 【削除】特定文書　（※一括削除含む）（患者用） | DELETE        | {applicationPath}/participants/patients/documents |

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

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名                  | 物理名     | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | リクエスト設定要領                                                                                                              |
| :-- | :---------------------- | :--------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------ |
| 1   | Bundle の登録対象リスト | bundleList |  ○  |     |     |     |     |     | -      | object | -        |                                                                                                                                 |
| 2   | Bundle 構造体           |            |     |  ○  |     |     |     |     | ○      | -      | -        | OpenFRUCtoS の Bundle リソースの仕様に準拠する<br/>[参考：3.Bundle リソース構造体について](../../../../Plat/resource_bundle.md) |

### サンプル（リクエスト）

```json
{
　　"bundleList":[
　　　　{
　　　　　　"resourceType": "Bundle",
　　　　　　"id": "1",
　　　　　　"meta": {
　　　　　　　　"versionId": "1",
　　　　　　　　"lastUpdated": "2021-07-12T13:55:48.899+09:00"
　　　　　　},
　　　　　　"identifier": {
　　　　　　　　"system": "urn:ietf:rfc:3986",
　　　　　　　　"value": "urn:uuid:48eb2225-4947-19f4-f59f-0b048ebae42e"
　　　　　　},
　　　　　　"type": "document",
　　　　　　"timestamp": "2021-03-01T09:00:00+09:00",
　　　　　　"entry": [
　　　　　　　　{
　　　　　　　　　　"fullUrl": "urn:uuid:cb6a36fb-f7ce-ddb7-40d2-e918d90149f7",
　　　　　　　　　　"resource": {
　　　　　　　　　　　　"resourceType": "Composition",
　　　　　　　　　　　　"id": "urn:uuid:24ada691-1828-4ff9-9694-9705e0ffbbe7",
　　　　　　　　　　　　"text": {
　　　　　　　　　　　　　　"status": "generated",
　　　　　　　　　　　　　　"div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;処方箋サンプル&lt;/div&gt;"
　　　　　　　　　　　　},
　　　　　　　　　　　　"identifier": {
　　　　　　　　　　　　　　"system": "urn:oid:1.2.392.100495.20.3.11",
　　　　　　　　　　　　　　"value": "11310000001000001000001"
　　　　　　　　　　　　},
　　　　　　　　　　　　"status": "preliminary",
　　　　　　　　　　　　"type": {
　　　　　　　　　　　　　　"coding": [
　　　　　　　　　　　　　　　　{
　　　　　　　　　　　　　　　　　　"system": "urn:oid:1.2.392.100495.20.2.11",
　　　　　　　　　　　　　　　　　　"code": "99",
　　　　　　　　　　　　　　　　　　"display": "本人由来記録"
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
　　　　　　　　　　　　　　　　"display": "サンプル A 病院"
　　　　　　　　　　　　　　}
　　　　　　　　　　　　],
　　　　　　　　　　　　"title": "処方箋サンプル*患者 1_A 病院*医師 A1",
　　　　　　　　　　　　"event": [
　　　　　　　　　　　　　　{
　　　　　　　　　　　　　　　　"code": [
　　　　　　　　　　　　　　　　　　{
　　　　　　　　　　　　　　　　　　　　"text": "処方箋交付"
　　　　　　　　　　　　　　　　　　}
　　　　　　　　　　　　　　　　],
　　　　　　　　　　　　　　　　"period": {
　　　　　　　　　　　　　　　　　　"start": "2021-09-29",
　　　　　　　　　　　　　　　　　　"end": "2021-09-29"
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
　　　　　　　　},
・・・省略・・・
　　　　　　}
　　　　}
　　]
}
```

### レスポンス

| No. | 項目名                  | 物理名           | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領 |
| :-- | :---------------------- | :--------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | Bundle の登録結果リスト | bundleResultList |  ○  |     |     |     |     |     | ○      | array  | -        |                    |
| 2   | 医療機関 ID             | organizationId   |     |  ○  |     |     |     |     | -      | string | -        |                    |
| 3   | 状態                    | status           |     |  ○  |     |     |     |     | -      | string | -        | success：正常      |
| 4   | 診断内容                | diagnostics      |     |  ○  |     |     |     |     | -      | string | ○        |                    |
| 5   | ID                      | id               |     |  ○  |     |     |     |     | -      | string | -        | Bundle ID          |
| 6   | 文書キー                | documentKey      |     |  ○  |     |     |     |     | -      | string | -        |                    |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "bundleResultList": [
    {
      "organizationId": "1310000001",
      "status": "success",
      "diagnostics": "",
      "id": "30",
      "documentKey": "urn:uuid:48eb2225-4947-19f4-f59f-0b048ebae42e"
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
