---
sidebar_label: "新規に基盤を構築する"
sidebar_position: 1
---

# 新規に基盤を構築する

## 1. 概要

本手順では１つの OS 上でローカル及びリモートの動作環境を構築する手順を記載する。

## 2. 事前準備
- Docker Desktop for Windows のインストール（Macの場合は、Docker Desktop for Mac）
- Git for Windows のインストール（Windowsのみ要対応）
- Docker Desktopを起動後、下記のコマンドを実行して、planets-libにある資材をローカル環境にクローンする  
  (容量の大きい`*.jar`, `*.war`ファイルはGit LFSを用いて管理している。)
    ```
    $ git clone https://github.com/planets-org/planets-lib.git
    $ cd planets-lib
    $ git lfs install  // GitLFSコンテンツが取得できてない場合に実行する
    $ git lfs pull  // GitLFSコンテンツが取得できてない場合に実行する
    ```
- Docker Desktop for Windows(Macの場合は Docker Desktop for Mac)をコマンドを叩く前に立ち上げておく
- Mac で構築する際の追加対応事項
  - Docker Desktop の[Preferences][resources][Advanced]を開き、下記の値を設定する
    - CPUs : 5
    - Memory : 14.50 GB
    - Swap : 3.5 GB

## 3. 構成

本手順を実施することで以下の環境をローカル PC 上に構築する。

### 3.1. 簡易構成

![image.png](../.attachments/image-c9dffbbe-12a7-4552-8e63-4963392936fc.png)

### 3.2. 詳細構成

![image.png](../.attachments/image-9cccddd2-45b1-4469-822b-1da946e5888c.png)

## 4. 環境情報

| 環境名         | フォルダ名 | メモリ使用量 |
| -------------- | ---------- | ------------ |
| リモート環境   | remote     | 4 GB         |
| ローカル環境 X | localX     | 5 GB         |

## 5. 手順

本手順はplanets-lib フォルダにて行う。

### 5.1. Docker の実行（remote）

1.  シェルを起動し、Docker の起動を行う

    ```
    # ./docker_start.sh remote
    ```

1.  シェルを起動し、PLAT への初期データ登録を行う

    ```
    # ./docker_data_of.sh remote
    ```

:::note

- PCスペックなどにより下記のようなエラーで Docker コンテナの起動に失敗した場合、再実行による起動をお試しください
```
ERROR: for xxxxxxx  Container "xxxxxxxxxxxx" is unhealthy.
ERROR: Encountered errors while bringing up the project.
```

:::

### 5.2. Docker の実行（localX）

1.  シェルを起動し、Docker の起動を行う

    ```
    # ./docker_start.sh localX
    ```

1.  シェルを起動し、PLAT への初期データ登録を行う

    ```
    # ./docker_data_of.sh localX
    ```

### 5.3. 動作確認

[利用手順 / Postman でのアプリケーション疎通確認](../Usage/operation_check.md)
