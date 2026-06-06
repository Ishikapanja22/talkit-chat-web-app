import { Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";
@Injectable({
  providedIn: "root",
})
export class SocketService {
  socket: Socket;
  constructor() {
    this.socket = io("http://localhost:5002");
  }
  joinRoom(roomId: string) {
    this.socket.emit("join_room", roomId);
  }
  sendMessage(message: any) {
    this.socket.emit("send_message", message);
  }
  receiveMessage(callback: any) {
    this.socket.on("receive_message", callback);
  }
}
