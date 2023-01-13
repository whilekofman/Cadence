export const reducedUsersFollowing = (following, userId, array) => {
    // debugger
    const userFollowing = following.filter((follow) => {
        return userId == follow.followerId
    })
    

    return userFollowing.reduce(
        (acc, following) => ({
            ...acc,
            [following.followingId]: following,
        }),
        {}
    );
    
}

export const reducedUsersFollowers = (followers, userId) => {
    const usersFollowers = followers.filter((follow) => {
        return userId == follow.followingId
    })

    return usersFollowers.reduce((acc, followers) => ({
        ...acc,
        [followers.followerId]: followers,
    }), {})
}

    // const reducedFollowing = following.reduce(
    //     (acc, following) => ({
    //         ...acc,
    //         [following.followingId]: following,
    //     }),
    //     {}
    // );