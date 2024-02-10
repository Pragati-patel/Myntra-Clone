export const BaseUrl = "http://52.90.114.34:3000/";
export const AppEnv = {
  STG: "STG",
  PROD: "PROD",
};

const appEnv = AppEnv.STG;

const ConfigurationProd = {
  BASE_URL: "http://52.90.114.34:3000/",
};

const ConfigurationStaging = {
  BASE_URL: "http://52.90.114.34:3000/",
  // BASE_URL: "http://3.6.205.109:4000/api/",
};

const Config =
  appEnv === AppEnv.PROD ? ConfigurationProd : ConfigurationStaging;

export const AppConfig = {
  appEnv,
  Config,
};
