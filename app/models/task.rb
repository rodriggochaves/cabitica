class Task < ApplicationRecord
  scope :not_completed, -> { where(completed: false) }
  belongs_to :user
  belongs_to :difficult, class_name: "Difficult", 
                         foreign_key: "difficult_id"
end
