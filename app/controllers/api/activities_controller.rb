class Api::ActivitiesController < ApplicationController
    def index
        @activities = Activity.all
        render :index
    end

    def show

    end

    def create
    end

    def show 

    end

    def destroy
    end

    def edit

    end
end
