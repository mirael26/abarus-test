import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionCreator } from "../../../store/action";
import { RootState } from "../../../store/store";

const Controls = (): JSX.Element => {
  const currentPage = useSelector((state: RootState) => state.view.currentPage);
  const pagesCount = useSelector((state: RootState) => state.view.pagesCount);
  const dispatch = useDispatch();

  let paginationButtons = Array(pagesCount).fill(''); // создаем массив длиной, соответствующей количеству страниц

  return (
    <div className="controls">
      <button className="controls__prev-button"
        disabled={currentPage === 1}
        onClick={() => dispatch(ActionCreator.updateCurrentPage(currentPage - 1))}>
          Назад
      </button>

      <div className="controls__pagination">

        {paginationButtons.map((el, i) => {
          const page = i + 1;
          const isActive = (page === currentPage);
          return <button
              key={i}
              className={`controls__pagination-button${isActive ? ' active' : ''}`}
              onClick={() => dispatch(ActionCreator.updateCurrentPage(page))}>
                {page}
            </button>
        })}

      </div>

      <button
        className="controls__next-button"
        disabled={currentPage === pagesCount}
        onClick={() => dispatch(ActionCreator.updateCurrentPage(currentPage + 1))}>
          Вперед
      </button>
    </div>
  )
};

export default Controls;