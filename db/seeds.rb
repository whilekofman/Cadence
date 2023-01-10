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
  Follow.destroy_all
  Like.destroy_all
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
    lname: 'Skater',
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

  ada = User.create!(
    fname: "Ada", 
    lname: "Lovelace", 
    email: "alovelace@example.com", 
    password: "password"
  )
  
puts 'profile pictures'
jennifer_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/jennifer.png')
jennifer.profile_picture.attach(io: jennifer_profile_picture, filename: 'jennifer.png')

puts 'eugene'
eugene_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/49d3n1svubyfd3i7bt3a7gptfswo')
eugene.profile_picture.attach(io: eugene_profile_picture, filename: '49d3n1svubyfd3i7bt3a7gptfswo')

puts 'ada'
ada_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/ada.jpeg')
ada.profile_picture.attach(io: ada_profile_picture, filename: 'ada.jpeg')

puts 'stuart'
stuart_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/stuart.jpeg')
stuart.profile_picture.attach(io: stuart_profile_picture, filename: 'stuart.jpeg')

puts 'jim'
jim_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/jim.jpeg')
jim.profile_picture.attach(io: jim_profile_picture, filename: 'jim.jpeg')

puts 'james picture'
james_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/james.png')
james.profile_picture.attach(io: james_profile_picture, filename: 'james.png')

puts 'ari'
ari_profile_picture = URI.open('https://aa-cadence-dev.s3.amazonaws.com/ari2.png')
ari.profile_picture.attach(io: ari_profile_picture, filename: 'ari2.png')


puts 'do a do with an activity'

jennifer_activity_1 = Activity.create!(
                athlete_id: jennifer.id,
                sport: 'inline',
                distance: 13.07,
                hours: 2,
                minutes: 20,
                seconds: 5,
                title: 'Afternoon ride',
                description: '',
                intensity: 2,
                hr: 93,
                purpose: 1,
                start_time: '2022-12-4 15:08:20'
                )
jennifer_activity_2 = Activity.create!(
                athlete_id: jennifer.id,
                sport: 'ebike',
                distance: 16.94,
                hours: 1,
                minutes: 37,
                seconds: 52,
                title: 'Morning ride',
                description: 'Ride the lightning',
                intensity: 6,
                hr: 148,
                purpose: 0,
                start_time: '2023-1-3 06:49:32'
                )
jennifer_activity_3 = Activity.create!(
                athlete_id: jennifer.id,
                sport: 'run',
                distance: 12.78,
                hours: 2,
                minutes: 25,
                seconds: 37,
                title: 'Night run',
                description: 'Slower than expected',
                intensity: 0,
                hr: 112,
                purpose: 1,
                start_time: '2022-12-3 22:09:44'
                )
jennifer_activity_4 = Activity.create!(
                athlete_id: jennifer.id,
                sport: 'bike',
                distance: 12.75,
                hours: 0,
                minutes: 55,
                seconds: 8,
                title: 'Afternoon ride',
                description: '',
                intensity: 2,
                hr: 146,
                purpose: 1,
                start_time: '2023-1-2 15:31:16'
                )
james_activity_1 = Activity.create!(
                athlete_id: james.id,
                sport: 'run',
                distance: 18.32,
                hours: 3,
                minutes: 58,
                seconds: 58,
                title: 'Early morning training run',
                description: '18 out of a planned 15 miles',
                intensity: 4,
                hr: 162,
                purpose: 0,
                start_time: '2022-12-20 05:59:57'
                )
james_activity_2 = Activity.create!(
                athlete_id: james.id,
                sport: 'run',
                distance: 26.79,
                hours: 3,
                minutes: 34,
                seconds: 15,
                title: 'Marathon',
                description: 'Maaaaaaarathon',
                intensity: 2,
                hr: 175,
                purpose: 0,
                start_time: '2023-1-4 08:24:27'
                )
