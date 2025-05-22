import { NextResponse } from "next/server";



export async function GET(request) {
  const CoursesItems = [
    {
      id: 1,
      befourTitle: "befourTitle",
      title: "title",
      description: "description",
      img: "/imgs/courseImg5.jpg",
      link: "link",
    },
    {
      id: 2,
      befourTitle: "secoundBefourTitle",
      title: "secoundTitle",
      description: "secoundDescription",
      img: "/imgs/courseImg4.jpg",
      link: "link",
    },
    {
      id: 3,
      befourTitle: "thirdBefourTitle",
      title: "thirdTitle",
      description: "thirdDescription",
      img: "/imgs/courseImg2.jpg",
      link: "link",
    },
    {
      id: 4,
      befourTitle: "fourthBefourTitle",
      title: "fourthTitle",
      description: "fourthDescription",
      img: "/imgs/courseImg3.jpg",
      link: "link",
    },
    {
      id: 5,
      befourTitle: "fifthBefourTitle",
      title: "fifthTitle",
      description: "fifthDescription",
      img: "/imgs/courseImg1.jpg",
      link: "link",
    },
  ];
  return NextResponse.json(CoursesItems);
}

