import { Typography, Button, Grid } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useState } from 'react';
import { Drawer,Space } from 'antd';
import AddProfile from './AddProfile';

function PageHeader() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="Add Profile"
        width={700}
        style={{ top: '15%' }}
        onClose={onClose}
        open={open}
        extra={
          <Space>

            <Button
          onClick={onClose}
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
           
          >
           Cancel
          </Button>
            <Button type="primary">OK</Button>
          </Space>
        }
      >
        {/* <AddExpert /> */}

      <AddProfile/>
      </Drawer>

      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h3" gutterBottom>
            Active Profiles
          </Typography>
          <Typography variant="subtitle2">
            These are the active registered profiles
          </Typography>
        </Grid>
        <Grid item>
          <Button
          onClick={showDrawer}
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Create Profile
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default PageHeader;
