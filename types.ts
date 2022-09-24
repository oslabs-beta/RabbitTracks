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