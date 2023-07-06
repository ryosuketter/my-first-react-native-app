import { ExpoConfig, ConfigContext } from "@expo/config";
import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config(); // ".env" file is loaded only in non-production environments
}

export default ({ config: expoConfig }: ConfigContext): ExpoConfig => {
  return {
    ...expoConfig,
    name: "my-first-react-native-app",
    slug: "my-first-react-native-app",
    extra: {
      microcmsApiKey: process.env.MICROCMS_API_KEY,
      microcmsServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      eas: {
        projectId: "713c452f-8c8a-4875-ad08-1cbec7c13133",
      },
    },
  };
};
