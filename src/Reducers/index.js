import { bake_cookie, read_cookie } from 'sfcookies';


const ADD_REMINDER = "ADD_REMINDER";
const DELETE_REMINDER = "DELETE_REMINDER";
const DELETE_ALL_REMINDERS = "DELETE_ALL_REMINDERS";

const reminder = (action) => {
  return {
    id: Math.random(),
    text: action.text,
    dueDate: action.dueDate
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders;
}

const removeAll = (state) => {
  const reminders = [];
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_ALL_REMINDERS:
      reminders = removeAll(state);
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;