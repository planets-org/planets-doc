### 処理概要

指定した医療機関に登録されている文書の患者とその基本情報の取得する。

| 機能 ID     | API 論理名                     | HTTP メソッド | URI                                            |
| :---------- | :----------------------------- | :------------ | :--------------------------------------------- |
| PRV_PAT_004 | 【取得】特定文書を持つ患者情報 | GET           | {applicationPath}/providers/documents/patients |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名   | 物理名     |  属性  | Nullable | 設定要領                                                                                            |
| :-- | :------- | :--------- | :----: | :------: | :-------------------------------------------------------------------------------------------------- |
| 1   | 参照先   | location   | string |    ○     | ”self”/”remote”/"all"もしくは医療機関 ID のカンマ区切りを URL エンコードを行い指定                  |
| 2   | 検索条件 | conditions | string |    ○     | OpenFRUCtoS 固有の検索文字列　{パラメータ名}={パラメータ値}を”&”でつなげて URL エンコードを行い指定 |

### リクエスト（パスパラメータ）

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |

### サンプル（リクエスト）

```
{applicationPath}/providers/documents/patients
```

### レスポンス

| No. | 項目名       | 物理名       | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性    | Nullable | レスポンス設定要領                                  |
| :-- | :----------- | :----------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :------ | :------- | :-------------------------------------------------- |
| 1   | 検索結果     | results      |  ○  |     |     |     |     |     | ○      | array   | -        |                                                     |
| 2   | 医療機関情報 | organization |     |  ○  |     |     |     |     | -      | string  | -        | OpenFRUCtoS の Oganization リソースの仕様に準拠する |
| 3   | 患者情報     | contents     |     |  ○  |     |     |     |     | -      | string  | -        | OpenFRUCtoS の Patient リソースの仕様に準拠する     |
| 4   | 検索結果数   | count        |  ○  |     |     |     |     |     | -      | integer | -        |                                                     |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
　　"results":[
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
　　　　　　　　　　"div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;ul&gt;&lt;li&gt;1310000001&lt;/li&gt;&lt;li&gt;クリニックX&lt;/li&gt;&lt;li&gt;〒163-0490 東京都新宿区西新宿 2-1-1&lt;/li&gt;&lt;li&gt;03-0000-0001&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;"
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
　　　　　　"resourceType": "Patient",
　　　　　　"id": "10",
　　　　　　"meta": {
　　　　　　　　"versionId": "1",
　　　　　　　　"lastUpdated": "2021-10-05T11:44:44.808+09:00"
　　　　　　},
　　　　　　"text": {
　　　　　　　　"status": "generated",
　　　　　　　　"div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;TEST&lt;/div&gt;"
　　　　　　},
　　　　　　"identifier": [
　　　　　　　　{
　　　　　　　　　　"system": "https://www.plat.org/",
　　　　　　　　　　"value": "e0930731-3d80-4097-a455-1e4aa250fd7a"
　　　　　　　　},
　　　　　　　　{
　　　　　　　　　　"system": "urn:oid:1.2.392.100495.20.3.51.11310000001",
　　　　　　　　　　"value": "11310000001000001"
　　　　　　　　}
　　　　　　],
　　　　　　"active": true,
　　　　　　"name": [
　　　　　　　　{
　　　　　　　　　　"extension": [
　　　　　　　　　　　　{
　　　　　　　　　　　　　　"url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
　　　　　　　　　　　　　　"valueCode": "IDE"
　　　　　　　　　　　　}
　　　　　　　　　　],
　　　　　　　　　　"family": "山田",
　　　　　　　　　　"given": [
　　　　　　　　　　　　"太郎"
　　　　　　　　　　]
　　　　　　　　},
　　　　　　　　{
　　　　　　　　　　"extension": [
　　　　　　　　　　　　{
　　　　　　　　　　　　　　"url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
　　　　　　　　　　　　　　"valueCode": "SYL"
　　　　　　　　　　　　}
　　　　　　　　　　],
　　　　　　　　　　"family": "ヤマダ",
　　　　　　　　　　"given": [
　　　　　　　　　　　　"タロウ"
　　　　　　　　　　]
　　　　　　　　}
　　　　　　],
　　　　　　"telecom": [
　　　　　　　　{
　　　　　　　　　　"system": "phone",
　　　　　　　　　　"value": "09099999999",
　　　　　　　　　　"use": "mobile"
　　　　　　　　}
　　　　　　],
　　　　　　"gender": "male",
　　　　　　"birthDate": "1974-12-25",
　　　　　　"deceasedBoolean": false,
　　　　　　"address": [
　　　　　　　　{
　　　　　　　　　　"use": "home",
　　　　　　　　　　"line": [
　　　　　　　　　　　　"玉手町 18-50"
　　　　　　　　　　],
　　　　　　　　　　"city": "柏原市",
　　　　　　　　　　"district": "大阪府",
　　　　　　　　　　"postalCode": "5820001"
　　　　　　　　}
　　　　　　]
　　　　}
　　],
　　"count":1
}
```

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
