#Inspiracion: http://viatropos.com/blog/upload-images-to-imgur-with-ruby/
class Imgur

	API_Key = '331a18ad47fd24ad6096e1bdb5bae40d'

	attr_accessor :image, :response

	def upload
		data = {
			:key => Imgur::API_Key,
			:image => ActiveSupport::Base64.encode64(self.image.read)
		}
		self.response = ::JSON.parse(RestClient.post('http://api.imgur.com/2/upload.json', data, :content_type => :json, :accept => :json))
		!self.response.nil?
	end

end
