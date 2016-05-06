class AddUserRefToOrderItem < ActiveRecord::Migration
  def change
    add_reference :order_items, :user, index: true
  end
end
