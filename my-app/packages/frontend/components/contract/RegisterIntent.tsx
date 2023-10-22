import { useEffect, useState, FormEvent } from 'react';
import { useContractWrite, usePrepareContractWrite, useConnect, useAccount } from 'wagmi';

import { TRADE_ABI } from '@/contracts/TRADE_ABI';

export const RegisterIntent = () => {
    const [tokenIn, setTokenIn] = useState('');
    const [amount, setAmount] = useState<number>(0); 
    const [liquidity, setLiquidity] = useState<number>(0); 

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // const { data: signerData } = useSigner();
    const { address, isConnecting, isConnected, isDisconnected } = useAccount()

    const tradeAddress = '0xB05636e6d474f7eeaCdd8aF3102D9D8Df1C9e16c';
    const tradeABI = TRADE_ABI;

    const {config} = usePrepareContractWrite({
        address: tradeAddress,
        abi: tradeABI,
        functionName: "registerIntent",
        args: [tokenIn, amount, liquidity]
      });
    
    const { write } = useContractWrite(config)

    useEffect(() => {
        if (isConnected) {
          setError('');
          setLoading(false);
        } else {
          setLoading(false);
          setError('please connect your wallet');
        }
      }, [address]);

      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          setLoading(true);
           const tx = write?.()
        //   await tx.wait();
          console.log(tx);
          //setNewGreeter('');
          setLoading(false);
        } catch (error) {
          setError('txn failed, check contract');
          setLoading(false);
        }
      };

      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }

      return (
        <div style={{ margin: '20px' }}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              value={tokenIn}
              placeholder="tokenIn"
              onChange={(e) => setTokenIn(e.target.value)}
            />
            <input
              required
              value={amount}
              placeholder="amount"
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <input
              required
              value={liquidity}
              placeholder="liquidity"
              onChange={(e) => setLiquidity(parseInt(e.target.value))}
            />
            <button style={{ marginLeft: '20px' }} type="submit">
              Register Intent
            </button>
          </form>
        </div>
      );   
}    
