class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  validates :title, presence: true
  validates :city, presence: true
  validates :address, presence: true
  validates :avatar, presence: true
end
