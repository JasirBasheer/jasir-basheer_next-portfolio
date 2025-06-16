module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dhravya.dev',
          pathname: '/**', // Allow all paths under dhravya.dev
        },
        {
          protocol: 'https',
          hostname: 'i.dhr.wtf', // Allow the domain from the nested URL
          pathname: '/**',
        },
      ],
    },
  };