module ApplicationHelper
	def title
		count = Day.count
		if count==1
			"(#{count}) day"
		else
			"(#{count}) days"
		end
	end
end
