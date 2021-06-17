---
title: "test"
date: "2021-06-17"
---

article　追加テスト

<article class="text-gray-900 dark:text-white">

ここはダークモードで白文字に変わります

# ここがダークモードで黒文字のままの状況を改善したいです

- ヘッダーにかぶってしまいます。
1. 番号付リストもヘッダーにかぶってしまいます。
2. これらの問題も解決したいです。

`inlineもうまく表示できません`

**太字にした場合もダークモードでは黒字のままになってしまいます**

</article>

ここは問題なく表示できます。



```import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;```

