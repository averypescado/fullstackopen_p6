import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  voteFor,
  AddAnecdote,
  initializeAnecdotes,
} from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import anecdoteService from './services/anecdotes';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(initializeAnecdotes(anecdotes)));
  }, [dispatch]);
  return (
    <div>
      <Notification />
      <h1> Anecdotes </h1> <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
