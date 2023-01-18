import { useState } from "react";
import CommentIndexItem from "./CommentIndexItem";

const CommentIndex = ({ comments, athlete }) => {
    const [clicked, setClicked] = useState(false);

    const commentListElements = comments.map((comment) => (
        <div key={comment.id}>
            <CommentIndexItem comment={comment} athlete={athlete} />
        </div>
    ));

    const allComments = () => {
        return <>{commentListElements}</>;
    };
    const showAllComments = (e) => {
        e.preventDefault();
        setClicked((show) => !show);

        allComments();
    };

    const commentElementsDisplay = (elements) => {
        if (elements.length <= 2) {
            return elements;
        } else {
            const additionalCommentsText = clicked
                ? `Hide ${elements.length - 2} comments`
                : `See all ${elements.length} comments`;

            return (
                <>
                    {elements.shift()}
                    {elements.shift()}
                    {clicked && <div className="comments">{elements} </div>}
                    <div
                        className="see-all-comments-link"
                        onClick={showAllComments}
                    >
                        {additionalCommentsText}
                    </div>
                </>
            );
        }
    };

    return (
        <div className="comment-index-body">
            {commentElementsDisplay(commentListElements)}
        </div>
    );
};

export default CommentIndex;
