import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Play } from 'lucide-react';

const profiles = [
  {
    id: 1,
    name: "Lunech",
    avatar: "img/garou.jpg",
    favoriteGenre: "Shonen",
    watchedCount: 5,
    favoriteAnime: "One Punch Man",
    bio: "Shonen sever"
  },
  {
    id: 2,
    name: "Jaylezye",
    avatar: "img/ichigo.jpg",
    favoriteGenre: "Seinen",
    watchedCount: 50,
    favoriteAnime: "Bleach",
    bio: "Ruh hastası uzak durun"
  },
  {
    id: 3,
    name: "kasliadam25",
    avatar: "img/kurumi.jpg",
    favoriteGenre: "Romantik Komedi",
    watchedCount: 100,
    favoriteAnime: "Date a Live",
    bio: "cringe romantik animeci"
  }
];

function HomePage() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Anime Profilleri
          </h1>
          <p className="text-xl text-gray-300">
            DTDW
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <Link key={profile.id} to={`/profile/${profile.id}`}>
              <div className="group relative backdrop-blur-md bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/20">
                {}
                <div className="relative mb-6">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-pink-400/50 group-hover:border-pink-400 transition-all duration-300"
                  />
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-2 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                {}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
                  <p className="text-gray-300 text-sm mb-3">{profile.bio}</p>
                </div>

                {}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Favori Tür:</span>
                    <span className="text-purple-300 font-semibold">{profile.favoriteGenre}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">İzlenen:</span>
                    <span className="text-pink-300 font-semibold">{profile.watchedCount} anime</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Favori:</span>
                    <span className="text-blue-300 font-semibold">{profile.favoriteAnime}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-6 flex items-center justify-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-6 py-2 text-white font-semibold text-sm group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300 flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Profili Görüntüle
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            made by lunech
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;