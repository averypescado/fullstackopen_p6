import axios from 'axios';
import AnecdoteList from '../components/AnecdoteList';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = {
    content,
    votes: 0
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const voteCall = async (id) => {
  const findAnecdote = await axios.get(`${baseUrl}/${id}`)
  const newAnecdote = {
    ...findAnecdote.data,
    votes: findAnecdote.data.votes + 1
  }
  const response = await axios.put(`${baseUrl}/${id}`, newAnecdote)
  return response.data
}


export default {
  getAll,
  createNew,
  voteCall
};