james_activity_3 = Activity.create!(
                athlete_id: james.id,
                sport: 'run',
                distance: 7.83,
                hours: 1,
                minutes: 35,
                seconds: 51,
                title: 'Recovery Run',
                description: '',
                intensity: 3,
                hr: 134,
                purpose: 0,
                start_time: '2023-1-5 12:55:38'
                )
james_activity_4 = Activity.create!(
                athlete_id: james.id,
                sport: 'run',
                distance: 20.05,
                hours: 1,
                minutes: 46,
                seconds: 23,
                title: 'Right on track',
                description: 'Almost time for my marathon',
                intensity: 1,
                hr: 114,
                purpose: 2,
                start_time: '2022-12-12 06:48:32'
                )
eugene_activity_1 = Activity.create!(
                athlete_id: eugene.id,
                sport: 'inline',
                distance: 15.99,
                hours: 1,
                minutes: 13,
                seconds: 31,
                title: 'Night ride',
                description: '',
                intensity: 1,
                hr: 175,
                purpose: 2,
                start_time: '2022-12-27 22:09:51'
                )
eugene_activity_2 = Activity.create!(
                athlete_id: eugene.id,
                sport: 'run',
                distance: 27.44,
                hours: 5,
                minutes: 58,
                seconds: 14,
                title: 'Slow marathon',
                description: '',
                intensity: 3,
                hr: 180,
                purpose: 1,
                start_time: '2023-1-4 08:32:30'
                )
eugene_activity_3 = Activity.create!(
                athlete_id: eugene.id,
                sport: 'inline',
                distance: 14.71,
                hours: 1,
                minutes: 9,
                seconds: 43,
                title: 'Winter Wednesday Night Skate',
                description: '',
                intensity: 0,
                hr: 105,
                purpose: 2,
                start_time: '2022-12-7 20:00:38'
                )
eugene_activity_4 = Activity.create!(
                athlete_id: eugene.id,
                sport: 'ebike',
                distance: 13.11,
                hours: 0,
                minutes: 51,
                seconds: 24,
                title: 'Electric feel',
                description: '',
                intensity: 0,
                hr: 88,
                purpose: 2,
                start_time: '2022-12-16 23:28:23'
                )
ari_activity_1 = Activity.create!(
                athlete_id: ari.id,
                sport: 'inline',
                distance: 5.37,
                hours: 0,
                minutes: 38,
                seconds: 48,
                title: 'Night ride',
                description: '',
                intensity: 6,
                hr: 122,
                purpose: 0,
                start_time: '2023-01-05 05:48:52'
                )
ari_activity_2 = Activity.create!(
                athlete_id: ari.id,
                sport: 'inline',
                distance: 23.42,
                hours: 3,
                minutes: 48,
                seconds: 5,
                title: 'Long skate',
                description: 'Training for skater migration',
                intensity: 4,
                hr: 176,
                purpose: 2,
                start_time: '2023-01-03 17:35:54'
                )
ari_activity_3 = Activity.create!(
                athlete_id: ari.id,
                sport: 'inline',
                distance: 24.85,
                hours: 3,
                minutes: 18,
                seconds: 41,
                title: 'Another long training Session',
                description: '',
                intensity: 8,
                hr: 125,
                purpose: 2,
                start_time: '2023-01-05 08:26:41'
                )
ari_activity_4 = Activity.create!(
                athlete_id: ari.id,
                sport: 'inline',
                distance: 12.61,
                hours: 1,
                minutes: 35,
                seconds: 10,
                title: 'Lunch ride',
                description: '',
                intensity: 1,
                hr: 112,
                purpose: 0,
                start_time: '2022-12-23 10:31:50'
                )
stuart_activity_1 = Activity.create!(
                athlete_id: stuart.id,
                sport: 'ebike',
                distance: 19.94,
                hours: 1,
                minutes: 43,
                seconds: 56,
                title: 'Lunch ride',
                description: '',
                intensity: 4,
                hr: 156,
                purpose: 2,
                start_time: '2022-12-19 13:41:09'
                )
