const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/kashew',
  stripe_connect_test_client_id: 'ca_IvGLtn8MTReo0YkybzKF5Z9RZc1RBPL4',
  stripe_test_secret_key: 'pk_test_51IJ7rdAOXpv1XvELSlm3W4YJfShXImtfg2HEfN0WFYRiYlosxr1pPys6AKKsOBUhbxfsJkmO8rCzbe9ZHLxv0QrT00Z5QvTlcD',
  stripe_test_api_key: 'pk_test_51IJ7rdAOXpv1XvELSlm3W4YJfShXImtfg2HEfN0WFYRiYlosxr1pPys6AKKsOBUhbxfsJkmO8rCzbe9ZHLxv0QrT00Z5QvTlcD'
  
}

export default config
