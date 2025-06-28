
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  // Mock data untuk oleh-oleh populer
  const popularProducts = [
    {
      id: 1,
      name: 'Kerupuk Rambak',
      image: '/placeholder.svg',
      price: 'Rp 25.000 - Rp 50.000',
      rating: 4.8,
      location: 'Jl. Somba Opu',
      description: 'Kerupuk kulit sapi khas Makassar yang renyah dan gurih'
    },
    {
      id: 2,
      name: 'Kue Bagea',
      image: '/placeholder.svg',
      price: 'Rp 15.000 - Rp 30.000',
      rating: 4.7,
      location: 'Jl. Veteran',
      description: 'Kue tradisional berbahan dasar sagu yang manis dan lezat'
    },
    {
      id: 3,
      name: 'Pisang Epe',
      image: '/placeholder.svg',
      price: 'Rp 8.000 - Rp 12.000',
      rating: 4.6,
      location: 'Pantai Losari',
      description: 'Pisang bakar dengan gula merah yang menjadi ikon kuliner Makassar'
    },
    {
      id: 4,
      name: 'Sarung Tenun',
      image: '/placeholder.svg',
      price: 'Rp 150.000 - Rp 500.000',
      rating: 4.9,
      location: 'Jl. Ahmad Yani',
      description: 'Sarung tenun khas Bugis-Makassar dengan motif tradisional'
    }
  ];

  const categories = [
    { name: 'Makanan', count: 45, color: 'bg-red-100 text-red-800' },
    { name: 'Kerajinan', count: 32, color: 'bg-blue-100 text-blue-800' },
    { name: 'Pakaian', count: 28, color: 'bg-green-100 text-green-800' },
    { name: 'Aksesoris', count: 18, color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-makassar-maroon to-makassar-maroon-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Selamat Datang di OlehOleh Makassar
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Temukan berbagai oleh-oleh khas Makassar terbaik
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Cari oleh-oleh yang Anda inginkan..."
                className="pl-12 pr-4 py-4 text-lg bg-white border-0 rounded-full shadow-lg focus:ring-2 focus:ring-makassar-gold"
              />
              <Button
                asChild
                className="absolute right-2 top-2 bg-makassar-maroon hover:bg-makassar-maroon-dark rounded-full px-6"
              >
                <Link to="/search">Cari</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-makassar-maroon mb-8 text-center">
            Kategori Populer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <Badge className={category.color}>
                    {category.count} produk
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-makassar-maroon mr-3" />
              <h2 className="text-3xl font-bold text-makassar-maroon">
                Oleh-oleh Populer
              </h2>
            </div>
            <Button asChild variant="outline" className="border-makassar-maroon text-makassar-maroon">
              <Link to="/search">Lihat Semua</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-makassar-maroon">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-makassar-maroon">{product.price}</p>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {product.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Clock className="h-8 w-8 text-makassar-maroon mr-3" />
            <h2 className="text-3xl font-bold text-makassar-maroon">
              Aktivitas Terbaru
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pencarian Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Kerupuk Rambak</span>
                    <span className="text-sm text-gray-500">5 menit lalu</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sarung Tenun</span>
                    <span className="text-sm text-gray-500">12 menit lalu</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kue Bagea</span>
                    <span className="text-sm text-gray-500">1 jam lalu</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Review Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm">"Kerupuk rambaknya enak banget!"</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">5.0 - Andi</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">"Sarung tenunnya berkualitas tinggi"</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">4.8 - Sari</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips & Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <p>💡 Waktu terbaik berbelanja oleh-oleh adalah pagi hari</p>
                  <p>🎯 Jangan lupa tawar-menawar untuk harga terbaik</p>
                  <p>📍 Pasar Sentral adalah tempat terlengkap</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
