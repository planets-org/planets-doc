### 処理概要

患者情報を確認する。

| 機能 ID     | API 論理名              | HTTP メソッド | URI                                              |
| :---------- |:---------------------| :------------ | :----------------------------------------------- |
| PRV_PAT_002 | 【取得】PLAT 患者情報（医療機関用） | GET           | {applicationPath}/providers/patients/{patientId} |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

| No. | 項目名   | 物理名     | 属性   | Nullable | 桁数 | 最小値 | 最大値 | フォーマット | 過去日付 | 未来日付 | 設定要領 |
| :-- | :------- | :-------- | :----: | :------: | ---- | ----- | ------ | ----------- | -------- | -------- | :------------------------------------- | 
| 1   | 名前     | name      | string |    ○     | 30   |       |        |  制御文字以外 |          |　        | 漢字もしくはカナの前方一致検索            |
| 2   | 住所     | address   | string |    ○     |  400 |       |        | 制御文字以外 |          |　        | 住所を前方一致検索                        |
| 3   | 電話番号 | telecom   | string |    ○     |  17  |       |        | 数字のみ |          |　        | 電話番号を完全一致検索                    |
| 4   | 性別     | gender    | string |    ○     | -     |       |        | male&#124;famale  |          |　        | "male" か "famale"で検索                  |
| 5   | 生年月日 | birthDate |  date  |    ○     | -     |       |        | YYYY-MM-DD 形式 |          |　        | 生年月日を完全一致検索（YYYY-MM-DD 形式） |

### リクエスト（パスパラメータ）

| No. | 項目名  | 物理名    |  属性  | Nullable | 桁数 | 最小値 | 最大値 | フォーマット | 過去日付 | 未来日付 | 設定要領                                         |
| :-- | :------ | :-------- | :----: | :------: | --- | ----- | ------ | ----------- | -------- | ------- |:----------------------------------------------- |
| 1   | 患者 ID | patientId | string |    ○     | -   | -     | -       | 以下の文字と記号のみ可<br/>・a-zA-Z0-9<br/>・記号[・-_.!*'()] | -        | -       | クエリパラメータ指定が無い場合は必須入力となる。 |

### リクエスト(Body)

| No. | 項目名 | 物理名 | 階層 | 繰返し | 属性 | Nullable | 桁数 | 最小値 | 最大値 | フォーマット | 過去日付 | 未来日付 | リクエスト設定要領 |
| :-- | :----- | :----- | --- | ------ | :--- | :------: | --- | ------ | ----- | ------------ | ------- | -------- | ----------------- |
| -   |        |        |     |        |      |          |     |        |       |              |         |          |                   | 

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/providers/patients/ClinicX_00002
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/providers/patients?name=ヤマダダロウ&birthDate=1980-01-01
```

### レスポンス

| No. | 項目名           | 物理名        | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性    | Nullable | レスポンス設定要領                              |
| :-- | :--------------- | :------------ | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :------ | :------- | :---------------------------------------------- |
| 1   | 検索結果         | searchResults |  ○  |     |     |     |     |     | -      | object  | -        |                                                 |
| 2   | 件数             | count         |     |  ○  |     |     |     |     | -      | integer | -        | 検索結果件数                                    |
| 3   | 取得データリスト | results       |     |  ○  |     |     |     |     | -      | array   | -        |                                                 |
| 4   | 患者情報         | patients      |     |     |  ○  |     |     |     | -      | object  | -        | OpenFRUCtoS の Patient リソースの仕様に準拠する |

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
        "patient": {
          "resourceType": "Patient",
          "text": {
            "status": "generated",
            "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;～～～&lt;/div&gt;"
          },
          "identifier": [
            {
              "system": "https://www.plat.org/",
              "value": "d2db2727-eb07-2e54-fcbd-5ed011499cb7"
            },
            {
              "system": "urn:oid:1.2.392.100495.20.3.51.11310000001",
              "value": "clinicX_p00001"
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
              "given": ["太郎"]
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/iso21090-EN-representation",
                  "valueCode": "SYL"
                }
              ],
              "family": "ヤマダ",
              "given": ["タロウ"]
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
              "line": ["玉手町 18-50"],
              "city": "柏原市",
              "district": "大阪府",
              "postalCode": "5820001"
            }
          ]
        }
      }
    ]
  }
}
```

### エラーレスポンス
#### 業務エラー
##### 単項目エラー
各項目を以下の観点でチェックを実施し、エラー検出時にはエラーコードPLAT410を返す。

レスポンス構造に関しては[API共通](../../../API_common.md)に記載。

###### [Query]1. 名前
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| 必須チェック | [NotBlank.message](../../../APIエラーレスポンス一覧.md#notblankmessage) |
|2| 文字数チェック | [Length.message](../../../APIエラーレスポンス一覧#length.message) |
|3| フォーマットチェック | [Pattern.message](../../../APIエラーレスポンス一覧.md#patternmessage) |


###### [Query]1. 名前
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| 文字数チェック | [name.length.message](../../../APIエラーレスポンス一覧#namelengthmessage) |
|2| フォーマットチェック | [name.pattern.message](../../../APIエラーレスポンス一覧.md#namepatternmessage) |


###### [Query]2. 住所
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| 文字数チェック | [address.length.message](../../../APIエラーレスポンス一覧#addresslengthmessage) |
|2| フォーマットチェック | [address.pattern.message](../../../APIエラーレスポンス一覧.md#addresspatternmessage) |



###### [Query]3. 電話番号
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| 文字数チェック | [telecm.length.message](../../../APIエラーレスポンス一覧#telecmlengthmessage) |
|2| フォーマットチェック | [telecm.pattern.message](../../../APIエラーレスポンス一覧.md#telecmpatternmessage) |


###### [Query]4. 性別
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| フォーマットチェック | [gender.pattern.message](../../../APIエラーレスポンス一覧.md#genderpatternmessage) |


###### [Query]5. 生年月日
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| フォーマットチェック | [birthdate.pattern.message](../../../APIエラーレスポンス一覧.md#birthdatepatternmessage) |
|2| 日付フォーマットチェック | [birthdate.DateFormat.message](../../../APIエラーレスポンス一覧.md#birthdatedateformatmessage) |

###### [Path]1. 患者 ID
| No. | チェック内容 | メッセージキー |
| :-: | ------------ | ------------- |
|1| フォーマットチェック | [patient_id.pattern.message](../../../APIエラーレスポンス一覧.md#patientidpatternmessage) |


##### 相関エラー
各項目を以下の観点でチェックを実施し、エラー検出時にはエラーコードPLAT410を返す。

レスポンス構造に関しては[API共通](../../../API_common.md)に記載。

| No. | 入力項目 | チェック内容 | メッセージキー |
| :-: | ------- | ------------ | ------------- |
||| | |

##### 突合せエラー
各項目を以下の観点でチェックを実施し、エラー検出時にはエラーコードPLAT420を返す。

レスポンス構造に関しては[API共通](../../../API_common.md)に記載。

| No. | 項目 | チェック内容 | メッセージキー |
| :-: | ---- | ------------ | ------------- |
|    |  | |  |

#### システムエラー
レスポンス構造に関しては[API共通](../../../API_common.md)に記載。


### 備考

なし
