class RemoveReviewIdFromProduct < ActiveRecord::Migration
  def change
    remove_column :products, :review_id, :integer
  end
end
