class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    
  end
  def create
    puts "inside review create"
    @review = Review.new(review_params)
    @review.save 
    render :nothing=>true
  end
  private
   def review_params
    params.require(:review).permit(:id,:name,:star,:comments,:product_id)
  end
end
