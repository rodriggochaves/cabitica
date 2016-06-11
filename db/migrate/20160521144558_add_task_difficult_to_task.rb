class AddTaskDifficultToTask < ActiveRecord::Migration
  def change
    add_reference :tasks, :task_difficult, index: true, foreign_key: true
  end
end
