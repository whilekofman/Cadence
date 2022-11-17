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
require 'rails_helper'

RSpec.describe Comment, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
