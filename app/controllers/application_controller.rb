 class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #respond_to :json
  respond_to :json, :html

  protect_from_forgery with: :exception
  rescue_from ActionController::InvalidAuthenticityToken do |exception|
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
      render text: 'Invalid authenticity token', status: :unprocessable_entity
  end
  

  helper_method :current_order

  def current_order
    if !session[:order_id].nil?
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  

end
