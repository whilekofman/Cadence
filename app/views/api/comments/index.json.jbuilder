@comments.each do |comment|
        json.set! comment.id do
            json.partial! 'comment', comment: comment

        end
 end

#  @comments_all.each do |comment| 
#     json.set! comment.id do
#             json.partial! 'comment', comment: comment

#     end
#  end


