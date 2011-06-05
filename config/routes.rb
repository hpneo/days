Days::Application.routes.draw do
	match '/days'		=> 'days#index'
	match '/days/:day'	=> 'days#show'

	namespace :admin do
		resources :days
		resources :contents
		match '/' => 'home#index', :as => :home
	end
	root :to		=> 'home#index'
end
