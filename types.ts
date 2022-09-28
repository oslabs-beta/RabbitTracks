import { RequestHandler } from "express";

// types for '/rabbitmq/consume'

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


// lives in server.ts

export type ServerError = {
    log?: string,
    status?: number,
    message?: string
};


// All the below Auth Types (used in authController and authRouter)

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

// types for '/src/Components/DeadLetterMessage'

export type DataTableProps = {
    messages: Array<Messages>;
}

export interface GridCellExpand {
    propTypes?: any;
    value: any;
    width: number;
}

export type Messages = {
    id: number;
    message_id: number;
    consumertag: string;
    deliverytag: number;
    redelivered: boolean;
    exchange: string;
    routingkey: string;
    contenttype: string | null;
    contentencoding: string | null;
    deliverymode: string | null;
    priority: number | null;
    correlationid: string | null;
    replyto: string | null;
    expiration: string | null;
    messageid: string | null;
    timestamp: number | null;
    type: string | null;
    userid: string | null;
    appid: string | null;
    clusterid: string | null;
}

export interface GridCellExpandProps {
    value: any;
    width: number;
}

export type renderCellExpandParams = {
    id: number;
    field: string;
    api?: any;
    cellMode: string;
    colDef?: any;
    formattedValue: string;
    value: string;
    columns: any
}

export type Columns = Array<{
    field: string;
    headerName: string;
    renderCell: any;
    flex: number;
}>

export type Rows = Array<{
    id: number;
    consumerTag: string;
    deliveryTag: number;
    redelivered: boolean;
    exchange: string;
    routingKey: string;
    contentType: string | null;
    contentEncoding: string | null;
    deliveryMode: string | null;
    priority: number | null;
    correlationId: string | null;
    replyTo: string | null;
    expiration: string | null;
    messageId: string | null;
    timestamp: string;
    type: string | null;
    userId: string | null;
    appId: string | null;
    clusterId: string | null;
}>
