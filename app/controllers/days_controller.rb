class DaysController < ApplicationController
	def index
		render :json => Day.all
	end

	def show
		day = Day.where({:number => params[:day]}).first
		contents = []
		contents = Content.where({:day_id => day.id}) if day
		render :json => contents
	end
end
