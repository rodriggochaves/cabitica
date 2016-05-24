json.array!(@habits) do |habit|
  json.extract! habit, :id, :description, :user_id
  json.url habit_url(habit, format: :json)
end
