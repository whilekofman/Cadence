import { useSelector } from "react-redux";
import { getSession } from "../../store/session";

const CommentIndexItem = ( { comment } ) => {

    const currentUser = useSelector
    (getSession)

    const {
        id,
        fname,
        lname,
        authorProfilePicture,
        body,
        activityId,
        authorId
        
    } = comment



    return ( 
        <div className="comment-container">
            <div className="comment-card">
                <div className="commenter-photo-container">
                    <img src={authorProfilePicture} alt="commenter-photo" className="commenter-photo"/>
                </div>
                <div className="commenter-name">
                    {`${fname} ${lname} `}
                </div>
                <div className="comment-body">
                    {`${body}`}
                </div>
            </div>
        </div>
     );
}
 
export default CommentIndexItem;