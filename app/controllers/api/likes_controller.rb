class Api::LikesController < ApplicationController
    wrap_parameters include: Like.attribute_names + ["likerId", "likeableId", "likeableType"]

    def index
        # likeable_type = params[:likeable]
        # likeable_ids = params[:ids]
        if params[:likeable].present? && params[:ids].present?
            type = params[:likeable]
            # debugger
            ids = params[:ids].split(',')
        # elsif params[:likeable].present?
        #     @likes = Like.where(likeable_type: params[:likeable])
        #     render :index
        #     return
        end
        if type == 'activity'
            @likes = Like.where(likeable_type: :Activity)
                .where(likeable_id: ids)
        elsif type == 'comment'
            debugger
            @likes = Like.where(likeable_type: :Comment)
                .where(likeable_id: ids)
                
        else
            @likes = Like.all
        end
        
        render :index
        # if params[:likeable].present?
            
            
        #     case params[:likeable]
                
        #     when "Comment"
        #         @likes = Like.where(likeable_type: :Comment)
        #         debugger
        #     when "Activity"
        #         @likes = Like.where(likeable_type: :Activity)
                
                
        #     else
        #         @likes = "error: sorry"
        #     end
        #     debugger
        #     render :index
        


                #['Activity', 'Comment'])
        # end
        # render json: {message: "sorry not sorry"}

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
