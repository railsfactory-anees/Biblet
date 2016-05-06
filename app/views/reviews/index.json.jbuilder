json.reviews @reviews do |review|
  json.id review.id
  json.name review.name
  json.star review.star
  json.comments review.comments
  json.product_id review.product_id
 end
 