
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, BookMarked } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating?: number;
    reviews?: number;
    badge?: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount > 0 && (
            <Badge variant="destructive" className="text-xs">
              -{discount}%
            </Badge>
          )}
          {product.badge && (
            <Badge className="bg-blue-600 text-xs">
              {product.badge}
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <BookMarked className="w-4 h-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <span className="text-gray-500">({product.reviews} відгуків)</span>
            </div>
          )}

          {/* Product Name */}
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-600">
              {product.price.toLocaleString()} ₴
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString()} ₴
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
              <ShoppingCart className="w-4 h-4 mr-2" />
              В кошик
            </Button>
            <Link to={`/product/${product.id}`}>
              <Button variant="outline" size="sm" className="px-3">
                Детальніше
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
