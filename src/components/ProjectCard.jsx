import Image from "next/image";

const ProjectCard = ({ img, title, description, className }) => {
  return (
    <div className={`rounded overflow-hidden shadow-lg bg-white ${className}`}>
      <Image className="w-full object-cover" style={{ height: "192px" }} src={img} alt="Project" />
      
        {/* <div className="font-bold text-xl mb-2">{title}</div> */}
        
      </div>
    
  );
};

export default ProjectCard;