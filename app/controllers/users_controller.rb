class UsersController < ApplicationController

   def create
        user = User.new(user_params)
        if user.save
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, :status => :unprocessable_entity
        end
   end

   def show
        render json: User.find(params[:id]), status: :ok
   end







   private  

   def user_params  
        params.require(:user).permit(:username, :password, :password_confirmation)
   end




end
