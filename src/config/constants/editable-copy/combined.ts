import { homeConstants as home } from "./home/values";
import { shared } from "./shared/values";

import { homeConfig } from "./home/config";
import { sharedConfig } from "./shared/config";

import { contactConfig } from "./contact/config";
import { contact } from "./contact/values";

import { aboutConfig } from "./about/config";
import { aboutProfile } from "./about/values";

export const combinedConstant = {
  home,
  shared,
  contact,
  aboutProfile,
};

export const combinedConfig = {
  contactConfig,
  homeConfig,
  sharedConfig,
  aboutConfig,
};
