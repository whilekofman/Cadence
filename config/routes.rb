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


# h = Activity.new(athlete_id: 1, sport: 'run', distance: 3.12, hours: 0, minutes: 24, seconds: 42, title: '5k', description: 'what happened to my indurance', intensity: 3, hr: 125.2, purpose: 1, start_time: '2022-10-01 13:29:18')