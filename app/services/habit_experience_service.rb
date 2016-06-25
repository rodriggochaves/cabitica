class HabitExperienceService
  def initialize
    @base_value = BaseValue.find_by(valuable: "Habit").value
  end
  
  def xp_increase_amout(habit, user)
    difficult = habit.difficult
    @base_value * difficult.xp_factor
  end

  def xp_decrease_amout(habit, user)
    # TODO add difficult to habit
    difficult = habit.difficult
    @base_value * difficult.xp_factor
  end
end
