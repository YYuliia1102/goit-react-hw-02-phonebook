import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired
            })
        ).isRequired,
        onAddContact: PropTypes.func.isRequired
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;
        const { contacts, onAddContact } = this.props;

        if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
            alert('Contact already exists!');
            return;
        }

        onAddContact(name, number);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Name:</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                    required
                />

                <h3>Number:</h3>
                <input
                    type="tel"
                    name="number"
                    placeholder="+380(97)-000-00-00"
                    value={number}
                    onChange={this.handleChange}
                    required
                />

                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;
