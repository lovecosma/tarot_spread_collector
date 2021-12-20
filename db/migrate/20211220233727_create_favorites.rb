class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :title
      t.belongs_to :user
      t.belongs_to :card
      t.timestamps
    end
  end
end
