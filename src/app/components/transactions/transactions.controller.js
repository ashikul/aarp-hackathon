function TransactionsController ($state, BBVAService, $scope) {
    var ctrl = this;

    var response = [
        {
        'amount': 200.0,
        'posted_date': '2016-12-09',
        'description': 'TimeWarnerCable',
        'posted_balance': 336.0
    }, {
        'amount': 50.0,
        'posted_date': '2016-12-09',
        'description': 'Gambling.com',
        'posted_balance': 136.0
    }, {
        'amount': 35.0,
        'posted_date': '2016-12-09',
        'description': 'TimeWarnerCable',
        'posted_balance': 86.0
    }, {
        'amount': 51.0,
        'posted_date': '2016-12-09',
        'description': 'Bestbuy',
        'posted_balance': 51.0
    }];

    // ctrl.transactions = BBVAService.getTransactions();

    // ctrl.transactions = response;

    $scope.transactions = response;

    console.log('TRANSACTIONS RESPONSE');
    console.log($scope.transactions);
    // ctrl.$onInit = function () {
    //   ctrl.error = null;
    //   ctrl.user = {
    //     email: '',
    //     password: ''
    //   };
    // };
    // ctrl.createUser = function (event) {
    //   return AuthService
    //     .register(event.user)
    //     .then(function () {
    //       $state.go('app');
    //     }, function (reason) {
    //       ctrl.error = reason.message;
    //     });
    // };
}

angular
    .module('components.auth')
    .controller('TransactionsController', TransactionsController);
