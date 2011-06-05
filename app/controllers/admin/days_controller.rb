class Admin::DaysController < ApplicationController
	layout 'admin'

	def index
	end

	def show
	end

	def new
		@day = Day.new
	end

	def create
		@day = Day.new(params[:day])
		if @day.save
			redirect_to edit_admin_day_path(@day)
		end
	end

	def edit
		@day = Day.find(params[:id])
		@contents = Content.where({:day_id => @day.id}).all
		@content = Content.new({:day_id => @day.id})
	end

	def update
	end

	def destroy
	end

end
