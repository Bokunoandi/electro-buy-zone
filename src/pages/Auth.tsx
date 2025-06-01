
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Mail, Lock, User, Phone } from 'lucide-react';

const Auth = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    remember: false
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', loginForm);
    // Here you would handle login logic
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
      alert('Паролі не співпадають!');
      return;
    }
    console.log('Register:', registerForm);
    // Here you would handle registration logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to home */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              На головну
            </Button>
          </Link>
        </div>

        <Card className="shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">ET</span>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              ElectroTech
            </CardTitle>
            <p className="text-gray-600">Ласкаво просимо до нашого магазину</p>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="login" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Вхід</TabsTrigger>
                <TabsTrigger value="register">Реєстрація</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="example@email.com"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="Введіть пароль"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginForm.remember}
                        onCheckedChange={(checked) => setLoginForm({...loginForm, remember: checked as boolean})}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Запам'ятати мене
                      </Label>
                    </div>
                    <Button variant="link" className="text-sm p-0">
                      Забули пароль?
                    </Button>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Увійти
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Немає акаунту?{' '}
                      <Button variant="link" className="p-0" onClick={() => {}}>
                        Зареєструйтесь
                      </Button>
                    </p>
                  </div>
                </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Ім'я</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="first-name"
                          placeholder="Ім'я"
                          value={registerForm.firstName}
                          onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Прізвище</Label>
                      <Input
                        id="last-name"
                        placeholder="Прізвище"
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="example@email.com"
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="phone"
                        placeholder="+380 99 123 45 67"
                        value={registerForm.phone}
                        onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="register-password"
                        type="password"
                        placeholder="Введіть пароль"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Підтвердьте пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Підтвердьте пароль"
                        value={registerForm.confirmPassword}
                        onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agree-terms"
                      checked={registerForm.agreeTerms}
                      onCheckedChange={(checked) => setRegisterForm({...registerForm, agreeTerms: checked as boolean})}
                      required
                    />
                    <Label htmlFor="agree-terms" className="text-sm">
                      Я погоджуюся з{' '}
                      <Button variant="link" className="p-0 h-auto text-sm">
                        умовами використання
                      </Button>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!registerForm.agreeTerms}
                  >
                    Зареєструватися
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Вже є акаунт?{' '}
                      <Button variant="link" className="p-0" onClick={() => {}}>
                        Увійдіть
                      </Button>
                    </p>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