stuart_activity_2 = Activity.create!(
                athlete_id: stuart.id,
                sport: 'inline',
                distance: 13.04,
                hours: 1,
                minutes: 8,
                seconds: 27,
                title: 'Morning ride',
                description: '',
                intensity: 9,
                hr: 139,
                purpose: 2,
                start_time: '2022-12-21 08:47:20'
                )
stuart_activity_3 = Activity.create!(
                athlete_id: stuart.id,
                sport: 'run',
                distance: 9.06,
                hours: 3,
                minutes: 51,
                seconds: 6,
                title: 'Morning run',
                description: 'Why am I running?',
                intensity: 9,
                hr: 153,
                purpose: 1,
                start_time: '2023-1-5 08:08:49'
                )
stuart_activity_4 = Activity.create!(
                athlete_id: stuart.id,
                sport: 'bike',
                distance: 15.00,
                hours: 1,
                minutes: 20,
                seconds: 18,
                title: 'Morning ride',
                description: '',
                intensity: 3,
                hr: 132,
                purpose: 0,
                start_time: '2023-1-4 09:04:43'
                )
jim_activity_1 = Activity.create!(
                athlete_id: jim.id,
                sport: 'inline',
                distance: 13.95,
                hours: 1,
                minutes: 2,
                seconds: 4,
                title: 'New years day eaaaarly morning ride',
                description: 'No sleep till Brooklyn',
                intensity: 3,
                hr: 168,
                purpose: 2,
                start_time: '2023-1-1 03:00:58'
                )
jim_activity_2 = Activity.create!(
                athlete_id: jim.id,
                sport: 'inline',
                distance: 24.28,
                hours: 2,
                minutes: 48,
                seconds: 12,
                title: 'Slow ride, take it easy...',
                description: '',
                intensity: 3,
                hr: 146,
                purpose: 1,
                start_time: '2023-1-1 12:33:23'
                )
jim_activity_3 = Activity.create!(
                athlete_id: jim.id,
                sport: 'inline',
                distance: 6.23,
                hours: 0,
                minutes: 51,
                seconds: 36,
                title: 'Lunch ride',
                description: '',
                intensity: 2,
                hr: 138,
                purpose: 1,
                start_time: '2022-12-17 11:06:15'
                )
jim_activity_4 = Activity.create!(
                athlete_id: jim.id,
                sport: 'inline',
                distance: 17.89,
                hours: 1,
                minutes: 38,
                seconds: 31,
                title: 'Lunch ride',
                description: '',
                intensity: 3,
                hr: 146,
                purpose: 0,
                start_time: '2023-1-4 11:37:20'
                )


ada_activity_1 = Activity.create!(
                athlete_id: ada.id,
                sport: 'bike',
                distance: 10.21,
                hours: 0,
                minutes: 56,
                seconds: 34,
                title: 'Evening ride',
                description: '',
                intensity: 6,
                hr: 130,
                purpose: 2,
                start_time: '2022-12-28 20:05:56'
                )
ada_activity_2 = Activity.create!(
                athlete_id: ada.id,
                sport: 'run',
                distance: 26.02,
                hours: 2,
                minutes: 38,
                seconds: 49,
                title: 'Fast Fast Fast',
                description: '',
                intensity: 3,
                hr: 83,
                purpose: 2,
                start_time: '2023-01-04 08:38:34'
                )
ada_activity_3 = Activity.create!(
                athlete_id: ada.id,
                sport: 'bike',
                distance: 16.00,
                hours: 1,
                minutes: 20,
                seconds: 1,
                title: 'Afternoon ride',
                description: '',
                intensity: 1,
                hr: 159,
                purpose: 1,
                start_time: '2022-12-1 17:34:03'
                )
ada_activity_4 = Activity.create!(
                athlete_id: ada.id,
                sport: 'inline',
                distance: 18.09,
                hours: 0,
                minutes: 9,
                seconds: 20,
                title: 'New years day skate',
                description: '',
                intensity: 1,
                hr: 94,
                purpose: 2,
                start_time: '2023-1-1 08:57:08'
                )
