# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'ali', username: 'alibaba', password: '123', cc_number: '4242424242424242', cc_s_code: '123')

flim_arr = [
  'tt3896198',
  'tt2015381',
  'tt0848228', 
  'tt4154756',
  'tt2395427', 
  'tt4154796', 
  'tt2076298', 
  'tt2888046', 
  'tt1386932', 
  'tt1220719', 
  'tt2911666', 
  'tt4425200', 
  'tt6146586',
  'tt0458339',
  'tt1843866',
  'tt3498820',
  'tt0371746',
  'tt1228705',
  'tt1300854',
  'tt0800369',
  'tt1981115',
  'tt3501632',
  'tt1825683',
  'tt4154664',
  'tt0114709',
  'tt0120363',
  'tt0435761',
  'tt1979376',
  'tt0448115',
  'tt0831387',
  'tt3741700',
  'tt0451279',
  'tt2250912',
  'tt6320628',
  'tt4633694',
  'tt0076759',
  'tt0080684',
  'tt0086190'
]

youtube_vids = [
  'https://www.youtube.com/embed/dW1BIid8Osg',
  'https://www.youtube.com/embed/h5BAEs6m_EI',
  'https://www.youtube.com/embed/eOrNdBpGMv8',
  'https://www.youtube.com/embed/QwievZ1Tx-8',
  'https://www.youtube.com/embed/tmeOjFno6Do',
  'https://www.youtube.com/embed/hA6hldpSTF8',
  'https://www.youtube.com/embed/LNaIewXwLHs',
  'https://www.youtube.com/embed/_wUcbN34leM',
  'https://www.youtube.com/embed/gaBdgu00otE',
  'https://www.youtube.com/embed/BmkvuHpfrkk',
  'https://www.youtube.com/embed/2AUmvWm5ZDQ',
  'https://www.youtube.com/embed/XGk2EfbD_Ps',
  'https://www.youtube.com/embed/pU8-7BX9uxs',
  'https://www.youtube.com/embed/JerVrbLldXw',
  'https://www.youtube.com/embed/7SlILk2WMTI',
  'https://www.youtube.com/embed/dKrVegVI0Us',
  'https://www.youtube.com/embed/8ugaeA-nMTc',
  'https://www.youtube.com/embed/BoohRoVA9WQ',
  'https://www.youtube.com/embed/oYSD2VQagc4',
  'https://www.youtube.com/embed/JOddp-nlNvQ',
  'https://www.youtube.com/embed/npvJ9FTgZbM',
  'https://www.youtube.com/embed/ue80QwXMRHg',
  'https://www.youtube.com/embed/xjDjIWPwcPU',
  'https://www.youtube.com/embed/moY78qMJuxM',
  'https://www.youtube.com/embed/rNk1Wi8SvNc',
  'https://www.youtube.com/embed/xNWSGRD5CzU',
  'https://www.youtube.com/embed/JcpWXaA2qeg',
  'https://www.youtube.com/embed/wmiIUN-7qhE',
  'https://www.youtube.com/embed/go6GEIrcvFY',
  'https://www.youtube.com/embed/QjKO10hKtYw',
  'https://www.youtube.com/embed/1nWKR-vBRK4',
  'https://www.youtube.com/embed/sfM7_JLk-84',
  'https://www.youtube.com/embed/n9DwoQ7HWvI',
  'https://www.youtube.com/embed/Nt9L1jCKGnE',
  'https://www.youtube.com/embed/g4Hbz2jLxvQ',
  'https://www.youtube.com/embed/1g3_CFmnU7k',
  'https://www.youtube.com/embed/JNwNXF9Y6kY',
  'https://www.youtube.com/embed/7L8p7_SLzvU'
]

i = 0
puts 'Getting movies...'
flim_arr.each do |imdb_id|
      youtube_video = youtube_vids[i]
      request_url = "http://www.omdbapi.com/?i=#{imdb_id}&apikey=48a92fd6"
      request = RestClient::Request.execute(
        method: :get,
        url: request_url)
      movie = JSON.parse(request)

      Flim.create(title: movie['Title'],
      year: movie['Year'],
      rated: movie['Rated'],
      released: movie['Released'],
      runtime: movie['Runtime'],
      genre: movie['Genre'],
      director: movie['Director'],
      writer: movie['Writer'],
      actor: movie['Actors'],
      plot: movie['Plot'],
      language: movie['Language'],
      country: movie['Country'],
      awards: movie['Awards'],
      poster_img: movie['Poster'],
      rating_metascore: movie['Metascore'],
      imdb_rating: movie['imdbRating'],
      imdb_votes: movie['imdbVotes'],
      production: movie['Production'],
      box_office: movie['BoxOffice'],
      video: youtube_video
    )
    i += 1
    puts (imdb_id)
end 




# Transaction.create(user: ben, drawing: drawing1)
# Transaction.create(user: karina, drawing: drawing2)
# Transaction.create(user: ben, drawing: drawing3)


Transaction.create(user_id: 1, flim_id: 1)
Transaction.create(user_id: 1, flim_id: 2)
