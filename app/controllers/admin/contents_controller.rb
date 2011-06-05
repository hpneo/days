class Admin::ContentsController < ApplicationController
	layout 'admin'

	def index
	end

	def show
	end

	def new
		@content = Content.new
	end

	def create
		if params[:content][:content_type]=="image"
			imgur = Imgur.new
			imgur.image = params[:content][:content]
			if imgur.upload
				params[:content][:content] = imgur.response['upload']['links']['large_thumbnail']
				content = Content.new(params[:content])
				if content.save
					redirect_to edit_admin_day_path(content.day_id)
				end
			else
				render :text => "error"
			end
		end
		#@content = Content.new(params[:content])
		#@content.save
	end

	def edit
		@content = Content.find(params[:id])
	end

	def update
	end

	def destroy
	end

end
