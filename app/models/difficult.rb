class Difficult < ActiveRecord::Base
  has_many :tasks, class_name: "Task",
                    foreign_key: "difficult_id"
  has_many :habit, class_name: "Habit",
                    foreign_key: "habit_id"
end
