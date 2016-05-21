class AddExperienceToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :experience, :decimal
  end
end
