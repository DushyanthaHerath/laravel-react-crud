# KindHub Student Information System

## Included
- Frontend: React
- Backend: Laravel 5.7

## How to use

- Clone: __git clone git@github.com:DushyanthaHerath/student-information-management.git kindhub__
- cd kindhub
- Copy __.env.example__ file to __.env__ and edit database credentials and APP_URL
- Run __composer install__
- Run __composer dump-autoload__
- Run __php artisan key:generate__
- Copy students_records.csv file to __storage/app/public__ (Create public directory)
- Run __php artisan migrate__
- Run __php artisan storage:link__
- Run __php artisan db:seed__
- Run __npm run dev__
- Run __php artisan serve__

