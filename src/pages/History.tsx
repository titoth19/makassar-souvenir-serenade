
import React, { useState } from 'react';
import { Clock, Search, Trash2, Eye, Filter, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const History = () => {
  const [filterPeriod, setFilterPeriod] = useState('all');

  // Mock data riwayat pencarian
  const searchHistory = [
    {
      id: 1,
      query: 'Kerupuk Rambak',
      timestamp: '2024-01-15T14:30:00Z',
      results: 25,
      category: 'Makanan',
      filters: ['Harga: Rp 20.000 - Rp 50.000', 'Lokasi: Jl. Somba Opu']
    },
    {
      id: 2,
      query: 'Sarung Tenun Bugis',
      timestamp: '2024-01-15T10:15:00Z',
      results: 8,
      category: 'Pakaian',
      filters: ['Harga: Rp 200.000 - Rp 500.000']
    },
    {
      id: 3,
      query: 'Kue Bagea',
      timestamp: '2024-01-14T16:45:00Z',
      results: 15,
      category: 'Makanan',
      filters: ['Rating: 4+ bintang', 'Lokasi: Jl. Veteran']
    },
    {
      id: 4,
      query: 'Gula Aren',
      timestamp: '2024-01-14T09:20:00Z',
      results: 12,
      category: 'Makanan',
      filters: ['Harga: < Rp 20.000']
    },
    {
      id: 5,
      query: 'Kalung Manik',
      timestamp: '2024-01-13T19:30:00Z',
      results: 6,
      category: 'Aksesoris',
      filters: ['Harga: Rp 50.000 - Rp 100.000', 'Rating: 4+ bintang']
    },
    {
      id: 6,
      query: 'Dodol Rumput Laut',
      timestamp: '2024-01-13T11:10:00Z',
      results: 9,
      category: 'Makanan',
      filters: ['Lokasi: Pasar Sentral']
    },
    {
      id: 7,
      query: 'Tas Anyaman Pandan',
      timestamp: '2024-01-12T15:25:00Z',
      results: 4,
      category: 'Kerajinan',
      filters: ['Harga: Rp 75.000 - Rp 150.000']
    },
    {
      id: 8,
      query: 'Pisang Epe',
      timestamp: '2024-01-12T20:40:00Z',
      results: 18,
      category: 'Makanan',
      filters: ['Lokasi: Pantai Losari']
    }
  ];

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

    if (diffInHours < 1) {
      return 'Baru saja';
    } else if (diffInHours < 24) {
      return `${diffInHours} jam lalu`;
    } else if (diffInHours < 48) {
      return 'Kemarin';
    } else {
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Makanan': 'bg-gradient-to-r from-rose-100 to-red-100 text-red-800 border-red-200',
      'Pakaian': 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200',
      'Kerajinan': 'bg-gradient-to-r from-emerald-100 to-green-100 text-green-800 border-green-200',
      'Aksesoris': 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border-purple-200'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200';
  };

  const handleSearchAgain = (query: string) => {
    console.log('Searching again for:', query);
    // TODO: Navigate to search page with query
  };

  const handleDeleteHistory = (id: number) => {
    console.log('Deleting history item:', id);
    // TODO: Implement delete functionality
  };

  const clearAllHistory = () => {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat pencarian?')) {
      console.log('Clearing all history');
      // TODO: Implement clear all functionality
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-makassar-cream via-white to-makassar-cream">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 animate-batik-float">
        <div className="batik-bg w-full h-full"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Enhanced Animation */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 mb-10 animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center group">
              <div className="relative">
                <Clock className="h-10 w-10 text-makassar-maroon mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute -inset-2 bg-makassar-maroon/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md"></div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-makassar-maroon to-makassar-maroon-light bg-clip-text text-transparent">
                  Riwayat Pencarian
                </h1>
                <p className="text-gray-600 mt-2 text-lg">Lihat dan kelola riwayat pencarian Anda</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={clearAllHistory}
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Hapus Semua
            </Button>
          </div>

          {/* Enhanced Filters */}
          <div className="flex items-center gap-6 p-4 bg-gradient-to-r from-makassar-cream/50 to-white/50 rounded-xl border border-makassar-maroon/10">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-makassar-maroon mr-3" />
              <span className="text-makassar-maroon font-medium">Filter Berdasarkan:</span>
            </div>
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-48 border-makassar-maroon/30 focus:border-makassar-maroon hover:border-makassar-maroon/50 transition-all duration-300">
                <SelectValue placeholder="Periode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Waktu</SelectItem>
                <SelectItem value="today">Hari Ini</SelectItem>
                <SelectItem value="week">Minggu Ini</SelectItem>
                <SelectItem value="month">Bulan Ini</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Enhanced Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { 
              title: 'Total Pencarian', 
              value: searchHistory.length, 
              icon: Search, 
              color: 'from-makassar-maroon to-makassar-maroon-light',
              delay: 'animation-delay-75'
            },
            { 
              title: 'Total Hasil', 
              value: searchHistory.reduce((sum, item) => sum + item.results, 0), 
              icon: TrendingUp, 
              color: 'from-makassar-gold to-yellow-500',
              delay: 'animation-delay-150'
            },
            { 
              title: 'Kategori Dicari', 
              value: Array.from(new Set(searchHistory.map(item => item.category))).length, 
              icon: BarChart3, 
              color: 'from-green-500 to-emerald-600',
              delay: 'animation-delay-300'
            }
          ].map((stat, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in ${stat.delay}`}>
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(135deg, ${stat.color})`}}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-bold text-makassar-maroon mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Search History List */}
        <div className="space-y-6">
          {searchHistory.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-0 shadow-lg animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-makassar-maroon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <Search className="h-6 w-6 text-makassar-maroon group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute -inset-1 bg-makassar-maroon/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      </div>
                      <h3 className="text-xl font-bold text-makassar-maroon group-hover:text-makassar-maroon-light transition-colors duration-300">
                        "{item.query}"
                      </h3>
                      <Badge className={`${getCategoryColor(item.category)} border font-medium px-3 py-1 group-hover:scale-105 transition-transform duration-300`}>
                        {item.category}
                      </Badge>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="font-medium">{formatDate(item.timestamp)}</span>
                      <span className="mx-3 text-makassar-maroon">•</span>
                      <span className="font-medium">{item.results} hasil ditemukan</span>
                    </div>

                    {item.filters.length > 0 && (
                      <div className="mb-4">
                        <p className="text-makassar-maroon font-medium mb-3">Filter yang digunakan:</p>
                        <div className="flex flex-wrap gap-3">
                          {item.filters.map((filter, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              className="text-sm bg-makassar-cream/80 text-makassar-maroon border border-makassar-maroon/20 hover:bg-makassar-cream hover:scale-105 transition-all duration-300"
                            >
                              {filter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 ml-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearchAgain(item.query)}
                      className="text-makassar-maroon border-makassar-maroon hover:bg-makassar-maroon hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Cari Lagi
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteHistory(item.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Empty State */}
        {searchHistory.length === 0 && (
          <Card className="animate-fade-in bg-white/90 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="text-center py-16">
              <div className="relative inline-block mb-6">
                <Clock className="h-24 w-24 text-gray-300 animate-pulse" />
                <div className="absolute -inset-4 bg-gray-200/50 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-3">
                Belum ada riwayat pencarian
              </h3>
              <p className="text-gray-500 mb-8 text-lg">
                Mulai mencari oleh-oleh untuk melihat riwayat di sini
              </p>
              <Button 
                asChild 
                className="bg-gradient-to-r from-makassar-maroon to-makassar-maroon-light hover:from-makassar-maroon-dark hover:to-makassar-maroon hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8 py-3"
              >
                <a href="/search">Mulai Pencarian</a>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Enhanced Quick Actions */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 animate-fade-in">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-makassar-maroon to-makassar-maroon-light bg-clip-text text-transparent mb-6">
            Pencarian Populer
          </h3>
          <div className="flex flex-wrap gap-4">
            {['Kerupuk Rambak', 'Sarung Tenun', 'Kue Bagea', 'Gula Aren', 'Pisang Epe'].map((term, index) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => handleSearchAgain(term)}
                className="text-makassar-maroon border-makassar-maroon hover:bg-makassar-maroon hover:text-white hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {term}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
