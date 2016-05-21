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
    @task.experience = 10;

    if @task.save
      render :show
    end
  end

  def last_task
    @task = Task.last
    render :show
  end

  def complete_task
    @task.completed = true
    current_user.experience += @task.experience

    if @task.save && current_user.save
      render :show
    end
  end

  def remove_task
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
