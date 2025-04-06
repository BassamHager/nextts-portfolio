const config = {
  env: {
    main: {
      apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    },
    imageKit: {
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
    },
  },
} as const;

export default config;
