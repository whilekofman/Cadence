import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../store/comments";
import { getSession } from "../../store/session";
import ProfilePicture from "../ProfilePicture";

const CommentForm = ({ activityId, authorId }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const currentUser = useSelector(getSession);

    const athleteProfilePicture = currentUser.profileUrl;

    const hanldeCommentSubmit = (e) => {
        e.preventDefault();

        const comment = {
            activityId,
            authorId,
            body,
        };
        dispatch(commentActions.newComment(comment));
        dispatch(commentActions.fetchComments());
        setSubmitted((val) => !val);

        setBody("");
    };
    const handleEnterKey = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            hanldeCommentSubmit(e);
        }
    };

    useEffect(() => {
        dispatch(commentActions.fetchComments());
    }, [submitted]);

    return (
        <>
            <div className="comment-container">
                <form action="" className="comment-form">
                    <div className="comment-form-picture-container">
                        <ProfilePicture
                            profilePictureUrl={athleteProfilePicture}
                            page={"comment-form"}
                            targetId={currentUser.id}
                        />
                    </div>
                    <div className="comment-field">
                        <textarea
                            name="comment"
                            className="comment-input"
                            autoFocus={true}
                            value={body}
                            placeholder="Add a comment"
                            onChange={(e) => setBody(e.target.value)}
                            onKeyDown={handleEnterKey}
                        />
                    </div>
                    <button
                        className="submit-comment"
                        onClick={hanldeCommentSubmit}
                        disabled={!body.length}
                    >
                        Post
                    </button>
                </form>
            </div>
        </>
    );
};

export default CommentForm;
