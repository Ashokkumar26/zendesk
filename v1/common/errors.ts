import * as t from "io-ts";
import { makeError } from "@skitter/automation-utils";
import * as R from "ramda";

export const makeInvalidErrors = (text: string, data: string) => ({
  status: 100,
  message: { text, data },
});
export const makeErrorsWithMessage = <A extends string, B extends string>(
  code: A,
  message: B
) => <C extends string>(optionalMessage?: C): Error =>
  optionalMessage != " " && optionalMessage
    ? makeError(code, R.concat(optionalMessage, R.concat(" ", message)))
    : makeError(code, message);

const errorCodes = t.union([
  t.literal("INVALID_CREDENTIALS"),
  t.literal("INVALID_DOMAIN_URL"),
  t.literal("INVALID_TICKET_ID"),
]);
type ErrorMessage = {
  INVALID_CREDENTIALS: "Invalid credentials. Update the connection details.";
  INVALID_DOMAIN_URL: "Invalid domain URL.";
  INVALID_TICKET_ID: "Ticket id doesn't exist.";
};

export type CodesT = t.TypeOf<typeof errorCodes>;

type Message<T> = T extends CodesT ? ErrorMessage[T] : never;

export type ExactErrors<T> = {
  GetErrors: { [T in CodesT]: { code: T; message: Message<T> } };
  never: never;
}[T extends CodesT ? "GetErrors" : "never"];

export const ErrorMessages = <T extends CodesT, U extends Message<T>>(
  code: T,
  message: U
) => (optionalMessage?: string) =>
  optionalMessage
    ? makeError(code, R.concat(optionalMessage, R.concate(" ", message)))
    : makeError(code, message);
