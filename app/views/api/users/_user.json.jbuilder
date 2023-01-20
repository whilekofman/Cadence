# json.array! @users do |user|
    json.extract! user, :id, :email, :fname, :lname
    json.profileurl user.profile_picture.url

    # json.extract! followers, :id, :follower_id, :following_id
# end
#, :created_at
 json.extract! activity, :id, :athlete_id, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at, :fname, :lname, :athlete_profile_picture