import { useRecoilState } from 'recoil'
import { walletState, WalletStatusType } from './state/atoms/walletAtoms'
import { useConnectWallet } from './hooks/useConnectWallet'
import { ConnectedWalletButton } from './components/ConnectedWalletButton'

const { mutate: connectWallet } = useConnectWallet()
const [{ key }, setWalletState] = useRecoilState(walletState)

function resetWalletConnection() {
    setWalletState({
      status: WalletStatusType.idle,
      address: '',
      key: null,
      client: null,
    })
  }

export const walletButton = (
    <ConnectedWalletButton
      connected={Boolean(key?.name)}
      walletName={key?.name}
      onConnect={() => connectWallet(null)}
      onDisconnect={resetWalletConnection}
      css={{ marginBottom: '$8' }}
    />
  )

