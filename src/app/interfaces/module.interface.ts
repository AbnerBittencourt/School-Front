export interface IModule {
    name: string;
    icon?: string;
    routerLink?: string;
    enabled?: boolean;
    isActive: string;
    childrens?: IModule[];
}
