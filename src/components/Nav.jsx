import earth from '../assets/earth.png'


export default function Nav() {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img src={earth} alt="logo"  className='logo'/>
            </div>
            <div className="nav-links">
                <p>My Travel Journal</p>
            </div>
        </div>
    )
}