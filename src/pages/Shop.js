import React from "react";
import { Header } from "../components/Header";
import ItemCard from "../components/ItemCard";

import { Grid, Box } from "theme-ui";
const coffeeDripper = require("../images/coffeDripper");
export const Shop = () => {
  return (
    <div>
      <Header headerText="Our Products" />
      <div>
        <Grid width={[128, null, 192]}>
          <Box>
            <ItemCard
              src="coffeeDripper"
              alt="coffee dripper image"
              itemName="Pour Over Coffee Dripper"
              itemDescription="More smiles per cup. Baristas agree, pour over brewing unlocks the full potential of coffee.
              This drip kit is the easiest way to get there.
              Prepare your taste buds for a flavor fiesta that will leave you grinning like a possum eating a sweet potato"
              price="34.99"
            />
          </Box>
          <Box>
            <ItemCard />
          </Box>
          <Box>
            <ItemCard />
          </Box>
          <Box>
            <ItemCard />
          </Box>
          <Box>
            <ItemCard />
          </Box>
          <Box>
            <ItemCard />
          </Box>
        </Grid>
      </div>
    </div>
  );
};
