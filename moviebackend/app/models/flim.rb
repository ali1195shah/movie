class Flim < ApplicationRecord
    
    has_many :transactions
    has_many :users, through: :transactions

    validates_presence_of :title
    validates_presence_of :poster_img

    has_many :transactions , dependent: :destroy
    has_many :transactions, through: :transactions, source: :user
end
