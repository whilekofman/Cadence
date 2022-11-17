@comments.each do |comment|
        json.set! activity.id do
            json.partial! 'comment', comment: comment

        end
 end



