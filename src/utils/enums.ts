export enum ConnectionStatus {
  ONLINE = 'Online',
  OFFLINE = 'Offline',
}

export enum Events {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CLIENTS_UPDATED = 'clients-updated',
  MESSAGE_CLIENT = 'message-client',
  MESSAGE_SERVER = 'message-server',
}
