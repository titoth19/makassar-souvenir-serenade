
import React, { useState } from 'react';
import { Clock, Search, Trash2, Eye, Filter, Calendar } from 'lucide-react';
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
      'Makanan': 'bg-red-100 text-red-800',
      'Pakaian': 'bg-blue-100 text-blue-800',
      'Kerajinan': 'bg-green-100 text-green-800',
      'Aksesoris': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-makassar-maroon mr-3" />
              <div>
                <h1 className="text-3xl font-bold text-makassar-maroon">Riwayat Pencarian</h1>
                <p className="text-gray-600 mt-1">Lihat dan kelola riwayat pencarian Anda</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={clearAllHistory}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Hapus Semua
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Filter className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-700">Filter:</span>
            </div>
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-40">
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

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-makassar-maroon mb-2">
                {searchHistory.length}
              </div>
              <p className="text-gray-600">Total Pencarian</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-makassar-maroon mb-2">
                {searchHistory.reduce((sum, item) => sum + item.results, 0)}
              </div>
              <p className="text-gray-600">Total Hasil</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-makassar-maroon mb-2">
                {Array.from(new Set(searchHistory.map(item => item.category))).length}
              </div>
              <p className="text-gray-600">Kategori Dicari</p>
            </CardContent>
          </Card>
        </div>

        {/* Search History List */}
        <div className="space-y-4">
          {searchHistory.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Search className="h-5 w-5 text-makassar-maroon" />
                      <h3 className="text-lg font-semibold text-makassar-maroon">
                        "{item.query}"
                      </h3>
                      <Badge className={getCategoryColor(item.category)}>
                        {item.category}
                      </Badge>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(item.timestamp)}</span>
                      <span className="mx-2">•</span>
                      <span>{item.results} hasil ditemukan</span>
                    </div>

                    {item.filters.length > 0 && (
                      <div className="mb-3">
                        <p className="text-sm text-gray-700 mb-2">Filter yang digunakan:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.filters.map((filter, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {filter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearchAgain(item.query)}
                      className="text-makassar-maroon border-makassar-maroon hover:bg-makassar-maroon hover:text-white"
                    >
                      <Search className="h-4 w-4 mr-1" />
                      Cari Lagi
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteHistory(item.id)}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {searchHistory.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Clock className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                Belum ada riwayat pencarian
              </h3>
              <p className="text-gray-500 mb-6">
                Mulai mencari oleh-oleh untuk melihat riwayat di sini
              </p>
              <Button asChild className="bg-makassar-maroon hover:bg-makassar-maroon-dark">
                <a href="/search">Mulai Pencarian</a>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-makassar-maroon mb-4">
            Pencarian Populer
          </h3>
          <div className="flex flex-wrap gap-2">
            {['Kerupuk Rambak', 'Sarung Tenun', 'Kue Bagea', 'Gula Aren', 'Pisang Epe'].map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => handleSearchAgain(term)}
                className="text-makassar-maroon border-makassar-maroon hover:bg-makassar-maroon hover:text-white"
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
