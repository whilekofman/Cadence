# json.user do
#   json.partial! 'user', user: @user
# end

# 

# json.user do
# end
json.user do
  json.extract! @user, :id, :email, :fname, :lname#, :created_at, :updated_at
  json.profileurl @user.profile_picture.url

end