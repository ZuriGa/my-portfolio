import React, {useState} from 'react';
import Modal from 'react-modal';
import './ContactMe.css';

const ContactMe = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: ''});
    };
    return( 
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel='Contact Me'
        className='contact-modal'
        >
            <h2>Contact Me</h2>
            <p>Feel free to leave your message or contact information.</p>
            <form onSubmit={handleSubmit} className='contact-form'>
                <label htmlFor='name'>Name:</label>
                <input 
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                />
                <label htmlFor='email'>Email:</label>
                <input
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                />
                <label htmlFor='message'>Message:</label>
                <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </Modal>
    );
};

export default ContactMe;