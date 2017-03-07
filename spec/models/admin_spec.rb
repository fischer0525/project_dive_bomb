require 'rails_helper'

# As an admin
# I want to be able to delete bars and reviews
# So that no one posts any inappropriate content
#
# * Admin is created through developers adding them into the database 
#   and changing the admin attribute to true

describe "#admin?" do
  it "is not an admin if the role is not admin" do
    user = FactoryGirl.create(:user, admin: false)
    expect(user.admin?).to eq(false)
  end

  it "is an admin if the role is admin" do
    user = FactoryGirl.create(:user, admin: true)
    expect(user.admin?).to eq(true)
  end
end
