Rails.application.routes.draw do
  scope :api do
    resources :spreads
    resources :cards
    resources :users
    post "/sessions", to: "sessions#login"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
