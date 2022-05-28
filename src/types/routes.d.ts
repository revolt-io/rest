export type Routes = {
  path: `/`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/@me`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/${string}`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/@me/username`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/${string}/default_avatar`;
  method: 'GET';
  response: undefined;
} | {
  path: `/users/${string}/profile`;
  method: 'GET';
  response: {
    content?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
  };
} | {
  path: `/users/dms`;
  method: 'GET';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  }[];
} | {
  path: `/users/${string}/dm`;
  method: 'GET';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/users/${string}/mutual`;
  method: 'GET';
  response: { users: string[]; servers: string[] };
} | {
  path: `/users/{username}/friend`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/${string}/friend`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/${string}/block`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/users/${string}/block`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  };
} | {
  path: `/bots/create`;
  method: 'POST';
  response: {
    _id: string;
    owner: string;
    token: string;
    public: boolean;
    analytics?: boolean;
    discoverable?: boolean;
    interactions_url?: string;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    flags?: number;
  };
} | {
  path: `/bots/${string}/invite`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    description?: string;
  };
} | {
  path: `/bots/${string}/invite`;
  method: 'POST';
  response: undefined;
} | {
  path: `/bots/${string}`;
  method: 'GET';
  response: {
    bot: {
      _id: string;
      owner: string;
      token: string;
      public: boolean;
      analytics?: boolean;
      discoverable?: boolean;
      interactions_url?: string;
      terms_of_service_url?: string;
      privacy_policy_url?: string;
      flags?: number;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
      badges?: number;
      status?: {
        text?: string;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
      };
      flags?: number;
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
      online?: boolean;
    };
  };
} | {
  path: `/bots/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/bots/${string}`;
  method: 'PATCH';
  response: {
    _id: string;
    owner: string;
    token: string;
    public: boolean;
    analytics?: boolean;
    discoverable?: boolean;
    interactions_url?: string;
    terms_of_service_url?: string;
    privacy_policy_url?: string;
    flags?: number;
  };
} | {
  path: `/bots/@me`;
  method: 'GET';
  response: {
    bots: {
      _id: string;
      owner: string;
      token: string;
      public: boolean;
      analytics?: boolean;
      discoverable?: boolean;
      interactions_url?: string;
      terms_of_service_url?: string;
      privacy_policy_url?: string;
      flags?: number;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
      badges?: number;
      status?: {
        text?: string;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
      };
      flags?: number;
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
      online?: boolean;
    }[];
  };
} | {
  path: `/channels/${string}/ack/{message}`;
  method: 'PUT';
  response: undefined;
} | {
  path: `/channels/${string}`;
  method: 'GET';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}`;
  method: 'PATCH';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}/members`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
    badges?: number;
    status?: {
      text?: string;
      presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
    };
    profile?: {
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    };
    flags?: number;
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
    online?: boolean;
  }[];
} | {
  path: `/channels/${string}/invites`;
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
  method: 'GET';
  response: {
    _id: string;
    nonce?: string;
    channel: string;
    author: string;
    content?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string;
        original_url?: string;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string;
        description?: string;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string;
        icon_url?: string;
        colour?: string;
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
        icon_url?: string;
        url?: string;
        title?: string;
        description?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
        colour?: string;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string; avatar?: string };
  }[] | {
    messages: {
      _id: string;
      nonce?: string;
      channel: string;
      author: string;
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      }[];
      edited?: string;
      embeds?:
        | {
          type: 'Website';
          url?: string;
          original_url?: string;
          special?:
            | 'None'
            | 'GIF'
            | { type: 'YouTube'; id: string; timestamp?: string }
            | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
            | {
              type: 'Twitch';
              content_type: 'Channel' | 'Video' | 'Clip';
              id: string;
            }
            | { type: 'Spotify'; content_type: string; id: string }
            | 'Soundcloud'
            | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
          title?: string;
          description?: string;
          image?: {
            url: string;
            width: number;
            height: number;
            size: 'Large' | 'Preview';
          };
          video?: { url: string; width: number; height: number };
          site_name?: string;
          icon_url?: string;
          colour?: string;
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
          icon_url?: string;
          url?: string;
          title?: string;
          description?: string;
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
            deleted?: boolean;
            reported?: boolean;
            message_id?: string;
            user_id?: string;
            server_id?: string;
            object_id?: string;
          };
          colour?: string;
        }
        | 'None'[];
      mentions?: string[];
      replies?: string[];
      masquerade?: { name?: string; avatar?: string };
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
      badges?: number;
      status?: {
        text?: string;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
      };
      flags?: number;
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
      online?: boolean;
    }[];
    members?: {
      _id: { server: string; user: string };
      nickname?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      roles?: string[];
    }[];
  };
} | {
  path: `/channels/${string}/messages`;
  method: 'POST';
  response: {
    _id: string;
    nonce?: string;
    channel: string;
    author: string;
    content?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string;
        original_url?: string;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string;
        description?: string;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string;
        icon_url?: string;
        colour?: string;
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
        icon_url?: string;
        url?: string;
        title?: string;
        description?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
        colour?: string;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string; avatar?: string };
  };
} | {
  path: `/channels/${string}/search`;
  method: 'POST';
  response: {
    _id: string;
    nonce?: string;
    channel: string;
    author: string;
    content?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string;
        original_url?: string;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string;
        description?: string;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string;
        icon_url?: string;
        colour?: string;
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
        icon_url?: string;
        url?: string;
        title?: string;
        description?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
        colour?: string;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string; avatar?: string };
  }[] | {
    messages: {
      _id: string;
      nonce?: string;
      channel: string;
      author: string;
      content?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      }[];
      edited?: string;
      embeds?:
        | {
          type: 'Website';
          url?: string;
          original_url?: string;
          special?:
            | 'None'
            | 'GIF'
            | { type: 'YouTube'; id: string; timestamp?: string }
            | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
            | {
              type: 'Twitch';
              content_type: 'Channel' | 'Video' | 'Clip';
              id: string;
            }
            | { type: 'Spotify'; content_type: string; id: string }
            | 'Soundcloud'
            | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
          title?: string;
          description?: string;
          image?: {
            url: string;
            width: number;
            height: number;
            size: 'Large' | 'Preview';
          };
          video?: { url: string; width: number; height: number };
          site_name?: string;
          icon_url?: string;
          colour?: string;
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
          icon_url?: string;
          url?: string;
          title?: string;
          description?: string;
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
            deleted?: boolean;
            reported?: boolean;
            message_id?: string;
            user_id?: string;
            server_id?: string;
            object_id?: string;
          };
          colour?: string;
        }
        | 'None'[];
      mentions?: string[];
      replies?: string[];
      masquerade?: { name?: string; avatar?: string };
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
      badges?: number;
      status?: {
        text?: string;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
      };
      flags?: number;
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
      online?: boolean;
    }[];
    members?: {
      _id: { server: string; user: string };
      nickname?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      roles?: string[];
    }[];
  };
} | {
  path: `/channels/{_target}/messages/stale`;
  method: 'POST';
  response: undefined;
} | {
  path: `/channels/${string}/messages/${string}`;
  method: 'GET';
  response: {
    _id: string;
    nonce?: string;
    channel: string;
    author: string;
    content?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string;
        original_url?: string;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string;
        description?: string;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string;
        icon_url?: string;
        colour?: string;
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
        icon_url?: string;
        url?: string;
        title?: string;
        description?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
        colour?: string;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string; avatar?: string };
  };
} | {
  path: `/channels/${string}/messages/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/messages/${string}`;
  method: 'PATCH';
  response: {
    _id: string;
    nonce?: string;
    channel: string;
    author: string;
    content?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    }[];
    edited?: string;
    embeds?:
      | {
        type: 'Website';
        url?: string;
        original_url?: string;
        special?:
          | 'None'
          | 'GIF'
          | { type: 'YouTube'; id: string; timestamp?: string }
          | { type: 'Lightspeed'; content_type: 'Channel'; id: string }
          | {
            type: 'Twitch';
            content_type: 'Channel' | 'Video' | 'Clip';
            id: string;
          }
          | { type: 'Spotify'; content_type: string; id: string }
          | 'Soundcloud'
          | { type: 'Bandcamp'; content_type: 'Album' | 'Track'; id: string };
        title?: string;
        description?: string;
        image?: {
          url: string;
          width: number;
          height: number;
          size: 'Large' | 'Preview';
        };
        video?: { url: string; width: number; height: number };
        site_name?: string;
        icon_url?: string;
        colour?: string;
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
        icon_url?: string;
        url?: string;
        title?: string;
        description?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
        colour?: string;
      }
      | 'None'[];
    mentions?: string[];
    replies?: string[];
    masquerade?: { name?: string; avatar?: string };
  };
} | {
  path: `/channels/${string}/messages/bulk`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/create`;
  method: 'POST';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}/recipients/${string}`;
  method: 'PUT';
  response: undefined;
} | {
  path: `/channels/${string}/recipients/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/channels/${string}/join_call`;
  method: 'POST';
  response: string;
} | {
  path: `/channels/${string}/permissions/${string}`;
  method: 'PUT';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/channels/${string}/permissions/default`;
  method: 'PUT';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/servers/create`;
  method: 'POST';
  response: {
    server: {
      _id: string;
      owner: string;
      name: string;
      description?: string;
      channels: string[];
      categories?: { id: string; title: string; channels: string[] }[];
      system_messages?: {
        user_joined?: string;
        user_left?: string;
        user_kicked?: string;
        user_banned?: string;
      };
      roles?: {
        name: string;
        permissions: { a: number; d: number };
        colour?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      flags?: number;
      nsfw?: boolean;
      analytics?: boolean;
      discoverable?: boolean;
    };
    channels: { channel_type: 'SavedMessages'; _id: string; user: string } | {
      channel_type: 'DirectMessage';
      _id: string;
      active: boolean;
      recipients: string[];
      last_message_id?: string;
    } | {
      channel_type: 'Group';
      _id: string;
      name: string;
      owner: string;
      description?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      last_message_id?: string;
      permissions?: number;
      nsfw?: boolean;
    } | {
      channel_type: 'TextChannel';
      _id: string;
      server: string;
      name: string;
      description?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      last_message_id?: string;
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    } | {
      channel_type: 'VoiceChannel';
      _id: string;
      server: string;
      name: string;
      description?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    }[];
  };
} | {
  path: `/servers/${string}`;
  method: 'GET';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string;
      user_left?: string;
      user_kicked?: string;
      user_banned?: string;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    flags?: number;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/servers/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}`;
  method: 'PATCH';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string;
      user_left?: string;
      user_kicked?: string;
      user_banned?: string;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    flags?: number;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/servers/${string}/ack`;
  method: 'PUT';
  response: undefined;
} | {
  path: `/servers/${string}/channels`;
  method: 'POST';
  response: { channel_type: 'SavedMessages'; _id: string; user: string } | {
    channel_type: 'DirectMessage';
    _id: string;
    active: boolean;
    recipients: string[];
    last_message_id?: string;
  } | {
    channel_type: 'Group';
    _id: string;
    name: string;
    owner: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    permissions?: number;
    nsfw?: boolean;
  } | {
    channel_type: 'TextChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    last_message_id?: string;
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  } | {
    channel_type: 'VoiceChannel';
    _id: string;
    server: string;
    name: string;
    description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    default_permissions?: { a: number; d: number };
    role_permissions?: { a: number; d: number };
    nsfw?: boolean;
  };
} | {
  path: `/servers/${string}/members`;
  method: 'GET';
  response: {
    members: {
      _id: { server: string; user: string };
      nickname?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
      badges?: number;
      status?: {
        text?: string;
        presence?: 'Online' | 'Idle' | 'Busy' | 'Invisible';
      };
      profile?: {
        content?: string;
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
          deleted?: boolean;
          reported?: boolean;
          message_id?: string;
          user_id?: string;
          server_id?: string;
          object_id?: string;
        };
      };
      flags?: number;
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
      online?: boolean;
    }[];
  };
} | {
  path: `/servers/${string}/members/${string}`;
  method: 'GET';
  response: {
    _id: { server: string; user: string };
    nickname?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    roles?: string[];
  };
} | {
  path: `/servers/${string}/members/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/members/${string}`;
  method: 'PATCH';
  response: {
    _id: { server: string; user: string };
    nickname?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    roles?: string[];
  };
} | {
  path: `/servers/${string}/bans/${string}`;
  method: 'PUT';
  response: { _id: { server: string; user: string }; reason?: string };
} | {
  path: `/servers/${string}/bans/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/bans`;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
    }[];
    bans: { _id: { server: string; user: string }; reason?: string }[];
  };
} | {
  path: `/servers/${string}/invites`;
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
  method: 'POST';
  response: {
    id: string;
    role: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string;
      hoist?: boolean;
      rank?: number;
    };
  };
} | {
  path: `/servers/${string}/roles/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/servers/${string}/roles/${string}`;
  method: 'PATCH';
  response: {
    name: string;
    permissions: { a: number; d: number };
    colour?: string;
    hoist?: boolean;
    rank?: number;
  };
} | {
  path: `/servers/${string}/permissions/${string}`;
  method: 'PUT';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string;
      user_left?: string;
      user_kicked?: string;
      user_banned?: string;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    flags?: number;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/servers/${string}/permissions/default`;
  method: 'PUT';
  response: {
    _id: string;
    owner: string;
    name: string;
    description?: string;
    channels: string[];
    categories?: { id: string; title: string; channels: string[] }[];
    system_messages?: {
      user_joined?: string;
      user_left?: string;
      user_kicked?: string;
      user_banned?: string;
    };
    roles?: {
      name: string;
      permissions: { a: number; d: number };
      colour?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    flags?: number;
    nsfw?: boolean;
    analytics?: boolean;
    discoverable?: boolean;
  };
} | {
  path: `/invites/${string}`;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    channel_id: string;
    channel_name: string;
    channel_description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
    member_count: number;
  } | {
    type: 'Group';
    code: string;
    channel_id: string;
    channel_name: string;
    channel_description?: string;
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
      deleted?: boolean;
      reported?: boolean;
      message_id?: string;
      user_id?: string;
      server_id?: string;
      object_id?: string;
    };
  };
} | {
  path: `/invites/${string}`;
  method: 'POST';
  response: {
    type: 'Server';
    channels: { channel_type: 'SavedMessages'; _id: string; user: string } | {
      channel_type: 'DirectMessage';
      _id: string;
      active: boolean;
      recipients: string[];
      last_message_id?: string;
    } | {
      channel_type: 'Group';
      _id: string;
      name: string;
      owner: string;
      description?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      last_message_id?: string;
      permissions?: number;
      nsfw?: boolean;
    } | {
      channel_type: 'TextChannel';
      _id: string;
      server: string;
      name: string;
      description?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      last_message_id?: string;
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    } | {
      channel_type: 'VoiceChannel';
      _id: string;
      server: string;
      name: string;
      description?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      default_permissions?: { a: number; d: number };
      role_permissions?: { a: number; d: number };
      nsfw?: boolean;
    }[];
    server: {
      _id: string;
      owner: string;
      name: string;
      description?: string;
      channels: string[];
      categories?: { id: string; title: string; channels: string[] }[];
      system_messages?: {
        user_joined?: string;
        user_left?: string;
        user_kicked?: string;
        user_banned?: string;
      };
      roles?: {
        name: string;
        permissions: { a: number; d: number };
        colour?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
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
        deleted?: boolean;
        reported?: boolean;
        message_id?: string;
        user_id?: string;
        server_id?: string;
        object_id?: string;
      };
      flags?: number;
      nsfw?: boolean;
      analytics?: boolean;
      discoverable?: boolean;
    };
  };
} | {
  path: `/invites/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/account/create`;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/reverify`;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/`;
  method: 'GET';
  response: { _id: string; email: string };
} | {
  path: `/auth/account/change/password`;
  method: 'PATCH';
  response: undefined;
} | {
  path: `/auth/account/change/email`;
  method: 'PATCH';
  response: undefined;
} | {
  path: `/auth/account/verify/${string}`;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/reset_password`;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/account/reset_password`;
  method: 'PATCH';
  response: undefined;
} | {
  path: `/auth/session/login`;
  method: 'POST';
  response:
    | {
      result: 'Success';
      _id?: string;
      user_id: string;
      token: string;
      name: string;
      subscription?: { endpoint: string; p256dh: string; auth: string };
    }
    | 'EmailOTP'
    | { result: 'MFA'; ticket: string; allowed_methods: string[] };
} | {
  path: `/auth/session/logout`;
  method: 'POST';
  response: undefined;
} | {
  path: `/auth/session/all`;
  method: 'GET';
  response: { _id: string; name: string }[];
} | {
  path: `/auth/session/all`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/session/${string}`;
  method: 'DELETE';
  response: undefined;
} | {
  path: `/auth/session/${string}`;
  method: 'PATCH';
  response: {
    _id?: string;
    user_id: string;
    token: string;
    name: string;
    subscription?: { endpoint: string; p256dh: string; auth: string };
  };
} | {
  path: `/onboard/hello`;
  method: 'GET';
  response: boolean;
} | {
  path: `/onboard/complete`;
  method: 'POST';
  response: undefined;
} | {
  path: `/push/subscribe`;
  method: 'POST';
  response: undefined;
} | {
  path: `/push/unsubscribe`;
  method: 'POST';
  response: undefined;
} | {
  path: `/sync/settings/fetch`;
  method: 'POST';
  response: {}[];
} | {
  path: `/sync/settings/set`;
  method: 'POST';
  response: undefined;
} | {
  path: `/sync/unreads`;
  method: 'GET';
  response: {
    _id: { channel: string; user: string };
    last_id?: string;
    mentions?: string[];
  }[];
};
export type GetRoutes = Routes & { method: 'GET' };
export type DeleteRoutes = Routes & { method: 'DELETE' };
export type PostRoutes = Routes & { method: 'POST' };
export type PatchRoutes = Routes & { method: 'PATCH' };
export type PutRoutes = Routes & { method: 'PUT' };
