
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    console.log('Register attempt:', formData);
    // TODO: Implement register logic with Supabase
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-makassar-maroon" />
          </div>
          <h1 className="text-3xl font-bold text-makassar-maroon">Daftar</h1>
          <p className="text-gray-600 mt-2">Buat akun baru untuk bergabung dengan kami</p>
        </div>

        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl text-makassar-maroon">Bergabung Sekarang</CardTitle>
            <CardDescription>Isi informasi Anda untuk membuat akun</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-makassar-maroon font-medium">
                  Nama Lengkap
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 h-12 border-gray-200 focus:border-makassar-maroon focus:ring-makassar-maroon"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-makassar-maroon font-medium">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 h-12 border-gray-200 focus:border-makassar-maroon focus:ring-makassar-maroon"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-makassar-maroon font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Buat password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-makassar-maroon focus:ring-makassar-maroon"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-makassar-maroon font-medium">
                  Konfirmasi Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Ulangi password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-makassar-maroon focus:ring-makassar-maroon"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-makassar-maroon to-makassar-maroon-light hover:from-makassar-maroon-dark hover:to-makassar-maroon text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Daftar
              </Button>
            </form>

            <div className="text-center">
              <p className="text-gray-600">
                Sudah punya akun?{' '}
                <Link
                  to="/login"
                  className="text-makassar-maroon hover:text-makassar-maroon-light font-medium transition-colors"
                >
                  Masuk sekarang
                </Link>
              </p>
            </div>

            <div className="text-center">
              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-makassar-maroon transition-colors"
              >
                ← Kembali ke beranda
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
