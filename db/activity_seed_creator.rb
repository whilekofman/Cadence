require 'date'
users = ['Jennifer',  'James',  'Eugene',  'Ari',  'Stuart',  'Jim',  'Ada',  'Alan',  'Grace',  'John',  'Tim',  'Linus',  'Bjarne',  'Martin',  'Guido',  'James']

sports = ['run', 'bike', 'inline', 'ebike']
ACTIVITY_HOURS = (0..4)

TIME_HOURS = (0..23)
MINUTES = (0..59)
SECONDS = (0..59)

File.open("activity_seeds2.txt", "w") do |f|

    users.each do |athlete|
        count = 1
        4.times do
            activity_hours = rand(0..4)
            activity_minutes = rand(0..59)
            activity_seconds = rand(0..59)
            time_hours= rand(0..23)
            time_minutes = rand(0..59)
            time_seconds = rand(0..59)
            sport = sports.sample
            distance = format('%.2f', rand(0.00...30.00))
            if sport != 'run'
                type = 'ride'
            else
                type = 'run'
            end


            if time_hours >= 22 || time_hours < 6
                    title = "Night #{type}"
                elsif time_hours >= 6 && time_hours < 10
                    title = "Morning #{type}"
                elsif time_hours >= 10 && time_hours < 14
                    title = "Lunch #{type}"
                elsif time_hours >= 14 && time_hours < 18
                    title = "Afternoon #{type}"
                else title = "Evening #{type}"
            end

            year = [2022, 2023].sample

            if year == 2022
                month = 12
                day = rand(1..31)
            else
                month = 01
                day = rand(1..5)
            end

            if time_hours < 10
                time_hours = "0#{time_hours}"
            end

            if time_minutes < 10
                time_minutes = "0#{time_minutes}"
            end
            if time_seconds < 10
                time_seconds = "0#{time_seconds}"
            end

            start_time = "#{year}-#{month}-#{day} #{time_hours}:#{time_minutes}:#{time_seconds}"

            var_name = "#{athlete.downcase}_activity_#{count}"
            count += 1
            f.write (
                "#{var_name} = Activity.create!(
                athlete_id: #{athlete}.id,
                sport: '#{sport}',
                distance: #{format('%.2f', rand(0.00...30.00))},
                hours: #{activity_hours},
                minutes: #{activity_minutes},
                seconds: #{activity_seconds},
                title: '#{title}',
                description: '',
                intensity: #{rand(0..9)},
                hr: #{rand(80..180)},
                purpose: #{rand(0..2)},
                start_time: '#{start_time}'
                )" 
            )
            f.puts
        end
    end
end
              