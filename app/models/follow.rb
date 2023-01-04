class Follow < ApplicationRecord
    belongs_to :follower,
        class_name: :User

    belongs_to :following,
        class_name: :User

    def following_name
        following.fname + ' ' + following.lname
    end

    def follower_name
        follower.fname + ' ' + follower.lname
    end

    

end
