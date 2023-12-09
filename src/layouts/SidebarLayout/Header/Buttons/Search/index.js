import { forwardRef, useState } from 'react';
import {
  Avatar,
  Link,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  lighten,
  List,
  ListItem,
  ListItemAvatar,
  TextField,
  Tooltip,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Hidden
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import FindInPageTwoToneIcon from '@mui/icons-material/FindInPageTwoTone';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`
);

const SearchInputWrapper = styled(TextField)(
  ({ theme }) => `
    background: ${theme.colors.alpha.white[100]};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
`
);

const DialogTitleWrapper = styled(DialogTitle)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(3)}
`
);



  const dummyProfiles = [
    {
      employeeId: '005',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '006',
      name: 'Panashe Budzinike',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'panashebudzinike@gmail.com',
      phone: '0719879553',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '006',
      name: 'Panashe Budzinike',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'panashebudzinike@gmail.com',
      phone: '0719879553',
      hireDate: '2022-01-15T12:00:00Z'
    },
    {
      employeeId: '005',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '401',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '031',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

    {
      employeeId: '041',
      name: 'John Doe',
      position: 'Software Engineer',
      department: 'Engineering',
      skills: ['JavaScript', 'React', 'Node.js'],
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      hireDate: '2022-01-15T12:00:00Z'
    },

  ];
function HeaderSearch() {
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);

    if (event.target.value) {
      setOpenSearchResults(true);
    } else {
      setOpenSearchResults(false);
    }
  };

  return (
    <>
      <Tooltip arrow title="Search">
        <IconButton color="primary" onClick={() => setOpenSearchResults(true)}>
          <SearchTwoToneIcon />
        </IconButton>
      </Tooltip>

      <DialogWrapper
        open={openSearchResults}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        fullWidth
        scroll="paper"
        onClose={() => setOpenSearchResults(false)}
      >
        <DialogTitleWrapper>
          <SearchInputWrapper
            value={searchValue}
            autoFocus
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchTwoToneIcon />
                </InputAdornment>
              )
            }}
            placeholder="Search profiles here..."
            fullWidth
            label="Search"
          />
        </DialogTitleWrapper>
        <Divider />

        {openSearchResults && (
          <DialogContent>
            <Box
              sx={{ pt: 0, pb: 1 }}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="body2" component="span">
                Search results for{' '}
                <Typography
                  sx={{ fontWeight: 'bold' }}
                  variant="body1"
                  component="span"
                >
                  {searchValue}
                </Typography>
              </Typography>
              <Link href="#" variant="body2" underline="hover">
                Advanced search
              </Link>
            </Box>
            <Divider sx={{ my: 1 }} />
            <List disablePadding>
              {dummyProfiles
                .filter(
                  (profile) =>
                    profile.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    profile.email.toLowerCase().includes(searchValue.toLowerCase())
                    
                )
                .map((profile) => (
                  <ListItem key={profile.id} button>
                    <Hidden smDown>
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            background: (theme) => theme.palette.secondary.main
                          }}
                        >
                          <FindInPageTwoToneIcon />
                        </Avatar>
                      </ListItemAvatar>
                    </Hidden>
                    <Box flex="1">
                      <Box display="flex" justifyContent="space-between">
                        <Link
                          href="#"
                          underline="hover"
                          sx={{ fontWeight: 'bold' }}
                          variant="body2"
                        >
                          {profile.name}
                        </Link>
                      </Box>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          color: (theme) =>
                            lighten(theme.palette.secondary.main, 0.5)
                        }}
                      >
                        {profile.email}||  {profile.department}|| {profile.position} || {profile.phone}
                      </Typography>
                    </Box>
                    <ChevronRightTwoToneIcon />
                  </ListItem>
                ))}
            </List>
            <Divider sx={{ mt: 1, mb: 2 }} />
            <Box sx={{ textAlign: 'center' }}>
              <Button color="primary" onClick={() => setOpenSearchResults(false)}>
                Close Search Results
              </Button>
            </Box>
          </DialogContent>
        )}
      </DialogWrapper>
    </>
  );
}

export default HeaderSearch;
