class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :category
      t.string :name
      t.string :name_short
      t.string :value
      t.integer :value_int
      t.string :meaning_up
      t.string :meaning_rev
      t.string :desc 
      t.timestamps
    end
  end
end
