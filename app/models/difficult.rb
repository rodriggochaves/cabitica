class Difficult < ActiveRecord::Base
  has_many :task, class_name: "Task",
                    foreign_key: "task_id"
end
