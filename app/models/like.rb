# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :bigint           not null
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Like < ApplicationRecord
  validates :liker_id, uniqueness: { scope: [:likeable_id, :likeable_type] }

  belongs_to :liker,
    class_name: :User

  belongs_to :likeable,
    polymorphic: :true

  # def self.find_likes(type, ids)
  #   # @likes = []
  #   debugger
  #   # ids.each do |id| 
  #     @likes = Like.where(likeable_type: type)
  #       .where(likeable_id: ids)
  #       debugger
  #   # end
  #   return @likes
  # end
  
end
