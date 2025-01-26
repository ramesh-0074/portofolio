import { UAParser } from "ua-parser-js";

export const useParser = (userAgent: string): boolean => {
  const parser = new UAParser(userAgent);
  return parser.getDevice().type === "mobile";
};
