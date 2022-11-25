import { useEffect, useState } from "react";
import CommentIndexItem from "./CommentIndexItem";
// import { deleteComment, fetchComments } from "../../store/comments";
import { useDispatch } from "react-redux";

const CommentIndex = ( { comments, athlete, updater } ) => {
        // const [cts, setCts] = useState(comments)
        const [clicked, setClicked] = useState(false)
        
    // const commentListElements = comments.map((comment) => if (comment.id === activity) {
    // <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} } /></div>)
    // const dispatch = useDispatch()


//     console.log(lengthComments)

//     useEffect(() => {
//         dispatch(fetchComments())

//     }, [lengthComments])



//    const handleDeleteComment = (e, id ) => {
//         e.preventDefault()
//         console.log("HELP")
        
//         console.log(id)
//         // updateLength()
//         dispatch(deleteComment(id))
//         // setLengthComments((length) => length--)
//         // setDeleted((val) => !val)
        
//     }


    const commentListElements = comments.map((comment) => <div className='comment-index-body' key={comment.id}><CommentIndexItem comment={comment} athlete={athlete} /></div>)

    const allComments = () => {
        return (
            <>
                {commentListElements}
            </>
        
        )
 
    }
    const showAllComments = e => {
        e.preventDefault()
        console.log(clicked)
        setClicked(click => !click)
        console.log(clicked)

        allComments()
        
    }

    const commentElementsDisplay = (elements) => {
        if (elements.length <= 2){
            return elements
        }
        else {

            return (
                <>
                    {/* {elements[0]}
                    {elements[1]} */}
                    {elements.shift()}
                    {elements.shift()}
                    <div className="see-all-comments-container">
                        <div className="see-all-comments-link" onClick={showAllComments} >
                            See all {elements.length + 2} comments
                        </div>
                       {clicked && 
                        <div className="comments">{elements} </div>
                       }
                    </div>
                    

                </>
            )
            console.log(elements)

        }
    }





//     const handleDeleteComment = e => {
//         e.preventDefault()
//         dispatch(deleteComment(id))
        
//     }

    return ( 
            <div className='comment-index-body'>
                    {`length: ${commentListElements.length}`}                    
                    {/* {commentListElements} */}
                    {commentElementsDisplay(commentListElements)}
            </div>
     );
}
 
export default CommentIndex;