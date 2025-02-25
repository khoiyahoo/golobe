export type ISelectOption = {
  name: string
}

export type IError = {
  code: number | string
  message: string
}

export type IErrorType = {
  error: IError
}
