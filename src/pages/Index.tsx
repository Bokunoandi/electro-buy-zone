
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Home, User, BookMarked, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const bannerProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 42999,
      originalPrice: 47999,
      image: "https://images.unsplash.com/photo-1695654389849-fea83ca9c6d0?w=800&h=600&fit=crop",
      badge: "Новинка"
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: 89999,
      originalPrice: 94999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
      badge: "Знижка"
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 38999,
      originalPrice: 42999,
      image: "https://images.unsplash.com/photo-1592286962938-d980f6be7ba2?w=800&h=600&fit=crop",
      badge: "Популярний"
    }
  ];

  const popularProducts = [
    {
      id: 4,
      name: "AirPods Pro 3",
      price: 7999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 5,
      name: "iPad Air M2",
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
      id: 7,
      name: "Sony WH-1000XM5",
      price: 9999,
      originalPrice: 12999,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 156
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <section className="px-4 py-8 max-w-7xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {bannerProducts.map((product) => (
              <CarouselItem key={product.id}>
                <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
                  <CardContent className="flex items-center justify-between p-8 h-96">
                    <div className="flex-1 space-y-6">
                      <Badge className="bg-white/20 text-white border-0 text-sm">
                        {product.badge}
                      </Badge>
                      <div>
                        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 text-2xl">
                          <span className="font-bold">{product.price.toLocaleString()} ₴</span>
                          <span className="line-through text-white/70 text-lg">
                            {product.originalPrice.toLocaleString()} ₴
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          В кошик
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                          Детальніше
                        </Button>
                      </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="max-h-80 object-contain rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Popular Products */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярні товари</h2>
          <p className="text-gray-600 text-lg">Найкращі пропозиції в нашому магазині</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Переглянути всі товари
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Категорії товарів
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Смартфони", icon: "📱", count: "156 товарів" },
              { name: "Ноутбуки", icon: "💻", count: "89 товарів" },
              { name: "Планшети", icon: "📱", count: "67 товарів" },
              { name: "Аксесуари", icon: "🎧", count: "234 товари" }
            ].map((category) => (
              <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-all cursor-pointer group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
