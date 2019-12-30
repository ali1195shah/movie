class CreateFlims < ActiveRecord::Migration[6.0]
  def change
    create_table :flims do |t|
      t.string :title
      t.string :year
      t.string :rated
      t.string :released
      t.string :runtime
      t.string :genre
      t.string :director
      t.string :writer
      t.string :actor
      t.string :plot
      t.string :language
      t.string :country
      t.string :awards
      t.string :poster_img
      t.string :rating_metascore
      t.string :imdb_rating
      t.string :imdb_votes
      t.string :production
      t.string :box_office

      t.timestamps
    end
  end
end
