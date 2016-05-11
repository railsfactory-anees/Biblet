Rails.application.routes.draw do

 
  # get 'order_items/create'

  # get 'order_items/update'

  # get 'order_items/destroy'

  get 'carts/show'

  get 'products/index'

 # devise_for :users, :controllers => {
   
 #    passwords: "passwords",
 #    registrations: "registrations",
 #    sessions: "sessions"
 #  }
 #   devise_scope :user do
 #    get "/users/new" => "devise/registrations#new"
 #    # get "/users/:id/edit" => "devise/registrations#edit", as: 'edit_user'
 #    # get 'users/sign_out' => "devise/sessions#destroy"
 #    authenticated :user do
 #      root 'application#index', as: :authenticated_root
 #    end
 #    unauthenticated do
 #      root 'devise/sessions#new', as: :unauthenticated_root
 #    end
 #  end
 #  root 'devise/sessions#new'


  devise_for :users
   devise_scope :user do
    get "/users/new" => "devise/registrations#new"
    get "/users/:id/edit" => "devise/registrations#edit", as: 'edit_user'
    get 'users/sign_out' => "devise/sessions#destroy"
    authenticated :user do
      root 'application#index', as: :authenticated_root
    end
    unauthenticated do
      root 'application#index', as: :unauthenticated_root
    end
  end
  root 'application#index'

  #root 'application#index'
  # get '*path' => 'application#index'
  resources :products
  resources :reviews
  resource :cart, only: [:index, :show]
  resources :order_items, only: [:create, :update, :destroy, :index]
  resources :user_steps
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
