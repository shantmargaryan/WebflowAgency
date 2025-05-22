import { NextResponse } from "next/server";



export async function GET(request) {
  const CoursesItems = [
    {
      id: 1,
      befourTitle: "befourTitle",
      title: "title",
      description: "description",
      img: "/imgs/CourseImg5.jpg",
      link: "link",
    },
    {
      id: 2,
      befourTitle: "secoundBefourTitle",
      title: "secoundTitle",
      description: "secoundDescription",
      img: "/imgs/CourseImg4.jpg",
      link: "link",
    },
    {
      id: 3,
      befourTitle: "thirdBefourTitle",
      title: "thirdTitle",
      description: "thirdDescription",
      img: "/imgs/CourseImg2.jpg",
      link: "link",
    },
    {
      id: 4,
      befourTitle: "fourthBefourTitle",
      title: "fourthTitle",
      description: "fourthDescription",
      img: "/imgs/CourseImg3.jpg",
      link: "link",
    },
    {
      id: 5,
      befourTitle: "fifthBefourTitle",
      title: "fifthTitle",
      description: "fifthDescription",
      img: "/imgs/CourseImg1.jpg",
      link: "link",
    },
  ];
  return NextResponse.json(CoursesItems);
}

