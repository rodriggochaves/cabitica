class ChangeTaskDifficultReference < ActiveRecord::Migration
  def change
    remove_column :tasks, :task_difficult
    add_reference :tasks, :difficult, index: true, foreign_key: true
  end
end
