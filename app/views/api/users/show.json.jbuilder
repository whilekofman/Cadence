# json.user do
#   json.partial! 'user', user: @user
# end

# 

# json.user do
# end
json.user do
  json.extract! @user, :id, :email, :fname, :lname, :following
  #, :following, :followers#, :created_at, :updated_at
  json.profileurl @user.profile_picture.url

end

json.follows do 
  @user.follows.each do |follow|
    json.set!  follow.id do # follow.id do #follow.following_id do 
      json.extract! follow, :id, :following_id, :follower_id, :following_name
    end
  end
end 

json.followed_by do
  @user.followed_by.each do |follow|
        json.set! follow.id do #follow.id do #follow.follower_id do 
      json.extract! follow, :id, :following_id, :follower_id, :follower_name
    end
  end
end 