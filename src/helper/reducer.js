import {data} from '../helper/pandetaInfo'

const initialState={
    List:data,
    selectionId:null,
    loaded:false
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "showData":
            console.log(state);
            return {
                ...state
            }
        case "changeSelection":
            return {
                ...state,
                selection:action.data
          }
          case "changeLoaded":
            return {
                ...state,
                loaded:!state.loaded
          }
          default:
              return {
              ...state
              }
    }
}