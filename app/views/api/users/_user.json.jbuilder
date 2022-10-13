# json.array! @users do |user|
    json.extract! user, :id, :email, :fname, :lname
# end
#, :created_at