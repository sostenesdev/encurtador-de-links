## Laravel API

### Instalação do backend:
#### Requisitos:
- PHP 8.2 ou superior
- Composer


```bash
$ composer install
$ cp .en.example .env
$ php artisan migrate
$ php artisan db:seed
$ php artisan key:generate
$ php artisan jwt:secret
$ php artisan serve

```

### Instalação do frontend:

#### Requisitos:
- node 20 ou superior
- npm

```bash
$ npm install
$ npm run dev
# para build em produção:
# $ npm run build 

```