import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { CarFront, CircleDot, MoveRight } from "lucide-react";

const CardItem = () => {
  return (
    <Card className="m-2 my-4">
      <div className="flex items-center bg-white rounded-lg">
        <div className="w-48 h-48">
          <CarFront color="#e3e3e3" className="h-full w-full" />
        </div>
        <div className="px-3 flex-1">
          <Link to="/car/sample-id">
            <h3 className="text-2xl font-bold text-gray-900">
              Sample Car Name
            </h3>
          </Link>
          <div className="mt-1 mb-3">
            <Badge variant="outline" className="text-gray-600">
              <CircleDot className="h-2 w-2 me-1" />
              Category
            </Badge>
            <Badge variant="outline" className="ms-2 text-gray-600">
              <CircleDot className="h-2 w-2 me-1" /> Fuel
            </Badge>
            <Badge variant="outline" className="ms-2 text-gray-600">
              <CircleDot className="h-2 w-2 me-1" /> Transmission
            </Badge>
          </div>
          <div className="flex items-center my-2">
            {/* Star Ratings Component */}
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              4.5
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
              100 reviews
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-xl font-bold text-gray-900">
              $100{" "}
              <p className="text-xs font-thin text-gray-700 ms-1">
                rent per day
              </p>
            </span>
            <Button size="sm" className="px-4" asChild>
              <Link to="/car/sample-id">
                Book Now <MoveRight className="ml-3 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
