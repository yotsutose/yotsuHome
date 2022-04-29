import { FileAndDirectory } from "./FileAndDirectory";

export class File {
    public name: string;
    public content: string;
    public parent: FileAndDirectory;
    public children: FileAndDirectory[];
}
