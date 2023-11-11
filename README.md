# Cinemalert_app

## 開発メモ
### Rails側の実行コマンド
* ビルド実行
```
# 上書きされたGemfileをもとにイメージを改めて生成する
% docker-compose build

# backendコンテナを起動させて新規データベースを作成する
% docker-compose run --rm backend rails db:create

# バックグラウンドでRailサーバーを起動させる
% docker-compose up
```

* rubocop
```
docker-compose run --rm backend bundle exec rubocop -a
```

### Vue側の実行コマンド
```
# コンテナ接続
docker-compose run --rm frontend ash
```