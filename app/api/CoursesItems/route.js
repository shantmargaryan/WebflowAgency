import { NextResponse } from "next/server";



export async function GET() {
  const CoursesItems = [
    {
      id: 1,
      befourTitle: "befourTitle",
      title: "title",
      description: "description",
      largeDescription: "largeDescription",
      img: "/imgs/courseImg5.jpg",
      link: "link",
    },
    {
      id: 2,
      befourTitle: "secoundBefourTitle",
      title: "secoundTitle",
      description: "secoundDescription",
      largeDescription: "secoundLargeDescription",
      img: "/imgs/courseImg4.jpg",
      link: "link",
    },
    {
      id: 3,
      befourTitle: "thirdBefourTitle",
      title: "thirdTitle",
      description: "thirdDescription",
      largeDescription: "thirdLargeDescription",
      img: "/imgs/courseImg2.jpg",
      link: "link",
    },
    {
      id: 4,
      befourTitle: "fourthBefourTitle",
      title: "fourthTitle",
      description: "fourthDescription",
      largeDescription: "fourthLargeDescription",
      img: "/imgs/courseImg3.jpg",
      link: "link",
    },
    {
      id: 5,
      befourTitle: "fifthBefourTitle",
      title: "fifthTitle",
      description: "fifthDescription",
      largeDescription: "fifthLargeDescription",
      img: "/imgs/courseImg1.jpg",
      link: "link",
    },
  ];
  return NextResponse.json(CoursesItems);
}

