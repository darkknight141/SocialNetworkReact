const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-POST-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";


let initialState = {
  users: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Masha" },
    { id: 3, name: "Pasha" },
    { id: 4, name: "Natasha" },
    { id: 5, name: "Kesha" },
  ],
  messages: [
    { message: "Hi" },
    { message: "How are you?" },
    { message: "What are you doing?" },
  ],
  newMessageText: "",
}


const messageReducer = (state = initialState, action) => {

  let stateCopy = {...state, messages:[...state.messages]};



  switch (action.type) {
    case SEND_MESSAGE:
      let msg = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages:[...state.messages, { message: msg }]

      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage,
      };
    default:
      return stateCopy;
  }
};

export const sendMessageActionCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};
export default messageReducer;
