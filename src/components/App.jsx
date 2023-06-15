
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { getContactsAction } from 'store/contacts';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <button onClick={() => dispatch(getContactsAction())}>Test</button>
    </div>
  );
};
