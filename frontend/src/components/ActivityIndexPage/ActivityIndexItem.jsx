import { Link } from "react-router-dom";
// import inline from '../../assets/logo/skatelogo.png'
import bikelogo from "../../assets/logo/bikelogo.png";
import skatelogo from "../../assets/logo/skatelogo.png";
import runlogo from "../../assets/logo/runlogo.png";
import { useEffect, useState } from "react";
import CommentForm from "../CommentsForm/CommentForm";
import { getSession } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, getComments } from "../../store/comments";
import CommentIndex from "../Comment/CommentIndex";
import { speed, durationConvert } from "../utils/activityspeed/speedConverter";
import Like, { toggleLike } from "../Like/ActivityLike";
import { displayTimeParsed } from "../utils/datetimeparsers";
import { getFollowers, getFollowing } from "../../store/follows";
import FollowButton from "../FollowButton";


const ActivityIndexItem = ({ activity, activityLikes, userLikesActivity }) => {
    const currentUser = useSelector(getSession);
    const allComments = useSelector(getComments);

    const comments = allComments.filter(
        (comment) => comment.activityId === activity.id
    );

    const {
        id,
        fname,
        lname,
        startTime,
        title,
        description,
        sport,
        distance,
        hours,
        minutes,
        seconds,
        athleteProfilePicture,
        athleteId,
    } = activity;

    const [showNewCommentBox, setShowNewCommentBox] = useState(
        "do-not-show-new-comment"
    );
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [showComments, setShowComments] = useState(true);
    const [profilepicture, setProfilepicture] = useState(
        athleteProfilePicture
            ? athleteProfilePicture
            : "https://aa-cadence-dev.s3.amazonaws.com/adyson.jpeg"
    );

    const sportImg =
        sport === "run" ? runlogo : sport === "inline" ? skatelogo : bikelogo;

    const kudosCommentLengthText = () => {
        if (activityLikes.length && comments.length) {
            return `${activityLikes.length} kudos · ${comments.length} comments`;
        } else if (activityLikes.length) {
            return `${activityLikes.length} kudos`;
        } else if (comments.length) {
            return `${comments.length} comments`;
        } else {
            return (
                <Like
                    activity={activity}
                    activityLikes={activityLikes}
                    userLikesActivity={userLikesActivity}
                    firstLike={true}
                ></Like>
            );
        }
    };

    const [speedType, append] =
        sport === "run" ? ["Pace", " /mi"] : ["Speed", " mi/h"];

    const openCommentBox = (e) => {
        e.preventDefault();

        setShowCommentBox((value) => !value);
    };

    const openComments = (e) => {
        e.preventDefault();
        setShowComments((show) => !show);
    };

    const followButton = (athleteId) => {
        if (athleteId !== currentUser.id) {
            return <FollowButton location={"activityIndex"} id={athleteId} />;
        }
    };
    return (
        <>
            <div className="top-bar">
                <div className="profile-pic-div">
                    {/* <i className="fa-solid fa-user"></i> */}
                    <img className="profile-pic" src={profilepicture} />
                </div>
                <div className="athlete-name-start-time-index">
                    <div className="athlete-name-index">
                        {fname} {lname}
                        {followButton(athleteId)}
                    </div>
                    <div className="start-time-index">
                        {displayTimeParsed(startTime)}
                    </div>
                </div>
            </div>
            <div className="title">
                <div className="sport">
                    <img className="sport-logo" src={sportImg} />
                </div>
                <div className="title-text-container-index">
                    <Link className="title-link" to={`/activities/${id}`}>
                        <h3 className="title-text-index">{title}</h3>
                    </Link>
                </div>
            </div>

            <div className="description">{description}</div>

            <div className="matrix-index">
                <div className="matrix-box-index">
                    <div className="matrix-title">Distance</div>
                    <div className="matrix-value-index">{distance} mi</div>
                </div>
                <div className="matrix-box-index">
                    <div className="matrix-title">{speedType}</div>
                    <div className="matrix-value-index">
                        {speed({ hours, minutes, seconds, distance, sport })}
                        {append}
                    </div>
                </div>
                <div className="matrix-box-index-right">
                    <div className="matrix-title">time</div>
                    <div className="matrix-value-index">
                        {durationConvert({ hours, minutes, seconds })}
                    </div>
                </div>
            </div>
            <div className="bottom-container-index">
                <div className="kudos-count-and-buttons-index">
                    <div className="kudos-comment-count-index">
                        {kudosCommentLengthText()}
                    </div>
                    <div className="comment-like-buttons-index">
                        <Like
                            activity={activity}
                            activityLikes={activityLikes}
                            userLikesActivity={userLikesActivity}
                        ></Like>

                        <button
                            className="button-index"
                            onClick={openCommentBox}
                        >
                            <div className="material-symbols-outlined add-comment material-index">
                                speaker_notes
                            </div>
                        </button>
                    </div>
                </div>

                {showComments && (
                    <CommentIndex comments={comments} athlete={athleteId} />
                )}

                {showCommentBox && (
                    <div className={showNewCommentBox}>
                        <CommentForm
                            activityId={id}
                            authorId={currentUser.id}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ActivityIndexItem;
