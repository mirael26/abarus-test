import * as React from "react";

const Controls = (): JSX.Element => {
  return (
    <div className="controls">
      <button className="controls__prev-button">Назад</button>

      <div className="controls__pagination">
        <button className="controls__pagination-button active">1</button>
        <button className="controls__pagination-button">2</button>
        <button className="controls__pagination-button">3</button>
      </div>

      <button className="controls__next-button">Вперед</button>
    </div>
  )
};

export default Controls;