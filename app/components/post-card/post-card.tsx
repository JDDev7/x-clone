"use client"
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@heroui/react";
import { useState } from "react";
import style from "./post-card.module.css";
import Link from "next/link";
import { IconMessageCircle, IconStar, IconRepeat } from "@tabler/icons-react";

export default function PostCard({userName, avatarUrl, userFullName, content}: {
    userFullName: string,
    userName: string,
    avatarUrl: string,
    content: string
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className={style.Card}>
      <CardHeader className={style.CardHeader}>
        <div className={style.UserInfoContainer}>
            <Link href={`/${userName}`}>
            <Avatar
            radius="full"
            size="md"
            src={avatarUrl}
          />
            </Link>
          
          <div className={style.UserInfo}>
            <h4 className={style.UserFullName}>{userFullName}</h4>
            <h5 className={style.UserName}>@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        {content}
        <span className="pt-2">
          #Hashtag goes here
          
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
        <IconMessageCircle className={style.Icons}/>
        </button>
        <button>
        <IconRepeat className={style.Icons}/>
        </button>
        <button>
        <IconStar className={style.Icons}/>
        </button>
      </CardFooter>
    </Card>
  );
}