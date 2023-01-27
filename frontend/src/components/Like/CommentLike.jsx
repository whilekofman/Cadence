import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLike, getLikes, newLike } from "../../store/likes";
import { getSession } from "../../store/session";

const CommentLike = ({ commentId }) => {
    const currentUser = useSelector(getSession);
    const likes = useSelector(getLikes);
    const dispatch = useDispatch();
    const commentLikes = likes.filter(
        (like) =>
            like.likeableType === "Comment" && like.likeableId === commentId
    );

    const userLike = commentLikes.filter(
        (like) => like.likerId === currentUser.id
    );

    const commentLikeText = commentLikes.length
        ? `${commentLikes.length} likes`
        : ``;

    const heartClass = !userLike.length
        ? "material-symbols-outlined not-liked-comment comment-heart"
        : "comment-liked-color material-symbols-outlined liked comment-heart";

    const handleCommentLike = (e) => {
        e.preventDefault();

        if (userLike.length) {
            dispatch(deleteLike(userLike[0].id));
        } else {
            const like = {
                likerId: currentUser.id,
                likeableType: "Comment",
                likeableId: commentId,
            };
            dispatch(newLike(like, like.likeableType, like.likeableId));
        }
    };

    return (
        <div className="comment-like-container">
            <div onClick={handleCommentLike} className={heartClass}>
                favorite
            </div>
            <div className="comment-like-text">{commentLikeText}</div>
        </div>
    );
};

export default CommentLike;
