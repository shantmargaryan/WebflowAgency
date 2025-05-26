import { NextResponse } from "next/server";



export async function GET() {
  const CoursesItems = [
    {
      id: 1,
      teacherName: "teacherName",
      teacherPosition: "teacherPosition",
      befourTitle: "befourTitle",
      title: "title",
      description: "description",
      largeDescription: "largeDescription",
      img: "/imgs/courseImg5.jpg",
      teacherImg: "/imgs/ShantMargaryan.jpg",
      link: "link",
    },
    {
      id: 2,
      teacherName: "secoundTeacherName",
      teacherPosition: "secoundTeacherPosition",
      befourTitle: "secoundBefourTitle",
      title: "secoundTitle",
      description: "secoundDescription",
      largeDescription: "secoundLargeDescription",
      img: "/imgs/courseImg4.jpg",
      teacherImg: "/imgs/VahanHovhannisian.jpg",
      link: "link",
    },
    {
      id: 3,
      teacherName: "thirdTeacherName",
      teacherPosition: "thirdTeacherPosition",
      befourTitle: "thirdBefourTitle",
      title: "thirdTitle",
      description: "thirdDescription",
      largeDescription: "thirdLargeDescription",
      img: "/imgs/courseImg2.jpg",
      teacherImg: "/imgs/GarenHarutyunyan.jpg",
      link: "link",
    },
    {
      id: 4,
      teacherName: "fourthTeacherName",
      teacherPosition: "fourthTeacherPosition",
      befourTitle: "fourthBefourTitle",
      title: "fourthTitle",
      description: "fourthDescription",
      largeDescription: "fourthLargeDescription",
      img: "/imgs/courseImg3.jpg",
      teacherImg: "/imgs/MarineTorosyan.jpg.jpg",
      link: "link",
    },
    {
      id: 5,
      teacherName: "fifthTeacherName",
      teacherPosition: "fifthTeacherPosition",
      befourTitle: "fifthBefourTitle",
      title: "fifthTitle",
      description: "fifthDescription",
      largeDescription: "fifthLargeDescription",
      img: "/imgs/courseImg1.jpg",
      teacherImg: "/imgs/VahanHovhannisian.jpg",
      link: "link",
    },
  ];
  return NextResponse.json(CoursesItems);
}

