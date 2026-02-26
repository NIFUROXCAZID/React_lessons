export default function MessageItem({ id, message, likes, dislikes, addLike, addDislike }) {

    function addLikeFunc() {
        addLike(id)
    }
    function addDislikeFunc() {
        addDislike(id)
    }

    return (
        <div className="task-1__message">
            <strong>{message}</strong>
            <span>likes: {likes}</span>
            <span>dislikes: {dislikes}</span>
            <button className="task-1__like" onClick={addLikeFunc}>Like</button>
            <button className="task-1__dislike" onClick={addDislikeFunc}>Dislike</button>
        </div>
    )
}