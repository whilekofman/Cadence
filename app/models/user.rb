# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    has_secure_password

    # has_one_attached :profile_photo

    validates :fname, :lname, length: { in: 1..18 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..20, allow_nil: true }

    validates_uniqueness_of :follows, scope: [:follower_id, :following_id]

    # validates :date_of_birth, :sex, presence: true
    # TODO when adding progile photo to db may add validation for presence here
    has_one_attached :profile_picture

    before_validation :ensure_session_token

    has_many :activities, 
      class_name: :Activity,
      foreign_key: :athlete_id, 
      dependent: :destroy

    has_many :comments,
      class_name: :Comment,
      foreign_key: :author_id, 
      dependent: :destroy

    has_many :likes,
      class_name: :Like,
      foreign_key: :liker_id,
      dependent: :destroy
    
    
    has_many :follows, 
      class_name: :Follow, 
      foreign_key: :follower_id,
      dependent: :destroy

    has_many :following,
      through: :follows

    has_many :followed_by,
      class_name: :Follow,
      foreign_key: :following_id,
      dependent: :destroy
    
    has_many :followers,
      through: :followed_by,
      source: :follower


    def self.find_by_credentials(credential, password)
      field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :null
      user = User.find_by(field => credential)
      user&.authenticate(password) 
      
    end

    def reset_session_token!
      # self.session_token = generate_unique_session_token
      self.update!(session_token: generate_unique_session_token)
      self.session_token
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

