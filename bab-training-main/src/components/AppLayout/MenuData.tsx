import { AppstoreOutlined } from "@ant-design/icons";
import { SiGoogleclassroom } from "react-icons/si";
import { SlBadge } from "react-icons/sl";
import { DiMaterializecss } from "react-icons/di";
import { RiInformationLine } from "react-icons/ri";
import { IMenuData } from "../../Types/MenuData";
import { Link } from "react-router-dom";

export const SideBarItems: IMenuData[] | any = [
  {
    label: <Link to='/'>Dashboard</Link>,
    key: "dashboard",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to='/materials'>Materials</Link>,
    key: "materials",
    icon: <DiMaterializecss />,
  },
  {
    label: <Link to='/classes'>Classes</Link>,
    key: "classes",
    icon: <SiGoogleclassroom />,
  },
  {
    label: <Link to='/Certificates'>Certificates</Link>,
    key: "Certificates",
    icon: <SlBadge />,
  },
  {
    label: <Link to='/my-info'>My Information</Link>,
    key: "my-info",
    icon: <RiInformationLine />,
  },
];
