// reducer is fn.. it will take state and action as params 
// and should return state.

const todoReducer = (state = [], action) => {
  switch( action.type ){
    case 'ADD_TODO':
      let addedTodoState = [
        ...state,
        {
          id: new Date(),
          title: action.payload,
          completed: false
        }
      ];
      return addedTodoState;

    default: 
      return state;
  }
}

export default todoReducer;