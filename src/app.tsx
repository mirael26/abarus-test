import * as React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import Posts from "./components/posts/posts";

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to='/posts' />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
    </HashRouter>
  )
};

export default App;