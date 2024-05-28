import PropTypes from 'prop-types';
import ContactItem from '../contactListItem/ConctactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
