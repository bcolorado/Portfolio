import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { darkTheme } from "../../utils/Themes";
import { Avatar } from "@mui/material";

export const QuoteCard = ({ quote, author, source }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        mt: 5,
        position: "absolute",
        transform: "translate(0%, -100%)",
        bgcolor: "rgba(17, 25, 40, 0.83)",
        boxShadow: "0 0 10px 1px rgba(230, 76, 76, 0.3)",
        border: "2px solid rgba(230, 76, 76, 0.3)",
        overflow: "visible",
      }}
    >
      <CardHeader
        avatar={
          <Avatar  sx={{ bgcolor: 'rgba(17, 25, 40, 0.83)', position:'absolute', transform: "translate(0%, -100%)"}}>
            <FormatQuoteIcon />
          </Avatar>
        }
        titleTypographyProps={{ variant: "h6" }}
        style={{ paddingBottom: 0, color: darkTheme.text_primary }}
      />
      <CardContent>
        <Typography
          variant="body2"
          fontSize={16}
          color={darkTheme.text_primary + 99}
          gutterBottom
          style={{ whiteSpace: "pre-line" }}
        >
          {quote}
        </Typography>
        <Typography
          variant="subtitle2"
          fontSize={16}
          color={darkTheme.text_primary}
        >
          — {author}, {source}
        </Typography>
      </CardContent>
    </Card>
  );
};
