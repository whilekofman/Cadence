 #index 
 @users.each do |user|
   json.set! user.id do
     json.partial! 'user', user: user
   end
 end

# json.array! @users do |user|
#     json.set! user.id do
#         json.partial! 'user', user: user
#     end
# end
