import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/redux-saga/UserList";
import store from "./redux/redux-saga/store";
import storePosts from "./redux/redux-thunk/store";
import ShowPosts from "./components/redux-thunk/ShowPosts";
import AddEditPost from "./components/redux-thunk/AddEditPost";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // redux-saga
  // <Provider store={store}>
  //   <UserList></UserList>
  // </Provider>

  // redux-thunk
  <Provider store={storePosts}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowPosts></ShowPosts>}></Route>
        <Route
          path="/addeditpost"
          element={<AddEditPost></AddEditPost>}
        ></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
