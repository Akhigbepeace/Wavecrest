const feature_env_variable = process.env.NEXT_PUBLIC_FEATURE_TOGGLE || "";

const FEATURE_TOGGLES = new Set(feature_env_variable.toLowerCase().split(","));

export const USE_ONLINE_CONFIG = FEATURE_TOGGLES.has("use_online_config");

export const SITE_BASE_URL =
  process.env.NEXT_PUBLIC_SITE_BASE_URL || "https://www.wavecrest.edu.ng";

export const ENVIRONMENT = (process.env.NEXT_PUBLIC_ENVIRONMENT || "staging")
  .trim()
  .toLowerCase();
