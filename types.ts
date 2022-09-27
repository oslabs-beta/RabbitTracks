import { RequestHandler } from "express";

export interface CreateDLXMessage extends Fields, Properties {
    projectId: number
};

export interface Properties {
    contentType: string | null,
    contentEncoding: string | null,
    headers: object | null,
    deliveryMode: string | null,
    priority: number | null,
    correlationId: string | null,
    replyTo: string | null,
    expiration: string | null,
    messageId: string | null,
    timestamp: number | null,
    type: string | null,
    userId: string | null,
    appId: string | null,
    clusterId: string | null
}

export interface Fields {
    consumerTag: string,
    deliveryTag: number,
    redelivered: boolean,
    exchange: string,
    routingKey: string
}

export type ServerError = {
    log?: string,
    status?: number,
    message?: string
};

export type MessageController = {
    getAllMessages?: RequestHandler,
    addMessage?: RequestHandler
};

export type AuthController = {
    encryptPassword?: RequestHandler,
    signup?: RequestHandler,
    verifyUser?: RequestHandler,
    verifyPassword?: RequestHandler,
    createSession?: RequestHandler,
    verifySession?: RequestHandler
  };
  
  export type AuthResults = Array<{
    user_id? : number,
    user_password?: string,
    session_value?: number | string     // should only be one or the other... needs testing/verification
  }>;
  
  export type AuthParams = Array<(number | string)>
  
  export type AuthRequestBody = {
    email?: string,
    password?: string,
    passwordConfirm?: string,
  };