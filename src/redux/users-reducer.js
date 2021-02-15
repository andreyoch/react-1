const initialState = {
  users: [
    {
      name: "Dmitry K",
      country: "belarus",
      city: "Minsk",
      desc: "I am looking for job now",
    },
    {
      name: "Svetlana D",
      country: "belarus",
      city: "Minsk",
      desc: "I am so pretty",
    },
    {
      name: "Sergei S",
      country: "Ukraine",
      city: "Kiev",
      desc: "I like football!",
    },
    {
      name: "Andrew T",
      country: "USA",
      city: "Philadelphia",
      desc: "I am free to help you to create good video production",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  return {
    ...state,
  };
};

export default usersReducer;
