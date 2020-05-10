import prompts from "prompts";
import { Stream } from "stream";

type Types = "confirm" | "toggle" | "select" | "multiselect";

type PromptBase = {
  type: Types;
  name: string | Function;
  message: string | Function;
  initial?: string | Function | Promise<Function>;
  format?: Function | Promise<Function>;
  onRender?: Function;
  onState?: Function;
  stdin?: Stream;
  stdout?: Stream;
};

export type Choice = {
  value: any;
  title?: string;
  description?: string;
  disabled?: boolean;
};

type ConfirmPrompt = PromptBase & {
  message: string;
  initial: boolean;
};

type TogglePrompt = PromptBase & {
  message: string;
  initial?: boolean;
  active?: string;
  inactive?: string;
};

type SelectPrompt = PromptBase & {
  message: string;
  initial: number;
  hint?: string;
  warn?: string;
  choices: Choice[];
};

type MultiSelectPrompt = PromptBase & {
  message: string;
  instructions?: string | boolean;
  choices: Choice[];
  optionsPerPage?: number;
  min?: number;
  max?: number;
  hint?: string;
  warn?: string;
};

export type Prompt =
  | ConfirmPrompt
  | TogglePrompt
  | SelectPrompt
  | MultiSelectPrompt;

export const prompt = async (prompt: Prompt | Prompt[]) =>
  await prompts(prompt);
