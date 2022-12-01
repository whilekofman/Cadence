class Api::LikesController < ApplicationController

    private
    def like_params
        params.require(:like).permit(:id, likeable: [:comment_id, :activity_id])

    end
end
