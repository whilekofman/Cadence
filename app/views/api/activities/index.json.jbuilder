@activities.each do |activity|
        # json.set! activity.start_time do
        json.set! activity.id do

            json.partial! 'activity', activity: activity
        end
end

