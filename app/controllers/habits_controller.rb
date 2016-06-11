class HabitsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_habit, only: [:show, :update, :destroy, :upvote_habit,
                                   :downvote_habit]

  def index
    @habits = current_user.habits
  end

  def new
    @habit = Habit.new
  end

  def create
    debugger
    @habit = current_user.habits.new(habit_params)

    if @habit.save
      respond_to :js
    end
  end

  def upvote_habit
    #calculate exp increase
  end

  def downvote_habit
    #calculate exp decrease
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
    # Use callbacks to share common setup or constraints between actions.
    def set_habit
      @habit = current_user.habits.find_by(id: params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def habit_params
      params.permit(:description)
    end
end
