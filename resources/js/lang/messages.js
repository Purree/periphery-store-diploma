export default {
    en: {
        errors: {
            pageNotFound: 'Page not found',
            forbidden: 'Access deny'
        },
        nav: {
            search: 'Type something',
            buttons: {
                profile: 'Profile',
                orders: 'Orders',
                cart: 'Cart',
                additionalActions: {
                    name: 'Additional actions',
                    changeLanguage: 'Change language'
                }
            }
        },
        authorization: {
            error: {
                unableToDetermineUser: 'Unable to determine user',
                unableToDetermineUserDescription: 'Unable to sign in to your account, please try again later or sign out and sign in again.'
            },
            login: 'Login',
            register: 'Register',
            logout: 'Logout',
            email: 'Email',
            nickname: 'Nickname',
            password: 'Password',
            confirmPassword: 'Confirm password',
            rememberMe: 'Remember me',
            successfullyRegistered: 'You have successfully registered!',
            successfullyLoggedIn: 'You have successfully logged in!',
            successfullyLoggedOut: 'You have successfully logged out!'
        },
        profile: {
            titles: {
                personalInformation: 'Personal information'
            },
            successfullyUpdated: 'You have successfully updated your profile!',
            mainInformation: {
                buttons: {
                    update: 'Update',
                    cancel: 'Cancel'
                },
                errors: {
                    validationMessage: 'The data entered in the form is incorrect, try to double-check its correctness.',
                    nickname: {
                        required: 'Please input your name',
                        length: 'Length should be 3 to 30'
                    }
                }
            },
            avatar: {
                buttons: {
                    delete: 'Delete avatar'
                },
                errors: {
                    incorrectExtension: 'Avatar must be JPG/PNG file!',
                    incorrectSize: 'Avatar size must be less than 2MB!'
                }
            }
        },
        home: {
            products: {
                productsWithDiscount: 'Products with discount',
                salesHits: 'Sales hits',
                otherProducts: 'Other products',
                noProducts: 'There are no products here yet. Try again later.'
            },
            categories: {
                popularCategories: 'Popular categories'
            }
        },
        product: {
            productUnavailable: 'The product is not yet available for purchase. Please wait or contact the seller',
            reviews: {
                writeComment: 'Write comment',
                reply: 'Reply',
                showReplies: 'Show replies',
                allReviews: 'Show additional reviews',
                latestReview: 'Latest review'
            }
        },
        general: {
            created: 'Created',
            updated: 'Updated',
            expand: 'Expand',
            categories: 'Categories',
            discount: 'Discount',
            needAuth: 'You need to be logged in to perform this action',
            reviews: {
                noReviews: 'No reviews',
                reviewsCount: 'No reviews | {count} review | {count} reviews',
                anonymousReview: 'Anonymous review',
                advantages: 'Advantages',
                disadvantages: 'Disadvantages',
                comments: 'Comments',
                showReplies: 'Show answers'
            },
            addToCart: 'To cart',
            showMore: 'Show more'
        }
    },
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
                personalInformation: 'Личные данные'
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
                writeComment: 'Написать комментарий',
                reply: 'Ответить',
                showReplies: 'Показать ответы',
                allReviews: 'Показать дополнительные отзывы',
                latestReview: 'Последний отзыв'
            }
        },
        general: {
            created: 'Создано',
            updated: 'Обновлено',
            expand: 'Расширить',
            categories: 'Категории',
            discount: 'Скидка',
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
