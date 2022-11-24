export default function Navbar(){
    return <nav className = "nav">
        <a href="/" className = " site-title">Site Name</a>
        <ul>
            <li>
                <a href="/">Reservas</a>
            </li>
            <li>
                <a href="/">Pagos</a>
            </li>
            <li>
                <a href="/">Noticias</a>
            </li>
        </ul>
    </nav>
}