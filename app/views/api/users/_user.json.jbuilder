    json.extract! user, :id, :email, :fname, :lname
    json.profileurl user.profile_picture.url

