
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookMarked, ShoppingCart, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const Favorites = () => {
  const [favorites] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 42999,
      originalPrice: 47999,
      image: "https://images.unsplash.com/photo-1695654389849-fea83ca9c6d0?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 234,
      badge: "Новинка"
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 38999,
      originalPrice: 42999,
      image: "https://images.unsplash.com/photo-1592286962938-d980f6be7ba2?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 189,
      badge: "Популярний"
    },
    {
      id: 5,
      name: "iPad Air M2 11\"",
      price: 24999,
      originalPrice: 27999,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: 13999,
      originalPrice: 15999,
      image: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 203
    },
    {
      id: 4,
      name: "AirPods Pro 3rd Gen",
      price: 7999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 127
    }
  ]);

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <BookMarked className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Список обраного порожній</h1>
            <p className="text-gray-600 mb-8">Додайте товари до обраного, щоб не втратити їх</p>
          </div>
          <Link to="/catalog">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Перейти до каталогу
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/catalog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              До каталогу
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BookMarked className="w-8 h-8 text-blue-600" />
              Обране
            </h1>
            <p className="text-gray-600">{favorites.length} товарів у списку обраного</p>
          </div>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Додати все до кошика
            </Button>
            <Button size="lg" variant="outline">
              Очистити список
            </Button>
          </div>
          <p className="text-gray-600 text-sm">
            Ціни та наявність товарів можуть змінюватися
          </p>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
