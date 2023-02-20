import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function LocsImageList() {
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://i.pinimg.com/564x/90/0d/8a/900d8a29b2ab0606a8760ba8d959a0fc.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/09/13/65/09136553287cb50d36eba6a23625fe4b.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/a2/f2/2e/a2f22ef697d714214c87d29a6063153a.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/85/d8/82/85d882c5a2bd635cb3bbc2624f4ea77f.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/3d/db/da/3ddbda1795aa4f22fc947b3bb45e306b.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/4a/c3/31/4ac33158fa1f9d52246d5b6b0668ac17.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/74/3d/4f/743d4f06c1375f5424d4a63acb3cccd6.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/ee/58/01/ee580183d0a1f6086943b574e6e58f8e.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/564x/d8/72/7d/d8727df60cad628847807f91cc3921a7.jpg',
    title: 'locs',
  },
  {
    img: 'https://i.pinimg.com/736x/36/7f/cf/367fcfee2134a2e73a31dd22f9c1580a.jpg',
    title: 'locs',
  },
];
