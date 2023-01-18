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

    def follower_profile_picture
        follower.profile_picture.url
    end

    def followee_profile_picture
        following.profile_picture.url
    end
    

end
