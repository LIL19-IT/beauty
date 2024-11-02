
export function Map({ map }) {
    return (
        <div className="item">
            <div className="item_content">
                <h2>{map.title}</h2>
                <p>{map.description}</p>
                <a href={map.btn_url} className="btn">{map.btn_text}</a>
            </div>
        </div>
    )
}
