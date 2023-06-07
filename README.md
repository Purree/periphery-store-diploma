# How to run application first time via docker.

1. Replace .env.example to .env.
2. Configure .env file.
3. Setup your nginx server.
4. Copy db data into ./tmp/db if you have it else skip this step.
5. Run `docker-compose up -d`.
6. Run `docker-compose exec shopapp bash`.
7. Run `composer install`.
9. Run `php artisan storage:link`
10. Run `php artisan key:generate`. 
11. Run SQL query `GRANT ALL PRIVILEGES ON *.* TO 'puresh'@'%';`;
12. *Skip this step if you do 3-rd step*
    1. Run `php artisan migrate`.
13. Manually create folders from [StoredImagesFolderEnum.php](app%2FEnums%2FStoredImagesFolderEnum.php) in your storage directory.

# Queue start

1. Run `docker-compose exec shopapp bash`.
2. Run `nohup php artisan queue:work --daemon > /tmp/nohup.log &`

# Composer update

1. Run `docker-compose exec shopapp bash`.
2. Run `composer update`.
