### 処理概要

PLAT 認証基盤（Keycloak）のトークンエンドポイントにリフレッシュトークンを送信して、トークンを更新する。

| 機能 ID     | API 論理名           | HTTP メソッド | URI                                                                        |
| :---------- | :------------------- | :------------ | :------------------------------------------------------------------------- |
| COM_ATH_004 | 【認証】トークン更新 | POST          | {KeycloakPath}/auth/realms/{organization_id}/protocol/openid-connect/token |

| 連携方式 | データ形式                         | 利用可能な接続先   |
| :------- | :--------------------------------- | :----------------- |
| REST API | JSON 形式(エンコーディング：utf-8) | ローカル、リモート |

### リクエストヘッダー

| No. | 項目名 | 物理名 | 属性 | Nullable | 設定要領 |
| :-- | :----- | :----- | :--: | :------: | :------- |
| -   |        |        |      |          |          |

### リクエスト（クエリ）

| No. | 項目名               | 物理名        |  属性  | Nullable | 設定要領                                                        |
| :-- | :------------------- | :------------ | :----: | :------: | :-------------------------------------------------------------- |
| 1   | クライアント ID      | client_id     | string |    -     | 接続先のクライアント ID を設定                                  |
| 2   | リフレッシュトークン | refresh_token | string |    -     | COM_ATH_003：【認証】トークン取得で取得したリフレッシュトークン |
| 3   | グラント種別         | grant_type    | string |    -     | "authorization_code"(固定)                                      |

### リクエスト（パスパラメータ）

| No. | 項目名  | 物理名          |  属性  | Nullable | 設定要領                                           |
| :-- | :------ | :-------------- | :----: | :------: | :------------------------------------------------- |
| 1   | 組織 ID | organization_id | string |    -     | 組織 ID を設定 ※患者用の場合、「0000000000」を設定 |

### リクエスト(Body)

| No. | 項目名 | 物理名 | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性 | Nullable | レスポンス設定要領 |
| :-- | :----- | :----- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :--- | :------- | :----------------- |
| -   |        |        |     |     |     |     |     |     |        |      |          |                    |

### サンプル（リクエスト）

```
/auth/realms/1310000001/protocol/openid-connect/token
```

### レスポンス

| No. | 項目名                       | 物理名             | L1  | L2  | L3  | L4  | L5  | L6  | 繰返し | 属性   | Nullable | レスポンス設定要領 |
| :-- | :--------------------------- | :----------------- | :-: | :-: | :-: | :-: | :-: | :-: | :----- | :----- | :------- | :----------------- |
| 1   | アクセストークン             | access_token       |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | 有効期限                     | expires_in         |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | リフレッシュトークン有効期限 | refresh_expires_in |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | リフレッシュトークン         | refresh_token      |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | トークン種別                 | token_type         |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | アクセス不許可時間           | not-before-policy  |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | ログインセッション状態       | session_state      |  ○  |     |     |     |     |     | -      | string | -        |                    |
| 1   | スコープ                     | scope              |  ○  |     |     |     |     |     | -      | string | -        |                    |

| エラー条件                                                        |
| :---------------------------------------------------------------- |
| システムエラー<br/>・API 共通仕様に準拠<br/>業務エラー<br/>・なし |

### サンプル（レスポンス）

