import React, { useState } from 'react';
import Modal from 'react-modal';
import './ContactMe.css';

const ContactMe = ({ isOpen, onRequestClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel='Contact Me'
            className='contact-modal'
        >
            <button className='close-button' onClick={onRequestClose}>X</button>
            <h2>Contact Me</h2>
            {isSubmitted ? (
                <p>Thank you for contacting me!</p>
            ) : (
                <>
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
                </>
            )}
        </Modal>
    );
};

export default ContactMe;