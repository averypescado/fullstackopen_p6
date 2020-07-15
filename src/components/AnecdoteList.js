import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {voteFor} from '../reducers/anecdoteReducer';
import {setNotification} from '../reducers/notificationReducer';
import {deleteNotification} from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteList = (props) => {
  const dispatch = useDispatch();

  const vote = (id, anecdote) => {
    dispatch(setNotification(`You voted for ${anecdote}`, 1000));
    dispatch(voteFor(id));
  };
  return (
    <div>
      {' '}
      {props.anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div> {anecdote.content} </div>{' '}
          <div>
            has {anecdote.votes}{' '}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              {' '}
              vote{' '}
            </button>{' '}
          </div>{' '}
        </div>
      ))}{' '}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    anecdotes: state.anecdotes,
  };
};

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList);

export default ConnectedAnecdotes;
