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
import {ChatDataModel, MessageModel} from './chat/chat.model';
import {ChatService} from './chat/chat.service';

@Injectable()
@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(@InjectModel('Notifications') private readonly notificationModel: Model<any>, private chatService: ChatService) {
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

    // this method is called when a new order os placed
    public sendNewOrderNotification(notificationData): any {
        console.log('NEW ORDER SOCKET METHOD');
        this.server.emit('newOrderPlaced', notificationData);
    }

    afterInit(server: Server): any {
        this.logger.log('WEBSOCKET GATWEAY INITIALIZED');
    }

    @SubscribeMessage('notification-list')
    public async notificationList(@MessageBody() data) {
        try {
            console.log("ADMIN SUBSCRIBE NOTIFICATION...........................",data)
            if(data && data.id){
                let p=await this.notificationModel.findByIdAndUpdate(data.id, {status: false},{new :true});
            }else{
                const list = await this.notificationModel.find({status:true}).limit(5).sort('-createdAt');
                this.server.emit('newOrderPlaced',list);
            }
        } catch (e) {
            console.log('COULD NOT UPDATE ORDER STATUS');
        }
    }

    @SubscribeMessage('get-assigned-orders')
    public async getOrderAssignedToDeliveryboy(@MessageBody() data) {
        console.log(data.id);
    }

    // emits order's assigne to delivery boy or any new orders assigned to him
    public emitAssignedOrders(id: string, data) {
        console.log('Assigned orders');
        this.server.emit(`assigned-orders${id}`, {assignedOrders: data});
    }

    @SubscribeMessage('update-order-status')
    public async updateOrderStatus(@MessageBody() statusInfo) {
        try {
            if (!statusInfo.orderInfo.isAcceptedByDeliveryBoy) {
                statusInfo.orderInfo.orderAssigned = false;
                statusInfo.orderInfo.assignedTo = null;
            }
            console.log('ORDER STATUS CHANGED', statusInfo);
            let message = '';
            this.server.emit('order-status-changed', {message});
        } catch (e) {
            console.log('COULD NOT UPDATE ORDER STATUS');
        }
    }

    @SubscribeMessage('order-update-status')
    public async changeOrderStatus(@MessageBody() statusInfo) {
        try {
        } catch (e) {
            console.log('COULD NOT UPDATE ORDER STATUS');
            console.log(e);
        }
    }

    @SubscribeMessage('get-delivered-orders')
    public async getDeliveredOrders(@MessageBody() data) {
    }

    // emit delivered orders
    public emitDeliveredOrders(id: string, list) {
        this.server.emit(`delivered-orders${id}`, {orders: list});
    }

    @SubscribeMessage('initialize-chat')
    public async initializeChat(@MessageBody() messageBody: MessageModel) {
        const res = await this.chatService.initializeTheChat(messageBody);
        // console.log(res);
        // if (res.response_code === 201) {
        this.emitChatList(messageBody.store, res.response_data);
        this.emitChatList(messageBody.user, res);
        // }
    }

    @SubscribeMessage('user-chat-list')
    public async getUserChatList(@MessageBody() body) {
        const data = await this.chatService.getUserChatList(body.id);
        this.emitChatList(body.id, data);
    }

    @SubscribeMessage('get-chat-list')
    public async getChatList(@MessageBody() data) {
        const list = await this.chatService.getAllChat();
        this.emitChatList(data.id, list.response_data);
    }

    @SubscribeMessage('send-message')
    public async sendMessage(@MessageBody() messageData: MessageModel) {
        // console.log('MESSAGE', messageData);
        const res = await this.chatService.saveMessage(messageData);
        this.server.emit(`listen-new-messages${messageData.store}`, messageData);
        this.server.emit(`listen-new-messages${messageData.user}`, messageData);
    }

    // emits chat list of new chat list
    public emitChatList(id: string, data) {
        this.server.emit(`chat-list${id}`, data);
    }

    @SubscribeMessage('close-chat')
    public async closeChat(@MessageBody() body) {
        console.log(body);
        const res = await this.chatService.closeChat(body.chatId);
        this.emitChatList(body.store,res.response_data)

    }

}
