USER_IDS = ["jennifer.id", "james.id", "eugene.id", "ari.id", "stuart.id", "jim.id", "ada.id"]
 count = 1
 File.open("follow_seeds.txt", "w") do |f|
    count = 1
    USER_IDS.each do |user|
        number_of_follows = rand(1..USER_IDS.length - 1)
        copy_users = USER_IDS.dup
        possible_user_ids = USER_IDS.dup
        follower_id = user
        possible_user_ids.delete(follower_id)
        number_of_follows.times do
            following_id = possible_user_ids.sample
            possible_user_ids.delete(following_id)


            f.write(
                "follow_#{count} = Follow.create!(
                    follower_id: #{follower_id},
                    following_id: #{following_id}
                )"
                )
            f.puts

        end
           
    end

end

            # possible_user_ids.delete(liker_id)

            # f.write(
            #     "activity_like_#{count} = Like.create!(
            #         liker_id: #{liker_id},
            #         likeable_id: #{activity},
            #         likeable_type: 'Activity'     
            #         )"
                    
            #     )
            #     f.puts
            #     count +=1