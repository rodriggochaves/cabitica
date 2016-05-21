class Task < ActiveRecord::Base
  belongs_to :user
  has_one :task_difficult
end
