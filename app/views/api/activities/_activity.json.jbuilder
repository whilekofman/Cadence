# json.array! @activities do |activity| do
#     json.extract! activity, :athlete_id
# end

 json.extract! activity, :id, :athlete_id, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at, :fname, :lname, :athlete_profile_picture, :likes_count, :comments_count

# json.extract! comment, :id, :author_id, :activity_id :body

 



# json.athlete do 
#     json.fname = activity.athlete.fname
#     json.lname = activity.athlete.fname
# end



# json.extract! activity, :id, :athlete_id, :athlete, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at, :fname, :lname



#, :athlete_id, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at

