class CartsController < ApplicationController
	 skip_before_action :verify_authenticity_token, only: [:show]
     respond_to :json
    def index
    	#@order_items = OrderItem.where(user_id: current_user.id)
    	@order_items = OrderItem.all
    	
    end
	def show
		# @order_items = current_order.order_items
		@order_items = OrderItem.all
	end
	
	# def create
	# 	puts "inside controller create******************************"
	# 	@order_item = OrderItem.new(order_item_params)
	# 	@order_item.save if @order_item
	# 	console.log("order item saved");
	# 	render :nothing=>true
	# end
	# private
 #    def order_item_params
 #         params.require(:order_item).permit(:product_id, :order_id, :unit_price, :quantity, :total_price)
 #  end
end
