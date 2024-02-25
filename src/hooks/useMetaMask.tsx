import { useCallback, useState } from 'react';

interface UseMetaMaskResult {
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

export default function useMetaMask(): UseMetaMaskResult {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    // @ts-ignore next-line
    if (window?.ethereum && window?.ethereum.request) {
      try {
        // @ts-ignore next-line
        const accounts = await window?.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const disconnectWallet = useCallback(() => {
    setAccount(null);
  }, []);

  return { account, connectWallet, disconnectWallet };
}
