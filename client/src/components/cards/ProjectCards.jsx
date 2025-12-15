import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Card className="bg-gray-900 border border-gray-800 hover:border-gray-600 transition p-3 rounded-xl">
      {/* Thumbnail */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      <CardHeader className="p-0 mb-2">
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="p-0 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Price */}
        <p className="text-lg font-bold text-green-400">₹{project.price}</p>

        {/* View More Button */}
        <Link to={`/project/${project._id}`}>
          <Button className="w-full mt-2">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
