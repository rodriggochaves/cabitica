class Task < ActiveRecord::Base
  scope :not_completed, -> { where(completed: false) }
  belongs_to :user
  belongs_to :difficult, class_name: "TaskDifficult", 
                         foreign_key: "task_difficult_id"
end
