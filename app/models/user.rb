# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  weight          :float
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password

  validates :fname, :lname, length: { in: 1..18 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..20, allow_nil: true }
  # validates :date_of_birth, :sex, presence: true
  # TODO when adding progile photo to db may add validation for presence here
  before_validation :ensure_session_token 
  
  
  
  def self.find_by_credentials(email, password)
  
    user = User.find_by(email: email)
    user&.authenticate(password)
  
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    return session_token
  end

  private 
  def generate_unique_session_token
    loop do
      session_token = SecureRandom.base64 
      return session_token unless User.exists?(session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end

