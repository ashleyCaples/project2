import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function FitnessImageList() {
  return (
    <ImageList sx={{ width: 800, height: 600 }} cols={3} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/564x/cc/55/f3/cc55f303686b3acab488c3edc611034b.jpg",
    title: "headphonesWaterbottle",
  },
  {
    img: "https://i.pinimg.com/564x/2c/66/aa/2c66aa4f5c8bebcb1dcad9af14c98a1a.jpg",
    title: "headphones",
  },
  {
    img: "https://i.pinimg.com/564x/ce/f3/4d/cef34dea5ea7c198d9457a21b5f364d5.jpg",
    title: "gym",
  },
  {
    img: "https://i.pinimg.com/564x/dd/1d/d0/dd1dd0e7626582927d9820903a55e4ae.jpg",
    title: "",
  },
  {
    img: "https://i.pinimg.com/564x/14/2b/94/142b9487830ee9c117fcedf07f443c4d.jpg",
    title: "pilates",
  },
  {
    img: "https://i.pinimg.com/564x/1f/54/41/1f5441bfbc0479347b7036810854ad23.jpg",
    title: "healthdrinks",
  },
  {
    img: "https://i.pinimg.com/750x/77/7d/2b/777d2b0b91deb21e67463e084851a8fc.jpg",
    title: "gymshark",
  },
  {
    img: "https://i.pinimg.com/564x/92/6b/13/926b13a0be3674fb117305f60d174cec.jpg",
    title: "gymbody",
  },
  {
    img: "https://i.pinimg.com/564x/6a/d5/36/6ad5362a9970448e5be0c80fc58fe99f.jpg",
    title: "boxing",
  },
  {
    img: "https://i.pinimg.com/564x/c6/64/27/c664273aecd3140e55ed81c7466c4281.jpg",
    title: "gymbody",
  },
  {
    img: "https://i.pinimg.com/564x/4a/5c/86/4a5c866f02e385722f12fedd37be986e.jpg",
    title: "gymbody",
  },
  {
    img: "https://iowacity.momcollective.com/wp-content/uploads/2022/03/IMG_0527.jpg",
    title: "9round",
  },
  {
    img: "https://i.pinimg.com/736x/2f/6b/67/2f6b678adc72d14c7846e12be1337268.jpg",
    title: "gymbody",
  }
];

