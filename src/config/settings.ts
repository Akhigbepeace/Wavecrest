const feature_env_variable = process.env.NEXT_PUBLIC_FEATURE_TOGGLE || "";

const FEATURE_TOGGLES = new Set(feature_env_variable.toLowerCase().split(","));

export const USE_ONLINE_CONFIG = FEATURE_TOGGLES.has("use_online_config");

export const SITE_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://www.wavecrest.edu.ng";

export const ENVIRONMENT = (process.env.NEXT_PUBLIC_ENVIRONMENT || "staging")
  .trim()
  .toLowerCase();

export const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY as string;
export const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
export const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
