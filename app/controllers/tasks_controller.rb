class TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_task, only: [:show, :destroy, :complete_task, 
                                  :remove_task]
  before_action :set_xp_service, only: [:complete_task]

  def index
    @tasks = current_user.tasks
  end

  def show
  end

  def create
    @task = current_user.tasks.new(task_params)
    @task.difficult = Difficult.first

    if @task.save
      respond_to :js
    end
  end

  def complete_task
    @task.completed = true

    xp = @xp_service.xp_increase_amout(@task, current_user)
    current_user.experience += xp

    if @task.save && current_user.save
      respond_to do |format|
        format.js { render :show }
      end
    end
  end

  def destroy
    @task.destroy 
    render :show
  end

  private
  # Setting xp service responsible for habits
  def set_xp_service
    @xp_service = TaskExperienceService.new
  end

  def task_params
    params.permit(:description)
  end

  def set_task
    @task = current_user.tasks.find_by(id: params[:id])
  end
end
