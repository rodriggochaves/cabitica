class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def show
    @task = Task.find(params[:id])
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render :show
    end
  end

  def last_task
    @task = Task.last
    render :show
  end

  private
  def task_params
    params.permit(:description)
  end
end
