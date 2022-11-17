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
FactoryBot.define do
  factory :comment do
    author { nil }
    activity { nil }
    body { "MyString" }
  end
end
