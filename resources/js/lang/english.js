export default {
    en: {
        titles: {
            main: 'Shop selling computer peripherals',
            searchBy: 'Search for {searchBy}',
            search: 'Search page',
            cart: 'Products in cart',
            productCreate: 'Product create',
            product: 'Product {product}',
            productUpdate: 'Update product {product}',
            pageNotFound: 'Page not found',
            forbidden: 'Access deny',
            orders: 'Orders list',
            order: 'Order {order}',
            login: 'Login',
            register: 'Register',
            profile: 'User {user} profile'
        },
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
            attention: 'Attention',
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
                personalInformation: 'Personal information',
                yourProducts: 'Your products',
                names: 'Recipient names',
                mobiles: 'Mobile numbers',
                addresses: 'Delivery addresses'
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
            },
            contactInformation: {
                mobiles: {
                    noMobiles: 'You don\'t have any phone numbers added yet. But you can add a number right now',
                    addMobile: 'Add phone number',
                    mobile: 'Phone number'
                },
                addresses: {
                    noAddresses: 'You don\'t have any addresses added yet. But you can add a number right now',
                    addAddress: 'Add address',
                    address: 'Address'
                },
                names: {
                    noNames: 'You don\'t have any recipient names added yet. But you can add a name right now',
                    addName: 'Add name',
                    firstName: 'First name',
                    middleName: 'Middle name',
                    lastName: 'Last name'
                }
            },
            productsForSale: {
                createProduct: 'Create product',
                noProducts: 'There are no products here yet'
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
            isNotInSale: 'The product is not in sale',
            reviews: {
                leaveReview: 'Leave a review',
                writeComment: 'Write comment',
                editComment: 'Edit comment',
                reply: 'Reply',
                showReplies: 'Show replies',
                allReviews: 'Show additional reviews',
                latestReview: 'Latest review',
                yourReview: 'Your review'
            },
            createProduct: {},
            updateProduct: {
                images: {
                    tooFewImages: 'Too few images',
                    currentImage: 'Current image',
                    previewImage: 'Main product image',
                    previewImageInfo: 'The image will be automatically reduced to a resolution of {count} by {count} pixels'
                },
                title: 'Product title',
                metaTitle: 'Abbreviated product name',
                productDeleteConfirm: 'Are you sure to delete this?',
                description: 'Product description',
                price: 'Price',
                discount: 'Discount',
                quantity: 'Quantity in stock',
                available: 'Available',
                unavailable: 'Unavailable',
                isAvailable: 'Available for sale'
            }
        },
        search: {
            filters: {
                hasReviews: 'Has reviews',
                priceBetween: 'Price between',
                categories: 'Has categories',
                sellers: 'Sellers',
                apply: 'Apply'
            },
            noProducts: 'No products were found for your query. Try searching with other filters.'
        },
        cart: {
            cart: 'Cart',
            noProducts: 'There are no products in the cart yet. Add something to see it here',
            buyMessage: {
                info: 'Before buying, you need to provide your contact information',
                emptyUserData: 'Fill them out in your profile (clickable), and then come back here'
            }

        },
        orders: {
            order: 'Order',
            orders: 'Orders',
            count: 'Orders count',
            quantity: 'Quantity',
            orderDated: 'Order dated',
            noOrders: 'You don\'t have any orders yet. Buy something and it will appear her',
            status: 'Order status',
            statuses: {
                new: 'New',
                checkout: 'Checkout',
                paid: 'Paid',
                failed: 'Failed',
                shipped: 'Shipped',
                delivered: 'Delivered',
                returned: 'Returned',
                completed: 'Completed'
            }
        },
        general: {
            yes: 'Yes',
            no: 'No',
            buy: 'Buy',
            total: 'Total',
            rating: 'Rating',
            created: 'Created',
            attention: 'Attention',
            cancel: 'Cancel',
            save: 'Save',
            updated: 'Updated',
            expand: 'Expand',
            categories: 'Categories',
            discount: 'Discount',
            delete: 'Delete',
            edit: 'Edit',
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
    }
}
