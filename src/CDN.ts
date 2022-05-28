export interface CDNOptions {
  api: string;
  cdn: string;
  app: string;
}

export class CDN {
  constructor(protected readonly options: CDNOptions) {}

  defaultAvatar(id: string): string {
    return `${this.options.api}/users/${id}/default_avatar`;
  }

  avatar(hash: string, filename: string, size = 1024): string {
    return `${this.options.cdn}/avatars/${hash}/${filename}?max_side=${size}`;
  }

  icon(hash: string, size = 1024): string {
    return `${this.options.cdn}/icons/${hash}?max_side=${size}`;
  }

  invite(code: string): string {
    return `${this.options.app}/${code}`;
  }

  banner(hash: string, size = 1024): string {
    return `${this.options.cdn}/banners/${hash}?max_side=${size}`;
  }
}
