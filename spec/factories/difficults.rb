require 'faker'

FactoryGirl.define do
  factory :difficult do |d|
    d.description { ['Easy', 'Medium', 'Hard'].shuffle.first }
    d.xp_factor { Faker::Number.decimal(2) }
  end
end
