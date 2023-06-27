import React from "react";
import SiteNavBar from "./SiteNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PhotoGallery.css";

import img1 from "../FlagSitePics/GalleryPics/img_1.jpeg"
import img2 from "../FlagSitePics/GalleryPics/img_2.jpeg"
import img3 from "../FlagSitePics/GalleryPics/img_3.jpeg"
import img4 from "../FlagSitePics/GalleryPics/img_4.jpeg"
import img5 from "../FlagSitePics/GalleryPics/img_5.jpeg"
import img6 from "../FlagSitePics/GalleryPics/img_6.jpeg"
import img7 from "../FlagSitePics/GalleryPics/img_7.jpeg"
import img8 from "../FlagSitePics/GalleryPics/img_8.jpeg"
import img9 from "../FlagSitePics/GalleryPics/img_9.jpeg"
import img10 from "../FlagSitePics/GalleryPics/img_10.jpeg"
import img11 from "../FlagSitePics/GalleryPics/img_11.jpeg"
import img12 from "../FlagSitePics/GalleryPics/img_12.jpeg"
import img13 from "../FlagSitePics/GalleryPics/img_13.jpeg"
import img14 from "../FlagSitePics/GalleryPics/img_14.jpeg"
// import img15 from "../FlagSitePics/GalleryPics/img_15.jpeg"
import img16 from "../FlagSitePics/GalleryPics/img_16.jpeg"
import img17 from "../FlagSitePics/GalleryPics/img_17.jpeg"
import img18 from "../FlagSitePics/GalleryPics/img_18.jpeg"
import img19 from "../FlagSitePics/GalleryPics/img_19.jpeg"
import img20 from "../FlagSitePics/GalleryPics/img_20.jpeg"
import img21 from "../FlagSitePics/GalleryPics/img_21.jpeg"
import img22 from "../FlagSitePics/GalleryPics/img_22.jpeg"

const gallery = [
  {
    picture: img1
  },
  {
    picture: img2
  },
  {
    picture: img3
  },
  {
    picture: img4
  },
  {
    picture: img5
  },
  {
    picture: img6
  },
  {
    picture: img7
  },
  {
    picture: img8
  },
  {
    picture: img9
  },
  {
    picture: img10
  },
  {
    picture: img11
  },
  {
    picture: img12
  },
  {
    picture: img13
  },
  {
    picture: img14
  },
  // {
  //   picture: img15
  // },
  {
    picture: img16
  },
  {
    picture: img17
  },
  {
    picture: img18
  },
  {
    picture: img19
  },
  {
    picture: img20
  },
  {
    picture: img21
  },
  {
    picture: img22
  },
]

export default function PhotoGallery() {
  return (
    <div className="galleryPage">
      <SiteNavBar />
      <h1 className="galleryHeader">Gallery</h1>
      <div id="galleryLayout">
      {gallery.map((gallery) => {
          return (
              <img
                id="galleryPic"
                alt="galleryImg"
                src={gallery.picture}
              />
          );
        })}
      </div>
      
</div>
  );
};