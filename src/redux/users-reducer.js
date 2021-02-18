const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const initialState = {
  users: [
    //   {
    //     id: 1,
    //     name: "Dmitry K",
    //     country: "Belarus",
    //     city: "Minsk",
    //     desc: "I am looking for job now",
    //     followed: true,
    //   },
    //   {
    //     id: 2,
    //     name: "Svetlana D",
    //     country: "Belarus",
    //     city: "Minsk",
    //     desc: "I am so pretty",
    //     followed: true,
    //   },
    //   {
    //     id: 3,
    //     name: "Sergei S",
    //     country: "Ukraine",
    //     city: "Kiev",
    //     desc: "I like football!",
    //     followed: false,
    //   },
    //   {
    //     id: 4,
    //     name: "Andrew T",
    //     country: "USA",
    //     city: "Philadelphia",
    //     desc: "I am free to help you to create good video production",
    //     followed: false,
    //   },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;
