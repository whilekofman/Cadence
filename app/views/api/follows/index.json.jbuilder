# @follows.each do |follow|
#     json.set! follow.id do 
#         json.partial! 'follow', follow: follow
#     end
# end
if @follows
    @follows.each do |follow|
        json.set!  follow.id do # follow.id do #follow.following_id do 
            json.extract! follow, :id, :following_id, :follower_id, :following_name, :followee_profile_picture
        end

        # json.set! follow.following_id do # follow.id do #follow.following_id do 
        #     json.extract! follow, :id, :following_id, :follower_id, :following_name
        # end
    
    end 
end
if @followed_by
    @followed_by.each do |follow|
        json.set! follow.id do #follow.id do #follow.follower_id do 
            json.extract! follow, :id, :following_id, :follower_id, :follower_name, :follower_profile_picture
        end
    
    end 
end