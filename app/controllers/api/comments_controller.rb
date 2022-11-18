class Api::CommentsController < ApplicationController
  wrap_parameters include: Comment.attribute_names + ['body', 'activityId', 'authorId' ]

  def index
    @comments = Comment.includes(users: [:fname, :lname, :profile_picture]).where(activity_id: params[:activity_id])
    render :index
  end

#   def show
#     @comment = Comment.find(params[:id])
#     render :show
#   end

  def create
    # @activity = Activity.find(params[:activity_id])
    @comment = Comment.new(comment_params)
    if @comment.save
      render "api/activites/show"#json: {success: "comment saved"}
    else
      render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
        @activity = Activity.find(params[:activity_id])
        @comment = Comment.find(params[:comment_id])
        if @comment.save
            render "api/activities/show"
        else
            render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @comment = Comment.find(params[:comment_id])
        if @comment
            @comment.destroy
            render json: { message: 'you did a delete'}
        else
            render json: { errors: @comment.errors.full_messages, status: :unprocessable_entity }
        end
    end

  private 

  def comment_params
    params.require(:comment).permit(:id, :body)
    #, :author_id, :video_id)
  end
end