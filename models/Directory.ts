import { FileAndDirectory } from "./FileAndDirectory";

export class Directory {
    public name: string;
    public parent: FileAndDirectory;
    public children: FileAndDirectory[];
}
