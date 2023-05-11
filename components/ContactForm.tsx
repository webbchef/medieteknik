import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";

import { Typography, Grid, Box, TextField, Button } from "@mui/material";
// import styles from "@/styles/Home.module.css";
import styles from "../../styles/Home.module.css";
import SendIcon from "@mui/icons-material/Send";

// npm i @emailjs/browser

interface Props {
  openSnackBar: () => void;
}

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setError(true);
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_1bc78oi",
          "template_tis04xh",
          form.current,
          "Kox8GYR9pMDNYETzW"
        )
        .then(
          (result) => {
            console.log(result.text);
            // setError(false);
            console.log("message sent");
          },
          // tried to send, not successful
          (error) => {
            console.log(error.text);
            setError(true);
          }
        );
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (error) {
      props.openSnackBar();
    }
  }, [error]);
  // varje gång error ändras från true and false vice versa

  return (
    <Grid sx={{ width: "100%" }}>
      <Typography variant="h3">Kontakt form</Typography>

      <form ref={form} onSubmit={sendEmail} className="form">
        <Typography sx={{ marginTop: "1rem" }}>Namn</Typography>
        <TextField
          fullWidth
          id="fullWidth"
          size="small"
          type="text"
          name="user_name"
        />
        <Typography sx={{ marginTop: "1rem" }}>Email</Typography>
        <TextField
          fullWidth
          id="fullWidth"
          size="small"
          type="email"
          name="user_email"
        />
        <Typography sx={{ marginTop: "1rem" }}>Meddelande</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          fullWidth
          rows={4}
          // defaultValue="Default Value"
          name="message"
        />
        <Button
          type="submit"
          defaultValue="Send"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ marginTop: "2rem", cursor: "pointer" }}
        >
          Skicka
        </Button>
      </form>
    </Grid>
  );
};

export default Contact;

// Styles
// const StyledContactForm = styled.div`
//   width: 400px;
//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;
//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);
//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }
//     label {
//       margin-top: 1rem;
//     }
//     input[type="submit"] {
//       margin-top: 2rem;
//       cursor: pointer;
//       background: rgb(249, 105, 14);
//       color: white;
//       border: none;
//     }
//   }
// `;
