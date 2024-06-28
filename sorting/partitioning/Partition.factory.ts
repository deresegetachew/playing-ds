import { HoarePartition } from "./hoarePartition/hoarePartition.ts";
import { LomutoPartition } from "./lomutoPartition/lomutoPartition.ts";
import {IPartitionMethodFactory, Partition} from './type.ts'


// export class PartitionMethodFactory {
//     static createPartitionMethod(method: 'Hoare' | 'lomuto') {
//         switch (method) {
//             case 'Hoare':
//                 return new HoarePartition()
//             case 'lomuto':
//                 return new LomutoPartition()
//             default:
//                 throw new Error(`Unsupported partition type`)
//         }
//     }
// }


export class LomutoParitionFactory implements IPartitionMethodFactory {
  createPartition(): Partition {
    return new LomutoPartition()
  }
}

export class HoarePartitionFactory implements IPartitionMethodFactory {
  createPartition(): Partition {
    return new HoarePartition()
  }

}