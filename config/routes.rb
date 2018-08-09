Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'spa#index'

  constraints ->(request){ request.format == :json } do
    resources :companies
  end
  
  constraints ->(request){ request.format == :html } do
    get '*path', to: 'spa#index'
  end
end
