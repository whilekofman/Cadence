import CommentIndexItem from "./CommentIndexItem";

const CommentIndex = ( { comments, activity} ) => {
    
    // const commentListElements = comments.map((comment) => <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} /></div>)

    return ( 
            <div className='comment-index-body'>
                    {`length: ${commentListElements.length}`}
                    {commentListElements}
            </div>
     );
}
 
export default CommentIndex;