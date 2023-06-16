import axios from 'axios';

export const deleteContacts = async contactId => {
  const { data } = await axios.delete(
    `https://648b172d17f1536d65ea553f.mockapi.io/api/v1/contacts/${contactId}`
  );
  return data;
};
