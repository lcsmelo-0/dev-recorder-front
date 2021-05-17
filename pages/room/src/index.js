import { constants } from "../../_shared/constants.js"
import SocketBuilder from "../../_shared/socketBuilder.js"


const socketBuilder = new SocketBuilder({
  socketUrl: constants.socketNamespaces,
  namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
  .setOnUserConnected((user) => console.log('user connected', user))
  .setOnUserDisconnected((user) => console.log('user disconnected', user))
  .build()

const room = {
  id: Date.now(),
  topic: 'JS Expert'
}

const user = {
  img: 'https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_33-256.png',
  username: 'Lucas Melo'
}