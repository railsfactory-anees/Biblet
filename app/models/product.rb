class Product < ActiveRecord::Base
	has_many :reviews, dependent: :destroy
	has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/mayavi.jpg"
   # validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
    validates_attachment :avatar,content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
    has_many :order_items
end
