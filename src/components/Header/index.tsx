import './index.css';

export default function Header(prop){
    return(
    <header className={prop.black ? 'black' : ''}>
        <div className='header--logo'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Netflix'>

                </img>
            </a>
        </div>
        <div className='header--user'>
            <a href='/'>
                <img src='https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png' alt='User'>

                </img>
            </a>
        </div>
    </header>);
}