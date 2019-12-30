class User < ApplicationRecord

    has_many :transactions
    has_many :transactions, dependent: :destroy
    has_many :flims

    has_many :my_transactions, through: :transactions,  source: :flim

    has_secure_password

    validates_presence_of :username
    validates_uniqueness_of :username, :case_sensitive => false

    # has_many :my_favorite_events, through: :favorite_events, source: :event
end
