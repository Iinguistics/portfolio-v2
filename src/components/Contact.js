import React from 'react';
import { SayHello } from './Helpers/Buttons';

const Contact = () => {
    return (
        <div className="text-center  w-1/2 m-auto h-full">
            <h2 className="text-2xl">Get In Touch</h2>
            <p>Have any question's or just want to chat, my inbox is always open.</p>
            <a href="mailto:jmsgoytia@gmail.com" rel="noopener noreferrer"> <SayHello /> </a>
        </div>
    )
}

export default Contact
