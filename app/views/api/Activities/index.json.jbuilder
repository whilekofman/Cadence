
@activities.each do |activity|
    json.set! activity.id do 
        json.extract! activity, :id, :athlete_id, :title, :description, :sport, :distance, :hours, :minutes, :seconds, :intensity, :hr, :pnotes, :tags, :purpose, :start_time, :created_at, :updated_at
    end
    
end

