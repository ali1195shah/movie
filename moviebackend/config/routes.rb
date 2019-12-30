Rails.application.routes.draw do
  resources :transactions
  resources :flims
  resources :users
  resources :login, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
