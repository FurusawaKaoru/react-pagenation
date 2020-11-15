import React from 'react'
import { useState } from 'react'

import { List } from "./List"

function App() {
  const items = [
    { title: 'タイトル1', description: '説明テストテスト1' },
    { title: 'タイトル2', description: '説明テストテスト2' },
    { title: 'タイトル3', description: '説明テストテスト3' },
    { title: 'タイトル4', description: '説明テストテスト4' },
    { title: 'タイトル5', description: '説明テストテスト5' },
    { title: 'タイトル6', description: '説明テストテスト6' },
    { title: 'タイトル7', description: '説明テストテスト7' },
    { title: 'タイトル8', description: '説明テストテスト8' },
    { title: 'タイトル9', description: '説明テストテスト9' },
    { title: 'タイトル10', description: '説明テストテスト10' },
    { title: 'タイトル11', description: '説明テストテスト11' },
    { title: 'タイトル12', description: '説明テストテスト12' },
  ]

  const [itemList, setItemList] = useState(items)

  const handlePaginate = (page) => {
    // APIを叩きに行く処理
    console.log('ページネーション処理')
  };

  return (
    <React.Fragment>
      <h1>
        タイトル
      </h1>
      <List itemList={itemList}></List>

      {/* <Pagination
        sum={100}
        per={10}
        onChange={e => handlePaginate(e.page)}
      /> */}
    </React.Fragment>
  );
}

export default App
