# == Schema Information
#
# Table name: activities
#
#  id          :bigint           not null, primary key
#  athlete_id  :bigint           not null
#  sport       :string           not null
#  distance    :float            not null
#  hours       :integer          not null
#  minutes     :integer          not null
#  seconds     :integer          not null
#  title       :string           not null
#  intensity   :integer          not null
#  hr          :float
#  pnotes      :text
#  tags        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#  purpose     :integer
#  start_time  :datetime
#
FactoryBot.define do
  factory :activity do
    athlete { nil }
    sport { "MyString" }
    distance { 1.5 }
    hours { 1 }
    minutes { 1 }
    seconds { 1 }
    title { "MyString" }
    description { "MyText" }
    intensity { 1 }
    hr { 1.5 }
    pnotes { "MyText" }
    tags { 1 }
  end
end
