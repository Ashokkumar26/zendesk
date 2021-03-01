import { makePostRequest, makeHeader } from "../common/utils";
import { TicketsT } from "../common/types";
import { ErrorMessages } from "../common/errors";
import { ZENDESK } from "../common/api";
import * as R from "ramda";

export const name = "Add A Post";
export const input = [
  {
    key: "title",
    displayTitle: "Title",
    description: "Provide Title.",
    required: true,
    config: { kind: "text" },
  },
  {
    key: "details",
    displayTitle: "Details",
    description: "Provide details.",
    required: true,
    config: { kind: "text" },
  },
  {
    key: "topicId",
    displayTitle: "Topic",
    description: "Select topic.",
    required: true,
    config: {
      kind: "lookup-enum",
      lookup: "list-topic",
      params: {},
    },
  },
];
export const output = {
  properties: {
    id: {
      examples: [123456],
      type: "number",
      title: "Post Id",
      $id: "/properties/id",
    },
    title: {
      examples: ["post!"],
      type: "string",
      title: "Title",
      $id: "/properties/title",
    },
    details: {
      examples: ["New details!"],
      type: "string",
      title: "Details",
      $id: "/properties/details",
    },
    author_id: {
      examples: [123456],
      type: "number",
      title: "Author Id",
      $id: "/properties/author_id",
    },
    vote_sum: {
      examples: [0],
      type: "number",
      title: "Vote Sum",
      $id: "/properties/vote_sum",
    },
    vote_count: {
      examples: [0],
      type: "number",
      title: "Vote Count",
      $id: "/properties/vote_count",
    },
    comment_count: {
      examples: [0],
      type: "number",
      title: "Comment Count",
      $id: "/properties/comment_count",
    },
    follower_count: {
      examples: [123],
      type: "number",
      title: "Follower Count",
      $id: "/properties/follower_count",
    },
    topic_id: {
      examples: [123456],
      type: "number",
      title: "Topic Id",
      $id: "/properties/topic_id",
    },
    html_url: {
      examples: [
        "https://support.zendesk.com/hc/en-us/community/posts/12608743710-Posts-",
      ],
      type: "string",
      title: "HTML URL",
      $id: "/properties/html_url",
    },
    created_at: {
      examples: ["2021-03-01T07:06:23Z"],
      type: "string",
      title: "Created At",
      $id: "/properties/created_at",
    },
    updated_at: {
      examples: ["2021-03-01T07:06:23Z"],
      type: "string",
      title: "Updated At",
      $id: "/properties/updated_at",
    },
    url: {
      examples: [
        "https://support.zendesk.com/hc/en-us/community/posts/12608743710-Posts.json",
      ],
      type: "string",
      title: "URL",
      $id: "/properties/url",
    },
    featured: {
      examples: [true],
      type: "boolean",
      title: "Featured",
      $id: "/properties/featured",
    },
    pinned: {
      examples: [true],
      type: "boolean",
      title: "Pinned",
      $id: "/properties/pinned",
    },
    closed: {
      examples: [false],
      type: "boolean",
      title: "Closed",
      $id: "/properties/closed",
    },
    status: {
      examples: ["none"],
      type: "string",
      title: "Status",
      $id: "/properties/status",
    },
    action_success: {
      examples: [true],
      type: "boolean",
      title: "action_success",
      $id: "/properties/action_success",
    },
  },
  type: "object",
  title: "Add Post",
};
export const errors = {
  INVALID_CREDENTIALS: ZENDESK.Errors.errors.INVALID_CREDENTIALS,
  INVALID_DOMAIN_URL: ZENDESK.Errors.errors.INVALID_DOMAIN_URL,
};
type inputT = {
  title: string;
  details: string;
  input: { topicId: string };
  auth: AuthT;
};
type AuthT = { domainName: string; username: string; password: string };
export interface outputT {
  id: number;
  title: string;
  details: string;
  author_id: number;
  vote_sum: number;
  vote_count: number;
  comment_count: number;
  follower_count: number;
  topic_id: number;
  html_url: string;
  created_at: string;
  updated_at: string;
  url: string;
  featured: boolean;
  pinned: boolean;
  closed: boolean;
  status: string;
  action_success: boolean;
}
type PostReq = {
  post: {
    title: string;
    details: string;
    topic_id: string;
  };
  notify_subscribers: boolean;
};
export const execute = async (input: inputT): Promise<outputT> => {
  let reqObj: PostReq = {
    post: {
      title: input.title,
      details: input.details,
      topic_id: input.input.topicId,
    },
    notify_subscribers: false,
  };
  const NewPost = ({ username, password }: AuthT, reqObj: PostReq) =>
    R.pipe(makeHeader, makePostRequest(ZENDESK.API.post, reqObj))(
      username,
      password
    );
  try {
    let details = await NewPost({ ...input.auth }, reqObj);
    return {
      ...details.data.post,
      action_success: true,
    };
  } catch (error) {
    if (error.status == 401) {
      throw ErrorMessages(
        errors.INVALID_CREDENTIALS.code,
        errors.INVALID_CREDENTIALS.message
      )();
    } else if (error.status == 0) {
      throw ErrorMessages(
        errors.INVALID_DOMAIN_URL.code,
        errors.INVALID_DOMAIN_URL.message
      )();
    }
    throw error;
  }
};
execute({
  title: "New post",
  details: "This is new post",
  input: { topicId: "115000506348" },
  auth: {
    domainName: "https://skitter123help.zendesk.com",
    username: "ashok.k@skitter.in",
    password: "Skitter@123",
  },
})
  .then(console.log)
  .catch(console.error);
