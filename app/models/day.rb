class Day < ActiveRecord::Base
	before_create :assign_day

	def assign_day
		self.number = Day.count+1
	end
end
