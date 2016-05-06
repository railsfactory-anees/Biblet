json.products @products do |product|
  json.id product.id
  json.name product.name
  json.lang product.lang
  json.price product.price
  json.pubdate product.pubdate
  json.reviews product.reviews
  json.avatar product.avatar
  json.quantity product.quantity
 end
 