USER_IDS = ["jennifer.id", "james.id", "eugene.id", "ari.id", "stuart.id", "jim.id", "ada.id"]

COMMENT_IDS = ["comment_1.id",
 "comment_2.id",
 "comment_3.id",
 "comment_4.id",
 "comment_5.id",
 "comment_6.id",
 "comment_7.id",
 "comment_8.id",
 "comment_9.id",
 "comment_10.id",
 "comment_11.id",
 "comment_12.id",
 "comment_13.id",
 "comment_14.id",
 "comment_15.id",
 "comment_16.id",
 "comment_17.id",
 "comment_18.id",
 "comment_19.id",
 "comment_20.id",
 "comment_21.id",
 "comment_22.id",
 "comment_23.id",
 "comment_24.id",
 "comment_25.id",
 "comment_26.id",
 "comment_27.id",
 "comment_28.id",
 "comment_29.id",
 "comment_30.id",
 "comment_31.id",
 "comment_32.id",
 "comment_33.id",
 "comment_34.id",
 "comment_35.id",
 "comment_36.id",
 "comment_37.id",
 "comment_38.id",
 "comment_39.id"]


 ACTIVITY_IDS = ["run1.id",
 "stuart_canada.id",
 "inline1.id",
 "bike1.id",
 "ari_inline.id",
 "ari_inline2.id",
 "jim_inline1.id",
 "stuart_bike.id",
 "jennifer_activity_1.id",
 "jennifer_activity_2.id",
 "jennifer_activity_3.id",
 "jennifer_activity_4.id",
 "james_activity_1.id",
 "james_activity_2.id",
 "james_activity_3.id",
 "james_activity_4.id",
 "eugene_activity_1.id",
 "eugene_activity_2.id",
 "eugene_activity_3.id",
 "eugene_activity_4.id",
 "ari_activity_1.id",
 "ari_activity_2.id",
 "ari_activity_3.id",
 "ari_activity_4.id",
 "stuart_activity_1.id",
 "stuart_activity_2.id",
 "stuart_activity_3.id",
 "stuart_activity_4.id",
 "jim_activity_1.id",
 "jim_activity_2.id",
 "jim_activity_3.id",
 "jim_activity_4.id",
 "ada_activity_1.id",
 "ada_activity_2.id",
 "ada_activity_3.id",
 "ada_activity_4.id",
 "ada_activity_5.id"]

 count = 1
 File.open("activity_likes_seeds.txt", "w") do |f|

    ACTIVITY_IDS.each do |activity|
        leave_like_randomizer = [0, 1]
        leave_like = leave_like_randomizer.sample
        if leave_like == 1
            number_of_likes = rand(1..USER_IDS.length)
            possible_user_ids = USER_IDS.dup
            number_of_likes.times do
                liker_id = possible_user_ids.sample
                possible_user_ids.delete(liker_id)

                f.write(
                    "activity_like_#{count} = Like.create!(
                        liker_id: #{liker_id},
                        likeable_id: #{activity},
                        likeable_type: 'Activity'     
                        )"
                        
                    )
                    f.puts
                    count +=1
            end
        end
    end

end

File.open("comment_likes_seeds.txt", "w") do |f|

    COMMENT_IDS.each do |comment|
        leave_like_randomizer = [0, 1]
        leave_like = leave_like_randomizer.sample
        if leave_like == 1
            number_of_likes = rand(1..USER_IDS.length)
            possible_user_ids = USER_IDS.dup
            number_of_likes.times do
                liker_id = possible_user_ids.sample
                possible_user_ids.delete(liker_id)

                f.write(
                    "comment_like_#{count} = Like.create!(
                        liker_id: #{liker_id},
                        likeable_id: #{comment},
                        likeable_type: 'Comment'     
                        )"
                        
                    )
                    f.puts
                    count +=1
            end
        end
    end

end