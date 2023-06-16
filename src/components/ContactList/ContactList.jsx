import { useDispatch, useSelector } from 'react-redux';
import { Button, List, ListItem } from './ContactList.styled';
import { deleteContacts } from 'store/API/deleteContacts';
import { getContactsSelector } from 'store/selector';
export const ContactList = () => {
  const {
    contacts: { contacts },
  } = useSelector(getContactsSelector);
  const { filter } = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const filterName = contacts.items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <List>
      {filterName.map(item => (
        <ListItem key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <Button type="button" onClick={() => deleteContact(item.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
