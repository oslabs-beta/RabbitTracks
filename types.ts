// types for '/rabbitmq/consume'

export type CreateDLXMessage = {
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
    timestamp: number | null;
    type: string | null;
    userId: string | null;
    appId: string | null;
    clusterId: string | null;
    headers: any;
    projectId: number;
}

// types for '/src/Components/DeadLetterMessage'

export type DataTableProps = {
    messages: Array<Messages>;
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