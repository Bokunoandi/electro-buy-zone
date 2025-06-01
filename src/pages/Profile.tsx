
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  ShoppingCart, 
  Heart, 
  Settings, 
  MapPin, 
  Phone, 
  Mail,
  Calendar,
  Package,
  Star
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const Profile = () => {
  const [user] = useState({
    name: 'Олександр Іванов',
    email: 'oleksandr@example.com',
    phone: '+380 99 123 45 67',
    avatar: '',
    joinDate: '2023-05-15',
    totalOrders: 12,
    totalSpent: 145670
  });

  const orders = [
    {
      id: '12345',
      date: '2024-05-20',
      total: 42999,
      status: 'delivered',
      items: 'iPhone 15 Pro Max + чохол'
    },
    {
      id: '12344',
      date: '2024-05-15',
      total: 15998,
      status: 'delivered',
      items: 'AirPods Pro 3 + зарядний кабель'
    },
    {
      id: '12343',
      date: '2024-05-10',
      total: 13999,
      status: 'delivered',
      items: 'Apple Watch Series 9'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'delivered': { label: 'Доставлено', variant: 'default' as const },
      'processing': { label: 'Обробляється', variant: 'secondary' as const },
      'shipped': { label: 'Відправлено', variant: 'outline' as const },
      'cancelled': { label: 'Скасовано', variant: 'destructive' as const }
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || statusMap.processing;
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Особистий кабінет</h1>
          <p className="text-gray-600">Керуйте своїм акаунтом та замовленнями</p>
        </div>

        {/* Profile Overview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-xl bg-blue-600 text-white">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    З нами з {new Date(user.joinDate).toLocaleDateString('uk-UA')}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{user.totalOrders}</p>
                    <p className="text-sm text-gray-600">Замовлень</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{user.totalSpent.toLocaleString()} ₴</p>
                    <p className="text-sm text-gray-600">Всього витрачено</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Замовлення
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Обране
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Профіль
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Налаштування
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Історія замовлень</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="border-l-4 border-l-blue-600">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">Замовлення #{order.id}</h3>
                              {getStatusBadge(order.status)}
                            </div>
                            <p className="text-gray-600 mb-1">{order.items}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(order.date).toLocaleDateString('uk-UA')}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-blue-600">
                              {order.total.toLocaleString()} ₴
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              Деталі
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Favorites Tab */}
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Обрані товари</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">У вас поки немає обраних товарів</p>
                  <Button>Перейти до каталогу</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Персональні дані</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ім'я</Label>
                    <Input id="firstName" defaultValue="Олександр" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Прізвище</Label>
                    <Input id="lastName" defaultValue="Іванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" defaultValue={user.phone} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Адреса доставки</Label>
                    <Input id="address" placeholder="Введіть адресу" />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Зберегти зміни
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Налаштування акаунту</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Поточний пароль</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Новий пароль</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Підтвердіть пароль</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Змінити пароль
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Сповіщення</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email-сповіщення</p>
                      <p className="text-sm text-gray-600">Отримувати інформацію про замовлення</p>
                    </div>
                    <Button variant="outline" size="sm">Увімкнено</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">SMS-сповіщення</p>
                      <p className="text-sm text-gray-600">Отримувати SMS про статус доставки</p>
                    </div>
                    <Button variant="outline" size="sm">Вимкнено</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
