json.order_items @order_items do |item|
  json.id item.id
  json.product_name item.product.name
  json.product_id item.product_id
  json.unit_price item.unit_price
  json.quantity item.quantity
  json.total_price item.total_price
  json.user_id item.user_id
end
 