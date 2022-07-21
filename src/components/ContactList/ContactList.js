import PropTypes from 'prop-types';
import Contact from 'components/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/state';

function ContactList() {
  const list = useSelector(getVisibleContacts);
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </List>
  );
}
  
ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
};

export default ContactList;