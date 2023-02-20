const feature_env_variable = process.env.NEXT_PUBLIC_FEATURE_TOGGLE || "";

const FEATURE_TOGGLES = new Set(feature_env_variable.toLowerCase().split(","));

export const USE_ONLINE_CONFIG = FEATURE_TOGGLES.has("use_online_config");
