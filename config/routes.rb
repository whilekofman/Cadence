Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    
    resources :users, only: [:create, :index, :show] 

    resources :activities, only: [:index, :show, :create, :update, :destroy] do
      get :index, on: :collection
    end 
    
    # get 'activities/user/:user_id' to: 'posts#index'
      # resources :comments, only: [:activity_comments_index, :index]  
    # end
    
    resources :comments, only: [:index, :create, :upddate, :destroy, :show] 

    resources :likes, only: [:index, :create, :destroy]
    # do
    #   get :index, on: :collection
    # end
    
    resource :session, only: [:show, :create, :destroy]

  end
  get '*path', to: 'static_page#frontend_index'
end


# h = Activity.new(athlete_id: 1, sport: 'run', distance: 3.12, hours: 0, minutes: 24, seconds: 42, title: '5k', description: 'what happened to my indurance', intensity: 3, hr: 125.2, purpose: 1, start_time: '2022-10-01 13:29:18')