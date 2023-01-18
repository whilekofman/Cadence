import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, fetchComments } from "../../store/comments";
import { getSession } from "../../store/session";
import CommentLike from "../Like/CommentLike";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import FollowButton from "../FollowButton";
import ProfilePicture from "../ProfilePicture";
import AthleteName from "../AthleteName";

dayjs.extend(relativeTime);

const CommentIndexItem = ({ comment, athlete }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getSession);
    const {
        id,
        fname,
        lname,
        authorProfilePicture,
        body,
        createdAt,
        activityId,
        authorId,
    } = comment;

    const TimeSinceComment = dayjs().to(dayjs(createdAt));
    const [show, setShow] = useState(false);
    const handleDeleteComment = (e) => {
        e.preventDefault();
        dispatch(deleteComment(id));
    };

    const time = () => {
        return <div className="time-since-comment">{TimeSinceComment}</div>;
    };

    const timeDeleteFollow = () => {
        if (athlete === currentUser.id || currentUser.id === authorId) {
            return (
                <>
                    <div className="time-since-comment">{TimeSinceComment}</div>
                    <div
                        className="delete-comment"
                        onClick={handleDeleteComment}
                    >
                        {" "}
                        | Delete
                    </div>
                    <FollowButton page="comment-index" id={authorId} />
                </>
            );
        } else
            return (
                <div className="time-since-comment">
                    {TimeSinceComment}
                    <FollowButton page="comment-index" id={authorId} />
                </div>
            );
    };
    const [showFollowDelete, setFollowDelete] = useState(time());

    return (
        <div className="comment-container">
            <div
                className="comment-card"
                onMouseEnter={() => setFollowDelete(timeDeleteFollow)}
                onMouseLeave={() => setFollowDelete(time)}
            >
                <div className="profile-picture-name-body-like-container-comment-index">
                    <div className="commenter-profile-picture-comment-index">
                        <ProfilePicture
                            profilePictureUrl={authorProfilePicture}
                            page="comment-index"
                            targetId={authorId}
                        />
                    </div>
                    <div className="name-body-like-comment-index">
                        <div className="commenter-name-timeago">
                            <div className="commenter-name">
                                <AthleteName
                                    fname={fname}
                                    lname={lname}
                                    targetId={authorId}
                                />
                            </div>
                            <div className="time-delete-follow">
                                {showFollowDelete}
                            </div>
                        </div>
                        <div className="comment-body">{body}</div>
                        <CommentLike commentId={id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentIndexItem;
