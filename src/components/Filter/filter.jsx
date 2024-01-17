import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'store/ContactsToolKit/createFIlterSlice';


const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContact = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };

  return (
    <label className="label">
      Find contact 
      <input
        className="input"
        type="text"
        value={filter}
        onChange={filterContact}
      />
    </label>
  );
};

export default Filter;
