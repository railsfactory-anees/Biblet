class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :name
      t.integer :star
      t.text :comments

      t.timestamps
    end
  end
end
