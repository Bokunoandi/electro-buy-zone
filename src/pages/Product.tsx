
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Star, 
  ShoppingCart, 
  BookMarked, 
  ArrowLeft, 
  Plus, 
  Minus,
  Shield,
  Truck,
  RefreshCw
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: Number(id),
    name: "iPhone 15 Pro Max 256GB",
    price: 42999,
    originalPrice: 47999,
    rating: 4.8,
    reviews: 234,
    inStock: true,
    badge: "Новинка",
    images: [
      "https://images.unsplash.com/photo-1695654389849-fea83ca9c6d0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592286962938-d980f6be7ba2?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&h=600&fit=crop"
    ],
    description: "Найновіший iPhone 15 Pro Max з потужним чіпом A17 Pro, титановим корпусом та неймовірною камерою на 48MP. Революційні можливості для професійних фото та відео.",
    specifications: [
      { label: "Екран", value: "6.7\" Super Retina XDR OLED" },
      { label: "Процесор", value: "Apple A17 Pro" },
      { label: "Пам'ять", value: "256GB" },
      { label: "RAM", value: "8GB" },
      { label: "Камера", value: "48MP + 12MP + 12MP" },
      { label: "Батарея", value: "4441 mAh" },
      { label: "ОС", value: "iOS 17" },
      { label: "Колір", value: "Натуральний титан" }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: "Олексій К.",
      rating: 5,
      date: "2024-05-18",
      text: "Чудовий телефон! Камера просто неймовірна, а швидкість роботи вражає. Рекомендую!",
      helpful: 12
    },
    {
      id: 2,
      author: "Марія В.",
      rating: 4,
      date: "2024-05-15",
      text: "Дуже якісний продукт, але ціна трохи висока. В цілому задоволена покупкою.",
      helpful: 8
    },
    {
      id: 3,
      author: "Дмитро П.",
      rating: 5,
      date: "2024-05-12",
      text: "Перейшов з Android і не жалкую. Все працює швидко та стабільно.",
      helpful: 15
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: "iPhone 15 Pro 128GB",
      price: 36999,
      originalPrice: 39999,
      image: "https://images.unsplash.com/photo-1695654389849-fea83ca9c6d0?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: "AirPods Pro 3rd Gen",
      price: 7999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 5,
      name: "MagSafe зарядний пристрій",
      price: 1599,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1583147244020-d4605fb94c6b?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 89
    }
  ];

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Головна</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-blue-600">Каталог</Link>
          <span>/</span>
          <span className="text-gray-900">Смартфони</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link to="/catalog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад до каталогу
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-blue-600">
                  {product.badge}
                </Badge>
              )}
              {discount > 0 && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  -{discount}%
                </Badge>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} відгуків)</span>
                </div>
                {product.inStock && (
                  <Badge className="bg-green-100 text-green-800">В наявності</Badge>
                )}
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-blue-600">
                  {product.price.toLocaleString()} ₴
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice.toLocaleString()} ₴
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-medium">Кількість:</label>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Додати в кошик
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <BookMarked className="w-5 h-5" />
                </Button>
              </div>

              <Button variant="outline" className="w-full">
                Купити в один клік
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Гарантія 1 рік</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-blue-600" />
                <span>Безкоштовна доставка</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RefreshCw className="w-5 h-5 text-blue-600" />
                <span>Обмін 14 днів</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="specs" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Характеристики</TabsTrigger>
            <TabsTrigger value="reviews">Відгуки ({product.reviews})</TabsTrigger>
            <TabsTrigger value="delivery">Доставка та оплата</TabsTrigger>
          </TabsList>

          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-gray-900">{spec.label}</span>
                      <span className="text-gray-700">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Reviews Summary */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">Відгуки покупців</h3>
                      <p className="text-gray-600">{product.reviews} відгуків</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600">{product.rating}</div>
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">середня оцінка</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews List */}
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarFallback>{review.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{review.author}</h4>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('uk-UA')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-3">{review.text}</p>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          Корисно ({review.helpful})
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="delivery" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Доставка</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Нова Пошта</p>
                        <p className="text-sm text-gray-600">1-2 робочі дні, від 89 ₴</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Кур'єрська доставка</p>
                        <p className="text-sm text-gray-600">По Києву, 1-2 дні, 299 ₴</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Оплата</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💳</span>
                      <div>
                        <p className="font-medium">Картою онлайн</p>
                        <p className="text-sm text-gray-600">Visa, Mastercard</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-medium">При отриманні</p>
                        <p className="text-sm text-gray-600">Готівкою або карткою</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Схожі товари</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
