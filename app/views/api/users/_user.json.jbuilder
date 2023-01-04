# json.array! @users do |user|
    json.extract! user, :id, :email, :fname, :lname
    json.profileurl user.profile_picture.url

    # json.extract! followers, :id, :follower_id, :following_id
# end
#, :created_at