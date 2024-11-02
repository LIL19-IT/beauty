
export function Copyright({ copyright }) {
    return (
        <div className='Copyright'>
            <div className="container">
                <div className="row">
                    <p className="text">{copyright.text}</p>

                    <a className="privacy_policy" href={copyright.privacy_policy_url}>
                        {copyright.privacy_policy}
                    </a>
                </div>
            </div>
        </div>
    )
}
