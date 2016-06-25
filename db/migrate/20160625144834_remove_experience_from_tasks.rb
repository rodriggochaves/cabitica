class RemoveExperienceFromTasks < ActiveRecord::Migration
  def change
    remove_column :tasks, :experience
  end
end
