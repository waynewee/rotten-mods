export interface Module {
  code: string;
  title: string;
  description: string;
}

export interface ModuleMeta extends Module {
  expectedHours: number;
  difficulty: number;
  ratings: number;
  university: string;
}
