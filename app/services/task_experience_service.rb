class TaskExperienceService
  def initialize
    @base_value = BaseValue.find_by(valuable: "Task").value
  end
  
  def xp_increase_amout(task, user)
    @base_value
  end
end
