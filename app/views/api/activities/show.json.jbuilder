# json.activity do
#     debugger
#     json.extract! @activity, :id, :athlete_id, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at
# end

json.partial! 'activity', activity: @activity

# json.extract! @activity, :id, :athlete_id, :athlete, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at, :fname, :lname
