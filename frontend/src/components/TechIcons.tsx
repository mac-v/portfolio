import {
    FaPython,
    FaReact,
    FaGithub,
    FaJava,
    FaAws,
    FaDocker,
} from 'react-icons/fa';
import {
    SiDjango,
    SiFlask,
    SiOracle,
    SiFigma,
    SiGooglecloud,
    SiDatabricks,
} from 'react-icons/si';
import {
    TbBrandMysql,
    TbBrandAzure,
    TbBrandSupabase,
    TbBrandVercel,
} from 'react-icons/tb';

const iconComponents = {
    Django: SiDjango,
    Python: FaPython,
    Flask: SiFlask,
    React: FaReact,
    GitHub: FaGithub,
    Oracle: SiOracle,
    'SQL Server': TbBrandMysql,
    AWS: FaAws,
    GCP: SiGooglecloud,
    Azure: TbBrandAzure,
    Databricks: SiDatabricks,
    Supabase: TbBrandSupabase,
    Vercel: TbBrandVercel,
    Docker: FaDocker,
    Java: FaJava,
    Figma: SiFigma,
};

const techIcons = Object.entries(iconComponents).map(([name, IconComponent]) => ({
    icon: <IconComponent />,
    name,
}));

export default techIcons;