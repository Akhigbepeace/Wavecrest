module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};
