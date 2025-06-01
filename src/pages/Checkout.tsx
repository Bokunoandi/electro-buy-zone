
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, CreditCard, Truck, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Checkout = () => {
  const [deliveryMethod, setDeliveryMethod] = useState('nova-poshta');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [saveInfo, setSaveInfo] = useState(false);

  const [orderForm, setOrderForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    warehouse: '',
    address: ''
  });

  const cartItems = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 42999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1695654389849-fea83ca9c6d0?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "AirPods Pro 3rd Gen",
      price: 7999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=100&h=100&fit=crop"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryPrice = deliveryMethod === 'courier' ? 299 : 89;
  const total = subtotal + deliveryPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { orderForm, deliveryMethod, paymentMethod, cartItems });
    // Here you would handle order submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/cart">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Назад до кошика
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Оформлення замовлення</h1>
            <p className="text-gray-600">Заповніть дані для доставки і оплати</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Контактна інформація
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Ім'я</Label>
                      <Input
                        id="firstName"
                        value={orderForm.firstName}
                        onChange={(e) => setOrderForm({...orderForm, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Прізвище</Label>
                      <Input
                        id="lastName"
                        value={orderForm.lastName}
                        onChange={(e) => setOrderForm({...orderForm, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={orderForm.email}
                        onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={orderForm.phone}
                        onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                        placeholder="+380 99 123 45 67"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-5 h-5" />
                    Спосіб доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="nova-poshta" id="nova-poshta" />
                        <Label htmlFor="nova-poshta" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Нова Пошта (відділення)</p>
                              <p className="text-sm text-gray-600">1-2 робочі дні</p>
                            </div>
                            <Badge variant="secondary">89 ₴</Badge>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="courier" id="courier" />
                        <Label htmlFor="courier" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Кур'єрська доставка</p>
                              <p className="text-sm text-gray-600">По Києву, 1-2 дні</p>
                            </div>
                            <Badge variant="secondary">299 ₴</Badge>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {/* Delivery Address */}
                  <div className="mt-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Місто</Label>
                      <Select onValueChange={(value) => setOrderForm({...orderForm, city: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Оберіть місто" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kyiv">Київ</SelectItem>
                          <SelectItem value="kharkiv">Харків</SelectItem>
                          <SelectItem value="odesa">Одеса</SelectItem>
                          <SelectItem value="dnipro">Дніпро</SelectItem>
                          <SelectItem value="lviv">Львів</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {deliveryMethod === 'nova-poshta' ? (
                      <div className="space-y-2">
                        <Label htmlFor="warehouse">Відділення Нової Пошти</Label>
                        <Select onValueChange={(value) => setOrderForm({...orderForm, warehouse: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Оберіть відділення" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Відділення №1 (вул. Хрещатик, 1)</SelectItem>
                            <SelectItem value="2">Відділення №25 (вул. Басейна, 12)</SelectItem>
                            <SelectItem value="3">Відділення №47 (пр. Перемоги, 89)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Label htmlFor="address">Адреса доставки</Label>
                        <Input
                          id="address"
                          placeholder="Вул. Назва, буд. 1, кв. 1"
                          value={orderForm.address}
                          onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Спосіб оплати
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Банківська картка</p>
                              <p className="text-sm text-gray-600">Visa, Mastercard</p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">Безпечно</Badge>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1 cursor-pointer">
                          <div>
                            <p className="font-medium">Готівкою при отриманні</p>
                            <p className="text-sm text-gray-600">Оплата кур'єру або у відділенні</p>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Save Information */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="save-info"
                      checked={saveInfo}
                      onCheckedChange={setSaveInfo}
                    />
                    <Label htmlFor="save-info" className="text-sm">
                      Зберегти дані для наступних замовлень
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Ваше замовлення</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-sm text-gray-600">Кількість: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold">
                          {(item.price * item.quantity).toLocaleString()} ₴
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Товари</span>
                      <span>{subtotal.toLocaleString()} ₴</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка</span>
                      <span>{deliveryPrice} ₴</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Загалом</span>
                    <span className="text-blue-600">{total.toLocaleString()} ₴</span>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-green-800">Безпечне замовлення</p>
                      <p className="text-green-600">Ваші дані захищені SSL-шифруванням</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Підтвердити замовлення
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    Натискаючи кнопку, ви погоджуєтесь з умовами використання
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
