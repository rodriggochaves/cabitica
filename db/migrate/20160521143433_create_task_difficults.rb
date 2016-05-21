class CreateTaskDifficults < ActiveRecord::Migration
  def change
    create_table :task_difficults do |t|
      t.string :description
      t.decimal :experience_scale, precision: 5, scale: 2

      t.timestamps null: false
    end
  end
end
