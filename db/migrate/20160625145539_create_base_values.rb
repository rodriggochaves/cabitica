class CreateBaseValues < ActiveRecord::Migration
  def change
    create_table :base_values do |t|
      t.string :valuable
      t.integer :value
    end
  end
end
