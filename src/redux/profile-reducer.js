import { act } from "@testing-library/react";

const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "This is my the newest post", likeCount: 12 },
    { id: 2, message: "I know how to use prop`s!", likeCount: 15 },
    { id: 3, message: "It's my first post", likeCount: 25 },
    {
      id: 4,
      message: "I can use redux and presentational components! ",
      likeCount: 50,
    },
  ],
  newPostText: "default text",
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 5, message: state.newPostText, likeCount: 0 },
        ],
        newPostText: "",
      };
    }
    case UPDATE_POST_TEXT:
      return { ...state, newPostText: action.text };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default: {
      return state;
    }
  }
};

export const addPost = () => ({
  type: ADD_POST,
});

export const updateNewPostText = (text) => ({
  type: UPDATE_POST_TEXT,
  text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
