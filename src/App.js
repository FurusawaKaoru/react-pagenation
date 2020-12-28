import React from 'react'
import { useState } from 'react'
import Pagination from '@material-ui/lab/Pagination'

import { List } from "./List"

import { fetchItemsAll } from './api/ItemApi';

function App() {
  const [itemList, setItemList] = useState([])

  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0) // FIXME: 初期値を設定する

  const handlePaginate = (event, value) => {
    setPage(value)
  }

  // MEMO: useEffectとは
  React.useEffect(() => {
    fetchItemsAll().then((itemsData) => {
      setItemList(itemsData)
      setCount(Math.ceil(itemsData.length / 10))
    })
  }, []);

  return (
    <React.Fragment>
      <h1>
        タイトル
      </h1>
      <List itemList={itemList.slice((page - 1) * 10, page * 10)}></List>

      <Pagination
        count={count}
        page={page}
        onChange={handlePaginate}
      />
    </React.Fragment>
  );
}

export default App
