import { makePutRequest, makeHeader } from "../common/utils";
import { TicketsT } from "../common/types";
import { ErrorMessages } from "../common/errors";
import { ZENDESK } from "../common/api";
import * as R from "ramda";

export const name = "Add A Comment To Ticket";
export const input = [
  {
    key: "ticketId",
    displayTitle: "Ticket Id",
    description: "Provide ticket id (to add comment to ticket).",
    required: true,
    config: { kind: "text" },
  },
  {
    key: "comment",
    displayTitle: "Comment",
    description: "Provide ticket comment.",
    required: true,
    config: { kind: "text" },
  },
];
export const output = {
  properties: {
    ticket: {
      type: "object",
      properties: {
        id: {
          examples: [123456],
          type: "number",
          title: "Ticket Id",
          $id: "/properties/ticket/id",
        },
        type: {
          examples: ["Task"],
          type: "string",
          title: "Type",
          $id: "/properties/ticket/type",
        },
        subject: {
          examples: ["New Ticket"],
          type: "string",
          title: "Subject",
          $id: "/properties/ticket/subject",
        },
        raw_subject: {
          examples: ["New Ticket"],
          type: "string",
          title: "Raw Subject",
          $id: "/properties/ticket/raw_subject",
        },
        description: {
          examples: ["This is the first ticket"],
          type: "string",
          title: "Description",
          $id: "/properties/ticket/description",
        },
        priority: {
          examples: ["normal"],
          type: "string",
          title: "Priority",
          $id: "/properties/ticket/priority",
        },
        status: {
          examples: ["open"],
          type: "string",
          title: "Status",
          $id: "/properties/ticket/status",
        },
        url: {
          examples: ["https://abcd.zendesk.com/api/v2/tickets/4.json"],
          type: "string",
          title: "URL",
          $id: "/properties/ticket/url",
        },
        created_at: {
          examples: ["2021-02-26T04:39:47Z"],
          type: "string",
          title: "Created At",
          $id: "/properties/ticket/created_at",
        },
        updated_at: {
          examples: ["2021-02-26T04:39:47Z"],
          type: "string",
          title: "Updated At",
          $id: "/properties/ticket/updated_at",
        },
        recipient: {
          examples: ["null"],
          type: "string",
          title: "Recipient",
          $id: "/properties/ticket/recipient",
        },
        requester_id: {
          examples: [123456],
          type: "number",
          title: "Requester Id",
          $id: "/properties/ticket/requester_id",
        },
        submitter_id: {
          examples: [123456],
          type: "number",
          title: "Submitter Id",
          $id: "/properties/ticket/submitter_id",
        },
        assignee_id: {
          examples: [123456],
          type: "number",
          title: "Assignee Id",
          $id: "/properties/ticket/assignee_id",
        },
        organization_id: {
          examples: [123456],
          type: "number",
          title: "Organization Id",
          $id: "/properties/ticket/organization_id",
        },
        group_id: {
          examples: [123456],
          type: "number",
          title: "Group Id",
          $id: "/properties/ticket/group_id",
        },
        has_incidents: {
          examples: [false],
          type: "boolean",
          title: "Has Incidents",
          $id: "/properties/ticket/has_incidents",
        },
        is_public: {
          examples: [false],
          type: "boolean",
          title: "Is Public",
          $id: "/properties/ticket/is_public",
        },
        due_at: {
          examples: ["null"],
          type: "string",
          title: "Due At",
          $id: "/properties/ticket/due_at",
        },
        brand_id: {
          examples: [123456],
          type: "number",
          title: "Brand Id",
          $id: "/properties/ticket/brand_id",
        },
        allow_channelback: {
          examples: [false],
          type: "boolean",
          title: "Allow Channel Back",
          $id: "/properties/ticket/allow_channelback",
        },
        allow_attachments: {
          examples: [false],
          type: "boolean",
          title: "Allow Attachments",
          $id: "/properties/ticket/allow_attachments",
        },
      },
      title: "Ticket",
    },
    audit: {
      type: "object",
      properties: {
        id: {
          examples: [123456],
          type: "number",
          title: "Audit Id",
          $id: "/properties/audit/id",
        },
        ticket_id: {
          examples: [16],
          type: "number",
          title: "Ticket Id",
          $id: "/properties/audit/ticket_id",
        },
        created_at: {
          examples: ["2021-02-26T04:39:47Z"],
          type: "string",
          title: "Created At",
          $id: "/properties/audit/created_at",
        },
        author_id: {
          examples: [123456],
          type: "number",
          title: "Author Id",
          $id: "/properties/audit/author_id",
        },
        events: {
          type: "collection",
          title: "Event Details",
          $id: "/properties/audit/events",
          item: {
            type: "object",
            properties: {
              id: {
                examples: [123456],
                type: "number",
                title: "Event Id",
                $id: "/properties/id",
              },
              type: {
                examples: ["Comment"],
                type: "string",
                title: "Event Type",
                $id: "/properties/type",
              },
              author_id: {
                examples: [123456],
                type: "number",
                title: "Author Id",
                $id: "/properties/author_id",
              },
              body: {
                examples: ["The smoke is very colorful"],
                type: "string",
                title: "Body",
                $id: "/properties/body",
              },
              html_body: {
                examples: ["The smoke is very colorful"],
                type: "string",
                title: "HTML Body",
                $id: "/properties/html_body",
              },
              plain_body: {
                examples: ["The smoke is very colorful"],
                type: "string",
                title: "Plain Body",
                $id: "/properties/plain_body",
              },
              public: {
                examples: [true],
                type: "boolean",
                title: "Public",
                $id: "/properties/public",
              },
              audit_id: {
                examples: [123456],
                type: "number",
                title: "Audit Id",
                $id: "/properties/audit_id",
              },
            },
          },
        },
        via: {
          type: "object",
          properties: {
            channel: {
              examples: ["api"],
              type: "string",
              title: "Channel",
              $id: "/properties/audit/via/channel",
            },
            source: {
              type: "object",
              properties: {
                from: {
                  type: "object",
                  properties: {
                    name: {
                      examples: ["John"],
                      type: "string",
                      title: "Name",
                      $id: "/properties/audit/via/source/from/name",
                    },
                    address: {
                      examples: ["john@company.com"],
                      type: "string",
                      title: "Address",
                      $id: "/properties/audit/via/source/from/address",
                    },
                  },
                  title: "From",
                },
                to: {
                  type: "object",
                  properties: {
                    name: {
                      examples: ["Smith"],
                      type: "string",
                      title: "Name",
                      $id: "/properties/audit/via/source/to/name",
                    },
                    address: {
                      examples: ["smith@company.com"],
                      type: "string",
                      title: "Address",
                      $id: "/properties/audit/via/source/to/address",
                    },
                  },
                  title: "To",
                },
                rel: {
                  examples: ["null"],
                  type: "string",
                  title: "Rel",
                  $id: "/properties/audit/via/source/rel",
                },
              },
              title: "Source",
            },
          },
          title: "Via",
        },
      },
      title: "Audit Details",
    },
    action_success: {
      examples: [true],
      type: "boolean",
      title: "action_success",
      $id: "/properties/action_success",
    },
  },
  type: "object",
  title: "Add A Comment To Ticket",
};
export const errors = {
  INVALID_CREDENTIALS: ZENDESK.Errors.errors.INVALID_CREDENTIALS,
  INVALID_DOMAIN_URL: ZENDESK.Errors.errors.INVALID_DOMAIN_URL,
  INVALID_TICKET_ID: ZENDESK.Errors.errors.INVALID_TICKET_ID,
};
type inputT = {
  ticketId: string;
  comment: string;
  auth: AuthT;
};
type AuthT = { domainName: string; username: string; password: string };
export const execute = async (input: inputT): Promise<TicketsT> => {
  const TicketComment = (
    { domainName, username, password }: AuthT,
    id: string,
    comment: string
  ) =>
    R.pipe(
      makeHeader,
      makePutRequest(ZENDESK.API.ticket(domainName, id), { comment })
    )(username, password);
  try {
    let details: { data: TicketsT } = await TicketComment(
      { ...input.auth },
      input.ticketId,
      input.comment
    );
    return {
      ticket: R.omit(
        [
          "via",
          "external_id",
          "satisfaction_rating",
          "collaborator_ids",
          "follower_ids",
          "email_cc_ids",
          "forum_topic_id",
          "problem_id",
          "tags",
          "custom_fields",
          "sharing_agreement_ids",
          "fields",
          "followup_ids",
        ],
        details.data.ticket
      ),
      audit: R.omit(["metadata"], details.data.audit),
      action_success: true,
    };
  } catch (error) {
    if (error.status == 401) {
      throw ErrorMessages(
        errors.INVALID_CREDENTIALS.code,
        errors.INVALID_CREDENTIALS.message
      )();
    } else if (error.status == 404) {
      let noRecord = R.includes("RecordNotFound", error.message.data.error);
      if (noRecord) {
        throw ErrorMessages(
          errors.INVALID_TICKET_ID.code,
          errors.INVALID_TICKET_ID.message
        )();
      }
      throw ErrorMessages(
        errors.INVALID_DOMAIN_URL.code,
        errors.INVALID_DOMAIN_URL.message
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
  ticketId: "3",
  comment: "new comment added",
  auth: {
    domainName: "https://skitter123help.zendesk.com",
    username: "ashok.k@skitter.in",
    password: "Skitter@123",
  },
})
  .then(console.log)
  .catch(console.error);
