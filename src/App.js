import React from 'react'
import { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination';

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
    { title: 'タイトル13', description: '説明テストテスト13' },
  ]

  const [page, setPage] = useState(1)
  const [count, setCount] = useState(2) // FIXME: 初期値を設定する

  const [itemList, setItemList] = useState(items.slice(0, 10))

  const handlePaginate = (event, value) => {    
    setItemList(items.slice((value - 1) * 10, value * 10))
    setPage(value)
  }

  return (
    <React.Fragment>
      <h1>
        タイトル
      </h1>
      <List itemList={itemList}></List>

      <Pagination
        count={count}
        page={page}
        onChange={handlePaginate}
      />
    </React.Fragment>
  );
}

export default App
