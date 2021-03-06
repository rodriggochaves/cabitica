require 'rails_helper'

RSpec.describe Difficult, type: :model do
  it 'has a valid a factory' do
    expect(FactoryGirl.create(:difficult)).to be_valid
  end

  it 'has many tasks' do
    should have_many(:tasks) 
  end

  it 'has many habits' do
    should have_many(:habits)
  end
end
