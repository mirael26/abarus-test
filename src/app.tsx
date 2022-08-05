import * as React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Posts from "./components/posts/posts";

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to='/posts/1' />}/>
        <Route path='/posts/:page' element={<Posts />}/>
      </Routes>
    </HashRouter>
  )
};

export default App;