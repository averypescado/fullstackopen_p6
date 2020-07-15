import React from 'react';
import {useDispatch} from 'react-redux';
import {AddAnecdote} from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    console.log(event.target);
    event.target.anecdote.value = '';
    dispatch(AddAnecdote(content));
  };

  return (
    <div>
      <h2> create new </h2>{' '}
      <form onSubmit={addAnecdote}>
        <div>
          {' '}
          <input name='anecdote' />
        </div>{' '}
        <button type='submit'> create </button>{' '}
      </form>{' '}
    </div>
  );
};

export default AnecdoteForm;
