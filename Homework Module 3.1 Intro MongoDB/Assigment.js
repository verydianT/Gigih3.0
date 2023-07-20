/// Create Database
//use spotify

// --------------------------------------------------------------------------------------
/// Make Collections "Songs"
songs = [
    {title: "Creep", artist: "Radiohead", album: "Pablo Honey"},
    {title: "Someone like you", artist: "Adele", album: "21"},
    {title: "Rolling in the deep", artist: "Adele", album: "21"},
    {title: "Love in the dark", artist: "Adele", album: "25"},
    {title: "Always", artist: "Daniel Caesar", album: "Never Enough"},
    {title: "Ditto", artist: "New Jeans", album: "Ditto"},
    {title: "OMG", artist: "New Jeans", album: "OMG"},
    {title: "Untitled", artist: "Rex Orange County", album: "Apricot Princess"},
    {title: "4 Seasons", artist: "Rex Orange County", album: "Apricot Princess"},
    {title: "Kenangan Manis", artist: "Pamungkas", album: "Walk The Talk"}
]
db.songs.insertMany(songs)
db.songs.find()

// --------------------------------------------------------------------------------------
/// Make Collections "Artists"
artist = [
    {name: "Adele", birth: "5-05-1988", genre: "Pop, Soul"},
    {name: "Rex Orange County", birth: "4-05-1998", genre: "Jazz, Hip-Hop"},
    {name: "Daniel Caesar", birth: "5-04-1995", genre: "EDM"},
    {name: "Ed Sheeran", birth: "17-02-1991", genre: "Pop"},
    {name: "Pamungkas", birth: "14-04-1993", genre: "Country"},
    {name: "Sam Smith", birth: "19-05-1992", genre: "Pop"},
    {name: "Ardhito Pramono", birth: "22-05-1995", genre: "Jazz"},
    {name: "Tulus", birth: "20-08-1987", genre: "Pop"},
    {name: "Niki", birth: "24-01-1999", genre: "Country, HipHop"},
    {name: "Justin Bieber", birth: "1-03-1994", genre: "RnB"}
]
db.artists.insertMany(artists)
db.artists.find()

// --------------------------------------------------------------------------------------
/// Make Collections "Popular Songs"
popSong = [
    {title: "Creep", played: "23.480.519", peroid: "Montly Listener"},
    {title: "Someone like you", played: "1.619.711.909", peroid: "2011 - Now"},
    {title: "Rolling in the deep", played: "1.467.934.324", peroid: "2011 - Now"},
    {title: "Love in the dark", played: "484.595.075", peroid: "2015 - Now"},
    {title: "Always", played: "81.145.833", peroid: "2023"},
    {title: "Ditto", played: "392.074.421", peroid: "2023"},
    {title: "OMG", played: "424.267.232", peroid: "2023"},
    {title: "Untitled", played: "127.975.262", peroid: "2017 - Now"},
    {title: "4 Seasons", played: "55.704.583", peroid: "2011 - Now"},
    {title: "Kenangan Manis", played: "118.422.243", peroid: "2018 - Now"}
]
db.popular.insertMany(popSong)
db.popular.find()

// --------------------------------------------------------------------------------------
// show dbs
// show collections