const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

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
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
      };
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";

      return stateCopy;
    }
    case UPDATE_POST_TEXT:
      const stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;

    default: {
      return state;
    }
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

export default profileReducer;
