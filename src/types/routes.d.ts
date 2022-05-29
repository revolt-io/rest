export type Routes = {
  path: `/`;
  parts: 1;
  method: 'GET';
  response: {
    revolt: string;
    features: {
      captcha: { enabled: boolean; key: string };
      email: boolean;
      invite_only: boolean;
      autumn: { enabled: boolean; url: string };
      january: { enabled: boolean; url: string };
      voso: { enabled: boolean; url: string; ws: string };
    };
    ws: string;
    app: string;
    vapid: string;
  };
} | {
  path: `/users/@me`;
  parts: 2;
  method: 'GET';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/@me`;
  parts: 2;
  method: 'PATCH';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/@me/username`;
  parts: 3;
  method: 'PATCH';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/${string}/default_avatar`;
  parts: 3;
  method: 'GET';
  response: undefined;
} | {
  path: `/users/${string}/profile`;
  parts: 3;
  method: 'GET';
  response: {
    content?: string | null;
    background?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
  };
} | {
  path: `/users/dms`;
  parts: 2;
  method: 'GET';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  }[];
} | {
  path: `/users/${string}/dm`;
  parts: 3;
  method: 'GET';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/users/${string}/mutual`;
  parts: 3;
  method: 'GET';
  response: { users: string[]; servers: string[] };
} | {
  path: `/users/${string}/friend`;
  parts: 3;
  method: 'PUT';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/${string}/friend`;
  parts: 3;
  method: 'DELETE';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/${string}/block`;
  parts: 3;
  method: 'PUT';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/users/${string}/block`;
  parts: 3;
  method: 'DELETE';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  };
} | {
  path: `/bots/create`;
  parts: 2;
  method: 'POST';
  response: {
    _id: string;
    owner: string;
    token: string;
    public: boolean;
    analytics?: boolean;
    discoverable?: boolean;
    interactions_url?: string | null;
    terms_of_service_url?: string | null;
    privacy_policy_url?: string | null;
    flags?: number | null;
  };
} | {
  path: `/bots/${string}/invite`;
  parts: 3;
  method: 'GET';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    description?: string | null;
  };
} | {
  path: `/bots/${string}/invite`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    bot: {
      _id: string;
      owner: string;
      token: string;
      public: boolean;
      analytics?: boolean;
      discoverable?: boolean;
      interactions_url?: string | null;
      terms_of_service_url?: string | null;
      privacy_policy_url?: string | null;
      flags?: number | null;
    };
    user: {
      _id: string;
      username: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      relations?: {
        _id: string;
        status:
          | 'None'
          | 'User'
          | 'Friend'
          | 'Outgoing'
          | 'Incoming'
          | 'Blocked'
          | 'BlockedOther';
      }[];
      badges?: number | null;
      status?: {
        text?: string | null;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string | null;
        background?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
      };
      flags?: number | null;
      privileged?: boolean;
      bot?: string;
      relationship?:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
      online?: boolean | null;
    };
  };
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/bots/${string}`;
  parts: 2;
  method: 'PATCH';
  response: {
    _id: string;
    owner: string;
    token: string;
    public: boolean;
    analytics?: boolean;
    discoverable?: boolean;
    interactions_url?: string | null;
    terms_of_service_url?: string | null;
    privacy_policy_url?: string | null;
    flags?: number | null;
  };
} | {
  path: `/bots/@me`;
  parts: 2;
  method: 'GET';
  response: {
    bots: {
      _id: string;
      owner: string;
      token: string;
      public: boolean;
      analytics?: boolean;
      discoverable?: boolean;
      interactions_url?: string | null;
      terms_of_service_url?: string | null;
      privacy_policy_url?: string | null;
      flags?: number | null;
    }[];
    users: {
      _id: string;
      username: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      relations?: {
        _id: string;
        status:
          | 'None'
          | 'User'
          | 'Friend'
          | 'Outgoing'
          | 'Incoming'
          | 'Blocked'
          | 'BlockedOther';
      }[];
      badges?: number | null;
      status?: {
        text?: string | null;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string | null;
        background?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
      };
      flags?: number | null;
      privileged?: boolean;
      bot?: string;
      relationship?:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
      online?: boolean | null;
    }[];
  };
} | {
  path: `/channels/${string}/ack/${string}`;
  parts: 4;
  method: 'PUT';
  response: undefined;
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'GET';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}`;
  parts: 2;
  method: 'PATCH';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}/members`;
  parts: 3;
  method: 'GET';
  response: {
    _id: string;
    username: string;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    relations?: {
      _id: string;
      status:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
    }[];
    badges?: number | null;
    status?: {
      text?: string | null;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string | null;
      background?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    };
    flags?: number | null;
    privileged?: boolean;
    bot?: string;
    relationship?:
      | 'None'
      | 'User'
      | 'Friend'
      | 'Outgoing'
      | 'Incoming'
      | 'Blocked'
      | 'BlockedOther';
    online?: boolean | null;
  }[];
} | {
  path: `/channels/${string}/invites`;
  parts: 3;
  method: 'POST';
  response: {
    type: 'Server';
    _id: string;
    server: string;
    creator: string;
    channel: string;
  } | { type: 'Group'; _id: string; creator: string; channel: string };
} | {
  path: `/channels/${string}/messages`;
  parts: 3;
  method: 'GET';
  response: {
    _id: string;
    nonce?: string | null;
    channel: string;
    author: string;
    content?: string | null;
    system?:
      | { type: 'text'; content: string }
      | { type: 'user_added'; id: string; by: string }
      | { type: 'user_remove'; id: string; by: string }
      | { type: 'user_joined'; id: string }
      | { type: 'user_left'; id: string }
      | { type: 'user_kicked'; id: string }
      | { type: 'user_banned'; id: string }
      | { type: 'channel_renamed'; name: string; by: string }
      | { type: 'channel_description_changed'; by: string }
      | { type: 'channel_icon_changed'; by: string };
    attachments?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string | null;
        original_url?: string | null;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string | null }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string | null;
        description?: string | null;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string | null;
        icon_url?: string | null;
        colour?: string | null;
      }
      | {
        type: 'Image';
        url: string;
        width: number;
        height: number;
        size: 'Large' | 'Preview';
      }
      | { type: 'Video'; url: string; width: number; height: number }
      | {
        type: 'Text';
        icon_url?: string | null;
        url?: string | null;
        title?: string | null;
        description?: string | null;
        media?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
        colour?: string | null;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string | null; avatar?: string | null };
  }[] | {
    messages: {
      _id: string;
      nonce?: string | null;
      channel: string;
      author: string;
      content?: string | null;
      system?:
        | { type: 'text'; content: string }
        | { type: 'user_added'; id: string; by: string }
        | { type: 'user_remove'; id: string; by: string }
        | { type: 'user_joined'; id: string }
        | { type: 'user_left'; id: string }
        | { type: 'user_kicked'; id: string }
        | { type: 'user_banned'; id: string }
        | { type: 'channel_renamed'; name: string; by: string }
        | { type: 'channel_description_changed'; by: string }
        | { type: 'channel_icon_changed'; by: string };
      attachments?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      }[];
      edited?: string;
      embeds?:
        | {
          type: 'Website';
          url?: string | null;
          original_url?: string | null;
          special?:
            | 'None'
            | 'GIF'
            | { type: 'YouTube'; id: string; timestamp?: string | null }
            | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
            | {
              type: 'Twitch';
              content_type: 'Channel' | 'Video' | 'Clip';
              id: string;
            }
            | { type: 'Spotify'; content_type: string; id: string }
            | 'Soundcloud'
            | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
          title?: string | null;
          description?: string | null;
          image?: {
            url: string;
            width: number;
            height: number;
            size: 'Large' | 'Preview';
          };
          video?: { url: string; width: number; height: number };
          site_name?: string | null;
          icon_url?: string | null;
          colour?: string | null;
        }
        | {
          type: 'Image';
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        }
        | { type: 'Video'; url: string; width: number; height: number }
        | {
          type: 'Text';
          icon_url?: string | null;
          url?: string | null;
          title?: string | null;
          description?: string | null;
          media?: {
            _id: string;
            tag: string;
            filename: string;
            metadata:
              | 'File'
              | 'Text'
              | { type: 'Image'; width: number; height: number }
              | { type: 'Video'; width: number; height: number }
              | 'Audio';
            content_type: string;
            size: number;
            deleted?: boolean | null;
            reported?: boolean | null;
            message_id?: string | null;
            user_id?: string | null;
            server_id?: string | null;
            object_id?: string | null;
          };
          colour?: string | null;
        }
        | 'None'[];
      mentions?: string[];
      replies?: string[];
      masquerade?: { name?: string | null; avatar?: string | null };
    }[];
    users: {
      _id: string;
      username: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      relations?: {
        _id: string;
        status:
          | 'None'
          | 'User'
          | 'Friend'
          | 'Outgoing'
          | 'Incoming'
          | 'Blocked'
          | 'BlockedOther';
      }[];
      badges?: number | null;
      status?: {
        text?: string | null;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string | null;
        background?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
      };
      flags?: number | null;
      privileged?: boolean;
      bot?: string;
      relationship?:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
      online?: boolean | null;
    }[];
    members?: {
      _id: { server: string; user: string };
      nickname?: string | null;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      roles?: string[];
    }[];
  };
} | {
  path: `/channels/${string}/messages`;
  parts: 3;
  method: 'POST';
  response: {
    _id: string;
    nonce?: string | null;
    channel: string;
    author: string;
    content?: string | null;
    system?:
      | { type: 'text'; content: string }
      | { type: 'user_added'; id: string; by: string }
      | { type: 'user_remove'; id: string; by: string }
      | { type: 'user_joined'; id: string }
      | { type: 'user_left'; id: string }
      | { type: 'user_kicked'; id: string }
      | { type: 'user_banned'; id: string }
      | { type: 'channel_renamed'; name: string; by: string }
      | { type: 'channel_description_changed'; by: string }
      | { type: 'channel_icon_changed'; by: string };
    attachments?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string | null;
        original_url?: string | null;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string | null }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string | null;
        description?: string | null;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string | null;
        icon_url?: string | null;
        colour?: string | null;
      }
      | {
        type: 'Image';
        url: string;
        width: number;
        height: number;
        size: 'Large' | 'Preview';
      }
      | { type: 'Video'; url: string; width: number; height: number }
      | {
        type: 'Text';
        icon_url?: string | null;
        url?: string | null;
        title?: string | null;
        description?: string | null;
        media?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
        colour?: string | null;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string | null; avatar?: string | null };
  };
} | {
  path: `/channels/${string}/search`;
  parts: 3;
  method: 'POST';
  response: {
    _id: string;
    nonce?: string | null;
    channel: string;
    author: string;
    content?: string | null;
    system?:
      | { type: 'text'; content: string }
      | { type: 'user_added'; id: string; by: string }
      | { type: 'user_remove'; id: string; by: string }
      | { type: 'user_joined'; id: string }
      | { type: 'user_left'; id: string }
      | { type: 'user_kicked'; id: string }
      | { type: 'user_banned'; id: string }
      | { type: 'channel_renamed'; name: string; by: string }
      | { type: 'channel_description_changed'; by: string }
      | { type: 'channel_icon_changed'; by: string };
    attachments?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string | null;
        original_url?: string | null;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string | null }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string | null;
        description?: string | null;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string | null;
        icon_url?: string | null;
        colour?: string | null;
      }
      | {
        type: 'Image';
        url: string;
        width: number;
        height: number;
        size: 'Large' | 'Preview';
      }
      | { type: 'Video'; url: string; width: number; height: number }
      | {
        type: 'Text';
        icon_url?: string | null;
        url?: string | null;
        title?: string | null;
        description?: string | null;
        media?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
        colour?: string | null;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string | null; avatar?: string | null };
  }[] | {
    messages: {
      _id: string;
      nonce?: string | null;
      channel: string;
      author: string;
      content?: string | null;
      system?:
        | { type: 'text'; content: string }
        | { type: 'user_added'; id: string; by: string }
        | { type: 'user_remove'; id: string; by: string }
        | { type: 'user_joined'; id: string }
        | { type: 'user_left'; id: string }
        | { type: 'user_kicked'; id: string }
        | { type: 'user_banned'; id: string }
        | { type: 'channel_renamed'; name: string; by: string }
        | { type: 'channel_description_changed'; by: string }
        | { type: 'channel_icon_changed'; by: string };
      attachments?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      }[];
      edited?: string;
      embeds?:
        | {
          type: 'Website';
          url?: string | null;
          original_url?: string | null;
          special?:
            | 'None'
            | 'GIF'
            | { type: 'YouTube'; id: string; timestamp?: string | null }
            | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
            | {
              type: 'Twitch';
              content_type: 'Channel' | 'Video' | 'Clip';
              id: string;
            }
            | { type: 'Spotify'; content_type: string; id: string }
            | 'Soundcloud'
            | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
          title?: string | null;
          description?: string | null;
          image?: {
            url: string;
            width: number;
            height: number;
            size: 'Large' | 'Preview';
          };
          video?: { url: string; width: number; height: number };
          site_name?: string | null;
          icon_url?: string | null;
          colour?: string | null;
        }
        | {
          type: 'Image';
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        }
        | { type: 'Video'; url: string; width: number; height: number }
        | {
          type: 'Text';
          icon_url?: string | null;
          url?: string | null;
          title?: string | null;
          description?: string | null;
          media?: {
            _id: string;
            tag: string;
            filename: string;
            metadata:
              | 'File'
              | 'Text'
              | { type: 'Image'; width: number; height: number }
              | { type: 'Video'; width: number; height: number }
              | 'Audio';
            content_type: string;
            size: number;
            deleted?: boolean | null;
            reported?: boolean | null;
            message_id?: string | null;
            user_id?: string | null;
            server_id?: string | null;
            object_id?: string | null;
          };
          colour?: string | null;
        }
        | 'None'[];
      mentions?: string[];
      replies?: string[];
      masquerade?: { name?: string | null; avatar?: string | null };
    }[];
    users: {
      _id: string;
      username: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      relations?: {
        _id: string;
        status:
          | 'None'
          | 'User'
          | 'Friend'
          | 'Outgoing'
          | 'Incoming'
          | 'Blocked'
          | 'BlockedOther';
      }[];
      badges?: number | null;
      status?: {
        text?: string | null;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string | null;
        background?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
      };
      flags?: number | null;
      privileged?: boolean;
      bot?: string;
      relationship?:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
      online?: boolean | null;
    }[];
    members?: {
      _id: { server: string; user: string };
      nickname?: string | null;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      roles?: string[];
    }[];
  };
} | {
  path: `/channels/${string}/messages/stale`;
  parts: 4;
  method: 'POST';
  response: undefined;
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'GET';
  response: {
    _id: string;
    nonce?: string | null;
    channel: string;
    author: string;
    content?: string | null;
    system?:
      | { type: 'text'; content: string }
      | { type: 'user_added'; id: string; by: string }
      | { type: 'user_remove'; id: string; by: string }
      | { type: 'user_joined'; id: string }
      | { type: 'user_left'; id: string }
      | { type: 'user_kicked'; id: string }
      | { type: 'user_banned'; id: string }
      | { type: 'channel_renamed'; name: string; by: string }
      | { type: 'channel_description_changed'; by: string }
      | { type: 'channel_icon_changed'; by: string };
    attachments?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string | null;
        original_url?: string | null;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string | null }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string | null;
        description?: string | null;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string | null;
        icon_url?: string | null;
        colour?: string | null;
      }
      | {
        type: 'Image';
        url: string;
        width: number;
        height: number;
        size: 'Large' | 'Preview';
      }
      | { type: 'Video'; url: string; width: number; height: number }
      | {
        type: 'Text';
        icon_url?: string | null;
        url?: string | null;
        title?: string | null;
        description?: string | null;
        media?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
        colour?: string | null;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string | null; avatar?: string | null };
  };
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/messages/${string}`;
  parts: 4;
  method: 'PATCH';
  response: {
    _id: string;
    nonce?: string | null;
    channel: string;
    author: string;
    content?: string | null;
    system?:
      | { type: 'text'; content: string }
      | { type: 'user_added'; id: string; by: string }
      | { type: 'user_remove'; id: string; by: string }
      | { type: 'user_joined'; id: string }
      | { type: 'user_left'; id: string }
      | { type: 'user_kicked'; id: string }
      | { type: 'user_banned'; id: string }
      | { type: 'channel_renamed'; name: string; by: string }
      | { type: 'channel_description_changed'; by: string }
      | { type: 'channel_icon_changed'; by: string };
    attachments?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string | null;
        original_url?: string | null;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string | null }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string | null;
        description?: string | null;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string | null;
        icon_url?: string | null;
        colour?: string | null;
      }
      | {
        type: 'Image';
        url: string;
        width: number;
        height: number;
        size: 'Large' | 'Preview';
      }
      | { type: 'Video'; url: string; width: number; height: number }
      | {
        type: 'Text';
        icon_url?: string | null;
        url?: string | null;
        title?: string | null;
        description?: string | null;
        media?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
        colour?: string | null;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string | null; avatar?: string | null };
  };
} | {
  path: `/channels/${string}/messages/bulk`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/create`;
  parts: 2;
  method: 'POST';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}/recipients/${string}`;
  parts: 4;
  method: 'PUT';
  response: undefined;
} | {
  path: `/channels/${string}/recipients/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/join_call`;
  parts: 3;
  method: 'POST';
  response: string;
} | {
  path: `/channels/${string}/permissions/${string}`;
  parts: 4;
  method: 'PUT';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}/permissions/default`;
  parts: 4;
  method: 'PUT';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/servers/create`;
  parts: 2;
  method: 'POST';
  response: {
    server: {
      _id: string;
      owner: string;
      name: string;
      description?: string | null;
      channels: string[];
      categories?: { id: string; title: string; channels: string[] }[];
      system_messages?: {
        user_joined?: string | null;
        user_left?: string | null;
        user_kicked?: string | null;
        user_banned?: string | null;
      };
      roles?: {
        name: string;
        permissions: { a: number; d: number };
        colour?: string | null;
        hoist?: boolean;
        rank?: number;
      };
      default_permissions: number;
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      banner?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      flags?: number | null;
      nsfw?: boolean;
      analytics?: boolean;
      discoverable?: boolean;
    };
    channels: { channel_type: 'SavedMessages'; _id: string; user: string } | {
      channel_type: 'DirectMessage';
      _id: string;
      active: boolean;
      recipients: string[];
      last_message_id?: string | null;
    } | {
      channel_type: 'Group';
      _id: string;
      name: string;
      owner: string;
      description?: string | null;
      recipients: string[];
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      last_message_id?: string | null;
      permissions?: number | null;
      nsfw?: boolean;
    } | {
      channel_type: 'TextChannel';
      _id: string;
      server: string;
      name: string;
      description?: string | null;
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      last_message_id?: string | null;
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    } | {
      channel_type: 'VoiceChannel';
      _id: string;
      server: string;
      name: string;
      description?: string | null;
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    }[];
  };
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string | null;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string | null;
      user_left?: string | null;
      user_kicked?: string | null;
      user_banned?: string | null;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string | null;
      hoist?: boolean;
      rank?: number;
    };
    default_permissions: number;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    banner?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    flags?: number | null;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}`;
  parts: 2;
  method: 'PATCH';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string | null;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string | null;
      user_left?: string | null;
      user_kicked?: string | null;
      user_banned?: string | null;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string | null;
      hoist?: boolean;
      rank?: number;
    };
    default_permissions: number;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    banner?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    flags?: number | null;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/servers/${string}/ack`;
  parts: 3;
  method: 'PUT';
  response: undefined;
} | {
  path: `/servers/${string}/channels`;
  parts: 3;
  method: 'POST';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string | null;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string | null;
    recipients: string[];
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    permissions?: number | null;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    last_message_id?: string | null;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string | null;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/servers/${string}/members`;
  parts: 3;
  method: 'GET';
  response: {
    members: {
      _id: { server: string; user: string };
      nickname?: string | null;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      roles?: string[];
    }[];
    users: {
      _id: string;
      username: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      relations?: {
        _id: string;
        status:
          | 'None'
          | 'User'
          | 'Friend'
          | 'Outgoing'
          | 'Incoming'
          | 'Blocked'
          | 'BlockedOther';
      }[];
      badges?: number | null;
      status?: {
        text?: string | null;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string | null;
        background?: {
          _id: string;
          tag: string;
          filename: string;
          metadata:
            | 'File'
            | 'Text'
            | { type: 'Image'; width: number; height: number }
            | { type: 'Video'; width: number; height: number }
            | 'Audio';
          content_type: string;
          size: number;
          deleted?: boolean | null;
          reported?: boolean | null;
          message_id?: string | null;
          user_id?: string | null;
          server_id?: string | null;
          object_id?: string | null;
        };
      };
      flags?: number | null;
      privileged?: boolean;
      bot?: string;
      relationship?:
        | 'None'
        | 'User'
        | 'Friend'
        | 'Outgoing'
        | 'Incoming'
        | 'Blocked'
        | 'BlockedOther';
      online?: boolean | null;
    }[];
  };
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'GET';
  response: {
    _id: { server: string; user: string };
    nickname?: string | null;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    roles?: string[];
  };
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/members/${string}`;
  parts: 4;
  method: 'PATCH';
  response: {
    _id: { server: string; user: string };
    nickname?: string | null;
    avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    roles?: string[];
  };
} | {
  path: `/servers/${string}/bans/${string}`;
  parts: 4;
  method: 'PUT';
  response: { _id: { server: string; user: string }; reason?: string | null };
} | {
  path: `/servers/${string}/bans/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/bans`;
  parts: 3;
  method: 'GET';
  response: {
    users: {
      _id: string;
      username: string;
      avatar?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
    }[];
    bans: { _id: { server: string; user: string }; reason?: string | null }[];
  };
} | {
  path: `/servers/${string}/invites`;
  parts: 3;
  method: 'GET';
  response: {
    type: 'Server';
    _id: string;
    server: string;
    creator: string;
    channel: string;
  } | { type: 'Group'; _id: string; creator: string; channel: string }[];
} | {
  path: `/servers/${string}/roles`;
  parts: 3;
  method: 'POST';
  response: {
    id: string;
    role: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string | null;
      hoist?: boolean;
      rank?: number;
    };
  };
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/roles/${string}`;
  parts: 4;
  method: 'PATCH';
  response: {
    name: string;
    permissions: { a: number; d: number };
    colour?: string | null;
    hoist?: boolean;
    rank?: number;
  };
} | {
  path: `/servers/${string}/permissions/${string}`;
  parts: 4;
  method: 'PUT';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string | null;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string | null;
      user_left?: string | null;
      user_kicked?: string | null;
      user_banned?: string | null;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string | null;
      hoist?: boolean;
      rank?: number;
    };
    default_permissions: number;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    banner?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    flags?: number | null;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/servers/${string}/permissions/default`;
  parts: 4;
  method: 'PUT';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string | null;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string | null;
      user_left?: string | null;
      user_kicked?: string | null;
      user_banned?: string | null;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string | null;
      hoist?: boolean;
      rank?: number;
    };
    default_permissions: number;
    icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    banner?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    flags?: number | null;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'GET';
  response: {
    type: 'Server';
    code: string;
    server_id: string;
    server_name: string;
    server_icon?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    server_banner?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    channel_id: string;
    channel_name: string;
    channel_description?: string | null;
    user_name: string;
    user_avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
    member_count: number;
  } | {
    type: 'Group';
    code: string;
    channel_id: string;
    channel_name: string;
    channel_description?: string | null;
    user_name: string;
    user_avatar?: {
      _id: string;
      tag: string;
      filename: string;
      metadata:
        | 'File'
        | 'Text'
        | { type: 'Image'; width: number; height: number }
        | { type: 'Video'; width: number; height: number }
        | 'Audio';
      content_type: string;
      size: number;
      deleted?: boolean | null;
      reported?: boolean | null;
      message_id?: string | null;
      user_id?: string | null;
      server_id?: string | null;
      object_id?: string | null;
    };
  };
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'POST';
  response: {
    type: 'Server';
    channels: { channel_type: 'SavedMessages'; _id: string; user: string } | {
      channel_type: 'DirectMessage';
      _id: string;
      active: boolean;
      recipients: string[];
      last_message_id?: string | null;
    } | {
      channel_type: 'Group';
      _id: string;
      name: string;
      owner: string;
      description?: string | null;
      recipients: string[];
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      last_message_id?: string | null;
      permissions?: number | null;
      nsfw?: boolean;
    } | {
      channel_type: 'TextChannel';
      _id: string;
      server: string;
      name: string;
      description?: string | null;
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      last_message_id?: string | null;
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    } | {
      channel_type: 'VoiceChannel';
      _id: string;
      server: string;
      name: string;
      description?: string | null;
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    }[];
    server: {
      _id: string;
      owner: string;
      name: string;
      description?: string | null;
      channels: string[];
      categories?: { id: string; title: string; channels: string[] }[];
      system_messages?: {
        user_joined?: string | null;
        user_left?: string | null;
        user_kicked?: string | null;
        user_banned?: string | null;
      };
      roles?: {
        name: string;
        permissions: { a: number; d: number };
        colour?: string | null;
        hoist?: boolean;
        rank?: number;
      };
      default_permissions: number;
      icon?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      banner?: {
        _id: string;
        tag: string;
        filename: string;
        metadata:
          | 'File'
          | 'Text'
          | { type: 'Image'; width: number; height: number }
          | { type: 'Video'; width: number; height: number }
          | 'Audio';
        content_type: string;
        size: number;
        deleted?: boolean | null;
        reported?: boolean | null;
        message_id?: string | null;
        user_id?: string | null;
        server_id?: string | null;
        object_id?: string | null;
      };
      flags?: number | null;
      nsfw?: boolean;
      analytics?: boolean;
      discoverable?: boolean;
    };
  };
} | {
  path: `/invites/${string}`;
  parts: 2;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/account/create`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/reverify`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/`;
  parts: 3;
  method: 'GET';
  response: { _id: string; email: string };
} | {
  path: `/auth/account/change/password`;
  parts: 4;
  method: 'PATCH';
  response: undefined;
} | {
  path: `/auth/account/change/email`;
  parts: 4;
  method: 'PATCH';
  response: undefined;
} | {
  path: `/auth/account/verify/${string}`;
  parts: 4;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/reset_password`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/reset_password`;
  parts: 3;
  method: 'PATCH';
  response: undefined;
} | {
  path: `/auth/session/login`;
  parts: 3;
  method: 'POST';
  response:
    | {
      result: 'Success';
      _id?: string | null;
      user_id: string;
      token: string;
      name: string;
      subscription?: { endpoint: string; p256dh: string; auth: string };
    }
    | 'EmailOTP'
    | { result: 'MFA'; ticket: string; allowed_methods: string[] };
} | {
  path: `/auth/session/logout`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/session/all`;
  parts: 3;
  method: 'GET';
  response: { _id: string; name: string }[];
} | {
  path: `/auth/session/all`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/session/${string}`;
  parts: 3;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/session/${string}`;
  parts: 3;
  method: 'PATCH';
  response: {
    _id?: string | null;
    user_id: string;
    token: string;
    name: string;
    subscription?: { endpoint: string; p256dh: string; auth: string };
  };
} | {
  path: `/onboard/hello`;
  parts: 2;
  method: 'GET';
  response: boolean;
} | {
  path: `/onboard/complete`;
  parts: 2;
  method: 'POST';
  response: undefined;
} | {
  path: `/push/subscribe`;
  parts: 2;
  method: 'POST';
  response: undefined;
} | {
  path: `/push/unsubscribe`;
  parts: 2;
  method: 'POST';
  response: undefined;
} | {
  path: `/sync/settings/fetch`;
  parts: 3;
  method: 'POST';
  response: {}[];
} | {
  path: `/sync/settings/set`;
  parts: 3;
  method: 'POST';
  response: undefined;
} | {
  path: `/sync/unreads`;
  parts: 2;
  method: 'GET';
  response: {
    _id: { channel: string; user: string };
    last_id?: string | null;
    mentions?: string[];
  }[];
};
export type GetRoutes = Extract<Routes, { method: 'GET' }>;
export type DeleteRoutes = Extract<Routes, { method: 'DELETE' }>;
export type PostRoutes = Extract<Routes, { method: 'POST' }>;
export type PatchRoutes = Extract<Routes, { method: 'PATCH' }>;
export type PutRoutes = Extract<Routes, { method: 'PUT' }>;
