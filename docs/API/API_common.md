---
sidebar_label: "API共通仕様"
sidebar_position: 2
---

# API共通仕様

## 1. レスポンスに関する共通仕様

### 1.1. エラーコード定義

| エラーコード  | 用途                                   |
|:--------|:-------------------------------------|
| PLAT400 | データ更新時に楽観的ロック違反を検知した場合に返却            |
| PLAT410 | API入力時チェック処理でエラーを検出した場合に返却            |
| PLAT420 | 業務処理でエラーを検出した場合に返却            |
| PLAT500 | サーバー内処理でエラー発生時にユーザー側で解消不可能なエラーの場合に返却 |

### 1.2. レスポンス構造
#### 1.2.1. エラーコード:PLAT400
| 形式  | HTTP ステータス |
| :---: | :---: |
| Json | 400 |


| No. | 項目名 | 物理名  | 階層 | 内容 |
| :-- | :--------------- | :------------ | :---: | --- |
| 1   | エラーコード | errorCode  | 1  | 固定"PLAT400" |

```Json title="サンプル"
{
    "errorCode": "PLAT400"
}
```

#### 1.2.2. エラーコード:PLAT410
| 形式  | HTTP ステータス |
| :---: | :---: |
| Json | 400 |


| No. | 項目名 | 物理名  | 階層 | 繰り返し | 内容 |
| :-- | :--------------- | :------------ | :---: | ---- | --- |
| 1   | リソースタイプ | resourceType  | 1 | - | 固定"OperationOutcome" |
| 2   | エラーコード     | errorCode | 1 | - | 固定"PLAT410" |
| 3   | issue     | issue | 1  | 1回以上 | エラーのリスト |
| 4   | severity  | severity | 2 | - | 固定"error" |
| 5   | code      | code | 2 | - | 固定"value" |
| 6   | details   | details | 2 | 1回以上 | エラー内容のリスト | 
| 7   | text   | text | 3 | - | エラー内容 | 

```Json title="サンプル"
{
    "resourceType": "OperationOutcome",
    "errorCode": "PLAT410",
    "issue": [
        {
        "severity": "error",
        "code": "value",
        "details": {
            "text": "XXXの値が不正です。"
        },
        }
    ]
}
```

#### 1.2.3. エラーコード:PLAT420
| 形式  | HTTP ステータス |
| :---: | :---: |
| Json | 400 |


| No. | 項目名 | 物理名  | 階層 | 繰り返し | 内容 |
| :-- | :--------------- | :------------ | :---: | ---- | --- |
| 1   | リソースタイプ | resourceType  | 1 | - | 固定"OperationOutcome" |
| 2   | エラーコード     | errorCode | 1 | - | 固定"PLAT410" |
| 3   | issue     | issue | 1  | 1回 | エラーのリスト |
| 4   | severity  | severity | 2 | - | 固定"error" |
| 5   | code      | code | 2 | - | 固定"value" |
| 6   | details   | details | 2 | 1回 | エラー内容のリスト | 
| 7   | text   | text | 3 | - | エラー内容 | 

```Json title="サンプル"
{
    "resourceType": "OperationOutcome",
    "errorCode": "PLAT420",
    "issue": [
        {
        "severity": "error",
        "code": "value",
        "details": {
            "text": "XXXの値が登録されていません。"
        },
        }
    ]
}
```


#### 1.2.4. エラーコード:PLAT500
| 形式  | HTTP ステータス |
| :---: | :---: |
| Json | 500 |

| No. | 項目名 | 物理名  | 階層 | 内容 |
| :-- | :--------------- | :------------ | :---: | --- |
| 1   | エラーコード | errorCode  | 1  | 固定"PLAT500" |
| 2   | エラーメッセージ | errorMessage  | 1  | エラー内容 |

```Json title="サンプル"
{
    "errorCode": "PLAT500",
    "errorMessage": "エラー内容"
}
```



