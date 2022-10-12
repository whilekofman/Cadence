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
#  type        :integer
#  start_time  :date
#
require 'rails_helper'

RSpec.describe Activity, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
