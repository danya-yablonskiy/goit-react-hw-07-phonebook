import axios from 'axios';

export const postContacts = async newContact => {
  const { data } = await axios.post(
    'https://648b172d17f1536d65ea553f.mockapi.io/api/v1/contacts',
    newContact
  );

  return data;
};
