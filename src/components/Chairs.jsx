
export function Chairs({ chairs }) {
  return (
    <div className="Chairs">
      {
        chairs.map(elem => (
          <div className="chair" key={elem.id}>
            <img src={elem.img_url} alt={elem.alt} />
            <p className="description">{elem.description}</p>
            <p className="price">{elem.price}</p>
            <a href={elem.btn_url} className="btn">{elem.btn_text}</a>
          </div>
        ))
      }
    </div>
  )
}
