/* tslint:disable */
/* eslint-disable */
export interface ValidationProblemDetails {
  detail?: null | string;
  errors?: null | { [key: string]: Array<string> };
  instance?: null | string;
  status?: null | number;
  title?: null | string;
  type?: null | string;

  [key: string]: any | null | number | string | undefined | { [key: string]: Array<string> };
}
