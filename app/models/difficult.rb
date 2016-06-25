class Difficult < ActiveRecord::Base
  has_many :task, class_name: "Task",
                    foreign_key: "task_id"
  has_many :habit, class_name: "Habit",
                    foreign_key: "habit_id"
end
