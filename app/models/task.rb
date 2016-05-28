class Task < ActiveRecord::Base
  belongs_to :user
  belongs_to :difficult, class_name: "TaskDifficult", 
                         foreign_key: "task_difficult_id"
end
