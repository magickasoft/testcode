/**
 * Descriptor for single endpoint fetch.
 */

export interface ConnectedTableDataSource {
  /**
   * Key to store fetched payload.
   */
  key: string;

  /**
   * Url from which payload wil lbe fetched.
   */
  url: string;

  /**
   * Function to handle payload process. In general it accepts current table data state
   * (for first fetch it can be null). Function should return parameters payload to be passed
   * to fetch function. In some cases these parameters can depend on talble data, that's why we
   * pass current data to this function.
   * @param state - current table data state.
   * @return - parameters for fetch function call.
   */
  handler: (state?: any) => { [key: string]: any };
}
