import {data} from '../helper/pandetaInfo'

const initialState={
    List:data,
    selectionId:null
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
          default:
              return {
              ...state
              }
    }
}