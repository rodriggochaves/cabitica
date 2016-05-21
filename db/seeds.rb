# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#


User.create!(email: "admin@cjr.org.br", password: "admin123")

TaskDifficult.create(description: "Trivial", experience_scale: 0.5)
TaskDifficult.create(description: "Fácil", experience_scale: 1.0)
TaskDifficult.create(description: "Médio", experience_scale: 1.5)
TaskDifficult.create(description: "Díficil", experience_scale: 2.0)