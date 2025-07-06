import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

const CustomCard = ({
  sx,
  header,
  content,
  actions,
  headerTitle,
  subHeader,
  headerAction,
  styleCard,
  styleContent
}) => {
  return (
    <Card sx={sx}>
      {header ? (
        <CardHeader
          title={headerTitle}
          subHeader={subHeader}
          action={headerAction}
          style={styleCard}
        />
      ) : (
        <></>
      )}
      <CardContent style={styleContent}>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

export default CustomCard;
