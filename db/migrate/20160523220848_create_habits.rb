class CreateHabits < ActiveRecord::Migration
  def change
    create_table :habits do |t|
      t.string :description
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
