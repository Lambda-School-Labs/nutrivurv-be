import server from './server';
import passport from 'passport'

const opts = {
  port: process.env.PORT || 4000,
  cors: {
    credentials: true,
    origin: [
      'http://localhost:3000',
      'https://nutrivurv-staging.herokuapp.com',
      'http://nutrivurv.com',
      'https://nutrivurv.herokuapp.com',
      'nutrivurv.com',
    ],
    methods: 'POST,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    subscriptions: '/subscriptions',
  },
};

server.use(passport.initialize());

server.start(opts, () => {
  console.log('The server is up!');
});
