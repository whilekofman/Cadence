# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Comment.destroy_all
  Activity.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  jennifer = User.create!(
    fname: 'Jennifer',
    lname: 'Parker',
    email: 'test@test.io', 
    password: 'password'
  )

  james = User.create!(
    fname: "James",
    lname: "Potter",
    email: 'etest@test.io',
    password: 'password'
  )

  eugene = User.create!(
    fname: 'Eugene',
    lname: 'Kofman',
    email: 'first@new.io',
    password: 'password'
  )

  ari= User.create!(
    fname: 'Ari',
    lname: 'Bortz',
    email: 'ari@new.io',
    password: 'password'
  )

  stuart= User.create!(
    fname: 'Stuart',
    lname: 'Fries',
    email: 'fries@new.io',
    password: 'password'
  )

  jim = User.create!(
    fname: 'Jim',
    lname: 'Bo',
    email: 'jim.bo@new.io',
    password: 'password'
  )
  puts 'do a do with an activity'
  run1 = Activity.create!(
      athlete_id: eugene.id, 
      sport: 'run', 
      distance: 3.12, 
      hours: 0, 
      minutes: 24, 
      seconds: 42, 
      title: '5k', 
      description: 'what happened to my endurance', 
      intensity: 3, 
      hr: 125.2, 
      purpose: 1, 
      start_time: '2022-10-01 13:29:18'
    )
    stuart_canada = Activity.create!(
      athlete_id: stuart.id, 
      sport: 'inline', 
      distance: 982.5, 
      hours: 99, 
      minutes: 22, 
      seconds: 14, 
      title: 'Ride to Canada', 
      description: 'Big WIN', 
      intensity: 4, 
      hr: 125, 
      purpose: 1, 
      start_time: '2022-09-29 9:29:18'
    )

      inline1 = Activity.create!(
      athlete_id: eugene.id, 
      sport: 'inline', 
      distance: 12.22, 
      hours: 1, 
      minutes: 15, 
      seconds: 12, 
      title: 'Busted my knee', 
      description: 'Took a spill on the wburg but still had a blast', 
      intensity: 6, 
      hr: 90, 
      purpose: 1, 
      start_time: '2022-10-12 20:29:18'
    )

    bike1 = Activity.create!(
      athlete_id: eugene.id, 
      sport: 'bike', 
      distance: 24.8, 
      hours: 2, 
      minutes: 18, 
      seconds: 42, 
      title: 'Good Ride', 
      description: '', 
      intensity: 6, 
      hr: 90, 
      purpose: 1, 
      start_time: '2022-10-08 9:29:18'
    )

    ari_inline = Activity.create!(
      athlete_id: ari.id, 
      sport: 'inline', 
      distance: 0.8, 
      hours: 0, 
      minutes: 06, 
      seconds: 00, 
      title: 'Airport ride to the gate', 
      description: '', 
      intensity: 0, 
      hr: 0, 
      purpose: 0, 
      start_time: '2022-8-01 11:00:18'
    )

    ari_inline2 = Activity.create!(
      athlete_id: ari.id, 
      sport: 'inline', 
      distance: 12, 
      hours: 1, 
      minutes: 20, 
      seconds: 41, 
      title: 'WNS', 
      description: '', 
      intensity: 0, 
      hr: 0, 
      purpose: 0, 
      start_time: '2022-6-05 14:29:18'
    )

    jim_inline1 = Activity.create!(
      athlete_id: jim.id, 
      sport: 'inline', 
      distance: 100, 
      hours: 12, 
      minutes: 43, 
      seconds: 41, 
      title: '100 mile anual ride', 
      description: '', 
      intensity: 0, 
      hr: 0, 
      purpose: 0, 
      start_time: '2022-6-05 14:29:18'
    )

    stuart_bike = Activity.create!(
      athlete_id: stuart.id, 
      sport: 'bike', 
      distance: 25.2, 
      hours: 2, 
      minutes: 25, 
      seconds: 11, 
      title: 'Ride with Eugene', 
      description: 'Great peloton', 
      intensity: 4, 
      hr: 125, 
      purpose: 1, 
      start_time: '2022-10-08 9:29:18'
    )
    puts 'do a do with comments'
      comment_1 = Comment.create!(
        author_id: jim.id,
        activity_id: stuart_bike.id,
        body: "Sorry I couldn't join!"
      )
      comment_2 = Comment.create!(
        author_id: stuart.id,
        activity_id: jim_inline1.id,
        body: 'I forgot to record on Mine!'
      )

      comment_3 = Comment.create!(
        author_id: ari.id,
        activity_id: inline1.id,
        body: 'What happened to your knee!?'
      )

      comment_4 = Comment.create!(
        author_id: jim.id,
        activity_id: jim_inline1.id,
        body: 'No problem Stuart, I know you were there'
      )
      comment_5 = Comment.create!(
        author_id: stuart.id,
        activity_id: jim_inline1.id,
        body: 'But the world doesnt!'
      )

  # More users
  # 10.times do
  #   full_name = Faker::Movies::BackToTheFuture.character
  #   split_full_name = full_name.split(" ") 
    
  #   User.create!({
    
  #     fname: split_full_name.first,
  #     lname: split_full_name.last,
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   }) 
  # end

  # puts "Done!"
end