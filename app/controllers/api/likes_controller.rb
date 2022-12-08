class Api::LikesController < ApplicationController
    wrap_parameters include: Like.attribute_names + ["likerId", "likeableId", "likeableType"]

    def index
        @likes = Like.where(likeable_type: ['Activity', 'Comment'])
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            # render :show
            render json: {message: "Successfully added a like"} 
        else
            render json: { errors: @like.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find(params[:id])
        if @like
            @like.destroy
            render json: { message: 'you no longer like this' }
        end
    end

    private
    def like_params
        # params.require(:like).permit(:id, :liker, likeable: [:comment_id, :activity_id])
        params.require(:like).permit(:id, :liker_id, :likeable_id, :likeable_type)# [:comment_id, :activity_id])
    end
end
