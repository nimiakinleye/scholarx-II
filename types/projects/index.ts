export type ProjectListType = ProjectType[]

export type ProjectType = {
  title:string;
  image: string;
  id:string;
}

export type ProjectListProps = {
  projects: ProjectListType;
  count?: number;
}

export type ProjectCardProps = {
  project: ProjectType
}
