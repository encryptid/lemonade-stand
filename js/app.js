const app = angular.module('LemonadeApp', []);

// const controllers = [
//     require('./controllers/dashboard'),
//     // require('./controllers/*'),
//     // require('./controllers/*'),
// ];

// for (let i = 0; i < controllers.length; i++) {
//     app.controller(controllers[i].name, controllers[i].func);
// }

const Dashboard = require('./controllers/Dashboard');
const Totals = require('./services/totals');
const Resources = require('./controllers/ResourceMgmt');
const Stock = require('./services/stock');

app.controller(Dashboard.name, Dashboard.func);
app.controller(Resources.name, Resources.func);

app.component('statsSection', {
    templateUrl: 'templates/statsSection.html',
    controller: 'Dashboard',
});

app.component('resourceMgmt', {
    templateUrl:'templates/resourceMgmt.html',
    controller: 'ResourceMgmt',
});

app.factory(Totals.name, Totals.func);

app.factory(Stock.name, Stock.func);