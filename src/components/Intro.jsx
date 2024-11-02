
export function Intro({ intro }) {
    return (
        <div className="Intro" style={{backgroundImage: `url(${intro.background_url})`}}>
            <div className="container">
                <div className="content">
                    <h1>{intro.title}</h1>
                    <p>{intro.description}</p>
                    <a href={intro.btn_url} className="btn">{intro.btn_text}</a>
                </div>
            </div>
        </div>
    )
}
