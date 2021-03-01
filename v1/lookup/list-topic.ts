import { ZENDESK } from "../common/api";
import { makeHeader, makeGetRequest } from "../common/utils";
import * as R from "ramda";
import { ErrorMessages } from "../common/errors";
import { AuthenticateT, AuthT } from "../common/types";
import axios from "axios";

export const errors = {
  ...R.pick(["INVALID_CREDENTIALS"], ZENDESK.Errors.errors),
};

export const lookup = async (input: AuthenticateT) => {
  const ListTopics = ({ username, password }: AuthT) =>
    R.pipe(makeHeader, makeGetRequest(ZENDESK.API.topic))(username, password);

  const ListTopicss = ({ username, password }) =>
    axios.get("https://support.zendesk.com/api/v2/community/topics", {});
  try {
    let list = await ListTopics({ ...input.auth });
    console.log("list", list);
    return list.data.topics.map((data) => ({
      text: data.name,
      value: data.id,
    }));
  } catch (error) {
    if (error.status == 401) {
      throw ErrorMessages(
        errors.INVALID_CREDENTIALS.code,
        errors.INVALID_CREDENTIALS.message
      )();
    }
    throw error;
  }
};
lookup({
  auth: { domain: "", username: "ashok.k@skitter.in", password: "Skitter@123" },
})
  .then(console.log)
  .catch(console.log);
