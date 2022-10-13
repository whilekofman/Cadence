# json.partial! 'users', user: user


# 

# json.user do
# end
json.user do
  json.extract! @user, :id, :email, :fname, :lname#, :created_at, :updated_at
end