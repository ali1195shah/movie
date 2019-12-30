class UserSerializer < ActiveModel::Serializer
  attributes :id, :username#, :password_digest
  has_many :transactions
  # I don't want to see the password.
end
