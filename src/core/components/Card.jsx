import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

const CustomCard = ({
  sx,
  header,
  content,
  actions,
  headerTitle,
  subHeader,
  headerAction,
}) => {
  return (
    <Card sx={sx}>
      {header ? (
        <CardHeader
          title={headerTitle}
          subHeader={subHeader}
          action={headerAction}
          style={{ paddingBottom: "0px" }}
        />
      ) : (
        <></>
      )}
      <CardContent style={{ padding: "0px 16px" }}>{content}</CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  );
};

export default CustomCard;
