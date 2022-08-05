import { AppStatusType, ChangeAppStatus, Posts, UpdatePagesCount, UpdatePosts, UpdateSearchedPosts } from "../types";

export const ActionType = {
  UPDATE_POSTS: "UPDATE_POSTS",
  UPDATE_SEARCHED_POSTS: "UPDATE_SEARCHED_POSTS",
  UPDATE_PAGES_COUNT: "UPDATE_PAGES_COUNT",
  CHANGE_APP_STATUS: "CHANGE_APP_STATUS",
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
  updatePagesCount: (pagesCount: number): UpdatePagesCount => ({
    type: ActionType.UPDATE_PAGES_COUNT,
    payload: pagesCount,
  }),
  changeAppStatus: (appStatus: AppStatusType): ChangeAppStatus => ({
    type: ActionType.CHANGE_APP_STATUS,
    payload: appStatus,
  }),
};