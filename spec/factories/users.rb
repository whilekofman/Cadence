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
FactoryBot.define do
  factory :user do
    fname { "MyString" }
    lname { "MyString" }
    email { "MyString" }
    date_of_birth { "2022-10-08" }
    weight { 1.5 }
    sex { "MyString" }
    password { "" }
    session_token { "MyString" }
  end
end
