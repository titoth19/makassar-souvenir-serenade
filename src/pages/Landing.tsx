
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Users, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Landing = () => {
  const features = [
    {
      icon: Package,
      title: 'Oleh-oleh Autentik',
      description: 'Temukan berbagai oleh-oleh khas Makassar yang autentik dan berkualitas tinggi'
    },
    {
      icon: MapPin,
      title: 'Lokasi Terpercaya',
      description: 'Informasi lokasi toko dan pedagang oleh-oleh terpercaya di seluruh Makassar'
    },
    {
      icon: Star,
      title: 'Rating & Review',
      description: 'Ulasan asli dari pembeli untuk membantu Anda memilih yang terbaik'
    },
    {
      icon: Users,
      title: 'Komunitas',
      description: 'Bergabung dengan komunitas pencinta oleh-oleh Makassar'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-makassar-maroon via-makassar-maroon-light to-makassar-maroon-dark overflow-hidden">
        <div className="absolute inset-0 batik-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Temukan Oleh-oleh
              <span className="block text-makassar-gold">Khas Makassar</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Platform terlengkap untuk menemukan oleh-oleh autentik Makassar. 
              Dari kerupuk rambak hingga kue tradisional, semua ada di sini.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-makassar-maroon hover:bg-makassar-cream text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                <Link to="/home" className="flex items-center">
                  Mulai Pencarian
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-makassar-maroon text-lg px-8 py-3 rounded-full"
              >
                <Link to="/login">Masuk</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-makassar-gold/20 animate-batik-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10 animate-batik-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-makassar-gold/30 animate-batik-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-makassar-maroon mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan platform terpercaya untuk menemukan oleh-oleh khas Makassar terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-makassar-maroon to-makassar-maroon-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-makassar-maroon mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-makassar-maroon-dark to-makassar-maroon">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Siap Menemukan Oleh-oleh Favorit Anda?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Bergabunglah dengan ribuan orang yang sudah menemukan oleh-oleh terbaik Makassar
          </p>
          <Button
            asChild
            size="lg"
            className="bg-makassar-gold hover:bg-makassar-gold/90 text-makassar-maroon-dark text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link to="/register" className="flex items-center">
              Daftar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
