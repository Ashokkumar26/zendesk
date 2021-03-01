import { CodesT, ExactErrors } from "./errors";

export namespace ZENDESK {
  export namespace API {
    export const ticket = (domain: string, id: string) =>
      `${domain}/api/v2/tickets/${id}.json`;
    export const topic = `https://support.zendesk.com/api/v2/community/topics`;
    export const post = "https://support.zendesk.com/api/v2/community/posts";
  }
  export namespace Errors {
    export const errors: ExactErrors<CodesT> = {
      INVALID_CREDENTIALS: {
        code: "INVALID_CREDENTIALS",
        message: "Invalid credentials. Update the connection details.",
      },
      INVALID_DOMAIN_URL: {
        code: "INVALID_DOMAIN_URL",
        message: "Invalid domain URL.",
      },
      INVALID_TICKET_ID: {
        code: "INVALID_TICKET_ID",
        message: "Ticket id doesn't exist.",
      },
    };
  }
}
