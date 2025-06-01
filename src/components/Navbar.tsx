
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Search, 
  ShoppingCart, 
  User, 
  BookMarked,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Головна', icon: Home },
    { path: '/catalog', label: 'Каталог', icon: Search },
    { path: '/favorites', label: 'Обране', icon: BookMarked },
    { path: '/cart', label: 'Кошик', icon: ShoppingCart },
    { path: '/profile', label: 'Кабінет', icon: User },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ET</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ElectroTech</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Пошук товарів..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActivePath(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center gap-2 ${
                      isActivePath(item.path) 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.path === '/cart' && (
                      <Badge variant="destructive" className="ml-1 text-xs">
                        3
                      </Badge>
                    )}
                    {item.path === '/favorites' && (
                      <Badge variant="secondary" className="ml-1 text-xs">
                        5
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <Link to="/auth">
              <Button variant="outline" size="sm">
                Вхід
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            {/* Mobile Search */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Пошук товарів..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button
                      variant={isActivePath(item.path) ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        isActivePath(item.path) 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      {item.label}
                      {item.path === '/cart' && (
                        <Badge variant="destructive" className="ml-auto">
                          3
                        </Badge>
                      )}
                      {item.path === '/favorites' && (
                        <Badge variant="secondary" className="ml-auto">
                          5
                        </Badge>
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Auth */}
            <div className="p-4 border-t">
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">
                  Вхід / Реєстрація
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
