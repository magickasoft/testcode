import io from 'socket.io-client';
import { NetInfo, AppState } from 'react-native';
import Config from 'react-native-config';
import tokens from './tokens';
import { tokens as constTokens } from '../constants';

const { AUTH_TOKEN } = constTokens;

class Socket {
  constructor() {
    AppState.addEventListener('change', nextAppState => {
      const { appState } = this;

      const wasActive = appState === 'active';
      const isActive = nextAppState === 'active';

      if (wasActive === isActive) {
        return;
      }

      if (!wasActive && isActive) {
        // connect
        this.connect();
      }

      if (wasActive && !isActive) {
        // disconnect
        this.disconnect();
      }
      this.appState = isActive;
    });
    NetInfo.addEventListener('connectionChange', async ({ type }) => {
      const { connectionType, socket } = this;
      const wasConnected = connectionType !== 'none';
      const isConnected = type !== 'none';

      if (connectionType === type) {
        return;
      }

      if (isConnected && !socket) {
        // connect
        this.connect();
      }

      if (wasConnected && !isConnected) {
        // disconnect
        this.disconnect();
      }

      this.connectionType = type;
    });
  }
  connect = async () => {
    if (this.socket) {
      return;
    }

    const authKey = await tokens.get(AUTH_TOKEN);

    this.socket = io(Config.BASE_URL, {
      reconnection: false,
      // transports: ['websocket'],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false,
      query: `Authorization=Bearer ${authKey}`,
    });

    this.socket.on('connect_error', error => {
      if (error === 'timeout') {
        this.connect();
      }
    });

    this.socket.on('auth-error', error => {
      // TODO
      console.log(error);
      this.disconnect();
    });

    this.socket.on('connection', () => {
      this.socket.emit('join_private', {});
    });

    this.socket.on('messageReceived', message => {
      if (this.listener) {
        this.listener(message);
      }
    });
  };

  onMessageReceived = listener => {
    this.listener = listener;
  };

  disconnect = () => {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = undefined;
    }
  };
}

export default new Socket();
