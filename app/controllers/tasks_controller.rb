class TasksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_task, only: [:show, :complete_task, :remove_task]

  def index
    @tasks = current_user.tasks
  end

  def show
  end

  def create
    @task = current_user.tasks.new(task_params)

    if @task.save
      respond_to :js
    end
  end

  def complete_task
    @task.completed = true

    if @task.save
      render :show
    end
  end

  def destroy
    @task.destroy 
    render :show
  end

  private
  def task_params
    params.permit(:description)
  end

  def set_task
    @task = current_user.tasks.find_by(id: params[:id])
  end
end
