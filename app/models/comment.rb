# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  author_id   :bigint           not null
#  activity_id :bigint           not null
#  body        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Comment < ApplicationRecord
  validates :author_id, :activity_id, :body, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :activity
end
