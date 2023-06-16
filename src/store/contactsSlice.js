import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { deleteContactsThunk, getContactsThunk, postContactsThunk } from './options';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = '';
        state.contacts.items = payload;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(postContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(postContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = '';
        state.contacts.items = payload;
      })
      .addCase(postContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })
      .addCase(deleteContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = '';
        state.contacts.items = payload;
      })
      .addCase(deleteContactsThunk.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;