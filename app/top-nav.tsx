import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Box, Stack } from '@mui/system';
import { IconButton, SvgIcon, TextField, Tooltip } from '@mui/material';
// TODO: use redux
// import { searchData } from '@/lib/data';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = () => {
  let debounceTimer: NodeJS.Timeout; // TODO fix this with 'Timeout' type
  const onSearchQueryChanged = (value: string) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      console.log('onSearchQueryChanged', value);
      if (value) {
        // TODO: use redux
        // searchData(value);
      }
    }, 300);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <TextField
              id="standard-basic"
              label="Search Query"
              variant="standard"
              onChange={event => onSearchQueryChanged(event.target.value)}
            />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
