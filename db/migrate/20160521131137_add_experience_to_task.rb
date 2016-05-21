class AddExperienceToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :experience, :integer
  end
end
