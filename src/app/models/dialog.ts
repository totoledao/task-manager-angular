export interface DialogData {
  title: string;
  content?: string;
  cancelAction?: boolean;
  actions?: Array<{ title: string; action: () => void }>;
}
