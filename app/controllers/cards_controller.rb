class CardsController < ApplicationController

    def index
        render json: Card.all, status: :ok
    end

    def show
        card = Card.find(params[:id])
        if card 
            render json: card, :status => :ok
        else
            render json: {errors: "Card does not exist."}, status: :unprocessable_entity
        end
    end

end
