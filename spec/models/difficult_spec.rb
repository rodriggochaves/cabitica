require 'rails_helper'

RSpec.describe Difficult, type: :model do
  it 'has a valid a factory' do
    expect(FactoryGirl.create(:difficult)).to be_valid
  end

  it '.tasks' do
    expect(FactoryGirl.create(:difficult))
  end
end
