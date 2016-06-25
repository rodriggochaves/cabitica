# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#


User.create!(email: "admin@cjr.org.br", password: "admin123")

Difficult.create(description: "Trivial", xp_factor: 0.5)
Difficult.create(description: "Fácil", xp_factor: 1.0)
Difficult.create(description: "Médio", xp_factor: 1.5)
Difficult.create(description: "Díficil", xp_factor: 2.0)

BaseValue.create(valuable: "Task", value: 10)
BaseValue.create(valuable: "Habit", value: 5)
