import Link from "next/link";

import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Sociais = [
    {
        icon: <FaGithub />,
        path: "https://github.com/jvras58"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/-jonathasvinicius/"
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/jonh_5858/"
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