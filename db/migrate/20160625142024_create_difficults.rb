class CreateDifficults < ActiveRecord::Migration
  def change
    create_table :difficults do |t|
      t.string :description
      t.decimal :xp_factor, precision: 5, scale: 2

      t.timestamps null: false
    end
  end
end
