
import React, { useState } from 'react';
import { Search as SearchIcon, Filter, MapPin, Star, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('relevance');

  // Mock data hasil pencarian
  const searchResults = [
    {
      id: 1,
      name: 'Kerupuk Rambak Premium',
      image: '/placeholder.svg',
      price: 45000,
      rating: 4.8,
      reviews: 156,
      location: 'Jl. Somba Opu No. 45',
      distance: '2.3 km',
      description: 'Kerupuk kulit sapi asli dengan rasa gurih dan tekstur renyah yang sempurna',
      category: 'Makanan',
      seller: 'Toko Oleh-oleh Makassar'
    },
    {
      id: 2,
      name: 'Kue Bagea Original',
      image: '/placeholder.svg',
      price: 25000,
      rating: 4.7,
      reviews: 89,
      location: 'Jl. Veteran No. 12',
      distance: '1.8 km',
      description: 'Kue tradisional berbahan sagu dengan cita rasa manis yang autentik',
      category: 'Makanan',
      seller: 'Bakery Tradisional'
    },
    {
      id: 3,
      name: 'Sarung Tenun Bugis',
      image: '/placeholder.svg',
      price: 350000,
      rating: 4.9,
      reviews: 67,
      location: 'Jl. Ahmad Yani No. 78',
      distance: '3.1 km',
      description: 'Sarung tenun berkualitas tinggi dengan motif tradisional Bugis-Makassar',
      category: 'Pakaian',
      seller: 'Tenun Nusantara'
    },
    {
      id: 4,
      name: 'Gula Aren Cair',
      image: '/placeholder.svg',
      price: 15000,
      rating: 4.6,
      reviews: 234,
      location: 'Pasar Sentral',
      distance: '4.2 km',
      description: 'Gula aren cair murni tanpa pengawet, cocok untuk berbagai makanan',
      category: 'Makanan',
      seller: 'Gula Aren Asli'
    },
    {
      id: 5,
      name: 'Kalung Manik Makassar',
      image: '/placeholder.svg',
      price: 85000,
      rating: 4.5,
      reviews: 43,
      location: 'Jl. Ratulangi No. 34',
      distance: '2.7 km',
      description: 'Kalung manik-manik dengan desain khas Sulawesi Selatan',
      category: 'Aksesoris',
      seller: 'Kerajinan Etnik'
    },
    {
      id: 6,
      name: 'Dodol Rumput Laut',
      image: '/placeholder.svg',
      price: 20000,
      rating: 4.4,
      reviews: 78,
      location: 'Jl. Penghibur No. 56',
      distance: '3.5 km',
      description: 'Dodol dengan bahan dasar rumput laut, kaya nutrisi dan lezat',
      category: 'Makanan',
      seller: 'Olahan Laut Makassar'
    }
  ];

  const categories = ['Semua', 'Makanan', 'Kerajinan', 'Pakaian', 'Aksesoris'];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const filteredResults = searchResults.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Semua' || 
                           item.category === selectedCategory;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Cari oleh-oleh khas Makassar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg border-gray-200 focus:border-makassar-maroon focus:ring-makassar-maroon"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 h-12">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 h-12">
                  <SelectValue placeholder="Urutkan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevansi</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  <SelectItem value="distance">Terdekat</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="h-12 px-4 border-makassar-maroon text-makassar-maroon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="mt-6 pt-6 border-t">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-700">Rentang Harga</label>
              <span className="text-sm text-gray-600">
                {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
              </span>
            </div>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={1000000}
              min={0}
              step={10000}
              className="w-full"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-makassar-maroon">
            Hasil Pencarian ({filteredResults.length})
          </h2>
          {searchQuery && (
            <p className="text-gray-600">
              Menampilkan hasil untuk "{searchQuery}"
            </p>
          )}
        </div>

        {/* Search Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium ml-1">{item.rating}</span>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-makassar-maroon text-white">
                  {item.category}
                </Badge>
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg text-makassar-maroon line-clamp-1">
                    {item.name}
                  </CardTitle>
                  <span className="text-lg font-bold text-makassar-maroon">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <CardDescription className="text-sm line-clamp-2">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">{item.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({item.reviews} ulasan)</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                    <span className="line-clamp-1">{item.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.seller}</span>
                    <span className="text-sm text-makassar-maroon font-medium">{item.distance}</span>
                  </div>

                  <Button className="w-full bg-makassar-maroon hover:bg-makassar-maroon-dark">
                    Lihat Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredResults.length === 0 && (
          <div className="text-center py-12">
            <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">Tidak ada hasil ditemukan</h3>
            <p className="text-gray-500">
              Coba ubah kata kunci pencarian atau filter yang Anda gunakan
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
