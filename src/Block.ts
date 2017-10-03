
import Transaction from './Transaction';

interface Block {
  readonly index : number;
  readonly timestamp : number;
  transactions : Array<Transaction>;
  readonly proof : number;
  readonly previousHash? : string;
}

export default Block;