ada_activity_5 = Activity.create!(
                athlete_id: ada.id,
                sport: 'inline',
                distance: 11.94,
                hours: 1,
                minutes: 2,
                seconds: 20,
                title: 'Lunch ride',
                description: '',
                intensity: 4,
                hr: 175,
                purpose: 2,
                start_time: '2022-12-24 12:36:55'
                )




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
      start_time: '2022-12-01 13:29:18'
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
      start_time: '2022-12-29 9:29:18'
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
      start_time: '2022-12-12 20:29:18'
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
      start_time: '2022-12-08 9:29:18'
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
      start_time: '2022-12-22 11:00:18'
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
      start_time: '2022-12-05 14:29:18'
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
      start_time: '2022-12-05 14:29:18'
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
      start_time: '2022-12-08 9:29:18'
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
      comment_6 = Comment.create!(
    author_id: jennifer.id,
    activity_id: jennifer_activity_3.id,
    body: 'Wish I were there'     
    )
comment_7 = Comment.create!(
    author_id: eugene.id,
    activity_id: jennifer_activity_3.id,
    body: 'Kudos'     
    )
comment_8 = Comment.create!(
    author_id: jim.id,
    activity_id: jennifer_activity_4.id,
    body: 'Next time I\'m in'     
    )
comment_9 = Comment.create!(
    author_id: ari.id,
    activity_id: james_activity_1.id,
    body: 'Wish I were there'     
    )
comment_10 = Comment.create!(
    author_id: ari.id,
    activity_id: james_activity_1.id,
    body: 'Kudos'     
    )
comment_11 = Comment.create!(
    author_id: ada.id,
    activity_id: james_activity_2.id,
    body: 'Kudos'     
    )
comment_12 = Comment.create!(
    author_id: ada.id,
    activity_id: james_activity_2.id,
    body: 'Next time I\'m in'     
    )
comment_13 = Comment.create!(
    author_id: ari.id,
    activity_id: eugene_activity_3.id,
    body: 'Awesome'     
    )
comment_14 = Comment.create!(
    author_id: stuart.id,
    activity_id: eugene_activity_3.id,
    body: 'Great Work'     
    )
comment_15 = Comment.create!(
    author_id: ari.id,
    activity_id: eugene_activity_3.id,
    body: 'Next time I\'m in'     
    )
comment_16 = Comment.create!(
    author_id: jennifer.id,
    activity_id: eugene_activity_4.id,
    body: 'Great Work'     
    )
comment_17 = Comment.create!(
    author_id: jim.id,
    activity_id: eugene_activity_4.id,
    body: 'Kudos'     
    )
comment_18 = Comment.create!(
    author_id: jennifer.id,
    activity_id: stuart_activity_1.id,
    body: 'Wish I were there'     
    )
comment_19 = Comment.create!(
    author_id: jim.id,
    activity_id: stuart_activity_1.id,
    body: 'Wish I were there'     
    )
comment_20 = Comment.create!(
    author_id: eugene.id,
    activity_id: stuart_activity_1.id,
    body: 'Great Work'     
    )
comment_21 = Comment.create!(
    author_id: ari.id,
    activity_id: stuart_activity_2.id,
    body: 'WOW'     
    )
comment_22 = Comment.create!(
    author_id: jim.id,
    activity_id: stuart_activity_3.id,
    body: 'Fast'     
    )
comment_23 = Comment.create!(
    author_id: james.id,
    activity_id: stuart_activity_3.id,
    body: 'FANTASTIC'     
    )
comment_24 = Comment.create!(
    author_id: eugene.id,
    activity_id: stuart_activity_3.id,
    body: 'Fast'     
    )
comment_25 = Comment.create!(
    author_id: ada.id,
    activity_id: stuart_activity_3.id,
    body: 'Great Work'     
    )
comment_26 = Comment.create!(
    author_id: james.id,
    activity_id: jim_activity_1.id,
    body: 'Awesome'     
    )
comment_27 = Comment.create!(
    author_id: ari.id,
    activity_id: jim_activity_1.id,
    body: 'FANTASTIC'     
    )
