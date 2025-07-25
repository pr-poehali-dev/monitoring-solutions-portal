import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const criticalAlerts = [
    {
      id: 1,
      title: "Высокая нагрузка на сервер",
      description: "CPU использование превышает 85% на production сервере",
      severity: "critical",
      time: "2 мин назад",
      status: "active"
    },
    {
      id: 2,
      title: "Ошибки базы данных",
      description: "Обнаружены проблемы подключения к основной БД",
      severity: "high",
      time: "5 мин назад",
      status: "investigating"
    },
    {
      id: 3,
      title: "Медленный отклик API",
      description: "Время ответа API увеличилось до 3.2 секунд",
      severity: "medium",
      time: "8 мин назад",
      status: "resolved"
    }
  ];

  const metrics = [
    { label: "Активные проблемы", value: "3", change: "+2", trend: "up", color: "coral" },
    { label: "Время отклика", value: "245ms", change: "-12%", trend: "down", color: "blue" },
    { label: "Uptime", value: "99.8%", change: "+0.1%", trend: "up", color: "lavender" },
    { label: "Пользователи онлайн", value: "1,247", change: "+15%", trend: "up", color: "coral" }
  ];

  const solutions = [
    {
      icon: "Cpu",
      title: "Автомасштабирование",
      description: "Автоматическое добавление ресурсов при высокой нагрузке"
    },
    {
      icon: "Database",
      title: "Резервирование БД",
      description: "Переключение на резервную базу данных при сбоях"
    },
    {
      icon: "Shield",
      title: "Мониторинг безопасности",
      description: "Отслеживание подозрительной активности в реальном времени"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-red-100 text-red-800';
      case 'investigating': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-coral rounded-xl flex items-center justify-center">
                <Icon name="Activity" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">MonitorPro</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Мониторинг</a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium">Решения</a>
            </nav>
            <Button className="bg-coral hover:bg-coral/90 text-white">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Мониторинг проблем в
                <span className="text-coral"> реальном времени</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Получайте мгновенные уведомления о критических проблемах и автоматические решения для поддержания стабильности системы
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg hover-scale">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать мониторинг
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-scale">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Документация
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                <img 
                  src="/img/d9b079ff-943b-4434-8817-5374e1c67f71.jpg" 
                  alt="Monitoring Dashboard" 
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Система активна</span>
                  </div>
                  <Badge className="bg-blue text-white">Live</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ключевые метрики</h3>
            <p className="text-gray-600 text-lg">Отслеживайте важные показатели системы</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="hover-scale cursor-pointer animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-600">{metric.label}</h4>
                    <Icon 
                      name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={16} 
                      className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'} 
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {metric.change} за последний час
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Alerts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Критические уведомления</h3>
              <p className="text-gray-600">Активные проблемы требующие внимания</p>
            </div>
            <Button className="bg-lavender hover:bg-lavender/90 text-white">
              <Icon name="Bell" size={16} className="mr-2" />
              Все уведомления
            </Button>
          </div>
          <div className="space-y-4">
            {criticalAlerts.map((alert, index) => (
              <Card key={alert.id} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-4 h-4 rounded-full ${getSeverityColor(alert.severity)} mt-1 animate-pulse-glow`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{alert.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(alert.status)}>
                            {alert.status === 'active' ? 'Активно' : 
                             alert.status === 'investigating' ? 'Расследуется' : 'Решено'}
                          </Badge>
                          <span className="text-sm text-gray-500">{alert.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{alert.description}</p>
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <Icon name="Eye" size={14} className="mr-1" />
                          Подробнее
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="CheckCircle" size={14} className="mr-1" />
                          Отметить решенным
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gradient-to-r from-coral/10 to-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Автоматические решения</h3>
            <p className="text-gray-600 text-lg">Умные предложения для устранения проблем</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover-scale cursor-pointer bg-white/80 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-coral to-blue rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Icon name={solution.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">{solution.description}</p>
                  <Button className="w-full bg-lavender hover:bg-lavender/90 text-white">
                    Настроить решение
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={18} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">MonitorPro</h4>
              </div>
              <p className="text-gray-400">
                Профессиональный мониторинг систем с умными решениями проблем
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Продукт</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Функции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Связаться с нами</h5>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="bg-transparent border-gray-600 text-gray-400 hover:text-white hover:border-white">
                  <Icon name="MessageCircle" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MonitorPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}