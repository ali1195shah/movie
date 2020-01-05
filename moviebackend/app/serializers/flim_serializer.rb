class FlimSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :rated, :released, :runtime, :genre, :director, :writer, :actor, :plot, :language, :country, :awards, :poster_img, :rating_metascore, :imdb_rating, :imdb_votes, :production,  :box_office, :video
end
