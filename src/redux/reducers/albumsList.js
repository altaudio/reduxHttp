const initialState = {
  albums: []
}

export default function albumsList(state = initialState, action) {
  switch (action.type) {
    case 'albumsList/GET_ALBUMS':
      return { ...state, albums: action.payload }
    default :
      return state
  }
}
