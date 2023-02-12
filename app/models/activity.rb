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

  has_many :comments,
    class_name: :Comment,
    dependent: :destroy
  
  has_many :likes,
    as: :likeable


  def fname
    return athlete.fname
  end

  def lname
    return athlete.lname
  end

  def athlete_profile_picture
    return athlete.profile_picture.url
  end

  def duration_in_seconds 
    return (self.hours * 3600) + (self.minutes * 60) + self.seconds
  end
  def speed
    if self.sport == 'run'
      float_pace = (duration_in_seconds / self.distance)  / 60.0
      pace_minutes = ((duration_in_seconds / self.distance) / 60).to_i
      pace_seconds =((60 * (float_pace - pace_minutes)) / 100.0).floor(2)
      return pace_minutes + pace_seconds
    else
      return ((self.distance / (duration_in_seconds / 3600) * 100) / 100.0).floor(2)
    end
  end

  def duration
    return "#{hours}:#{minutes}:#{seconds}"
  end

end
