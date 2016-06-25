class HabitsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_habit, only: [:show, :update, :destroy, :upvote_habit,
                                   :downvote_habit]
  before_action :set_xp_service, only: [:upvote_habit, :downvote_habit]

  def index
    @habits = current_user.habits
  end

  def new
    @habit = Habit.new
  end

  def create
    @habit = current_user.habits.new(habit_params)
    @habit.difficult = Difficult.first

    if @habit.save
      respond_to :js
    end
  end

  def upvote_habit
    xp = @xp_service.xp_increase_amout(@habit, current_user)
    current_user.experience += xp

    if current_user.save
      respond_to do |format|
        format.js { render :show }
      end
    end
  end

  def downvote_habit
    xp = @xp_service.xp_decrease_amout(@habit, current_user)
    current_user.experience -= xp

    if current_user.save
      respond_to do |format|
        format.js { render :show }
      end
    end
  end

  def update
    respond_to do |format|
      if @habit.update(habit_params)
        format.html { redirect_to @habit, notice: 'Habit was successfully updated.' }
        format.json { render :show, status: :ok, location: @habit }
      else
        format.html { render :edit }
        format.json { render json: @habit.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @habit.destroy
    render :show
  end

  private
    # Setting xp service responsible for habits
    def set_xp_service
      @xp_service = HabitExperienceService.new
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_habit
      @habit = current_user.habits.find_by(id: params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def habit_params
      params.permit(:description)
    end
end
