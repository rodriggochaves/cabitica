class ExperienceService
  def xp_increase_amout(objective, user)
    difficult = objective.difficult
    @base_value * difficult.xp_factor
  end

  def xp_decrease_amout(objective, user)
    difficult = objective.difficult
    @base_value * difficult.xp_factor
  end
end
