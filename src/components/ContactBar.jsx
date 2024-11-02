import React from 'react'

export function ContactBar({ logo, contact }) {
    return (
        <div className='ContactBar'>
            <div className="container">
                <div className="row">

                    <a href='#' className="logo">
                        <img src={logo.img_url} alt={logo.alt} />
                        {logo.text}
                    </a>

                    <div className="info">
                        <a href={contact.callback_url} className='tel'>{contact.phone}</a>
                        <a href="#" className='btn'>{contact.btn_text}</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
