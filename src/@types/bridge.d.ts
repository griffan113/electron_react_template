import { bridge } from '../../electron/bridge'

declare global {
  // eslint-disable-next-line
  interface Window {
    Bridge: typeof bridge
  }
}
