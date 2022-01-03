module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '792ad5be0bfdb343efd254d450e1fb94'),
  },
});
