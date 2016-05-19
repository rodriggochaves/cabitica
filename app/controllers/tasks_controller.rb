class TasksController < ApplicationController
  before_action :set_task, only: [:show, :complete_task]

  def index
    @tasks = current_user.tasks
  end

  def show
  end

  def create
    @task = current_user.tasks.new(task_params)

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

    if @task.save
      render :show
    end
  end

  private
  def task_params
    params.permit(:description)
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
