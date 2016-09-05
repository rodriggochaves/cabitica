class Difficult < ApplicationRecord
  has_many :tasks, class_name: "Task",
                    foreign_key: "difficult_id"
  has_many :habits, class_name: "Habit",
                    foreign_key: "difficult_id"
end
