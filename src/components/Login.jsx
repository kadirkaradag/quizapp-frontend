import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Center from "./Center";

const Login = () => {
  return (
    <>
      <Center>
        <Card sx={{ width: "400px" }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 3 }}>
              Quiz App
            </Typography>
            <Box
              sx={{
                "& .MuiTextField-root": {
                  margin: 1,
                  width: "90%",
                },
              }}
            >
              <form noValidate>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                ></TextField>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                ></TextField>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ width: "90%" }}
                >
                  Start
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Center>
    </>
  );
};

export default Login;
