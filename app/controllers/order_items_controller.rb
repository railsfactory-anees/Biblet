class OrderItemsController < ApplicationController
  def index
    puts current_user.id  
    @order_items = OrderItem.where(user_id: current_user.id)
    #@order_items = OrderItem.all
    #@order_items = current_order.order_items
  end
  def create
    @order = current_order
    puts params[:cart][:user_id]
    @order_item = @order.order_items.new(order_item_params)
    @order_item.user_id = current_user.id
    @order_item.quantity = 1 ;
    #quantity: params[:cart][:quantity],product_id: params[:cart][:product_id]
    @order.save
    session[:order_id] = @order.id
    render :nothing=>true
  end
  def update
    puts "inside update......"
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items
  end

  def destroy
    @order = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items
  end

  private
  
  def order_item_params
    params.require(:cart).permit(:quantity, :product_id, :user_id)
  end
end
