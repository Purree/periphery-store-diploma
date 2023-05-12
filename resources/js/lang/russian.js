export default {
    ru: {
        errors: {
            pageNotFound: 'Страница не найдена',
            forbidden: 'Доступ запрещён'
        },
        nav: {
            search: 'Введите что-нибудь',
            buttons: {
                profile: 'Профиль',
                orders: 'Заказы',
                cart: 'Корзина',
                additionalActions: {
                    name: 'Дополнительные действия',
                    changeLanguage: 'Сменить язык'
                }
            }
        },
        authorization: {
            error: {
                unableToDetermineUser: 'Не удалось определить пользователя',
                unableToDetermineUserDescription: 'Не удалось войти в ваш аккаунт, попробуйте позже или выйдите и войдите снова.'
            },
            login: 'Войти',
            register: 'Зарегистрироваться',
            logout: 'Выйти',
            email: 'Электронная почта',
            password: 'Пароль',
            nickname: 'Никнейм',
            confirmPassword: 'Подтвердите пароль',
            rememberMe: 'Запомнить меня',
            successfullyRegistered: 'Вы успешно зарегистрировались!',
            successfullyLoggedIn: 'Вы успешно вошли в систему!',
            successfullyLoggedOut: 'Вы успешно вышли из системы!'
        },
        profile: {
            titles: {
                personalInformation: 'Личные данные',
                yourProducts: 'Ваши продукты',
                names: 'Имена получателей',
                mobiles: 'Мобильные номера',
                addresses: 'Адреса доставки'
            },
            successfullyUpdated: 'Вы успешно обновили свой профиль!',
            mainInformation: {
                buttons: {
                    update: 'Обновить',
                    cancel: 'Отменить'
                },
                errors: {
                    validationMessage: 'Введенные в форму данные некорректны, попробуйте еще раз проверить их корректность.',
                    nickname: {
                        required: 'Пожалуйста, введите ваше имя',
                        length: 'Длина должна быть от 3 до 30'
                    }
                }
            },
            avatar: {
                buttons: {
                    delete: 'Удалить аватар'
                },
                errors: {
                    incorrectExtension: 'Аватар должен быть JPG/PNG файлом!',
                    incorrectSize: 'Размер аватара должен быть меньше 2MB!'
                }
            },
            contactInformation: {
                mobiles: {
                    noMobiles: 'У вас ещё нет добавленных телефонных номеров. Но вы можете добавить имя прямо сейчас',
                    addMobile: 'Добавить номер',
                    mobile: 'Номер'
                },
                addresses: {
                    noAddresses: 'У вас ещё нет добавленных адресов. Но вы можете добавить имя прямо сейчас',
                    addAddress: 'Добавить адрес',
                    address: 'Адрес'
                },
                names: {
                    noNames: 'У вас ещё нет добавленных имён получателей. Но вы можете добавить имя прямо сейчас',
                    addName: 'Добавить имя',
                    firstName: 'Имя',
                    middleName: 'Фамилия',
                    lastName: 'Отчество'
                }
            },
            productsForSale: {
                createProduct: 'Создать продукт',
                noProducts: 'Здесь ещё нет продуктов'
            }
        },
        home: {
            products: {
                productsWithDiscount: 'Товары со скидкой',
                salesHits: 'Хиты продаж',
                otherProducts: 'Прочие продукты',
                noProducts: 'Здесь пока нет продуктов. Попробуйте зайти позже.'
            },
            categories: {
                popularCategories: 'Популярные категории'
            }
        },
        product: {
            productUnavailable: 'Продукт пока недоступен к покупке. Пожалуйста, подождите или свяжитесь с продавцом',
            reviews: {
                leaveReview: 'Оставить отзыв',
                writeComment: 'Написать комментарий',
                editComment: 'Редактировать комментарий',
                reply: 'Ответить',
                showReplies: 'Показать ответы',
                allReviews: 'Показать дополнительные отзывы',
                latestReview: 'Последний отзыв',
                yourReview: 'Ваш отзыв'
            },
            createProduct: {},
            updateProduct: {
                images: {
                    tooFewImages: 'Слишком мало изображений',
                    currentImage: 'Текущее изображение',
                    previewImage: 'Главное изображение продукта',
                    previewImageInfo: 'Изображение будет автоматически приведено к разрешению {count} на {count} пикселей'
                },
                title: 'Название продукта',
                metaTitle: 'Сокращённое название продукта',
                productDeleteConfirm: 'Вы уверены, что хотите удалить это?',
                description: 'Описание продукта',
                price: 'Цена',
                discount: 'Скидка',
                available: 'Доступен',
                unavailable: 'Недоступен',
                quantity: 'Количество на складе',
                isAvailable: 'Доступен к продаже'
            }
        },
        search: {
            filters: {
                hasReviews: 'Есть отзывы',
                priceBetween: 'Цена между',
                categories: 'Имеет категории',
                sellers: 'Продавцы',
                apply: 'Применить'
            },
            noProducts: 'По вашему запросу не найдено продуктов. Попробуйте поискать с другими фильтрами.'
        },
        cart: {
            cart: 'Корзина',
            noProducts: 'В корзине ещё нету продуктов. Добавьте что-нибудь, чтобы увидеть его тут',
            buyMessage: {
                info: 'Перед покупкой вам необходимо указать Ваши контактные данные',
                emptyUserData: 'Заполните их в профиле (кликабельно), а, затем, возвращайтесь сюда'
            }
        },
        orders: {
            order: 'Заказ',
            orders: 'Заказы',
            quantity: 'Количество',
            orderDated: 'Заказ от',
            noOrders: 'У вас ещё нет заказов. Купите что-нибудь и это появится тут',
            status: 'Статус заказа',
            statuses: {
                new: 'Новый',
                checkout: 'Проверяется',
                paid: 'Оплачено',
                failed: 'Провалено',
                shipped: 'Отправлено',
                delivered: 'Доставлено',
                returned: 'Отменено',
                completed: 'Завершено'
            }
        },
        general: {
            yes: 'Да',
            no: 'Нет',
            buy: 'Купить',
            total: 'Всего',
            rating: 'Рейтинг',
            created: 'Создано',
            attention: 'Внимание',
            cancel: 'Отменить',
            save: 'Сохранить',
            updated: 'Обновлено',
            expand: 'Расширить',
            categories: 'Категории',
            discount: 'Скидка',
            delete: 'Удалить',
            edit: 'Редактировать',
            needAuth: 'Вам нужно авторизоваться, чтобы совершить это действие',
            reviews: {
                noReviews: 'Нет отзывов',
                reviewsCount: 'Нет отзывов | {count} отзыв | {count} отзыва | {count} отзывов',
                anonymousReview: 'Анонимный отзыв',
                advantages: 'Достоинства',
                disadvantages: 'Недостатки',
                comments: 'Комментарии',
                showReplies: 'Показать ответы'
            },
            addToCart: 'В корзину',
            showMore: 'Показать больше'
        }
    }
}
