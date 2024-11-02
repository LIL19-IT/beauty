
export function ContactBarFooter({ socialLinks, contact }) {
    return (
        <div className="ContactBarFooter">
            <div className="container">
                <div className="row">

                    <div className="social_links">
                        {
                            socialLinks.map(elem => (
                                <a
                                    href={elem.url}
                                    key={elem.id}
                                    style={{backgroundImage: `url(${elem.img_url})`}}
                                />
                            ))
                        }
                    </div>

                    <div className="info">
                        <span className="address">{contact.address}</span>
                        <a href={contact.callback_url} className='tel'>{contact.phone}</a>
                        <a href="#" className='btn'>{contact.btn_text}</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
