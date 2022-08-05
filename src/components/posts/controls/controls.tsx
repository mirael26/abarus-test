import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

import { RootState } from "../../../store/store";

const Controls = (): JSX.Element => {
  const currentPage = +useParams().page;
  
  const pagesCount = useSelector((state: RootState) => state.view.pagesCount);

  let paginationButtons = Array(pagesCount).fill(''); // создаем массив длиной, соответствующей количеству страниц

  return (
    <div className="controls">
      {currentPage > 1
        ? <NavLink to={`/posts/${currentPage - 1}`} className="controls__prev-button">
              Назад
          </NavLink>
        : <span className="controls__next-button disabled">Назад</span>
      }
      
      <div className="controls__pagination">

        {paginationButtons.map((el, i) => {
          const page = i + 1;
          const isActive = (page === currentPage || pagesCount === 0);

          return <NavLink
              to={`/posts/${page}`}
              key={i}
              className={`controls__pagination-button${isActive ? ' active' : ''}`}>
                {page}
            </NavLink>
        })}

      </div>

      {currentPage !== pagesCount && pagesCount !== 0
        ? <NavLink to={`/posts/${currentPage + 1}`} className="controls__next-button">
              Вперед
          </NavLink>
        : <span className="controls__next-button disabled">Вперед</span>
      }
      
    </div>
  )
};

export default Controls;