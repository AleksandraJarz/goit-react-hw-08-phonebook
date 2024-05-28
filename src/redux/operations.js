import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66477ebc2bb946cf2f9def88.mockapi.io/';

const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const result = await axios.get('/contacts');
      return result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const result = await axios.post('/contacts', newContact);
      return result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${ContactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export { getContacts, addContact, deleteContact };
