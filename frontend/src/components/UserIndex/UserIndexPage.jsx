import { Link } from "react-router-dom"


const UserIndexPage = () => {

    return (
        <>
            <p>This is but a test</p>
            <Link to={'/activities'}>Activities</Link>
        </>
    )

}

export default UserIndexPage