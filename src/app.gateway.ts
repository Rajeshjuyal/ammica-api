import {
    ConnectedSocket, MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';
import {Injectable, Logger, Scope} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor() {
    }

    @WebSocketServer() server: Server;
    private logger: Logger = new Logger();

    // this method is called when client is connected to websocket
    public handleConnection(client: Socket, ...args): any {
        this.logger.log('CLIENT CONNECTED');
        console.log('Client info', client.id);
    }

    // this method is called when client is disconnected from socket
    public handleDisconnect(client: Socket): any {
        this.logger.log('CLIENT DISCONNECTED');
        console.log('CLIENT info', client.id);
    }

    

    afterInit(server: Server): any {
        this.logger.log('WEBSOCKET GATWEAY INITIALIZED');
    }

   

   

}
