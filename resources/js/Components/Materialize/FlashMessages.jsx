import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
const FlashMessages = () => {
    const { flash } = usePage().props;

useEffect(() => {
    const timer = setTimeout(() => {
        const messages = document.querySelectorAll('.flash-message');
        messages.forEach(message => {
            message.style.opacity = '0';
            setTimeout(() => message.remove(), 300);
        });
    }, 5000);

    return () => clearTimeout(timer);
}, [flash]);

    const removeMessage = (e) => {
        e.currentTarget.parentElement.style.opacity = '0';
        setTimeout(() => {
            e.currentTarget.parentElement.remove();
        }, 300);
    };

    if (!flash.message && !flash.error) return null;

    return (
        <div className="flash-container">
            {flash.message && (
                <div className="flash-message success">
                    <i className="material-icons">check_circle</i>
                    <div className="content">
                        <strong>Success!</strong>
                        <p style={{ margin: '5px 0 0' }}>{flash.message}</p>
                    </div>
                    <span className="close material-icons" onClick={removeMessage}>close</span>
                </div>
            )}
            
            {flash.error && (
                <div className="flash-message error">
                    <i className="material-icons">error</i>
                    <div className="content">
                        <strong>Error!</strong>
                        <p style={{ margin: '5px 0 0' }}>{flash.error}</p>
                    </div>
                    <span className="close material-icons" onClick={removeMessage}>close</span>
                </div>
            )}
        </div>
    );
};

export default FlashMessages;