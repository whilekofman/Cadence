class Api::FollowsController < ApplicationController
    wrap_parameters include: Follow.attribute_names + ['followingId', 'followerId', 'id']


    def index
        # http://localhost:5000/api/users/3/follows?type= followers || following
        user = User.find(params[:user_id])
        
        case params[:type].downcase
        when 'followers'
            @follows =  Follow.where(following_id: user.id)
        when 'following'
            @follows = Follow.where(follower_id: user.id)
        end
        # @follows = Follow.where(follower_id: user.id)
        # debugger
        render :index

    end
    
    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render json: { message: "Successfully followed" }
        else
            render json: { message: @follow.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        if @follow
            @follow.destroy
            render json: { message: "Successfully unfollowed" }
        else
            render json: { message: @follow.errors.full_messages }, status: :unprocessable_entity
        end
    end

        
        
    
    def follow_params
        params.require(:follow).permit(:id, :follower_id, :following_id)
    end
end
