class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @comment
            @comment.destroy
            render json: { message: 'you no longer like this' }
        end
    end

    private
    def like_params
        # params.require(:like).permit(:id, :liker, likeable: [:comment_id, :activity_id])
        params.require(:like).permit(:id, :liker_id, :likeable_id, :likeable_type)# [:comment_id, :activity_id])


    end
end
