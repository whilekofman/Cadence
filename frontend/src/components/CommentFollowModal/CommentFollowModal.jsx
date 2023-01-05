const CommentFollowModal = ( comments, follows, activityId) => {
    const arrComments = Object.values(comments)
    // console.log(comments)
    return ( 
        <>
            <div className="modal" style={{top: "0", bottom: "0", left:"0", right:"0", height: "500px", width: "500px", backgroundColor: "white", position: "absolute" }}>{arrComments}</div>
        </>
     );
}
 
export default CommentFollowModal;