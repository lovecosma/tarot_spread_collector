class CreateSpreads < ActiveRecord::Migration[6.1]
  def change
    create_table :spreads do |t|
      t.string :type
      t.string :name
      t.timestamps
    end
  end
end
