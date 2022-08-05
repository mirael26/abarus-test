import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../store/api-actions";
import { RootState } from "../../store/store";
import { AppStatus } from "../../consts";

import Search from "./search/search";
import Table from "./table/table";
import Controls from "./controls/controls";

const Posts = (): JSX.Element => {
  const status = useSelector((state: RootState) => state.state.appStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [])

  return (
    <div className="posts">
      <h1 className="posts__title visually-hidden">Посты</h1>

      {status === AppStatus.READY
        ? <> 
          <div className="posts__search"><Search /></div>

          <div className="posts__table"><Table /></div>

          <div className="posts__controls"><Controls /></div>
        </>
        : null
      }

      {status === AppStatus.LOADING
        ? <p className="posts__loading-message">Загрузка...</p>
        : null
      }

      {status === AppStatus.ERROR
        ? <p className="posts__error-message">Произошла ошибка</p>
        : null
      }
    </div>
  )
};

export default Posts;