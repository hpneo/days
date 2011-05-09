Days::Application.routes.draw do
	match '/days'		=> 'days#index'
	match '/days/:day'	=> 'days#show'
	root :to		=> 'home#index'
end
