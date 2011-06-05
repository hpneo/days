class Admin::HomeController < ApplicationController
	layout 'admin'

	def index
		@days = Day.all
		@days ||= []
	end

end
