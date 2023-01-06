require 'date'
users = ['jennifer',  'james',  'eugene',  'ari',  'stuart',  'jim',  'ada']

activities = ["jennifer_activity_1",
 "jennifer_activity_2",
 "jennifer_activity_3",
 "jennifer_activity_4",
 "james_activity_1",
 "james_activity_2",
 "james_activity_3",
 "james_activity_4",
 "eugene_activity_1",
 "eugene_activity_2",
 "eugene_activity_3",
 "eugene_activity_4",
 "ari_activity_1",
 "ari_activity_2",
 "ari_activity_3",
 "ari_activity_4",
 "stuart_activity_1",
 "stuart_activity_2",
 "stuart_activity_3",
 "stuart_activity_4",
 "jim_activity_1",
 "jim_activity_2",
 "jim_activity_3",
 "jim_activity_4",
 "ada_activity_1",
 "ada_activity_2",
 "ada_activity_3",
 "ada_activity_4",
 "ada_activity_5"
]

possible_comments = ["Great Work", "Awesome", "Wish I were there", "Fast", "WOW", "Next time I\'''m in", "FANTASTIC", "Kudos"]


File.open("comment_seeds.txt", "w") do |f|

    count = 6
    activities.each do |activity|
        leave_comment_randomizer = [0, 1]
        leave_comment = leave_comment_randomizer.sample
        if leave_comment == 1
            number_of_comments = rand(1..4)
            number_of_comments.times do
                possible_comments_copy = possible_comments.dup
                author = users.sample
                body = possible_comments_copy.sample
                possible_comments_copy.delete(body)

                f.write(
                    "comment_#{count} = Comment.create!(
                        author_id: #{author}.id,
                        activity_id: #{activity}.id,
                        body: '#{body}'     
                        )"
                        
                    )
                    f.puts
                    count +=1
                end
            end
    end

end
              