<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Errors Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during errors throwing for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
     */

    'tooManyImages' => 'Too many images count. Max images count is :attribute',
    'tooManyQuantities' => 'You entered too many :product items. The seller can\'t deliver that much',
    'transactionCreationFailed' => 'Transaction creation failed. Try again latter',
    'transactionRefundFailed' => 'Transaction refund failed. Try again latter',
    'transactionCheckFailed' => 'Transaction check failed. Try again latter',
    'transactionDoesntExists' => 'The transaction does not exist. Try to create it',
    'incorrectTransactionStatus' => 'The transaction status of the order does not allow you to create a link. Try ordering again',
    'productHasIncompleteOrders' => 'The product has incomplete orders. You cannot delete it, but you can make it unavailable for purchase',
    'productNotAvailableForPurchase' => 'This product is not available for sale',
    'cartDoesntExists' => 'Cart doesnt exists',
    'reviewAlreadyExists' => 'Review already exists',
    'cartDoesntContainProduct' => 'Cart doesnt exists',
    'modelNotFound' => 'Object not found'
];
