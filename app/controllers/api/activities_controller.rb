class Api::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all.order('start_time DESC')
        render :index
        # if params[:user_id] != nil
        #     @activities.athlete_id = params[athlete_id: user_id: :user_id]
        #     debugger
        #     @activities = Activity.where(athlete_id: params[@activity.athlete_id])
        #     # render :index
        # else
        #     #@activities = Activity.all
        #     #debugger
        #     # render :
        # end
        #.order('desc') 

    end

    def show
        @activity = Activity.find(params[:id])
        if @activity
            render :show
        else
            render json: { errors: @activity.errors.full_messages }, status: :unprocessable_entity
        end
        # @activity.athlete_id = current_user.id

        # @activity = Activity.find_by(athlete_id: params[@activity.athlete_id])

    end

    def create
        @activity = Activity.new(activity_params)
        if @activity.save 
            render :show
        else
            render json: { errors: @activity.errors.full_messages, status: :unprocessable_entity }
        end
        # @activity.athlete_id = current_user.id
        # if activity.save
        #     redirect_to Something_path

    end

    def destroy
        @activity = Activity.find(params[:id])
        if @activity
            @activity.destroy
            head :no_content
        else
            render json: { errors: @activity.errors.full_messages, status: :unprocessable_entity }
        end

    end

    def update
        # debugger
        @activity = Activity.find(params[:id])
        if @activity.athlete_id === current_user.id && @activity.update(activity_params)
            # debugger
            render :show
        else
            render json: { errors: @activity.errors.full_messages, status: :unprocessable_entity }
        end
    end

    private
    def activity_params
        params.require(:activity).permit(:id, :athlete_id, :sport, :distance, :hours, :minutes, :seconds, :title, :intensity, :hr, :pnotes, :tags, :description, :purpose, :start_time, :created_at, :updated_at)
    end
end
