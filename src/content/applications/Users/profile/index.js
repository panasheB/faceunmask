import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { useLocation } from 'react-router-dom';
import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';

import UserSettings from 'src/content/applications/Users/settings'


function ManagementUserProfile() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location?.search);
  const encodedData = searchParams?.get('data');
  const decodedData = encodedData ? JSON.parse(decodeURIComponent(encodedData)) : null;

  console.log(decodedData);
  // const siteName = encodedSiteName ? decodeURIComponent(encodedSiteName) : null;
  const user = {
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: '465'
  };


  return (
    <>
      <Helmet>
        <title>Profile Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} profile={decodedData}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity profile={decodedData} />
          </Grid>

         

          
        </Grid>
      </Container>

      <Container  maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="stretch"
          spacing={3}
        >
          
          
          <Grid item xs={16} md={16}>
            <UserSettings profile={decodedData} />
          </Grid>

          
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
