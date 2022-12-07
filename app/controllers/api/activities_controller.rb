class Api::ActivitiesController < ApplicationController
    wrap_parameters include: Activity.attribute_names + ["athleteId","startTime"]
    def index

        if params[:athlete].present?
            @activities = Activity.where(athlete_id: params[:athlete]).order(start_time: :desc).limit(3)
        else
            @activities = Activity.order(start_time: :desc).limit(3)
        end
        render :index
    end

    def show
        @activity = Activity.find(params[:id])
        if @activity
            render :show
        else
            render json: { errors: @activity.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def create
        @activity = Activity.new(activity_params)
        if @activity.save 
            render :show
        else
            render json: { errors: @activity.errors.full_messages, status: :unprocessable_entity }
        end
    end

    def destroy
        @activity = Activity.find(params[:id])
        if @activity
            @activity.destroy
            render json: { message: 'you did a delete' }
        else
            render json: { errors: @activity.errors.full_messages, status: :unprocessable_entity }
        end

    end

    def update
        
        @activity = Activity.find(params[:id])
        if @activity.athlete_id === current_user.id && @activity.update(activity_params)
            render :show
        else
            render json: { errors: @activity.errors.full_messages, status: :unprocessable_entity }
        end
    end

    private
    def activity_params
        params.require(:activity).permit(:id, :athlete_id, :sport, :distance, :hours, :minutes, :seconds, :title, :intensity, :hr, :pnotes, :tags, :description, :purpose, :start_time)
    end
end
