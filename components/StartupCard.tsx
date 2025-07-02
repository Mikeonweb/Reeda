// resuseable card component for startups

import React from "react";
import { formatDate } from "@/utils";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {Startup, Author} from "@/sanity.types"


export type StartupCardType = Omit<Startup, "author"> & {author: Author}

const StartupCard = ({ post }: { post: StartupCardType }) => {
  
  const {
    _createdAt,
    _updatedAt,
    _type,
    _id,
    author, 
    views,
    category,
    title,
    description,
    image,
  } = post;

  return (
    <li className="startup-card">
      {/* date and views */}
      <div className="flex justify-between">
        <p className="bg-stone-200 px-2 py-1 rounded-xl">{formatDate(_createdAt.toString())}</p>
        {/* <p className="bg-gray-300 px-2 py-1 rounded-xl">{_updatedAt}</p> */}
        <div className="flex gap-2">
          <FaEye className="size-6" />
          <span>{views}</span>
        </div>
      </div>

      {/* author, title, and author image */}
      <div className="flex items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-bold line-clamp-1 ">{title}</h3>
          </Link>
        </div>

        <Link href={`/user/${_id}`}>
          <img
            src={image}
            alt="Author Image"
            className="w-16 h-16 object-cover rounded-full"
          />
        </Link>
      </div>
      
      {/* description and image */}
      <Link href={`/user/${_id}`}>
        <p className="mt-8">{description}</p>
        <img src={image} alt="placeholder" className="rounded" />
      </Link>

      {/* category and details button */}
      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/?query=${category?.toLocaleLowerCase()}`}>
        <p className="font-bold bg-gray-300 px-2 py-1 rounded-xl">{category}</p>
        </Link>
        <Button asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
