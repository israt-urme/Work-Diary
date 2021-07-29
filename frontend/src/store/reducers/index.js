import { combineReducers } from "redux";
import places from './diary'
import login from './auth'

// export default combineReducers({
//     places,
//     login
// })

export const rootReducer = asyncReducers => {
    return combineReducers({
      places,
      login,
      ...asyncReducers
    });
  }

export default rootReducer