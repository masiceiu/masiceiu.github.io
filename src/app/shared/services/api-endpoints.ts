interface ApiEndpointConfig {
  apiBaseUrl?: string;
  authApiBaseUrl?: string;
  zikrApiBaseUrl?: string;
  zikrApiPath?: string;
}

export function buildZikrApiUrls(config: ApiEndpointConfig, route: string): string[] {
  const urls = [
    fromBase(config.apiBaseUrl, config.zikrApiPath || 'zikr/public/api/', route),
    fromBase(config.zikrApiBaseUrl, '', route)
  ];

  return uniqueUrls(urls);
}

export function buildAuthApiUrls(config: ApiEndpointConfig, route: string): string[] {
  const urls = [
    fromBase(config.authApiBaseUrl, '', route),
    fromBase(config.apiBaseUrl, 'api/', route),
    ...buildZikrApiUrls(config, route)
  ];

  return uniqueUrls(urls);
}

function fromBase(baseUrl: string | undefined, path: string, route: string): string {
  if (!baseUrl) {
    return '';
  }

  return `${withSlash(baseUrl)}${trimSlashes(path)}${route}`;
}

function withSlash(value: string): string {
  return value.endsWith('/') ? value : `${value}/`;
}

function trimSlashes(value: string): string {
  if (!value) {
    return '';
  }

  return `${value.replace(/^\/+|\/+$/g, '')}/`;
}

function uniqueUrls(urls: string[]): string[] {
  return urls.filter((url, index) => !!url && urls.indexOf(url) === index);
}