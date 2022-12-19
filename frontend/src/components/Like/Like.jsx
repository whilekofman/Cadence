import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSession } from "../../store/session";

const Like = ( { activity, likes } ) => {
    const currentUser = useSelector(getSession)
    const [likeStyle, setLikeStyle] = useState(false)
    // for(let i = 0; i < likes.length; i++){
    //     if (currentUser.id === likes[i].likerId) setLikeStyle(true)//console.log('You like this') 
    // }
    // console.log(likes[0].likerId)
    // if(likes[0].likerId === currentUser.id) setLikeStyle(true)//console.log("YOU LIKE THIS")
    // if(currentUser.id === likes. )
    // const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(newLike)
        // if(likes[0].likerId === currentUser.id) setLikeStyle(true)
    }, [likeStyle])

    // useEffect(() => {
    //     dispatch(deleteLike)
    // }, [])

    const thumbCss = likeStyle === false ? "material-symbols-outlined thumbs-up thumbs-not-liked" : "material-symbols-outlined thumbs-up thumbs-liked thumbs-liked-color"

    const toggleLike = e => {
        e.preventDefault()
        console.log('Click')
        
        const thumbCssSetter = setLikeStyle((like) => !like)


    }
    
    
    return ( 
        <>
        <button onClick={toggleLike}>
            <div className={thumbCss}>thumb_up</div>
        </button>
        </>
     );
}
 
export default Like;

// "material-symbols-outlined thumbs-up thumbs-not-liked"