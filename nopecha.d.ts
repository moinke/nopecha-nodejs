export interface ConfigurationOptions {
    apiKey: string;
    apiBase?: string;
  }
  
  export interface ErrorResponse {
    error: string;
    message?: string;
  }
  
  export interface ResponseData {
    data: any;
  }
  
  export class Configuration {
    constructor(options: ConfigurationOptions);
    apiKey: string;
    apiBase: string;
  }
  
  export class NopeCHAApi {
    constructor(configuration: Configuration);
    apiKey: string;
    apiBase: string;
    default_headers(): { [key: string]: string };
    get_headers(): { [key: string]: string };
    post_headers(): { [key: string]: string };
    handle_error_response(rcode: number, resp: ErrorResponse): NopeCHAError;
    get(endpoint: string, data: any, retries: number, interval: number): Promise<any>;
    post(endpoint: string, data: any): Promise<any>;
    solve(endpoint: string, data: any, retries: number, interval: number): Promise<any>;
    solveRecognition(data: any): Promise<any>;
    solveToken(data: any): Promise<any>;
    getBalance(): Promise<any>;
  }
  
  export class NopeCHAError extends Error {
    constructor(message: string);
  }
  
  export class InvalidRequestError extends NopeCHAError {}
  export class IncompleteJobError extends NopeCHAError {}
  export class RateLimitError extends NopeCHAError {}
  export class AuthenticationError extends NopeCHAError {}
  export class InsufficientCreditError extends NopeCHAError {}
  export class UnknownError extends NopeCHAError {}
  export class Timeout extends NopeCHAError {}
  export class APIError extends NopeCHAError {}
  export class ServiceUnavailableError extends NopeCHAError {}
  