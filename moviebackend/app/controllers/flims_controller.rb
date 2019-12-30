class FlimsController < ApplicationController
    
    def index
        flims = Flim.all
        render json: flims
    end

    def show
        flim = Flim.find(params[:id])
        render json: flim
    end

    def create
        flim = Flim.create(flim_params)
        if flim.valid?
            render json: flim
        else
            render json: { errors: flim.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def flim_params
        params.permit(:title, :poster_img)
    end

end







