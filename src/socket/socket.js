import io from 'socket.io-client'

export const socket = io('/')

export const statistics = io('/statistics')
