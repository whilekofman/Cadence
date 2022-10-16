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
#  start_time  :date
#
class Activity < ApplicationRecord
  validates :sport, inclusion: { in: ['run', 'bike', 'inline', 'ebike'] } 
  validates :purpose, numericality: { in: 0..2, allow_nil: true }

  validates :hours, :minutes, :seconds, numericality: { only_integer: true }

  validates :title, length: { minimum: 1 }

  validates :intensity, numericality: { in: 0..9, default: 0 }

  validates :distance, presence: true

  has_many_attached :photos

  belongs_to :athlete,
    class_name: :User


  
end
