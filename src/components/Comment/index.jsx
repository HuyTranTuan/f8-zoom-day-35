function Comment({ img, name, email, body, time }) {
    return (
        <div className="comment-container">
            <div className="comment-img">
                <img src={img} />
            </div>
            <div className="comment-content">
                <span className="comment-name">{name}</span>
                <span className="comment-email">{email}</span>
                <p className="comment-body">{body}</p>
                <span className="comment-time">{time}</span>
            </div>
        </div>
    )
}

export default Comment;