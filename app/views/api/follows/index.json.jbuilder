@follows.each do |follow|
    json.set! follow.id do 
        json.partial! 'follow', follow: follow
    end
end

# @followers.each do |follow|
#     json.set! follow.following_id do # follow.id do #follow.following_id do 
#         json.extract! follow, :id, :following_id, :follower_id, :following_name
#     end
  
# end 

# followed_by.each do |follow|
#     json.set! follow.follower_id do#follow.id do #follow.follower_id do 
#         json.extract! follow, :id, :following_id, :follower_id, :follower_name
#     end
  
# end 