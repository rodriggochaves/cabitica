class HabitExperienceService
  def initialize
    @base_value = BaseValue.find_by(valuable: "Habit").value
  end
  
  def xp_increase_amout(habit, user)
    @base_value
  end

  def xp_decrease_amout(habit, user)
    @base_value
  end
end
