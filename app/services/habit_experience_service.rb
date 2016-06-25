class HabitExperienceService < ExperienceService
  def initialize
    @base_value = BaseValue.find_by(valuable: "Habit").value
  end
end
