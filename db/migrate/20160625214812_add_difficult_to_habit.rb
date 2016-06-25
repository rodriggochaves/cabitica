class AddDifficultToHabit < ActiveRecord::Migration
  def change
    add_reference :habits, :difficult, index: true, foreign_key: true
  end
end
