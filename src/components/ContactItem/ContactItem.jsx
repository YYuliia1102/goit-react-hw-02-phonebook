import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDeleteContact }) => {
    const handleDeleteClick = () => {
        onDeleteContact(contact.id);
    };

    return (
        <li>
            {contact.name} - {contact.number}
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
};
ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactItem;