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
  belongs_to :author
  belongs_to :activity
end
