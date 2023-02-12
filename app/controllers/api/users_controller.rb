class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password', 'profilePictureUrl', ':profilePicture']

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
    if params[:user].has_key?(:profile_picture)
      new_profile_picture = params[:user][:profile_picture]
      @user.profile_picture.attach(new_profile_picture)
      # @user.profile_picture.attach(params[:profile_picture])
      @user.save
    end
    if @user.save
      render :show
    else 
      render json: { errors: @user.errors.full_messages, status: :unprocessable_entity }
    end
    

    

    # if @user.id === current_user.id && @user.update(user_params)
    #   render :show
    # else 
    #   render json: { errors: @user.errors.full_messages, status: :unprocessable_entity }
    # end
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
    params.require(:user).permit(:email, :fname, :lname, :password, :profile_picture_url, :profile_picture)
  end

  def update_params
    params.require(:user).permit(:password, :profile_picture_url, :fname, :lname, :email)
  end
end
