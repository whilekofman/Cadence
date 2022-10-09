json.user do
  json.extract! @user, :id, :email, :fname, :lname, :created_at, :updated_at, :session_token, :password_digest
end