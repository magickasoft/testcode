import R from 'ramda';

class CommonError extends Error {
  toString() {
    // return `${this.status}  ${this.message}`;
    return this.message;
  }
}
const pathGraphQL = R.pathOr('Unknown error', ['message']);

export class NotVisibleError extends CommonError {
  constructor(message) {
    super();
    this.type = 'NotVisibleError';
    this.message = message;
    this.status = null;
  }
}

export class GraphQLError extends CommonError {
  constructor(error) {
    super();
    this.type = 'GraphQLError';
    this.status = R.pathOr(null, ['response', 'status'], error);
    this.message = pathGraphQL(error);
  }
}

export class ReduxError extends CommonError {
  constructor(error) {
    super();
    this.type = 'ReduxError';
    this.message = R.pathOr(
      pathGraphQL(error),
      ['response', 'data', 'errors', 0, 'message'],
      error
    );

    this.status = R.pathOr(null, ['response', 'status'], error);
  }
}
