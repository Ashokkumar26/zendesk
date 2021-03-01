export type AuthT = {
  domain: string;
  username: string;
  password: string;
};

export type AuthenticateT = {
  auth: AuthT;
};

export type ResponseT = {
  status: number;
  data: any;
};

export type ResponseE = {
  status: number;
  message:
    | {
        text: string;
        data: any;
      }
    | "Domain Error";
};
export type ErrorT = ResponseE | Error;

export interface TicketsT {
  ticket: Ticket;
  audit: Audit;
  action_success: true;
}

export interface Ticket {
  url: string;
  id: number;
  external_id: any;
  created_at: string;
  updated_at: string;
  type: string;
  subject: string;
  raw_subject: string;
  description: string;
  priority: string;
  status: string;
  recipient: any;
  requester_id: number;
  submitter_id: number;
  assignee_id: number;
  organization_id: number;
  group_id: number;
  forum_topic_id: any;
  problem_id: any;
  has_incidents: boolean;
  is_public: boolean;
  due_at: any;
  satisfaction_rating: any;
  brand_id: number;
  allow_channelback: boolean;
  allow_attachments: boolean;
}

export interface Audit {
  id: number;
  ticket_id: number;
  created_at: string;
  author_id: number;
  events: Event[];
  via: Via;
}

export interface Event {
  id: number;
  type: string;
  author_id: number;
  body: string;
  html_body: string;
  plain_body: string;
  public: boolean;
  audit_id: number;
}

export interface Via {
  channel: string;
  source: Source;
}

export interface Source {
  from: From;
  to: To;
  rel: any;
}

export interface From {}

export interface To {
  name: string;
  address: string;
}
