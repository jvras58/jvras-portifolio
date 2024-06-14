import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Sociais = [
    {
        icon: <FaGithub />,
        path: ""
    },
    {
        icon: <FaLinkedin />,
        path: ""
    },
    {
        icon: <FaInstagram />,
        path: ""
    }
]


const Rede = ({containerStyles, iconStyles}) => {
    return ( 
        <div className={containerStyles}>
        {Sociais.map((item, index) => {
        return (
        <Link key = {index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
        })}
    </div>
    );
};
export default Rede;