class DropTaskDifficultsTable < ActiveRecord::Migration
  def change
    drop_table :task_difficults
  end
end
