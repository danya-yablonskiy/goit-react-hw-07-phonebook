import { useDispatch, useSelector } from 'react-redux';
import { Button, List, ListItem } from './ContactList.styled';
import { deleteContacts } from 'store/API/deleteContacts';

export const ContactList = () => {
  const {
    contacts: {
      contacts: { items },
      filter,
    },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const filterName = items.filter(item =>
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
