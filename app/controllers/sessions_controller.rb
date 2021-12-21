class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else   
            render json: {errors: user.errors.full_messages}
        end
    end


    def logout
       session.clear
    end







end