comment_28 = Comment.create!(
    author_id: james.id,
    activity_id: jim_activity_1.id,
    body: 'Kudos'     
    )
comment_29 = Comment.create!(
    author_id: eugene.id,
    activity_id: jim_activity_3.id,
    body: 'Awesome'     
    )
comment_30 = Comment.create!(
    author_id: jennifer.id,
    activity_id: jim_activity_3.id,
    body: 'Great Work'     
    )
comment_31 = Comment.create!(
    author_id: stuart.id,
    activity_id: jim_activity_3.id,
    body: 'Next time I\'m in'     
    )
comment_32 = Comment.create!(
    author_id: eugene.id,
    activity_id: jim_activity_3.id,
    body: 'Kudos'     
    )
comment_33 = Comment.create!(
    author_id: james.id,
    activity_id: jim_activity_4.id,
    body: 'Awesome'     
    )
comment_34 = Comment.create!(
    author_id: ada.id,
    activity_id: jim_activity_4.id,
    body: 'Kudos'     
    )
comment_35 = Comment.create!(
    author_id: jim.id,
    activity_id: ada_activity_2.id,
    body: 'Fast'     
    )
comment_36 = Comment.create!(
    author_id: eugene.id,
    activity_id: ada_activity_2.id,
    body: 'Great Work'     
    )
comment_37 = Comment.create!(
    author_id: james.id,
    activity_id: ada_activity_2.id,
    body: 'WOW'     
    )
comment_38 = Comment.create!(
    author_id: ada.id,
    activity_id: ada_activity_2.id,
    body: 'Awesome'     
    )
comment_39 = Comment.create!(
    author_id: jim.id,
    activity_id: ada_activity_3.id,
    body: 'Next time I\'m in'     
    )

puts "do a do with liking activities"
activity_like_1 = Like.create!(
    liker_id: ada.id,
    likeable_id: run1.id,
    likeable_type: 'Activity'     
    )
