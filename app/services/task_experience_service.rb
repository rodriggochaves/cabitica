class TaskExperienceService
  def initialize
    @base_value = BaseValue.find_by(valuable: "Task").value
  end
  
  def xp_increase_amout(task, user)
    difficult = task.difficult
    @base_value * difficult.xp_factor
  end
end
