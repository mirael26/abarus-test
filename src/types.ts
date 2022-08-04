import { ActionType } from "./store/action";

// data

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type Posts = Array<Post>;

// reducers

export interface DataState {
  posts: Posts,
  searchedPosts: Posts,
};

export interface ViewState {
  currentPage: number,
  pagesCount: number,
};

// actions

export interface UpdatePosts {
  type: typeof ActionType.UPDATE_POSTS,
  payload: Posts,
}

export interface UpdateSearchedPosts {
  type: typeof ActionType.UPDATE_SEARCHED_POSTS,
  payload: Posts,
}

export interface UpdateCurrentPage {
  type: typeof ActionType.UPDATE_CURRENT_PAGE,
  payload: number,
}

export interface UpdatePagesCount {
  type: typeof ActionType.UPDATE_PAGES_COUNT,
  payload: number,
}

export type DataAction = UpdatePosts | UpdateSearchedPosts;
export type ViewAction = UpdateCurrentPage | UpdatePagesCount;
export type Action = DataAction | ViewAction;