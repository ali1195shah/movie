class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :cc_number, :cc_s_code#, :password_digest
  has_many :transactions
  # I don't want to see the password.
end