activity_like_2 = Like.create!(
    liker_id: jim.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_3 = Like.create!(
    liker_id: james.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_4 = Like.create!(
    liker_id: stuart.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_5 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_6 = Like.create!(
    liker_id: eugene.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_7 = Like.create!(
    liker_id: ada.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_8 = Like.create!(
    liker_id: ari.id,
    likeable_id: stuart_canada.id,
    likeable_type: 'Activity'     
    )
activity_like_9 = Like.create!(
    liker_id: stuart.id,
    likeable_id: inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_10 = Like.create!(
    liker_id: ada.id,
    likeable_id: inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_11 = Like.create!(
    liker_id: jim.id,
    likeable_id: inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_12 = Like.create!(
    liker_id: eugene.id,
    likeable_id: inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_13 = Like.create!(
    liker_id: ari.id,
    likeable_id: inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_14 = Like.create!(
    liker_id: james.id,
    likeable_id: inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_15 = Like.create!(
    liker_id: jim.id,
    likeable_id: ari_inline.id,
    likeable_type: 'Activity'     
    )
activity_like_16 = Like.create!(
    liker_id: ada.id,
    likeable_id: ari_inline2.id,
    likeable_type: 'Activity'     
    )
activity_like_17 = Like.create!(
    liker_id: ari.id,
    likeable_id: ari_inline2.id,
    likeable_type: 'Activity'     
    )
activity_like_18 = Like.create!(
    liker_id: james.id,
    likeable_id: ari_inline2.id,
    likeable_type: 'Activity'     
    )
activity_like_19 = Like.create!(
    liker_id: james.id,
    likeable_id: jim_inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_20 = Like.create!(
    liker_id: jim.id,
    likeable_id: jim_inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_21 = Like.create!(
    liker_id: ari.id,
    likeable_id: jim_inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_22 = Like.create!(
    liker_id: ada.id,
    likeable_id: jim_inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_23 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: jim_inline1.id,
    likeable_type: 'Activity'     
    )
activity_like_24 = Like.create!(
    liker_id: stuart.id,
    likeable_id: jennifer_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_25 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: jennifer_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_26 = Like.create!(
    liker_id: jim.id,
    likeable_id: jennifer_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_27 = Like.create!(
    liker_id: ari.id,
    likeable_id: jennifer_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_28 = Like.create!(
    liker_id: jim.id,
    likeable_id: jennifer_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_29 = Like.create!(
    liker_id: ari.id,
    likeable_id: jennifer_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_30 = Like.create!(
    liker_id: eugene.id,
    likeable_id: jennifer_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_31 = Like.create!(
    liker_id: ada.id,
    likeable_id: jennifer_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_32 = Like.create!(
    liker_id: stuart.id,
    likeable_id: james_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_33 = Like.create!(
    liker_id: ari.id,
    likeable_id: james_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_34 = Like.create!(
    liker_id: eugene.id,
    likeable_id: james_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_35 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: james_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_36 = Like.create!(
    liker_id: stuart.id,
    likeable_id: james_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_37 = Like.create!(
    liker_id: ada.id,
    likeable_id: james_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_38 = Like.create!(
    liker_id: james.id,
    likeable_id: james_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_39 = Like.create!(
    liker_id: ari.id,
    likeable_id: james_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_40 = Like.create!(
    liker_id: eugene.id,
    likeable_id: james_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_41 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: james_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_42 = Like.create!(
    liker_id: jim.id,
    likeable_id: james_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_43 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: james_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_44 = Like.create!(
    liker_id: eugene.id,
    likeable_id: james_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_45 = Like.create!(
    liker_id: ada.id,
    likeable_id: james_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_46 = Like.create!(
    liker_id: stuart.id,
    likeable_id: eugene_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_47 = Like.create!(
    liker_id: ari.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_48 = Like.create!(
    liker_id: stuart.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_49 = Like.create!(
    liker_id: ada.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_50 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_51 = Like.create!(
    liker_id: jim.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_52 = Like.create!(
    liker_id: eugene.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_53 = Like.create!(
    liker_id: james.id,
    likeable_id: eugene_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_54 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: stuart_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_55 = Like.create!(
    liker_id: jim.id,
    likeable_id: stuart_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_56 = Like.create!(
    liker_id: ari.id,
    likeable_id: stuart_activity_2.id,
    likeable_type: 'Activity'     
    )
activity_like_57 = Like.create!(
    liker_id: stuart.id,
    likeable_id: stuart_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_58 = Like.create!(
    liker_id: jim.id,
    likeable_id: stuart_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_59 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: stuart_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_60 = Like.create!(
    liker_id: ada.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_61 = Like.create!(
    liker_id: stuart.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_62 = Like.create!(
    liker_id: james.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_63 = Like.create!(
    liker_id: ari.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_64 = Like.create!(
    liker_id: jim.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_65 = Like.create!(
    liker_id: eugene.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_66 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: stuart_activity_4.id,
    likeable_type: 'Activity'     
    )
activity_like_67 = Like.create!(
    liker_id: ari.id,
    likeable_id: jim_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_68 = Like.create!(
    liker_id: james.id,
    likeable_id: jim_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_69 = Like.create!(
    liker_id: stuart.id,
    likeable_id: jim_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_70 = Like.create!(
    liker_id: eugene.id,
    likeable_id: jim_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_71 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: jim_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_72 = Like.create!(
    liker_id: ada.id,
    likeable_id: jim_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_73 = Like.create!(
    liker_id: eugene.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_74 = Like.create!(
    liker_id: ari.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_75 = Like.create!(
    liker_id: james.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_76 = Like.create!(
    liker_id: stuart.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_77 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_78 = Like.create!(
    liker_id: jim.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_79 = Like.create!(
    liker_id: ada.id,
    likeable_id: jim_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_80 = Like.create!(
    liker_id: eugene.id,
    likeable_id: ada_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_81 = Like.create!(
    liker_id: james.id,
    likeable_id: ada_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_82 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: ada_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_83 = Like.create!(
    liker_id: ada.id,
    likeable_id: ada_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_84 = Like.create!(
    liker_id: stuart.id,
    likeable_id: ada_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_85 = Like.create!(
    liker_id: ari.id,
    likeable_id: ada_activity_1.id,
    likeable_type: 'Activity'     
    )
activity_like_86 = Like.create!(
    liker_id: eugene.id,
    likeable_id: ada_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_87 = Like.create!(
    liker_id: ada.id,
    likeable_id: ada_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_88 = Like.create!(
    liker_id: james.id,
    likeable_id: ada_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_89 = Like.create!(
    liker_id: ari.id,
    likeable_id: ada_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_90 = Like.create!(
    liker_id: stuart.id,
    likeable_id: ada_activity_3.id,
    likeable_type: 'Activity'     
    )
activity_like_91 = Like.create!(
    liker_id: jim.id,
    likeable_id: ada_activity_3.id,
    likeable_type: 'Activity'     
    )


puts "do a do with liking comments"
comment_like_92 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_1.id,
    likeable_type: 'Comment'     
    )
comment_like_93 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_1.id,
    likeable_type: 'Comment'     
    )
comment_like_94 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_1.id,
    likeable_type: 'Comment'     
    )
comment_like_95 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_1.id,
    likeable_type: 'Comment'     
    )
comment_like_96 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_7.id,
    likeable_type: 'Comment'     
    )
comment_like_97 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_7.id,
    likeable_type: 'Comment'     
    )
comment_like_98 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_7.id,
    likeable_type: 'Comment'     
    )
comment_like_99 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_7.id,
    likeable_type: 'Comment'     
    )
comment_like_100 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_101 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_102 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_103 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_104 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_105 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_106 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_11.id,
    likeable_type: 'Comment'     
    )
comment_like_107 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_13.id,
    likeable_type: 'Comment'     
    )
comment_like_108 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_14.id,
    likeable_type: 'Comment'     
    )
comment_like_109 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_14.id,
    likeable_type: 'Comment'     
    )
comment_like_110 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_17.id,
    likeable_type: 'Comment'     
    )
comment_like_111 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_17.id,
    likeable_type: 'Comment'     
    )
comment_like_112 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_17.id,
    likeable_type: 'Comment'     
    )
comment_like_113 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_17.id,
    likeable_type: 'Comment'     
    )
comment_like_114 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_17.id,
    likeable_type: 'Comment'     
    )
comment_like_115 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_17.id,
    likeable_type: 'Comment'     
    )
comment_like_116 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_18.id,
    likeable_type: 'Comment'     
    )
comment_like_117 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_19.id,
    likeable_type: 'Comment'     
    )
comment_like_118 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_19.id,
    likeable_type: 'Comment'     
    )
comment_like_119 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_19.id,
    likeable_type: 'Comment'     
    )
comment_like_120 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_19.id,
    likeable_type: 'Comment'     
    )
comment_like_121 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_19.id,
    likeable_type: 'Comment'     
    )
comment_like_122 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_22.id,
    likeable_type: 'Comment'     
    )
comment_like_123 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_22.id,
    likeable_type: 'Comment'     
    )
comment_like_124 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_125 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_126 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_127 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_128 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_129 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_130 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_23.id,
    likeable_type: 'Comment'     
    )
comment_like_131 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_24.id,
    likeable_type: 'Comment'     
    )
comment_like_132 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_24.id,
    likeable_type: 'Comment'     
    )
comment_like_133 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_24.id,
    likeable_type: 'Comment'     
    )
comment_like_134 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_24.id,
    likeable_type: 'Comment'     
    )
comment_like_135 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_24.id,
    likeable_type: 'Comment'     
    )
comment_like_136 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_24.id,
    likeable_type: 'Comment'     
    )
comment_like_137 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_25.id,
    likeable_type: 'Comment'     
    )
comment_like_138 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_25.id,
    likeable_type: 'Comment'     
    )
comment_like_139 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_25.id,
    likeable_type: 'Comment'     
    )
comment_like_140 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_25.id,
    likeable_type: 'Comment'     
    )
comment_like_141 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_25.id,
    likeable_type: 'Comment'     
    )
comment_like_142 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_31.id,
    likeable_type: 'Comment'     
    )
comment_like_143 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_31.id,
    likeable_type: 'Comment'     
    )
comment_like_144 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_31.id,
    likeable_type: 'Comment'     
    )
comment_like_145 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_31.id,
    likeable_type: 'Comment'     
    )
comment_like_146 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_32.id,
    likeable_type: 'Comment'     
    )
comment_like_147 = Like.create!(
    liker_id: james.id,
    likeable_id: comment_34.id,
    likeable_type: 'Comment'     
    )
comment_like_148 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_34.id,
    likeable_type: 'Comment'     
    )
comment_like_149 = Like.create!(
    liker_id: stuart.id,
    likeable_id: comment_34.id,
    likeable_type: 'Comment'     
    )
comment_like_150 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_34.id,
    likeable_type: 'Comment'     
    )
comment_like_151 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_34.id,
    likeable_type: 'Comment'     
    )
comment_like_152 = Like.create!(
    liker_id: jim.id,
    likeable_id: comment_34.id,
    likeable_type: 'Comment'     
    )
comment_like_153 = Like.create!(
    liker_id: ari.id,
    likeable_id: comment_38.id,
    likeable_type: 'Comment'     
    )
comment_like_154 = Like.create!(
    liker_id: eugene.id,
    likeable_id: comment_38.id,
    likeable_type: 'Comment'     
    )
comment_like_155 = Like.create!(
    liker_id: ada.id,
    likeable_id: comment_38.id,
    likeable_type: 'Comment'     
    )
comment_like_156 = Like.create!(
    liker_id: jennifer.id,
    likeable_id: comment_38.id,
    likeable_type: 'Comment'     
    )

puts "do a do with follows"
follow_1 = Follow.create!(
    follower_id: jennifer.id,
    following_id: ari.id
)
follow_1 = Follow.create!(
    follower_id: james.id,
    following_id: eugene.id
)
follow_1 = Follow.create!(
    follower_id: eugene.id,
    following_id: jim.id
)
follow_1 = Follow.create!(
    follower_id: eugene.id,
    following_id: ari.id
)
follow_1 = Follow.create!(
    follower_id: ari.id,
    following_id: jim.id
)
follow_1 = Follow.create!(
    follower_id: ari.id,
    following_id: jennifer.id
)
follow_1 = Follow.create!(
    follower_id: ari.id,
    following_id: ada.id
)
follow_1 = Follow.create!(
    follower_id: ari.id,
    following_id: james.id
)
follow_1 = Follow.create!(
    follower_id: ari.id,
    following_id: stuart.id
)
follow_1 = Follow.create!(
    follower_id: ari.id,
    following_id: eugene.id
)
follow_1 = Follow.create!(
    follower_id: stuart.id,
    following_id: james.id
)
follow_1 = Follow.create!(
    follower_id: stuart.id,
    following_id: eugene.id
)
follow_1 = Follow.create!(
    follower_id: stuart.id,
    following_id: ari.id
)
follow_1 = Follow.create!(
    follower_id: stuart.id,
    following_id: jennifer.id
)
follow_1 = Follow.create!(
    follower_id: stuart.id,
    following_id: jim.id
)
follow_1 = Follow.create!(
    follower_id: jim.id,
    following_id: james.id
)
follow_1 = Follow.create!(
    follower_id: jim.id,
    following_id: ari.id
)
follow_1 = Follow.create!(
    follower_id: ada.id,
    following_id: ari.id
)
follow_1 = Follow.create!(
    follower_id: ada.id,
    following_id: jennifer.id
)
follow_1 = Follow.create!(
    follower_id: ada.id,
    following_id: eugene.id
)
follow_1 = Follow.create!(
    follower_id: ada.id,
    following_id: stuart.id
)
follow_1 = Follow.create!(
    follower_id: ada.id,
    following_id: jim.id
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