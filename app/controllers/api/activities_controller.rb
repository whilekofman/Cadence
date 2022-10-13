class Api::ActivitiesController < ApplicationController
    def index
        if params[user_id: :id] != nil
            @activity.athlete_id = params[:users], params[:id]
            debugger
            @activities = Activity.find_by(athlete_id: params[@activity.athlete_id])
            # render :index
        else
            @activities = Activity.all
            debugger
            # render :
        end


        

        render :index
    end

    def show
        @activity.athlete_id = current_user.id

        @activity = Activity.find_by(athlete_id: params[@activity.athlete_id])

    end

    def create
        @activity = Activity.new(activity_params)
        @activity.athlete_id = current_user.id
        # if activity.save
        #     redirect_to Something_path

    end

    def show 

    end

    def destroy
    end

    def edit

    end

    private
    def activity_params
        params.require(:activity).permit(:athlete_id, :sport, :distance, :hours, :minutes, :seconds, :title, :intensity, :hr, :pnotes, :tags, :description, :purpose, :start_time, :created_at, :updated_at)
    end
end
