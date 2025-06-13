import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jasmine",
    short_name: "Jasmine",
    description: "Jasmine pwa",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    // icons: [
    //   {
    //     src: "/assets/icons/logo/web-app-manifest-192x192.png",
    //     sizes: "192x192",
    //     type: "image/png",
    //   },
    //   {
    //     src: "/assets/icons/logo/web-app-manifest-512x512.png",
    //     sizes: "512x512",
    //     type: "image/png",
    //   },
    // ],
    icons: [
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-512x512.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/assets/icons/logo/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
