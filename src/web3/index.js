import "./script.js";
import { getTransactionsByAccount } from "./script";
function Web3() {
  const handleClick = () => {
    const account = "0x8bce57b7b84218397ffb6cefae99f4792ee8161d";
    getTransactionsByAccount(account, 13651359, 13651359 + 10);
  };
  return (
    <div>
      <button onClick={handleClick}>get</button>
    </div>
  );
}
export default Web3;
