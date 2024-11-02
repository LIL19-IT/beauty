
export function Email({ feedback }) {
    return (
        <div className="item">
            <div className="item_content">
                <h2>{feedback.title}</h2>
                <p>{feedback.description}</p>
                <input type='email' placeholder={feedback.input_placeholder} />
            </div>

            <div className='image'>
                <img src={feedback.img_url} alt={feedback.alt} />
            </div>
        </div>
    )
}
