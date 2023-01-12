class AppError extends Error {
  statusCode: number;

  constructor(message: string, statuCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statuCode;
  }
}

export { AppError };
