import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Dashboard() {
  const [isDark, setDark] = useState(false);

  function toggleButton() {
    setDark(!isDark);
  }

  const shoes = [
    {
      id: 1,
      name: "Nike Air Max",
      desc: "Lightweight comfort with max cushioning.",
      price: "₹7,999",
      img: "https://images.pexels.com/photos/12368133/pexels-photo-12368133.jpeg",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      desc: "Performance and style for everyday runs.",
      price: "₹8,499",
      img: "https://images.pexels.com/photos/12368133/pexels-photo-12368133.jpeg",
    },
    {
      id: 3,
      name: "Puma RS-X",
      desc: "Bold retro vibes with modern comfort.",
      price: "₹6,499",
      img: "https://images.pexels.com/photos/12368133/pexels-photo-12368133.jpeg",
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        fontWeight="bold"
      >
        Dashboard
      </Typography>

      <div className="flex justify-center mb-6">
        <button
          onClick={toggleButton}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all"
        >
          Toggle Theme
        </button>
      </div>

      {/* Cards in grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {shoes.map((shoe) => (
          <Card key={shoe.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt={shoe.name}
              height="200"
              image={shoe.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {shoe.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {shoe.desc}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: "10px" }}>
                {shoe.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">Details</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
