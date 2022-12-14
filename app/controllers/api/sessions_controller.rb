class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      # render 'api/users/index'
      render 'api/users/show'
    else
      render json: { user: nil }
    end
  end

 def create
    @user = User.find_by_credentials(params[:credential], params[:password])

    if @user
      login!(@user)
      render 'api/users/show'
      # render 'api/users/index'

    else
      render json: { errors: ['The provided email or password were invalid.'] }, 
        status: :unauthorized
    end
  end 

  def destroy
    logout! 
    render json: { message: 'Log out successful' }
  end
end
