Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    
    resources :users, only: [:create, :index, :show] 
    # do
    #   resources :activities, only: [:index]
    # end

    # resources :activities, only: [:index]
    
    resources :activities, only: [:index, :show]#, :create, :edit, :destroy]
    
    resource :session, only: [:show, :create, :destroy]
  end
end
