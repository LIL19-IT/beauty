export function CategoryLinks({ categoryLinks }) {
  return (
    <div className="CategoryLinks">
        <div className="container">
            <div className="links">
                {
                    categoryLinks.map(elem => (
                        <a href={elem.url} key={elem.id}>{elem.title}</a>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
