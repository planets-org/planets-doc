### 処理概要

PLAT 上で管理しているスタッフ情報を取得する。

| 機能 ID     | API 論理名    | HTTP メソッド | URI                                          |
| :---------- |:-----------| :------------ | :------------------------------------------- |
| PRV_STF_002 | 【取得】スタッフ情報 | GET           | {applicationPath}/providers/staffs/{staffId} |

| 連携方式 | データ形式                           | 利用可能な接続先   |
| :------- | :----------------------------------- | :----------------- |
| REST API | JSON 形式（エンコーディング：utf-8） | ローカル、リモート |

### リクエスト（認証）

| No. | 項目名           | 物理名        |  属性  | Nullable | 設定要領                               |
| :-- | :--------------- | :------------ | :----: | :------: | :------------------------------------- |
| 1   | アクセストークン | Authorization | string |    -     | 認証処理で取得した Bearer Token を設定 |

### リクエスト（クエリ）

クエリパラメータとパスパラメータが指定されていない場合は、一覧を返却する。

| No. | 項目名 | 物理名 |  属性  | Nullable | 設定要領                                                   |
| :-- | :----- | :----- | :----: | :------: |:-------------------------------------------------------|
| 1   | 参照先     | location            | string |    ○     | [参照先（スタッフ管理）](../../../API_Domain_Definition_Table.md) |
| 2   | 名称   | name   | string |    ○     | 漢字もしくはカナの前方一致検索                                        |

### リクエスト（パスパラメータ）

| No. | 項目名      | 物理名  |  属性  | Nullable | 設定要領                                                                 |
| :-- | :---------- | :------ | :----: | :------: | :----------------------------------------------------------------------- |
| 1   | スタッフ ID | staffId | string |    -     | スタッフ ID を設定する。|

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | リクエスト設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

＜パスパラメータ指定の場合＞

```
　　{applicationPath}/providers/staffs/3fa04331-85fd-4cb5-819d-d240145a74ca
```

＜クエリパラメータ指定の場合＞

```
　　{applicationPath}/providers/staffs?name=ヤマダタロウ
```

### レスポンス

| No. | 項目名      | 物理名          | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領 |
| :-- | :---------- | :-------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | リスト      | -               |  ○  |     |     |     |     |     |        | array  | -        |                    |
| 2   | スタッフ ID | staffId         |     |  ○  |     |     |     |     |        | string | -        |                    |
| 3   | 救急フラグ  | emergencyFlg    |     |  ○  |     |     |     |     |        | string | -        | [救急フラグ](../../../API_Domain_Definition_Table.md)      |
| 4   | 名前(漢字)  | nameKanji       |     |  ○  |     |     |     |     |        | string | -        |                    |
| 5   | 名前(カナ)  | namekana        |     |  ○  |     |     |     |     |        | string | -        |                    |
| 6   | バージョン  | version         |     |  ○  |     |     |     |     |        | string | -        |                    |
| 7   | 更新日時    | updatedDatetime |     |  ○  |     |     |     |     |        | string | -        |                    |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
[
  {
    "staffId": "aef656e5-0735-4757-a369-83a2b34110bd",
    "emergencyFlg": 0,
    "nameKanji": "田中一郎",
    "nameKana": "タナカイチロウ",
    "version": 0,
    "updatedDatetime": "Oct 7, 2021, 7:50:46 PM"
  },
  {
    "staffId": "ececfc9e-4b53-48c0-96da-482ffdf69a95",
    "emergencyFlg": 0,
    "nameKanji": "佐藤次郎",
    "nameKana": "サトウジロウ",
    "version": 0,
    "updatedDatetime": "Oct 7, 2021, 7:50:50 PM"
  }
]
```

```json title="異常終了"
{
  "errorCode": "PLAT500"
}
```

### 備考

なし
