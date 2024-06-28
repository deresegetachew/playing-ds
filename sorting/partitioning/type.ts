export enum EalgorithmName {
    Lomuto = 'Lomuto', 
    Hoare = 'Hoare'
}

export interface Partition {
    name: EalgorithmName;
    partitionArray(arr: number[], low: number, high: number): number;
}

export interface IPartitionMethodFactory {
    createPartition(): Partition
}