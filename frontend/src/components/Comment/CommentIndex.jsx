import CommentIndexItem from "./CommentIndexItem";

const CommentIndex = ( { comments, activity} ) => {

    // const commentListElements = comments.map((comment) => if (comment.id === activity) {
    // <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} } /></div>)
    console.log(comments)
    const commentListElements = comments.map((comment) => <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} /></div>)

    return ( 
            <div className='comment-index-body'>
                    {`length: ${commentListElements.length}`}
                    {commentListElements}
            </div>
     );
}
 
export default CommentIndex;