import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Heart, Play, Calendar, Trophy, Users } from 'lucide-react';

const profileData = {
  1: {
    name: "Lunech",
    avatar: "../img/garou.jpg",
    favoriteGenre: "Shonen",
    watchedCount: 5,
    favoriteAnime: "One Punch Man",
    bio: "Shonen sever",
    joinDate: "2021",
    watchedAnime: [
      { title: "One Punch Man", rating: 10, status: "Tamamlandı", image: "../animes/opm.jpg" },
      { title: "Bleach", rating: 9, status: "Tamamlandı", image: "../animes/bleach.png" },
      { title: "Fairy Tail", rating: 9, status: "İzleniyor", image: "../animes/fairytail.jpg" },
    ],
    favoriteCharacters: [
      { name: "Garou", anime: "One Punch Man", image: "../img/garou2.jpg" },
      { name: "Ulquiorra Cifer", anime: "Bleach", image: "../img/ulquiorra.jpg" },
      { name: "Ryomen Sukuna", anime: "Jujutsu Kaisen", image: "../img/sukuna.jpg" },
      { name: "Acnologia", anime: "Fairy Tail", image: "../img/acmologia.jpg" }
    ]
  },
  2: {
    name: "Jaylezye",
    avatar: "../img/ichigo.jpg",
    favoriteGenre: "Seinen",
    watchedCount: 50,
    favoriteAnime: "Bleach",
    bio: "Ruh hastası uzak durun",
    joinDate: "2018",
    watchedAnime: [
      { title: "Bleach", rating: 10, status: "Tamamlandı", image: "../animes/bleach.png" },
      { title: "Tokyo Ghoul", rating: 10, status: "Tamamlandı", image: "../animes/tokyoghoul.jpg" },
      { title: "Angel Of Death", rating: 10, status: "Tamamlandı", image: "../animes/angelofdeath.jpg" },
    ],
    favoriteCharacters: [
      { name: "Kurosaki İchigo", anime: "Bleach", image: "../img/ichigo2.jpg" },
      { name: "Zangetsu", anime: "Bleach", image: "../img/zangetsu.jpg" },
      { name: "Friend", anime: "20th century boys", image: "../img/friend.jpg" },
      { name: "Noro", anime: "Tokyo Ghoul", image: "../img/noro.jpg" },
    ]
  },
  3: {
    name: "kasliadam25",
    avatar: "../img/kurumi.jpg",
    favoriteGenre: "Romantik Komedi",
    watchedCount: 100,
    favoriteAnime: "Date a Live",
    bio: "cringe romantik animeci",
    joinDate: "2018",
    watchedAnime: [
      { title: "One Piece", rating: 10, status: "Tamamlandı", image: "../animes/op.jpg" },
      { title: "Date A Live", rating: 10, status: "Tamamlandı", image: "../animes/dal.jpg" },
      { title: "Call Of The Night", rating: 9, status: "Tamamlandı", image: "../animes/night.jpg" },
    ],
    favoriteCharacters: [
      { name: "Kurumi", anime: "Date A Live", image: "../img/kurumi2.jpg" },
      { name: "Tomoe", anime: "Tuskumichi Moonlit", image: "../img/tomoe.jpg" },
      { name: "Rimuru", anime: "that Time I Got Reincarnated As A Slime", image: "../img/rimuru.jpg" },
      { name: "Luffy", anime: "One Piece", image: "../img/luffy.jpg" }
    ]
  }
};

function ProfileDetail() {
  const { id } = useParams();
  const profile = profileData[id as unknown as keyof typeof profileData];

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Profil bulunamadı</h2>
          <Link to="/" className="text-pink-400 hover:text-pink-300 transition-colors">
            Ana sayfaya dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Ana sayfaya dön
        </Link>

        {/* Profile Header */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-pink-400/50"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-3">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">{profile.name}</h1>
              <p className="text-gray-300 text-lg mb-4">{profile.bio}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">{profile.watchedCount}</div>
                  <div className="text-sm text-gray-400">İzlenen Anime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{profile.favoriteGenre}</div>
                  <div className="text-sm text-gray-400">Favori Tür</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{profile.joinDate}</div>
                  <div className="text-sm text-gray-400">Katılım Yılı</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{profile.favoriteCharacters.length}</div>
                  <div className="text-sm text-gray-400">Favori Karakter</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watched Anime Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Play className="w-6 h-6 text-pink-400" />
            İzlenen Animeler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profile.watchedAnime.map((anime, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <img
                    src={anime.image}
                    alt={anime.title}
                    className="w-16 h-16 rounded-lg object-cover border-2 border-pink-400/30 group-hover:border-pink-400 transition-all duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-1">{anime.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{anime.status}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-yellow-400 font-semibold">{anime.rating}/10</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Favorite Characters Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-pink-400" />
            Favori Karakterler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profile.favoriteCharacters.map((character, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group text-center">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-20 h-20 rounded-full object-cover border-3 border-pink-400/30 group-hover:border-pink-400 transition-all duration-300 mx-auto mb-4"
                />
                <h3 className="font-bold text-white mb-1">{character.name}</h3>
                <p className="text-sm text-gray-300">{character.anime}</p>
                <div className="mt-3">
                  <Heart className="w-5 h-5 text-pink-400 fill-current mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;