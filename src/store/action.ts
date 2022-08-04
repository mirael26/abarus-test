import { Posts, UpdateCurrentPage, UpdatePagesCount, UpdatePosts, UpdateSearchedPosts } from "../types";

export const ActionType = {
  UPDATE_POSTS: "UPDATE_POSTS",
  UPDATE_SEARCHED_POSTS: "UPDATE_SEARCHED_POSTS",
  UPDATE_CURRENT_PAGE: "UPDATE_CURRENT_PAGE",
  UPDATE_PAGES_COUNT: "UPDATE_PAGES_COUNT",
} as const;

export const ActionCreator = {
  updatePosts: (posts: Posts): UpdatePosts => ({
    type: ActionType.UPDATE_POSTS,
    payload: posts,
  }),
  updateSearchedPosts: (searchedPosts: Posts): UpdateSearchedPosts => ({
    type: ActionType.UPDATE_SEARCHED_POSTS,
    payload: searchedPosts,
  }),
  updateCurrentPage: (page: number): UpdateCurrentPage => ({
    type: ActionType.UPDATE_CURRENT_PAGE,
    payload: page,
  }),
  updatePagesCount: (pagesCount: number): UpdatePagesCount => ({
    type: ActionType.UPDATE_PAGES_COUNT,
    payload: pagesCount,
  }),
};