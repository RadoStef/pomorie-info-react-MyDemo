import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { headerStyles } from '../HeaderSection/styles';
import { HomeButton } from '../UI/HomeButton';

export const Breadcrumb = (props) => {
  return (
    <Container sx={headerStyles.breadCrumbs} maxWidth="xl">
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <HomeButton/> {props.location}
        {props.backLink}
      </Box>
    </Container>
  );
};
