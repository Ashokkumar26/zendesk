import { ZENDESK } from "../common/api";
import { makeHeader, makeGetRequest } from "../common/utils";
import * as R from "ramda";
import { ErrorMessages } from "../common/errors";
import { AuthenticateT, AuthT } from "../common/types";

export const errors = {
  ...R.pick(["INVALID_CREDENTIALS"], ZENDESK.Errors.errors),
};

export const lookup = async (input: AuthenticateT) => {
  const ListPosts = ({ username, password }: AuthT) => {
    console.log(username, password);
    return R.pipe(makeHeader, makeGetRequest(ZENDESK.API.post))(
      username,
      password
    );
  };
  try {
    let list = await ListPosts({ ...input.auth });
    console.log("list", list);
    return list.data.posts.map((data) => ({
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
