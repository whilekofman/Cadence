class Api::CommentsController < ApplicationController
  wrap_parameters include: Comment.attribute_names + ['body', 'activityId', 'authorId', 'id' ]

  def index

    
    if params[:activity_ids].present?
      activity_ids = params[:activity_ids].split(",")
      @comments = Comment.where(activity_id: activity_ids)

    else

      @comments = Comment.all
    end

    render :index
  end


  def show
    @comment = Comment.find_by(activity_id:, id: params[:id])

    render :show
  end

  def create
    # @activity = Activity.find(params[:activity_id])
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show#json: {success: "comment saved"}
    else
      render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

 
    def destroy
        @comment = Comment.find(params[:id])
        if @comment
            @comment.destroy
            render json: { message: 'you did a delete'}
        else
            render json: { errors: @comment.errors.full_messages, status: :unprocessable_entity }
        end
    end

  private 

  def comment_params
    params.require(:comment).permit(:id, :body, :author_id, :activity_id)
  end
end