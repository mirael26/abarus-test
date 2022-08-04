import * as React from "react";

import Search from "./search/search";
import Table from "./table/table";
import Controls from "./controls/controls";

const Posts = (): JSX.Element => {
  return (
    <div className="posts">
      <h1 className="posts__title visually-hidden">Посты</h1>
      <div className="posts__search"><Search /></div>

      <div className="posts__table"><Table /></div>

      <div className="posts__controls"><Controls /></div>
    </div>
  )
};

export default Posts;