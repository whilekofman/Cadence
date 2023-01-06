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


end
