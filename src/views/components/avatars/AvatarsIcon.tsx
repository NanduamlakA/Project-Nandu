// ** MUI Imports
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar';

const AvatarsIcon = () => {
  return (
    <Box className="demo-space-x" sx={{ display: 'flex' }}>
      <Avatar>
        <Icon icon="tabler:folder" />
      </Avatar>
      <CustomAvatar color="success">
        <Icon icon="tabler:refresh" />
      </CustomAvatar>
      <CustomAvatar skin="light" color="info">
        <Icon icon="tabler:circle-check" />
      </CustomAvatar>
    </Box>
  );
};

export default AvatarsIcon;
