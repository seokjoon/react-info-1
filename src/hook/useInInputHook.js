import { useReducer } from 'react'

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

export default function useInInputHook(initForm) {

  const [state, dispatch] = useReducer(reducer, initForm)

  const onChange = e => {
    dispatch(e.target)
  }

  return [state, onChange]
}