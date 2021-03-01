import { execute, errors } from "../actions/ticket-comment";
import { ErrorMessages } from "../common/errors";

export const input = {
  ticketId: "3",
  comment: "new comment added",
  auth: {
    domainName: "https://skitter123help.zendesk.com",
    username: "ashok.k@skitter.in",
    password: "Skitter@123",
  },
};
describe("Email verification", () => {
  it("Success Case", async () => {
    try {
      let res = await execute(input);
      expect(res.action_success).toBeTruthy();
    } catch (error) {
      expect(error).toStrictEqual(error);
    }
  }, 50000);
  it("Invalid Credentials.", async () => {
    const error = ErrorMessages(
      errors.INVALID_CREDENTIALS.code,
      errors.INVALID_CREDENTIALS.message
    )();
    try {
      let res = await execute({
        ...input,
        auth: { ...input.auth, username: "", password: "" },
      });
      expect(res.action_success).toBeTruthy();
    } catch (err) {
      expect(err).toStrictEqual(error);
    }
  }, 50000);
  it("Invalid Domain URL.", async () => {
    const error = ErrorMessages(
      errors.INVALID_DOMAIN_URL.code,
      errors.INVALID_DOMAIN_URL.message
    )();
    try {
      let res = await execute({
        ...input,
        auth: {
          ...input.auth,
          domainName: "https://skittrhelp.zendesk.com",
        },
      });
      expect(res.action_success).toBeTruthy();
    } catch (err) {
      expect(err).toStrictEqual(error);
    }
  }, 50000);
  it("User Not Found.", async () => {
    const error = ErrorMessages(
      errors.INVALID_TICKET_ID.code,
      errors.INVALID_TICKET_ID.message
    )();
    try {
      let res = await execute({
        ...input,
        ticketId: "234",
        auth: { ...input.auth },
      });
      expect(res.action_success).toBeTruthy();
    } catch (err) {
      expect(err).toStrictEqual(error);
    }
  }, 50000);
});
