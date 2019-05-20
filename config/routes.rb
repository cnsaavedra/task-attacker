Rails.application.routes.draw do
  root 'tasks#index'
  match '*path', to: 'tasks#index', via: :all
end
