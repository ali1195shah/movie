class TransactionsController < ApplicationController

    def index
        transactions = Transaction.all
        render json: transactions
    end

    def show
        transaction = Transaction.find_by(id: params[:id])
        render json: transaction
    end

    def create
        transaction = Transaction.create(transaction_params)
        if transaction.valid?
            render json: transaction
        else
            render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        transaction = Transaction.find(params[:id])
        if transaction.update(transaction_params)
          render json: transaction.to_json
        else
          render json: transaction.errors, status: :unprocessable_entity
        end 
      end
    
      def destroy
        transaction.destroy(params[:id])
      end

    private

    def transaction_params
        params.permit(:user_id, :flim_id)
    end
    
end
