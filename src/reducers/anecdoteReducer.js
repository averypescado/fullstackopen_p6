import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0);
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      const id = action.data.id;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: (anecdoteToChange.votes += 1),
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );

    case 'NEWANECDOTE':
      return [...state, action.data];

    case 'INIT_ANECDOTES':
      return action.data;

    default:
      return state;
  }
};

export const voteFor = (id) => {
  //fdssdfdfs
  return async dispatch => {

    await anecdoteService.voteCall(id)
    dispatch({
      type: 'INCREMENT',
      data: {
        id,
      }
    })

  }
}

//fsfsddfs
//return {
//  type: 'INCREMENT',
// data: {
//   id,
// },
// };
//};

export const initializeAnecdotes = () => {

  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })

  };
};

export const AddAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEWANECDOTE',
      data: newAnecdote,
    })
  }
};

export default reducer;