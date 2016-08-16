FactoryGirl.define do
  factory :difficult do |d|
    d.description { Faker::Difficult.description }
    d.xp_factor { Faker::Number.decimal(2) }
  end
end
