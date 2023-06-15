import {  createSlice } from '@reduxjs/toolkit';
import { getContacts } from './API/getContacts';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const getContactsAction = () => {
  return async dispatch => {
    try {
      dispatch(contactsSlice.actions.fetching());
      const data = await getContacts();

      dispatch(contactsSlice.actions.fetchingSuccess(data));
    } catch (error) {
      dispatch(contactsSlice.actions.fetchingError(error));
    }
  };
};
// export const getContactsThunk = createAsyncThunk(
//   'contacts/getContacts/pending',
//   async () => {
//     return await getContacts();
//   }
// );

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  //   extraReducers: builder => {
  //     builder
  //       .addCase(getContactsThunk.pending, state => {
  //         state.contacts.isLoading = true;
  //       })
  //       .addCase(getContactsThunk.fulfilled, (state, { paylaod }) => {
  //         state.contacts.isLoading = false;
  //         state.contacts.error = '';
  //         state.contacts.items = paylaod;
  //       })
  //       .addCase(getContactsThunk.rejected, (state, { paylaod }) => {
  //         state.contacts.isLoading = false;
  //         state.contacts.error = paylaod;
  //       });
  //   },
  reducers: {
    fetching: state => {
      state.contacts.isLoading = true;
    },
    fetchingSuccess: (state, { paylaod }) => {
      state.contacts.isLoading = false;
      state.contacts.error = '';
      state.contacts.items = paylaod;
    },
    fetchingError: (state, { paylaod }) => {
      state.contacts.isLoading = false;
      state.contacts.error = paylaod;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
