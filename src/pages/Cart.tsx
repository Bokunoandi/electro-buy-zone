
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 42999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1695654389849-fea83ca9c6d0?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "AirPods Pro 3rd Gen",
      price: 7999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Apple Watch Series 9",
      price: 13999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=200&h=200&fit=crop"
    }
  ]);

  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50000 ? 0 : 299;
  const discount = promoCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Ваш кошик порожній</h1>
            <p className="text-gray-600 mb-8">Додайте товари, щоб продовжити покупки</p>
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
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/catalog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Продовжити покупки
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Кошик</h1>
            <p className="text-gray-600">{cartItems.length} товарів у кошику</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-2 truncate">
                        {item.name}
                      </h3>
                      <p className="text-lg font-bold text-blue-600">
                        {item.price.toLocaleString()} ₴
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="px-3 py-1 min-w-[50px] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="text-right min-w-[100px]">
                        <p className="font-bold text-lg">
                          {(item.price * item.quantity).toLocaleString()} ₴
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Підсумок замовлення</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Товари ({cartItems.length})</span>
                    <span>{subtotal.toLocaleString()} ₴</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span>
                      {shipping === 0 ? (
                        <Badge variant="secondary">Безкоштовно</Badge>
                      ) : (
                        `${shipping} ₴`
                      )}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Знижка</span>
                      <span>-{discount.toLocaleString()} ₴</span>
                    </div>
                  )}
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Разом</span>
                  <span className="text-blue-600">{total.toLocaleString()} ₴</span>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline">
                      Застосувати
                    </Button>
                  </div>
                  {promoCode === 'SAVE10' && (
                    <p className="text-green-600 text-sm mt-2">
                      ✓ Промокод застосовано! Знижка 10%
                    </p>
                  )}
                </div>

                <Link to="/checkout">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-3">
                    Оформити замовлення
                  </Button>
                </Link>

                {shipping > 0 && (
                  <p className="text-sm text-gray-600 text-center">
                    Додайте товарів на {(50000 - subtotal).toLocaleString()} ₴ 
                    для безкоштовної доставки
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
