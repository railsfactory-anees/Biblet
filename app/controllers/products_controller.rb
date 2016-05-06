class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:show, :edit,:create, :update, :destroy]
  respond_to :json



	def index
		@order_item = current_order.order_items.new
	  	if params[:lang]
	  		@products=Product.where(lang: params[:lang])
	  	else
	  		@products=Product.all
	  	end
	end
	def destroy
		@product=Product.find_by(id: params[:id])
		@product.destroy if @product
		head :no_content
	end
	def create
		puts "inside controller******************************"
		puts params[:name]
		
		@product = Product.new(name: params[:name],lang: params[:lang],price: params[:price],pubdate: params[:pubdate],avatar: params[:avatar],quantity: params[:quantity])
		@product.save if @product
		render :nothing=>true
	end
	def update
		@product=Product.find_by(id: params[:id])
		price=params[:product][:price]
		name=params[:product][:name]
		@product.update(name: name,price: price)
		render :nothing=>true
	end
		private
    def product_params
    params.require(:product).permit(:name, :lang, :price, :pubdate, :avatar,:quantity)
  end
end