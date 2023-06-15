import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios(
    'https://648b172d17f1536d65ea553f.mockapi.io/api/v1/contacts'
  );
  return data;
};
