
export function Navbar({ header }) {
    return (
        <div className="Navbar">
            <div className="container">
                <nav>
                    {
                        header.map(elem => (
                            <a href={elem.url} key={elem.id}>
                                {elem.title}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </div>
    )
}
