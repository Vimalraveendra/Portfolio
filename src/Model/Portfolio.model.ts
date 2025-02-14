import { IconType } from "react-icons"

export interface INavData{
    id: number,
    link:string,
    name:string
}

export interface ISkill{
    id:number,
   name:string,
   icon:IconType
}

export interface IDefaultFormFields{
    from_name:string,
    from_email: string,
    message:string
}
export interface IProjectCard{
    id:number,
    link:string,
    image:string,
    name:string
}

export interface IIconInfoProps{
    Icon:IconType,
    text:string,
    link?:string
}

export interface IInfoModalProps{
    infoText:string,
    handleToggleInfoModal:()=>void
}