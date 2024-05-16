const newsRouter = require('./news');
const phoneRouter = require('./phone');
const meRouter = require('./me');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/phones', phoneRouter);
    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route;
