class CommentsController < ApplicationController

  def create
    @spot = Spot.find(params[:spot_id])
    @comment = @spot.comments.create(merge_params)
    redirect_to spot_path(@spot)
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :username)
  end

  def merge_params
    comment_params.merge(username: current_user.username)
  end
end