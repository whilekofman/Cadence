class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'profilePictureUrl']

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def update
    @user = User.find(params[:id])
    if @user.id === current_user.id && @user.update(user_params)
      render :show
    else 
      render json: { errors: @user.errors.full_messages, status: :unprocessable_entity }
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password, :profile_picture_url)
  end

  def update_params
    params.require(:user).permit(:password, :profile_picture_url, :fname, :lname, :email)
  end
end
