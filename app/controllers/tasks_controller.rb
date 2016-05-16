class TasksController < ApplicationController
  before_action :set_task, only: [:show, :complete_task]

  def index
    @tasks = Task.all
  end

  def show
  end

  def create
    @task = Task.new(task_params)
    @task.completed = false

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
