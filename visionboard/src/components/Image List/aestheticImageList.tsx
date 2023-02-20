import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function AestheticImageList() {
  return (
    <ImageList
      sx={{ width: 1000, height: 900 }}
      variant="quilted"
      cols={4}
      rowHeight={200}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
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
    img: "https://i.pinimg.com/564x/dd/28/4d/dd284db2a17fcf8a731eafe4ebb4c2dc.jpg",
    title: "tattoo",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/fa/a9/63/faa963b584c844b6ae3c10f8731c7534.jpg",
    title: "tattoo",
  },
  {
    img: "https://i.pinimg.com/564x/db/0c/94/db0c94aadd22dad30ce2920dcad8220f.jpg",
    title: "tattoo",
  },
  {
    img: "https://i.pinimg.com/564x/e3/1a/f5/e31af5615326514ef937aa435550cee2.jpg",
    title: "piercings",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/b4/a5/b8/b4a5b869b568b91a17be81224bfbe0fb.jpg",
    title: "piercings",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/c1/25/8c/c1258c2f8a0b3e3c05ffb1d04f529f41.jpg",
    title: "anklets",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/736x/07/97/4f/07974fc377f5c3ea0bec2ea08ae1b7f6.jpg",
    title: "chains",
  },
  {
    img: "https://i.pinimg.com/564x/e6/34/c1/e634c17037c97b839f8348260232418f.jpg",
    title: "anklets",
  },
  {
    img: "https://i.pinimg.com/564x/2d/00/6f/2d006fbab5b96803600b4675e21391d8.jpg",
    title: "chains",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/99/90/10/999010e62c98e7632b3cbc5bd29a6161.jpg",
    title: "bracelets",
  },
  {
    img: "https://i.pinimg.com/736x/01/1b/e8/011be8beea6007c162193b7c4bccf625.jpg",
    title: "rings",
  },
  {
    img: "https://i.pinimg.com/564x/ad/75/2f/ad752f2f44887fe3a52e4db3e948fb76.jpg",
    title: "clothes",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/ea/3d/fa/ea3dfab6807b91530596448b78cb2d75.jpg",
    title: "clothes",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/79/30/31/7930318d421534ea92a3d965315a8e61.jpg",
    title: "vibes",
  },
  {
    img: "https://i.pinimg.com/564x/86/bc/18/86bc18d5edea01ff07f1246a181c4723.jpg",
    title: "vibes",
  },
  {
    img: "https://i.pinimg.com/564x/7c/94/dc/7c94dc1564425d70a405b8501532fc07.jpg",
    title: "wheelthrowing",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/27/3e/d0/273ed0feb545e44f7e84855426500d58.jpg",
    title: "wheelthrowing",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/2a/15/7f/2a157f331134b6066e1725ca2f2c8922.jpg",
    title: "wheelthrowing",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/34/30/7d/34307df7bde0800dead91ce15d9f4e74.jpg",
    title: "wheelthrowing",
  },
  {
    img: "https://i.pinimg.com/564x/37/5a/3f/375a3f93ea70c079f8c8e4b287db8ce2.jpg",
    title: "music",
  },
  {
    img: "https://i.pinimg.com/564x/78/16/89/781689bbaae515ec9d389b9281563acc.jpg",
    title: "music",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/38/be/00/38be008121ac73753ee827044246a8b2.jpg",
    title: "nightout",
  },
  {
    img: "https://i.pinimg.com/564x/d8/4a/89/d84a89cf7c9cbd9df5daee2eeb560c6a.jpg",
    title: "vibes",
  },
  {
    img: "https://i.pinimg.com/564x/2d/c2/11/2dc211b60a26864faca3ef50464c6df3.jpg",
    title: "wheelthrowing",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/58/2d/68/582d688e35d39b495da4f87ae23b8fbe.jpg",
    title: "quote",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/a3/7d/4c/a37d4c1c06df8aa7452db7a97da89e23.jpg",
    title: "quote",
  },
  {
    img: "https://i.pinimg.com/564x/bc/af/bb/bcafbbeac507cbb1edc72c7f7b30c20b.jpg",
    title: "vibes",
  },
  {
    img: "https://i.pinimg.com/564x/f6/90/b0/f690b0b85a587614ae5ba65bbefc15a3.jpg",
    title: "clothes",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/56/91/48/5691489556e58c550b89a8f038f553b9.jpg",
    title: "clothes",
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/f0/a6/5e/f0a65e4192c0abeaa76c7763f89b3508.jpg",
    title: "clothes",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/e8/f3/3c/e8f33c23771849a5d4acdea406a0df98.jpg",
    title: "clothes",
  },
  {
    img: "https://i.pinimg.com/564x/0d/c5/9f/0dc59f8c14a1b29c177cdf201f358f1e.jpg",
    title: "airpodmaxs",
  },
  {
    img: "https://i.pinimg.com/564x/91/36/9e/91369eb282f21886c7be688d60939643.jpg",
    title: "airpodmaxs",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.pinimg.com/564x/a4/f7/5b/a4f75bf500b5f7525645ed01183f11b2.jpg",
    title: "quote",
  },
  {
    img: "https://i.pinimg.com/750x/ac/a0/5e/aca05e706438dad740d324d8e026df01.jpg",
    title: "bartending",
  },
  // {
  //   img: "",
  //   title: "",
  //   cols: 2,
  // },
  // {
  //   img: "",
  //   title: "",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: "",
  //   title: "",
  // },
  // {
  //   img: "",
  //   title: "",
  // },
  // {
  //   img: "",
  //   title: "",
  //   cols: 2,
  // },
  // {
  //   img: "",
  //   title: "",
  //   cols: 2,
  // },
  // {
  //   img: "",
  //   title: "",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: "",
  //   title: "",
  // },
  // {
  //   img: "",
  //   title: "",
  // },
  // {
  //   img: "",
  //   title: "",
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: "",
  //   title: "",
  // },
  // {
  //   img: "",
  //   title: "",
  // },
  // {
  //   img: "",
  //   title: "",
  //   cols: 2,
  // },
];


