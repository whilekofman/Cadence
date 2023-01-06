import { useEffect, useState } from "react";
import CommentIndexItem from "./CommentIndexItem";
// import { deleteComment, fetchComments } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import { getLikes } from "../../store/likes";
import { Modal } from "../../Context/Modal";

const CommentIndex = ({ comments, athlete }) => {
  const [clicked, setClicked] = useState(false);

  const [openCommentModal, setOpenCommentModal] = useState(false);

  const commentListElements = comments.map((comment) => (
    <div className="comment-index-body" key={comment.id}>
      <CommentIndexItem comment={comment} athlete={athlete} />
    </div>
  ));

  const allComments = () => {
    return (
      <>
        <Modal children={commentListElements} onClose={setClicked} />

        {/* {commentListElements} */}
      </>
    );
  };
  const showAllComments = (e) => {
    e.preventDefault();
    setClicked((show) => !show);

    allComments();
  };

  const commentElementsDisplay = (elements) => {
        if (elements.length <= 2) {
                return elements
        }
        else {
                const additionalCommentsText = `See all ${elements.length} comments`;
                return (
                  <div className="see-all-comments-container" onClick={() => setClicked(show => !show)}>{additionalCommentsText}
                    <Modal
                      children={commentListElements}
                      onClose={setClicked}
                    />
                  </div>
                );
        }
  }
//   const commentElementsDisplay = (elements) => {
//     if (elements.length <= 2) {
//       return elements;
//     } else {
//       const additionalCommentsText = clicked
//         ? `Hide ${elements.length - 2} comments`
//         : `See all ${elements.length} comments`;

//       return (
//         <>
//           {/* {elements[0]}
//                 {elements[1]} */}
//           {elements.shift()}
//           {elements.shift()}
//           <div className="see-all-comments-container">
//             {clicked && <div className="comments">{elements} </div>}
//             <div className="see-all-comments-link" onClick={showAllComments}>
//               {/* See all {elements.length + 2} comments */}
//               {additionalCommentsText}
//             </div>
//           </div>
//         </>
//       );
//     }
//   };

  return (
    <div className="comment-index-body">
      {/* {commentListElements} */}
      {commentElementsDisplay(commentListElements)}
    </div>
  );
};

export default CommentIndex;

// const commentElementsDisplay = (elements) => {
//         if (elements.length <= 2){
//                 return elements
//         }
//         else {
//                 const additionalCommentsText = clicked ? `Hide ${elements.length - 2} comments` : `See all ${elements.length} comments`

//         return (
//                 <>
//                 {/* {elements[0]}
//                 {elements[1]} */}
//                 {elements.shift()}
//                 {elements.shift()}
//                 <div className="see-all-comments-container">
//                 {clicked &&
//                         <div className="comments">{elements} </div>

//                 }
//                         <div className="see-all-comments-link" onClick={showAllComments} >
//                         {/* See all {elements.length + 2} comments */}
//                         {additionalCommentsText}
//                         </div>
//                 </div>

//                 </>
//         )

//         }
// }
