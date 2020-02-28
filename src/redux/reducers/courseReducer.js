export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //state.push(action.course); //don't do this
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
