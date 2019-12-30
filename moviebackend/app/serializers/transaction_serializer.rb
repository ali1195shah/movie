class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :user, :flim
  # has_one :user
  has_one :flim
end
