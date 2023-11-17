# 解析アプリ
## docker立ち上げ手順
1. PCにプロジェクトをclone。
2. cloneしたプロジェクトをエディタで開く。
3. cdコマンドでプロジェクトのルートディレクトリ(visitor-analytics-app)に移動。
4. `docker-compose up -d`を実行して立ち上げる。
5. 終了する時は`docker-compose down`を実行。

## 開発手順
1. `git checkout -b xxxx`で新しくブランチを作る(xxxxは自分の名前)。
2. 変更したら、`git add .`を実行しステージングに上げる。
3. `git commit -m '任意のメッセージ'`でコミットする(任意のメッセージは、「表示データを修正」「jsファイル追加」など作業内容がわかれば良い)。
4. `git push`でリモートにpushする。

## 各自で作業した内容をmasterブランチへ反映する手順
1. GitHubでPull Requestを作成する。
2. baseを`master`、compareを自分のブランチに設定。
3. 