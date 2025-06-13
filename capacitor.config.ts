import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "co.viracompany.jasmine",
  appName: "jasmine",
  webDir: "public",
  server: {
    url: "https://next-pwa-capacitor.vercel.app/",
    cleartext: false,
  },
};

export default config;
