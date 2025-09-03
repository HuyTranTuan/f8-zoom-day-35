import { useState, useEffect } from "react";
import Comment from "../../components/Comment";

function Comments() {
    const [comments, setCommemts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                await setLoading(true)

                const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })

                if (!res.ok) {
                    throw new Error(`HTTP error ${res.status}`);
                }

                const response = await res.json();
                await setCommemts(response);
                await setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchComments()
    }, [])
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCommemts([{
            id: 'id' + (new Date()).getTime(),
            name: "John Doe",
            body: escapeHTML(inputValue),
            email: "johndoe@gmail.com",
            postId: 1,
        }, ...comments])
        e.target.reset()
    }

    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (m) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            })[m];
        });
    }

    return (
        <div className="comments-container">
            <h2>Comments page</h2>
            <div className="comment-list">
                {loading
                    ? <div className="comment-nodata">Loading... </div>
                    : error
                        ? <div className="comment-nodata">Something wrong {error}</div>
                        : comments.map(item => {
                            return (
                                <Comment
                                    key={item.id}
                                    name={item.name}
                                    img={`https://ui-avatars.com/api/?name=${item.name}&background=random`}
                                    email={item.email}
                                    body={item.body}
                                    time="2 giờ trước"
                                ></Comment>
                            )
                        })
                }
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" id="taskTitle" className="form-input" placeholder="Write comment" required onInput={handleInputChange} />
                </div>
                <div className="form-btn-control">
                    <button type="submit" className="form-submit-btn">Add comment</button>
                </div>

            </form>
        </div>
    )
}

export default Comments;