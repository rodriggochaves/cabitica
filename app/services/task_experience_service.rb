class TaskExperienceService < ExperienceService
  def initialize
    @base_value = BaseValue.find_by(valuable: "Task").value
  end
end
