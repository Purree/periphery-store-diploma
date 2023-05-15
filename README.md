# How to run application first time via docker.

1. Replace .env.example to .env.
2. Configure .env file.
3. Setup your nginx server.
4. Copy db data into ./tmp/db if you have it else skip this step.
5. Run `docker-compose up -d`.
5.1. If npm download packages too slow use it https://stackoverflow.com/a/75792059.
6. Run `docker-compose exec shopapp bash`.
7. Run `php artisan key:generate`.
8. *Skip this step if you do 3-rd step*
    1. Run `php artisan migrate`.

# Queue start

1. Run `docker-compose exec shopapp bash`.
2. Run `nohup php artisan queue:work --daemon > /tmp/nohup.log &`
