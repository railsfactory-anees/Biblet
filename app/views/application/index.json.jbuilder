json.products @products do |product|
  json.id product.id
  json.name product.name
  json.lang product.lang
  json.price product.price
  json.pubdate product.pubdate
  json.reviews product.reviews
 end