
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const categories = [
    { id: 'smartphones', name: 'Смартфони', count: 156 },
    { id: 'laptops', name: 'Ноутбуки', count: 89 },
    { id: 'tablets', name: 'Планшети', count: 67 },
    { id: 'accessories', name: 'Аксесуари', count: 234 },
    { id: 'headphones', name: 'Навушники', count: 98 },
    { id: 'watches', name: 'Розумні годинники', count: 45 },
  ];

  const products = [
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
      id: 2,
      name: "MacBook Pro M3 14\"",
      price: 89999,
      originalPrice: 94999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 167
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
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог товарів</h1>
          <p className="text-gray-600">Знайдіть найкращу електронну техніку за найкращими цінами</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Пошук
                </h3>
                <Input
                  placeholder="Введіть назву товару..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Категорії
                </h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                        />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Price Range */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Ціна (₴)</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Від"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    />
                    <Input
                      placeholder="До"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    />
                  </div>
                  <Button className="w-full" variant="outline">
                    Застосувати
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sorting */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Знайдено {products.length} товарів
              </p>
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Сортувати за" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Популярністю</SelectItem>
                    <SelectItem value="price-low">Ціною: низька → висока</SelectItem>
                    <SelectItem value="price-high">Ціною: висока → низька</SelectItem>
                    <SelectItem value="rating">Рейтингом</SelectItem>
                    <SelectItem value="newest">Новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Завантажити ще товари
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
