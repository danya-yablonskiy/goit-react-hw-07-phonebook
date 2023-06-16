import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from './API/getContacts';
import { postContacts } from './API/postContacts';
import { deleteContacts } from './API/deleteContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await getContacts();
  }
);

export const postContactsThunk = createAsyncThunk(
  'contacts/postContacts',
  async newContact => {
    return await postContacts(newContact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
    'contacts/deleteContacts',
    async idContacts => {
        return await deleteContacts(idContacts)
    }
)