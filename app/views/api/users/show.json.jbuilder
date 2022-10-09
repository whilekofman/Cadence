json.user do
  json.extract! @user, :id, :email, :fname, :lname
end