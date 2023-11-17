# 解析アプリ
## docker立ち上げ手順
1. PCにプロジェクトをclone。
2. cloneしたプロジェクトをエディタで開く。
3. cdコマンドでプロジェクトのルートディレクトリ(visitor-analytics-app)に移動。
4. `docker-compose up -d`を実行して立ち上げる。
5. http://localhost:18888/ にアクセス。
6. 以下のようなエラーが出ている場合、`docker exec -it visitor-analytics-php bash`した後、`composer install`を実行。
7. 終了する時は`docker-compose down`を実行。

## 開発手順
1. `git checkout -b xxxx`で新しくブランチを作る(xxxxは自分の名前)。
2. 変更したら、`git add .`を実行しステージングに上げる。
3. `git commit -m '任意のメッセージ'`でコミットする(任意のメッセージは、「表示データを修正」「jsファイル追加」など作業内容がわかれば良い)。
4. `git push`でリモートにpushする。以下のようなエラーが出た場合は、`it push --set-upstream origin xxxx`を実行。
```
kentarofujimoto@eyemovicnoMacBook-Pro visitor-analytics-app % git push
fatal: The current branch fujimoto has no upstream branch.
To push the current branch and set the remote as upstream, use

   git push --set-upstream origin fujimoto

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

## 各自で作業した内容をmasterブランチへ反映する手順
1. GitHubでPull Requestを作成する。
2. baseを`master`、compareを自分のブランチに設定。
3. レビュワーを誰かに指定する。
4. レビュワーの承認を経たら、マージする。
