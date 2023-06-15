import {  useSelector } from 'react-redux';


export const Filter = () => {
  const {
    contacts: { filter },
  } = useSelector(state => state);
  // const dispatch = useDispatch();

  const changeFilter = e => {
    // dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label>
      Find contact by name <br />
      <input type="text" value={filter} onChange={changeFilter}></input>
    </label>
  );
};
