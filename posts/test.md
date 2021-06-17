---
title: "test"
date: "2021-07-01"
---

ここはダークモードで白文字に変わります

# ここがダークモードで黒文字になるのを改善したいです h1

- ヘッダーにかぶってしまいます。
1. 番号付リストもなってしまいます

`inlineもうまく表示できません`

**太字にした場合もダークモードでは黒字のままになってしまいます**


korewatest
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