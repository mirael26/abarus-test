import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { VIEW_COUNT } from "../../../consts";
import { ActionCreator } from "../../../store/action";
import { RootState } from "../../../store/store";
import { Post, Posts } from "../../../types";

const SortMode = {
  ID: 'ID',
  TITLE: 'TITLE',
  BODY: 'BODY',
} as const;

const Table = (): JSX.Element => {
  const [sortMode, setSortMode] = useState(null);

  const posts = useSelector((state: RootState) => state.data.posts);
  const searchedPosts = useSelector((state: RootState) => state.data.searchedPosts);
  const page = useSelector((state: RootState) => state.view.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    setSortMode(null);
  }, [posts, searchedPosts])

  const sortPosts = (posts: Posts) => {
    switch (sortMode) {
      case SortMode.ID:
        return posts.sort((a: Post, b: Post) => b.id - a.id);
      case SortMode.TITLE:
        return posts.sort((a: Post, b: Post) => a.title > b.title ? 1 : -1);
      case SortMode.BODY:
          return posts.sort((a: Post, b: Post) => a.body > b.body ? 1 : -1);
      default:
        return posts;
    }
  }

  const onSortButtonClick = (mode: keyof typeof SortMode) => {
    setSortMode(mode);
    dispatch(ActionCreator.updateCurrentPage(1));
  }

  const actualPosts = searchedPosts ?? posts;

  const displayedPosts = sortPosts(actualPosts.slice()) // дублируем и сортируем массив
    .slice((VIEW_COUNT * page - VIEW_COUNT), (VIEW_COUNT * page)); // находим нужный кусок массива по текущей странице
    
  const emptyRowsCount = VIEW_COUNT - displayedPosts.length; // вычисляем, сколько строк таблицы остались не заполнены
  const emptyRows = emptyRowsCount > 0 ? Array(emptyRowsCount).fill(null) : null; // создаем массив с пустыми значениями для незаполненных строк

  return (
    <table className="table">
      <thead>
        <tr className="table__header-row">
          <th className="table__header table__header--id">
            <button className="table__header-button" onClick={() => onSortButtonClick(SortMode.ID)}>ID</button>
          </th>
          <th className="table__header table__header--title">
            <button className="table__header-button" onClick={() => onSortButtonClick(SortMode.TITLE)}>Заголовок</button>
          </th>
          <th className="table__header table__header--description">
            <button className="table__header-button" onClick={() => onSortButtonClick(SortMode.BODY)}>Описание</button>
          </th>
        </tr>
      </thead>
      
      <tbody>
        {displayedPosts.map((post, i) => {
          return <tr key={i} className="table__row">
              <td className="table__cell">{post.id}</td>
              <td className="table__cell">{post.title}</td>
              <td className="table__cell">{post.body}</td>
            </tr>
        })}

        {emptyRows
          ? emptyRows.map((post, i) => {
              return <tr key={i} className="table__row">
                  <td className="table__cell"></td>
                  <td className="table__cell"></td>
                  <td className="table__cell"></td>
                </tr>
             })
          : null}
      </tbody>
    </table>
  )
};

export default Table;