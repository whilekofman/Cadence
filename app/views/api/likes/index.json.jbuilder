@likes.each do |like|
    json.set! like.id do 
        json.partia! 'like', like: like
    end
end