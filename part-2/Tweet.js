// https://dev.to/codingnepal/twitter-tweet-box-with-character-limit-highlighting-in-html-css-javascript-2ai8

const Tweet = ({username, name, date, message}) => {
    return (
        <div className="wrapper">
            <div className="input-box">
            <div className="tweet-area">
                <h3>{username}</h3>
                <small>{name}</small>
                <div className="input editable">
                    {message}
                </div>
            </div>
            <div className="date">
                <i className='fa fa-calendar'></i>
                <span>{date}</span>
            </div>
            </div>
            <div className="bottom">
            <ul className="icons">
                <li><i className="uil uil-capture"></i></li>
                <li><i className="far fa-file-image"></i></li>
                <li><i className="fas fa-map-marker-alt"></i></li>
                <li><i className="far fa-grin"></i></li>
                <li><i className="far fa-user"></i></li>
            </ul>
            <div className="content">
                <button>Tweet</button>
            </div>
            </div>
        </div>
    )
}
