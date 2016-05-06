class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :lang
      t.float :price
      t.date :pubdate
      t.text :cover
      t.integer :likes
      t.integer :dislikes
      t.integer :review_id
      t.text :description
      t.string :edit_btn
      t.string :delete_btn
      t.boolean :show_input

      t.timestamps
    end
  end
end