```json title="正常終了"
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJPUEtzcFVkVEtjRHBNeHVYY1kwa0ljSXBDRVQ0U0FzMHJSUnBrNHRxNW1jIn0.eyJleHAiOjE2NDUxMDAwNDIsImlhdCI6MTY0NTA5ODI0MiwianRpIjoiNzg5NThiZjYtYjg4MC00ZTJhLWEzYWEtMTJlYjc2MzQ4MDdjIiwiaXNzIjoiaHR0cDovL3BsYXQtZGV2LWxvY2FsLXZtMDEuamFwYW5lYXN0LmNsb3VkYXBwLmF6dXJlLmNvbS9rZXljbG9hay9hdXRoL3JlYWxtcy8xMzEwMDAwMDAxIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImNkY2Q1NDMwLWIxNWItNGNmNi1hZDAzLTQ4MTM3MzM5YjdjYiIsInR5cCI6IkJlYXJlciIsImF6cCI6InBsYXQtZ2F0ZXdheSIsInNlc3Npb25fc3RhdGUiOiI5NTMxYzZmNy04Njk3LTRhOGEtOWU5OS1kNGRhOTY3M2I4YjAiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJNRURJQ0FMUyIsIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1sb2NhbGNsaW5pY3hyZWFsbSIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIiwic2lkIjoiOTUzMWM2ZjctODY5Ny00YThhLTllOTktZDRkYTk2NzNiOGIwIiwiT1JHQU5JWkFUSU9OLUlEIjoiMTMxMDAwMDAwMSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoiRG9jdG9yMDEgQ2xpbmljWCIsInByZWZlcnJlZF91c2VybmFtZSI6ImNsaW5pY3guZG9jdG9yMDEiLCJnaXZlbl9uYW1lIjoiRG9jdG9yMDEiLCJmYW1pbHlfbmFtZSI6IkNsaW5pY1giLCJlbWFpbCI6ImNsaW5pY3guZG9jdG9yMDFAZXhhbXBsZS5jb20ifQ.aj2wlMY3s1Xlur9aK-3RSYAuqkj1Ap48_4rx0bSLKwftzeBWlHP0ukKz3CnP-3EhrS8ECaDFeS6vQrjd4HoRUD8P-8WdX7dqYGb5Azuv7djBT7pJuRJn2GmvinSi0MBQsWyB89t7Xaiz0Wh3ytdjqQd8WcbhvNFAFh0HRmfQgukbGQfi1EpAu4maE6-z1FXJKiAGAkWYzMeADCvk-byFIFYYEi-cA6-pymgcLfSS2phV0JNYu3zN0vYATBO1uE4sTO_IWUveBsYLmXCYHRfPlPrbLQ2pY1IYl5vFFxog678ciapKDKS1ce1gl-HiBMd9qXwluCwB7GSWNMKyMqY_GA",
  "expires_in": 1800,
  "refresh_expires_in": 0,
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4ZTg4ZjQwNy0yMTQ2LTQxNjgtOGYwNi05NWIxOWZkYTU5YTEifQ.eyJpYXQiOjE2NDUwOTgyNDIsImp0aSI6ImY0ZTVlMWUxLWE1MzQtNGUxMy05YjVmLTQwODA1NjY4OTE2NyIsImlzcyI6Imh0dHA6Ly9wbGF0LWRldi1sb2NhbC12bTAxLmphcGFuZWFzdC5jbG91ZGFwcC5henVyZS5jb20va2V5Y2xvYWsvYXV0aC9yZWFsbXMvMTMxMDAwMDAwMSIsImF1ZCI6Imh0dHA6Ly9wbGF0LWRldi1sb2NhbC12bTAxLmphcGFuZWFzdC5jbG91ZGFwcC5henVyZS5jb20va2V5Y2xvYWsvYXV0aC9yZWFsbXMvMTMxMDAwMDAwMSIsInN1YiI6ImNkY2Q1NDMwLWIxNWItNGNmNi1hZDAzLTQ4MTM3MzM5YjdjYiIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJwbGF0LWdhdGV3YXkiLCJzZXNzaW9uX3N0YXRlIjoiOTUzMWM2ZjctODY5Ny00YThhLTllOTktZDRkYTk2NzNiOGIwIiwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyBwcm9maWxlIGVtYWlsIiwic2lkIjoiOTUzMWM2ZjctODY5Ny00YThhLTllOTktZDRkYTk2NzNiOGIwIn0.cMoDMDU12rBklCnKGJSRhnrrJvj8saJkK1gIMtorEbw",
  "token_type": "Bearer",
  "not-before-policy": 0,
  "session_state": "9531c6f7-8697-4a8a-9e99-d4da9673b8b0",
  "scope": "offline_access profile email"
}
```

```json title="異常終了"
{
  "error": "invalid_client",
  "error_description": "Invalid client credentials"
}
```

### 備考
