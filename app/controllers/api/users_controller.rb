class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  def index
    @users = Users.all
    render :index

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
    params.require(:user).permit(:email, :fname, :lname, :password)
  end
end

# signupRequestOptions = {
#     method: 'POST',
#     headers: { 'Content-Type': 'application/json' },
#     body: JSON.stringify({ 
#       email: 'coolemail@hotmail.net', 
#       fname: 'star',
#       lname: 'wars',
#       password: 'starwars',
#       weight: '175.2'
#     })
#   }